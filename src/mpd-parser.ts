import { parse } from "mpd-parser";

export const getParsedManifest = async (manifestUri: string) => {
  const manifestResponse = await fetch(manifestUri);
  const manifest = await manifestResponse.text();

  const parsedManifest = parse(manifest);

  const codecs = parsedManifest.playlists[0].attributes.CODECS;
  const segments = parsedManifest.playlists[0].segments.map(
    (segment: any) => `./media/${segment.uri}`
  );
  const initializationSegment = `./media/${parsedManifest.playlists[0].segments[0].map.uri}`;

  return { codecs, segments, initializationSegment };
};
