import { getParsedManifest } from "./src/mpd-parser";

const handleWebVTTTextTracks = async (video: HTMLVideoElement) => {
  const fetchSubtitles = async (subtitlesURL: string) => {
    const subtitlesResponse = await fetch(subtitlesURL);
    return subtitlesResponse.text();
  };

  const subtitles = await fetchSubtitles("./media/subtitles.vtt");

  function parseWebVTT(vttString: string) {
    // Split the VTT string into lines
    let lines = vttString.split("\n");

    // Regular expression to match the cue timings
    const cuePattern =
      /(\d{2}:\d{2}:\d{2}\.\d{3}) --> (\d{2}:\d{2}:\d{2}\.\d{3})/;

    // Array to hold all our cues
    let cues: any = [];
    let currentCue: any = null;

    // Process the lines
    lines.forEach((line) => {
      // Check for a cue timing
      let cueMatch = line.match(cuePattern);
      if (cueMatch) {
        // Found a cue timing line
        // Create a new cue object
        currentCue = {
          start: cueMatch[1],
          end: cueMatch[2],
          text: "",
        };
        cues.push(currentCue);
      } else if (currentCue && line.trim()) {
        // Found a cue text line, append to current cue text
        currentCue.text += line.trim() + "\n";
      }
    });

    return cues;
  }

  const cues = parseWebVTT(subtitles);

  const track = video.addTextTrack("subtitles", "English", "en");
  track.mode = "showing"; // The track should be visible

  function convertVttTimeToSeconds(vttTime: string) {
    let splitTime = vttTime.split(":");
    let hours = parseInt(splitTime[0]);
    let minutes = parseInt(splitTime[1]);
    let secondsAndMilliseconds = splitTime[2].split(".");
    let seconds = parseInt(secondsAndMilliseconds[0]);
    let milliseconds = parseInt(secondsAndMilliseconds[1]);
    return hours * 3600 + minutes * 60 + seconds + milliseconds / 1000;
  }

  cues.forEach((cue: any) => {
    const startSeconds = convertVttTimeToSeconds(cue.start);
    const endSeconds = convertVttTimeToSeconds(cue.end);
    const vttCue = new VTTCue(startSeconds, endSeconds, cue.text);
    track.addCue(vttCue);
  });
};

const startPlayback = async () => {
  const video: HTMLVideoElement = document.createElement("video");
  video.style.width = "640px";
  video.setAttribute("controls", "");
  document.getElementsByTagName("body")[0].appendChild(video);

  const { codecs, segments, initializationSegment } = await getParsedManifest(
    "./media/BigBuckBunny.mpd"
  );

  await handleWebVTTTextTracks(video);

  const mp4InitializationUri = initializationSegment;
  const mimeCodec = `video/mp4; codecs="${codecs}"`;

  if (!MediaSource.isTypeSupported(mimeCodec)) {
    console.error("Unsupported media format");
    return;
  }

  const mediaSource: MediaSource = new MediaSource(); // mediaSource.readyState === 'closed'
  const url = window.URL.createObjectURL(mediaSource);
  video.src = url;

  async function getMp4Data(mp4Uri: string): Promise<ArrayBuffer> {
    const mp4Response: Response = await fetch(mp4Uri);
    return mp4Response.arrayBuffer();
  }

  async function onSourceOpen() {
    let i = 0;
    URL.revokeObjectURL(video.src); // Revoke Object URL for garbage collection
    const sourceBuffer: SourceBuffer = mediaSource.addSourceBuffer(mimeCodec);

    sourceBuffer.addEventListener("updateend", async function () {
      if (!sourceBuffer.updating && i !== segments.length) {
        const nextSegmentUri = segments[i];
        const nextSegment = await getMp4Data(nextSegmentUri); // Next segments
        sourceBuffer.appendBuffer(nextSegment);
        i++;
      }
      if (mediaSource.readyState === "open" && i === segments.length) {
        mediaSource.endOfStream();
      }
    });

    const firstSegment = await getMp4Data(mp4InitializationUri); // First segment is here
    sourceBuffer.appendBuffer(firstSegment);
  }

  mediaSource.addEventListener("sourceopen", onSourceOpen.bind(mediaSource));

  video.play();
};

startPlayback();
