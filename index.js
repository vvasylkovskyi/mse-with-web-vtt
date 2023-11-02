/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@videojs/vhs-utils/es/decode-b64-to-uint8-array.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@videojs/vhs-utils/es/decode-b64-to-uint8-array.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ decodeB64ToUint8Array)
/* harmony export */ });
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! global/window */ "./node_modules/global/window.js");
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(global_window__WEBPACK_IMPORTED_MODULE_0__);


var atob = function atob(s) {
  return (global_window__WEBPACK_IMPORTED_MODULE_0___default().atob) ? global_window__WEBPACK_IMPORTED_MODULE_0___default().atob(s) : Buffer.from(s, 'base64').toString('binary');
};

function decodeB64ToUint8Array(b64Text) {
  var decodedString = atob(b64Text);
  var array = new Uint8Array(decodedString.length);

  for (var i = 0; i < decodedString.length; i++) {
    array[i] = decodedString.charCodeAt(i);
  }

  return array;
}

/***/ }),

/***/ "./node_modules/@videojs/vhs-utils/es/media-groups.js":
/*!************************************************************!*\
  !*** ./node_modules/@videojs/vhs-utils/es/media-groups.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   forEachMediaGroup: () => (/* binding */ forEachMediaGroup)
/* harmony export */ });
/**
 * Loops through all supported media groups in master and calls the provided
 * callback for each group
 *
 * @param {Object} master
 *        The parsed master manifest object
 * @param {string[]} groups
 *        The media groups to call the callback for
 * @param {Function} callback
 *        Callback to call for each media group
 */
var forEachMediaGroup = function forEachMediaGroup(master, groups, callback) {
  groups.forEach(function (mediaType) {
    for (var groupKey in master.mediaGroups[mediaType]) {
      for (var labelKey in master.mediaGroups[mediaType][groupKey]) {
        var mediaProperties = master.mediaGroups[mediaType][groupKey][labelKey];
        callback(mediaProperties, mediaType, groupKey, labelKey);
      }
    }
  });
};

/***/ }),

/***/ "./node_modules/@videojs/vhs-utils/es/resolve-url.js":
/*!***********************************************************!*\
  !*** ./node_modules/@videojs/vhs-utils/es/resolve-url.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var url_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url-toolkit */ "./node_modules/url-toolkit/src/url-toolkit.js");
/* harmony import */ var url_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! global/window */ "./node_modules/global/window.js");
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(global_window__WEBPACK_IMPORTED_MODULE_1__);


var DEFAULT_LOCATION = 'http://example.com';

var resolveUrl = function resolveUrl(baseUrl, relativeUrl) {
  // return early if we don't need to resolve
  if (/^[a-z]+:/i.test(relativeUrl)) {
    return relativeUrl;
  } // if baseUrl is a data URI, ignore it and resolve everything relative to window.location


  if (/^data:/.test(baseUrl)) {
    baseUrl = (global_window__WEBPACK_IMPORTED_MODULE_1___default().location) && (global_window__WEBPACK_IMPORTED_MODULE_1___default().location).href || '';
  } // IE11 supports URL but not the URL constructor
  // feature detect the behavior we want


  var nativeURL = typeof (global_window__WEBPACK_IMPORTED_MODULE_1___default().URL) === 'function';
  var protocolLess = /^\/\//.test(baseUrl); // remove location if window.location isn't available (i.e. we're in node)
  // and if baseUrl isn't an absolute url

  var removeLocation = !(global_window__WEBPACK_IMPORTED_MODULE_1___default().location) && !/\/\//i.test(baseUrl); // if the base URL is relative then combine with the current location

  if (nativeURL) {
    baseUrl = new (global_window__WEBPACK_IMPORTED_MODULE_1___default().URL)(baseUrl, (global_window__WEBPACK_IMPORTED_MODULE_1___default().location) || DEFAULT_LOCATION);
  } else if (!/\/\//i.test(baseUrl)) {
    baseUrl = url_toolkit__WEBPACK_IMPORTED_MODULE_0___default().buildAbsoluteURL((global_window__WEBPACK_IMPORTED_MODULE_1___default().location) && (global_window__WEBPACK_IMPORTED_MODULE_1___default().location).href || '', baseUrl);
  }

  if (nativeURL) {
    var newUrl = new URL(relativeUrl, baseUrl); // if we're a protocol-less url, remove the protocol
    // and if we're location-less, remove the location
    // otherwise, return the url unmodified

    if (removeLocation) {
      return newUrl.href.slice(DEFAULT_LOCATION.length);
    } else if (protocolLess) {
      return newUrl.href.slice(newUrl.protocol.length);
    }

    return newUrl.href;
  }

  return url_toolkit__WEBPACK_IMPORTED_MODULE_0___default().buildAbsoluteURL(baseUrl, relativeUrl);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolveUrl);

/***/ }),

/***/ "./node_modules/@xmldom/xmldom/lib/conventions.js":
/*!********************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/conventions.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


/**
 * Ponyfill for `Array.prototype.find` which is only available in ES6 runtimes.
 *
 * Works with anything that has a `length` property and index access properties, including NodeList.
 *
 * @template {unknown} T
 * @param {Array<T> | ({length:number, [number]: T})} list
 * @param {function (item: T, index: number, list:Array<T> | ({length:number, [number]: T})):boolean} predicate
 * @param {Partial<Pick<ArrayConstructor['prototype'], 'find'>>?} ac `Array.prototype` by default,
 * 				allows injecting a custom implementation in tests
 * @returns {T | undefined}
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 * @see https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.find
 */
function find(list, predicate, ac) {
	if (ac === undefined) {
		ac = Array.prototype;
	}
	if (list && typeof ac.find === 'function') {
		return ac.find.call(list, predicate);
	}
	for (var i = 0; i < list.length; i++) {
		if (Object.prototype.hasOwnProperty.call(list, i)) {
			var item = list[i];
			if (predicate.call(undefined, item, i, list)) {
				return item;
			}
		}
	}
}

/**
 * "Shallow freezes" an object to render it immutable.
 * Uses `Object.freeze` if available,
 * otherwise the immutability is only in the type.
 *
 * Is used to create "enum like" objects.
 *
 * @template T
 * @param {T} object the object to freeze
 * @param {Pick<ObjectConstructor, 'freeze'> = Object} oc `Object` by default,
 * 				allows to inject custom object constructor for tests
 * @returns {Readonly<T>}
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
 */
function freeze(object, oc) {
	if (oc === undefined) {
		oc = Object
	}
	return oc && typeof oc.freeze === 'function' ? oc.freeze(object) : object
}

/**
 * Since we can not rely on `Object.assign` we provide a simplified version
 * that is sufficient for our needs.
 *
 * @param {Object} target
 * @param {Object | null | undefined} source
 *
 * @returns {Object} target
 * @throws TypeError if target is not an object
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 * @see https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.assign
 */
function assign(target, source) {
	if (target === null || typeof target !== 'object') {
		throw new TypeError('target is not an object')
	}
	for (var key in source) {
		if (Object.prototype.hasOwnProperty.call(source, key)) {
			target[key] = source[key]
		}
	}
	return target
}

/**
 * All mime types that are allowed as input to `DOMParser.parseFromString`
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString#Argument02 MDN
 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#domparsersupportedtype WHATWG HTML Spec
 * @see DOMParser.prototype.parseFromString
 */
var MIME_TYPE = freeze({
	/**
	 * `text/html`, the only mime type that triggers treating an XML document as HTML.
	 *
	 * @see DOMParser.SupportedType.isHTML
	 * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
	 * @see https://en.wikipedia.org/wiki/HTML Wikipedia
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
	 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring WHATWG HTML Spec
	 */
	HTML: 'text/html',

	/**
	 * Helper method to check a mime type if it indicates an HTML document
	 *
	 * @param {string} [value]
	 * @returns {boolean}
	 *
	 * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
	 * @see https://en.wikipedia.org/wiki/HTML Wikipedia
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
	 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring 	 */
	isHTML: function (value) {
		return value === MIME_TYPE.HTML
	},

	/**
	 * `application/xml`, the standard mime type for XML documents.
	 *
	 * @see https://www.iana.org/assignments/media-types/application/xml IANA MimeType registration
	 * @see https://tools.ietf.org/html/rfc7303#section-9.1 RFC 7303
	 * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
	 */
	XML_APPLICATION: 'application/xml',

	/**
	 * `text/html`, an alias for `application/xml`.
	 *
	 * @see https://tools.ietf.org/html/rfc7303#section-9.2 RFC 7303
	 * @see https://www.iana.org/assignments/media-types/text/xml IANA MimeType registration
	 * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
	 */
	XML_TEXT: 'text/xml',

	/**
	 * `application/xhtml+xml`, indicates an XML document that has the default HTML namespace,
	 * but is parsed as an XML document.
	 *
	 * @see https://www.iana.org/assignments/media-types/application/xhtml+xml IANA MimeType registration
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument WHATWG DOM Spec
	 * @see https://en.wikipedia.org/wiki/XHTML Wikipedia
	 */
	XML_XHTML_APPLICATION: 'application/xhtml+xml',

	/**
	 * `image/svg+xml`,
	 *
	 * @see https://www.iana.org/assignments/media-types/image/svg+xml IANA MimeType registration
	 * @see https://www.w3.org/TR/SVG11/ W3C SVG 1.1
	 * @see https://en.wikipedia.org/wiki/Scalable_Vector_Graphics Wikipedia
	 */
	XML_SVG_IMAGE: 'image/svg+xml',
})

/**
 * Namespaces that are used in this code base.
 *
 * @see http://www.w3.org/TR/REC-xml-names
 */
var NAMESPACE = freeze({
	/**
	 * The XHTML namespace.
	 *
	 * @see http://www.w3.org/1999/xhtml
	 */
	HTML: 'http://www.w3.org/1999/xhtml',

	/**
	 * Checks if `uri` equals `NAMESPACE.HTML`.
	 *
	 * @param {string} [uri]
	 *
	 * @see NAMESPACE.HTML
	 */
	isHTML: function (uri) {
		return uri === NAMESPACE.HTML
	},

	/**
	 * The SVG namespace.
	 *
	 * @see http://www.w3.org/2000/svg
	 */
	SVG: 'http://www.w3.org/2000/svg',

	/**
	 * The `xml:` namespace.
	 *
	 * @see http://www.w3.org/XML/1998/namespace
	 */
	XML: 'http://www.w3.org/XML/1998/namespace',

	/**
	 * The `xmlns:` namespace
	 *
	 * @see https://www.w3.org/2000/xmlns/
	 */
	XMLNS: 'http://www.w3.org/2000/xmlns/',
})

exports.assign = assign;
exports.find = find;
exports.freeze = freeze;
exports.MIME_TYPE = MIME_TYPE;
exports.NAMESPACE = NAMESPACE;


/***/ }),

/***/ "./node_modules/@xmldom/xmldom/lib/dom-parser.js":
/*!*******************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/dom-parser.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var conventions = __webpack_require__(/*! ./conventions */ "./node_modules/@xmldom/xmldom/lib/conventions.js");
var dom = __webpack_require__(/*! ./dom */ "./node_modules/@xmldom/xmldom/lib/dom.js")
var entities = __webpack_require__(/*! ./entities */ "./node_modules/@xmldom/xmldom/lib/entities.js");
var sax = __webpack_require__(/*! ./sax */ "./node_modules/@xmldom/xmldom/lib/sax.js");

var DOMImplementation = dom.DOMImplementation;

var NAMESPACE = conventions.NAMESPACE;

var ParseError = sax.ParseError;
var XMLReader = sax.XMLReader;

/**
 * Normalizes line ending according to https://www.w3.org/TR/xml11/#sec-line-ends:
 *
 * > XML parsed entities are often stored in computer files which,
 * > for editing convenience, are organized into lines.
 * > These lines are typically separated by some combination
 * > of the characters CARRIAGE RETURN (#xD) and LINE FEED (#xA).
 * >
 * > To simplify the tasks of applications, the XML processor must behave
 * > as if it normalized all line breaks in external parsed entities (including the document entity)
 * > on input, before parsing, by translating all of the following to a single #xA character:
 * >
 * > 1. the two-character sequence #xD #xA
 * > 2. the two-character sequence #xD #x85
 * > 3. the single character #x85
 * > 4. the single character #x2028
 * > 5. any #xD character that is not immediately followed by #xA or #x85.
 *
 * @param {string} input
 * @returns {string}
 */
function normalizeLineEndings(input) {
	return input
		.replace(/\r[\n\u0085]/g, '\n')
		.replace(/[\r\u0085\u2028]/g, '\n')
}

/**
 * @typedef Locator
 * @property {number} [columnNumber]
 * @property {number} [lineNumber]
 */

/**
 * @typedef DOMParserOptions
 * @property {DOMHandler} [domBuilder]
 * @property {Function} [errorHandler]
 * @property {(string) => string} [normalizeLineEndings] used to replace line endings before parsing
 * 						defaults to `normalizeLineEndings`
 * @property {Locator} [locator]
 * @property {Record<string, string>} [xmlns]
 *
 * @see normalizeLineEndings
 */

/**
 * The DOMParser interface provides the ability to parse XML or HTML source code
 * from a string into a DOM `Document`.
 *
 * _xmldom is different from the spec in that it allows an `options` parameter,
 * to override the default behavior._
 *
 * @param {DOMParserOptions} [options]
 * @constructor
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser
 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-parsing-and-serialization
 */
function DOMParser(options){
	this.options = options ||{locator:{}};
}

DOMParser.prototype.parseFromString = function(source,mimeType){
	var options = this.options;
	var sax =  new XMLReader();
	var domBuilder = options.domBuilder || new DOMHandler();//contentHandler and LexicalHandler
	var errorHandler = options.errorHandler;
	var locator = options.locator;
	var defaultNSMap = options.xmlns||{};
	var isHTML = /\/x?html?$/.test(mimeType);//mimeType.toLowerCase().indexOf('html') > -1;
  	var entityMap = isHTML ? entities.HTML_ENTITIES : entities.XML_ENTITIES;
	if(locator){
		domBuilder.setDocumentLocator(locator)
	}

	sax.errorHandler = buildErrorHandler(errorHandler,domBuilder,locator);
	sax.domBuilder = options.domBuilder || domBuilder;
	if(isHTML){
		defaultNSMap[''] = NAMESPACE.HTML;
	}
	defaultNSMap.xml = defaultNSMap.xml || NAMESPACE.XML;
	var normalize = options.normalizeLineEndings || normalizeLineEndings;
	if (source && typeof source === 'string') {
		sax.parse(
			normalize(source),
			defaultNSMap,
			entityMap
		)
	} else {
		sax.errorHandler.error('invalid doc source')
	}
	return domBuilder.doc;
}
function buildErrorHandler(errorImpl,domBuilder,locator){
	if(!errorImpl){
		if(domBuilder instanceof DOMHandler){
			return domBuilder;
		}
		errorImpl = domBuilder ;
	}
	var errorHandler = {}
	var isCallback = errorImpl instanceof Function;
	locator = locator||{}
	function build(key){
		var fn = errorImpl[key];
		if(!fn && isCallback){
			fn = errorImpl.length == 2?function(msg){errorImpl(key,msg)}:errorImpl;
		}
		errorHandler[key] = fn && function(msg){
			fn('[xmldom '+key+']\t'+msg+_locator(locator));
		}||function(){};
	}
	build('warning');
	build('error');
	build('fatalError');
	return errorHandler;
}

//console.log('#\n\n\n\n\n\n\n####')
/**
 * +ContentHandler+ErrorHandler
 * +LexicalHandler+EntityResolver2
 * -DeclHandler-DTDHandler
 *
 * DefaultHandler:EntityResolver, DTDHandler, ContentHandler, ErrorHandler
 * DefaultHandler2:DefaultHandler,LexicalHandler, DeclHandler, EntityResolver2
 * @link http://www.saxproject.org/apidoc/org/xml/sax/helpers/DefaultHandler.html
 */
function DOMHandler() {
    this.cdata = false;
}
function position(locator,node){
	node.lineNumber = locator.lineNumber;
	node.columnNumber = locator.columnNumber;
}
/**
 * @see org.xml.sax.ContentHandler#startDocument
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ContentHandler.html
 */
DOMHandler.prototype = {
	startDocument : function() {
    	this.doc = new DOMImplementation().createDocument(null, null, null);
    	if (this.locator) {
        	this.doc.documentURI = this.locator.systemId;
    	}
	},
	startElement:function(namespaceURI, localName, qName, attrs) {
		var doc = this.doc;
	    var el = doc.createElementNS(namespaceURI, qName||localName);
	    var len = attrs.length;
	    appendElement(this, el);
	    this.currentElement = el;

		this.locator && position(this.locator,el)
	    for (var i = 0 ; i < len; i++) {
	        var namespaceURI = attrs.getURI(i);
	        var value = attrs.getValue(i);
	        var qName = attrs.getQName(i);
			var attr = doc.createAttributeNS(namespaceURI, qName);
			this.locator &&position(attrs.getLocator(i),attr);
			attr.value = attr.nodeValue = value;
			el.setAttributeNode(attr)
	    }
	},
	endElement:function(namespaceURI, localName, qName) {
		var current = this.currentElement
		var tagName = current.tagName;
		this.currentElement = current.parentNode;
	},
	startPrefixMapping:function(prefix, uri) {
	},
	endPrefixMapping:function(prefix) {
	},
	processingInstruction:function(target, data) {
	    var ins = this.doc.createProcessingInstruction(target, data);
	    this.locator && position(this.locator,ins)
	    appendElement(this, ins);
	},
	ignorableWhitespace:function(ch, start, length) {
	},
	characters:function(chars, start, length) {
		chars = _toString.apply(this,arguments)
		//console.log(chars)
		if(chars){
			if (this.cdata) {
				var charNode = this.doc.createCDATASection(chars);
			} else {
				var charNode = this.doc.createTextNode(chars);
			}
			if(this.currentElement){
				this.currentElement.appendChild(charNode);
			}else if(/^\s*$/.test(chars)){
				this.doc.appendChild(charNode);
				//process xml
			}
			this.locator && position(this.locator,charNode)
		}
	},
	skippedEntity:function(name) {
	},
	endDocument:function() {
		this.doc.normalize();
	},
	setDocumentLocator:function (locator) {
	    if(this.locator = locator){// && !('lineNumber' in locator)){
	    	locator.lineNumber = 0;
	    }
	},
	//LexicalHandler
	comment:function(chars, start, length) {
		chars = _toString.apply(this,arguments)
	    var comm = this.doc.createComment(chars);
	    this.locator && position(this.locator,comm)
	    appendElement(this, comm);
	},

	startCDATA:function() {
	    //used in characters() methods
	    this.cdata = true;
	},
	endCDATA:function() {
	    this.cdata = false;
	},

	startDTD:function(name, publicId, systemId) {
		var impl = this.doc.implementation;
	    if (impl && impl.createDocumentType) {
	        var dt = impl.createDocumentType(name, publicId, systemId);
	        this.locator && position(this.locator,dt)
	        appendElement(this, dt);
					this.doc.doctype = dt;
	    }
	},
	/**
	 * @see org.xml.sax.ErrorHandler
	 * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
	 */
	warning:function(error) {
		console.warn('[xmldom warning]\t'+error,_locator(this.locator));
	},
	error:function(error) {
		console.error('[xmldom error]\t'+error,_locator(this.locator));
	},
	fatalError:function(error) {
		throw new ParseError(error, this.locator);
	}
}
function _locator(l){
	if(l){
		return '\n@'+(l.systemId ||'')+'#[line:'+l.lineNumber+',col:'+l.columnNumber+']'
	}
}
function _toString(chars,start,length){
	if(typeof chars == 'string'){
		return chars.substr(start,length)
	}else{//java sax connect width xmldom on rhino(what about: "? && !(chars instanceof String)")
		if(chars.length >= start+length || start){
			return new java.lang.String(chars,start,length)+'';
		}
		return chars;
	}
}

/*
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/LexicalHandler.html
 * used method of org.xml.sax.ext.LexicalHandler:
 *  #comment(chars, start, length)
 *  #startCDATA()
 *  #endCDATA()
 *  #startDTD(name, publicId, systemId)
 *
 *
 * IGNORED method of org.xml.sax.ext.LexicalHandler:
 *  #endDTD()
 *  #startEntity(name)
 *  #endEntity(name)
 *
 *
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/DeclHandler.html
 * IGNORED method of org.xml.sax.ext.DeclHandler
 * 	#attributeDecl(eName, aName, type, mode, value)
 *  #elementDecl(name, model)
 *  #externalEntityDecl(name, publicId, systemId)
 *  #internalEntityDecl(name, value)
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/EntityResolver2.html
 * IGNORED method of org.xml.sax.EntityResolver2
 *  #resolveEntity(String name,String publicId,String baseURI,String systemId)
 *  #resolveEntity(publicId, systemId)
 *  #getExternalSubset(name, baseURI)
 * @link http://www.saxproject.org/apidoc/org/xml/sax/DTDHandler.html
 * IGNORED method of org.xml.sax.DTDHandler
 *  #notationDecl(name, publicId, systemId) {};
 *  #unparsedEntityDecl(name, publicId, systemId, notationName) {};
 */
"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g,function(key){
	DOMHandler.prototype[key] = function(){return null}
})

/* Private static helpers treated below as private instance methods, so don't need to add these to the public API; we might use a Relator to also get rid of non-standard public properties */
function appendElement (hander,node) {
    if (!hander.currentElement) {
        hander.doc.appendChild(node);
    } else {
        hander.currentElement.appendChild(node);
    }
}//appendChild and setAttributeNS are preformance key

exports.__DOMHandler = DOMHandler;
exports.normalizeLineEndings = normalizeLineEndings;
exports.DOMParser = DOMParser;


/***/ }),

/***/ "./node_modules/@xmldom/xmldom/lib/dom.js":
/*!************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/dom.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var conventions = __webpack_require__(/*! ./conventions */ "./node_modules/@xmldom/xmldom/lib/conventions.js");

var find = conventions.find;
var NAMESPACE = conventions.NAMESPACE;

/**
 * A prerequisite for `[].filter`, to drop elements that are empty
 * @param {string} input
 * @returns {boolean}
 */
function notEmptyString (input) {
	return input !== ''
}
/**
 * @see https://infra.spec.whatwg.org/#split-on-ascii-whitespace
 * @see https://infra.spec.whatwg.org/#ascii-whitespace
 *
 * @param {string} input
 * @returns {string[]} (can be empty)
 */
function splitOnASCIIWhitespace(input) {
	// U+0009 TAB, U+000A LF, U+000C FF, U+000D CR, U+0020 SPACE
	return input ? input.split(/[\t\n\f\r ]+/).filter(notEmptyString) : []
}

/**
 * Adds element as a key to current if it is not already present.
 *
 * @param {Record<string, boolean | undefined>} current
 * @param {string} element
 * @returns {Record<string, boolean | undefined>}
 */
function orderedSetReducer (current, element) {
	if (!current.hasOwnProperty(element)) {
		current[element] = true;
	}
	return current;
}

/**
 * @see https://infra.spec.whatwg.org/#ordered-set
 * @param {string} input
 * @returns {string[]}
 */
function toOrderedSet(input) {
	if (!input) return [];
	var list = splitOnASCIIWhitespace(input);
	return Object.keys(list.reduce(orderedSetReducer, {}))
}

/**
 * Uses `list.indexOf` to implement something like `Array.prototype.includes`,
 * which we can not rely on being available.
 *
 * @param {any[]} list
 * @returns {function(any): boolean}
 */
function arrayIncludes (list) {
	return function(element) {
		return list && list.indexOf(element) !== -1;
	}
}

function copy(src,dest){
	for(var p in src){
		if (Object.prototype.hasOwnProperty.call(src, p)) {
			dest[p] = src[p];
		}
	}
}

/**
^\w+\.prototype\.([_\w]+)\s*=\s*((?:.*\{\s*?[\r\n][\s\S]*?^})|\S.*?(?=[;\r\n]));?
^\w+\.prototype\.([_\w]+)\s*=\s*(\S.*?(?=[;\r\n]));?
 */
function _extends(Class,Super){
	var pt = Class.prototype;
	if(!(pt instanceof Super)){
		function t(){};
		t.prototype = Super.prototype;
		t = new t();
		copy(pt,t);
		Class.prototype = pt = t;
	}
	if(pt.constructor != Class){
		if(typeof Class != 'function'){
			console.error("unknown Class:"+Class)
		}
		pt.constructor = Class
	}
}

// Node Types
var NodeType = {}
var ELEMENT_NODE                = NodeType.ELEMENT_NODE                = 1;
var ATTRIBUTE_NODE              = NodeType.ATTRIBUTE_NODE              = 2;
var TEXT_NODE                   = NodeType.TEXT_NODE                   = 3;
var CDATA_SECTION_NODE          = NodeType.CDATA_SECTION_NODE          = 4;
var ENTITY_REFERENCE_NODE       = NodeType.ENTITY_REFERENCE_NODE       = 5;
var ENTITY_NODE                 = NodeType.ENTITY_NODE                 = 6;
var PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7;
var COMMENT_NODE                = NodeType.COMMENT_NODE                = 8;
var DOCUMENT_NODE               = NodeType.DOCUMENT_NODE               = 9;
var DOCUMENT_TYPE_NODE          = NodeType.DOCUMENT_TYPE_NODE          = 10;
var DOCUMENT_FRAGMENT_NODE      = NodeType.DOCUMENT_FRAGMENT_NODE      = 11;
var NOTATION_NODE               = NodeType.NOTATION_NODE               = 12;

// ExceptionCode
var ExceptionCode = {}
var ExceptionMessage = {};
var INDEX_SIZE_ERR              = ExceptionCode.INDEX_SIZE_ERR              = ((ExceptionMessage[1]="Index size error"),1);
var DOMSTRING_SIZE_ERR          = ExceptionCode.DOMSTRING_SIZE_ERR          = ((ExceptionMessage[2]="DOMString size error"),2);
var HIERARCHY_REQUEST_ERR       = ExceptionCode.HIERARCHY_REQUEST_ERR       = ((ExceptionMessage[3]="Hierarchy request error"),3);
var WRONG_DOCUMENT_ERR          = ExceptionCode.WRONG_DOCUMENT_ERR          = ((ExceptionMessage[4]="Wrong document"),4);
var INVALID_CHARACTER_ERR       = ExceptionCode.INVALID_CHARACTER_ERR       = ((ExceptionMessage[5]="Invalid character"),5);
var NO_DATA_ALLOWED_ERR         = ExceptionCode.NO_DATA_ALLOWED_ERR         = ((ExceptionMessage[6]="No data allowed"),6);
var NO_MODIFICATION_ALLOWED_ERR = ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = ((ExceptionMessage[7]="No modification allowed"),7);
var NOT_FOUND_ERR               = ExceptionCode.NOT_FOUND_ERR               = ((ExceptionMessage[8]="Not found"),8);
var NOT_SUPPORTED_ERR           = ExceptionCode.NOT_SUPPORTED_ERR           = ((ExceptionMessage[9]="Not supported"),9);
var INUSE_ATTRIBUTE_ERR         = ExceptionCode.INUSE_ATTRIBUTE_ERR         = ((ExceptionMessage[10]="Attribute in use"),10);
//level2
var INVALID_STATE_ERR        	= ExceptionCode.INVALID_STATE_ERR        	= ((ExceptionMessage[11]="Invalid state"),11);
var SYNTAX_ERR               	= ExceptionCode.SYNTAX_ERR               	= ((ExceptionMessage[12]="Syntax error"),12);
var INVALID_MODIFICATION_ERR 	= ExceptionCode.INVALID_MODIFICATION_ERR 	= ((ExceptionMessage[13]="Invalid modification"),13);
var NAMESPACE_ERR            	= ExceptionCode.NAMESPACE_ERR           	= ((ExceptionMessage[14]="Invalid namespace"),14);
var INVALID_ACCESS_ERR       	= ExceptionCode.INVALID_ACCESS_ERR      	= ((ExceptionMessage[15]="Invalid access"),15);

/**
 * DOM Level 2
 * Object DOMException
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * @see http://www.w3.org/TR/REC-DOM-Level-1/ecma-script-language-binding.html
 */
function DOMException(code, message) {
	if(message instanceof Error){
		var error = message;
	}else{
		error = this;
		Error.call(this, ExceptionMessage[code]);
		this.message = ExceptionMessage[code];
		if(Error.captureStackTrace) Error.captureStackTrace(this, DOMException);
	}
	error.code = code;
	if(message) this.message = this.message + ": " + message;
	return error;
};
DOMException.prototype = Error.prototype;
copy(ExceptionCode,DOMException)

/**
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-536297177
 * The NodeList interface provides the abstraction of an ordered collection of nodes, without defining or constraining how this collection is implemented. NodeList objects in the DOM are live.
 * The items in the NodeList are accessible via an integral index, starting from 0.
 */
function NodeList() {
};
NodeList.prototype = {
	/**
	 * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
	 * @standard level1
	 */
	length:0,
	/**
	 * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
	 * @standard level1
	 * @param index  unsigned long
	 *   Index into the collection.
	 * @return Node
	 * 	The node at the indexth position in the NodeList, or null if that is not a valid index.
	 */
	item: function(index) {
		return index >= 0 && index < this.length ? this[index] : null;
	},
	toString:function(isHTML,nodeFilter){
		for(var buf = [], i = 0;i<this.length;i++){
			serializeToString(this[i],buf,isHTML,nodeFilter);
		}
		return buf.join('');
	},
	/**
	 * @private
	 * @param {function (Node):boolean} predicate
	 * @returns {Node[]}
	 */
	filter: function (predicate) {
		return Array.prototype.filter.call(this, predicate);
	},
	/**
	 * @private
	 * @param {Node} item
	 * @returns {number}
	 */
	indexOf: function (item) {
		return Array.prototype.indexOf.call(this, item);
	},
};

function LiveNodeList(node,refresh){
	this._node = node;
	this._refresh = refresh
	_updateLiveList(this);
}
function _updateLiveList(list){
	var inc = list._node._inc || list._node.ownerDocument._inc;
	if (list._inc !== inc) {
		var ls = list._refresh(list._node);
		__set__(list,'length',ls.length);
		if (!list.$$length || ls.length < list.$$length) {
			for (var i = ls.length; i in list; i++) {
				if (Object.prototype.hasOwnProperty.call(list, i)) {
					delete list[i];
				}
			}
		}
		copy(ls,list);
		list._inc = inc;
	}
}
LiveNodeList.prototype.item = function(i){
	_updateLiveList(this);
	return this[i] || null;
}

_extends(LiveNodeList,NodeList);

/**
 * Objects implementing the NamedNodeMap interface are used
 * to represent collections of nodes that can be accessed by name.
 * Note that NamedNodeMap does not inherit from NodeList;
 * NamedNodeMaps are not maintained in any particular order.
 * Objects contained in an object implementing NamedNodeMap may also be accessed by an ordinal index,
 * but this is simply to allow convenient enumeration of the contents of a NamedNodeMap,
 * and does not imply that the DOM specifies an order to these Nodes.
 * NamedNodeMap objects in the DOM are live.
 * used for attributes or DocumentType entities
 */
function NamedNodeMap() {
};

function _findNodeIndex(list,node){
	var i = list.length;
	while(i--){
		if(list[i] === node){return i}
	}
}

function _addNamedNode(el,list,newAttr,oldAttr){
	if(oldAttr){
		list[_findNodeIndex(list,oldAttr)] = newAttr;
	}else{
		list[list.length++] = newAttr;
	}
	if(el){
		newAttr.ownerElement = el;
		var doc = el.ownerDocument;
		if(doc){
			oldAttr && _onRemoveAttribute(doc,el,oldAttr);
			_onAddAttribute(doc,el,newAttr);
		}
	}
}
function _removeNamedNode(el,list,attr){
	//console.log('remove attr:'+attr)
	var i = _findNodeIndex(list,attr);
	if(i>=0){
		var lastIndex = list.length-1
		while(i<lastIndex){
			list[i] = list[++i]
		}
		list.length = lastIndex;
		if(el){
			var doc = el.ownerDocument;
			if(doc){
				_onRemoveAttribute(doc,el,attr);
				attr.ownerElement = null;
			}
		}
	}else{
		throw new DOMException(NOT_FOUND_ERR,new Error(el.tagName+'@'+attr))
	}
}
NamedNodeMap.prototype = {
	length:0,
	item:NodeList.prototype.item,
	getNamedItem: function(key) {
//		if(key.indexOf(':')>0 || key == 'xmlns'){
//			return null;
//		}
		//console.log()
		var i = this.length;
		while(i--){
			var attr = this[i];
			//console.log(attr.nodeName,key)
			if(attr.nodeName == key){
				return attr;
			}
		}
	},
	setNamedItem: function(attr) {
		var el = attr.ownerElement;
		if(el && el!=this._ownerElement){
			throw new DOMException(INUSE_ATTRIBUTE_ERR);
		}
		var oldAttr = this.getNamedItem(attr.nodeName);
		_addNamedNode(this._ownerElement,this,attr,oldAttr);
		return oldAttr;
	},
	/* returns Node */
	setNamedItemNS: function(attr) {// raises: WRONG_DOCUMENT_ERR,NO_MODIFICATION_ALLOWED_ERR,INUSE_ATTRIBUTE_ERR
		var el = attr.ownerElement, oldAttr;
		if(el && el!=this._ownerElement){
			throw new DOMException(INUSE_ATTRIBUTE_ERR);
		}
		oldAttr = this.getNamedItemNS(attr.namespaceURI,attr.localName);
		_addNamedNode(this._ownerElement,this,attr,oldAttr);
		return oldAttr;
	},

	/* returns Node */
	removeNamedItem: function(key) {
		var attr = this.getNamedItem(key);
		_removeNamedNode(this._ownerElement,this,attr);
		return attr;


	},// raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR

	//for level2
	removeNamedItemNS:function(namespaceURI,localName){
		var attr = this.getNamedItemNS(namespaceURI,localName);
		_removeNamedNode(this._ownerElement,this,attr);
		return attr;
	},
	getNamedItemNS: function(namespaceURI, localName) {
		var i = this.length;
		while(i--){
			var node = this[i];
			if(node.localName == localName && node.namespaceURI == namespaceURI){
				return node;
			}
		}
		return null;
	}
};

/**
 * The DOMImplementation interface represents an object providing methods
 * which are not dependent on any particular document.
 * Such an object is returned by the `Document.implementation` property.
 *
 * __The individual methods describe the differences compared to the specs.__
 *
 * @constructor
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation MDN
 * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-102161490 DOM Level 1 Core (Initial)
 * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-102161490 DOM Level 2 Core
 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-102161490 DOM Level 3 Core
 * @see https://dom.spec.whatwg.org/#domimplementation DOM Living Standard
 */
function DOMImplementation() {
}

DOMImplementation.prototype = {
	/**
	 * The DOMImplementation.hasFeature() method returns a Boolean flag indicating if a given feature is supported.
	 * The different implementations fairly diverged in what kind of features were reported.
	 * The latest version of the spec settled to force this method to always return true, where the functionality was accurate and in use.
	 *
	 * @deprecated It is deprecated and modern browsers return true in all cases.
	 *
	 * @param {string} feature
	 * @param {string} [version]
	 * @returns {boolean} always true
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/hasFeature MDN
	 * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-5CED94D7 DOM Level 1 Core
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-hasfeature DOM Living Standard
	 */
	hasFeature: function(feature, version) {
			return true;
	},
	/**
	 * Creates an XML Document object of the specified type with its document element.
	 *
	 * __It behaves slightly different from the description in the living standard__:
	 * - There is no interface/class `XMLDocument`, it returns a `Document` instance.
	 * - `contentType`, `encoding`, `mode`, `origin`, `url` fields are currently not declared.
	 * - this implementation is not validating names or qualified names
	 *   (when parsing XML strings, the SAX parser takes care of that)
	 *
	 * @param {string|null} namespaceURI
	 * @param {string} qualifiedName
	 * @param {DocumentType=null} doctype
	 * @returns {Document}
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument MDN
	 * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocument DOM Level 2 Core (initial)
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument  DOM Level 2 Core
	 *
	 * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
	 * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
	 * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
	 */
	createDocument: function(namespaceURI,  qualifiedName, doctype){
		var doc = new Document();
		doc.implementation = this;
		doc.childNodes = new NodeList();
		doc.doctype = doctype || null;
		if (doctype){
			doc.appendChild(doctype);
		}
		if (qualifiedName){
			var root = doc.createElementNS(namespaceURI, qualifiedName);
			doc.appendChild(root);
		}
		return doc;
	},
	/**
	 * Returns a doctype, with the given `qualifiedName`, `publicId`, and `systemId`.
	 *
	 * __This behavior is slightly different from the in the specs__:
	 * - this implementation is not validating names or qualified names
	 *   (when parsing XML strings, the SAX parser takes care of that)
	 *
	 * @param {string} qualifiedName
	 * @param {string} [publicId]
	 * @param {string} [systemId]
	 * @returns {DocumentType} which can either be used with `DOMImplementation.createDocument` upon document creation
	 * 				  or can be put into the document via methods like `Node.insertBefore()` or `Node.replaceChild()`
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType MDN
	 * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocType DOM Level 2 Core
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype DOM Living Standard
	 *
	 * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
	 * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
	 * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
	 */
	createDocumentType: function(qualifiedName, publicId, systemId){
		var node = new DocumentType();
		node.name = qualifiedName;
		node.nodeName = qualifiedName;
		node.publicId = publicId || '';
		node.systemId = systemId || '';

		return node;
	}
};


/**
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1950641247
 */

function Node() {
};

Node.prototype = {
	firstChild : null,
	lastChild : null,
	previousSibling : null,
	nextSibling : null,
	attributes : null,
	parentNode : null,
	childNodes : null,
	ownerDocument : null,
	nodeValue : null,
	namespaceURI : null,
	prefix : null,
	localName : null,
	// Modified in DOM Level 2:
	insertBefore:function(newChild, refChild){//raises
		return _insertBefore(this,newChild,refChild);
	},
	replaceChild:function(newChild, oldChild){//raises
		_insertBefore(this, newChild,oldChild, assertPreReplacementValidityInDocument);
		if(oldChild){
			this.removeChild(oldChild);
		}
	},
	removeChild:function(oldChild){
		return _removeChild(this,oldChild);
	},
	appendChild:function(newChild){
		return this.insertBefore(newChild,null);
	},
	hasChildNodes:function(){
		return this.firstChild != null;
	},
	cloneNode:function(deep){
		return cloneNode(this.ownerDocument||this,this,deep);
	},
	// Modified in DOM Level 2:
	normalize:function(){
		var child = this.firstChild;
		while(child){
			var next = child.nextSibling;
			if(next && next.nodeType == TEXT_NODE && child.nodeType == TEXT_NODE){
				this.removeChild(next);
				child.appendData(next.data);
			}else{
				child.normalize();
				child = next;
			}
		}
	},
  	// Introduced in DOM Level 2:
	isSupported:function(feature, version){
		return this.ownerDocument.implementation.hasFeature(feature,version);
	},
    // Introduced in DOM Level 2:
    hasAttributes:function(){
    	return this.attributes.length>0;
    },
	/**
	 * Look up the prefix associated to the given namespace URI, starting from this node.
	 * **The default namespace declarations are ignored by this method.**
	 * See Namespace Prefix Lookup for details on the algorithm used by this method.
	 *
	 * _Note: The implementation seems to be incomplete when compared to the algorithm described in the specs._
	 *
	 * @param {string | null} namespaceURI
	 * @returns {string | null}
	 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix
	 * @see https://www.w3.org/TR/DOM-Level-3-Core/namespaces-algorithms.html#lookupNamespacePrefixAlgo
	 * @see https://dom.spec.whatwg.org/#dom-node-lookupprefix
	 * @see https://github.com/xmldom/xmldom/issues/322
	 */
    lookupPrefix:function(namespaceURI){
    	var el = this;
    	while(el){
    		var map = el._nsMap;
    		//console.dir(map)
    		if(map){
    			for(var n in map){
						if (Object.prototype.hasOwnProperty.call(map, n) && map[n] === namespaceURI) {
							return n;
						}
    			}
    		}
    		el = el.nodeType == ATTRIBUTE_NODE?el.ownerDocument : el.parentNode;
    	}
    	return null;
    },
    // Introduced in DOM Level 3:
    lookupNamespaceURI:function(prefix){
    	var el = this;
    	while(el){
    		var map = el._nsMap;
    		//console.dir(map)
    		if(map){
    			if(Object.prototype.hasOwnProperty.call(map, prefix)){
    				return map[prefix] ;
    			}
    		}
    		el = el.nodeType == ATTRIBUTE_NODE?el.ownerDocument : el.parentNode;
    	}
    	return null;
    },
    // Introduced in DOM Level 3:
    isDefaultNamespace:function(namespaceURI){
    	var prefix = this.lookupPrefix(namespaceURI);
    	return prefix == null;
    }
};


function _xmlEncoder(c){
	return c == '<' && '&lt;' ||
         c == '>' && '&gt;' ||
         c == '&' && '&amp;' ||
         c == '"' && '&quot;' ||
         '&#'+c.charCodeAt()+';'
}


copy(NodeType,Node);
copy(NodeType,Node.prototype);

/**
 * @param callback return true for continue,false for break
 * @return boolean true: break visit;
 */
function _visitNode(node,callback){
	if(callback(node)){
		return true;
	}
	if(node = node.firstChild){
		do{
			if(_visitNode(node,callback)){return true}
        }while(node=node.nextSibling)
    }
}



function Document(){
	this.ownerDocument = this;
}

function _onAddAttribute(doc,el,newAttr){
	doc && doc._inc++;
	var ns = newAttr.namespaceURI ;
	if(ns === NAMESPACE.XMLNS){
		//update namespace
		el._nsMap[newAttr.prefix?newAttr.localName:''] = newAttr.value
	}
}

function _onRemoveAttribute(doc,el,newAttr,remove){
	doc && doc._inc++;
	var ns = newAttr.namespaceURI ;
	if(ns === NAMESPACE.XMLNS){
		//update namespace
		delete el._nsMap[newAttr.prefix?newAttr.localName:'']
	}
}

/**
 * Updates `el.childNodes`, updating the indexed items and it's `length`.
 * Passing `newChild` means it will be appended.
 * Otherwise it's assumed that an item has been removed,
 * and `el.firstNode` and it's `.nextSibling` are used
 * to walk the current list of child nodes.
 *
 * @param {Document} doc
 * @param {Node} el
 * @param {Node} [newChild]
 * @private
 */
function _onUpdateChild (doc, el, newChild) {
	if(doc && doc._inc){
		doc._inc++;
		//update childNodes
		var cs = el.childNodes;
		if (newChild) {
			cs[cs.length++] = newChild;
		} else {
			var child = el.firstChild;
			var i = 0;
			while (child) {
				cs[i++] = child;
				child = child.nextSibling;
			}
			cs.length = i;
			delete cs[cs.length];
		}
	}
}

/**
 * Removes the connections between `parentNode` and `child`
 * and any existing `child.previousSibling` or `child.nextSibling`.
 *
 * @see https://github.com/xmldom/xmldom/issues/135
 * @see https://github.com/xmldom/xmldom/issues/145
 *
 * @param {Node} parentNode
 * @param {Node} child
 * @returns {Node} the child that was removed.
 * @private
 */
function _removeChild (parentNode, child) {
	var previous = child.previousSibling;
	var next = child.nextSibling;
	if (previous) {
		previous.nextSibling = next;
	} else {
		parentNode.firstChild = next;
	}
	if (next) {
		next.previousSibling = previous;
	} else {
		parentNode.lastChild = previous;
	}
	child.parentNode = null;
	child.previousSibling = null;
	child.nextSibling = null;
	_onUpdateChild(parentNode.ownerDocument, parentNode);
	return child;
}

/**
 * Returns `true` if `node` can be a parent for insertion.
 * @param {Node} node
 * @returns {boolean}
 */
function hasValidParentNodeType(node) {
	return (
		node &&
		(node.nodeType === Node.DOCUMENT_NODE || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.ELEMENT_NODE)
	);
}

/**
 * Returns `true` if `node` can be inserted according to it's `nodeType`.
 * @param {Node} node
 * @returns {boolean}
 */
function hasInsertableNodeType(node) {
	return (
		node &&
		(isElementNode(node) ||
			isTextNode(node) ||
			isDocTypeNode(node) ||
			node.nodeType === Node.DOCUMENT_FRAGMENT_NODE ||
			node.nodeType === Node.COMMENT_NODE ||
			node.nodeType === Node.PROCESSING_INSTRUCTION_NODE)
	);
}

/**
 * Returns true if `node` is a DOCTYPE node
 * @param {Node} node
 * @returns {boolean}
 */
function isDocTypeNode(node) {
	return node && node.nodeType === Node.DOCUMENT_TYPE_NODE;
}

/**
 * Returns true if the node is an element
 * @param {Node} node
 * @returns {boolean}
 */
function isElementNode(node) {
	return node && node.nodeType === Node.ELEMENT_NODE;
}
/**
 * Returns true if `node` is a text node
 * @param {Node} node
 * @returns {boolean}
 */
function isTextNode(node) {
	return node && node.nodeType === Node.TEXT_NODE;
}

/**
 * Check if en element node can be inserted before `child`, or at the end if child is falsy,
 * according to the presence and position of a doctype node on the same level.
 *
 * @param {Document} doc The document node
 * @param {Node} child the node that would become the nextSibling if the element would be inserted
 * @returns {boolean} `true` if an element can be inserted before child
 * @private
 * https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 */
function isElementInsertionPossible(doc, child) {
	var parentChildNodes = doc.childNodes || [];
	if (find(parentChildNodes, isElementNode) || isDocTypeNode(child)) {
		return false;
	}
	var docTypeNode = find(parentChildNodes, isDocTypeNode);
	return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
}

/**
 * Check if en element node can be inserted before `child`, or at the end if child is falsy,
 * according to the presence and position of a doctype node on the same level.
 *
 * @param {Node} doc The document node
 * @param {Node} child the node that would become the nextSibling if the element would be inserted
 * @returns {boolean} `true` if an element can be inserted before child
 * @private
 * https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 */
function isElementReplacementPossible(doc, child) {
	var parentChildNodes = doc.childNodes || [];

	function hasElementChildThatIsNotChild(node) {
		return isElementNode(node) && node !== child;
	}

	if (find(parentChildNodes, hasElementChildThatIsNotChild)) {
		return false;
	}
	var docTypeNode = find(parentChildNodes, isDocTypeNode);
	return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
}

/**
 * @private
 * Steps 1-5 of the checks before inserting and before replacing a child are the same.
 *
 * @param {Node} parent the parent node to insert `node` into
 * @param {Node} node the node to insert
 * @param {Node=} child the node that should become the `nextSibling` of `node`
 * @returns {Node}
 * @throws DOMException for several node combinations that would create a DOM that is not well-formed.
 * @throws DOMException if `child` is provided but is not a child of `parent`.
 * @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 * @see https://dom.spec.whatwg.org/#concept-node-replace
 */
function assertPreInsertionValidity1to5(parent, node, child) {
	// 1. If `parent` is not a Document, DocumentFragment, or Element node, then throw a "HierarchyRequestError" DOMException.
	if (!hasValidParentNodeType(parent)) {
		throw new DOMException(HIERARCHY_REQUEST_ERR, 'Unexpected parent node type ' + parent.nodeType);
	}
	// 2. If `node` is a host-including inclusive ancestor of `parent`, then throw a "HierarchyRequestError" DOMException.
	// not implemented!
	// 3. If `child` is non-null and its parent is not `parent`, then throw a "NotFoundError" DOMException.
	if (child && child.parentNode !== parent) {
		throw new DOMException(NOT_FOUND_ERR, 'child not in parent');
	}
	if (
		// 4. If `node` is not a DocumentFragment, DocumentType, Element, or CharacterData node, then throw a "HierarchyRequestError" DOMException.
		!hasInsertableNodeType(node) ||
		// 5. If either `node` is a Text node and `parent` is a document,
		// the sax parser currently adds top level text nodes, this will be fixed in 0.9.0
		// || (node.nodeType === Node.TEXT_NODE && parent.nodeType === Node.DOCUMENT_NODE)
		// or `node` is a doctype and `parent` is not a document, then throw a "HierarchyRequestError" DOMException.
		(isDocTypeNode(node) && parent.nodeType !== Node.DOCUMENT_NODE)
	) {
		throw new DOMException(
			HIERARCHY_REQUEST_ERR,
			'Unexpected node type ' + node.nodeType + ' for parent node type ' + parent.nodeType
		);
	}
}

/**
 * @private
 * Step 6 of the checks before inserting and before replacing a child are different.
 *
 * @param {Document} parent the parent node to insert `node` into
 * @param {Node} node the node to insert
 * @param {Node | undefined} child the node that should become the `nextSibling` of `node`
 * @returns {Node}
 * @throws DOMException for several node combinations that would create a DOM that is not well-formed.
 * @throws DOMException if `child` is provided but is not a child of `parent`.
 * @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 * @see https://dom.spec.whatwg.org/#concept-node-replace
 */
function assertPreInsertionValidityInDocument(parent, node, child) {
	var parentChildNodes = parent.childNodes || [];
	var nodeChildNodes = node.childNodes || [];

	// DocumentFragment
	if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
		var nodeChildElements = nodeChildNodes.filter(isElementNode);
		// If node has more than one element child or has a Text node child.
		if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'More than one element or text in fragment');
		}
		// Otherwise, if `node` has one element child and either `parent` has an element child,
		// `child` is a doctype, or `child` is non-null and a doctype is following `child`.
		if (nodeChildElements.length === 1 && !isElementInsertionPossible(parent, child)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'Element in fragment can not be inserted before doctype');
		}
	}
	// Element
	if (isElementNode(node)) {
		// `parent` has an element child, `child` is a doctype,
		// or `child` is non-null and a doctype is following `child`.
		if (!isElementInsertionPossible(parent, child)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'Only one element can be added and only after doctype');
		}
	}
	// DocumentType
	if (isDocTypeNode(node)) {
		// `parent` has a doctype child,
		if (find(parentChildNodes, isDocTypeNode)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'Only one doctype is allowed');
		}
		var parentElementChild = find(parentChildNodes, isElementNode);
		// `child` is non-null and an element is preceding `child`,
		if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'Doctype can only be inserted before an element');
		}
		// or `child` is null and `parent` has an element child.
		if (!child && parentElementChild) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'Doctype can not be appended since element is present');
		}
	}
}

/**
 * @private
 * Step 6 of the checks before inserting and before replacing a child are different.
 *
 * @param {Document} parent the parent node to insert `node` into
 * @param {Node} node the node to insert
 * @param {Node | undefined} child the node that should become the `nextSibling` of `node`
 * @returns {Node}
 * @throws DOMException for several node combinations that would create a DOM that is not well-formed.
 * @throws DOMException if `child` is provided but is not a child of `parent`.
 * @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 * @see https://dom.spec.whatwg.org/#concept-node-replace
 */
function assertPreReplacementValidityInDocument(parent, node, child) {
	var parentChildNodes = parent.childNodes || [];
	var nodeChildNodes = node.childNodes || [];

	// DocumentFragment
	if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
		var nodeChildElements = nodeChildNodes.filter(isElementNode);
		// If `node` has more than one element child or has a Text node child.
		if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'More than one element or text in fragment');
		}
		// Otherwise, if `node` has one element child and either `parent` has an element child that is not `child` or a doctype is following `child`.
		if (nodeChildElements.length === 1 && !isElementReplacementPossible(parent, child)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'Element in fragment can not be inserted before doctype');
		}
	}
	// Element
	if (isElementNode(node)) {
		// `parent` has an element child that is not `child` or a doctype is following `child`.
		if (!isElementReplacementPossible(parent, child)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'Only one element can be added and only after doctype');
		}
	}
	// DocumentType
	if (isDocTypeNode(node)) {
		function hasDoctypeChildThatIsNotChild(node) {
			return isDocTypeNode(node) && node !== child;
		}

		// `parent` has a doctype child that is not `child`,
		if (find(parentChildNodes, hasDoctypeChildThatIsNotChild)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'Only one doctype is allowed');
		}
		var parentElementChild = find(parentChildNodes, isElementNode);
		// or an element is preceding `child`.
		if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'Doctype can only be inserted before an element');
		}
	}
}

/**
 * @private
 * @param {Node} parent the parent node to insert `node` into
 * @param {Node} node the node to insert
 * @param {Node=} child the node that should become the `nextSibling` of `node`
 * @returns {Node}
 * @throws DOMException for several node combinations that would create a DOM that is not well-formed.
 * @throws DOMException if `child` is provided but is not a child of `parent`.
 * @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 */
function _insertBefore(parent, node, child, _inDocumentAssertion) {
	// To ensure pre-insertion validity of a node into a parent before a child, run these steps:
	assertPreInsertionValidity1to5(parent, node, child);

	// If parent is a document, and any of the statements below, switched on the interface node implements,
	// are true, then throw a "HierarchyRequestError" DOMException.
	if (parent.nodeType === Node.DOCUMENT_NODE) {
		(_inDocumentAssertion || assertPreInsertionValidityInDocument)(parent, node, child);
	}

	var cp = node.parentNode;
	if(cp){
		cp.removeChild(node);//remove and update
	}
	if(node.nodeType === DOCUMENT_FRAGMENT_NODE){
		var newFirst = node.firstChild;
		if (newFirst == null) {
			return node;
		}
		var newLast = node.lastChild;
	}else{
		newFirst = newLast = node;
	}
	var pre = child ? child.previousSibling : parent.lastChild;

	newFirst.previousSibling = pre;
	newLast.nextSibling = child;


	if(pre){
		pre.nextSibling = newFirst;
	}else{
		parent.firstChild = newFirst;
	}
	if(child == null){
		parent.lastChild = newLast;
	}else{
		child.previousSibling = newLast;
	}
	do{
		newFirst.parentNode = parent;
	}while(newFirst !== newLast && (newFirst= newFirst.nextSibling))
	_onUpdateChild(parent.ownerDocument||parent, parent);
	//console.log(parent.lastChild.nextSibling == null)
	if (node.nodeType == DOCUMENT_FRAGMENT_NODE) {
		node.firstChild = node.lastChild = null;
	}
	return node;
}

/**
 * Appends `newChild` to `parentNode`.
 * If `newChild` is already connected to a `parentNode` it is first removed from it.
 *
 * @see https://github.com/xmldom/xmldom/issues/135
 * @see https://github.com/xmldom/xmldom/issues/145
 * @param {Node} parentNode
 * @param {Node} newChild
 * @returns {Node}
 * @private
 */
function _appendSingleChild (parentNode, newChild) {
	if (newChild.parentNode) {
		newChild.parentNode.removeChild(newChild);
	}
	newChild.parentNode = parentNode;
	newChild.previousSibling = parentNode.lastChild;
	newChild.nextSibling = null;
	if (newChild.previousSibling) {
		newChild.previousSibling.nextSibling = newChild;
	} else {
		parentNode.firstChild = newChild;
	}
	parentNode.lastChild = newChild;
	_onUpdateChild(parentNode.ownerDocument, parentNode, newChild);
	return newChild;
}

Document.prototype = {
	//implementation : null,
	nodeName :  '#document',
	nodeType :  DOCUMENT_NODE,
	/**
	 * The DocumentType node of the document.
	 *
	 * @readonly
	 * @type DocumentType
	 */
	doctype :  null,
	documentElement :  null,
	_inc : 1,

	insertBefore :  function(newChild, refChild){//raises
		if(newChild.nodeType == DOCUMENT_FRAGMENT_NODE){
			var child = newChild.firstChild;
			while(child){
				var next = child.nextSibling;
				this.insertBefore(child,refChild);
				child = next;
			}
			return newChild;
		}
		_insertBefore(this, newChild, refChild);
		newChild.ownerDocument = this;
		if (this.documentElement === null && newChild.nodeType === ELEMENT_NODE) {
			this.documentElement = newChild;
		}

		return newChild;
	},
	removeChild :  function(oldChild){
		if(this.documentElement == oldChild){
			this.documentElement = null;
		}
		return _removeChild(this,oldChild);
	},
	replaceChild: function (newChild, oldChild) {
		//raises
		_insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
		newChild.ownerDocument = this;
		if (oldChild) {
			this.removeChild(oldChild);
		}
		if (isElementNode(newChild)) {
			this.documentElement = newChild;
		}
	},
	// Introduced in DOM Level 2:
	importNode : function(importedNode,deep){
		return importNode(this,importedNode,deep);
	},
	// Introduced in DOM Level 2:
	getElementById :	function(id){
		var rtv = null;
		_visitNode(this.documentElement,function(node){
			if(node.nodeType == ELEMENT_NODE){
				if(node.getAttribute('id') == id){
					rtv = node;
					return true;
				}
			}
		})
		return rtv;
	},

	/**
	 * The `getElementsByClassName` method of `Document` interface returns an array-like object
	 * of all child elements which have **all** of the given class name(s).
	 *
	 * Returns an empty list if `classeNames` is an empty string or only contains HTML white space characters.
	 *
	 *
	 * Warning: This is a live LiveNodeList.
	 * Changes in the DOM will reflect in the array as the changes occur.
	 * If an element selected by this array no longer qualifies for the selector,
	 * it will automatically be removed. Be aware of this for iteration purposes.
	 *
	 * @param {string} classNames is a string representing the class name(s) to match; multiple class names are separated by (ASCII-)whitespace
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
	 * @see https://dom.spec.whatwg.org/#concept-getelementsbyclassname
	 */
	getElementsByClassName: function(classNames) {
		var classNamesSet = toOrderedSet(classNames)
		return new LiveNodeList(this, function(base) {
			var ls = [];
			if (classNamesSet.length > 0) {
				_visitNode(base.documentElement, function(node) {
					if(node !== base && node.nodeType === ELEMENT_NODE) {
						var nodeClassNames = node.getAttribute('class')
						// can be null if the attribute does not exist
						if (nodeClassNames) {
							// before splitting and iterating just compare them for the most common case
							var matches = classNames === nodeClassNames;
							if (!matches) {
								var nodeClassNamesSet = toOrderedSet(nodeClassNames)
								matches = classNamesSet.every(arrayIncludes(nodeClassNamesSet))
							}
							if(matches) {
								ls.push(node);
							}
						}
					}
				});
			}
			return ls;
		});
	},

	//document factory method:
	createElement :	function(tagName){
		var node = new Element();
		node.ownerDocument = this;
		node.nodeName = tagName;
		node.tagName = tagName;
		node.localName = tagName;
		node.childNodes = new NodeList();
		var attrs	= node.attributes = new NamedNodeMap();
		attrs._ownerElement = node;
		return node;
	},
	createDocumentFragment :	function(){
		var node = new DocumentFragment();
		node.ownerDocument = this;
		node.childNodes = new NodeList();
		return node;
	},
	createTextNode :	function(data){
		var node = new Text();
		node.ownerDocument = this;
		node.appendData(data)
		return node;
	},
	createComment :	function(data){
		var node = new Comment();
		node.ownerDocument = this;
		node.appendData(data)
		return node;
	},
	createCDATASection :	function(data){
		var node = new CDATASection();
		node.ownerDocument = this;
		node.appendData(data)
		return node;
	},
	createProcessingInstruction :	function(target,data){
		var node = new ProcessingInstruction();
		node.ownerDocument = this;
		node.tagName = node.nodeName = node.target = target;
		node.nodeValue = node.data = data;
		return node;
	},
	createAttribute :	function(name){
		var node = new Attr();
		node.ownerDocument	= this;
		node.name = name;
		node.nodeName	= name;
		node.localName = name;
		node.specified = true;
		return node;
	},
	createEntityReference :	function(name){
		var node = new EntityReference();
		node.ownerDocument	= this;
		node.nodeName	= name;
		return node;
	},
	// Introduced in DOM Level 2:
	createElementNS :	function(namespaceURI,qualifiedName){
		var node = new Element();
		var pl = qualifiedName.split(':');
		var attrs	= node.attributes = new NamedNodeMap();
		node.childNodes = new NodeList();
		node.ownerDocument = this;
		node.nodeName = qualifiedName;
		node.tagName = qualifiedName;
		node.namespaceURI = namespaceURI;
		if(pl.length == 2){
			node.prefix = pl[0];
			node.localName = pl[1];
		}else{
			//el.prefix = null;
			node.localName = qualifiedName;
		}
		attrs._ownerElement = node;
		return node;
	},
	// Introduced in DOM Level 2:
	createAttributeNS :	function(namespaceURI,qualifiedName){
		var node = new Attr();
		var pl = qualifiedName.split(':');
		node.ownerDocument = this;
		node.nodeName = qualifiedName;
		node.name = qualifiedName;
		node.namespaceURI = namespaceURI;
		node.specified = true;
		if(pl.length == 2){
			node.prefix = pl[0];
			node.localName = pl[1];
		}else{
			//el.prefix = null;
			node.localName = qualifiedName;
		}
		return node;
	}
};
_extends(Document,Node);


function Element() {
	this._nsMap = {};
};
Element.prototype = {
	nodeType : ELEMENT_NODE,
	hasAttribute : function(name){
		return this.getAttributeNode(name)!=null;
	},
	getAttribute : function(name){
		var attr = this.getAttributeNode(name);
		return attr && attr.value || '';
	},
	getAttributeNode : function(name){
		return this.attributes.getNamedItem(name);
	},
	setAttribute : function(name, value){
		var attr = this.ownerDocument.createAttribute(name);
		attr.value = attr.nodeValue = "" + value;
		this.setAttributeNode(attr)
	},
	removeAttribute : function(name){
		var attr = this.getAttributeNode(name)
		attr && this.removeAttributeNode(attr);
	},

	//four real opeartion method
	appendChild:function(newChild){
		if(newChild.nodeType === DOCUMENT_FRAGMENT_NODE){
			return this.insertBefore(newChild,null);
		}else{
			return _appendSingleChild(this,newChild);
		}
	},
	setAttributeNode : function(newAttr){
		return this.attributes.setNamedItem(newAttr);
	},
	setAttributeNodeNS : function(newAttr){
		return this.attributes.setNamedItemNS(newAttr);
	},
	removeAttributeNode : function(oldAttr){
		//console.log(this == oldAttr.ownerElement)
		return this.attributes.removeNamedItem(oldAttr.nodeName);
	},
	//get real attribute name,and remove it by removeAttributeNode
	removeAttributeNS : function(namespaceURI, localName){
		var old = this.getAttributeNodeNS(namespaceURI, localName);
		old && this.removeAttributeNode(old);
	},

	hasAttributeNS : function(namespaceURI, localName){
		return this.getAttributeNodeNS(namespaceURI, localName)!=null;
	},
	getAttributeNS : function(namespaceURI, localName){
		var attr = this.getAttributeNodeNS(namespaceURI, localName);
		return attr && attr.value || '';
	},
	setAttributeNS : function(namespaceURI, qualifiedName, value){
		var attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
		attr.value = attr.nodeValue = "" + value;
		this.setAttributeNode(attr)
	},
	getAttributeNodeNS : function(namespaceURI, localName){
		return this.attributes.getNamedItemNS(namespaceURI, localName);
	},

	getElementsByTagName : function(tagName){
		return new LiveNodeList(this,function(base){
			var ls = [];
			_visitNode(base,function(node){
				if(node !== base && node.nodeType == ELEMENT_NODE && (tagName === '*' || node.tagName == tagName)){
					ls.push(node);
				}
			});
			return ls;
		});
	},
	getElementsByTagNameNS : function(namespaceURI, localName){
		return new LiveNodeList(this,function(base){
			var ls = [];
			_visitNode(base,function(node){
				if(node !== base && node.nodeType === ELEMENT_NODE && (namespaceURI === '*' || node.namespaceURI === namespaceURI) && (localName === '*' || node.localName == localName)){
					ls.push(node);
				}
			});
			return ls;

		});
	}
};
Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;


_extends(Element,Node);
function Attr() {
};
Attr.prototype.nodeType = ATTRIBUTE_NODE;
_extends(Attr,Node);


function CharacterData() {
};
CharacterData.prototype = {
	data : '',
	substringData : function(offset, count) {
		return this.data.substring(offset, offset+count);
	},
	appendData: function(text) {
		text = this.data+text;
		this.nodeValue = this.data = text;
		this.length = text.length;
	},
	insertData: function(offset,text) {
		this.replaceData(offset,0,text);

	},
	appendChild:function(newChild){
		throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR])
	},
	deleteData: function(offset, count) {
		this.replaceData(offset,count,"");
	},
	replaceData: function(offset, count, text) {
		var start = this.data.substring(0,offset);
		var end = this.data.substring(offset+count);
		text = start + text + end;
		this.nodeValue = this.data = text;
		this.length = text.length;
	}
}
_extends(CharacterData,Node);
function Text() {
};
Text.prototype = {
	nodeName : "#text",
	nodeType : TEXT_NODE,
	splitText : function(offset) {
		var text = this.data;
		var newText = text.substring(offset);
		text = text.substring(0, offset);
		this.data = this.nodeValue = text;
		this.length = text.length;
		var newNode = this.ownerDocument.createTextNode(newText);
		if(this.parentNode){
			this.parentNode.insertBefore(newNode, this.nextSibling);
		}
		return newNode;
	}
}
_extends(Text,CharacterData);
function Comment() {
};
Comment.prototype = {
	nodeName : "#comment",
	nodeType : COMMENT_NODE
}
_extends(Comment,CharacterData);

function CDATASection() {
};
CDATASection.prototype = {
	nodeName : "#cdata-section",
	nodeType : CDATA_SECTION_NODE
}
_extends(CDATASection,CharacterData);


function DocumentType() {
};
DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
_extends(DocumentType,Node);

function Notation() {
};
Notation.prototype.nodeType = NOTATION_NODE;
_extends(Notation,Node);

function Entity() {
};
Entity.prototype.nodeType = ENTITY_NODE;
_extends(Entity,Node);

function EntityReference() {
};
EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
_extends(EntityReference,Node);

function DocumentFragment() {
};
DocumentFragment.prototype.nodeName =	"#document-fragment";
DocumentFragment.prototype.nodeType =	DOCUMENT_FRAGMENT_NODE;
_extends(DocumentFragment,Node);


function ProcessingInstruction() {
}
ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
_extends(ProcessingInstruction,Node);
function XMLSerializer(){}
XMLSerializer.prototype.serializeToString = function(node,isHtml,nodeFilter){
	return nodeSerializeToString.call(node,isHtml,nodeFilter);
}
Node.prototype.toString = nodeSerializeToString;
function nodeSerializeToString(isHtml,nodeFilter){
	var buf = [];
	var refNode = this.nodeType == 9 && this.documentElement || this;
	var prefix = refNode.prefix;
	var uri = refNode.namespaceURI;

	if(uri && prefix == null){
		//console.log(prefix)
		var prefix = refNode.lookupPrefix(uri);
		if(prefix == null){
			//isHTML = true;
			var visibleNamespaces=[
			{namespace:uri,prefix:null}
			//{namespace:uri,prefix:''}
			]
		}
	}
	serializeToString(this,buf,isHtml,nodeFilter,visibleNamespaces);
	//console.log('###',this.nodeType,uri,prefix,buf.join(''))
	return buf.join('');
}

function needNamespaceDefine(node, isHTML, visibleNamespaces) {
	var prefix = node.prefix || '';
	var uri = node.namespaceURI;
	// According to [Namespaces in XML 1.0](https://www.w3.org/TR/REC-xml-names/#ns-using) ,
	// and more specifically https://www.w3.org/TR/REC-xml-names/#nsc-NoPrefixUndecl :
	// > In a namespace declaration for a prefix [...], the attribute value MUST NOT be empty.
	// in a similar manner [Namespaces in XML 1.1](https://www.w3.org/TR/xml-names11/#ns-using)
	// and more specifically https://www.w3.org/TR/xml-names11/#nsc-NSDeclared :
	// > [...] Furthermore, the attribute value [...] must not be an empty string.
	// so serializing empty namespace value like xmlns:ds="" would produce an invalid XML document.
	if (!uri) {
		return false;
	}
	if (prefix === "xml" && uri === NAMESPACE.XML || uri === NAMESPACE.XMLNS) {
		return false;
	}

	var i = visibleNamespaces.length
	while (i--) {
		var ns = visibleNamespaces[i];
		// get namespace prefix
		if (ns.prefix === prefix) {
			return ns.namespace !== uri;
		}
	}
	return true;
}
/**
 * Well-formed constraint: No < in Attribute Values
 * > The replacement text of any entity referred to directly or indirectly
 * > in an attribute value must not contain a <.
 * @see https://www.w3.org/TR/xml11/#CleanAttrVals
 * @see https://www.w3.org/TR/xml11/#NT-AttValue
 *
 * Literal whitespace other than space that appear in attribute values
 * are serialized as their entity references, so they will be preserved.
 * (In contrast to whitespace literals in the input which are normalized to spaces)
 * @see https://www.w3.org/TR/xml11/#AVNormalize
 * @see https://w3c.github.io/DOM-Parsing/#serializing-an-element-s-attributes
 */
function addSerializedAttribute(buf, qualifiedName, value) {
	buf.push(' ', qualifiedName, '="', value.replace(/[<>&"\t\n\r]/g, _xmlEncoder), '"')
}

function serializeToString(node,buf,isHTML,nodeFilter,visibleNamespaces){
	if (!visibleNamespaces) {
		visibleNamespaces = [];
	}

	if(nodeFilter){
		node = nodeFilter(node);
		if(node){
			if(typeof node == 'string'){
				buf.push(node);
				return;
			}
		}else{
			return;
		}
		//buf.sort.apply(attrs, attributeSorter);
	}

	switch(node.nodeType){
	case ELEMENT_NODE:
		var attrs = node.attributes;
		var len = attrs.length;
		var child = node.firstChild;
		var nodeName = node.tagName;

		isHTML = NAMESPACE.isHTML(node.namespaceURI) || isHTML

		var prefixedNodeName = nodeName
		if (!isHTML && !node.prefix && node.namespaceURI) {
			var defaultNS
			// lookup current default ns from `xmlns` attribute
			for (var ai = 0; ai < attrs.length; ai++) {
				if (attrs.item(ai).name === 'xmlns') {
					defaultNS = attrs.item(ai).value
					break
				}
			}
			if (!defaultNS) {
				// lookup current default ns in visibleNamespaces
				for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
					var namespace = visibleNamespaces[nsi]
					if (namespace.prefix === '' && namespace.namespace === node.namespaceURI) {
						defaultNS = namespace.namespace
						break
					}
				}
			}
			if (defaultNS !== node.namespaceURI) {
				for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
					var namespace = visibleNamespaces[nsi]
					if (namespace.namespace === node.namespaceURI) {
						if (namespace.prefix) {
							prefixedNodeName = namespace.prefix + ':' + nodeName
						}
						break
					}
				}
			}
		}

		buf.push('<', prefixedNodeName);

		for(var i=0;i<len;i++){
			// add namespaces for attributes
			var attr = attrs.item(i);
			if (attr.prefix == 'xmlns') {
				visibleNamespaces.push({ prefix: attr.localName, namespace: attr.value });
			}else if(attr.nodeName == 'xmlns'){
				visibleNamespaces.push({ prefix: '', namespace: attr.value });
			}
		}

		for(var i=0;i<len;i++){
			var attr = attrs.item(i);
			if (needNamespaceDefine(attr,isHTML, visibleNamespaces)) {
				var prefix = attr.prefix||'';
				var uri = attr.namespaceURI;
				addSerializedAttribute(buf, prefix ? 'xmlns:' + prefix : "xmlns", uri);
				visibleNamespaces.push({ prefix: prefix, namespace:uri });
			}
			serializeToString(attr,buf,isHTML,nodeFilter,visibleNamespaces);
		}

		// add namespace for current node
		if (nodeName === prefixedNodeName && needNamespaceDefine(node, isHTML, visibleNamespaces)) {
			var prefix = node.prefix||'';
			var uri = node.namespaceURI;
			addSerializedAttribute(buf, prefix ? 'xmlns:' + prefix : "xmlns", uri);
			visibleNamespaces.push({ prefix: prefix, namespace:uri });
		}

		if(child || isHTML && !/^(?:meta|link|img|br|hr|input)$/i.test(nodeName)){
			buf.push('>');
			//if is cdata child node
			if(isHTML && /^script$/i.test(nodeName)){
				while(child){
					if(child.data){
						buf.push(child.data);
					}else{
						serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
					}
					child = child.nextSibling;
				}
			}else
			{
				while(child){
					serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
					child = child.nextSibling;
				}
			}
			buf.push('</',prefixedNodeName,'>');
		}else{
			buf.push('/>');
		}
		// remove added visible namespaces
		//visibleNamespaces.length = startVisibleNamespaces;
		return;
	case DOCUMENT_NODE:
	case DOCUMENT_FRAGMENT_NODE:
		var child = node.firstChild;
		while(child){
			serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
			child = child.nextSibling;
		}
		return;
	case ATTRIBUTE_NODE:
		return addSerializedAttribute(buf, node.name, node.value);
	case TEXT_NODE:
		/**
		 * The ampersand character (&) and the left angle bracket (<) must not appear in their literal form,
		 * except when used as markup delimiters, or within a comment, a processing instruction, or a CDATA section.
		 * If they are needed elsewhere, they must be escaped using either numeric character references or the strings
		 * `&amp;` and `&lt;` respectively.
		 * The right angle bracket (>) may be represented using the string " &gt; ", and must, for compatibility,
		 * be escaped using either `&gt;` or a character reference when it appears in the string `]]>` in content,
		 * when that string is not marking the end of a CDATA section.
		 *
		 * In the content of elements, character data is any string of characters
		 * which does not contain the start-delimiter of any markup
		 * and does not include the CDATA-section-close delimiter, `]]>`.
		 *
		 * @see https://www.w3.org/TR/xml/#NT-CharData
		 * @see https://w3c.github.io/DOM-Parsing/#xml-serializing-a-text-node
		 */
		return buf.push(node.data
			.replace(/[<&>]/g,_xmlEncoder)
		);
	case CDATA_SECTION_NODE:
		return buf.push( '<![CDATA[',node.data,']]>');
	case COMMENT_NODE:
		return buf.push( "<!--",node.data,"-->");
	case DOCUMENT_TYPE_NODE:
		var pubid = node.publicId;
		var sysid = node.systemId;
		buf.push('<!DOCTYPE ',node.name);
		if(pubid){
			buf.push(' PUBLIC ', pubid);
			if (sysid && sysid!='.') {
				buf.push(' ', sysid);
			}
			buf.push('>');
		}else if(sysid && sysid!='.'){
			buf.push(' SYSTEM ', sysid, '>');
		}else{
			var sub = node.internalSubset;
			if(sub){
				buf.push(" [",sub,"]");
			}
			buf.push(">");
		}
		return;
	case PROCESSING_INSTRUCTION_NODE:
		return buf.push( "<?",node.target," ",node.data,"?>");
	case ENTITY_REFERENCE_NODE:
		return buf.push( '&',node.nodeName,';');
	//case ENTITY_NODE:
	//case NOTATION_NODE:
	default:
		buf.push('??',node.nodeName);
	}
}
function importNode(doc,node,deep){
	var node2;
	switch (node.nodeType) {
	case ELEMENT_NODE:
		node2 = node.cloneNode(false);
		node2.ownerDocument = doc;
		//var attrs = node2.attributes;
		//var len = attrs.length;
		//for(var i=0;i<len;i++){
			//node2.setAttributeNodeNS(importNode(doc,attrs.item(i),deep));
		//}
	case DOCUMENT_FRAGMENT_NODE:
		break;
	case ATTRIBUTE_NODE:
		deep = true;
		break;
	//case ENTITY_REFERENCE_NODE:
	//case PROCESSING_INSTRUCTION_NODE:
	////case TEXT_NODE:
	//case CDATA_SECTION_NODE:
	//case COMMENT_NODE:
	//	deep = false;
	//	break;
	//case DOCUMENT_NODE:
	//case DOCUMENT_TYPE_NODE:
	//cannot be imported.
	//case ENTITY_NODE:
	//case NOTATION_NODE：
	//can not hit in level3
	//default:throw e;
	}
	if(!node2){
		node2 = node.cloneNode(false);//false
	}
	node2.ownerDocument = doc;
	node2.parentNode = null;
	if(deep){
		var child = node.firstChild;
		while(child){
			node2.appendChild(importNode(doc,child,deep));
			child = child.nextSibling;
		}
	}
	return node2;
}
//
//var _relationMap = {firstChild:1,lastChild:1,previousSibling:1,nextSibling:1,
//					attributes:1,childNodes:1,parentNode:1,documentElement:1,doctype,};
function cloneNode(doc,node,deep){
	var node2 = new node.constructor();
	for (var n in node) {
		if (Object.prototype.hasOwnProperty.call(node, n)) {
			var v = node[n];
			if (typeof v != "object") {
				if (v != node2[n]) {
					node2[n] = v;
				}
			}
		}
	}
	if(node.childNodes){
		node2.childNodes = new NodeList();
	}
	node2.ownerDocument = doc;
	switch (node2.nodeType) {
	case ELEMENT_NODE:
		var attrs	= node.attributes;
		var attrs2	= node2.attributes = new NamedNodeMap();
		var len = attrs.length
		attrs2._ownerElement = node2;
		for(var i=0;i<len;i++){
			node2.setAttributeNode(cloneNode(doc,attrs.item(i),true));
		}
		break;;
	case ATTRIBUTE_NODE:
		deep = true;
	}
	if(deep){
		var child = node.firstChild;
		while(child){
			node2.appendChild(cloneNode(doc,child,deep));
			child = child.nextSibling;
		}
	}
	return node2;
}

function __set__(object,key,value){
	object[key] = value
}
//do dynamic
try{
	if(Object.defineProperty){
		Object.defineProperty(LiveNodeList.prototype,'length',{
			get:function(){
				_updateLiveList(this);
				return this.$$length;
			}
		});

		Object.defineProperty(Node.prototype,'textContent',{
			get:function(){
				return getTextContent(this);
			},

			set:function(data){
				switch(this.nodeType){
				case ELEMENT_NODE:
				case DOCUMENT_FRAGMENT_NODE:
					while(this.firstChild){
						this.removeChild(this.firstChild);
					}
					if(data || String(data)){
						this.appendChild(this.ownerDocument.createTextNode(data));
					}
					break;

				default:
					this.data = data;
					this.value = data;
					this.nodeValue = data;
				}
			}
		})

		function getTextContent(node){
			switch(node.nodeType){
			case ELEMENT_NODE:
			case DOCUMENT_FRAGMENT_NODE:
				var buf = [];
				node = node.firstChild;
				while(node){
					if(node.nodeType!==7 && node.nodeType !==8){
						buf.push(getTextContent(node));
					}
					node = node.nextSibling;
				}
				return buf.join('');
			default:
				return node.nodeValue;
			}
		}

		__set__ = function(object,key,value){
			//console.log(value)
			object['$$'+key] = value
		}
	}
}catch(e){//ie8
}

//if(typeof require == 'function'){
	exports.DocumentType = DocumentType;
	exports.DOMException = DOMException;
	exports.DOMImplementation = DOMImplementation;
	exports.Element = Element;
	exports.Node = Node;
	exports.NodeList = NodeList;
	exports.XMLSerializer = XMLSerializer;
//}


/***/ }),

/***/ "./node_modules/@xmldom/xmldom/lib/entities.js":
/*!*****************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/entities.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var freeze = (__webpack_require__(/*! ./conventions */ "./node_modules/@xmldom/xmldom/lib/conventions.js").freeze);

/**
 * The entities that are predefined in every XML document.
 *
 * @see https://www.w3.org/TR/2006/REC-xml11-20060816/#sec-predefined-ent W3C XML 1.1
 * @see https://www.w3.org/TR/2008/REC-xml-20081126/#sec-predefined-ent W3C XML 1.0
 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Predefined_entities_in_XML Wikipedia
 */
exports.XML_ENTITIES = freeze({
	amp: '&',
	apos: "'",
	gt: '>',
	lt: '<',
	quot: '"',
});

/**
 * A map of all entities that are detected in an HTML document.
 * They contain all entries from `XML_ENTITIES`.
 *
 * @see XML_ENTITIES
 * @see DOMParser.parseFromString
 * @see DOMImplementation.prototype.createHTMLDocument
 * @see https://html.spec.whatwg.org/#named-character-references WHATWG HTML(5) Spec
 * @see https://html.spec.whatwg.org/entities.json JSON
 * @see https://www.w3.org/TR/xml-entity-names/ W3C XML Entity Names
 * @see https://www.w3.org/TR/html4/sgml/entities.html W3C HTML4/SGML
 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Character_entity_references_in_HTML Wikipedia (HTML)
 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Entities_representing_special_characters_in_XHTML Wikpedia (XHTML)
 */
exports.HTML_ENTITIES = freeze({
	Aacute: '\u00C1',
	aacute: '\u00E1',
	Abreve: '\u0102',
	abreve: '\u0103',
	ac: '\u223E',
	acd: '\u223F',
	acE: '\u223E\u0333',
	Acirc: '\u00C2',
	acirc: '\u00E2',
	acute: '\u00B4',
	Acy: '\u0410',
	acy: '\u0430',
	AElig: '\u00C6',
	aelig: '\u00E6',
	af: '\u2061',
	Afr: '\uD835\uDD04',
	afr: '\uD835\uDD1E',
	Agrave: '\u00C0',
	agrave: '\u00E0',
	alefsym: '\u2135',
	aleph: '\u2135',
	Alpha: '\u0391',
	alpha: '\u03B1',
	Amacr: '\u0100',
	amacr: '\u0101',
	amalg: '\u2A3F',
	AMP: '\u0026',
	amp: '\u0026',
	And: '\u2A53',
	and: '\u2227',
	andand: '\u2A55',
	andd: '\u2A5C',
	andslope: '\u2A58',
	andv: '\u2A5A',
	ang: '\u2220',
	ange: '\u29A4',
	angle: '\u2220',
	angmsd: '\u2221',
	angmsdaa: '\u29A8',
	angmsdab: '\u29A9',
	angmsdac: '\u29AA',
	angmsdad: '\u29AB',
	angmsdae: '\u29AC',
	angmsdaf: '\u29AD',
	angmsdag: '\u29AE',
	angmsdah: '\u29AF',
	angrt: '\u221F',
	angrtvb: '\u22BE',
	angrtvbd: '\u299D',
	angsph: '\u2222',
	angst: '\u00C5',
	angzarr: '\u237C',
	Aogon: '\u0104',
	aogon: '\u0105',
	Aopf: '\uD835\uDD38',
	aopf: '\uD835\uDD52',
	ap: '\u2248',
	apacir: '\u2A6F',
	apE: '\u2A70',
	ape: '\u224A',
	apid: '\u224B',
	apos: '\u0027',
	ApplyFunction: '\u2061',
	approx: '\u2248',
	approxeq: '\u224A',
	Aring: '\u00C5',
	aring: '\u00E5',
	Ascr: '\uD835\uDC9C',
	ascr: '\uD835\uDCB6',
	Assign: '\u2254',
	ast: '\u002A',
	asymp: '\u2248',
	asympeq: '\u224D',
	Atilde: '\u00C3',
	atilde: '\u00E3',
	Auml: '\u00C4',
	auml: '\u00E4',
	awconint: '\u2233',
	awint: '\u2A11',
	backcong: '\u224C',
	backepsilon: '\u03F6',
	backprime: '\u2035',
	backsim: '\u223D',
	backsimeq: '\u22CD',
	Backslash: '\u2216',
	Barv: '\u2AE7',
	barvee: '\u22BD',
	Barwed: '\u2306',
	barwed: '\u2305',
	barwedge: '\u2305',
	bbrk: '\u23B5',
	bbrktbrk: '\u23B6',
	bcong: '\u224C',
	Bcy: '\u0411',
	bcy: '\u0431',
	bdquo: '\u201E',
	becaus: '\u2235',
	Because: '\u2235',
	because: '\u2235',
	bemptyv: '\u29B0',
	bepsi: '\u03F6',
	bernou: '\u212C',
	Bernoullis: '\u212C',
	Beta: '\u0392',
	beta: '\u03B2',
	beth: '\u2136',
	between: '\u226C',
	Bfr: '\uD835\uDD05',
	bfr: '\uD835\uDD1F',
	bigcap: '\u22C2',
	bigcirc: '\u25EF',
	bigcup: '\u22C3',
	bigodot: '\u2A00',
	bigoplus: '\u2A01',
	bigotimes: '\u2A02',
	bigsqcup: '\u2A06',
	bigstar: '\u2605',
	bigtriangledown: '\u25BD',
	bigtriangleup: '\u25B3',
	biguplus: '\u2A04',
	bigvee: '\u22C1',
	bigwedge: '\u22C0',
	bkarow: '\u290D',
	blacklozenge: '\u29EB',
	blacksquare: '\u25AA',
	blacktriangle: '\u25B4',
	blacktriangledown: '\u25BE',
	blacktriangleleft: '\u25C2',
	blacktriangleright: '\u25B8',
	blank: '\u2423',
	blk12: '\u2592',
	blk14: '\u2591',
	blk34: '\u2593',
	block: '\u2588',
	bne: '\u003D\u20E5',
	bnequiv: '\u2261\u20E5',
	bNot: '\u2AED',
	bnot: '\u2310',
	Bopf: '\uD835\uDD39',
	bopf: '\uD835\uDD53',
	bot: '\u22A5',
	bottom: '\u22A5',
	bowtie: '\u22C8',
	boxbox: '\u29C9',
	boxDL: '\u2557',
	boxDl: '\u2556',
	boxdL: '\u2555',
	boxdl: '\u2510',
	boxDR: '\u2554',
	boxDr: '\u2553',
	boxdR: '\u2552',
	boxdr: '\u250C',
	boxH: '\u2550',
	boxh: '\u2500',
	boxHD: '\u2566',
	boxHd: '\u2564',
	boxhD: '\u2565',
	boxhd: '\u252C',
	boxHU: '\u2569',
	boxHu: '\u2567',
	boxhU: '\u2568',
	boxhu: '\u2534',
	boxminus: '\u229F',
	boxplus: '\u229E',
	boxtimes: '\u22A0',
	boxUL: '\u255D',
	boxUl: '\u255C',
	boxuL: '\u255B',
	boxul: '\u2518',
	boxUR: '\u255A',
	boxUr: '\u2559',
	boxuR: '\u2558',
	boxur: '\u2514',
	boxV: '\u2551',
	boxv: '\u2502',
	boxVH: '\u256C',
	boxVh: '\u256B',
	boxvH: '\u256A',
	boxvh: '\u253C',
	boxVL: '\u2563',
	boxVl: '\u2562',
	boxvL: '\u2561',
	boxvl: '\u2524',
	boxVR: '\u2560',
	boxVr: '\u255F',
	boxvR: '\u255E',
	boxvr: '\u251C',
	bprime: '\u2035',
	Breve: '\u02D8',
	breve: '\u02D8',
	brvbar: '\u00A6',
	Bscr: '\u212C',
	bscr: '\uD835\uDCB7',
	bsemi: '\u204F',
	bsim: '\u223D',
	bsime: '\u22CD',
	bsol: '\u005C',
	bsolb: '\u29C5',
	bsolhsub: '\u27C8',
	bull: '\u2022',
	bullet: '\u2022',
	bump: '\u224E',
	bumpE: '\u2AAE',
	bumpe: '\u224F',
	Bumpeq: '\u224E',
	bumpeq: '\u224F',
	Cacute: '\u0106',
	cacute: '\u0107',
	Cap: '\u22D2',
	cap: '\u2229',
	capand: '\u2A44',
	capbrcup: '\u2A49',
	capcap: '\u2A4B',
	capcup: '\u2A47',
	capdot: '\u2A40',
	CapitalDifferentialD: '\u2145',
	caps: '\u2229\uFE00',
	caret: '\u2041',
	caron: '\u02C7',
	Cayleys: '\u212D',
	ccaps: '\u2A4D',
	Ccaron: '\u010C',
	ccaron: '\u010D',
	Ccedil: '\u00C7',
	ccedil: '\u00E7',
	Ccirc: '\u0108',
	ccirc: '\u0109',
	Cconint: '\u2230',
	ccups: '\u2A4C',
	ccupssm: '\u2A50',
	Cdot: '\u010A',
	cdot: '\u010B',
	cedil: '\u00B8',
	Cedilla: '\u00B8',
	cemptyv: '\u29B2',
	cent: '\u00A2',
	CenterDot: '\u00B7',
	centerdot: '\u00B7',
	Cfr: '\u212D',
	cfr: '\uD835\uDD20',
	CHcy: '\u0427',
	chcy: '\u0447',
	check: '\u2713',
	checkmark: '\u2713',
	Chi: '\u03A7',
	chi: '\u03C7',
	cir: '\u25CB',
	circ: '\u02C6',
	circeq: '\u2257',
	circlearrowleft: '\u21BA',
	circlearrowright: '\u21BB',
	circledast: '\u229B',
	circledcirc: '\u229A',
	circleddash: '\u229D',
	CircleDot: '\u2299',
	circledR: '\u00AE',
	circledS: '\u24C8',
	CircleMinus: '\u2296',
	CirclePlus: '\u2295',
	CircleTimes: '\u2297',
	cirE: '\u29C3',
	cire: '\u2257',
	cirfnint: '\u2A10',
	cirmid: '\u2AEF',
	cirscir: '\u29C2',
	ClockwiseContourIntegral: '\u2232',
	CloseCurlyDoubleQuote: '\u201D',
	CloseCurlyQuote: '\u2019',
	clubs: '\u2663',
	clubsuit: '\u2663',
	Colon: '\u2237',
	colon: '\u003A',
	Colone: '\u2A74',
	colone: '\u2254',
	coloneq: '\u2254',
	comma: '\u002C',
	commat: '\u0040',
	comp: '\u2201',
	compfn: '\u2218',
	complement: '\u2201',
	complexes: '\u2102',
	cong: '\u2245',
	congdot: '\u2A6D',
	Congruent: '\u2261',
	Conint: '\u222F',
	conint: '\u222E',
	ContourIntegral: '\u222E',
	Copf: '\u2102',
	copf: '\uD835\uDD54',
	coprod: '\u2210',
	Coproduct: '\u2210',
	COPY: '\u00A9',
	copy: '\u00A9',
	copysr: '\u2117',
	CounterClockwiseContourIntegral: '\u2233',
	crarr: '\u21B5',
	Cross: '\u2A2F',
	cross: '\u2717',
	Cscr: '\uD835\uDC9E',
	cscr: '\uD835\uDCB8',
	csub: '\u2ACF',
	csube: '\u2AD1',
	csup: '\u2AD0',
	csupe: '\u2AD2',
	ctdot: '\u22EF',
	cudarrl: '\u2938',
	cudarrr: '\u2935',
	cuepr: '\u22DE',
	cuesc: '\u22DF',
	cularr: '\u21B6',
	cularrp: '\u293D',
	Cup: '\u22D3',
	cup: '\u222A',
	cupbrcap: '\u2A48',
	CupCap: '\u224D',
	cupcap: '\u2A46',
	cupcup: '\u2A4A',
	cupdot: '\u228D',
	cupor: '\u2A45',
	cups: '\u222A\uFE00',
	curarr: '\u21B7',
	curarrm: '\u293C',
	curlyeqprec: '\u22DE',
	curlyeqsucc: '\u22DF',
	curlyvee: '\u22CE',
	curlywedge: '\u22CF',
	curren: '\u00A4',
	curvearrowleft: '\u21B6',
	curvearrowright: '\u21B7',
	cuvee: '\u22CE',
	cuwed: '\u22CF',
	cwconint: '\u2232',
	cwint: '\u2231',
	cylcty: '\u232D',
	Dagger: '\u2021',
	dagger: '\u2020',
	daleth: '\u2138',
	Darr: '\u21A1',
	dArr: '\u21D3',
	darr: '\u2193',
	dash: '\u2010',
	Dashv: '\u2AE4',
	dashv: '\u22A3',
	dbkarow: '\u290F',
	dblac: '\u02DD',
	Dcaron: '\u010E',
	dcaron: '\u010F',
	Dcy: '\u0414',
	dcy: '\u0434',
	DD: '\u2145',
	dd: '\u2146',
	ddagger: '\u2021',
	ddarr: '\u21CA',
	DDotrahd: '\u2911',
	ddotseq: '\u2A77',
	deg: '\u00B0',
	Del: '\u2207',
	Delta: '\u0394',
	delta: '\u03B4',
	demptyv: '\u29B1',
	dfisht: '\u297F',
	Dfr: '\uD835\uDD07',
	dfr: '\uD835\uDD21',
	dHar: '\u2965',
	dharl: '\u21C3',
	dharr: '\u21C2',
	DiacriticalAcute: '\u00B4',
	DiacriticalDot: '\u02D9',
	DiacriticalDoubleAcute: '\u02DD',
	DiacriticalGrave: '\u0060',
	DiacriticalTilde: '\u02DC',
	diam: '\u22C4',
	Diamond: '\u22C4',
	diamond: '\u22C4',
	diamondsuit: '\u2666',
	diams: '\u2666',
	die: '\u00A8',
	DifferentialD: '\u2146',
	digamma: '\u03DD',
	disin: '\u22F2',
	div: '\u00F7',
	divide: '\u00F7',
	divideontimes: '\u22C7',
	divonx: '\u22C7',
	DJcy: '\u0402',
	djcy: '\u0452',
	dlcorn: '\u231E',
	dlcrop: '\u230D',
	dollar: '\u0024',
	Dopf: '\uD835\uDD3B',
	dopf: '\uD835\uDD55',
	Dot: '\u00A8',
	dot: '\u02D9',
	DotDot: '\u20DC',
	doteq: '\u2250',
	doteqdot: '\u2251',
	DotEqual: '\u2250',
	dotminus: '\u2238',
	dotplus: '\u2214',
	dotsquare: '\u22A1',
	doublebarwedge: '\u2306',
	DoubleContourIntegral: '\u222F',
	DoubleDot: '\u00A8',
	DoubleDownArrow: '\u21D3',
	DoubleLeftArrow: '\u21D0',
	DoubleLeftRightArrow: '\u21D4',
	DoubleLeftTee: '\u2AE4',
	DoubleLongLeftArrow: '\u27F8',
	DoubleLongLeftRightArrow: '\u27FA',
	DoubleLongRightArrow: '\u27F9',
	DoubleRightArrow: '\u21D2',
	DoubleRightTee: '\u22A8',
	DoubleUpArrow: '\u21D1',
	DoubleUpDownArrow: '\u21D5',
	DoubleVerticalBar: '\u2225',
	DownArrow: '\u2193',
	Downarrow: '\u21D3',
	downarrow: '\u2193',
	DownArrowBar: '\u2913',
	DownArrowUpArrow: '\u21F5',
	DownBreve: '\u0311',
	downdownarrows: '\u21CA',
	downharpoonleft: '\u21C3',
	downharpoonright: '\u21C2',
	DownLeftRightVector: '\u2950',
	DownLeftTeeVector: '\u295E',
	DownLeftVector: '\u21BD',
	DownLeftVectorBar: '\u2956',
	DownRightTeeVector: '\u295F',
	DownRightVector: '\u21C1',
	DownRightVectorBar: '\u2957',
	DownTee: '\u22A4',
	DownTeeArrow: '\u21A7',
	drbkarow: '\u2910',
	drcorn: '\u231F',
	drcrop: '\u230C',
	Dscr: '\uD835\uDC9F',
	dscr: '\uD835\uDCB9',
	DScy: '\u0405',
	dscy: '\u0455',
	dsol: '\u29F6',
	Dstrok: '\u0110',
	dstrok: '\u0111',
	dtdot: '\u22F1',
	dtri: '\u25BF',
	dtrif: '\u25BE',
	duarr: '\u21F5',
	duhar: '\u296F',
	dwangle: '\u29A6',
	DZcy: '\u040F',
	dzcy: '\u045F',
	dzigrarr: '\u27FF',
	Eacute: '\u00C9',
	eacute: '\u00E9',
	easter: '\u2A6E',
	Ecaron: '\u011A',
	ecaron: '\u011B',
	ecir: '\u2256',
	Ecirc: '\u00CA',
	ecirc: '\u00EA',
	ecolon: '\u2255',
	Ecy: '\u042D',
	ecy: '\u044D',
	eDDot: '\u2A77',
	Edot: '\u0116',
	eDot: '\u2251',
	edot: '\u0117',
	ee: '\u2147',
	efDot: '\u2252',
	Efr: '\uD835\uDD08',
	efr: '\uD835\uDD22',
	eg: '\u2A9A',
	Egrave: '\u00C8',
	egrave: '\u00E8',
	egs: '\u2A96',
	egsdot: '\u2A98',
	el: '\u2A99',
	Element: '\u2208',
	elinters: '\u23E7',
	ell: '\u2113',
	els: '\u2A95',
	elsdot: '\u2A97',
	Emacr: '\u0112',
	emacr: '\u0113',
	empty: '\u2205',
	emptyset: '\u2205',
	EmptySmallSquare: '\u25FB',
	emptyv: '\u2205',
	EmptyVerySmallSquare: '\u25AB',
	emsp: '\u2003',
	emsp13: '\u2004',
	emsp14: '\u2005',
	ENG: '\u014A',
	eng: '\u014B',
	ensp: '\u2002',
	Eogon: '\u0118',
	eogon: '\u0119',
	Eopf: '\uD835\uDD3C',
	eopf: '\uD835\uDD56',
	epar: '\u22D5',
	eparsl: '\u29E3',
	eplus: '\u2A71',
	epsi: '\u03B5',
	Epsilon: '\u0395',
	epsilon: '\u03B5',
	epsiv: '\u03F5',
	eqcirc: '\u2256',
	eqcolon: '\u2255',
	eqsim: '\u2242',
	eqslantgtr: '\u2A96',
	eqslantless: '\u2A95',
	Equal: '\u2A75',
	equals: '\u003D',
	EqualTilde: '\u2242',
	equest: '\u225F',
	Equilibrium: '\u21CC',
	equiv: '\u2261',
	equivDD: '\u2A78',
	eqvparsl: '\u29E5',
	erarr: '\u2971',
	erDot: '\u2253',
	Escr: '\u2130',
	escr: '\u212F',
	esdot: '\u2250',
	Esim: '\u2A73',
	esim: '\u2242',
	Eta: '\u0397',
	eta: '\u03B7',
	ETH: '\u00D0',
	eth: '\u00F0',
	Euml: '\u00CB',
	euml: '\u00EB',
	euro: '\u20AC',
	excl: '\u0021',
	exist: '\u2203',
	Exists: '\u2203',
	expectation: '\u2130',
	ExponentialE: '\u2147',
	exponentiale: '\u2147',
	fallingdotseq: '\u2252',
	Fcy: '\u0424',
	fcy: '\u0444',
	female: '\u2640',
	ffilig: '\uFB03',
	fflig: '\uFB00',
	ffllig: '\uFB04',
	Ffr: '\uD835\uDD09',
	ffr: '\uD835\uDD23',
	filig: '\uFB01',
	FilledSmallSquare: '\u25FC',
	FilledVerySmallSquare: '\u25AA',
	fjlig: '\u0066\u006A',
	flat: '\u266D',
	fllig: '\uFB02',
	fltns: '\u25B1',
	fnof: '\u0192',
	Fopf: '\uD835\uDD3D',
	fopf: '\uD835\uDD57',
	ForAll: '\u2200',
	forall: '\u2200',
	fork: '\u22D4',
	forkv: '\u2AD9',
	Fouriertrf: '\u2131',
	fpartint: '\u2A0D',
	frac12: '\u00BD',
	frac13: '\u2153',
	frac14: '\u00BC',
	frac15: '\u2155',
	frac16: '\u2159',
	frac18: '\u215B',
	frac23: '\u2154',
	frac25: '\u2156',
	frac34: '\u00BE',
	frac35: '\u2157',
	frac38: '\u215C',
	frac45: '\u2158',
	frac56: '\u215A',
	frac58: '\u215D',
	frac78: '\u215E',
	frasl: '\u2044',
	frown: '\u2322',
	Fscr: '\u2131',
	fscr: '\uD835\uDCBB',
	gacute: '\u01F5',
	Gamma: '\u0393',
	gamma: '\u03B3',
	Gammad: '\u03DC',
	gammad: '\u03DD',
	gap: '\u2A86',
	Gbreve: '\u011E',
	gbreve: '\u011F',
	Gcedil: '\u0122',
	Gcirc: '\u011C',
	gcirc: '\u011D',
	Gcy: '\u0413',
	gcy: '\u0433',
	Gdot: '\u0120',
	gdot: '\u0121',
	gE: '\u2267',
	ge: '\u2265',
	gEl: '\u2A8C',
	gel: '\u22DB',
	geq: '\u2265',
	geqq: '\u2267',
	geqslant: '\u2A7E',
	ges: '\u2A7E',
	gescc: '\u2AA9',
	gesdot: '\u2A80',
	gesdoto: '\u2A82',
	gesdotol: '\u2A84',
	gesl: '\u22DB\uFE00',
	gesles: '\u2A94',
	Gfr: '\uD835\uDD0A',
	gfr: '\uD835\uDD24',
	Gg: '\u22D9',
	gg: '\u226B',
	ggg: '\u22D9',
	gimel: '\u2137',
	GJcy: '\u0403',
	gjcy: '\u0453',
	gl: '\u2277',
	gla: '\u2AA5',
	glE: '\u2A92',
	glj: '\u2AA4',
	gnap: '\u2A8A',
	gnapprox: '\u2A8A',
	gnE: '\u2269',
	gne: '\u2A88',
	gneq: '\u2A88',
	gneqq: '\u2269',
	gnsim: '\u22E7',
	Gopf: '\uD835\uDD3E',
	gopf: '\uD835\uDD58',
	grave: '\u0060',
	GreaterEqual: '\u2265',
	GreaterEqualLess: '\u22DB',
	GreaterFullEqual: '\u2267',
	GreaterGreater: '\u2AA2',
	GreaterLess: '\u2277',
	GreaterSlantEqual: '\u2A7E',
	GreaterTilde: '\u2273',
	Gscr: '\uD835\uDCA2',
	gscr: '\u210A',
	gsim: '\u2273',
	gsime: '\u2A8E',
	gsiml: '\u2A90',
	Gt: '\u226B',
	GT: '\u003E',
	gt: '\u003E',
	gtcc: '\u2AA7',
	gtcir: '\u2A7A',
	gtdot: '\u22D7',
	gtlPar: '\u2995',
	gtquest: '\u2A7C',
	gtrapprox: '\u2A86',
	gtrarr: '\u2978',
	gtrdot: '\u22D7',
	gtreqless: '\u22DB',
	gtreqqless: '\u2A8C',
	gtrless: '\u2277',
	gtrsim: '\u2273',
	gvertneqq: '\u2269\uFE00',
	gvnE: '\u2269\uFE00',
	Hacek: '\u02C7',
	hairsp: '\u200A',
	half: '\u00BD',
	hamilt: '\u210B',
	HARDcy: '\u042A',
	hardcy: '\u044A',
	hArr: '\u21D4',
	harr: '\u2194',
	harrcir: '\u2948',
	harrw: '\u21AD',
	Hat: '\u005E',
	hbar: '\u210F',
	Hcirc: '\u0124',
	hcirc: '\u0125',
	hearts: '\u2665',
	heartsuit: '\u2665',
	hellip: '\u2026',
	hercon: '\u22B9',
	Hfr: '\u210C',
	hfr: '\uD835\uDD25',
	HilbertSpace: '\u210B',
	hksearow: '\u2925',
	hkswarow: '\u2926',
	hoarr: '\u21FF',
	homtht: '\u223B',
	hookleftarrow: '\u21A9',
	hookrightarrow: '\u21AA',
	Hopf: '\u210D',
	hopf: '\uD835\uDD59',
	horbar: '\u2015',
	HorizontalLine: '\u2500',
	Hscr: '\u210B',
	hscr: '\uD835\uDCBD',
	hslash: '\u210F',
	Hstrok: '\u0126',
	hstrok: '\u0127',
	HumpDownHump: '\u224E',
	HumpEqual: '\u224F',
	hybull: '\u2043',
	hyphen: '\u2010',
	Iacute: '\u00CD',
	iacute: '\u00ED',
	ic: '\u2063',
	Icirc: '\u00CE',
	icirc: '\u00EE',
	Icy: '\u0418',
	icy: '\u0438',
	Idot: '\u0130',
	IEcy: '\u0415',
	iecy: '\u0435',
	iexcl: '\u00A1',
	iff: '\u21D4',
	Ifr: '\u2111',
	ifr: '\uD835\uDD26',
	Igrave: '\u00CC',
	igrave: '\u00EC',
	ii: '\u2148',
	iiiint: '\u2A0C',
	iiint: '\u222D',
	iinfin: '\u29DC',
	iiota: '\u2129',
	IJlig: '\u0132',
	ijlig: '\u0133',
	Im: '\u2111',
	Imacr: '\u012A',
	imacr: '\u012B',
	image: '\u2111',
	ImaginaryI: '\u2148',
	imagline: '\u2110',
	imagpart: '\u2111',
	imath: '\u0131',
	imof: '\u22B7',
	imped: '\u01B5',
	Implies: '\u21D2',
	in: '\u2208',
	incare: '\u2105',
	infin: '\u221E',
	infintie: '\u29DD',
	inodot: '\u0131',
	Int: '\u222C',
	int: '\u222B',
	intcal: '\u22BA',
	integers: '\u2124',
	Integral: '\u222B',
	intercal: '\u22BA',
	Intersection: '\u22C2',
	intlarhk: '\u2A17',
	intprod: '\u2A3C',
	InvisibleComma: '\u2063',
	InvisibleTimes: '\u2062',
	IOcy: '\u0401',
	iocy: '\u0451',
	Iogon: '\u012E',
	iogon: '\u012F',
	Iopf: '\uD835\uDD40',
	iopf: '\uD835\uDD5A',
	Iota: '\u0399',
	iota: '\u03B9',
	iprod: '\u2A3C',
	iquest: '\u00BF',
	Iscr: '\u2110',
	iscr: '\uD835\uDCBE',
	isin: '\u2208',
	isindot: '\u22F5',
	isinE: '\u22F9',
	isins: '\u22F4',
	isinsv: '\u22F3',
	isinv: '\u2208',
	it: '\u2062',
	Itilde: '\u0128',
	itilde: '\u0129',
	Iukcy: '\u0406',
	iukcy: '\u0456',
	Iuml: '\u00CF',
	iuml: '\u00EF',
	Jcirc: '\u0134',
	jcirc: '\u0135',
	Jcy: '\u0419',
	jcy: '\u0439',
	Jfr: '\uD835\uDD0D',
	jfr: '\uD835\uDD27',
	jmath: '\u0237',
	Jopf: '\uD835\uDD41',
	jopf: '\uD835\uDD5B',
	Jscr: '\uD835\uDCA5',
	jscr: '\uD835\uDCBF',
	Jsercy: '\u0408',
	jsercy: '\u0458',
	Jukcy: '\u0404',
	jukcy: '\u0454',
	Kappa: '\u039A',
	kappa: '\u03BA',
	kappav: '\u03F0',
	Kcedil: '\u0136',
	kcedil: '\u0137',
	Kcy: '\u041A',
	kcy: '\u043A',
	Kfr: '\uD835\uDD0E',
	kfr: '\uD835\uDD28',
	kgreen: '\u0138',
	KHcy: '\u0425',
	khcy: '\u0445',
	KJcy: '\u040C',
	kjcy: '\u045C',
	Kopf: '\uD835\uDD42',
	kopf: '\uD835\uDD5C',
	Kscr: '\uD835\uDCA6',
	kscr: '\uD835\uDCC0',
	lAarr: '\u21DA',
	Lacute: '\u0139',
	lacute: '\u013A',
	laemptyv: '\u29B4',
	lagran: '\u2112',
	Lambda: '\u039B',
	lambda: '\u03BB',
	Lang: '\u27EA',
	lang: '\u27E8',
	langd: '\u2991',
	langle: '\u27E8',
	lap: '\u2A85',
	Laplacetrf: '\u2112',
	laquo: '\u00AB',
	Larr: '\u219E',
	lArr: '\u21D0',
	larr: '\u2190',
	larrb: '\u21E4',
	larrbfs: '\u291F',
	larrfs: '\u291D',
	larrhk: '\u21A9',
	larrlp: '\u21AB',
	larrpl: '\u2939',
	larrsim: '\u2973',
	larrtl: '\u21A2',
	lat: '\u2AAB',
	lAtail: '\u291B',
	latail: '\u2919',
	late: '\u2AAD',
	lates: '\u2AAD\uFE00',
	lBarr: '\u290E',
	lbarr: '\u290C',
	lbbrk: '\u2772',
	lbrace: '\u007B',
	lbrack: '\u005B',
	lbrke: '\u298B',
	lbrksld: '\u298F',
	lbrkslu: '\u298D',
	Lcaron: '\u013D',
	lcaron: '\u013E',
	Lcedil: '\u013B',
	lcedil: '\u013C',
	lceil: '\u2308',
	lcub: '\u007B',
	Lcy: '\u041B',
	lcy: '\u043B',
	ldca: '\u2936',
	ldquo: '\u201C',
	ldquor: '\u201E',
	ldrdhar: '\u2967',
	ldrushar: '\u294B',
	ldsh: '\u21B2',
	lE: '\u2266',
	le: '\u2264',
	LeftAngleBracket: '\u27E8',
	LeftArrow: '\u2190',
	Leftarrow: '\u21D0',
	leftarrow: '\u2190',
	LeftArrowBar: '\u21E4',
	LeftArrowRightArrow: '\u21C6',
	leftarrowtail: '\u21A2',
	LeftCeiling: '\u2308',
	LeftDoubleBracket: '\u27E6',
	LeftDownTeeVector: '\u2961',
	LeftDownVector: '\u21C3',
	LeftDownVectorBar: '\u2959',
	LeftFloor: '\u230A',
	leftharpoondown: '\u21BD',
	leftharpoonup: '\u21BC',
	leftleftarrows: '\u21C7',
	LeftRightArrow: '\u2194',
	Leftrightarrow: '\u21D4',
	leftrightarrow: '\u2194',
	leftrightarrows: '\u21C6',
	leftrightharpoons: '\u21CB',
	leftrightsquigarrow: '\u21AD',
	LeftRightVector: '\u294E',
	LeftTee: '\u22A3',
	LeftTeeArrow: '\u21A4',
	LeftTeeVector: '\u295A',
	leftthreetimes: '\u22CB',
	LeftTriangle: '\u22B2',
	LeftTriangleBar: '\u29CF',
	LeftTriangleEqual: '\u22B4',
	LeftUpDownVector: '\u2951',
	LeftUpTeeVector: '\u2960',
	LeftUpVector: '\u21BF',
	LeftUpVectorBar: '\u2958',
	LeftVector: '\u21BC',
	LeftVectorBar: '\u2952',
	lEg: '\u2A8B',
	leg: '\u22DA',
	leq: '\u2264',
	leqq: '\u2266',
	leqslant: '\u2A7D',
	les: '\u2A7D',
	lescc: '\u2AA8',
	lesdot: '\u2A7F',
	lesdoto: '\u2A81',
	lesdotor: '\u2A83',
	lesg: '\u22DA\uFE00',
	lesges: '\u2A93',
	lessapprox: '\u2A85',
	lessdot: '\u22D6',
	lesseqgtr: '\u22DA',
	lesseqqgtr: '\u2A8B',
	LessEqualGreater: '\u22DA',
	LessFullEqual: '\u2266',
	LessGreater: '\u2276',
	lessgtr: '\u2276',
	LessLess: '\u2AA1',
	lesssim: '\u2272',
	LessSlantEqual: '\u2A7D',
	LessTilde: '\u2272',
	lfisht: '\u297C',
	lfloor: '\u230A',
	Lfr: '\uD835\uDD0F',
	lfr: '\uD835\uDD29',
	lg: '\u2276',
	lgE: '\u2A91',
	lHar: '\u2962',
	lhard: '\u21BD',
	lharu: '\u21BC',
	lharul: '\u296A',
	lhblk: '\u2584',
	LJcy: '\u0409',
	ljcy: '\u0459',
	Ll: '\u22D8',
	ll: '\u226A',
	llarr: '\u21C7',
	llcorner: '\u231E',
	Lleftarrow: '\u21DA',
	llhard: '\u296B',
	lltri: '\u25FA',
	Lmidot: '\u013F',
	lmidot: '\u0140',
	lmoust: '\u23B0',
	lmoustache: '\u23B0',
	lnap: '\u2A89',
	lnapprox: '\u2A89',
	lnE: '\u2268',
	lne: '\u2A87',
	lneq: '\u2A87',
	lneqq: '\u2268',
	lnsim: '\u22E6',
	loang: '\u27EC',
	loarr: '\u21FD',
	lobrk: '\u27E6',
	LongLeftArrow: '\u27F5',
	Longleftarrow: '\u27F8',
	longleftarrow: '\u27F5',
	LongLeftRightArrow: '\u27F7',
	Longleftrightarrow: '\u27FA',
	longleftrightarrow: '\u27F7',
	longmapsto: '\u27FC',
	LongRightArrow: '\u27F6',
	Longrightarrow: '\u27F9',
	longrightarrow: '\u27F6',
	looparrowleft: '\u21AB',
	looparrowright: '\u21AC',
	lopar: '\u2985',
	Lopf: '\uD835\uDD43',
	lopf: '\uD835\uDD5D',
	loplus: '\u2A2D',
	lotimes: '\u2A34',
	lowast: '\u2217',
	lowbar: '\u005F',
	LowerLeftArrow: '\u2199',
	LowerRightArrow: '\u2198',
	loz: '\u25CA',
	lozenge: '\u25CA',
	lozf: '\u29EB',
	lpar: '\u0028',
	lparlt: '\u2993',
	lrarr: '\u21C6',
	lrcorner: '\u231F',
	lrhar: '\u21CB',
	lrhard: '\u296D',
	lrm: '\u200E',
	lrtri: '\u22BF',
	lsaquo: '\u2039',
	Lscr: '\u2112',
	lscr: '\uD835\uDCC1',
	Lsh: '\u21B0',
	lsh: '\u21B0',
	lsim: '\u2272',
	lsime: '\u2A8D',
	lsimg: '\u2A8F',
	lsqb: '\u005B',
	lsquo: '\u2018',
	lsquor: '\u201A',
	Lstrok: '\u0141',
	lstrok: '\u0142',
	Lt: '\u226A',
	LT: '\u003C',
	lt: '\u003C',
	ltcc: '\u2AA6',
	ltcir: '\u2A79',
	ltdot: '\u22D6',
	lthree: '\u22CB',
	ltimes: '\u22C9',
	ltlarr: '\u2976',
	ltquest: '\u2A7B',
	ltri: '\u25C3',
	ltrie: '\u22B4',
	ltrif: '\u25C2',
	ltrPar: '\u2996',
	lurdshar: '\u294A',
	luruhar: '\u2966',
	lvertneqq: '\u2268\uFE00',
	lvnE: '\u2268\uFE00',
	macr: '\u00AF',
	male: '\u2642',
	malt: '\u2720',
	maltese: '\u2720',
	Map: '\u2905',
	map: '\u21A6',
	mapsto: '\u21A6',
	mapstodown: '\u21A7',
	mapstoleft: '\u21A4',
	mapstoup: '\u21A5',
	marker: '\u25AE',
	mcomma: '\u2A29',
	Mcy: '\u041C',
	mcy: '\u043C',
	mdash: '\u2014',
	mDDot: '\u223A',
	measuredangle: '\u2221',
	MediumSpace: '\u205F',
	Mellintrf: '\u2133',
	Mfr: '\uD835\uDD10',
	mfr: '\uD835\uDD2A',
	mho: '\u2127',
	micro: '\u00B5',
	mid: '\u2223',
	midast: '\u002A',
	midcir: '\u2AF0',
	middot: '\u00B7',
	minus: '\u2212',
	minusb: '\u229F',
	minusd: '\u2238',
	minusdu: '\u2A2A',
	MinusPlus: '\u2213',
	mlcp: '\u2ADB',
	mldr: '\u2026',
	mnplus: '\u2213',
	models: '\u22A7',
	Mopf: '\uD835\uDD44',
	mopf: '\uD835\uDD5E',
	mp: '\u2213',
	Mscr: '\u2133',
	mscr: '\uD835\uDCC2',
	mstpos: '\u223E',
	Mu: '\u039C',
	mu: '\u03BC',
	multimap: '\u22B8',
	mumap: '\u22B8',
	nabla: '\u2207',
	Nacute: '\u0143',
	nacute: '\u0144',
	nang: '\u2220\u20D2',
	nap: '\u2249',
	napE: '\u2A70\u0338',
	napid: '\u224B\u0338',
	napos: '\u0149',
	napprox: '\u2249',
	natur: '\u266E',
	natural: '\u266E',
	naturals: '\u2115',
	nbsp: '\u00A0',
	nbump: '\u224E\u0338',
	nbumpe: '\u224F\u0338',
	ncap: '\u2A43',
	Ncaron: '\u0147',
	ncaron: '\u0148',
	Ncedil: '\u0145',
	ncedil: '\u0146',
	ncong: '\u2247',
	ncongdot: '\u2A6D\u0338',
	ncup: '\u2A42',
	Ncy: '\u041D',
	ncy: '\u043D',
	ndash: '\u2013',
	ne: '\u2260',
	nearhk: '\u2924',
	neArr: '\u21D7',
	nearr: '\u2197',
	nearrow: '\u2197',
	nedot: '\u2250\u0338',
	NegativeMediumSpace: '\u200B',
	NegativeThickSpace: '\u200B',
	NegativeThinSpace: '\u200B',
	NegativeVeryThinSpace: '\u200B',
	nequiv: '\u2262',
	nesear: '\u2928',
	nesim: '\u2242\u0338',
	NestedGreaterGreater: '\u226B',
	NestedLessLess: '\u226A',
	NewLine: '\u000A',
	nexist: '\u2204',
	nexists: '\u2204',
	Nfr: '\uD835\uDD11',
	nfr: '\uD835\uDD2B',
	ngE: '\u2267\u0338',
	nge: '\u2271',
	ngeq: '\u2271',
	ngeqq: '\u2267\u0338',
	ngeqslant: '\u2A7E\u0338',
	nges: '\u2A7E\u0338',
	nGg: '\u22D9\u0338',
	ngsim: '\u2275',
	nGt: '\u226B\u20D2',
	ngt: '\u226F',
	ngtr: '\u226F',
	nGtv: '\u226B\u0338',
	nhArr: '\u21CE',
	nharr: '\u21AE',
	nhpar: '\u2AF2',
	ni: '\u220B',
	nis: '\u22FC',
	nisd: '\u22FA',
	niv: '\u220B',
	NJcy: '\u040A',
	njcy: '\u045A',
	nlArr: '\u21CD',
	nlarr: '\u219A',
	nldr: '\u2025',
	nlE: '\u2266\u0338',
	nle: '\u2270',
	nLeftarrow: '\u21CD',
	nleftarrow: '\u219A',
	nLeftrightarrow: '\u21CE',
	nleftrightarrow: '\u21AE',
	nleq: '\u2270',
	nleqq: '\u2266\u0338',
	nleqslant: '\u2A7D\u0338',
	nles: '\u2A7D\u0338',
	nless: '\u226E',
	nLl: '\u22D8\u0338',
	nlsim: '\u2274',
	nLt: '\u226A\u20D2',
	nlt: '\u226E',
	nltri: '\u22EA',
	nltrie: '\u22EC',
	nLtv: '\u226A\u0338',
	nmid: '\u2224',
	NoBreak: '\u2060',
	NonBreakingSpace: '\u00A0',
	Nopf: '\u2115',
	nopf: '\uD835\uDD5F',
	Not: '\u2AEC',
	not: '\u00AC',
	NotCongruent: '\u2262',
	NotCupCap: '\u226D',
	NotDoubleVerticalBar: '\u2226',
	NotElement: '\u2209',
	NotEqual: '\u2260',
	NotEqualTilde: '\u2242\u0338',
	NotExists: '\u2204',
	NotGreater: '\u226F',
	NotGreaterEqual: '\u2271',
	NotGreaterFullEqual: '\u2267\u0338',
	NotGreaterGreater: '\u226B\u0338',
	NotGreaterLess: '\u2279',
	NotGreaterSlantEqual: '\u2A7E\u0338',
	NotGreaterTilde: '\u2275',
	NotHumpDownHump: '\u224E\u0338',
	NotHumpEqual: '\u224F\u0338',
	notin: '\u2209',
	notindot: '\u22F5\u0338',
	notinE: '\u22F9\u0338',
	notinva: '\u2209',
	notinvb: '\u22F7',
	notinvc: '\u22F6',
	NotLeftTriangle: '\u22EA',
	NotLeftTriangleBar: '\u29CF\u0338',
	NotLeftTriangleEqual: '\u22EC',
	NotLess: '\u226E',
	NotLessEqual: '\u2270',
	NotLessGreater: '\u2278',
	NotLessLess: '\u226A\u0338',
	NotLessSlantEqual: '\u2A7D\u0338',
	NotLessTilde: '\u2274',
	NotNestedGreaterGreater: '\u2AA2\u0338',
	NotNestedLessLess: '\u2AA1\u0338',
	notni: '\u220C',
	notniva: '\u220C',
	notnivb: '\u22FE',
	notnivc: '\u22FD',
	NotPrecedes: '\u2280',
	NotPrecedesEqual: '\u2AAF\u0338',
	NotPrecedesSlantEqual: '\u22E0',
	NotReverseElement: '\u220C',
	NotRightTriangle: '\u22EB',
	NotRightTriangleBar: '\u29D0\u0338',
	NotRightTriangleEqual: '\u22ED',
	NotSquareSubset: '\u228F\u0338',
	NotSquareSubsetEqual: '\u22E2',
	NotSquareSuperset: '\u2290\u0338',
	NotSquareSupersetEqual: '\u22E3',
	NotSubset: '\u2282\u20D2',
	NotSubsetEqual: '\u2288',
	NotSucceeds: '\u2281',
	NotSucceedsEqual: '\u2AB0\u0338',
	NotSucceedsSlantEqual: '\u22E1',
	NotSucceedsTilde: '\u227F\u0338',
	NotSuperset: '\u2283\u20D2',
	NotSupersetEqual: '\u2289',
	NotTilde: '\u2241',
	NotTildeEqual: '\u2244',
	NotTildeFullEqual: '\u2247',
	NotTildeTilde: '\u2249',
	NotVerticalBar: '\u2224',
	npar: '\u2226',
	nparallel: '\u2226',
	nparsl: '\u2AFD\u20E5',
	npart: '\u2202\u0338',
	npolint: '\u2A14',
	npr: '\u2280',
	nprcue: '\u22E0',
	npre: '\u2AAF\u0338',
	nprec: '\u2280',
	npreceq: '\u2AAF\u0338',
	nrArr: '\u21CF',
	nrarr: '\u219B',
	nrarrc: '\u2933\u0338',
	nrarrw: '\u219D\u0338',
	nRightarrow: '\u21CF',
	nrightarrow: '\u219B',
	nrtri: '\u22EB',
	nrtrie: '\u22ED',
	nsc: '\u2281',
	nsccue: '\u22E1',
	nsce: '\u2AB0\u0338',
	Nscr: '\uD835\uDCA9',
	nscr: '\uD835\uDCC3',
	nshortmid: '\u2224',
	nshortparallel: '\u2226',
	nsim: '\u2241',
	nsime: '\u2244',
	nsimeq: '\u2244',
	nsmid: '\u2224',
	nspar: '\u2226',
	nsqsube: '\u22E2',
	nsqsupe: '\u22E3',
	nsub: '\u2284',
	nsubE: '\u2AC5\u0338',
	nsube: '\u2288',
	nsubset: '\u2282\u20D2',
	nsubseteq: '\u2288',
	nsubseteqq: '\u2AC5\u0338',
	nsucc: '\u2281',
	nsucceq: '\u2AB0\u0338',
	nsup: '\u2285',
	nsupE: '\u2AC6\u0338',
	nsupe: '\u2289',
	nsupset: '\u2283\u20D2',
	nsupseteq: '\u2289',
	nsupseteqq: '\u2AC6\u0338',
	ntgl: '\u2279',
	Ntilde: '\u00D1',
	ntilde: '\u00F1',
	ntlg: '\u2278',
	ntriangleleft: '\u22EA',
	ntrianglelefteq: '\u22EC',
	ntriangleright: '\u22EB',
	ntrianglerighteq: '\u22ED',
	Nu: '\u039D',
	nu: '\u03BD',
	num: '\u0023',
	numero: '\u2116',
	numsp: '\u2007',
	nvap: '\u224D\u20D2',
	nVDash: '\u22AF',
	nVdash: '\u22AE',
	nvDash: '\u22AD',
	nvdash: '\u22AC',
	nvge: '\u2265\u20D2',
	nvgt: '\u003E\u20D2',
	nvHarr: '\u2904',
	nvinfin: '\u29DE',
	nvlArr: '\u2902',
	nvle: '\u2264\u20D2',
	nvlt: '\u003C\u20D2',
	nvltrie: '\u22B4\u20D2',
	nvrArr: '\u2903',
	nvrtrie: '\u22B5\u20D2',
	nvsim: '\u223C\u20D2',
	nwarhk: '\u2923',
	nwArr: '\u21D6',
	nwarr: '\u2196',
	nwarrow: '\u2196',
	nwnear: '\u2927',
	Oacute: '\u00D3',
	oacute: '\u00F3',
	oast: '\u229B',
	ocir: '\u229A',
	Ocirc: '\u00D4',
	ocirc: '\u00F4',
	Ocy: '\u041E',
	ocy: '\u043E',
	odash: '\u229D',
	Odblac: '\u0150',
	odblac: '\u0151',
	odiv: '\u2A38',
	odot: '\u2299',
	odsold: '\u29BC',
	OElig: '\u0152',
	oelig: '\u0153',
	ofcir: '\u29BF',
	Ofr: '\uD835\uDD12',
	ofr: '\uD835\uDD2C',
	ogon: '\u02DB',
	Ograve: '\u00D2',
	ograve: '\u00F2',
	ogt: '\u29C1',
	ohbar: '\u29B5',
	ohm: '\u03A9',
	oint: '\u222E',
	olarr: '\u21BA',
	olcir: '\u29BE',
	olcross: '\u29BB',
	oline: '\u203E',
	olt: '\u29C0',
	Omacr: '\u014C',
	omacr: '\u014D',
	Omega: '\u03A9',
	omega: '\u03C9',
	Omicron: '\u039F',
	omicron: '\u03BF',
	omid: '\u29B6',
	ominus: '\u2296',
	Oopf: '\uD835\uDD46',
	oopf: '\uD835\uDD60',
	opar: '\u29B7',
	OpenCurlyDoubleQuote: '\u201C',
	OpenCurlyQuote: '\u2018',
	operp: '\u29B9',
	oplus: '\u2295',
	Or: '\u2A54',
	or: '\u2228',
	orarr: '\u21BB',
	ord: '\u2A5D',
	order: '\u2134',
	orderof: '\u2134',
	ordf: '\u00AA',
	ordm: '\u00BA',
	origof: '\u22B6',
	oror: '\u2A56',
	orslope: '\u2A57',
	orv: '\u2A5B',
	oS: '\u24C8',
	Oscr: '\uD835\uDCAA',
	oscr: '\u2134',
	Oslash: '\u00D8',
	oslash: '\u00F8',
	osol: '\u2298',
	Otilde: '\u00D5',
	otilde: '\u00F5',
	Otimes: '\u2A37',
	otimes: '\u2297',
	otimesas: '\u2A36',
	Ouml: '\u00D6',
	ouml: '\u00F6',
	ovbar: '\u233D',
	OverBar: '\u203E',
	OverBrace: '\u23DE',
	OverBracket: '\u23B4',
	OverParenthesis: '\u23DC',
	par: '\u2225',
	para: '\u00B6',
	parallel: '\u2225',
	parsim: '\u2AF3',
	parsl: '\u2AFD',
	part: '\u2202',
	PartialD: '\u2202',
	Pcy: '\u041F',
	pcy: '\u043F',
	percnt: '\u0025',
	period: '\u002E',
	permil: '\u2030',
	perp: '\u22A5',
	pertenk: '\u2031',
	Pfr: '\uD835\uDD13',
	pfr: '\uD835\uDD2D',
	Phi: '\u03A6',
	phi: '\u03C6',
	phiv: '\u03D5',
	phmmat: '\u2133',
	phone: '\u260E',
	Pi: '\u03A0',
	pi: '\u03C0',
	pitchfork: '\u22D4',
	piv: '\u03D6',
	planck: '\u210F',
	planckh: '\u210E',
	plankv: '\u210F',
	plus: '\u002B',
	plusacir: '\u2A23',
	plusb: '\u229E',
	pluscir: '\u2A22',
	plusdo: '\u2214',
	plusdu: '\u2A25',
	pluse: '\u2A72',
	PlusMinus: '\u00B1',
	plusmn: '\u00B1',
	plussim: '\u2A26',
	plustwo: '\u2A27',
	pm: '\u00B1',
	Poincareplane: '\u210C',
	pointint: '\u2A15',
	Popf: '\u2119',
	popf: '\uD835\uDD61',
	pound: '\u00A3',
	Pr: '\u2ABB',
	pr: '\u227A',
	prap: '\u2AB7',
	prcue: '\u227C',
	prE: '\u2AB3',
	pre: '\u2AAF',
	prec: '\u227A',
	precapprox: '\u2AB7',
	preccurlyeq: '\u227C',
	Precedes: '\u227A',
	PrecedesEqual: '\u2AAF',
	PrecedesSlantEqual: '\u227C',
	PrecedesTilde: '\u227E',
	preceq: '\u2AAF',
	precnapprox: '\u2AB9',
	precneqq: '\u2AB5',
	precnsim: '\u22E8',
	precsim: '\u227E',
	Prime: '\u2033',
	prime: '\u2032',
	primes: '\u2119',
	prnap: '\u2AB9',
	prnE: '\u2AB5',
	prnsim: '\u22E8',
	prod: '\u220F',
	Product: '\u220F',
	profalar: '\u232E',
	profline: '\u2312',
	profsurf: '\u2313',
	prop: '\u221D',
	Proportion: '\u2237',
	Proportional: '\u221D',
	propto: '\u221D',
	prsim: '\u227E',
	prurel: '\u22B0',
	Pscr: '\uD835\uDCAB',
	pscr: '\uD835\uDCC5',
	Psi: '\u03A8',
	psi: '\u03C8',
	puncsp: '\u2008',
	Qfr: '\uD835\uDD14',
	qfr: '\uD835\uDD2E',
	qint: '\u2A0C',
	Qopf: '\u211A',
	qopf: '\uD835\uDD62',
	qprime: '\u2057',
	Qscr: '\uD835\uDCAC',
	qscr: '\uD835\uDCC6',
	quaternions: '\u210D',
	quatint: '\u2A16',
	quest: '\u003F',
	questeq: '\u225F',
	QUOT: '\u0022',
	quot: '\u0022',
	rAarr: '\u21DB',
	race: '\u223D\u0331',
	Racute: '\u0154',
	racute: '\u0155',
	radic: '\u221A',
	raemptyv: '\u29B3',
	Rang: '\u27EB',
	rang: '\u27E9',
	rangd: '\u2992',
	range: '\u29A5',
	rangle: '\u27E9',
	raquo: '\u00BB',
	Rarr: '\u21A0',
	rArr: '\u21D2',
	rarr: '\u2192',
	rarrap: '\u2975',
	rarrb: '\u21E5',
	rarrbfs: '\u2920',
	rarrc: '\u2933',
	rarrfs: '\u291E',
	rarrhk: '\u21AA',
	rarrlp: '\u21AC',
	rarrpl: '\u2945',
	rarrsim: '\u2974',
	Rarrtl: '\u2916',
	rarrtl: '\u21A3',
	rarrw: '\u219D',
	rAtail: '\u291C',
	ratail: '\u291A',
	ratio: '\u2236',
	rationals: '\u211A',
	RBarr: '\u2910',
	rBarr: '\u290F',
	rbarr: '\u290D',
	rbbrk: '\u2773',
	rbrace: '\u007D',
	rbrack: '\u005D',
	rbrke: '\u298C',
	rbrksld: '\u298E',
	rbrkslu: '\u2990',
	Rcaron: '\u0158',
	rcaron: '\u0159',
	Rcedil: '\u0156',
	rcedil: '\u0157',
	rceil: '\u2309',
	rcub: '\u007D',
	Rcy: '\u0420',
	rcy: '\u0440',
	rdca: '\u2937',
	rdldhar: '\u2969',
	rdquo: '\u201D',
	rdquor: '\u201D',
	rdsh: '\u21B3',
	Re: '\u211C',
	real: '\u211C',
	realine: '\u211B',
	realpart: '\u211C',
	reals: '\u211D',
	rect: '\u25AD',
	REG: '\u00AE',
	reg: '\u00AE',
	ReverseElement: '\u220B',
	ReverseEquilibrium: '\u21CB',
	ReverseUpEquilibrium: '\u296F',
	rfisht: '\u297D',
	rfloor: '\u230B',
	Rfr: '\u211C',
	rfr: '\uD835\uDD2F',
	rHar: '\u2964',
	rhard: '\u21C1',
	rharu: '\u21C0',
	rharul: '\u296C',
	Rho: '\u03A1',
	rho: '\u03C1',
	rhov: '\u03F1',
	RightAngleBracket: '\u27E9',
	RightArrow: '\u2192',
	Rightarrow: '\u21D2',
	rightarrow: '\u2192',
	RightArrowBar: '\u21E5',
	RightArrowLeftArrow: '\u21C4',
	rightarrowtail: '\u21A3',
	RightCeiling: '\u2309',
	RightDoubleBracket: '\u27E7',
	RightDownTeeVector: '\u295D',
	RightDownVector: '\u21C2',
	RightDownVectorBar: '\u2955',
	RightFloor: '\u230B',
	rightharpoondown: '\u21C1',
	rightharpoonup: '\u21C0',
	rightleftarrows: '\u21C4',
	rightleftharpoons: '\u21CC',
	rightrightarrows: '\u21C9',
	rightsquigarrow: '\u219D',
	RightTee: '\u22A2',
	RightTeeArrow: '\u21A6',
	RightTeeVector: '\u295B',
	rightthreetimes: '\u22CC',
	RightTriangle: '\u22B3',
	RightTriangleBar: '\u29D0',
	RightTriangleEqual: '\u22B5',
	RightUpDownVector: '\u294F',
	RightUpTeeVector: '\u295C',
	RightUpVector: '\u21BE',
	RightUpVectorBar: '\u2954',
	RightVector: '\u21C0',
	RightVectorBar: '\u2953',
	ring: '\u02DA',
	risingdotseq: '\u2253',
	rlarr: '\u21C4',
	rlhar: '\u21CC',
	rlm: '\u200F',
	rmoust: '\u23B1',
	rmoustache: '\u23B1',
	rnmid: '\u2AEE',
	roang: '\u27ED',
	roarr: '\u21FE',
	robrk: '\u27E7',
	ropar: '\u2986',
	Ropf: '\u211D',
	ropf: '\uD835\uDD63',
	roplus: '\u2A2E',
	rotimes: '\u2A35',
	RoundImplies: '\u2970',
	rpar: '\u0029',
	rpargt: '\u2994',
	rppolint: '\u2A12',
	rrarr: '\u21C9',
	Rrightarrow: '\u21DB',
	rsaquo: '\u203A',
	Rscr: '\u211B',
	rscr: '\uD835\uDCC7',
	Rsh: '\u21B1',
	rsh: '\u21B1',
	rsqb: '\u005D',
	rsquo: '\u2019',
	rsquor: '\u2019',
	rthree: '\u22CC',
	rtimes: '\u22CA',
	rtri: '\u25B9',
	rtrie: '\u22B5',
	rtrif: '\u25B8',
	rtriltri: '\u29CE',
	RuleDelayed: '\u29F4',
	ruluhar: '\u2968',
	rx: '\u211E',
	Sacute: '\u015A',
	sacute: '\u015B',
	sbquo: '\u201A',
	Sc: '\u2ABC',
	sc: '\u227B',
	scap: '\u2AB8',
	Scaron: '\u0160',
	scaron: '\u0161',
	sccue: '\u227D',
	scE: '\u2AB4',
	sce: '\u2AB0',
	Scedil: '\u015E',
	scedil: '\u015F',
	Scirc: '\u015C',
	scirc: '\u015D',
	scnap: '\u2ABA',
	scnE: '\u2AB6',
	scnsim: '\u22E9',
	scpolint: '\u2A13',
	scsim: '\u227F',
	Scy: '\u0421',
	scy: '\u0441',
	sdot: '\u22C5',
	sdotb: '\u22A1',
	sdote: '\u2A66',
	searhk: '\u2925',
	seArr: '\u21D8',
	searr: '\u2198',
	searrow: '\u2198',
	sect: '\u00A7',
	semi: '\u003B',
	seswar: '\u2929',
	setminus: '\u2216',
	setmn: '\u2216',
	sext: '\u2736',
	Sfr: '\uD835\uDD16',
	sfr: '\uD835\uDD30',
	sfrown: '\u2322',
	sharp: '\u266F',
	SHCHcy: '\u0429',
	shchcy: '\u0449',
	SHcy: '\u0428',
	shcy: '\u0448',
	ShortDownArrow: '\u2193',
	ShortLeftArrow: '\u2190',
	shortmid: '\u2223',
	shortparallel: '\u2225',
	ShortRightArrow: '\u2192',
	ShortUpArrow: '\u2191',
	shy: '\u00AD',
	Sigma: '\u03A3',
	sigma: '\u03C3',
	sigmaf: '\u03C2',
	sigmav: '\u03C2',
	sim: '\u223C',
	simdot: '\u2A6A',
	sime: '\u2243',
	simeq: '\u2243',
	simg: '\u2A9E',
	simgE: '\u2AA0',
	siml: '\u2A9D',
	simlE: '\u2A9F',
	simne: '\u2246',
	simplus: '\u2A24',
	simrarr: '\u2972',
	slarr: '\u2190',
	SmallCircle: '\u2218',
	smallsetminus: '\u2216',
	smashp: '\u2A33',
	smeparsl: '\u29E4',
	smid: '\u2223',
	smile: '\u2323',
	smt: '\u2AAA',
	smte: '\u2AAC',
	smtes: '\u2AAC\uFE00',
	SOFTcy: '\u042C',
	softcy: '\u044C',
	sol: '\u002F',
	solb: '\u29C4',
	solbar: '\u233F',
	Sopf: '\uD835\uDD4A',
	sopf: '\uD835\uDD64',
	spades: '\u2660',
	spadesuit: '\u2660',
	spar: '\u2225',
	sqcap: '\u2293',
	sqcaps: '\u2293\uFE00',
	sqcup: '\u2294',
	sqcups: '\u2294\uFE00',
	Sqrt: '\u221A',
	sqsub: '\u228F',
	sqsube: '\u2291',
	sqsubset: '\u228F',
	sqsubseteq: '\u2291',
	sqsup: '\u2290',
	sqsupe: '\u2292',
	sqsupset: '\u2290',
	sqsupseteq: '\u2292',
	squ: '\u25A1',
	Square: '\u25A1',
	square: '\u25A1',
	SquareIntersection: '\u2293',
	SquareSubset: '\u228F',
	SquareSubsetEqual: '\u2291',
	SquareSuperset: '\u2290',
	SquareSupersetEqual: '\u2292',
	SquareUnion: '\u2294',
	squarf: '\u25AA',
	squf: '\u25AA',
	srarr: '\u2192',
	Sscr: '\uD835\uDCAE',
	sscr: '\uD835\uDCC8',
	ssetmn: '\u2216',
	ssmile: '\u2323',
	sstarf: '\u22C6',
	Star: '\u22C6',
	star: '\u2606',
	starf: '\u2605',
	straightepsilon: '\u03F5',
	straightphi: '\u03D5',
	strns: '\u00AF',
	Sub: '\u22D0',
	sub: '\u2282',
	subdot: '\u2ABD',
	subE: '\u2AC5',
	sube: '\u2286',
	subedot: '\u2AC3',
	submult: '\u2AC1',
	subnE: '\u2ACB',
	subne: '\u228A',
	subplus: '\u2ABF',
	subrarr: '\u2979',
	Subset: '\u22D0',
	subset: '\u2282',
	subseteq: '\u2286',
	subseteqq: '\u2AC5',
	SubsetEqual: '\u2286',
	subsetneq: '\u228A',
	subsetneqq: '\u2ACB',
	subsim: '\u2AC7',
	subsub: '\u2AD5',
	subsup: '\u2AD3',
	succ: '\u227B',
	succapprox: '\u2AB8',
	succcurlyeq: '\u227D',
	Succeeds: '\u227B',
	SucceedsEqual: '\u2AB0',
	SucceedsSlantEqual: '\u227D',
	SucceedsTilde: '\u227F',
	succeq: '\u2AB0',
	succnapprox: '\u2ABA',
	succneqq: '\u2AB6',
	succnsim: '\u22E9',
	succsim: '\u227F',
	SuchThat: '\u220B',
	Sum: '\u2211',
	sum: '\u2211',
	sung: '\u266A',
	Sup: '\u22D1',
	sup: '\u2283',
	sup1: '\u00B9',
	sup2: '\u00B2',
	sup3: '\u00B3',
	supdot: '\u2ABE',
	supdsub: '\u2AD8',
	supE: '\u2AC6',
	supe: '\u2287',
	supedot: '\u2AC4',
	Superset: '\u2283',
	SupersetEqual: '\u2287',
	suphsol: '\u27C9',
	suphsub: '\u2AD7',
	suplarr: '\u297B',
	supmult: '\u2AC2',
	supnE: '\u2ACC',
	supne: '\u228B',
	supplus: '\u2AC0',
	Supset: '\u22D1',
	supset: '\u2283',
	supseteq: '\u2287',
	supseteqq: '\u2AC6',
	supsetneq: '\u228B',
	supsetneqq: '\u2ACC',
	supsim: '\u2AC8',
	supsub: '\u2AD4',
	supsup: '\u2AD6',
	swarhk: '\u2926',
	swArr: '\u21D9',
	swarr: '\u2199',
	swarrow: '\u2199',
	swnwar: '\u292A',
	szlig: '\u00DF',
	Tab: '\u0009',
	target: '\u2316',
	Tau: '\u03A4',
	tau: '\u03C4',
	tbrk: '\u23B4',
	Tcaron: '\u0164',
	tcaron: '\u0165',
	Tcedil: '\u0162',
	tcedil: '\u0163',
	Tcy: '\u0422',
	tcy: '\u0442',
	tdot: '\u20DB',
	telrec: '\u2315',
	Tfr: '\uD835\uDD17',
	tfr: '\uD835\uDD31',
	there4: '\u2234',
	Therefore: '\u2234',
	therefore: '\u2234',
	Theta: '\u0398',
	theta: '\u03B8',
	thetasym: '\u03D1',
	thetav: '\u03D1',
	thickapprox: '\u2248',
	thicksim: '\u223C',
	ThickSpace: '\u205F\u200A',
	thinsp: '\u2009',
	ThinSpace: '\u2009',
	thkap: '\u2248',
	thksim: '\u223C',
	THORN: '\u00DE',
	thorn: '\u00FE',
	Tilde: '\u223C',
	tilde: '\u02DC',
	TildeEqual: '\u2243',
	TildeFullEqual: '\u2245',
	TildeTilde: '\u2248',
	times: '\u00D7',
	timesb: '\u22A0',
	timesbar: '\u2A31',
	timesd: '\u2A30',
	tint: '\u222D',
	toea: '\u2928',
	top: '\u22A4',
	topbot: '\u2336',
	topcir: '\u2AF1',
	Topf: '\uD835\uDD4B',
	topf: '\uD835\uDD65',
	topfork: '\u2ADA',
	tosa: '\u2929',
	tprime: '\u2034',
	TRADE: '\u2122',
	trade: '\u2122',
	triangle: '\u25B5',
	triangledown: '\u25BF',
	triangleleft: '\u25C3',
	trianglelefteq: '\u22B4',
	triangleq: '\u225C',
	triangleright: '\u25B9',
	trianglerighteq: '\u22B5',
	tridot: '\u25EC',
	trie: '\u225C',
	triminus: '\u2A3A',
	TripleDot: '\u20DB',
	triplus: '\u2A39',
	trisb: '\u29CD',
	tritime: '\u2A3B',
	trpezium: '\u23E2',
	Tscr: '\uD835\uDCAF',
	tscr: '\uD835\uDCC9',
	TScy: '\u0426',
	tscy: '\u0446',
	TSHcy: '\u040B',
	tshcy: '\u045B',
	Tstrok: '\u0166',
	tstrok: '\u0167',
	twixt: '\u226C',
	twoheadleftarrow: '\u219E',
	twoheadrightarrow: '\u21A0',
	Uacute: '\u00DA',
	uacute: '\u00FA',
	Uarr: '\u219F',
	uArr: '\u21D1',
	uarr: '\u2191',
	Uarrocir: '\u2949',
	Ubrcy: '\u040E',
	ubrcy: '\u045E',
	Ubreve: '\u016C',
	ubreve: '\u016D',
	Ucirc: '\u00DB',
	ucirc: '\u00FB',
	Ucy: '\u0423',
	ucy: '\u0443',
	udarr: '\u21C5',
	Udblac: '\u0170',
	udblac: '\u0171',
	udhar: '\u296E',
	ufisht: '\u297E',
	Ufr: '\uD835\uDD18',
	ufr: '\uD835\uDD32',
	Ugrave: '\u00D9',
	ugrave: '\u00F9',
	uHar: '\u2963',
	uharl: '\u21BF',
	uharr: '\u21BE',
	uhblk: '\u2580',
	ulcorn: '\u231C',
	ulcorner: '\u231C',
	ulcrop: '\u230F',
	ultri: '\u25F8',
	Umacr: '\u016A',
	umacr: '\u016B',
	uml: '\u00A8',
	UnderBar: '\u005F',
	UnderBrace: '\u23DF',
	UnderBracket: '\u23B5',
	UnderParenthesis: '\u23DD',
	Union: '\u22C3',
	UnionPlus: '\u228E',
	Uogon: '\u0172',
	uogon: '\u0173',
	Uopf: '\uD835\uDD4C',
	uopf: '\uD835\uDD66',
	UpArrow: '\u2191',
	Uparrow: '\u21D1',
	uparrow: '\u2191',
	UpArrowBar: '\u2912',
	UpArrowDownArrow: '\u21C5',
	UpDownArrow: '\u2195',
	Updownarrow: '\u21D5',
	updownarrow: '\u2195',
	UpEquilibrium: '\u296E',
	upharpoonleft: '\u21BF',
	upharpoonright: '\u21BE',
	uplus: '\u228E',
	UpperLeftArrow: '\u2196',
	UpperRightArrow: '\u2197',
	Upsi: '\u03D2',
	upsi: '\u03C5',
	upsih: '\u03D2',
	Upsilon: '\u03A5',
	upsilon: '\u03C5',
	UpTee: '\u22A5',
	UpTeeArrow: '\u21A5',
	upuparrows: '\u21C8',
	urcorn: '\u231D',
	urcorner: '\u231D',
	urcrop: '\u230E',
	Uring: '\u016E',
	uring: '\u016F',
	urtri: '\u25F9',
	Uscr: '\uD835\uDCB0',
	uscr: '\uD835\uDCCA',
	utdot: '\u22F0',
	Utilde: '\u0168',
	utilde: '\u0169',
	utri: '\u25B5',
	utrif: '\u25B4',
	uuarr: '\u21C8',
	Uuml: '\u00DC',
	uuml: '\u00FC',
	uwangle: '\u29A7',
	vangrt: '\u299C',
	varepsilon: '\u03F5',
	varkappa: '\u03F0',
	varnothing: '\u2205',
	varphi: '\u03D5',
	varpi: '\u03D6',
	varpropto: '\u221D',
	vArr: '\u21D5',
	varr: '\u2195',
	varrho: '\u03F1',
	varsigma: '\u03C2',
	varsubsetneq: '\u228A\uFE00',
	varsubsetneqq: '\u2ACB\uFE00',
	varsupsetneq: '\u228B\uFE00',
	varsupsetneqq: '\u2ACC\uFE00',
	vartheta: '\u03D1',
	vartriangleleft: '\u22B2',
	vartriangleright: '\u22B3',
	Vbar: '\u2AEB',
	vBar: '\u2AE8',
	vBarv: '\u2AE9',
	Vcy: '\u0412',
	vcy: '\u0432',
	VDash: '\u22AB',
	Vdash: '\u22A9',
	vDash: '\u22A8',
	vdash: '\u22A2',
	Vdashl: '\u2AE6',
	Vee: '\u22C1',
	vee: '\u2228',
	veebar: '\u22BB',
	veeeq: '\u225A',
	vellip: '\u22EE',
	Verbar: '\u2016',
	verbar: '\u007C',
	Vert: '\u2016',
	vert: '\u007C',
	VerticalBar: '\u2223',
	VerticalLine: '\u007C',
	VerticalSeparator: '\u2758',
	VerticalTilde: '\u2240',
	VeryThinSpace: '\u200A',
	Vfr: '\uD835\uDD19',
	vfr: '\uD835\uDD33',
	vltri: '\u22B2',
	vnsub: '\u2282\u20D2',
	vnsup: '\u2283\u20D2',
	Vopf: '\uD835\uDD4D',
	vopf: '\uD835\uDD67',
	vprop: '\u221D',
	vrtri: '\u22B3',
	Vscr: '\uD835\uDCB1',
	vscr: '\uD835\uDCCB',
	vsubnE: '\u2ACB\uFE00',
	vsubne: '\u228A\uFE00',
	vsupnE: '\u2ACC\uFE00',
	vsupne: '\u228B\uFE00',
	Vvdash: '\u22AA',
	vzigzag: '\u299A',
	Wcirc: '\u0174',
	wcirc: '\u0175',
	wedbar: '\u2A5F',
	Wedge: '\u22C0',
	wedge: '\u2227',
	wedgeq: '\u2259',
	weierp: '\u2118',
	Wfr: '\uD835\uDD1A',
	wfr: '\uD835\uDD34',
	Wopf: '\uD835\uDD4E',
	wopf: '\uD835\uDD68',
	wp: '\u2118',
	wr: '\u2240',
	wreath: '\u2240',
	Wscr: '\uD835\uDCB2',
	wscr: '\uD835\uDCCC',
	xcap: '\u22C2',
	xcirc: '\u25EF',
	xcup: '\u22C3',
	xdtri: '\u25BD',
	Xfr: '\uD835\uDD1B',
	xfr: '\uD835\uDD35',
	xhArr: '\u27FA',
	xharr: '\u27F7',
	Xi: '\u039E',
	xi: '\u03BE',
	xlArr: '\u27F8',
	xlarr: '\u27F5',
	xmap: '\u27FC',
	xnis: '\u22FB',
	xodot: '\u2A00',
	Xopf: '\uD835\uDD4F',
	xopf: '\uD835\uDD69',
	xoplus: '\u2A01',
	xotime: '\u2A02',
	xrArr: '\u27F9',
	xrarr: '\u27F6',
	Xscr: '\uD835\uDCB3',
	xscr: '\uD835\uDCCD',
	xsqcup: '\u2A06',
	xuplus: '\u2A04',
	xutri: '\u25B3',
	xvee: '\u22C1',
	xwedge: '\u22C0',
	Yacute: '\u00DD',
	yacute: '\u00FD',
	YAcy: '\u042F',
	yacy: '\u044F',
	Ycirc: '\u0176',
	ycirc: '\u0177',
	Ycy: '\u042B',
	ycy: '\u044B',
	yen: '\u00A5',
	Yfr: '\uD835\uDD1C',
	yfr: '\uD835\uDD36',
	YIcy: '\u0407',
	yicy: '\u0457',
	Yopf: '\uD835\uDD50',
	yopf: '\uD835\uDD6A',
	Yscr: '\uD835\uDCB4',
	yscr: '\uD835\uDCCE',
	YUcy: '\u042E',
	yucy: '\u044E',
	Yuml: '\u0178',
	yuml: '\u00FF',
	Zacute: '\u0179',
	zacute: '\u017A',
	Zcaron: '\u017D',
	zcaron: '\u017E',
	Zcy: '\u0417',
	zcy: '\u0437',
	Zdot: '\u017B',
	zdot: '\u017C',
	zeetrf: '\u2128',
	ZeroWidthSpace: '\u200B',
	Zeta: '\u0396',
	zeta: '\u03B6',
	Zfr: '\u2128',
	zfr: '\uD835\uDD37',
	ZHcy: '\u0416',
	zhcy: '\u0436',
	zigrarr: '\u21DD',
	Zopf: '\u2124',
	zopf: '\uD835\uDD6B',
	Zscr: '\uD835\uDCB5',
	zscr: '\uD835\uDCCF',
	zwj: '\u200D',
	zwnj: '\u200C',
});

/**
 * @deprecated use `HTML_ENTITIES` instead
 * @see HTML_ENTITIES
 */
exports.entityMap = exports.HTML_ENTITIES;


/***/ }),

/***/ "./node_modules/@xmldom/xmldom/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var dom = __webpack_require__(/*! ./dom */ "./node_modules/@xmldom/xmldom/lib/dom.js")
exports.DOMImplementation = dom.DOMImplementation
exports.XMLSerializer = dom.XMLSerializer
exports.DOMParser = __webpack_require__(/*! ./dom-parser */ "./node_modules/@xmldom/xmldom/lib/dom-parser.js").DOMParser


/***/ }),

/***/ "./node_modules/@xmldom/xmldom/lib/sax.js":
/*!************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/sax.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var NAMESPACE = (__webpack_require__(/*! ./conventions */ "./node_modules/@xmldom/xmldom/lib/conventions.js").NAMESPACE);

//[4]   	NameStartChar	   ::=   	":" | [A-Z] | "_" | [a-z] | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x2FF] | [#x370-#x37D] | [#x37F-#x1FFF] | [#x200C-#x200D] | [#x2070-#x218F] | [#x2C00-#x2FEF] | [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
//[4a]   	NameChar	   ::=   	NameStartChar | "-" | "." | [0-9] | #xB7 | [#x0300-#x036F] | [#x203F-#x2040]
//[5]   	Name	   ::=   	NameStartChar (NameChar)*
var nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]///\u10000-\uEFFFF
var nameChar = new RegExp("[\\-\\.0-9"+nameStartChar.source.slice(1,-1)+"\\u00B7\\u0300-\\u036F\\u203F-\\u2040]");
var tagNamePattern = new RegExp('^'+nameStartChar.source+nameChar.source+'*(?:\:'+nameStartChar.source+nameChar.source+'*)?$');
//var tagNamePattern = /^[a-zA-Z_][\w\-\.]*(?:\:[a-zA-Z_][\w\-\.]*)?$/
//var handlers = 'resolveEntity,getExternalSubset,characters,endDocument,endElement,endPrefixMapping,ignorableWhitespace,processingInstruction,setDocumentLocator,skippedEntity,startDocument,startElement,startPrefixMapping,notationDecl,unparsedEntityDecl,error,fatalError,warning,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,comment,endCDATA,endDTD,endEntity,startCDATA,startDTD,startEntity'.split(',')

//S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
//S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
var S_TAG = 0;//tag name offerring
var S_ATTR = 1;//attr name offerring
var S_ATTR_SPACE=2;//attr name end and space offer
var S_EQ = 3;//=space?
var S_ATTR_NOQUOT_VALUE = 4;//attr value(no quot value only)
var S_ATTR_END = 5;//attr value end and no space(quot end)
var S_TAG_SPACE = 6;//(attr value end || tag end ) && (space offer)
var S_TAG_CLOSE = 7;//closed el<el />

/**
 * Creates an error that will not be caught by XMLReader aka the SAX parser.
 *
 * @param {string} message
 * @param {any?} locator Optional, can provide details about the location in the source
 * @constructor
 */
function ParseError(message, locator) {
	this.message = message
	this.locator = locator
	if(Error.captureStackTrace) Error.captureStackTrace(this, ParseError);
}
ParseError.prototype = new Error();
ParseError.prototype.name = ParseError.name

function XMLReader(){

}

XMLReader.prototype = {
	parse:function(source,defaultNSMap,entityMap){
		var domBuilder = this.domBuilder;
		domBuilder.startDocument();
		_copy(defaultNSMap ,defaultNSMap = {})
		parse(source,defaultNSMap,entityMap,
				domBuilder,this.errorHandler);
		domBuilder.endDocument();
	}
}
function parse(source,defaultNSMapCopy,entityMap,domBuilder,errorHandler){
	function fixedFromCharCode(code) {
		// String.prototype.fromCharCode does not supports
		// > 2 bytes unicode chars directly
		if (code > 0xffff) {
			code -= 0x10000;
			var surrogate1 = 0xd800 + (code >> 10)
				, surrogate2 = 0xdc00 + (code & 0x3ff);

			return String.fromCharCode(surrogate1, surrogate2);
		} else {
			return String.fromCharCode(code);
		}
	}
	function entityReplacer(a){
		var k = a.slice(1,-1);
		if (Object.hasOwnProperty.call(entityMap, k)) {
			return entityMap[k];
		}else if(k.charAt(0) === '#'){
			return fixedFromCharCode(parseInt(k.substr(1).replace('x','0x')))
		}else{
			errorHandler.error('entity not found:'+a);
			return a;
		}
	}
	function appendText(end){//has some bugs
		if(end>start){
			var xt = source.substring(start,end).replace(/&#?\w+;/g,entityReplacer);
			locator&&position(start);
			domBuilder.characters(xt,0,end-start);
			start = end
		}
	}
	function position(p,m){
		while(p>=lineEnd && (m = linePattern.exec(source))){
			lineStart = m.index;
			lineEnd = lineStart + m[0].length;
			locator.lineNumber++;
			//console.log('line++:',locator,startPos,endPos)
		}
		locator.columnNumber = p-lineStart+1;
	}
	var lineStart = 0;
	var lineEnd = 0;
	var linePattern = /.*(?:\r\n?|\n)|.*$/g
	var locator = domBuilder.locator;

	var parseStack = [{currentNSMap:defaultNSMapCopy}]
	var closeMap = {};
	var start = 0;
	while(true){
		try{
			var tagStart = source.indexOf('<',start);
			if(tagStart<0){
				if(!source.substr(start).match(/^\s*$/)){
					var doc = domBuilder.doc;
	    			var text = doc.createTextNode(source.substr(start));
	    			doc.appendChild(text);
	    			domBuilder.currentElement = text;
				}
				return;
			}
			if(tagStart>start){
				appendText(tagStart);
			}
			switch(source.charAt(tagStart+1)){
			case '/':
				var end = source.indexOf('>',tagStart+3);
				var tagName = source.substring(tagStart + 2, end).replace(/[ \t\n\r]+$/g, '');
				var config = parseStack.pop();
				if(end<0){

	        		tagName = source.substring(tagStart+2).replace(/[\s<].*/,'');
	        		errorHandler.error("end tag name: "+tagName+' is not complete:'+config.tagName);
	        		end = tagStart+1+tagName.length;
	        	}else if(tagName.match(/\s</)){
	        		tagName = tagName.replace(/[\s<].*/,'');
	        		errorHandler.error("end tag name: "+tagName+' maybe not complete');
	        		end = tagStart+1+tagName.length;
				}
				var localNSMap = config.localNSMap;
				var endMatch = config.tagName == tagName;
				var endIgnoreCaseMach = endMatch || config.tagName&&config.tagName.toLowerCase() == tagName.toLowerCase()
		        if(endIgnoreCaseMach){
		        	domBuilder.endElement(config.uri,config.localName,tagName);
					if(localNSMap){
						for (var prefix in localNSMap) {
							if (Object.prototype.hasOwnProperty.call(localNSMap, prefix)) {
								domBuilder.endPrefixMapping(prefix);
							}
						}
					}
					if(!endMatch){
		            	errorHandler.fatalError("end tag name: "+tagName+' is not match the current start tagName:'+config.tagName ); // No known test case
					}
		        }else{
		        	parseStack.push(config)
		        }

				end++;
				break;
				// end elment
			case '?':// <?...?>
				locator&&position(tagStart);
				end = parseInstruction(source,tagStart,domBuilder);
				break;
			case '!':// <!doctype,<![CDATA,<!--
				locator&&position(tagStart);
				end = parseDCC(source,tagStart,domBuilder,errorHandler);
				break;
			default:
				locator&&position(tagStart);
				var el = new ElementAttributes();
				var currentNSMap = parseStack[parseStack.length-1].currentNSMap;
				//elStartEnd
				var end = parseElementStartPart(source,tagStart,el,currentNSMap,entityReplacer,errorHandler);
				var len = el.length;


				if(!el.closed && fixSelfClosed(source,end,el.tagName,closeMap)){
					el.closed = true;
					if(!entityMap.nbsp){
						errorHandler.warning('unclosed xml attribute');
					}
				}
				if(locator && len){
					var locator2 = copyLocator(locator,{});
					//try{//attribute position fixed
					for(var i = 0;i<len;i++){
						var a = el[i];
						position(a.offset);
						a.locator = copyLocator(locator,{});
					}
					domBuilder.locator = locator2
					if(appendElement(el,domBuilder,currentNSMap)){
						parseStack.push(el)
					}
					domBuilder.locator = locator;
				}else{
					if(appendElement(el,domBuilder,currentNSMap)){
						parseStack.push(el)
					}
				}

				if (NAMESPACE.isHTML(el.uri) && !el.closed) {
					end = parseHtmlSpecialContent(source,end,el.tagName,entityReplacer,domBuilder)
				} else {
					end++;
				}
			}
		}catch(e){
			if (e instanceof ParseError) {
				throw e;
			}
			errorHandler.error('element parse error: '+e)
			end = -1;
		}
		if(end>start){
			start = end;
		}else{
			//TODO: 这里有可能sax回退，有位置错误风险
			appendText(Math.max(tagStart,start)+1);
		}
	}
}
function copyLocator(f,t){
	t.lineNumber = f.lineNumber;
	t.columnNumber = f.columnNumber;
	return t;
}

/**
 * @see #appendElement(source,elStartEnd,el,selfClosed,entityReplacer,domBuilder,parseStack);
 * @return end of the elementStartPart(end of elementEndPart for selfClosed el)
 */
function parseElementStartPart(source,start,el,currentNSMap,entityReplacer,errorHandler){

	/**
	 * @param {string} qname
	 * @param {string} value
	 * @param {number} startIndex
	 */
	function addAttribute(qname, value, startIndex) {
		if (el.attributeNames.hasOwnProperty(qname)) {
			errorHandler.fatalError('Attribute ' + qname + ' redefined')
		}
		el.addValue(
			qname,
			// @see https://www.w3.org/TR/xml/#AVNormalize
			// since the xmldom sax parser does not "interpret" DTD the following is not implemented:
			// - recursive replacement of (DTD) entity references
			// - trimming and collapsing multiple spaces into a single one for attributes that are not of type CDATA
			value.replace(/[\t\n\r]/g, ' ').replace(/&#?\w+;/g, entityReplacer),
			startIndex
		)
	}
	var attrName;
	var value;
	var p = ++start;
	var s = S_TAG;//status
	while(true){
		var c = source.charAt(p);
		switch(c){
		case '=':
			if(s === S_ATTR){//attrName
				attrName = source.slice(start,p);
				s = S_EQ;
			}else if(s === S_ATTR_SPACE){
				s = S_EQ;
			}else{
				//fatalError: equal must after attrName or space after attrName
				throw new Error('attribute equal must after attrName'); // No known test case
			}
			break;
		case '\'':
		case '"':
			if(s === S_EQ || s === S_ATTR //|| s == S_ATTR_SPACE
				){//equal
				if(s === S_ATTR){
					errorHandler.warning('attribute value must after "="')
					attrName = source.slice(start,p)
				}
				start = p+1;
				p = source.indexOf(c,start)
				if(p>0){
					value = source.slice(start, p);
					addAttribute(attrName, value, start-1);
					s = S_ATTR_END;
				}else{
					//fatalError: no end quot match
					throw new Error('attribute value no end \''+c+'\' match');
				}
			}else if(s == S_ATTR_NOQUOT_VALUE){
				value = source.slice(start, p);
				addAttribute(attrName, value, start);
				errorHandler.warning('attribute "'+attrName+'" missed start quot('+c+')!!');
				start = p+1;
				s = S_ATTR_END
			}else{
				//fatalError: no equal before
				throw new Error('attribute value must after "="'); // No known test case
			}
			break;
		case '/':
			switch(s){
			case S_TAG:
				el.setTagName(source.slice(start,p));
			case S_ATTR_END:
			case S_TAG_SPACE:
			case S_TAG_CLOSE:
				s =S_TAG_CLOSE;
				el.closed = true;
			case S_ATTR_NOQUOT_VALUE:
			case S_ATTR:
				break;
				case S_ATTR_SPACE:
					el.closed = true;
				break;
			//case S_EQ:
			default:
				throw new Error("attribute invalid close char('/')") // No known test case
			}
			break;
		case ''://end document
			errorHandler.error('unexpected end of input');
			if(s == S_TAG){
				el.setTagName(source.slice(start,p));
			}
			return p;
		case '>':
			switch(s){
			case S_TAG:
				el.setTagName(source.slice(start,p));
			case S_ATTR_END:
			case S_TAG_SPACE:
			case S_TAG_CLOSE:
				break;//normal
			case S_ATTR_NOQUOT_VALUE://Compatible state
			case S_ATTR:
				value = source.slice(start,p);
				if(value.slice(-1) === '/'){
					el.closed  = true;
					value = value.slice(0,-1)
				}
			case S_ATTR_SPACE:
				if(s === S_ATTR_SPACE){
					value = attrName;
				}
				if(s == S_ATTR_NOQUOT_VALUE){
					errorHandler.warning('attribute "'+value+'" missed quot(")!');
					addAttribute(attrName, value, start)
				}else{
					if(!NAMESPACE.isHTML(currentNSMap['']) || !value.match(/^(?:disabled|checked|selected)$/i)){
						errorHandler.warning('attribute "'+value+'" missed value!! "'+value+'" instead!!')
					}
					addAttribute(value, value, start)
				}
				break;
			case S_EQ:
				throw new Error('attribute value missed!!');
			}
//			console.log(tagName,tagNamePattern,tagNamePattern.test(tagName))
			return p;
		/*xml space '\x20' | #x9 | #xD | #xA; */
		case '\u0080':
			c = ' ';
		default:
			if(c<= ' '){//space
				switch(s){
				case S_TAG:
					el.setTagName(source.slice(start,p));//tagName
					s = S_TAG_SPACE;
					break;
				case S_ATTR:
					attrName = source.slice(start,p)
					s = S_ATTR_SPACE;
					break;
				case S_ATTR_NOQUOT_VALUE:
					var value = source.slice(start, p);
					errorHandler.warning('attribute "'+value+'" missed quot(")!!');
					addAttribute(attrName, value, start)
				case S_ATTR_END:
					s = S_TAG_SPACE;
					break;
				//case S_TAG_SPACE:
				//case S_EQ:
				//case S_ATTR_SPACE:
				//	void();break;
				//case S_TAG_CLOSE:
					//ignore warning
				}
			}else{//not space
//S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
//S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
				switch(s){
				//case S_TAG:void();break;
				//case S_ATTR:void();break;
				//case S_ATTR_NOQUOT_VALUE:void();break;
				case S_ATTR_SPACE:
					var tagName =  el.tagName;
					if (!NAMESPACE.isHTML(currentNSMap['']) || !attrName.match(/^(?:disabled|checked|selected)$/i)) {
						errorHandler.warning('attribute "'+attrName+'" missed value!! "'+attrName+'" instead2!!')
					}
					addAttribute(attrName, attrName, start);
					start = p;
					s = S_ATTR;
					break;
				case S_ATTR_END:
					errorHandler.warning('attribute space is required"'+attrName+'"!!')
				case S_TAG_SPACE:
					s = S_ATTR;
					start = p;
					break;
				case S_EQ:
					s = S_ATTR_NOQUOT_VALUE;
					start = p;
					break;
				case S_TAG_CLOSE:
					throw new Error("elements closed character '/' and '>' must be connected to");
				}
			}
		}//end outer switch
		//console.log('p++',p)
		p++;
	}
}
/**
 * @return true if has new namespace define
 */
function appendElement(el,domBuilder,currentNSMap){
	var tagName = el.tagName;
	var localNSMap = null;
	//var currentNSMap = parseStack[parseStack.length-1].currentNSMap;
	var i = el.length;
	while(i--){
		var a = el[i];
		var qName = a.qName;
		var value = a.value;
		var nsp = qName.indexOf(':');
		if(nsp>0){
			var prefix = a.prefix = qName.slice(0,nsp);
			var localName = qName.slice(nsp+1);
			var nsPrefix = prefix === 'xmlns' && localName
		}else{
			localName = qName;
			prefix = null
			nsPrefix = qName === 'xmlns' && ''
		}
		//can not set prefix,because prefix !== ''
		a.localName = localName ;
		//prefix == null for no ns prefix attribute
		if(nsPrefix !== false){//hack!!
			if(localNSMap == null){
				localNSMap = {}
				//console.log(currentNSMap,0)
				_copy(currentNSMap,currentNSMap={})
				//console.log(currentNSMap,1)
			}
			currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
			a.uri = NAMESPACE.XMLNS
			domBuilder.startPrefixMapping(nsPrefix, value)
		}
	}
	var i = el.length;
	while(i--){
		a = el[i];
		var prefix = a.prefix;
		if(prefix){//no prefix attribute has no namespace
			if(prefix === 'xml'){
				a.uri = NAMESPACE.XML;
			}if(prefix !== 'xmlns'){
				a.uri = currentNSMap[prefix || '']

				//{console.log('###'+a.qName,domBuilder.locator.systemId+'',currentNSMap,a.uri)}
			}
		}
	}
	var nsp = tagName.indexOf(':');
	if(nsp>0){
		prefix = el.prefix = tagName.slice(0,nsp);
		localName = el.localName = tagName.slice(nsp+1);
	}else{
		prefix = null;//important!!
		localName = el.localName = tagName;
	}
	//no prefix element has default namespace
	var ns = el.uri = currentNSMap[prefix || ''];
	domBuilder.startElement(ns,localName,tagName,el);
	//endPrefixMapping and startPrefixMapping have not any help for dom builder
	//localNSMap = null
	if(el.closed){
		domBuilder.endElement(ns,localName,tagName);
		if(localNSMap){
			for (prefix in localNSMap) {
				if (Object.prototype.hasOwnProperty.call(localNSMap, prefix)) {
					domBuilder.endPrefixMapping(prefix);
				}
			}
		}
	}else{
		el.currentNSMap = currentNSMap;
		el.localNSMap = localNSMap;
		//parseStack.push(el);
		return true;
	}
}
function parseHtmlSpecialContent(source,elStartEnd,tagName,entityReplacer,domBuilder){
	if(/^(?:script|textarea)$/i.test(tagName)){
		var elEndStart =  source.indexOf('</'+tagName+'>',elStartEnd);
		var text = source.substring(elStartEnd+1,elEndStart);
		if(/[&<]/.test(text)){
			if(/^script$/i.test(tagName)){
				//if(!/\]\]>/.test(text)){
					//lexHandler.startCDATA();
					domBuilder.characters(text,0,text.length);
					//lexHandler.endCDATA();
					return elEndStart;
				//}
			}//}else{//text area
				text = text.replace(/&#?\w+;/g,entityReplacer);
				domBuilder.characters(text,0,text.length);
				return elEndStart;
			//}

		}
	}
	return elStartEnd+1;
}
function fixSelfClosed(source,elStartEnd,tagName,closeMap){
	//if(tagName in closeMap){
	var pos = closeMap[tagName];
	if(pos == null){
		//console.log(tagName)
		pos =  source.lastIndexOf('</'+tagName+'>')
		if(pos<elStartEnd){//忘记闭合
			pos = source.lastIndexOf('</'+tagName)
		}
		closeMap[tagName] =pos
	}
	return pos<elStartEnd;
	//}
}

function _copy (source, target) {
	for (var n in source) {
		if (Object.prototype.hasOwnProperty.call(source, n)) {
			target[n] = source[n];
		}
	}
}

function parseDCC(source,start,domBuilder,errorHandler){//sure start with '<!'
	var next= source.charAt(start+2)
	switch(next){
	case '-':
		if(source.charAt(start + 3) === '-'){
			var end = source.indexOf('-->',start+4);
			//append comment source.substring(4,end)//<!--
			if(end>start){
				domBuilder.comment(source,start+4,end-start-4);
				return end+3;
			}else{
				errorHandler.error("Unclosed comment");
				return -1;
			}
		}else{
			//error
			return -1;
		}
	default:
		if(source.substr(start+3,6) == 'CDATA['){
			var end = source.indexOf(']]>',start+9);
			domBuilder.startCDATA();
			domBuilder.characters(source,start+9,end-start-9);
			domBuilder.endCDATA()
			return end+3;
		}
		//<!DOCTYPE
		//startDTD(java.lang.String name, java.lang.String publicId, java.lang.String systemId)
		var matchs = split(source,start);
		var len = matchs.length;
		if(len>1 && /!doctype/i.test(matchs[0][0])){
			var name = matchs[1][0];
			var pubid = false;
			var sysid = false;
			if(len>3){
				if(/^public$/i.test(matchs[2][0])){
					pubid = matchs[3][0];
					sysid = len>4 && matchs[4][0];
				}else if(/^system$/i.test(matchs[2][0])){
					sysid = matchs[3][0];
				}
			}
			var lastMatch = matchs[len-1]
			domBuilder.startDTD(name, pubid, sysid);
			domBuilder.endDTD();

			return lastMatch.index+lastMatch[0].length
		}
	}
	return -1;
}



function parseInstruction(source,start,domBuilder){
	var end = source.indexOf('?>',start);
	if(end){
		var match = source.substring(start,end).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
		if(match){
			var len = match[0].length;
			domBuilder.processingInstruction(match[1], match[2]) ;
			return end+2;
		}else{//error
			return -1;
		}
	}
	return -1;
}

function ElementAttributes(){
	this.attributeNames = {}
}
ElementAttributes.prototype = {
	setTagName:function(tagName){
		if(!tagNamePattern.test(tagName)){
			throw new Error('invalid tagName:'+tagName)
		}
		this.tagName = tagName
	},
	addValue:function(qName, value, offset) {
		if(!tagNamePattern.test(qName)){
			throw new Error('invalid attribute:'+qName)
		}
		this.attributeNames[qName] = this.length;
		this[this.length++] = {qName:qName,value:value,offset:offset}
	},
	length:0,
	getLocalName:function(i){return this[i].localName},
	getLocator:function(i){return this[i].locator},
	getQName:function(i){return this[i].qName},
	getURI:function(i){return this[i].uri},
	getValue:function(i){return this[i].value}
//	,getIndex:function(uri, localName)){
//		if(localName){
//
//		}else{
//			var qName = uri
//		}
//	},
//	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
//	getType:function(uri,localName){}
//	getType:function(i){},
}



function split(source,start){
	var match;
	var buf = [];
	var reg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
	reg.lastIndex = start;
	reg.exec(source);//skip <
	while(match = reg.exec(source)){
		buf.push(match);
		if(match[1])return buf;
	}
}

exports.XMLReader = XMLReader;
exports.ParseError = ParseError;


/***/ }),

/***/ "./node_modules/global/window.js":
/*!***************************************!*\
  !*** ./node_modules/global/window.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof __webpack_require__.g !== "undefined") {
    win = __webpack_require__.g;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;


/***/ }),

/***/ "./node_modules/mpd-parser/dist/mpd-parser.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/mpd-parser/dist/mpd-parser.es.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VERSION: () => (/* binding */ VERSION),
/* harmony export */   addSidxSegmentsToPlaylist: () => (/* binding */ addSidxSegmentsToPlaylist$1),
/* harmony export */   generateSidxKey: () => (/* binding */ generateSidxKey),
/* harmony export */   inheritAttributes: () => (/* binding */ inheritAttributes),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parseUTCTiming: () => (/* binding */ parseUTCTiming),
/* harmony export */   stringToMpdXml: () => (/* binding */ stringToMpdXml),
/* harmony export */   toM3u8: () => (/* binding */ toM3u8),
/* harmony export */   toPlaylists: () => (/* binding */ toPlaylists)
/* harmony export */ });
/* harmony import */ var _videojs_vhs_utils_es_resolve_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @videojs/vhs-utils/es/resolve-url */ "./node_modules/@videojs/vhs-utils/es/resolve-url.js");
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! global/window */ "./node_modules/global/window.js");
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(global_window__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _videojs_vhs_utils_es_media_groups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/vhs-utils/es/media-groups */ "./node_modules/@videojs/vhs-utils/es/media-groups.js");
/* harmony import */ var _videojs_vhs_utils_es_decode_b64_to_uint8_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @videojs/vhs-utils/es/decode-b64-to-uint8-array */ "./node_modules/@videojs/vhs-utils/es/decode-b64-to-uint8-array.js");
/* harmony import */ var _xmldom_xmldom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @xmldom/xmldom */ "./node_modules/@xmldom/xmldom/lib/index.js");
/*! @name mpd-parser @version 1.2.2 @license Apache-2.0 */






var version = "1.2.2";

const isObject = obj => {
  return !!obj && typeof obj === 'object';
};

const merge = (...objects) => {
  return objects.reduce((result, source) => {
    if (typeof source !== 'object') {
      return result;
    }

    Object.keys(source).forEach(key => {
      if (Array.isArray(result[key]) && Array.isArray(source[key])) {
        result[key] = result[key].concat(source[key]);
      } else if (isObject(result[key]) && isObject(source[key])) {
        result[key] = merge(result[key], source[key]);
      } else {
        result[key] = source[key];
      }
    });
    return result;
  }, {});
};
const values = o => Object.keys(o).map(k => o[k]);

const range = (start, end) => {
  const result = [];

  for (let i = start; i < end; i++) {
    result.push(i);
  }

  return result;
};
const flatten = lists => lists.reduce((x, y) => x.concat(y), []);
const from = list => {
  if (!list.length) {
    return [];
  }

  const result = [];

  for (let i = 0; i < list.length; i++) {
    result.push(list[i]);
  }

  return result;
};
const findIndexes = (l, key) => l.reduce((a, e, i) => {
  if (e[key]) {
    a.push(i);
  }

  return a;
}, []);
/**
 * Returns a union of the included lists provided each element can be identified by a key.
 *
 * @param {Array} list - list of lists to get the union of
 * @param {Function} keyFunction - the function to use as a key for each element
 *
 * @return {Array} the union of the arrays
 */

const union = (lists, keyFunction) => {
  return values(lists.reduce((acc, list) => {
    list.forEach(el => {
      acc[keyFunction(el)] = el;
    });
    return acc;
  }, {}));
};

var errors = {
  INVALID_NUMBER_OF_PERIOD: 'INVALID_NUMBER_OF_PERIOD',
  INVALID_NUMBER_OF_CONTENT_STEERING: 'INVALID_NUMBER_OF_CONTENT_STEERING',
  DASH_EMPTY_MANIFEST: 'DASH_EMPTY_MANIFEST',
  DASH_INVALID_XML: 'DASH_INVALID_XML',
  NO_BASE_URL: 'NO_BASE_URL',
  MISSING_SEGMENT_INFORMATION: 'MISSING_SEGMENT_INFORMATION',
  SEGMENT_TIME_UNSPECIFIED: 'SEGMENT_TIME_UNSPECIFIED',
  UNSUPPORTED_UTC_TIMING_SCHEME: 'UNSUPPORTED_UTC_TIMING_SCHEME'
};

/**
 * @typedef {Object} SingleUri
 * @property {string} uri - relative location of segment
 * @property {string} resolvedUri - resolved location of segment
 * @property {Object} byterange - Object containing information on how to make byte range
 *   requests following byte-range-spec per RFC2616.
 * @property {String} byterange.length - length of range request
 * @property {String} byterange.offset - byte offset of range request
 *
 * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35.1
 */

/**
 * Converts a URLType node (5.3.9.2.3 Table 13) to a segment object
 * that conforms to how m3u8-parser is structured
 *
 * @see https://github.com/videojs/m3u8-parser
 *
 * @param {string} baseUrl - baseUrl provided by <BaseUrl> nodes
 * @param {string} source - source url for segment
 * @param {string} range - optional range used for range calls,
 *   follows  RFC 2616, Clause 14.35.1
 * @return {SingleUri} full segment information transformed into a format similar
 *   to m3u8-parser
 */

const urlTypeToSegment = ({
  baseUrl = '',
  source = '',
  range = '',
  indexRange = ''
}) => {
  const segment = {
    uri: source,
    resolvedUri: (0,_videojs_vhs_utils_es_resolve_url__WEBPACK_IMPORTED_MODULE_0__["default"])(baseUrl || '', source)
  };

  if (range || indexRange) {
    const rangeStr = range ? range : indexRange;
    const ranges = rangeStr.split('-'); // default to parsing this as a BigInt if possible

    let startRange = (global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt) ? global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(ranges[0]) : parseInt(ranges[0], 10);
    let endRange = (global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt) ? global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(ranges[1]) : parseInt(ranges[1], 10); // convert back to a number if less than MAX_SAFE_INTEGER

    if (startRange < Number.MAX_SAFE_INTEGER && typeof startRange === 'bigint') {
      startRange = Number(startRange);
    }

    if (endRange < Number.MAX_SAFE_INTEGER && typeof endRange === 'bigint') {
      endRange = Number(endRange);
    }

    let length;

    if (typeof endRange === 'bigint' || typeof startRange === 'bigint') {
      length = global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(endRange) - global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(startRange) + global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(1);
    } else {
      length = endRange - startRange + 1;
    }

    if (typeof length === 'bigint' && length < Number.MAX_SAFE_INTEGER) {
      length = Number(length);
    } // byterange should be inclusive according to
    // RFC 2616, Clause 14.35.1


    segment.byterange = {
      length,
      offset: startRange
    };
  }

  return segment;
};
const byteRangeToString = byterange => {
  // `endRange` is one less than `offset + length` because the HTTP range
  // header uses inclusive ranges
  let endRange;

  if (typeof byterange.offset === 'bigint' || typeof byterange.length === 'bigint') {
    endRange = global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(byterange.offset) + global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(byterange.length) - global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(1);
  } else {
    endRange = byterange.offset + byterange.length - 1;
  }

  return `${byterange.offset}-${endRange}`;
};

/**
 * parse the end number attribue that can be a string
 * number, or undefined.
 *
 * @param {string|number|undefined} endNumber
 *        The end number attribute.
 *
 * @return {number|null}
 *          The result of parsing the end number.
 */

const parseEndNumber = endNumber => {
  if (endNumber && typeof endNumber !== 'number') {
    endNumber = parseInt(endNumber, 10);
  }

  if (isNaN(endNumber)) {
    return null;
  }

  return endNumber;
};
/**
 * Functions for calculating the range of available segments in static and dynamic
 * manifests.
 */


const segmentRange = {
  /**
   * Returns the entire range of available segments for a static MPD
   *
   * @param {Object} attributes
   *        Inheritied MPD attributes
   * @return {{ start: number, end: number }}
   *         The start and end numbers for available segments
   */
  static(attributes) {
    const {
      duration,
      timescale = 1,
      sourceDuration,
      periodDuration
    } = attributes;
    const endNumber = parseEndNumber(attributes.endNumber);
    const segmentDuration = duration / timescale;

    if (typeof endNumber === 'number') {
      return {
        start: 0,
        end: endNumber
      };
    }

    if (typeof periodDuration === 'number') {
      return {
        start: 0,
        end: periodDuration / segmentDuration
      };
    }

    return {
      start: 0,
      end: sourceDuration / segmentDuration
    };
  },

  /**
   * Returns the current live window range of available segments for a dynamic MPD
   *
   * @param {Object} attributes
   *        Inheritied MPD attributes
   * @return {{ start: number, end: number }}
   *         The start and end numbers for available segments
   */
  dynamic(attributes) {
    const {
      NOW,
      clientOffset,
      availabilityStartTime,
      timescale = 1,
      duration,
      periodStart = 0,
      minimumUpdatePeriod = 0,
      timeShiftBufferDepth = Infinity
    } = attributes;
    const endNumber = parseEndNumber(attributes.endNumber); // clientOffset is passed in at the top level of mpd-parser and is an offset calculated
    // after retrieving UTC server time.

    const now = (NOW + clientOffset) / 1000; // WC stands for Wall Clock.
    // Convert the period start time to EPOCH.

    const periodStartWC = availabilityStartTime + periodStart; // Period end in EPOCH is manifest's retrieval time + time until next update.

    const periodEndWC = now + minimumUpdatePeriod;
    const periodDuration = periodEndWC - periodStartWC;
    const segmentCount = Math.ceil(periodDuration * timescale / duration);
    const availableStart = Math.floor((now - periodStartWC - timeShiftBufferDepth) * timescale / duration);
    const availableEnd = Math.floor((now - periodStartWC) * timescale / duration);
    return {
      start: Math.max(0, availableStart),
      end: typeof endNumber === 'number' ? endNumber : Math.min(segmentCount, availableEnd)
    };
  }

};
/**
 * Maps a range of numbers to objects with information needed to build the corresponding
 * segment list
 *
 * @name toSegmentsCallback
 * @function
 * @param {number} number
 *        Number of the segment
 * @param {number} index
 *        Index of the number in the range list
 * @return {{ number: Number, duration: Number, timeline: Number, time: Number }}
 *         Object with segment timing and duration info
 */

/**
 * Returns a callback for Array.prototype.map for mapping a range of numbers to
 * information needed to build the segment list.
 *
 * @param {Object} attributes
 *        Inherited MPD attributes
 * @return {toSegmentsCallback}
 *         Callback map function
 */

const toSegments = attributes => number => {
  const {
    duration,
    timescale = 1,
    periodStart,
    startNumber = 1
  } = attributes;
  return {
    number: startNumber + number,
    duration: duration / timescale,
    timeline: periodStart,
    time: number * duration
  };
};
/**
 * Returns a list of objects containing segment timing and duration info used for
 * building the list of segments. This uses the @duration attribute specified
 * in the MPD manifest to derive the range of segments.
 *
 * @param {Object} attributes
 *        Inherited MPD attributes
 * @return {{number: number, duration: number, time: number, timeline: number}[]}
 *         List of Objects with segment timing and duration info
 */

const parseByDuration = attributes => {
  const {
    type,
    duration,
    timescale = 1,
    periodDuration,
    sourceDuration
  } = attributes;
  const {
    start,
    end
  } = segmentRange[type](attributes);
  const segments = range(start, end).map(toSegments(attributes));

  if (type === 'static') {
    const index = segments.length - 1; // section is either a period or the full source

    const sectionDuration = typeof periodDuration === 'number' ? periodDuration : sourceDuration; // final segment may be less than full segment duration

    segments[index].duration = sectionDuration - duration / timescale * index;
  }

  return segments;
};

/**
 * Translates SegmentBase into a set of segments.
 * (DASH SPEC Section 5.3.9.3.2) contains a set of <SegmentURL> nodes.  Each
 * node should be translated into segment.
 *
 * @param {Object} attributes
 *   Object containing all inherited attributes from parent elements with attribute
 *   names as keys
 * @return {Object.<Array>} list of segments
 */

const segmentsFromBase = attributes => {
  const {
    baseUrl,
    initialization = {},
    sourceDuration,
    indexRange = '',
    periodStart,
    presentationTime,
    number = 0,
    duration
  } = attributes; // base url is required for SegmentBase to work, per spec (Section 5.3.9.2.1)

  if (!baseUrl) {
    throw new Error(errors.NO_BASE_URL);
  }

  const initSegment = urlTypeToSegment({
    baseUrl,
    source: initialization.sourceURL,
    range: initialization.range
  });
  const segment = urlTypeToSegment({
    baseUrl,
    source: baseUrl,
    indexRange
  });
  segment.map = initSegment; // If there is a duration, use it, otherwise use the given duration of the source
  // (since SegmentBase is only for one total segment)

  if (duration) {
    const segmentTimeInfo = parseByDuration(attributes);

    if (segmentTimeInfo.length) {
      segment.duration = segmentTimeInfo[0].duration;
      segment.timeline = segmentTimeInfo[0].timeline;
    }
  } else if (sourceDuration) {
    segment.duration = sourceDuration;
    segment.timeline = periodStart;
  } // If presentation time is provided, these segments are being generated by SIDX
  // references, and should use the time provided. For the general case of SegmentBase,
  // there should only be one segment in the period, so its presentation time is the same
  // as its period start.


  segment.presentationTime = presentationTime || periodStart;
  segment.number = number;
  return [segment];
};
/**
 * Given a playlist, a sidx box, and a baseUrl, update the segment list of the playlist
 * according to the sidx information given.
 *
 * playlist.sidx has metadadata about the sidx where-as the sidx param
 * is the parsed sidx box itself.
 *
 * @param {Object} playlist the playlist to update the sidx information for
 * @param {Object} sidx the parsed sidx box
 * @return {Object} the playlist object with the updated sidx information
 */

const addSidxSegmentsToPlaylist$1 = (playlist, sidx, baseUrl) => {
  // Retain init segment information
  const initSegment = playlist.sidx.map ? playlist.sidx.map : null; // Retain source duration from initial main manifest parsing

  const sourceDuration = playlist.sidx.duration; // Retain source timeline

  const timeline = playlist.timeline || 0;
  const sidxByteRange = playlist.sidx.byterange;
  const sidxEnd = sidxByteRange.offset + sidxByteRange.length; // Retain timescale of the parsed sidx

  const timescale = sidx.timescale; // referenceType 1 refers to other sidx boxes

  const mediaReferences = sidx.references.filter(r => r.referenceType !== 1);
  const segments = [];
  const type = playlist.endList ? 'static' : 'dynamic';
  const periodStart = playlist.sidx.timeline;
  let presentationTime = periodStart;
  let number = playlist.mediaSequence || 0; // firstOffset is the offset from the end of the sidx box

  let startIndex; // eslint-disable-next-line

  if (typeof sidx.firstOffset === 'bigint') {
    startIndex = global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(sidxEnd) + sidx.firstOffset;
  } else {
    startIndex = sidxEnd + sidx.firstOffset;
  }

  for (let i = 0; i < mediaReferences.length; i++) {
    const reference = sidx.references[i]; // size of the referenced (sub)segment

    const size = reference.referencedSize; // duration of the referenced (sub)segment, in  the  timescale
    // this will be converted to seconds when generating segments

    const duration = reference.subsegmentDuration; // should be an inclusive range

    let endIndex; // eslint-disable-next-line

    if (typeof startIndex === 'bigint') {
      endIndex = startIndex + global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(size) - global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(1);
    } else {
      endIndex = startIndex + size - 1;
    }

    const indexRange = `${startIndex}-${endIndex}`;
    const attributes = {
      baseUrl,
      timescale,
      timeline,
      periodStart,
      presentationTime,
      number,
      duration,
      sourceDuration,
      indexRange,
      type
    };
    const segment = segmentsFromBase(attributes)[0];

    if (initSegment) {
      segment.map = initSegment;
    }

    segments.push(segment);

    if (typeof startIndex === 'bigint') {
      startIndex += global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(size);
    } else {
      startIndex += size;
    }

    presentationTime += duration / timescale;
    number++;
  }

  playlist.segments = segments;
  return playlist;
};

const SUPPORTED_MEDIA_TYPES = ['AUDIO', 'SUBTITLES']; // allow one 60fps frame as leniency (arbitrarily chosen)

const TIME_FUDGE = 1 / 60;
/**
 * Given a list of timelineStarts, combines, dedupes, and sorts them.
 *
 * @param {TimelineStart[]} timelineStarts - list of timeline starts
 *
 * @return {TimelineStart[]} the combined and deduped timeline starts
 */

const getUniqueTimelineStarts = timelineStarts => {
  return union(timelineStarts, ({
    timeline
  }) => timeline).sort((a, b) => a.timeline > b.timeline ? 1 : -1);
};
/**
 * Finds the playlist with the matching NAME attribute.
 *
 * @param {Array} playlists - playlists to search through
 * @param {string} name - the NAME attribute to search for
 *
 * @return {Object|null} the matching playlist object, or null
 */

const findPlaylistWithName = (playlists, name) => {
  for (let i = 0; i < playlists.length; i++) {
    if (playlists[i].attributes.NAME === name) {
      return playlists[i];
    }
  }

  return null;
};
/**
 * Gets a flattened array of media group playlists.
 *
 * @param {Object} manifest - the main manifest object
 *
 * @return {Array} the media group playlists
 */

const getMediaGroupPlaylists = manifest => {
  let mediaGroupPlaylists = [];
  (0,_videojs_vhs_utils_es_media_groups__WEBPACK_IMPORTED_MODULE_2__.forEachMediaGroup)(manifest, SUPPORTED_MEDIA_TYPES, (properties, type, group, label) => {
    mediaGroupPlaylists = mediaGroupPlaylists.concat(properties.playlists || []);
  });
  return mediaGroupPlaylists;
};
/**
 * Updates the playlist's media sequence numbers.
 *
 * @param {Object} config - options object
 * @param {Object} config.playlist - the playlist to update
 * @param {number} config.mediaSequence - the mediaSequence number to start with
 */

const updateMediaSequenceForPlaylist = ({
  playlist,
  mediaSequence
}) => {
  playlist.mediaSequence = mediaSequence;
  playlist.segments.forEach((segment, index) => {
    segment.number = playlist.mediaSequence + index;
  });
};
/**
 * Updates the media and discontinuity sequence numbers of newPlaylists given oldPlaylists
 * and a complete list of timeline starts.
 *
 * If no matching playlist is found, only the discontinuity sequence number of the playlist
 * will be updated.
 *
 * Since early available timelines are not supported, at least one segment must be present.
 *
 * @param {Object} config - options object
 * @param {Object[]} oldPlaylists - the old playlists to use as a reference
 * @param {Object[]} newPlaylists - the new playlists to update
 * @param {Object} timelineStarts - all timelineStarts seen in the stream to this point
 */

const updateSequenceNumbers = ({
  oldPlaylists,
  newPlaylists,
  timelineStarts
}) => {
  newPlaylists.forEach(playlist => {
    playlist.discontinuitySequence = timelineStarts.findIndex(function ({
      timeline
    }) {
      return timeline === playlist.timeline;
    }); // Playlists NAMEs come from DASH Representation IDs, which are mandatory
    // (see ISO_23009-1-2012 5.3.5.2).
    //
    // If the same Representation existed in a prior Period, it will retain the same NAME.

    const oldPlaylist = findPlaylistWithName(oldPlaylists, playlist.attributes.NAME);

    if (!oldPlaylist) {
      // Since this is a new playlist, the media sequence values can start from 0 without
      // consequence.
      return;
    } // TODO better support for live SIDX
    //
    // As of this writing, mpd-parser does not support multiperiod SIDX (in live or VOD).
    // This is evident by a playlist only having a single SIDX reference. In a multiperiod
    // playlist there would need to be multiple SIDX references. In addition, live SIDX is
    // not supported when the SIDX properties change on refreshes.
    //
    // In the future, if support needs to be added, the merging logic here can be called
    // after SIDX references are resolved. For now, exit early to prevent exceptions being
    // thrown due to undefined references.


    if (playlist.sidx) {
      return;
    } // Since we don't yet support early available timelines, we don't need to support
    // playlists with no segments.


    const firstNewSegment = playlist.segments[0];
    const oldMatchingSegmentIndex = oldPlaylist.segments.findIndex(function (oldSegment) {
      return Math.abs(oldSegment.presentationTime - firstNewSegment.presentationTime) < TIME_FUDGE;
    }); // No matching segment from the old playlist means the entire playlist was refreshed.
    // In this case the media sequence should account for this update, and the new segments
    // should be marked as discontinuous from the prior content, since the last prior
    // timeline was removed.

    if (oldMatchingSegmentIndex === -1) {
      updateMediaSequenceForPlaylist({
        playlist,
        mediaSequence: oldPlaylist.mediaSequence + oldPlaylist.segments.length
      });
      playlist.segments[0].discontinuity = true;
      playlist.discontinuityStarts.unshift(0); // No matching segment does not necessarily mean there's missing content.
      //
      // If the new playlist's timeline is the same as the last seen segment's timeline,
      // then a discontinuity can be added to identify that there's potentially missing
      // content. If there's no missing content, the discontinuity should still be rather
      // harmless. It's possible that if segment durations are accurate enough, that the
      // existence of a gap can be determined using the presentation times and durations,
      // but if the segment timing info is off, it may introduce more problems than simply
      // adding the discontinuity.
      //
      // If the new playlist's timeline is different from the last seen segment's timeline,
      // then a discontinuity can be added to identify that this is the first seen segment
      // of a new timeline. However, the logic at the start of this function that
      // determined the disconinuity sequence by timeline index is now off by one (the
      // discontinuity of the newest timeline hasn't yet fallen off the manifest...since
      // we added it), so the disconinuity sequence must be decremented.
      //
      // A period may also have a duration of zero, so the case of no segments is handled
      // here even though we don't yet support early available periods.

      if (!oldPlaylist.segments.length && playlist.timeline > oldPlaylist.timeline || oldPlaylist.segments.length && playlist.timeline > oldPlaylist.segments[oldPlaylist.segments.length - 1].timeline) {
        playlist.discontinuitySequence--;
      }

      return;
    } // If the first segment matched with a prior segment on a discontinuity (it's matching
    // on the first segment of a period), then the discontinuitySequence shouldn't be the
    // timeline's matching one, but instead should be the one prior, and the first segment
    // of the new manifest should be marked with a discontinuity.
    //
    // The reason for this special case is that discontinuity sequence shows how many
    // discontinuities have fallen off of the playlist, and discontinuities are marked on
    // the first segment of a new "timeline." Because of this, while DASH will retain that
    // Period while the "timeline" exists, HLS keeps track of it via the discontinuity
    // sequence, and that first segment is an indicator, but can be removed before that
    // timeline is gone.


    const oldMatchingSegment = oldPlaylist.segments[oldMatchingSegmentIndex];

    if (oldMatchingSegment.discontinuity && !firstNewSegment.discontinuity) {
      firstNewSegment.discontinuity = true;
      playlist.discontinuityStarts.unshift(0);
      playlist.discontinuitySequence--;
    }

    updateMediaSequenceForPlaylist({
      playlist,
      mediaSequence: oldPlaylist.segments[oldMatchingSegmentIndex].number
    });
  });
};
/**
 * Given an old parsed manifest object and a new parsed manifest object, updates the
 * sequence and timing values within the new manifest to ensure that it lines up with the
 * old.
 *
 * @param {Array} oldManifest - the old main manifest object
 * @param {Array} newManifest - the new main manifest object
 *
 * @return {Object} the updated new manifest object
 */

const positionManifestOnTimeline = ({
  oldManifest,
  newManifest
}) => {
  // Starting from v4.1.2 of the IOP, section 4.4.3.3 states:
  //
  // "MPD@availabilityStartTime and Period@start shall not be changed over MPD updates."
  //
  // This was added from https://github.com/Dash-Industry-Forum/DASH-IF-IOP/issues/160
  //
  // Because of this change, and the difficulty of supporting periods with changing start
  // times, periods with changing start times are not supported. This makes the logic much
  // simpler, since periods with the same start time can be considerred the same period
  // across refreshes.
  //
  // To give an example as to the difficulty of handling periods where the start time may
  // change, if a single period manifest is refreshed with another manifest with a single
  // period, and both the start and end times are increased, then the only way to determine
  // if it's a new period or an old one that has changed is to look through the segments of
  // each playlist and determine the presentation time bounds to find a match. In addition,
  // if the period start changed to exceed the old period end, then there would be no
  // match, and it would not be possible to determine whether the refreshed period is a new
  // one or the old one.
  const oldPlaylists = oldManifest.playlists.concat(getMediaGroupPlaylists(oldManifest));
  const newPlaylists = newManifest.playlists.concat(getMediaGroupPlaylists(newManifest)); // Save all seen timelineStarts to the new manifest. Although this potentially means that
  // there's a "memory leak" in that it will never stop growing, in reality, only a couple
  // of properties are saved for each seen Period. Even long running live streams won't
  // generate too many Periods, unless the stream is watched for decades. In the future,
  // this can be optimized by mapping to discontinuity sequence numbers for each timeline,
  // but it may not become an issue, and the additional info can be useful for debugging.

  newManifest.timelineStarts = getUniqueTimelineStarts([oldManifest.timelineStarts, newManifest.timelineStarts]);
  updateSequenceNumbers({
    oldPlaylists,
    newPlaylists,
    timelineStarts: newManifest.timelineStarts
  });
  return newManifest;
};

const generateSidxKey = sidx => sidx && sidx.uri + '-' + byteRangeToString(sidx.byterange);

const mergeDiscontiguousPlaylists = playlists => {
  // Break out playlists into groups based on their baseUrl
  const playlistsByBaseUrl = playlists.reduce(function (acc, cur) {
    if (!acc[cur.attributes.baseUrl]) {
      acc[cur.attributes.baseUrl] = [];
    }

    acc[cur.attributes.baseUrl].push(cur);
    return acc;
  }, {});
  let allPlaylists = [];
  Object.values(playlistsByBaseUrl).forEach(playlistGroup => {
    const mergedPlaylists = values(playlistGroup.reduce((acc, playlist) => {
      // assuming playlist IDs are the same across periods
      // TODO: handle multiperiod where representation sets are not the same
      // across periods
      const name = playlist.attributes.id + (playlist.attributes.lang || '');

      if (!acc[name]) {
        // First Period
        acc[name] = playlist;
        acc[name].attributes.timelineStarts = [];
      } else {
        // Subsequent Periods
        if (playlist.segments) {
          // first segment of subsequent periods signal a discontinuity
          if (playlist.segments[0]) {
            playlist.segments[0].discontinuity = true;
          }

          acc[name].segments.push(...playlist.segments);
        } // bubble up contentProtection, this assumes all DRM content
        // has the same contentProtection


        if (playlist.attributes.contentProtection) {
          acc[name].attributes.contentProtection = playlist.attributes.contentProtection;
        }
      }

      acc[name].attributes.timelineStarts.push({
        // Although they represent the same number, it's important to have both to make it
        // compatible with HLS potentially having a similar attribute.
        start: playlist.attributes.periodStart,
        timeline: playlist.attributes.periodStart
      });
      return acc;
    }, {}));
    allPlaylists = allPlaylists.concat(mergedPlaylists);
  });
  return allPlaylists.map(playlist => {
    playlist.discontinuityStarts = findIndexes(playlist.segments || [], 'discontinuity');
    return playlist;
  });
};

const addSidxSegmentsToPlaylist = (playlist, sidxMapping) => {
  const sidxKey = generateSidxKey(playlist.sidx);
  const sidxMatch = sidxKey && sidxMapping[sidxKey] && sidxMapping[sidxKey].sidx;

  if (sidxMatch) {
    addSidxSegmentsToPlaylist$1(playlist, sidxMatch, playlist.sidx.resolvedUri);
  }

  return playlist;
};
const addSidxSegmentsToPlaylists = (playlists, sidxMapping = {}) => {
  if (!Object.keys(sidxMapping).length) {
    return playlists;
  }

  for (const i in playlists) {
    playlists[i] = addSidxSegmentsToPlaylist(playlists[i], sidxMapping);
  }

  return playlists;
};
const formatAudioPlaylist = ({
  attributes,
  segments,
  sidx,
  mediaSequence,
  discontinuitySequence,
  discontinuityStarts
}, isAudioOnly) => {
  const playlist = {
    attributes: {
      NAME: attributes.id,
      BANDWIDTH: attributes.bandwidth,
      CODECS: attributes.codecs,
      ['PROGRAM-ID']: 1
    },
    uri: '',
    endList: attributes.type === 'static',
    timeline: attributes.periodStart,
    resolvedUri: attributes.baseUrl || '',
    targetDuration: attributes.duration,
    discontinuitySequence,
    discontinuityStarts,
    timelineStarts: attributes.timelineStarts,
    mediaSequence,
    segments
  };

  if (attributes.contentProtection) {
    playlist.contentProtection = attributes.contentProtection;
  }

  if (attributes.serviceLocation) {
    playlist.attributes.serviceLocation = attributes.serviceLocation;
  }

  if (sidx) {
    playlist.sidx = sidx;
  }

  if (isAudioOnly) {
    playlist.attributes.AUDIO = 'audio';
    playlist.attributes.SUBTITLES = 'subs';
  }

  return playlist;
};
const formatVttPlaylist = ({
  attributes,
  segments,
  mediaSequence,
  discontinuityStarts,
  discontinuitySequence
}) => {
  if (typeof segments === 'undefined') {
    // vtt tracks may use single file in BaseURL
    segments = [{
      uri: attributes.baseUrl,
      timeline: attributes.periodStart,
      resolvedUri: attributes.baseUrl || '',
      duration: attributes.sourceDuration,
      number: 0
    }]; // targetDuration should be the same duration as the only segment

    attributes.duration = attributes.sourceDuration;
  }

  const m3u8Attributes = {
    NAME: attributes.id,
    BANDWIDTH: attributes.bandwidth,
    ['PROGRAM-ID']: 1
  };

  if (attributes.codecs) {
    m3u8Attributes.CODECS = attributes.codecs;
  }

  const vttPlaylist = {
    attributes: m3u8Attributes,
    uri: '',
    endList: attributes.type === 'static',
    timeline: attributes.periodStart,
    resolvedUri: attributes.baseUrl || '',
    targetDuration: attributes.duration,
    timelineStarts: attributes.timelineStarts,
    discontinuityStarts,
    discontinuitySequence,
    mediaSequence,
    segments
  };

  if (attributes.serviceLocation) {
    vttPlaylist.attributes.serviceLocation = attributes.serviceLocation;
  }

  return vttPlaylist;
};
const organizeAudioPlaylists = (playlists, sidxMapping = {}, isAudioOnly = false) => {
  let mainPlaylist;
  const formattedPlaylists = playlists.reduce((a, playlist) => {
    const role = playlist.attributes.role && playlist.attributes.role.value || '';
    const language = playlist.attributes.lang || '';
    let label = playlist.attributes.label || 'main';

    if (language && !playlist.attributes.label) {
      const roleLabel = role ? ` (${role})` : '';
      label = `${playlist.attributes.lang}${roleLabel}`;
    }

    if (!a[label]) {
      a[label] = {
        language,
        autoselect: true,
        default: role === 'main',
        playlists: [],
        uri: ''
      };
    }

    const formatted = addSidxSegmentsToPlaylist(formatAudioPlaylist(playlist, isAudioOnly), sidxMapping);
    a[label].playlists.push(formatted);

    if (typeof mainPlaylist === 'undefined' && role === 'main') {
      mainPlaylist = playlist;
      mainPlaylist.default = true;
    }

    return a;
  }, {}); // if no playlists have role "main", mark the first as main

  if (!mainPlaylist) {
    const firstLabel = Object.keys(formattedPlaylists)[0];
    formattedPlaylists[firstLabel].default = true;
  }

  return formattedPlaylists;
};
const organizeVttPlaylists = (playlists, sidxMapping = {}) => {
  return playlists.reduce((a, playlist) => {
    const label = playlist.attributes.label || playlist.attributes.lang || 'text';

    if (!a[label]) {
      a[label] = {
        language: label,
        default: false,
        autoselect: false,
        playlists: [],
        uri: ''
      };
    }

    a[label].playlists.push(addSidxSegmentsToPlaylist(formatVttPlaylist(playlist), sidxMapping));
    return a;
  }, {});
};

const organizeCaptionServices = captionServices => captionServices.reduce((svcObj, svc) => {
  if (!svc) {
    return svcObj;
  }

  svc.forEach(service => {
    const {
      channel,
      language
    } = service;
    svcObj[language] = {
      autoselect: false,
      default: false,
      instreamId: channel,
      language
    };

    if (service.hasOwnProperty('aspectRatio')) {
      svcObj[language].aspectRatio = service.aspectRatio;
    }

    if (service.hasOwnProperty('easyReader')) {
      svcObj[language].easyReader = service.easyReader;
    }

    if (service.hasOwnProperty('3D')) {
      svcObj[language]['3D'] = service['3D'];
    }
  });
  return svcObj;
}, {});

const formatVideoPlaylist = ({
  attributes,
  segments,
  sidx,
  discontinuityStarts
}) => {
  const playlist = {
    attributes: {
      NAME: attributes.id,
      AUDIO: 'audio',
      SUBTITLES: 'subs',
      RESOLUTION: {
        width: attributes.width,
        height: attributes.height
      },
      CODECS: attributes.codecs,
      BANDWIDTH: attributes.bandwidth,
      ['PROGRAM-ID']: 1
    },
    uri: '',
    endList: attributes.type === 'static',
    timeline: attributes.periodStart,
    resolvedUri: attributes.baseUrl || '',
    targetDuration: attributes.duration,
    discontinuityStarts,
    timelineStarts: attributes.timelineStarts,
    segments
  };

  if (attributes.frameRate) {
    playlist.attributes['FRAME-RATE'] = attributes.frameRate;
  }

  if (attributes.contentProtection) {
    playlist.contentProtection = attributes.contentProtection;
  }

  if (attributes.serviceLocation) {
    playlist.attributes.serviceLocation = attributes.serviceLocation;
  }

  if (sidx) {
    playlist.sidx = sidx;
  }

  return playlist;
};

const videoOnly = ({
  attributes
}) => attributes.mimeType === 'video/mp4' || attributes.mimeType === 'video/webm' || attributes.contentType === 'video';

const audioOnly = ({
  attributes
}) => attributes.mimeType === 'audio/mp4' || attributes.mimeType === 'audio/webm' || attributes.contentType === 'audio';

const vttOnly = ({
  attributes
}) => attributes.mimeType === 'text/vtt' || attributes.contentType === 'text';
/**
 * Contains start and timeline properties denoting a timeline start. For DASH, these will
 * be the same number.
 *
 * @typedef {Object} TimelineStart
 * @property {number} start - the start time of the timeline
 * @property {number} timeline - the timeline number
 */

/**
 * Adds appropriate media and discontinuity sequence values to the segments and playlists.
 *
 * Throughout mpd-parser, the `number` attribute is used in relation to `startNumber`, a
 * DASH specific attribute used in constructing segment URI's from templates. However, from
 * an HLS perspective, the `number` attribute on a segment would be its `mediaSequence`
 * value, which should start at the original media sequence value (or 0) and increment by 1
 * for each segment thereafter. Since DASH's `startNumber` values are independent per
 * period, it doesn't make sense to use it for `number`. Instead, assume everything starts
 * from a 0 mediaSequence value and increment from there.
 *
 * Note that VHS currently doesn't use the `number` property, but it can be helpful for
 * debugging and making sense of the manifest.
 *
 * For live playlists, to account for values increasing in manifests when periods are
 * removed on refreshes, merging logic should be used to update the numbers to their
 * appropriate values (to ensure they're sequential and increasing).
 *
 * @param {Object[]} playlists - the playlists to update
 * @param {TimelineStart[]} timelineStarts - the timeline starts for the manifest
 */


const addMediaSequenceValues = (playlists, timelineStarts) => {
  // increment all segments sequentially
  playlists.forEach(playlist => {
    playlist.mediaSequence = 0;
    playlist.discontinuitySequence = timelineStarts.findIndex(function ({
      timeline
    }) {
      return timeline === playlist.timeline;
    });

    if (!playlist.segments) {
      return;
    }

    playlist.segments.forEach((segment, index) => {
      segment.number = index;
    });
  });
};
/**
 * Given a media group object, flattens all playlists within the media group into a single
 * array.
 *
 * @param {Object} mediaGroupObject - the media group object
 *
 * @return {Object[]}
 *         The media group playlists
 */

const flattenMediaGroupPlaylists = mediaGroupObject => {
  if (!mediaGroupObject) {
    return [];
  }

  return Object.keys(mediaGroupObject).reduce((acc, label) => {
    const labelContents = mediaGroupObject[label];
    return acc.concat(labelContents.playlists);
  }, []);
};
const toM3u8 = ({
  dashPlaylists,
  locations,
  contentSteering,
  sidxMapping = {},
  previousManifest,
  eventStream
}) => {
  if (!dashPlaylists.length) {
    return {};
  } // grab all main manifest attributes


  const {
    sourceDuration: duration,
    type,
    suggestedPresentationDelay,
    minimumUpdatePeriod
  } = dashPlaylists[0].attributes;
  const videoPlaylists = mergeDiscontiguousPlaylists(dashPlaylists.filter(videoOnly)).map(formatVideoPlaylist);
  const audioPlaylists = mergeDiscontiguousPlaylists(dashPlaylists.filter(audioOnly));
  const vttPlaylists = mergeDiscontiguousPlaylists(dashPlaylists.filter(vttOnly));
  const captions = dashPlaylists.map(playlist => playlist.attributes.captionServices).filter(Boolean);
  const manifest = {
    allowCache: true,
    discontinuityStarts: [],
    segments: [],
    endList: true,
    mediaGroups: {
      AUDIO: {},
      VIDEO: {},
      ['CLOSED-CAPTIONS']: {},
      SUBTITLES: {}
    },
    uri: '',
    duration,
    playlists: addSidxSegmentsToPlaylists(videoPlaylists, sidxMapping)
  };

  if (minimumUpdatePeriod >= 0) {
    manifest.minimumUpdatePeriod = minimumUpdatePeriod * 1000;
  }

  if (locations) {
    manifest.locations = locations;
  }

  if (contentSteering) {
    manifest.contentSteering = contentSteering;
  }

  if (type === 'dynamic') {
    manifest.suggestedPresentationDelay = suggestedPresentationDelay;
  }

  if (eventStream && eventStream.length > 0) {
    manifest.eventStream = eventStream;
  }

  const isAudioOnly = manifest.playlists.length === 0;
  const organizedAudioGroup = audioPlaylists.length ? organizeAudioPlaylists(audioPlaylists, sidxMapping, isAudioOnly) : null;
  const organizedVttGroup = vttPlaylists.length ? organizeVttPlaylists(vttPlaylists, sidxMapping) : null;
  const formattedPlaylists = videoPlaylists.concat(flattenMediaGroupPlaylists(organizedAudioGroup), flattenMediaGroupPlaylists(organizedVttGroup));
  const playlistTimelineStarts = formattedPlaylists.map(({
    timelineStarts
  }) => timelineStarts);
  manifest.timelineStarts = getUniqueTimelineStarts(playlistTimelineStarts);
  addMediaSequenceValues(formattedPlaylists, manifest.timelineStarts);

  if (organizedAudioGroup) {
    manifest.mediaGroups.AUDIO.audio = organizedAudioGroup;
  }

  if (organizedVttGroup) {
    manifest.mediaGroups.SUBTITLES.subs = organizedVttGroup;
  }

  if (captions.length) {
    manifest.mediaGroups['CLOSED-CAPTIONS'].cc = organizeCaptionServices(captions);
  }

  if (previousManifest) {
    return positionManifestOnTimeline({
      oldManifest: previousManifest,
      newManifest: manifest
    });
  }

  return manifest;
};

/**
 * Calculates the R (repetition) value for a live stream (for the final segment
 * in a manifest where the r value is negative 1)
 *
 * @param {Object} attributes
 *        Object containing all inherited attributes from parent elements with attribute
 *        names as keys
 * @param {number} time
 *        current time (typically the total time up until the final segment)
 * @param {number} duration
 *        duration property for the given <S />
 *
 * @return {number}
 *        R value to reach the end of the given period
 */
const getLiveRValue = (attributes, time, duration) => {
  const {
    NOW,
    clientOffset,
    availabilityStartTime,
    timescale = 1,
    periodStart = 0,
    minimumUpdatePeriod = 0
  } = attributes;
  const now = (NOW + clientOffset) / 1000;
  const periodStartWC = availabilityStartTime + periodStart;
  const periodEndWC = now + minimumUpdatePeriod;
  const periodDuration = periodEndWC - periodStartWC;
  return Math.ceil((periodDuration * timescale - time) / duration);
};
/**
 * Uses information provided by SegmentTemplate.SegmentTimeline to determine segment
 * timing and duration
 *
 * @param {Object} attributes
 *        Object containing all inherited attributes from parent elements with attribute
 *        names as keys
 * @param {Object[]} segmentTimeline
 *        List of objects representing the attributes of each S element contained within
 *
 * @return {{number: number, duration: number, time: number, timeline: number}[]}
 *         List of Objects with segment timing and duration info
 */


const parseByTimeline = (attributes, segmentTimeline) => {
  const {
    type,
    minimumUpdatePeriod = 0,
    media = '',
    sourceDuration,
    timescale = 1,
    startNumber = 1,
    periodStart: timeline
  } = attributes;
  const segments = [];
  let time = -1;

  for (let sIndex = 0; sIndex < segmentTimeline.length; sIndex++) {
    const S = segmentTimeline[sIndex];
    const duration = S.d;
    const repeat = S.r || 0;
    const segmentTime = S.t || 0;

    if (time < 0) {
      // first segment
      time = segmentTime;
    }

    if (segmentTime && segmentTime > time) {
      // discontinuity
      // TODO: How to handle this type of discontinuity
      // timeline++ here would treat it like HLS discontuity and content would
      // get appended without gap
      // E.G.
      //  <S t="0" d="1" />
      //  <S d="1" />
      //  <S d="1" />
      //  <S t="5" d="1" />
      // would have $Time$ values of [0, 1, 2, 5]
      // should this be appened at time positions [0, 1, 2, 3],(#EXT-X-DISCONTINUITY)
      // or [0, 1, 2, gap, gap, 5]? (#EXT-X-GAP)
      // does the value of sourceDuration consider this when calculating arbitrary
      // negative @r repeat value?
      // E.G. Same elements as above with this added at the end
      //  <S d="1" r="-1" />
      //  with a sourceDuration of 10
      // Would the 2 gaps be included in the time duration calculations resulting in
      // 8 segments with $Time$ values of [0, 1, 2, 5, 6, 7, 8, 9] or 10 segments
      // with $Time$ values of [0, 1, 2, 5, 6, 7, 8, 9, 10, 11] ?
      time = segmentTime;
    }

    let count;

    if (repeat < 0) {
      const nextS = sIndex + 1;

      if (nextS === segmentTimeline.length) {
        // last segment
        if (type === 'dynamic' && minimumUpdatePeriod > 0 && media.indexOf('$Number$') > 0) {
          count = getLiveRValue(attributes, time, duration);
        } else {
          // TODO: This may be incorrect depending on conclusion of TODO above
          count = (sourceDuration * timescale - time) / duration;
        }
      } else {
        count = (segmentTimeline[nextS].t - time) / duration;
      }
    } else {
      count = repeat + 1;
    }

    const end = startNumber + segments.length + count;
    let number = startNumber + segments.length;

    while (number < end) {
      segments.push({
        number,
        duration: duration / timescale,
        time,
        timeline
      });
      time += duration;
      number++;
    }
  }

  return segments;
};

const identifierPattern = /\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g;
/**
 * Replaces template identifiers with corresponding values. To be used as the callback
 * for String.prototype.replace
 *
 * @name replaceCallback
 * @function
 * @param {string} match
 *        Entire match of identifier
 * @param {string} identifier
 *        Name of matched identifier
 * @param {string} format
 *        Format tag string. Its presence indicates that padding is expected
 * @param {string} width
 *        Desired length of the replaced value. Values less than this width shall be left
 *        zero padded
 * @return {string}
 *         Replacement for the matched identifier
 */

/**
 * Returns a function to be used as a callback for String.prototype.replace to replace
 * template identifiers
 *
 * @param {Obect} values
 *        Object containing values that shall be used to replace known identifiers
 * @param {number} values.RepresentationID
 *        Value of the Representation@id attribute
 * @param {number} values.Number
 *        Number of the corresponding segment
 * @param {number} values.Bandwidth
 *        Value of the Representation@bandwidth attribute.
 * @param {number} values.Time
 *        Timestamp value of the corresponding segment
 * @return {replaceCallback}
 *         Callback to be used with String.prototype.replace to replace identifiers
 */

const identifierReplacement = values => (match, identifier, format, width) => {
  if (match === '$$') {
    // escape sequence
    return '$';
  }

  if (typeof values[identifier] === 'undefined') {
    return match;
  }

  const value = '' + values[identifier];

  if (identifier === 'RepresentationID') {
    // Format tag shall not be present with RepresentationID
    return value;
  }

  if (!format) {
    width = 1;
  } else {
    width = parseInt(width, 10);
  }

  if (value.length >= width) {
    return value;
  }

  return `${new Array(width - value.length + 1).join('0')}${value}`;
};
/**
 * Constructs a segment url from a template string
 *
 * @param {string} url
 *        Template string to construct url from
 * @param {Obect} values
 *        Object containing values that shall be used to replace known identifiers
 * @param {number} values.RepresentationID
 *        Value of the Representation@id attribute
 * @param {number} values.Number
 *        Number of the corresponding segment
 * @param {number} values.Bandwidth
 *        Value of the Representation@bandwidth attribute.
 * @param {number} values.Time
 *        Timestamp value of the corresponding segment
 * @return {string}
 *         Segment url with identifiers replaced
 */

const constructTemplateUrl = (url, values) => url.replace(identifierPattern, identifierReplacement(values));
/**
 * Generates a list of objects containing timing and duration information about each
 * segment needed to generate segment uris and the complete segment object
 *
 * @param {Object} attributes
 *        Object containing all inherited attributes from parent elements with attribute
 *        names as keys
 * @param {Object[]|undefined} segmentTimeline
 *        List of objects representing the attributes of each S element contained within
 *        the SegmentTimeline element
 * @return {{number: number, duration: number, time: number, timeline: number}[]}
 *         List of Objects with segment timing and duration info
 */

const parseTemplateInfo = (attributes, segmentTimeline) => {
  if (!attributes.duration && !segmentTimeline) {
    // if neither @duration or SegmentTimeline are present, then there shall be exactly
    // one media segment
    return [{
      number: attributes.startNumber || 1,
      duration: attributes.sourceDuration,
      time: 0,
      timeline: attributes.periodStart
    }];
  }

  if (attributes.duration) {
    return parseByDuration(attributes);
  }

  return parseByTimeline(attributes, segmentTimeline);
};
/**
 * Generates a list of segments using information provided by the SegmentTemplate element
 *
 * @param {Object} attributes
 *        Object containing all inherited attributes from parent elements with attribute
 *        names as keys
 * @param {Object[]|undefined} segmentTimeline
 *        List of objects representing the attributes of each S element contained within
 *        the SegmentTimeline element
 * @return {Object[]}
 *         List of segment objects
 */

const segmentsFromTemplate = (attributes, segmentTimeline) => {
  const templateValues = {
    RepresentationID: attributes.id,
    Bandwidth: attributes.bandwidth || 0
  };
  const {
    initialization = {
      sourceURL: '',
      range: ''
    }
  } = attributes;
  const mapSegment = urlTypeToSegment({
    baseUrl: attributes.baseUrl,
    source: constructTemplateUrl(initialization.sourceURL, templateValues),
    range: initialization.range
  });
  const segments = parseTemplateInfo(attributes, segmentTimeline);
  return segments.map(segment => {
    templateValues.Number = segment.number;
    templateValues.Time = segment.time;
    const uri = constructTemplateUrl(attributes.media || '', templateValues); // See DASH spec section 5.3.9.2.2
    // - if timescale isn't present on any level, default to 1.

    const timescale = attributes.timescale || 1; // - if presentationTimeOffset isn't present on any level, default to 0

    const presentationTimeOffset = attributes.presentationTimeOffset || 0;
    const presentationTime = // Even if the @t attribute is not specified for the segment, segment.time is
    // calculated in mpd-parser prior to this, so it's assumed to be available.
    attributes.periodStart + (segment.time - presentationTimeOffset) / timescale;
    const map = {
      uri,
      timeline: segment.timeline,
      duration: segment.duration,
      resolvedUri: (0,_videojs_vhs_utils_es_resolve_url__WEBPACK_IMPORTED_MODULE_0__["default"])(attributes.baseUrl || '', uri),
      map: mapSegment,
      number: segment.number,
      presentationTime
    };
    return map;
  });
};

/**
 * Converts a <SegmentUrl> (of type URLType from the DASH spec 5.3.9.2 Table 14)
 * to an object that matches the output of a segment in videojs/mpd-parser
 *
 * @param {Object} attributes
 *   Object containing all inherited attributes from parent elements with attribute
 *   names as keys
 * @param {Object} segmentUrl
 *   <SegmentURL> node to translate into a segment object
 * @return {Object} translated segment object
 */

const SegmentURLToSegmentObject = (attributes, segmentUrl) => {
  const {
    baseUrl,
    initialization = {}
  } = attributes;
  const initSegment = urlTypeToSegment({
    baseUrl,
    source: initialization.sourceURL,
    range: initialization.range
  });
  const segment = urlTypeToSegment({
    baseUrl,
    source: segmentUrl.media,
    range: segmentUrl.mediaRange
  });
  segment.map = initSegment;
  return segment;
};
/**
 * Generates a list of segments using information provided by the SegmentList element
 * SegmentList (DASH SPEC Section 5.3.9.3.2) contains a set of <SegmentURL> nodes.  Each
 * node should be translated into segment.
 *
 * @param {Object} attributes
 *   Object containing all inherited attributes from parent elements with attribute
 *   names as keys
 * @param {Object[]|undefined} segmentTimeline
 *        List of objects representing the attributes of each S element contained within
 *        the SegmentTimeline element
 * @return {Object.<Array>} list of segments
 */


const segmentsFromList = (attributes, segmentTimeline) => {
  const {
    duration,
    segmentUrls = [],
    periodStart
  } = attributes; // Per spec (5.3.9.2.1) no way to determine segment duration OR
  // if both SegmentTimeline and @duration are defined, it is outside of spec.

  if (!duration && !segmentTimeline || duration && segmentTimeline) {
    throw new Error(errors.SEGMENT_TIME_UNSPECIFIED);
  }

  const segmentUrlMap = segmentUrls.map(segmentUrlObject => SegmentURLToSegmentObject(attributes, segmentUrlObject));
  let segmentTimeInfo;

  if (duration) {
    segmentTimeInfo = parseByDuration(attributes);
  }

  if (segmentTimeline) {
    segmentTimeInfo = parseByTimeline(attributes, segmentTimeline);
  }

  const segments = segmentTimeInfo.map((segmentTime, index) => {
    if (segmentUrlMap[index]) {
      const segment = segmentUrlMap[index]; // See DASH spec section 5.3.9.2.2
      // - if timescale isn't present on any level, default to 1.

      const timescale = attributes.timescale || 1; // - if presentationTimeOffset isn't present on any level, default to 0

      const presentationTimeOffset = attributes.presentationTimeOffset || 0;
      segment.timeline = segmentTime.timeline;
      segment.duration = segmentTime.duration;
      segment.number = segmentTime.number;
      segment.presentationTime = periodStart + (segmentTime.time - presentationTimeOffset) / timescale;
      return segment;
    } // Since we're mapping we should get rid of any blank segments (in case
    // the given SegmentTimeline is handling for more elements than we have
    // SegmentURLs for).

  }).filter(segment => segment);
  return segments;
};

const generateSegments = ({
  attributes,
  segmentInfo
}) => {
  let segmentAttributes;
  let segmentsFn;

  if (segmentInfo.template) {
    segmentsFn = segmentsFromTemplate;
    segmentAttributes = merge(attributes, segmentInfo.template);
  } else if (segmentInfo.base) {
    segmentsFn = segmentsFromBase;
    segmentAttributes = merge(attributes, segmentInfo.base);
  } else if (segmentInfo.list) {
    segmentsFn = segmentsFromList;
    segmentAttributes = merge(attributes, segmentInfo.list);
  }

  const segmentsInfo = {
    attributes
  };

  if (!segmentsFn) {
    return segmentsInfo;
  }

  const segments = segmentsFn(segmentAttributes, segmentInfo.segmentTimeline); // The @duration attribute will be used to determin the playlist's targetDuration which
  // must be in seconds. Since we've generated the segment list, we no longer need
  // @duration to be in @timescale units, so we can convert it here.

  if (segmentAttributes.duration) {
    const {
      duration,
      timescale = 1
    } = segmentAttributes;
    segmentAttributes.duration = duration / timescale;
  } else if (segments.length) {
    // if there is no @duration attribute, use the largest segment duration as
    // as target duration
    segmentAttributes.duration = segments.reduce((max, segment) => {
      return Math.max(max, Math.ceil(segment.duration));
    }, 0);
  } else {
    segmentAttributes.duration = 0;
  }

  segmentsInfo.attributes = segmentAttributes;
  segmentsInfo.segments = segments; // This is a sidx box without actual segment information

  if (segmentInfo.base && segmentAttributes.indexRange) {
    segmentsInfo.sidx = segments[0];
    segmentsInfo.segments = [];
  }

  return segmentsInfo;
};
const toPlaylists = representations => representations.map(generateSegments);

const findChildren = (element, name) => from(element.childNodes).filter(({
  tagName
}) => tagName === name);
const getContent = element => element.textContent.trim();

/**
 * Converts the provided string that may contain a division operation to a number.
 *
 * @param {string} value - the provided string value
 *
 * @return {number} the parsed string value
 */
const parseDivisionValue = value => {
  return parseFloat(value.split('/').reduce((prev, current) => prev / current));
};

const parseDuration = str => {
  const SECONDS_IN_YEAR = 365 * 24 * 60 * 60;
  const SECONDS_IN_MONTH = 30 * 24 * 60 * 60;
  const SECONDS_IN_DAY = 24 * 60 * 60;
  const SECONDS_IN_HOUR = 60 * 60;
  const SECONDS_IN_MIN = 60; // P10Y10M10DT10H10M10.1S

  const durationRegex = /P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/;
  const match = durationRegex.exec(str);

  if (!match) {
    return 0;
  }

  const [year, month, day, hour, minute, second] = match.slice(1);
  return parseFloat(year || 0) * SECONDS_IN_YEAR + parseFloat(month || 0) * SECONDS_IN_MONTH + parseFloat(day || 0) * SECONDS_IN_DAY + parseFloat(hour || 0) * SECONDS_IN_HOUR + parseFloat(minute || 0) * SECONDS_IN_MIN + parseFloat(second || 0);
};
const parseDate = str => {
  // Date format without timezone according to ISO 8601
  // YYY-MM-DDThh:mm:ss.ssssss
  const dateRegex = /^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/; // If the date string does not specifiy a timezone, we must specifiy UTC. This is
  // expressed by ending with 'Z'

  if (dateRegex.test(str)) {
    str += 'Z';
  }

  return Date.parse(str);
};

const parsers = {
  /**
   * Specifies the duration of the entire Media Presentation. Format is a duration string
   * as specified in ISO 8601
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The duration in seconds
   */
  mediaPresentationDuration(value) {
    return parseDuration(value);
  },

  /**
   * Specifies the Segment availability start time for all Segments referred to in this
   * MPD. For a dynamic manifest, it specifies the anchor for the earliest availability
   * time. Format is a date string as specified in ISO 8601
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The date as seconds from unix epoch
   */
  availabilityStartTime(value) {
    return parseDate(value) / 1000;
  },

  /**
   * Specifies the smallest period between potential changes to the MPD. Format is a
   * duration string as specified in ISO 8601
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The duration in seconds
   */
  minimumUpdatePeriod(value) {
    return parseDuration(value);
  },

  /**
   * Specifies the suggested presentation delay. Format is a
   * duration string as specified in ISO 8601
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The duration in seconds
   */
  suggestedPresentationDelay(value) {
    return parseDuration(value);
  },

  /**
   * specifices the type of mpd. Can be either "static" or "dynamic"
   *
   * @param {string} value
   *        value of attribute as a string
   *
   * @return {string}
   *         The type as a string
   */
  type(value) {
    return value;
  },

  /**
   * Specifies the duration of the smallest time shifting buffer for any Representation
   * in the MPD. Format is a duration string as specified in ISO 8601
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The duration in seconds
   */
  timeShiftBufferDepth(value) {
    return parseDuration(value);
  },

  /**
   * Specifies the PeriodStart time of the Period relative to the availabilityStarttime.
   * Format is a duration string as specified in ISO 8601
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The duration in seconds
   */
  start(value) {
    return parseDuration(value);
  },

  /**
   * Specifies the width of the visual presentation
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed width
   */
  width(value) {
    return parseInt(value, 10);
  },

  /**
   * Specifies the height of the visual presentation
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed height
   */
  height(value) {
    return parseInt(value, 10);
  },

  /**
   * Specifies the bitrate of the representation
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed bandwidth
   */
  bandwidth(value) {
    return parseInt(value, 10);
  },

  /**
   * Specifies the frame rate of the representation
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed frame rate
   */
  frameRate(value) {
    return parseDivisionValue(value);
  },

  /**
   * Specifies the number of the first Media Segment in this Representation in the Period
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed number
   */
  startNumber(value) {
    return parseInt(value, 10);
  },

  /**
   * Specifies the timescale in units per seconds
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed timescale
   */
  timescale(value) {
    return parseInt(value, 10);
  },

  /**
   * Specifies the presentationTimeOffset.
   *
   * @param {string} value
   *        value of the attribute as a string
   *
   * @return {number}
   *         The parsed presentationTimeOffset
   */
  presentationTimeOffset(value) {
    return parseInt(value, 10);
  },

  /**
   * Specifies the constant approximate Segment duration
   * NOTE: The <Period> element also contains an @duration attribute. This duration
   *       specifies the duration of the Period. This attribute is currently not
   *       supported by the rest of the parser, however we still check for it to prevent
   *       errors.
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed duration
   */
  duration(value) {
    const parsedValue = parseInt(value, 10);

    if (isNaN(parsedValue)) {
      return parseDuration(value);
    }

    return parsedValue;
  },

  /**
   * Specifies the Segment duration, in units of the value of the @timescale.
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed duration
   */
  d(value) {
    return parseInt(value, 10);
  },

  /**
   * Specifies the MPD start time, in @timescale units, the first Segment in the series
   * starts relative to the beginning of the Period
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed time
   */
  t(value) {
    return parseInt(value, 10);
  },

  /**
   * Specifies the repeat count of the number of following contiguous Segments with the
   * same duration expressed by the value of @d
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed number
   */
  r(value) {
    return parseInt(value, 10);
  },

  /**
   * Specifies the presentationTime.
   *
   * @param {string} value
   *        value of the attribute as a string
   *
   * @return {number}
   *         The parsed presentationTime
   */
  presentationTime(value) {
    return parseInt(value, 10);
  },

  /**
   * Default parser for all other attributes. Acts as a no-op and just returns the value
   * as a string
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {string}
   *         Unparsed value
   */
  DEFAULT(value) {
    return value;
  }

};
/**
 * Gets all the attributes and values of the provided node, parses attributes with known
 * types, and returns an object with attribute names mapped to values.
 *
 * @param {Node} el
 *        The node to parse attributes from
 * @return {Object}
 *         Object with all attributes of el parsed
 */

const parseAttributes = el => {
  if (!(el && el.attributes)) {
    return {};
  }

  return from(el.attributes).reduce((a, e) => {
    const parseFn = parsers[e.name] || parsers.DEFAULT;
    a[e.name] = parseFn(e.value);
    return a;
  }, {});
};

const keySystemsMap = {
  'urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b': 'org.w3.clearkey',
  'urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed': 'com.widevine.alpha',
  'urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95': 'com.microsoft.playready',
  'urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb': 'com.adobe.primetime'
};
/**
 * Builds a list of urls that is the product of the reference urls and BaseURL values
 *
 * @param {Object[]} references
 *        List of objects containing the reference URL as well as its attributes
 * @param {Node[]} baseUrlElements
 *        List of BaseURL nodes from the mpd
 * @return {Object[]}
 *         List of objects with resolved urls and attributes
 */

const buildBaseUrls = (references, baseUrlElements) => {
  if (!baseUrlElements.length) {
    return references;
  }

  return flatten(references.map(function (reference) {
    return baseUrlElements.map(function (baseUrlElement) {
      const initialBaseUrl = getContent(baseUrlElement);
      const resolvedBaseUrl = (0,_videojs_vhs_utils_es_resolve_url__WEBPACK_IMPORTED_MODULE_0__["default"])(reference.baseUrl, initialBaseUrl);
      const finalBaseUrl = merge(parseAttributes(baseUrlElement), {
        baseUrl: resolvedBaseUrl
      }); // If the URL is resolved, we want to get the serviceLocation from the reference
      // assuming there is no serviceLocation on the initialBaseUrl

      if (resolvedBaseUrl !== initialBaseUrl && !finalBaseUrl.serviceLocation && reference.serviceLocation) {
        finalBaseUrl.serviceLocation = reference.serviceLocation;
      }

      return finalBaseUrl;
    });
  }));
};
/**
 * Contains all Segment information for its containing AdaptationSet
 *
 * @typedef {Object} SegmentInformation
 * @property {Object|undefined} template
 *           Contains the attributes for the SegmentTemplate node
 * @property {Object[]|undefined} segmentTimeline
 *           Contains a list of atrributes for each S node within the SegmentTimeline node
 * @property {Object|undefined} list
 *           Contains the attributes for the SegmentList node
 * @property {Object|undefined} base
 *           Contains the attributes for the SegmentBase node
 */

/**
 * Returns all available Segment information contained within the AdaptationSet node
 *
 * @param {Node} adaptationSet
 *        The AdaptationSet node to get Segment information from
 * @return {SegmentInformation}
 *         The Segment information contained within the provided AdaptationSet
 */

const getSegmentInformation = adaptationSet => {
  const segmentTemplate = findChildren(adaptationSet, 'SegmentTemplate')[0];
  const segmentList = findChildren(adaptationSet, 'SegmentList')[0];
  const segmentUrls = segmentList && findChildren(segmentList, 'SegmentURL').map(s => merge({
    tag: 'SegmentURL'
  }, parseAttributes(s)));
  const segmentBase = findChildren(adaptationSet, 'SegmentBase')[0];
  const segmentTimelineParentNode = segmentList || segmentTemplate;
  const segmentTimeline = segmentTimelineParentNode && findChildren(segmentTimelineParentNode, 'SegmentTimeline')[0];
  const segmentInitializationParentNode = segmentList || segmentBase || segmentTemplate;
  const segmentInitialization = segmentInitializationParentNode && findChildren(segmentInitializationParentNode, 'Initialization')[0]; // SegmentTemplate is handled slightly differently, since it can have both
  // @initialization and an <Initialization> node.  @initialization can be templated,
  // while the node can have a url and range specified.  If the <SegmentTemplate> has
  // both @initialization and an <Initialization> subelement we opt to override with
  // the node, as this interaction is not defined in the spec.

  const template = segmentTemplate && parseAttributes(segmentTemplate);

  if (template && segmentInitialization) {
    template.initialization = segmentInitialization && parseAttributes(segmentInitialization);
  } else if (template && template.initialization) {
    // If it is @initialization we convert it to an object since this is the format that
    // later functions will rely on for the initialization segment.  This is only valid
    // for <SegmentTemplate>
    template.initialization = {
      sourceURL: template.initialization
    };
  }

  const segmentInfo = {
    template,
    segmentTimeline: segmentTimeline && findChildren(segmentTimeline, 'S').map(s => parseAttributes(s)),
    list: segmentList && merge(parseAttributes(segmentList), {
      segmentUrls,
      initialization: parseAttributes(segmentInitialization)
    }),
    base: segmentBase && merge(parseAttributes(segmentBase), {
      initialization: parseAttributes(segmentInitialization)
    })
  };
  Object.keys(segmentInfo).forEach(key => {
    if (!segmentInfo[key]) {
      delete segmentInfo[key];
    }
  });
  return segmentInfo;
};
/**
 * Contains Segment information and attributes needed to construct a Playlist object
 * from a Representation
 *
 * @typedef {Object} RepresentationInformation
 * @property {SegmentInformation} segmentInfo
 *           Segment information for this Representation
 * @property {Object} attributes
 *           Inherited attributes for this Representation
 */

/**
 * Maps a Representation node to an object containing Segment information and attributes
 *
 * @name inheritBaseUrlsCallback
 * @function
 * @param {Node} representation
 *        Representation node from the mpd
 * @return {RepresentationInformation}
 *         Representation information needed to construct a Playlist object
 */

/**
 * Returns a callback for Array.prototype.map for mapping Representation nodes to
 * Segment information and attributes using inherited BaseURL nodes.
 *
 * @param {Object} adaptationSetAttributes
 *        Contains attributes inherited by the AdaptationSet
 * @param {Object[]} adaptationSetBaseUrls
 *        List of objects containing resolved base URLs and attributes
 *        inherited by the AdaptationSet
 * @param {SegmentInformation} adaptationSetSegmentInfo
 *        Contains Segment information for the AdaptationSet
 * @return {inheritBaseUrlsCallback}
 *         Callback map function
 */

const inheritBaseUrls = (adaptationSetAttributes, adaptationSetBaseUrls, adaptationSetSegmentInfo) => representation => {
  const repBaseUrlElements = findChildren(representation, 'BaseURL');
  const repBaseUrls = buildBaseUrls(adaptationSetBaseUrls, repBaseUrlElements);
  const attributes = merge(adaptationSetAttributes, parseAttributes(representation));
  const representationSegmentInfo = getSegmentInformation(representation);
  return repBaseUrls.map(baseUrl => {
    return {
      segmentInfo: merge(adaptationSetSegmentInfo, representationSegmentInfo),
      attributes: merge(attributes, baseUrl)
    };
  });
};
/**
 * Tranforms a series of content protection nodes to
 * an object containing pssh data by key system
 *
 * @param {Node[]} contentProtectionNodes
 *        Content protection nodes
 * @return {Object}
 *        Object containing pssh data by key system
 */

const generateKeySystemInformation = contentProtectionNodes => {
  return contentProtectionNodes.reduce((acc, node) => {
    const attributes = parseAttributes(node); // Although it could be argued that according to the UUID RFC spec the UUID string (a-f chars) should be generated
    // as a lowercase string it also mentions it should be treated as case-insensitive on input. Since the key system
    // UUIDs in the keySystemsMap are hardcoded as lowercase in the codebase there isn't any reason not to do
    // .toLowerCase() on the input UUID string from the manifest (at least I could not think of one).

    if (attributes.schemeIdUri) {
      attributes.schemeIdUri = attributes.schemeIdUri.toLowerCase();
    }

    const keySystem = keySystemsMap[attributes.schemeIdUri];

    if (keySystem) {
      acc[keySystem] = {
        attributes
      };
      const psshNode = findChildren(node, 'cenc:pssh')[0];

      if (psshNode) {
        const pssh = getContent(psshNode);
        acc[keySystem].pssh = pssh && (0,_videojs_vhs_utils_es_decode_b64_to_uint8_array__WEBPACK_IMPORTED_MODULE_3__["default"])(pssh);
      }
    }

    return acc;
  }, {});
}; // defined in ANSI_SCTE 214-1 2016


const parseCaptionServiceMetadata = service => {
  // 608 captions
  if (service.schemeIdUri === 'urn:scte:dash:cc:cea-608:2015') {
    const values = typeof service.value !== 'string' ? [] : service.value.split(';');
    return values.map(value => {
      let channel;
      let language; // default language to value

      language = value;

      if (/^CC\d=/.test(value)) {
        [channel, language] = value.split('=');
      } else if (/^CC\d$/.test(value)) {
        channel = value;
      }

      return {
        channel,
        language
      };
    });
  } else if (service.schemeIdUri === 'urn:scte:dash:cc:cea-708:2015') {
    const values = typeof service.value !== 'string' ? [] : service.value.split(';');
    return values.map(value => {
      const flags = {
        // service or channel number 1-63
        'channel': undefined,
        // language is a 3ALPHA per ISO 639.2/B
        // field is required
        'language': undefined,
        // BIT 1/0 or ?
        // default value is 1, meaning 16:9 aspect ratio, 0 is 4:3, ? is unknown
        'aspectRatio': 1,
        // BIT 1/0
        // easy reader flag indicated the text is tailed to the needs of beginning readers
        // default 0, or off
        'easyReader': 0,
        // BIT 1/0
        // If 3d metadata is present (CEA-708.1) then 1
        // default 0
        '3D': 0
      };

      if (/=/.test(value)) {
        const [channel, opts = ''] = value.split('=');
        flags.channel = channel;
        flags.language = value;
        opts.split(',').forEach(opt => {
          const [name, val] = opt.split(':');

          if (name === 'lang') {
            flags.language = val; // er for easyReadery
          } else if (name === 'er') {
            flags.easyReader = Number(val); // war for wide aspect ratio
          } else if (name === 'war') {
            flags.aspectRatio = Number(val);
          } else if (name === '3D') {
            flags['3D'] = Number(val);
          }
        });
      } else {
        flags.language = value;
      }

      if (flags.channel) {
        flags.channel = 'SERVICE' + flags.channel;
      }

      return flags;
    });
  }
};
/**
 * A map callback that will parse all event stream data for a collection of periods
 * DASH ISO_IEC_23009 5.10.2.2
 * https://dashif-documents.azurewebsites.net/Events/master/event.html#mpd-event-timing
 *
 * @param {PeriodInformation} period object containing necessary period information
 * @return a collection of parsed eventstream event objects
 */

const toEventStream = period => {
  // get and flatten all EventStreams tags and parse attributes and children
  return flatten(findChildren(period.node, 'EventStream').map(eventStream => {
    const eventStreamAttributes = parseAttributes(eventStream);
    const schemeIdUri = eventStreamAttributes.schemeIdUri; // find all Events per EventStream tag and map to return objects

    return findChildren(eventStream, 'Event').map(event => {
      const eventAttributes = parseAttributes(event);
      const presentationTime = eventAttributes.presentationTime || 0;
      const timescale = eventStreamAttributes.timescale || 1;
      const duration = eventAttributes.duration || 0;
      const start = presentationTime / timescale + period.attributes.start;
      return {
        schemeIdUri,
        value: eventStreamAttributes.value,
        id: eventAttributes.id,
        start,
        end: start + duration / timescale,
        messageData: getContent(event) || eventAttributes.messageData,
        contentEncoding: eventStreamAttributes.contentEncoding,
        presentationTimeOffset: eventStreamAttributes.presentationTimeOffset || 0
      };
    });
  }));
};
/**
 * Maps an AdaptationSet node to a list of Representation information objects
 *
 * @name toRepresentationsCallback
 * @function
 * @param {Node} adaptationSet
 *        AdaptationSet node from the mpd
 * @return {RepresentationInformation[]}
 *         List of objects containing Representaion information
 */

/**
 * Returns a callback for Array.prototype.map for mapping AdaptationSet nodes to a list of
 * Representation information objects
 *
 * @param {Object} periodAttributes
 *        Contains attributes inherited by the Period
 * @param {Object[]} periodBaseUrls
 *        Contains list of objects with resolved base urls and attributes
 *        inherited by the Period
 * @param {string[]} periodSegmentInfo
 *        Contains Segment Information at the period level
 * @return {toRepresentationsCallback}
 *         Callback map function
 */

const toRepresentations = (periodAttributes, periodBaseUrls, periodSegmentInfo) => adaptationSet => {
  const adaptationSetAttributes = parseAttributes(adaptationSet);
  const adaptationSetBaseUrls = buildBaseUrls(periodBaseUrls, findChildren(adaptationSet, 'BaseURL'));
  const role = findChildren(adaptationSet, 'Role')[0];
  const roleAttributes = {
    role: parseAttributes(role)
  };
  let attrs = merge(periodAttributes, adaptationSetAttributes, roleAttributes);
  const accessibility = findChildren(adaptationSet, 'Accessibility')[0];
  const captionServices = parseCaptionServiceMetadata(parseAttributes(accessibility));

  if (captionServices) {
    attrs = merge(attrs, {
      captionServices
    });
  }

  const label = findChildren(adaptationSet, 'Label')[0];

  if (label && label.childNodes.length) {
    const labelVal = label.childNodes[0].nodeValue.trim();
    attrs = merge(attrs, {
      label: labelVal
    });
  }

  const contentProtection = generateKeySystemInformation(findChildren(adaptationSet, 'ContentProtection'));

  if (Object.keys(contentProtection).length) {
    attrs = merge(attrs, {
      contentProtection
    });
  }

  const segmentInfo = getSegmentInformation(adaptationSet);
  const representations = findChildren(adaptationSet, 'Representation');
  const adaptationSetSegmentInfo = merge(periodSegmentInfo, segmentInfo);
  return flatten(representations.map(inheritBaseUrls(attrs, adaptationSetBaseUrls, adaptationSetSegmentInfo)));
};
/**
 * Contains all period information for mapping nodes onto adaptation sets.
 *
 * @typedef {Object} PeriodInformation
 * @property {Node} period.node
 *           Period node from the mpd
 * @property {Object} period.attributes
 *           Parsed period attributes from node plus any added
 */

/**
 * Maps a PeriodInformation object to a list of Representation information objects for all
 * AdaptationSet nodes contained within the Period.
 *
 * @name toAdaptationSetsCallback
 * @function
 * @param {PeriodInformation} period
 *        Period object containing necessary period information
 * @param {number} periodStart
 *        Start time of the Period within the mpd
 * @return {RepresentationInformation[]}
 *         List of objects containing Representaion information
 */

/**
 * Returns a callback for Array.prototype.map for mapping Period nodes to a list of
 * Representation information objects
 *
 * @param {Object} mpdAttributes
 *        Contains attributes inherited by the mpd
  * @param {Object[]} mpdBaseUrls
 *        Contains list of objects with resolved base urls and attributes
 *        inherited by the mpd
 * @return {toAdaptationSetsCallback}
 *         Callback map function
 */

const toAdaptationSets = (mpdAttributes, mpdBaseUrls) => (period, index) => {
  const periodBaseUrls = buildBaseUrls(mpdBaseUrls, findChildren(period.node, 'BaseURL'));
  const periodAttributes = merge(mpdAttributes, {
    periodStart: period.attributes.start
  });

  if (typeof period.attributes.duration === 'number') {
    periodAttributes.periodDuration = period.attributes.duration;
  }

  const adaptationSets = findChildren(period.node, 'AdaptationSet');
  const periodSegmentInfo = getSegmentInformation(period.node);
  return flatten(adaptationSets.map(toRepresentations(periodAttributes, periodBaseUrls, periodSegmentInfo)));
};
/**
 * Tranforms an array of content steering nodes into an object
 * containing CDN content steering information from the MPD manifest.
 *
 * For more information on the DASH spec for Content Steering parsing, see:
 * https://dashif.org/docs/DASH-IF-CTS-00XX-Content-Steering-Community-Review.pdf
 *
 * @param {Node[]} contentSteeringNodes
 *        Content steering nodes
 * @param {Function} eventHandler
 *        The event handler passed into the parser options to handle warnings
 * @return {Object}
 *        Object containing content steering data
 */

const generateContentSteeringInformation = (contentSteeringNodes, eventHandler) => {
  // If there are more than one ContentSteering tags, throw an error
  if (contentSteeringNodes.length > 1) {
    eventHandler({
      type: 'warn',
      message: 'The MPD manifest should contain no more than one ContentSteering tag'
    });
  } // Return a null value if there are no ContentSteering tags


  if (!contentSteeringNodes.length) {
    return null;
  }

  const infoFromContentSteeringTag = merge({
    serverURL: getContent(contentSteeringNodes[0])
  }, parseAttributes(contentSteeringNodes[0])); // Converts `queryBeforeStart` to a boolean, as well as setting the default value
  // to `false` if it doesn't exist

  infoFromContentSteeringTag.queryBeforeStart = infoFromContentSteeringTag.queryBeforeStart === 'true';
  return infoFromContentSteeringTag;
};
/**
 * Gets Period@start property for a given period.
 *
 * @param {Object} options
 *        Options object
 * @param {Object} options.attributes
 *        Period attributes
 * @param {Object} [options.priorPeriodAttributes]
 *        Prior period attributes (if prior period is available)
 * @param {string} options.mpdType
 *        The MPD@type these periods came from
 * @return {number|null}
 *         The period start, or null if it's an early available period or error
 */

const getPeriodStart = ({
  attributes,
  priorPeriodAttributes,
  mpdType
}) => {
  // Summary of period start time calculation from DASH spec section 5.3.2.1
  //
  // A period's start is the first period's start + time elapsed after playing all
  // prior periods to this one. Periods continue one after the other in time (without
  // gaps) until the end of the presentation.
  //
  // The value of Period@start should be:
  // 1. if Period@start is present: value of Period@start
  // 2. if previous period exists and it has @duration: previous Period@start +
  //    previous Period@duration
  // 3. if this is first period and MPD@type is 'static': 0
  // 4. in all other cases, consider the period an "early available period" (note: not
  //    currently supported)
  // (1)
  if (typeof attributes.start === 'number') {
    return attributes.start;
  } // (2)


  if (priorPeriodAttributes && typeof priorPeriodAttributes.start === 'number' && typeof priorPeriodAttributes.duration === 'number') {
    return priorPeriodAttributes.start + priorPeriodAttributes.duration;
  } // (3)


  if (!priorPeriodAttributes && mpdType === 'static') {
    return 0;
  } // (4)
  // There is currently no logic for calculating the Period@start value if there is
  // no Period@start or prior Period@start and Period@duration available. This is not made
  // explicit by the DASH interop guidelines or the DASH spec, however, since there's
  // nothing about any other resolution strategies, it's implied. Thus, this case should
  // be considered an early available period, or error, and null should suffice for both
  // of those cases.


  return null;
};
/**
 * Traverses the mpd xml tree to generate a list of Representation information objects
 * that have inherited attributes from parent nodes
 *
 * @param {Node} mpd
 *        The root node of the mpd
 * @param {Object} options
 *        Available options for inheritAttributes
 * @param {string} options.manifestUri
 *        The uri source of the mpd
 * @param {number} options.NOW
 *        Current time per DASH IOP.  Default is current time in ms since epoch
 * @param {number} options.clientOffset
 *        Client time difference from NOW (in milliseconds)
 * @return {RepresentationInformation[]}
 *         List of objects containing Representation information
 */

const inheritAttributes = (mpd, options = {}) => {
  const {
    manifestUri = '',
    NOW = Date.now(),
    clientOffset = 0,
    // TODO: For now, we are expecting an eventHandler callback function
    // to be passed into the mpd parser as an option.
    // In the future, we should enable stream parsing by using the Stream class from vhs-utils.
    // This will support new features including a standardized event handler.
    // See the m3u8 parser for examples of how stream parsing is currently used for HLS parsing.
    // https://github.com/videojs/vhs-utils/blob/88d6e10c631e57a5af02c5a62bc7376cd456b4f5/src/stream.js#L9
    eventHandler = function () {}
  } = options;
  const periodNodes = findChildren(mpd, 'Period');

  if (!periodNodes.length) {
    throw new Error(errors.INVALID_NUMBER_OF_PERIOD);
  }

  const locations = findChildren(mpd, 'Location');
  const mpdAttributes = parseAttributes(mpd);
  const mpdBaseUrls = buildBaseUrls([{
    baseUrl: manifestUri
  }], findChildren(mpd, 'BaseURL'));
  const contentSteeringNodes = findChildren(mpd, 'ContentSteering'); // See DASH spec section 5.3.1.2, Semantics of MPD element. Default type to 'static'.

  mpdAttributes.type = mpdAttributes.type || 'static';
  mpdAttributes.sourceDuration = mpdAttributes.mediaPresentationDuration || 0;
  mpdAttributes.NOW = NOW;
  mpdAttributes.clientOffset = clientOffset;

  if (locations.length) {
    mpdAttributes.locations = locations.map(getContent);
  }

  const periods = []; // Since toAdaptationSets acts on individual periods right now, the simplest approach to
  // adding properties that require looking at prior periods is to parse attributes and add
  // missing ones before toAdaptationSets is called. If more such properties are added, it
  // may be better to refactor toAdaptationSets.

  periodNodes.forEach((node, index) => {
    const attributes = parseAttributes(node); // Use the last modified prior period, as it may contain added information necessary
    // for this period.

    const priorPeriod = periods[index - 1];
    attributes.start = getPeriodStart({
      attributes,
      priorPeriodAttributes: priorPeriod ? priorPeriod.attributes : null,
      mpdType: mpdAttributes.type
    });
    periods.push({
      node,
      attributes
    });
  });
  return {
    locations: mpdAttributes.locations,
    contentSteeringInfo: generateContentSteeringInformation(contentSteeringNodes, eventHandler),
    // TODO: There are occurences where this `representationInfo` array contains undesired
    // duplicates. This generally occurs when there are multiple BaseURL nodes that are
    // direct children of the MPD node. When we attempt to resolve URLs from a combination of the
    // parent BaseURL and a child BaseURL, and the value does not resolve,
    // we end up returning the child BaseURL multiple times.
    // We need to determine a way to remove these duplicates in a safe way.
    // See: https://github.com/videojs/mpd-parser/pull/17#discussion_r162750527
    representationInfo: flatten(periods.map(toAdaptationSets(mpdAttributes, mpdBaseUrls))),
    eventStream: flatten(periods.map(toEventStream))
  };
};

const stringToMpdXml = manifestString => {
  if (manifestString === '') {
    throw new Error(errors.DASH_EMPTY_MANIFEST);
  }

  const parser = new _xmldom_xmldom__WEBPACK_IMPORTED_MODULE_4__.DOMParser();
  let xml;
  let mpd;

  try {
    xml = parser.parseFromString(manifestString, 'application/xml');
    mpd = xml && xml.documentElement.tagName === 'MPD' ? xml.documentElement : null;
  } catch (e) {// ie 11 throws on invalid xml
  }

  if (!mpd || mpd && mpd.getElementsByTagName('parsererror').length > 0) {
    throw new Error(errors.DASH_INVALID_XML);
  }

  return mpd;
};

/**
 * Parses the manifest for a UTCTiming node, returning the nodes attributes if found
 *
 * @param {string} mpd
 *        XML string of the MPD manifest
 * @return {Object|null}
 *         Attributes of UTCTiming node specified in the manifest. Null if none found
 */

const parseUTCTimingScheme = mpd => {
  const UTCTimingNode = findChildren(mpd, 'UTCTiming')[0];

  if (!UTCTimingNode) {
    return null;
  }

  const attributes = parseAttributes(UTCTimingNode);

  switch (attributes.schemeIdUri) {
    case 'urn:mpeg:dash:utc:http-head:2014':
    case 'urn:mpeg:dash:utc:http-head:2012':
      attributes.method = 'HEAD';
      break;

    case 'urn:mpeg:dash:utc:http-xsdate:2014':
    case 'urn:mpeg:dash:utc:http-iso:2014':
    case 'urn:mpeg:dash:utc:http-xsdate:2012':
    case 'urn:mpeg:dash:utc:http-iso:2012':
      attributes.method = 'GET';
      break;

    case 'urn:mpeg:dash:utc:direct:2014':
    case 'urn:mpeg:dash:utc:direct:2012':
      attributes.method = 'DIRECT';
      attributes.value = Date.parse(attributes.value);
      break;

    case 'urn:mpeg:dash:utc:http-ntp:2014':
    case 'urn:mpeg:dash:utc:ntp:2014':
    case 'urn:mpeg:dash:utc:sntp:2014':
    default:
      throw new Error(errors.UNSUPPORTED_UTC_TIMING_SCHEME);
  }

  return attributes;
};

const VERSION = version;
/*
 * Given a DASH manifest string and options, parses the DASH manifest into an object in the
 * form outputed by m3u8-parser and accepted by videojs/http-streaming.
 *
 * For live DASH manifests, if `previousManifest` is provided in options, then the newly
 * parsed DASH manifest will have its media sequence and discontinuity sequence values
 * updated to reflect its position relative to the prior manifest.
 *
 * @param {string} manifestString - the DASH manifest as a string
 * @param {options} [options] - any options
 *
 * @return {Object} the manifest object
 */

const parse = (manifestString, options = {}) => {
  const parsedManifestInfo = inheritAttributes(stringToMpdXml(manifestString), options);
  const playlists = toPlaylists(parsedManifestInfo.representationInfo);
  return toM3u8({
    dashPlaylists: playlists,
    locations: parsedManifestInfo.locations,
    contentSteering: parsedManifestInfo.contentSteeringInfo,
    sidxMapping: options.sidxMapping,
    previousManifest: options.previousManifest,
    eventStream: parsedManifestInfo.eventStream
  });
};
/**
 * Parses the manifest for a UTCTiming node, returning the nodes attributes if found
 *
 * @param {string} manifestString
 *        XML string of the MPD manifest
 * @return {Object|null}
 *         Attributes of UTCTiming node specified in the manifest. Null if none found
 */


const parseUTCTiming = manifestString => parseUTCTimingScheme(stringToMpdXml(manifestString));




/***/ }),

/***/ "./src/mpd-parser.ts":
/*!***************************!*\
  !*** ./src/mpd-parser.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getParsedManifest: () => (/* binding */ getParsedManifest)
/* harmony export */ });
/* harmony import */ var mpd_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mpd-parser */ "./node_modules/mpd-parser/dist/mpd-parser.es.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var getParsedManifest = function (manifestUri) { return __awaiter(void 0, void 0, void 0, function () {
    var manifestResponse, manifest, parsedManifest, codecs, segments, initializationSegment;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(manifestUri)];
            case 1:
                manifestResponse = _a.sent();
                return [4 /*yield*/, manifestResponse.text()];
            case 2:
                manifest = _a.sent();
                parsedManifest = (0,mpd_parser__WEBPACK_IMPORTED_MODULE_0__.parse)(manifest);
                codecs = parsedManifest.playlists[0].attributes.CODECS;
                segments = parsedManifest.playlists[0].segments.map(function (segment) { return "./media/".concat(segment.uri); });
                initializationSegment = "./media/".concat(parsedManifest.playlists[0].segments[0].map.uri);
                return [2 /*return*/, { codecs: codecs, segments: segments, initializationSegment: initializationSegment }];
        }
    });
}); };


/***/ }),

/***/ "./node_modules/url-toolkit/src/url-toolkit.js":
/*!*****************************************************!*\
  !*** ./node_modules/url-toolkit/src/url-toolkit.js ***!
  \*****************************************************/
/***/ (function(module) {

// see https://tools.ietf.org/html/rfc1808

(function (root) {
  var URL_REGEX =
    /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/;
  var FIRST_SEGMENT_REGEX = /^(?=([^\/?#]*))\1([^]*)$/;
  var SLASH_DOT_REGEX = /(?:\/|^)\.(?=\/)/g;
  var SLASH_DOT_DOT_REGEX = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g;

  var URLToolkit = {
    // If opts.alwaysNormalize is true then the path will always be normalized even when it starts with / or //
    // E.g
    // With opts.alwaysNormalize = false (default, spec compliant)
    // http://a.com/b/cd + /e/f/../g => http://a.com/e/f/../g
    // With opts.alwaysNormalize = true (not spec compliant)
    // http://a.com/b/cd + /e/f/../g => http://a.com/e/g
    buildAbsoluteURL: function (baseURL, relativeURL, opts) {
      opts = opts || {};
      // remove any remaining space and CRLF
      baseURL = baseURL.trim();
      relativeURL = relativeURL.trim();
      if (!relativeURL) {
        // 2a) If the embedded URL is entirely empty, it inherits the
        // entire base URL (i.e., is set equal to the base URL)
        // and we are done.
        if (!opts.alwaysNormalize) {
          return baseURL;
        }
        var basePartsForNormalise = URLToolkit.parseURL(baseURL);
        if (!basePartsForNormalise) {
          throw new Error('Error trying to parse base URL.');
        }
        basePartsForNormalise.path = URLToolkit.normalizePath(
          basePartsForNormalise.path
        );
        return URLToolkit.buildURLFromParts(basePartsForNormalise);
      }
      var relativeParts = URLToolkit.parseURL(relativeURL);
      if (!relativeParts) {
        throw new Error('Error trying to parse relative URL.');
      }
      if (relativeParts.scheme) {
        // 2b) If the embedded URL starts with a scheme name, it is
        // interpreted as an absolute URL and we are done.
        if (!opts.alwaysNormalize) {
          return relativeURL;
        }
        relativeParts.path = URLToolkit.normalizePath(relativeParts.path);
        return URLToolkit.buildURLFromParts(relativeParts);
      }
      var baseParts = URLToolkit.parseURL(baseURL);
      if (!baseParts) {
        throw new Error('Error trying to parse base URL.');
      }
      if (!baseParts.netLoc && baseParts.path && baseParts.path[0] !== '/') {
        // If netLoc missing and path doesn't start with '/', assume everthing before the first '/' is the netLoc
        // This causes 'example.com/a' to be handled as '//example.com/a' instead of '/example.com/a'
        var pathParts = FIRST_SEGMENT_REGEX.exec(baseParts.path);
        baseParts.netLoc = pathParts[1];
        baseParts.path = pathParts[2];
      }
      if (baseParts.netLoc && !baseParts.path) {
        baseParts.path = '/';
      }
      var builtParts = {
        // 2c) Otherwise, the embedded URL inherits the scheme of
        // the base URL.
        scheme: baseParts.scheme,
        netLoc: relativeParts.netLoc,
        path: null,
        params: relativeParts.params,
        query: relativeParts.query,
        fragment: relativeParts.fragment,
      };
      if (!relativeParts.netLoc) {
        // 3) If the embedded URL's <net_loc> is non-empty, we skip to
        // Step 7.  Otherwise, the embedded URL inherits the <net_loc>
        // (if any) of the base URL.
        builtParts.netLoc = baseParts.netLoc;
        // 4) If the embedded URL path is preceded by a slash "/", the
        // path is not relative and we skip to Step 7.
        if (relativeParts.path[0] !== '/') {
          if (!relativeParts.path) {
            // 5) If the embedded URL path is empty (and not preceded by a
            // slash), then the embedded URL inherits the base URL path
            builtParts.path = baseParts.path;
            // 5a) if the embedded URL's <params> is non-empty, we skip to
            // step 7; otherwise, it inherits the <params> of the base
            // URL (if any) and
            if (!relativeParts.params) {
              builtParts.params = baseParts.params;
              // 5b) if the embedded URL's <query> is non-empty, we skip to
              // step 7; otherwise, it inherits the <query> of the base
              // URL (if any) and we skip to step 7.
              if (!relativeParts.query) {
                builtParts.query = baseParts.query;
              }
            }
          } else {
            // 6) The last segment of the base URL's path (anything
            // following the rightmost slash "/", or the entire path if no
            // slash is present) is removed and the embedded URL's path is
            // appended in its place.
            var baseURLPath = baseParts.path;
            var newPath =
              baseURLPath.substring(0, baseURLPath.lastIndexOf('/') + 1) +
              relativeParts.path;
            builtParts.path = URLToolkit.normalizePath(newPath);
          }
        }
      }
      if (builtParts.path === null) {
        builtParts.path = opts.alwaysNormalize
          ? URLToolkit.normalizePath(relativeParts.path)
          : relativeParts.path;
      }
      return URLToolkit.buildURLFromParts(builtParts);
    },
    parseURL: function (url) {
      var parts = URL_REGEX.exec(url);
      if (!parts) {
        return null;
      }
      return {
        scheme: parts[1] || '',
        netLoc: parts[2] || '',
        path: parts[3] || '',
        params: parts[4] || '',
        query: parts[5] || '',
        fragment: parts[6] || '',
      };
    },
    normalizePath: function (path) {
      // The following operations are
      // then applied, in order, to the new path:
      // 6a) All occurrences of "./", where "." is a complete path
      // segment, are removed.
      // 6b) If the path ends with "." as a complete path segment,
      // that "." is removed.
      path = path.split('').reverse().join('').replace(SLASH_DOT_REGEX, '');
      // 6c) All occurrences of "<segment>/../", where <segment> is a
      // complete path segment not equal to "..", are removed.
      // Removal of these path segments is performed iteratively,
      // removing the leftmost matching pattern on each iteration,
      // until no matching pattern remains.
      // 6d) If the path ends with "<segment>/..", where <segment> is a
      // complete path segment not equal to "..", that
      // "<segment>/.." is removed.
      while (
        path.length !== (path = path.replace(SLASH_DOT_DOT_REGEX, '')).length
      ) {}
      return path.split('').reverse().join('');
    },
    buildURLFromParts: function (parts) {
      return (
        parts.scheme +
        parts.netLoc +
        parts.path +
        parts.params +
        parts.query +
        parts.fragment
      );
    },
  };

  if (true)
    module.exports = URLToolkit;
  else {}
})(this);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_mpd_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/mpd-parser */ "./src/mpd-parser.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var handleWebVTTTextTracks = function (video) { return __awaiter(void 0, void 0, void 0, function () {
    function parseWebVTT(vttString) {
        // Split the VTT string into lines
        var lines = vttString.split("\n");
        // Regular expression to match the cue timings
        var cuePattern = /(\d{2}:\d{2}:\d{2}\.\d{3}) --> (\d{2}:\d{2}:\d{2}\.\d{3})/;
        // Array to hold all our cues
        var cues = [];
        var currentCue = null;
        // Process the lines
        lines.forEach(function (line) {
            // Check for a cue timing
            var cueMatch = line.match(cuePattern);
            if (cueMatch) {
                // Found a cue timing line
                // Create a new cue object
                currentCue = {
                    start: cueMatch[1],
                    end: cueMatch[2],
                    text: "",
                };
                cues.push(currentCue);
            }
            else if (currentCue && line.trim()) {
                // Found a cue text line, append to current cue text
                currentCue.text += line.trim() + "\n";
            }
        });
        return cues;
    }
    function convertVttTimeToSeconds(vttTime) {
        var splitTime = vttTime.split(":");
        var hours = parseInt(splitTime[0]);
        var minutes = parseInt(splitTime[1]);
        var secondsAndMilliseconds = splitTime[2].split(".");
        var seconds = parseInt(secondsAndMilliseconds[0]);
        var milliseconds = parseInt(secondsAndMilliseconds[1]);
        return hours * 3600 + minutes * 60 + seconds + milliseconds / 1000;
    }
    var fetchSubtitles, subtitles, cues, track;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                fetchSubtitles = function (subtitlesURL) { return __awaiter(void 0, void 0, void 0, function () {
                    var subtitlesResponse;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, fetch(subtitlesURL)];
                            case 1:
                                subtitlesResponse = _a.sent();
                                return [2 /*return*/, subtitlesResponse.text()];
                        }
                    });
                }); };
                return [4 /*yield*/, fetchSubtitles("./media/subtitles.vtt")];
            case 1:
                subtitles = _a.sent();
                cues = parseWebVTT(subtitles);
                track = video.addTextTrack("subtitles", "English", "en");
                track.mode = "showing"; // The track should be visible
                cues.forEach(function (cue) {
                    var startSeconds = convertVttTimeToSeconds(cue.start);
                    var endSeconds = convertVttTimeToSeconds(cue.end);
                    var vttCue = new VTTCue(startSeconds, endSeconds, cue.text);
                    track.addCue(vttCue);
                });
                return [2 /*return*/];
        }
    });
}); };
var startPlayback = function () { return __awaiter(void 0, void 0, void 0, function () {
    function getMp4Data(mp4Uri) {
        return __awaiter(this, void 0, void 0, function () {
            var mp4Response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(mp4Uri)];
                    case 1:
                        mp4Response = _a.sent();
                        return [2 /*return*/, mp4Response.arrayBuffer()];
                }
            });
        });
    }
    function onSourceOpen() {
        return __awaiter(this, void 0, void 0, function () {
            var i, sourceBuffer, firstSegment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        URL.revokeObjectURL(video.src); // Revoke Object URL for garbage collection
                        sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
                        sourceBuffer.addEventListener("updateend", function () {
                            return __awaiter(this, void 0, void 0, function () {
                                var nextSegmentUri, nextSegment;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(!sourceBuffer.updating && i !== segments.length)) return [3 /*break*/, 2];
                                            nextSegmentUri = segments[i];
                                            return [4 /*yield*/, getMp4Data(nextSegmentUri)];
                                        case 1:
                                            nextSegment = _a.sent();
                                            sourceBuffer.appendBuffer(nextSegment);
                                            i++;
                                            _a.label = 2;
                                        case 2:
                                            if (mediaSource.readyState === "open" && i === segments.length) {
                                                mediaSource.endOfStream();
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        });
                        return [4 /*yield*/, getMp4Data(mp4InitializationUri)];
                    case 1:
                        firstSegment = _a.sent();
                        sourceBuffer.appendBuffer(firstSegment);
                        return [2 /*return*/];
                }
            });
        });
    }
    var video, _a, codecs, segments, initializationSegment, mp4InitializationUri, mimeCodec, mediaSource, url;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                video = document.createElement("video");
                video.style.width = "640px";
                video.setAttribute("controls", "");
                document.getElementsByTagName("body")[0].appendChild(video);
                return [4 /*yield*/, (0,_src_mpd_parser__WEBPACK_IMPORTED_MODULE_0__.getParsedManifest)("./media/BigBuckBunny.mpd")];
            case 1:
                _a = _b.sent(), codecs = _a.codecs, segments = _a.segments, initializationSegment = _a.initializationSegment;
                return [4 /*yield*/, handleWebVTTTextTracks(video)];
            case 2:
                _b.sent();
                mp4InitializationUri = initializationSegment;
                mimeCodec = "video/mp4; codecs=\"".concat(codecs, "\"");
                if (!MediaSource.isTypeSupported(mimeCodec)) {
                    console.error("Unsupported media format");
                    return [2 /*return*/];
                }
                mediaSource = new MediaSource();
                url = window.URL.createObjectURL(mediaSource);
                video.src = url;
                mediaSource.addEventListener("sourceopen", onSourceOpen.bind(mediaSource));
                video.play();
                return [2 /*return*/];
        }
    });
}); };
startPlayback();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQSw0Q0FBNEMsbUJBQW1CO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUFLO0FBQ1A7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCLFlBQVksUUFBUTtBQUNwQixjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxhQUFhO0FBQ3pCLFlBQVksUUFBUTtBQUNwQixZQUFZLG1CQUFtQjtBQUMvQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FB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Q0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixXQUFXLE1BQU07QUFDakIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxNQUFNO0FBQ2pCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsa0JBQWtCO0FBQzdCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsa0JBQWtCO0FBQzdCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLE1BQU07QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVEsZ0VBQWdFO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxVQUFVO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsVUFB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Q3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOzs7Ozs7Ozs7OztBQ3Ju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QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNBLFlBQVksUUFBUTtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBGQUEwRjtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUcsSUFBSTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUssSUFBSTtBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7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QTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7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QUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxrRUFBaUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2aWRlb2pzL3Zocy11dGlscy9lcy9kZWNvZGUtYjY0LXRvLXVpbnQ4LWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmlkZW9qcy92aHMtdXRpbHMvZXMvbWVkaWEtZ3JvdXBzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmlkZW9qcy92aHMtdXRpbHMvZXMvcmVzb2x2ZS11cmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B4bWxkb20veG1sZG9tL2xpYi9jb252ZW50aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHhtbGRvbS94bWxkb20vbGliL2RvbS1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B4bWxkb20veG1sZG9tL2xpYi9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B4bWxkb20veG1sZG9tL2xpYi9lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHhtbGRvbS94bWxkb20vbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AeG1sZG9tL3htbGRvbS9saWIvc2F4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbG9iYWwvd2luZG93LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tcGQtcGFyc2VyL2Rpc3QvbXBkLXBhcnNlci5lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbXBkLXBhcnNlci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXJsLXRvb2xraXQvc3JjL3VybC10b29sa2l0LmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2luZG93IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xuXG52YXIgYXRvYiA9IGZ1bmN0aW9uIGF0b2Iocykge1xuICByZXR1cm4gd2luZG93LmF0b2IgPyB3aW5kb3cuYXRvYihzKSA6IEJ1ZmZlci5mcm9tKHMsICdiYXNlNjQnKS50b1N0cmluZygnYmluYXJ5Jyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWNvZGVCNjRUb1VpbnQ4QXJyYXkoYjY0VGV4dCkge1xuICB2YXIgZGVjb2RlZFN0cmluZyA9IGF0b2IoYjY0VGV4dCk7XG4gIHZhciBhcnJheSA9IG5ldyBVaW50OEFycmF5KGRlY29kZWRTdHJpbmcubGVuZ3RoKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGRlY29kZWRTdHJpbmcubGVuZ3RoOyBpKyspIHtcbiAgICBhcnJheVtpXSA9IGRlY29kZWRTdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgfVxuXG4gIHJldHVybiBhcnJheTtcbn0iLCIvKipcbiAqIExvb3BzIHRocm91Z2ggYWxsIHN1cHBvcnRlZCBtZWRpYSBncm91cHMgaW4gbWFzdGVyIGFuZCBjYWxscyB0aGUgcHJvdmlkZWRcbiAqIGNhbGxiYWNrIGZvciBlYWNoIGdyb3VwXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG1hc3RlclxuICogICAgICAgIFRoZSBwYXJzZWQgbWFzdGVyIG1hbmlmZXN0IG9iamVjdFxuICogQHBhcmFtIHtzdHJpbmdbXX0gZ3JvdXBzXG4gKiAgICAgICAgVGhlIG1lZGlhIGdyb3VwcyB0byBjYWxsIHRoZSBjYWxsYmFjayBmb3JcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiAgICAgICAgQ2FsbGJhY2sgdG8gY2FsbCBmb3IgZWFjaCBtZWRpYSBncm91cFxuICovXG5leHBvcnQgdmFyIGZvckVhY2hNZWRpYUdyb3VwID0gZnVuY3Rpb24gZm9yRWFjaE1lZGlhR3JvdXAobWFzdGVyLCBncm91cHMsIGNhbGxiYWNrKSB7XG4gIGdyb3Vwcy5mb3JFYWNoKGZ1bmN0aW9uIChtZWRpYVR5cGUpIHtcbiAgICBmb3IgKHZhciBncm91cEtleSBpbiBtYXN0ZXIubWVkaWFHcm91cHNbbWVkaWFUeXBlXSkge1xuICAgICAgZm9yICh2YXIgbGFiZWxLZXkgaW4gbWFzdGVyLm1lZGlhR3JvdXBzW21lZGlhVHlwZV1bZ3JvdXBLZXldKSB7XG4gICAgICAgIHZhciBtZWRpYVByb3BlcnRpZXMgPSBtYXN0ZXIubWVkaWFHcm91cHNbbWVkaWFUeXBlXVtncm91cEtleV1bbGFiZWxLZXldO1xuICAgICAgICBjYWxsYmFjayhtZWRpYVByb3BlcnRpZXMsIG1lZGlhVHlwZSwgZ3JvdXBLZXksIGxhYmVsS2V5KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTsiLCJpbXBvcnQgVVJMVG9vbGtpdCBmcm9tICd1cmwtdG9vbGtpdCc7XG5pbXBvcnQgd2luZG93IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xudmFyIERFRkFVTFRfTE9DQVRJT04gPSAnaHR0cDovL2V4YW1wbGUuY29tJztcblxudmFyIHJlc29sdmVVcmwgPSBmdW5jdGlvbiByZXNvbHZlVXJsKGJhc2VVcmwsIHJlbGF0aXZlVXJsKSB7XG4gIC8vIHJldHVybiBlYXJseSBpZiB3ZSBkb24ndCBuZWVkIHRvIHJlc29sdmVcbiAgaWYgKC9eW2Etel0rOi9pLnRlc3QocmVsYXRpdmVVcmwpKSB7XG4gICAgcmV0dXJuIHJlbGF0aXZlVXJsO1xuICB9IC8vIGlmIGJhc2VVcmwgaXMgYSBkYXRhIFVSSSwgaWdub3JlIGl0IGFuZCByZXNvbHZlIGV2ZXJ5dGhpbmcgcmVsYXRpdmUgdG8gd2luZG93LmxvY2F0aW9uXG5cblxuICBpZiAoL15kYXRhOi8udGVzdChiYXNlVXJsKSkge1xuICAgIGJhc2VVcmwgPSB3aW5kb3cubG9jYXRpb24gJiYgd2luZG93LmxvY2F0aW9uLmhyZWYgfHwgJyc7XG4gIH0gLy8gSUUxMSBzdXBwb3J0cyBVUkwgYnV0IG5vdCB0aGUgVVJMIGNvbnN0cnVjdG9yXG4gIC8vIGZlYXR1cmUgZGV0ZWN0IHRoZSBiZWhhdmlvciB3ZSB3YW50XG5cblxuICB2YXIgbmF0aXZlVVJMID0gdHlwZW9mIHdpbmRvdy5VUkwgPT09ICdmdW5jdGlvbic7XG4gIHZhciBwcm90b2NvbExlc3MgPSAvXlxcL1xcLy8udGVzdChiYXNlVXJsKTsgLy8gcmVtb3ZlIGxvY2F0aW9uIGlmIHdpbmRvdy5sb2NhdGlvbiBpc24ndCBhdmFpbGFibGUgKGkuZS4gd2UncmUgaW4gbm9kZSlcbiAgLy8gYW5kIGlmIGJhc2VVcmwgaXNuJ3QgYW4gYWJzb2x1dGUgdXJsXG5cbiAgdmFyIHJlbW92ZUxvY2F0aW9uID0gIXdpbmRvdy5sb2NhdGlvbiAmJiAhL1xcL1xcLy9pLnRlc3QoYmFzZVVybCk7IC8vIGlmIHRoZSBiYXNlIFVSTCBpcyByZWxhdGl2ZSB0aGVuIGNvbWJpbmUgd2l0aCB0aGUgY3VycmVudCBsb2NhdGlvblxuXG4gIGlmIChuYXRpdmVVUkwpIHtcbiAgICBiYXNlVXJsID0gbmV3IHdpbmRvdy5VUkwoYmFzZVVybCwgd2luZG93LmxvY2F0aW9uIHx8IERFRkFVTFRfTE9DQVRJT04pO1xuICB9IGVsc2UgaWYgKCEvXFwvXFwvL2kudGVzdChiYXNlVXJsKSkge1xuICAgIGJhc2VVcmwgPSBVUkxUb29sa2l0LmJ1aWxkQWJzb2x1dGVVUkwod2luZG93LmxvY2F0aW9uICYmIHdpbmRvdy5sb2NhdGlvbi5ocmVmIHx8ICcnLCBiYXNlVXJsKTtcbiAgfVxuXG4gIGlmIChuYXRpdmVVUkwpIHtcbiAgICB2YXIgbmV3VXJsID0gbmV3IFVSTChyZWxhdGl2ZVVybCwgYmFzZVVybCk7IC8vIGlmIHdlJ3JlIGEgcHJvdG9jb2wtbGVzcyB1cmwsIHJlbW92ZSB0aGUgcHJvdG9jb2xcbiAgICAvLyBhbmQgaWYgd2UncmUgbG9jYXRpb24tbGVzcywgcmVtb3ZlIHRoZSBsb2NhdGlvblxuICAgIC8vIG90aGVyd2lzZSwgcmV0dXJuIHRoZSB1cmwgdW5tb2RpZmllZFxuXG4gICAgaWYgKHJlbW92ZUxvY2F0aW9uKSB7XG4gICAgICByZXR1cm4gbmV3VXJsLmhyZWYuc2xpY2UoREVGQVVMVF9MT0NBVElPTi5sZW5ndGgpO1xuICAgIH0gZWxzZSBpZiAocHJvdG9jb2xMZXNzKSB7XG4gICAgICByZXR1cm4gbmV3VXJsLmhyZWYuc2xpY2UobmV3VXJsLnByb3RvY29sLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld1VybC5ocmVmO1xuICB9XG5cbiAgcmV0dXJuIFVSTFRvb2xraXQuYnVpbGRBYnNvbHV0ZVVSTChiYXNlVXJsLCByZWxhdGl2ZVVybCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZXNvbHZlVXJsOyIsIid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIFBvbnlmaWxsIGZvciBgQXJyYXkucHJvdG90eXBlLmZpbmRgIHdoaWNoIGlzIG9ubHkgYXZhaWxhYmxlIGluIEVTNiBydW50aW1lcy5cbiAqXG4gKiBXb3JrcyB3aXRoIGFueXRoaW5nIHRoYXQgaGFzIGEgYGxlbmd0aGAgcHJvcGVydHkgYW5kIGluZGV4IGFjY2VzcyBwcm9wZXJ0aWVzLCBpbmNsdWRpbmcgTm9kZUxpc3QuXG4gKlxuICogQHRlbXBsYXRlIHt1bmtub3dufSBUXG4gKiBAcGFyYW0ge0FycmF5PFQ+IHwgKHtsZW5ndGg6bnVtYmVyLCBbbnVtYmVyXTogVH0pfSBsaXN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9uIChpdGVtOiBULCBpbmRleDogbnVtYmVyLCBsaXN0OkFycmF5PFQ+IHwgKHtsZW5ndGg6bnVtYmVyLCBbbnVtYmVyXTogVH0pKTpib29sZWFufSBwcmVkaWNhdGVcbiAqIEBwYXJhbSB7UGFydGlhbDxQaWNrPEFycmF5Q29uc3RydWN0b3JbJ3Byb3RvdHlwZSddLCAnZmluZCc+Pj99IGFjIGBBcnJheS5wcm90b3R5cGVgIGJ5IGRlZmF1bHQsXG4gKiBcdFx0XHRcdGFsbG93cyBpbmplY3RpbmcgYSBjdXN0b20gaW1wbGVtZW50YXRpb24gaW4gdGVzdHNcbiAqIEByZXR1cm5zIHtUIHwgdW5kZWZpbmVkfVxuICpcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvZmluZFxuICogQHNlZSBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi9tdWx0aXBhZ2UvaW5kZXhlZC1jb2xsZWN0aW9ucy5odG1sI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZFxuICovXG5mdW5jdGlvbiBmaW5kKGxpc3QsIHByZWRpY2F0ZSwgYWMpIHtcblx0aWYgKGFjID09PSB1bmRlZmluZWQpIHtcblx0XHRhYyA9IEFycmF5LnByb3RvdHlwZTtcblx0fVxuXHRpZiAobGlzdCAmJiB0eXBlb2YgYWMuZmluZCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHJldHVybiBhYy5maW5kLmNhbGwobGlzdCwgcHJlZGljYXRlKTtcblx0fVxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGxpc3QsIGkpKSB7XG5cdFx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0XHRpZiAocHJlZGljYXRlLmNhbGwodW5kZWZpbmVkLCBpdGVtLCBpLCBsaXN0KSkge1xuXHRcdFx0XHRyZXR1cm4gaXRlbTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBcIlNoYWxsb3cgZnJlZXplc1wiIGFuIG9iamVjdCB0byByZW5kZXIgaXQgaW1tdXRhYmxlLlxuICogVXNlcyBgT2JqZWN0LmZyZWV6ZWAgaWYgYXZhaWxhYmxlLFxuICogb3RoZXJ3aXNlIHRoZSBpbW11dGFiaWxpdHkgaXMgb25seSBpbiB0aGUgdHlwZS5cbiAqXG4gKiBJcyB1c2VkIHRvIGNyZWF0ZSBcImVudW0gbGlrZVwiIG9iamVjdHMuXG4gKlxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7VH0gb2JqZWN0IHRoZSBvYmplY3QgdG8gZnJlZXplXG4gKiBAcGFyYW0ge1BpY2s8T2JqZWN0Q29uc3RydWN0b3IsICdmcmVlemUnPiA9IE9iamVjdH0gb2MgYE9iamVjdGAgYnkgZGVmYXVsdCxcbiAqIFx0XHRcdFx0YWxsb3dzIHRvIGluamVjdCBjdXN0b20gb2JqZWN0IGNvbnN0cnVjdG9yIGZvciB0ZXN0c1xuICogQHJldHVybnMge1JlYWRvbmx5PFQ+fVxuICpcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2ZyZWV6ZVxuICovXG5mdW5jdGlvbiBmcmVlemUob2JqZWN0LCBvYykge1xuXHRpZiAob2MgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9jID0gT2JqZWN0XG5cdH1cblx0cmV0dXJuIG9jICYmIHR5cGVvZiBvYy5mcmVlemUgPT09ICdmdW5jdGlvbicgPyBvYy5mcmVlemUob2JqZWN0KSA6IG9iamVjdFxufVxuXG4vKipcbiAqIFNpbmNlIHdlIGNhbiBub3QgcmVseSBvbiBgT2JqZWN0LmFzc2lnbmAgd2UgcHJvdmlkZSBhIHNpbXBsaWZpZWQgdmVyc2lvblxuICogdGhhdCBpcyBzdWZmaWNpZW50IGZvciBvdXIgbmVlZHMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtPYmplY3QgfCBudWxsIHwgdW5kZWZpbmVkfSBzb3VyY2VcbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fSB0YXJnZXRcbiAqIEB0aHJvd3MgVHlwZUVycm9yIGlmIHRhcmdldCBpcyBub3QgYW4gb2JqZWN0XG4gKlxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvYXNzaWduXG4gKiBAc2VlIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyL211bHRpcGFnZS9mdW5kYW1lbnRhbC1vYmplY3RzLmh0bWwjc2VjLW9iamVjdC5hc3NpZ25cbiAqL1xuZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7XG5cdGlmICh0YXJnZXQgPT09IG51bGwgfHwgdHlwZW9mIHRhcmdldCAhPT0gJ29iamVjdCcpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCd0YXJnZXQgaXMgbm90IGFuIG9iamVjdCcpXG5cdH1cblx0Zm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuXHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG5cdFx0XHR0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldXG5cdFx0fVxuXHR9XG5cdHJldHVybiB0YXJnZXRcbn1cblxuLyoqXG4gKiBBbGwgbWltZSB0eXBlcyB0aGF0IGFyZSBhbGxvd2VkIGFzIGlucHV0IHRvIGBET01QYXJzZXIucGFyc2VGcm9tU3RyaW5nYFxuICpcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RPTVBhcnNlci9wYXJzZUZyb21TdHJpbmcjQXJndW1lbnQwMiBNRE5cbiAqIEBzZWUgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZHluYW1pYy1tYXJrdXAtaW5zZXJ0aW9uLmh0bWwjZG9tcGFyc2Vyc3VwcG9ydGVkdHlwZSBXSEFUV0cgSFRNTCBTcGVjXG4gKiBAc2VlIERPTVBhcnNlci5wcm90b3R5cGUucGFyc2VGcm9tU3RyaW5nXG4gKi9cbnZhciBNSU1FX1RZUEUgPSBmcmVlemUoe1xuXHQvKipcblx0ICogYHRleHQvaHRtbGAsIHRoZSBvbmx5IG1pbWUgdHlwZSB0aGF0IHRyaWdnZXJzIHRyZWF0aW5nIGFuIFhNTCBkb2N1bWVudCBhcyBIVE1MLlxuXHQgKlxuXHQgKiBAc2VlIERPTVBhcnNlci5TdXBwb3J0ZWRUeXBlLmlzSFRNTFxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LmlhbmEub3JnL2Fzc2lnbm1lbnRzL21lZGlhLXR5cGVzL3RleHQvaHRtbCBJQU5BIE1pbWVUeXBlIHJlZ2lzdHJhdGlvblxuXHQgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0hUTUwgV2lraXBlZGlhXG5cdCAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RPTVBhcnNlci9wYXJzZUZyb21TdHJpbmcgTUROXG5cdCAqIEBzZWUgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZHluYW1pYy1tYXJrdXAtaW5zZXJ0aW9uLmh0bWwjZG9tLWRvbXBhcnNlci1wYXJzZWZyb21zdHJpbmcgV0hBVFdHIEhUTUwgU3BlY1xuXHQgKi9cblx0SFRNTDogJ3RleHQvaHRtbCcsXG5cblx0LyoqXG5cdCAqIEhlbHBlciBtZXRob2QgdG8gY2hlY2sgYSBtaW1lIHR5cGUgaWYgaXQgaW5kaWNhdGVzIGFuIEhUTUwgZG9jdW1lbnRcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IFt2YWx1ZV1cblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqXG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cuaWFuYS5vcmcvYXNzaWdubWVudHMvbWVkaWEtdHlwZXMvdGV4dC9odG1sIElBTkEgTWltZVR5cGUgcmVnaXN0cmF0aW9uXG5cdCAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSFRNTCBXaWtpcGVkaWFcblx0ICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRE9NUGFyc2VyL3BhcnNlRnJvbVN0cmluZyBNRE5cblx0ICogQHNlZSBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9keW5hbWljLW1hcmt1cC1pbnNlcnRpb24uaHRtbCNkb20tZG9tcGFyc2VyLXBhcnNlZnJvbXN0cmluZyBcdCAqL1xuXHRpc0hUTUw6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdHJldHVybiB2YWx1ZSA9PT0gTUlNRV9UWVBFLkhUTUxcblx0fSxcblxuXHQvKipcblx0ICogYGFwcGxpY2F0aW9uL3htbGAsIHRoZSBzdGFuZGFyZCBtaW1lIHR5cGUgZm9yIFhNTCBkb2N1bWVudHMuXG5cdCAqXG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cuaWFuYS5vcmcvYXNzaWdubWVudHMvbWVkaWEtdHlwZXMvYXBwbGljYXRpb24veG1sIElBTkEgTWltZVR5cGUgcmVnaXN0cmF0aW9uXG5cdCAqIEBzZWUgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzczMDMjc2VjdGlvbi05LjEgUkZDIDczMDNcblx0ICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9YTUxfYW5kX01JTUUgV2lraXBlZGlhXG5cdCAqL1xuXHRYTUxfQVBQTElDQVRJT046ICdhcHBsaWNhdGlvbi94bWwnLFxuXG5cdC8qKlxuXHQgKiBgdGV4dC9odG1sYCwgYW4gYWxpYXMgZm9yIGBhcHBsaWNhdGlvbi94bWxgLlxuXHQgKlxuXHQgKiBAc2VlIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MzAzI3NlY3Rpb24tOS4yIFJGQyA3MzAzXG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cuaWFuYS5vcmcvYXNzaWdubWVudHMvbWVkaWEtdHlwZXMvdGV4dC94bWwgSUFOQSBNaW1lVHlwZSByZWdpc3RyYXRpb25cblx0ICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9YTUxfYW5kX01JTUUgV2lraXBlZGlhXG5cdCAqL1xuXHRYTUxfVEVYVDogJ3RleHQveG1sJyxcblxuXHQvKipcblx0ICogYGFwcGxpY2F0aW9uL3hodG1sK3htbGAsIGluZGljYXRlcyBhbiBYTUwgZG9jdW1lbnQgdGhhdCBoYXMgdGhlIGRlZmF1bHQgSFRNTCBuYW1lc3BhY2UsXG5cdCAqIGJ1dCBpcyBwYXJzZWQgYXMgYW4gWE1MIGRvY3VtZW50LlxuXHQgKlxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LmlhbmEub3JnL2Fzc2lnbm1lbnRzL21lZGlhLXR5cGVzL2FwcGxpY2F0aW9uL3hodG1sK3htbCBJQU5BIE1pbWVUeXBlIHJlZ2lzdHJhdGlvblxuXHQgKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jZG9tLWRvbWltcGxlbWVudGF0aW9uLWNyZWF0ZWRvY3VtZW50IFdIQVRXRyBET00gU3BlY1xuXHQgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1hIVE1MIFdpa2lwZWRpYVxuXHQgKi9cblx0WE1MX1hIVE1MX0FQUExJQ0FUSU9OOiAnYXBwbGljYXRpb24veGh0bWwreG1sJyxcblxuXHQvKipcblx0ICogYGltYWdlL3N2Zyt4bWxgLFxuXHQgKlxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LmlhbmEub3JnL2Fzc2lnbm1lbnRzL21lZGlhLXR5cGVzL2ltYWdlL3N2Zyt4bWwgSUFOQSBNaW1lVHlwZSByZWdpc3RyYXRpb25cblx0ICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvU1ZHMTEvIFczQyBTVkcgMS4xXG5cdCAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU2NhbGFibGVfVmVjdG9yX0dyYXBoaWNzIFdpa2lwZWRpYVxuXHQgKi9cblx0WE1MX1NWR19JTUFHRTogJ2ltYWdlL3N2Zyt4bWwnLFxufSlcblxuLyoqXG4gKiBOYW1lc3BhY2VzIHRoYXQgYXJlIHVzZWQgaW4gdGhpcyBjb2RlIGJhc2UuXG4gKlxuICogQHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi9SRUMteG1sLW5hbWVzXG4gKi9cbnZhciBOQU1FU1BBQ0UgPSBmcmVlemUoe1xuXHQvKipcblx0ICogVGhlIFhIVE1MIG5hbWVzcGFjZS5cblx0ICpcblx0ICogQHNlZSBodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXG5cdCAqL1xuXHRIVE1MOiAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCcsXG5cblx0LyoqXG5cdCAqIENoZWNrcyBpZiBgdXJpYCBlcXVhbHMgYE5BTUVTUEFDRS5IVE1MYC5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IFt1cmldXG5cdCAqXG5cdCAqIEBzZWUgTkFNRVNQQUNFLkhUTUxcblx0ICovXG5cdGlzSFRNTDogZnVuY3Rpb24gKHVyaSkge1xuXHRcdHJldHVybiB1cmkgPT09IE5BTUVTUEFDRS5IVE1MXG5cdH0sXG5cblx0LyoqXG5cdCAqIFRoZSBTVkcgbmFtZXNwYWNlLlxuXHQgKlxuXHQgKiBAc2VlIGh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXG5cdCAqL1xuXHRTVkc6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXG5cblx0LyoqXG5cdCAqIFRoZSBgeG1sOmAgbmFtZXNwYWNlLlxuXHQgKlxuXHQgKiBAc2VlIGh0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZVxuXHQgKi9cblx0WE1MOiAnaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlJyxcblxuXHQvKipcblx0ICogVGhlIGB4bWxuczpgIG5hbWVzcGFjZVxuXHQgKlxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zL1xuXHQgKi9cblx0WE1MTlM6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zLycsXG59KVxuXG5leHBvcnRzLmFzc2lnbiA9IGFzc2lnbjtcbmV4cG9ydHMuZmluZCA9IGZpbmQ7XG5leHBvcnRzLmZyZWV6ZSA9IGZyZWV6ZTtcbmV4cG9ydHMuTUlNRV9UWVBFID0gTUlNRV9UWVBFO1xuZXhwb3J0cy5OQU1FU1BBQ0UgPSBOQU1FU1BBQ0U7XG4iLCJ2YXIgY29udmVudGlvbnMgPSByZXF1aXJlKFwiLi9jb252ZW50aW9uc1wiKTtcbnZhciBkb20gPSByZXF1aXJlKCcuL2RvbScpXG52YXIgZW50aXRpZXMgPSByZXF1aXJlKCcuL2VudGl0aWVzJyk7XG52YXIgc2F4ID0gcmVxdWlyZSgnLi9zYXgnKTtcblxudmFyIERPTUltcGxlbWVudGF0aW9uID0gZG9tLkRPTUltcGxlbWVudGF0aW9uO1xuXG52YXIgTkFNRVNQQUNFID0gY29udmVudGlvbnMuTkFNRVNQQUNFO1xuXG52YXIgUGFyc2VFcnJvciA9IHNheC5QYXJzZUVycm9yO1xudmFyIFhNTFJlYWRlciA9IHNheC5YTUxSZWFkZXI7XG5cbi8qKlxuICogTm9ybWFsaXplcyBsaW5lIGVuZGluZyBhY2NvcmRpbmcgdG8gaHR0cHM6Ly93d3cudzMub3JnL1RSL3htbDExLyNzZWMtbGluZS1lbmRzOlxuICpcbiAqID4gWE1MIHBhcnNlZCBlbnRpdGllcyBhcmUgb2Z0ZW4gc3RvcmVkIGluIGNvbXB1dGVyIGZpbGVzIHdoaWNoLFxuICogPiBmb3IgZWRpdGluZyBjb252ZW5pZW5jZSwgYXJlIG9yZ2FuaXplZCBpbnRvIGxpbmVzLlxuICogPiBUaGVzZSBsaW5lcyBhcmUgdHlwaWNhbGx5IHNlcGFyYXRlZCBieSBzb21lIGNvbWJpbmF0aW9uXG4gKiA+IG9mIHRoZSBjaGFyYWN0ZXJzIENBUlJJQUdFIFJFVFVSTiAoI3hEKSBhbmQgTElORSBGRUVEICgjeEEpLlxuICogPlxuICogPiBUbyBzaW1wbGlmeSB0aGUgdGFza3Mgb2YgYXBwbGljYXRpb25zLCB0aGUgWE1MIHByb2Nlc3NvciBtdXN0IGJlaGF2ZVxuICogPiBhcyBpZiBpdCBub3JtYWxpemVkIGFsbCBsaW5lIGJyZWFrcyBpbiBleHRlcm5hbCBwYXJzZWQgZW50aXRpZXMgKGluY2x1ZGluZyB0aGUgZG9jdW1lbnQgZW50aXR5KVxuICogPiBvbiBpbnB1dCwgYmVmb3JlIHBhcnNpbmcsIGJ5IHRyYW5zbGF0aW5nIGFsbCBvZiB0aGUgZm9sbG93aW5nIHRvIGEgc2luZ2xlICN4QSBjaGFyYWN0ZXI6XG4gKiA+XG4gKiA+IDEuIHRoZSB0d28tY2hhcmFjdGVyIHNlcXVlbmNlICN4RCAjeEFcbiAqID4gMi4gdGhlIHR3by1jaGFyYWN0ZXIgc2VxdWVuY2UgI3hEICN4ODVcbiAqID4gMy4gdGhlIHNpbmdsZSBjaGFyYWN0ZXIgI3g4NVxuICogPiA0LiB0aGUgc2luZ2xlIGNoYXJhY3RlciAjeDIwMjhcbiAqID4gNS4gYW55ICN4RCBjaGFyYWN0ZXIgdGhhdCBpcyBub3QgaW1tZWRpYXRlbHkgZm9sbG93ZWQgYnkgI3hBIG9yICN4ODUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGlucHV0XG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBub3JtYWxpemVMaW5lRW5kaW5ncyhpbnB1dCkge1xuXHRyZXR1cm4gaW5wdXRcblx0XHQucmVwbGFjZSgvXFxyW1xcblxcdTAwODVdL2csICdcXG4nKVxuXHRcdC5yZXBsYWNlKC9bXFxyXFx1MDA4NVxcdTIwMjhdL2csICdcXG4nKVxufVxuXG4vKipcbiAqIEB0eXBlZGVmIExvY2F0b3JcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbY29sdW1uTnVtYmVyXVxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtsaW5lTnVtYmVyXVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgRE9NUGFyc2VyT3B0aW9uc1xuICogQHByb3BlcnR5IHtET01IYW5kbGVyfSBbZG9tQnVpbGRlcl1cbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IFtlcnJvckhhbmRsZXJdXG4gKiBAcHJvcGVydHkgeyhzdHJpbmcpID0+IHN0cmluZ30gW25vcm1hbGl6ZUxpbmVFbmRpbmdzXSB1c2VkIHRvIHJlcGxhY2UgbGluZSBlbmRpbmdzIGJlZm9yZSBwYXJzaW5nXG4gKiBcdFx0XHRcdFx0XHRkZWZhdWx0cyB0byBgbm9ybWFsaXplTGluZUVuZGluZ3NgXG4gKiBAcHJvcGVydHkge0xvY2F0b3J9IFtsb2NhdG9yXVxuICogQHByb3BlcnR5IHtSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+fSBbeG1sbnNdXG4gKlxuICogQHNlZSBub3JtYWxpemVMaW5lRW5kaW5nc1xuICovXG5cbi8qKlxuICogVGhlIERPTVBhcnNlciBpbnRlcmZhY2UgcHJvdmlkZXMgdGhlIGFiaWxpdHkgdG8gcGFyc2UgWE1MIG9yIEhUTUwgc291cmNlIGNvZGVcbiAqIGZyb20gYSBzdHJpbmcgaW50byBhIERPTSBgRG9jdW1lbnRgLlxuICpcbiAqIF94bWxkb20gaXMgZGlmZmVyZW50IGZyb20gdGhlIHNwZWMgaW4gdGhhdCBpdCBhbGxvd3MgYW4gYG9wdGlvbnNgIHBhcmFtZXRlcixcbiAqIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IGJlaGF2aW9yLl9cbiAqXG4gKiBAcGFyYW0ge0RPTVBhcnNlck9wdGlvbnN9IFtvcHRpb25zXVxuICogQGNvbnN0cnVjdG9yXG4gKlxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRE9NUGFyc2VyXG4gKiBAc2VlIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2R5bmFtaWMtbWFya3VwLWluc2VydGlvbi5odG1sI2RvbS1wYXJzaW5nLWFuZC1zZXJpYWxpemF0aW9uXG4gKi9cbmZ1bmN0aW9uIERPTVBhcnNlcihvcHRpb25zKXtcblx0dGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fHtsb2NhdG9yOnt9fTtcbn1cblxuRE9NUGFyc2VyLnByb3RvdHlwZS5wYXJzZUZyb21TdHJpbmcgPSBmdW5jdGlvbihzb3VyY2UsbWltZVR5cGUpe1xuXHR2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblx0dmFyIHNheCA9ICBuZXcgWE1MUmVhZGVyKCk7XG5cdHZhciBkb21CdWlsZGVyID0gb3B0aW9ucy5kb21CdWlsZGVyIHx8IG5ldyBET01IYW5kbGVyKCk7Ly9jb250ZW50SGFuZGxlciBhbmQgTGV4aWNhbEhhbmRsZXJcblx0dmFyIGVycm9ySGFuZGxlciA9IG9wdGlvbnMuZXJyb3JIYW5kbGVyO1xuXHR2YXIgbG9jYXRvciA9IG9wdGlvbnMubG9jYXRvcjtcblx0dmFyIGRlZmF1bHROU01hcCA9IG9wdGlvbnMueG1sbnN8fHt9O1xuXHR2YXIgaXNIVE1MID0gL1xcL3g/aHRtbD8kLy50ZXN0KG1pbWVUeXBlKTsvL21pbWVUeXBlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignaHRtbCcpID4gLTE7XG4gIFx0dmFyIGVudGl0eU1hcCA9IGlzSFRNTCA/IGVudGl0aWVzLkhUTUxfRU5USVRJRVMgOiBlbnRpdGllcy5YTUxfRU5USVRJRVM7XG5cdGlmKGxvY2F0b3Ipe1xuXHRcdGRvbUJ1aWxkZXIuc2V0RG9jdW1lbnRMb2NhdG9yKGxvY2F0b3IpXG5cdH1cblxuXHRzYXguZXJyb3JIYW5kbGVyID0gYnVpbGRFcnJvckhhbmRsZXIoZXJyb3JIYW5kbGVyLGRvbUJ1aWxkZXIsbG9jYXRvcik7XG5cdHNheC5kb21CdWlsZGVyID0gb3B0aW9ucy5kb21CdWlsZGVyIHx8IGRvbUJ1aWxkZXI7XG5cdGlmKGlzSFRNTCl7XG5cdFx0ZGVmYXVsdE5TTWFwWycnXSA9IE5BTUVTUEFDRS5IVE1MO1xuXHR9XG5cdGRlZmF1bHROU01hcC54bWwgPSBkZWZhdWx0TlNNYXAueG1sIHx8IE5BTUVTUEFDRS5YTUw7XG5cdHZhciBub3JtYWxpemUgPSBvcHRpb25zLm5vcm1hbGl6ZUxpbmVFbmRpbmdzIHx8IG5vcm1hbGl6ZUxpbmVFbmRpbmdzO1xuXHRpZiAoc291cmNlICYmIHR5cGVvZiBzb3VyY2UgPT09ICdzdHJpbmcnKSB7XG5cdFx0c2F4LnBhcnNlKFxuXHRcdFx0bm9ybWFsaXplKHNvdXJjZSksXG5cdFx0XHRkZWZhdWx0TlNNYXAsXG5cdFx0XHRlbnRpdHlNYXBcblx0XHQpXG5cdH0gZWxzZSB7XG5cdFx0c2F4LmVycm9ySGFuZGxlci5lcnJvcignaW52YWxpZCBkb2Mgc291cmNlJylcblx0fVxuXHRyZXR1cm4gZG9tQnVpbGRlci5kb2M7XG59XG5mdW5jdGlvbiBidWlsZEVycm9ySGFuZGxlcihlcnJvckltcGwsZG9tQnVpbGRlcixsb2NhdG9yKXtcblx0aWYoIWVycm9ySW1wbCl7XG5cdFx0aWYoZG9tQnVpbGRlciBpbnN0YW5jZW9mIERPTUhhbmRsZXIpe1xuXHRcdFx0cmV0dXJuIGRvbUJ1aWxkZXI7XG5cdFx0fVxuXHRcdGVycm9ySW1wbCA9IGRvbUJ1aWxkZXIgO1xuXHR9XG5cdHZhciBlcnJvckhhbmRsZXIgPSB7fVxuXHR2YXIgaXNDYWxsYmFjayA9IGVycm9ySW1wbCBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xuXHRsb2NhdG9yID0gbG9jYXRvcnx8e31cblx0ZnVuY3Rpb24gYnVpbGQoa2V5KXtcblx0XHR2YXIgZm4gPSBlcnJvckltcGxba2V5XTtcblx0XHRpZighZm4gJiYgaXNDYWxsYmFjayl7XG5cdFx0XHRmbiA9IGVycm9ySW1wbC5sZW5ndGggPT0gMj9mdW5jdGlvbihtc2cpe2Vycm9ySW1wbChrZXksbXNnKX06ZXJyb3JJbXBsO1xuXHRcdH1cblx0XHRlcnJvckhhbmRsZXJba2V5XSA9IGZuICYmIGZ1bmN0aW9uKG1zZyl7XG5cdFx0XHRmbignW3htbGRvbSAnK2tleSsnXVxcdCcrbXNnK19sb2NhdG9yKGxvY2F0b3IpKTtcblx0XHR9fHxmdW5jdGlvbigpe307XG5cdH1cblx0YnVpbGQoJ3dhcm5pbmcnKTtcblx0YnVpbGQoJ2Vycm9yJyk7XG5cdGJ1aWxkKCdmYXRhbEVycm9yJyk7XG5cdHJldHVybiBlcnJvckhhbmRsZXI7XG59XG5cbi8vY29uc29sZS5sb2coJyNcXG5cXG5cXG5cXG5cXG5cXG5cXG4jIyMjJylcbi8qKlxuICogK0NvbnRlbnRIYW5kbGVyK0Vycm9ySGFuZGxlclxuICogK0xleGljYWxIYW5kbGVyK0VudGl0eVJlc29sdmVyMlxuICogLURlY2xIYW5kbGVyLURUREhhbmRsZXJcbiAqXG4gKiBEZWZhdWx0SGFuZGxlcjpFbnRpdHlSZXNvbHZlciwgRFRESGFuZGxlciwgQ29udGVudEhhbmRsZXIsIEVycm9ySGFuZGxlclxuICogRGVmYXVsdEhhbmRsZXIyOkRlZmF1bHRIYW5kbGVyLExleGljYWxIYW5kbGVyLCBEZWNsSGFuZGxlciwgRW50aXR5UmVzb2x2ZXIyXG4gKiBAbGluayBodHRwOi8vd3d3LnNheHByb2plY3Qub3JnL2FwaWRvYy9vcmcveG1sL3NheC9oZWxwZXJzL0RlZmF1bHRIYW5kbGVyLmh0bWxcbiAqL1xuZnVuY3Rpb24gRE9NSGFuZGxlcigpIHtcbiAgICB0aGlzLmNkYXRhID0gZmFsc2U7XG59XG5mdW5jdGlvbiBwb3NpdGlvbihsb2NhdG9yLG5vZGUpe1xuXHRub2RlLmxpbmVOdW1iZXIgPSBsb2NhdG9yLmxpbmVOdW1iZXI7XG5cdG5vZGUuY29sdW1uTnVtYmVyID0gbG9jYXRvci5jb2x1bW5OdW1iZXI7XG59XG4vKipcbiAqIEBzZWUgb3JnLnhtbC5zYXguQ29udGVudEhhbmRsZXIjc3RhcnREb2N1bWVudFxuICogQGxpbmsgaHR0cDovL3d3dy5zYXhwcm9qZWN0Lm9yZy9hcGlkb2Mvb3JnL3htbC9zYXgvQ29udGVudEhhbmRsZXIuaHRtbFxuICovXG5ET01IYW5kbGVyLnByb3RvdHlwZSA9IHtcblx0c3RhcnREb2N1bWVudCA6IGZ1bmN0aW9uKCkge1xuICAgIFx0dGhpcy5kb2MgPSBuZXcgRE9NSW1wbGVtZW50YXRpb24oKS5jcmVhdGVEb2N1bWVudChudWxsLCBudWxsLCBudWxsKTtcbiAgICBcdGlmICh0aGlzLmxvY2F0b3IpIHtcbiAgICAgICAgXHR0aGlzLmRvYy5kb2N1bWVudFVSSSA9IHRoaXMubG9jYXRvci5zeXN0ZW1JZDtcbiAgICBcdH1cblx0fSxcblx0c3RhcnRFbGVtZW50OmZ1bmN0aW9uKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lLCBxTmFtZSwgYXR0cnMpIHtcblx0XHR2YXIgZG9jID0gdGhpcy5kb2M7XG5cdCAgICB2YXIgZWwgPSBkb2MuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZVVSSSwgcU5hbWV8fGxvY2FsTmFtZSk7XG5cdCAgICB2YXIgbGVuID0gYXR0cnMubGVuZ3RoO1xuXHQgICAgYXBwZW5kRWxlbWVudCh0aGlzLCBlbCk7XG5cdCAgICB0aGlzLmN1cnJlbnRFbGVtZW50ID0gZWw7XG5cblx0XHR0aGlzLmxvY2F0b3IgJiYgcG9zaXRpb24odGhpcy5sb2NhdG9yLGVsKVxuXHQgICAgZm9yICh2YXIgaSA9IDAgOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgICAgICB2YXIgbmFtZXNwYWNlVVJJID0gYXR0cnMuZ2V0VVJJKGkpO1xuXHQgICAgICAgIHZhciB2YWx1ZSA9IGF0dHJzLmdldFZhbHVlKGkpO1xuXHQgICAgICAgIHZhciBxTmFtZSA9IGF0dHJzLmdldFFOYW1lKGkpO1xuXHRcdFx0dmFyIGF0dHIgPSBkb2MuY3JlYXRlQXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBxTmFtZSk7XG5cdFx0XHR0aGlzLmxvY2F0b3IgJiZwb3NpdGlvbihhdHRycy5nZXRMb2NhdG9yKGkpLGF0dHIpO1xuXHRcdFx0YXR0ci52YWx1ZSA9IGF0dHIubm9kZVZhbHVlID0gdmFsdWU7XG5cdFx0XHRlbC5zZXRBdHRyaWJ1dGVOb2RlKGF0dHIpXG5cdCAgICB9XG5cdH0sXG5cdGVuZEVsZW1lbnQ6ZnVuY3Rpb24obmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUsIHFOYW1lKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSB0aGlzLmN1cnJlbnRFbGVtZW50XG5cdFx0dmFyIHRhZ05hbWUgPSBjdXJyZW50LnRhZ05hbWU7XG5cdFx0dGhpcy5jdXJyZW50RWxlbWVudCA9IGN1cnJlbnQucGFyZW50Tm9kZTtcblx0fSxcblx0c3RhcnRQcmVmaXhNYXBwaW5nOmZ1bmN0aW9uKHByZWZpeCwgdXJpKSB7XG5cdH0sXG5cdGVuZFByZWZpeE1hcHBpbmc6ZnVuY3Rpb24ocHJlZml4KSB7XG5cdH0sXG5cdHByb2Nlc3NpbmdJbnN0cnVjdGlvbjpmdW5jdGlvbih0YXJnZXQsIGRhdGEpIHtcblx0ICAgIHZhciBpbnMgPSB0aGlzLmRvYy5jcmVhdGVQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24odGFyZ2V0LCBkYXRhKTtcblx0ICAgIHRoaXMubG9jYXRvciAmJiBwb3NpdGlvbih0aGlzLmxvY2F0b3IsaW5zKVxuXHQgICAgYXBwZW5kRWxlbWVudCh0aGlzLCBpbnMpO1xuXHR9LFxuXHRpZ25vcmFibGVXaGl0ZXNwYWNlOmZ1bmN0aW9uKGNoLCBzdGFydCwgbGVuZ3RoKSB7XG5cdH0sXG5cdGNoYXJhY3RlcnM6ZnVuY3Rpb24oY2hhcnMsIHN0YXJ0LCBsZW5ndGgpIHtcblx0XHRjaGFycyA9IF90b1N0cmluZy5hcHBseSh0aGlzLGFyZ3VtZW50cylcblx0XHQvL2NvbnNvbGUubG9nKGNoYXJzKVxuXHRcdGlmKGNoYXJzKXtcblx0XHRcdGlmICh0aGlzLmNkYXRhKSB7XG5cdFx0XHRcdHZhciBjaGFyTm9kZSA9IHRoaXMuZG9jLmNyZWF0ZUNEQVRBU2VjdGlvbihjaGFycyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgY2hhck5vZGUgPSB0aGlzLmRvYy5jcmVhdGVUZXh0Tm9kZShjaGFycyk7XG5cdFx0XHR9XG5cdFx0XHRpZih0aGlzLmN1cnJlbnRFbGVtZW50KXtcblx0XHRcdFx0dGhpcy5jdXJyZW50RWxlbWVudC5hcHBlbmRDaGlsZChjaGFyTm9kZSk7XG5cdFx0XHR9ZWxzZSBpZigvXlxccyokLy50ZXN0KGNoYXJzKSl7XG5cdFx0XHRcdHRoaXMuZG9jLmFwcGVuZENoaWxkKGNoYXJOb2RlKTtcblx0XHRcdFx0Ly9wcm9jZXNzIHhtbFxuXHRcdFx0fVxuXHRcdFx0dGhpcy5sb2NhdG9yICYmIHBvc2l0aW9uKHRoaXMubG9jYXRvcixjaGFyTm9kZSlcblx0XHR9XG5cdH0sXG5cdHNraXBwZWRFbnRpdHk6ZnVuY3Rpb24obmFtZSkge1xuXHR9LFxuXHRlbmREb2N1bWVudDpmdW5jdGlvbigpIHtcblx0XHR0aGlzLmRvYy5ub3JtYWxpemUoKTtcblx0fSxcblx0c2V0RG9jdW1lbnRMb2NhdG9yOmZ1bmN0aW9uIChsb2NhdG9yKSB7XG5cdCAgICBpZih0aGlzLmxvY2F0b3IgPSBsb2NhdG9yKXsvLyAmJiAhKCdsaW5lTnVtYmVyJyBpbiBsb2NhdG9yKSl7XG5cdCAgICBcdGxvY2F0b3IubGluZU51bWJlciA9IDA7XG5cdCAgICB9XG5cdH0sXG5cdC8vTGV4aWNhbEhhbmRsZXJcblx0Y29tbWVudDpmdW5jdGlvbihjaGFycywgc3RhcnQsIGxlbmd0aCkge1xuXHRcdGNoYXJzID0gX3RvU3RyaW5nLmFwcGx5KHRoaXMsYXJndW1lbnRzKVxuXHQgICAgdmFyIGNvbW0gPSB0aGlzLmRvYy5jcmVhdGVDb21tZW50KGNoYXJzKTtcblx0ICAgIHRoaXMubG9jYXRvciAmJiBwb3NpdGlvbih0aGlzLmxvY2F0b3IsY29tbSlcblx0ICAgIGFwcGVuZEVsZW1lbnQodGhpcywgY29tbSk7XG5cdH0sXG5cblx0c3RhcnRDREFUQTpmdW5jdGlvbigpIHtcblx0ICAgIC8vdXNlZCBpbiBjaGFyYWN0ZXJzKCkgbWV0aG9kc1xuXHQgICAgdGhpcy5jZGF0YSA9IHRydWU7XG5cdH0sXG5cdGVuZENEQVRBOmZ1bmN0aW9uKCkge1xuXHQgICAgdGhpcy5jZGF0YSA9IGZhbHNlO1xuXHR9LFxuXG5cdHN0YXJ0RFREOmZ1bmN0aW9uKG5hbWUsIHB1YmxpY0lkLCBzeXN0ZW1JZCkge1xuXHRcdHZhciBpbXBsID0gdGhpcy5kb2MuaW1wbGVtZW50YXRpb247XG5cdCAgICBpZiAoaW1wbCAmJiBpbXBsLmNyZWF0ZURvY3VtZW50VHlwZSkge1xuXHQgICAgICAgIHZhciBkdCA9IGltcGwuY3JlYXRlRG9jdW1lbnRUeXBlKG5hbWUsIHB1YmxpY0lkLCBzeXN0ZW1JZCk7XG5cdCAgICAgICAgdGhpcy5sb2NhdG9yICYmIHBvc2l0aW9uKHRoaXMubG9jYXRvcixkdClcblx0ICAgICAgICBhcHBlbmRFbGVtZW50KHRoaXMsIGR0KTtcblx0XHRcdFx0XHR0aGlzLmRvYy5kb2N0eXBlID0gZHQ7XG5cdCAgICB9XG5cdH0sXG5cdC8qKlxuXHQgKiBAc2VlIG9yZy54bWwuc2F4LkVycm9ySGFuZGxlclxuXHQgKiBAbGluayBodHRwOi8vd3d3LnNheHByb2plY3Qub3JnL2FwaWRvYy9vcmcveG1sL3NheC9FcnJvckhhbmRsZXIuaHRtbFxuXHQgKi9cblx0d2FybmluZzpmdW5jdGlvbihlcnJvcikge1xuXHRcdGNvbnNvbGUud2FybignW3htbGRvbSB3YXJuaW5nXVxcdCcrZXJyb3IsX2xvY2F0b3IodGhpcy5sb2NhdG9yKSk7XG5cdH0sXG5cdGVycm9yOmZ1bmN0aW9uKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW3htbGRvbSBlcnJvcl1cXHQnK2Vycm9yLF9sb2NhdG9yKHRoaXMubG9jYXRvcikpO1xuXHR9LFxuXHRmYXRhbEVycm9yOmZ1bmN0aW9uKGVycm9yKSB7XG5cdFx0dGhyb3cgbmV3IFBhcnNlRXJyb3IoZXJyb3IsIHRoaXMubG9jYXRvcik7XG5cdH1cbn1cbmZ1bmN0aW9uIF9sb2NhdG9yKGwpe1xuXHRpZihsKXtcblx0XHRyZXR1cm4gJ1xcbkAnKyhsLnN5c3RlbUlkIHx8JycpKycjW2xpbmU6JytsLmxpbmVOdW1iZXIrJyxjb2w6JytsLmNvbHVtbk51bWJlcisnXSdcblx0fVxufVxuZnVuY3Rpb24gX3RvU3RyaW5nKGNoYXJzLHN0YXJ0LGxlbmd0aCl7XG5cdGlmKHR5cGVvZiBjaGFycyA9PSAnc3RyaW5nJyl7XG5cdFx0cmV0dXJuIGNoYXJzLnN1YnN0cihzdGFydCxsZW5ndGgpXG5cdH1lbHNley8vamF2YSBzYXggY29ubmVjdCB3aWR0aCB4bWxkb20gb24gcmhpbm8od2hhdCBhYm91dDogXCI/ICYmICEoY2hhcnMgaW5zdGFuY2VvZiBTdHJpbmcpXCIpXG5cdFx0aWYoY2hhcnMubGVuZ3RoID49IHN0YXJ0K2xlbmd0aCB8fCBzdGFydCl7XG5cdFx0XHRyZXR1cm4gbmV3IGphdmEubGFuZy5TdHJpbmcoY2hhcnMsc3RhcnQsbGVuZ3RoKSsnJztcblx0XHR9XG5cdFx0cmV0dXJuIGNoYXJzO1xuXHR9XG59XG5cbi8qXG4gKiBAbGluayBodHRwOi8vd3d3LnNheHByb2plY3Qub3JnL2FwaWRvYy9vcmcveG1sL3NheC9leHQvTGV4aWNhbEhhbmRsZXIuaHRtbFxuICogdXNlZCBtZXRob2Qgb2Ygb3JnLnhtbC5zYXguZXh0LkxleGljYWxIYW5kbGVyOlxuICogICNjb21tZW50KGNoYXJzLCBzdGFydCwgbGVuZ3RoKVxuICogICNzdGFydENEQVRBKClcbiAqICAjZW5kQ0RBVEEoKVxuICogICNzdGFydERURChuYW1lLCBwdWJsaWNJZCwgc3lzdGVtSWQpXG4gKlxuICpcbiAqIElHTk9SRUQgbWV0aG9kIG9mIG9yZy54bWwuc2F4LmV4dC5MZXhpY2FsSGFuZGxlcjpcbiAqICAjZW5kRFREKClcbiAqICAjc3RhcnRFbnRpdHkobmFtZSlcbiAqICAjZW5kRW50aXR5KG5hbWUpXG4gKlxuICpcbiAqIEBsaW5rIGh0dHA6Ly93d3cuc2F4cHJvamVjdC5vcmcvYXBpZG9jL29yZy94bWwvc2F4L2V4dC9EZWNsSGFuZGxlci5odG1sXG4gKiBJR05PUkVEIG1ldGhvZCBvZiBvcmcueG1sLnNheC5leHQuRGVjbEhhbmRsZXJcbiAqIFx0I2F0dHJpYnV0ZURlY2woZU5hbWUsIGFOYW1lLCB0eXBlLCBtb2RlLCB2YWx1ZSlcbiAqICAjZWxlbWVudERlY2wobmFtZSwgbW9kZWwpXG4gKiAgI2V4dGVybmFsRW50aXR5RGVjbChuYW1lLCBwdWJsaWNJZCwgc3lzdGVtSWQpXG4gKiAgI2ludGVybmFsRW50aXR5RGVjbChuYW1lLCB2YWx1ZSlcbiAqIEBsaW5rIGh0dHA6Ly93d3cuc2F4cHJvamVjdC5vcmcvYXBpZG9jL29yZy94bWwvc2F4L2V4dC9FbnRpdHlSZXNvbHZlcjIuaHRtbFxuICogSUdOT1JFRCBtZXRob2Qgb2Ygb3JnLnhtbC5zYXguRW50aXR5UmVzb2x2ZXIyXG4gKiAgI3Jlc29sdmVFbnRpdHkoU3RyaW5nIG5hbWUsU3RyaW5nIHB1YmxpY0lkLFN0cmluZyBiYXNlVVJJLFN0cmluZyBzeXN0ZW1JZClcbiAqICAjcmVzb2x2ZUVudGl0eShwdWJsaWNJZCwgc3lzdGVtSWQpXG4gKiAgI2dldEV4dGVybmFsU3Vic2V0KG5hbWUsIGJhc2VVUkkpXG4gKiBAbGluayBodHRwOi8vd3d3LnNheHByb2plY3Qub3JnL2FwaWRvYy9vcmcveG1sL3NheC9EVERIYW5kbGVyLmh0bWxcbiAqIElHTk9SRUQgbWV0aG9kIG9mIG9yZy54bWwuc2F4LkRUREhhbmRsZXJcbiAqICAjbm90YXRpb25EZWNsKG5hbWUsIHB1YmxpY0lkLCBzeXN0ZW1JZCkge307XG4gKiAgI3VucGFyc2VkRW50aXR5RGVjbChuYW1lLCBwdWJsaWNJZCwgc3lzdGVtSWQsIG5vdGF0aW9uTmFtZSkge307XG4gKi9cblwiZW5kRFRELHN0YXJ0RW50aXR5LGVuZEVudGl0eSxhdHRyaWJ1dGVEZWNsLGVsZW1lbnREZWNsLGV4dGVybmFsRW50aXR5RGVjbCxpbnRlcm5hbEVudGl0eURlY2wscmVzb2x2ZUVudGl0eSxnZXRFeHRlcm5hbFN1YnNldCxub3RhdGlvbkRlY2wsdW5wYXJzZWRFbnRpdHlEZWNsXCIucmVwbGFjZSgvXFx3Ky9nLGZ1bmN0aW9uKGtleSl7XG5cdERPTUhhbmRsZXIucHJvdG90eXBlW2tleV0gPSBmdW5jdGlvbigpe3JldHVybiBudWxsfVxufSlcblxuLyogUHJpdmF0ZSBzdGF0aWMgaGVscGVycyB0cmVhdGVkIGJlbG93IGFzIHByaXZhdGUgaW5zdGFuY2UgbWV0aG9kcywgc28gZG9uJ3QgbmVlZCB0byBhZGQgdGhlc2UgdG8gdGhlIHB1YmxpYyBBUEk7IHdlIG1pZ2h0IHVzZSBhIFJlbGF0b3IgdG8gYWxzbyBnZXQgcmlkIG9mIG5vbi1zdGFuZGFyZCBwdWJsaWMgcHJvcGVydGllcyAqL1xuZnVuY3Rpb24gYXBwZW5kRWxlbWVudCAoaGFuZGVyLG5vZGUpIHtcbiAgICBpZiAoIWhhbmRlci5jdXJyZW50RWxlbWVudCkge1xuICAgICAgICBoYW5kZXIuZG9jLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGhhbmRlci5jdXJyZW50RWxlbWVudC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9XG59Ly9hcHBlbmRDaGlsZCBhbmQgc2V0QXR0cmlidXRlTlMgYXJlIHByZWZvcm1hbmNlIGtleVxuXG5leHBvcnRzLl9fRE9NSGFuZGxlciA9IERPTUhhbmRsZXI7XG5leHBvcnRzLm5vcm1hbGl6ZUxpbmVFbmRpbmdzID0gbm9ybWFsaXplTGluZUVuZGluZ3M7XG5leHBvcnRzLkRPTVBhcnNlciA9IERPTVBhcnNlcjtcbiIsInZhciBjb252ZW50aW9ucyA9IHJlcXVpcmUoXCIuL2NvbnZlbnRpb25zXCIpO1xuXG52YXIgZmluZCA9IGNvbnZlbnRpb25zLmZpbmQ7XG52YXIgTkFNRVNQQUNFID0gY29udmVudGlvbnMuTkFNRVNQQUNFO1xuXG4vKipcbiAqIEEgcHJlcmVxdWlzaXRlIGZvciBgW10uZmlsdGVyYCwgdG8gZHJvcCBlbGVtZW50cyB0aGF0IGFyZSBlbXB0eVxuICogQHBhcmFtIHtzdHJpbmd9IGlucHV0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gbm90RW1wdHlTdHJpbmcgKGlucHV0KSB7XG5cdHJldHVybiBpbnB1dCAhPT0gJydcbn1cbi8qKlxuICogQHNlZSBodHRwczovL2luZnJhLnNwZWMud2hhdHdnLm9yZy8jc3BsaXQtb24tYXNjaWktd2hpdGVzcGFjZVxuICogQHNlZSBodHRwczovL2luZnJhLnNwZWMud2hhdHdnLm9yZy8jYXNjaWktd2hpdGVzcGFjZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dFxuICogQHJldHVybnMge3N0cmluZ1tdfSAoY2FuIGJlIGVtcHR5KVxuICovXG5mdW5jdGlvbiBzcGxpdE9uQVNDSUlXaGl0ZXNwYWNlKGlucHV0KSB7XG5cdC8vIFUrMDAwOSBUQUIsIFUrMDAwQSBMRiwgVSswMDBDIEZGLCBVKzAwMEQgQ1IsIFUrMDAyMCBTUEFDRVxuXHRyZXR1cm4gaW5wdXQgPyBpbnB1dC5zcGxpdCgvW1xcdFxcblxcZlxcciBdKy8pLmZpbHRlcihub3RFbXB0eVN0cmluZykgOiBbXVxufVxuXG4vKipcbiAqIEFkZHMgZWxlbWVudCBhcyBhIGtleSB0byBjdXJyZW50IGlmIGl0IGlzIG5vdCBhbHJlYWR5IHByZXNlbnQuXG4gKlxuICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCBib29sZWFuIHwgdW5kZWZpbmVkPn0gY3VycmVudFxuICogQHBhcmFtIHtzdHJpbmd9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtSZWNvcmQ8c3RyaW5nLCBib29sZWFuIHwgdW5kZWZpbmVkPn1cbiAqL1xuZnVuY3Rpb24gb3JkZXJlZFNldFJlZHVjZXIgKGN1cnJlbnQsIGVsZW1lbnQpIHtcblx0aWYgKCFjdXJyZW50Lmhhc093blByb3BlcnR5KGVsZW1lbnQpKSB7XG5cdFx0Y3VycmVudFtlbGVtZW50XSA9IHRydWU7XG5cdH1cblx0cmV0dXJuIGN1cnJlbnQ7XG59XG5cbi8qKlxuICogQHNlZSBodHRwczovL2luZnJhLnNwZWMud2hhdHdnLm9yZy8jb3JkZXJlZC1zZXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dFxuICogQHJldHVybnMge3N0cmluZ1tdfVxuICovXG5mdW5jdGlvbiB0b09yZGVyZWRTZXQoaW5wdXQpIHtcblx0aWYgKCFpbnB1dCkgcmV0dXJuIFtdO1xuXHR2YXIgbGlzdCA9IHNwbGl0T25BU0NJSVdoaXRlc3BhY2UoaW5wdXQpO1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobGlzdC5yZWR1Y2Uob3JkZXJlZFNldFJlZHVjZXIsIHt9KSlcbn1cblxuLyoqXG4gKiBVc2VzIGBsaXN0LmluZGV4T2ZgIHRvIGltcGxlbWVudCBzb21ldGhpbmcgbGlrZSBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCxcbiAqIHdoaWNoIHdlIGNhbiBub3QgcmVseSBvbiBiZWluZyBhdmFpbGFibGUuXG4gKlxuICogQHBhcmFtIHthbnlbXX0gbGlzdFxuICogQHJldHVybnMge2Z1bmN0aW9uKGFueSk6IGJvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGFycmF5SW5jbHVkZXMgKGxpc3QpIHtcblx0cmV0dXJuIGZ1bmN0aW9uKGVsZW1lbnQpIHtcblx0XHRyZXR1cm4gbGlzdCAmJiBsaXN0LmluZGV4T2YoZWxlbWVudCkgIT09IC0xO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNvcHkoc3JjLGRlc3Qpe1xuXHRmb3IodmFyIHAgaW4gc3JjKXtcblx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNyYywgcCkpIHtcblx0XHRcdGRlc3RbcF0gPSBzcmNbcF07XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuXlxcdytcXC5wcm90b3R5cGVcXC4oW19cXHddKylcXHMqPVxccyooKD86LipcXHtcXHMqP1tcXHJcXG5dW1xcc1xcU10qP159KXxcXFMuKj8oPz1bO1xcclxcbl0pKTs/XG5eXFx3K1xcLnByb3RvdHlwZVxcLihbX1xcd10rKVxccyo9XFxzKihcXFMuKj8oPz1bO1xcclxcbl0pKTs/XG4gKi9cbmZ1bmN0aW9uIF9leHRlbmRzKENsYXNzLFN1cGVyKXtcblx0dmFyIHB0ID0gQ2xhc3MucHJvdG90eXBlO1xuXHRpZighKHB0IGluc3RhbmNlb2YgU3VwZXIpKXtcblx0XHRmdW5jdGlvbiB0KCl7fTtcblx0XHR0LnByb3RvdHlwZSA9IFN1cGVyLnByb3RvdHlwZTtcblx0XHR0ID0gbmV3IHQoKTtcblx0XHRjb3B5KHB0LHQpO1xuXHRcdENsYXNzLnByb3RvdHlwZSA9IHB0ID0gdDtcblx0fVxuXHRpZihwdC5jb25zdHJ1Y3RvciAhPSBDbGFzcyl7XG5cdFx0aWYodHlwZW9mIENsYXNzICE9ICdmdW5jdGlvbicpe1xuXHRcdFx0Y29uc29sZS5lcnJvcihcInVua25vd24gQ2xhc3M6XCIrQ2xhc3MpXG5cdFx0fVxuXHRcdHB0LmNvbnN0cnVjdG9yID0gQ2xhc3Ncblx0fVxufVxuXG4vLyBOb2RlIFR5cGVzXG52YXIgTm9kZVR5cGUgPSB7fVxudmFyIEVMRU1FTlRfTk9ERSAgICAgICAgICAgICAgICA9IE5vZGVUeXBlLkVMRU1FTlRfTk9ERSAgICAgICAgICAgICAgICA9IDE7XG52YXIgQVRUUklCVVRFX05PREUgICAgICAgICAgICAgID0gTm9kZVR5cGUuQVRUUklCVVRFX05PREUgICAgICAgICAgICAgID0gMjtcbnZhciBURVhUX05PREUgICAgICAgICAgICAgICAgICAgPSBOb2RlVHlwZS5URVhUX05PREUgICAgICAgICAgICAgICAgICAgPSAzO1xudmFyIENEQVRBX1NFQ1RJT05fTk9ERSAgICAgICAgICA9IE5vZGVUeXBlLkNEQVRBX1NFQ1RJT05fTk9ERSAgICAgICAgICA9IDQ7XG52YXIgRU5USVRZX1JFRkVSRU5DRV9OT0RFICAgICAgID0gTm9kZVR5cGUuRU5USVRZX1JFRkVSRU5DRV9OT0RFICAgICAgID0gNTtcbnZhciBFTlRJVFlfTk9ERSAgICAgICAgICAgICAgICAgPSBOb2RlVHlwZS5FTlRJVFlfTk9ERSAgICAgICAgICAgICAgICAgPSA2O1xudmFyIFBST0NFU1NJTkdfSU5TVFJVQ1RJT05fTk9ERSA9IE5vZGVUeXBlLlBST0NFU1NJTkdfSU5TVFJVQ1RJT05fTk9ERSA9IDc7XG52YXIgQ09NTUVOVF9OT0RFICAgICAgICAgICAgICAgID0gTm9kZVR5cGUuQ09NTUVOVF9OT0RFICAgICAgICAgICAgICAgID0gODtcbnZhciBET0NVTUVOVF9OT0RFICAgICAgICAgICAgICAgPSBOb2RlVHlwZS5ET0NVTUVOVF9OT0RFICAgICAgICAgICAgICAgPSA5O1xudmFyIERPQ1VNRU5UX1RZUEVfTk9ERSAgICAgICAgICA9IE5vZGVUeXBlLkRPQ1VNRU5UX1RZUEVfTk9ERSAgICAgICAgICA9IDEwO1xudmFyIERPQ1VNRU5UX0ZSQUdNRU5UX05PREUgICAgICA9IE5vZGVUeXBlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUgICAgICA9IDExO1xudmFyIE5PVEFUSU9OX05PREUgICAgICAgICAgICAgICA9IE5vZGVUeXBlLk5PVEFUSU9OX05PREUgICAgICAgICAgICAgICA9IDEyO1xuXG4vLyBFeGNlcHRpb25Db2RlXG52YXIgRXhjZXB0aW9uQ29kZSA9IHt9XG52YXIgRXhjZXB0aW9uTWVzc2FnZSA9IHt9O1xudmFyIElOREVYX1NJWkVfRVJSICAgICAgICAgICAgICA9IEV4Y2VwdGlvbkNvZGUuSU5ERVhfU0laRV9FUlIgICAgICAgICAgICAgID0gKChFeGNlcHRpb25NZXNzYWdlWzFdPVwiSW5kZXggc2l6ZSBlcnJvclwiKSwxKTtcbnZhciBET01TVFJJTkdfU0laRV9FUlIgICAgICAgICAgPSBFeGNlcHRpb25Db2RlLkRPTVNUUklOR19TSVpFX0VSUiAgICAgICAgICA9ICgoRXhjZXB0aW9uTWVzc2FnZVsyXT1cIkRPTVN0cmluZyBzaXplIGVycm9yXCIpLDIpO1xudmFyIEhJRVJBUkNIWV9SRVFVRVNUX0VSUiAgICAgICA9IEV4Y2VwdGlvbkNvZGUuSElFUkFSQ0hZX1JFUVVFU1RfRVJSICAgICAgID0gKChFeGNlcHRpb25NZXNzYWdlWzNdPVwiSGllcmFyY2h5IHJlcXVlc3QgZXJyb3JcIiksMyk7XG52YXIgV1JPTkdfRE9DVU1FTlRfRVJSICAgICAgICAgID0gRXhjZXB0aW9uQ29kZS5XUk9OR19ET0NVTUVOVF9FUlIgICAgICAgICAgPSAoKEV4Y2VwdGlvbk1lc3NhZ2VbNF09XCJXcm9uZyBkb2N1bWVudFwiKSw0KTtcbnZhciBJTlZBTElEX0NIQVJBQ1RFUl9FUlIgICAgICAgPSBFeGNlcHRpb25Db2RlLklOVkFMSURfQ0hBUkFDVEVSX0VSUiAgICAgICA9ICgoRXhjZXB0aW9uTWVzc2FnZVs1XT1cIkludmFsaWQgY2hhcmFjdGVyXCIpLDUpO1xudmFyIE5PX0RBVEFfQUxMT1dFRF9FUlIgICAgICAgICA9IEV4Y2VwdGlvbkNvZGUuTk9fREFUQV9BTExPV0VEX0VSUiAgICAgICAgID0gKChFeGNlcHRpb25NZXNzYWdlWzZdPVwiTm8gZGF0YSBhbGxvd2VkXCIpLDYpO1xudmFyIE5PX01PRElGSUNBVElPTl9BTExPV0VEX0VSUiA9IEV4Y2VwdGlvbkNvZGUuTk9fTU9ESUZJQ0FUSU9OX0FMTE9XRURfRVJSID0gKChFeGNlcHRpb25NZXNzYWdlWzddPVwiTm8gbW9kaWZpY2F0aW9uIGFsbG93ZWRcIiksNyk7XG52YXIgTk9UX0ZPVU5EX0VSUiAgICAgICAgICAgICAgID0gRXhjZXB0aW9uQ29kZS5OT1RfRk9VTkRfRVJSICAgICAgICAgICAgICAgPSAoKEV4Y2VwdGlvbk1lc3NhZ2VbOF09XCJOb3QgZm91bmRcIiksOCk7XG52YXIgTk9UX1NVUFBPUlRFRF9FUlIgICAgICAgICAgID0gRXhjZXB0aW9uQ29kZS5OT1RfU1VQUE9SVEVEX0VSUiAgICAgICAgICAgPSAoKEV4Y2VwdGlvbk1lc3NhZ2VbOV09XCJOb3Qgc3VwcG9ydGVkXCIpLDkpO1xudmFyIElOVVNFX0FUVFJJQlVURV9FUlIgICAgICAgICA9IEV4Y2VwdGlvbkNvZGUuSU5VU0VfQVRUUklCVVRFX0VSUiAgICAgICAgID0gKChFeGNlcHRpb25NZXNzYWdlWzEwXT1cIkF0dHJpYnV0ZSBpbiB1c2VcIiksMTApO1xuLy9sZXZlbDJcbnZhciBJTlZBTElEX1NUQVRFX0VSUiAgICAgICAgXHQ9IEV4Y2VwdGlvbkNvZGUuSU5WQUxJRF9TVEFURV9FUlIgICAgICAgIFx0PSAoKEV4Y2VwdGlvbk1lc3NhZ2VbMTFdPVwiSW52YWxpZCBzdGF0ZVwiKSwxMSk7XG52YXIgU1lOVEFYX0VSUiAgICAgICAgICAgICAgIFx0PSBFeGNlcHRpb25Db2RlLlNZTlRBWF9FUlIgICAgICAgICAgICAgICBcdD0gKChFeGNlcHRpb25NZXNzYWdlWzEyXT1cIlN5bnRheCBlcnJvclwiKSwxMik7XG52YXIgSU5WQUxJRF9NT0RJRklDQVRJT05fRVJSIFx0PSBFeGNlcHRpb25Db2RlLklOVkFMSURfTU9ESUZJQ0FUSU9OX0VSUiBcdD0gKChFeGNlcHRpb25NZXNzYWdlWzEzXT1cIkludmFsaWQgbW9kaWZpY2F0aW9uXCIpLDEzKTtcbnZhciBOQU1FU1BBQ0VfRVJSICAgICAgICAgICAgXHQ9IEV4Y2VwdGlvbkNvZGUuTkFNRVNQQUNFX0VSUiAgICAgICAgICAgXHQ9ICgoRXhjZXB0aW9uTWVzc2FnZVsxNF09XCJJbnZhbGlkIG5hbWVzcGFjZVwiKSwxNCk7XG52YXIgSU5WQUxJRF9BQ0NFU1NfRVJSICAgICAgIFx0PSBFeGNlcHRpb25Db2RlLklOVkFMSURfQUNDRVNTX0VSUiAgICAgIFx0PSAoKEV4Y2VwdGlvbk1lc3NhZ2VbMTVdPVwiSW52YWxpZCBhY2Nlc3NcIiksMTUpO1xuXG4vKipcbiAqIERPTSBMZXZlbCAyXG4gKiBPYmplY3QgRE9NRXhjZXB0aW9uXG4gKiBAc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMDAvUkVDLURPTS1MZXZlbC0yLUNvcmUtMjAwMDExMTMvZWNtYS1zY3JpcHQtYmluZGluZy5odG1sXG4gKiBAc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSL1JFQy1ET00tTGV2ZWwtMS9lY21hLXNjcmlwdC1sYW5ndWFnZS1iaW5kaW5nLmh0bWxcbiAqL1xuZnVuY3Rpb24gRE9NRXhjZXB0aW9uKGNvZGUsIG1lc3NhZ2UpIHtcblx0aWYobWVzc2FnZSBpbnN0YW5jZW9mIEVycm9yKXtcblx0XHR2YXIgZXJyb3IgPSBtZXNzYWdlO1xuXHR9ZWxzZXtcblx0XHRlcnJvciA9IHRoaXM7XG5cdFx0RXJyb3IuY2FsbCh0aGlzLCBFeGNlcHRpb25NZXNzYWdlW2NvZGVdKTtcblx0XHR0aGlzLm1lc3NhZ2UgPSBFeGNlcHRpb25NZXNzYWdlW2NvZGVdO1xuXHRcdGlmKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBET01FeGNlcHRpb24pO1xuXHR9XG5cdGVycm9yLmNvZGUgPSBjb2RlO1xuXHRpZihtZXNzYWdlKSB0aGlzLm1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2UgKyBcIjogXCIgKyBtZXNzYWdlO1xuXHRyZXR1cm4gZXJyb3I7XG59O1xuRE9NRXhjZXB0aW9uLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcbmNvcHkoRXhjZXB0aW9uQ29kZSxET01FeGNlcHRpb24pXG5cbi8qKlxuICogQHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAwL1JFQy1ET00tTGV2ZWwtMi1Db3JlLTIwMDAxMTEzL2NvcmUuaHRtbCNJRC01MzYyOTcxNzdcbiAqIFRoZSBOb2RlTGlzdCBpbnRlcmZhY2UgcHJvdmlkZXMgdGhlIGFic3RyYWN0aW9uIG9mIGFuIG9yZGVyZWQgY29sbGVjdGlvbiBvZiBub2Rlcywgd2l0aG91dCBkZWZpbmluZyBvciBjb25zdHJhaW5pbmcgaG93IHRoaXMgY29sbGVjdGlvbiBpcyBpbXBsZW1lbnRlZC4gTm9kZUxpc3Qgb2JqZWN0cyBpbiB0aGUgRE9NIGFyZSBsaXZlLlxuICogVGhlIGl0ZW1zIGluIHRoZSBOb2RlTGlzdCBhcmUgYWNjZXNzaWJsZSB2aWEgYW4gaW50ZWdyYWwgaW5kZXgsIHN0YXJ0aW5nIGZyb20gMC5cbiAqL1xuZnVuY3Rpb24gTm9kZUxpc3QoKSB7XG59O1xuTm9kZUxpc3QucHJvdG90eXBlID0ge1xuXHQvKipcblx0ICogVGhlIG51bWJlciBvZiBub2RlcyBpbiB0aGUgbGlzdC4gVGhlIHJhbmdlIG9mIHZhbGlkIGNoaWxkIG5vZGUgaW5kaWNlcyBpcyAwIHRvIGxlbmd0aC0xIGluY2x1c2l2ZS5cblx0ICogQHN0YW5kYXJkIGxldmVsMVxuXHQgKi9cblx0bGVuZ3RoOjAsXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBpbmRleHRoIGl0ZW0gaW4gdGhlIGNvbGxlY3Rpb24uIElmIGluZGV4IGlzIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB0aGUgbnVtYmVyIG9mIG5vZGVzIGluIHRoZSBsaXN0LCB0aGlzIHJldHVybnMgbnVsbC5cblx0ICogQHN0YW5kYXJkIGxldmVsMVxuXHQgKiBAcGFyYW0gaW5kZXggIHVuc2lnbmVkIGxvbmdcblx0ICogICBJbmRleCBpbnRvIHRoZSBjb2xsZWN0aW9uLlxuXHQgKiBAcmV0dXJuIE5vZGVcblx0ICogXHRUaGUgbm9kZSBhdCB0aGUgaW5kZXh0aCBwb3NpdGlvbiBpbiB0aGUgTm9kZUxpc3QsIG9yIG51bGwgaWYgdGhhdCBpcyBub3QgYSB2YWxpZCBpbmRleC5cblx0ICovXG5cdGl0ZW06IGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0cmV0dXJuIGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLmxlbmd0aCA/IHRoaXNbaW5kZXhdIDogbnVsbDtcblx0fSxcblx0dG9TdHJpbmc6ZnVuY3Rpb24oaXNIVE1MLG5vZGVGaWx0ZXIpe1xuXHRcdGZvcih2YXIgYnVmID0gW10sIGkgPSAwO2k8dGhpcy5sZW5ndGg7aSsrKXtcblx0XHRcdHNlcmlhbGl6ZVRvU3RyaW5nKHRoaXNbaV0sYnVmLGlzSFRNTCxub2RlRmlsdGVyKTtcblx0XHR9XG5cdFx0cmV0dXJuIGJ1Zi5qb2luKCcnKTtcblx0fSxcblx0LyoqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb24gKE5vZGUpOmJvb2xlYW59IHByZWRpY2F0ZVxuXHQgKiBAcmV0dXJucyB7Tm9kZVtdfVxuXHQgKi9cblx0ZmlsdGVyOiBmdW5jdGlvbiAocHJlZGljYXRlKSB7XG5cdFx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbCh0aGlzLCBwcmVkaWNhdGUpO1xuXHR9LFxuXHQvKipcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtOb2RlfSBpdGVtXG5cdCAqIEByZXR1cm5zIHtudW1iZXJ9XG5cdCAqL1xuXHRpbmRleE9mOiBmdW5jdGlvbiAoaXRlbSkge1xuXHRcdHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHRoaXMsIGl0ZW0pO1xuXHR9LFxufTtcblxuZnVuY3Rpb24gTGl2ZU5vZGVMaXN0KG5vZGUscmVmcmVzaCl7XG5cdHRoaXMuX25vZGUgPSBub2RlO1xuXHR0aGlzLl9yZWZyZXNoID0gcmVmcmVzaFxuXHRfdXBkYXRlTGl2ZUxpc3QodGhpcyk7XG59XG5mdW5jdGlvbiBfdXBkYXRlTGl2ZUxpc3QobGlzdCl7XG5cdHZhciBpbmMgPSBsaXN0Ll9ub2RlLl9pbmMgfHwgbGlzdC5fbm9kZS5vd25lckRvY3VtZW50Ll9pbmM7XG5cdGlmIChsaXN0Ll9pbmMgIT09IGluYykge1xuXHRcdHZhciBscyA9IGxpc3QuX3JlZnJlc2gobGlzdC5fbm9kZSk7XG5cdFx0X19zZXRfXyhsaXN0LCdsZW5ndGgnLGxzLmxlbmd0aCk7XG5cdFx0aWYgKCFsaXN0LiQkbGVuZ3RoIHx8IGxzLmxlbmd0aCA8IGxpc3QuJCRsZW5ndGgpIHtcblx0XHRcdGZvciAodmFyIGkgPSBscy5sZW5ndGg7IGkgaW4gbGlzdDsgaSsrKSB7XG5cdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobGlzdCwgaSkpIHtcblx0XHRcdFx0XHRkZWxldGUgbGlzdFtpXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjb3B5KGxzLGxpc3QpO1xuXHRcdGxpc3QuX2luYyA9IGluYztcblx0fVxufVxuTGl2ZU5vZGVMaXN0LnByb3RvdHlwZS5pdGVtID0gZnVuY3Rpb24oaSl7XG5cdF91cGRhdGVMaXZlTGlzdCh0aGlzKTtcblx0cmV0dXJuIHRoaXNbaV0gfHwgbnVsbDtcbn1cblxuX2V4dGVuZHMoTGl2ZU5vZGVMaXN0LE5vZGVMaXN0KTtcblxuLyoqXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGUgTmFtZWROb2RlTWFwIGludGVyZmFjZSBhcmUgdXNlZFxuICogdG8gcmVwcmVzZW50IGNvbGxlY3Rpb25zIG9mIG5vZGVzIHRoYXQgY2FuIGJlIGFjY2Vzc2VkIGJ5IG5hbWUuXG4gKiBOb3RlIHRoYXQgTmFtZWROb2RlTWFwIGRvZXMgbm90IGluaGVyaXQgZnJvbSBOb2RlTGlzdDtcbiAqIE5hbWVkTm9kZU1hcHMgYXJlIG5vdCBtYWludGFpbmVkIGluIGFueSBwYXJ0aWN1bGFyIG9yZGVyLlxuICogT2JqZWN0cyBjb250YWluZWQgaW4gYW4gb2JqZWN0IGltcGxlbWVudGluZyBOYW1lZE5vZGVNYXAgbWF5IGFsc28gYmUgYWNjZXNzZWQgYnkgYW4gb3JkaW5hbCBpbmRleCxcbiAqIGJ1dCB0aGlzIGlzIHNpbXBseSB0byBhbGxvdyBjb252ZW5pZW50IGVudW1lcmF0aW9uIG9mIHRoZSBjb250ZW50cyBvZiBhIE5hbWVkTm9kZU1hcCxcbiAqIGFuZCBkb2VzIG5vdCBpbXBseSB0aGF0IHRoZSBET00gc3BlY2lmaWVzIGFuIG9yZGVyIHRvIHRoZXNlIE5vZGVzLlxuICogTmFtZWROb2RlTWFwIG9iamVjdHMgaW4gdGhlIERPTSBhcmUgbGl2ZS5cbiAqIHVzZWQgZm9yIGF0dHJpYnV0ZXMgb3IgRG9jdW1lbnRUeXBlIGVudGl0aWVzXG4gKi9cbmZ1bmN0aW9uIE5hbWVkTm9kZU1hcCgpIHtcbn07XG5cbmZ1bmN0aW9uIF9maW5kTm9kZUluZGV4KGxpc3Qsbm9kZSl7XG5cdHZhciBpID0gbGlzdC5sZW5ndGg7XG5cdHdoaWxlKGktLSl7XG5cdFx0aWYobGlzdFtpXSA9PT0gbm9kZSl7cmV0dXJuIGl9XG5cdH1cbn1cblxuZnVuY3Rpb24gX2FkZE5hbWVkTm9kZShlbCxsaXN0LG5ld0F0dHIsb2xkQXR0cil7XG5cdGlmKG9sZEF0dHIpe1xuXHRcdGxpc3RbX2ZpbmROb2RlSW5kZXgobGlzdCxvbGRBdHRyKV0gPSBuZXdBdHRyO1xuXHR9ZWxzZXtcblx0XHRsaXN0W2xpc3QubGVuZ3RoKytdID0gbmV3QXR0cjtcblx0fVxuXHRpZihlbCl7XG5cdFx0bmV3QXR0ci5vd25lckVsZW1lbnQgPSBlbDtcblx0XHR2YXIgZG9jID0gZWwub3duZXJEb2N1bWVudDtcblx0XHRpZihkb2Mpe1xuXHRcdFx0b2xkQXR0ciAmJiBfb25SZW1vdmVBdHRyaWJ1dGUoZG9jLGVsLG9sZEF0dHIpO1xuXHRcdFx0X29uQWRkQXR0cmlidXRlKGRvYyxlbCxuZXdBdHRyKTtcblx0XHR9XG5cdH1cbn1cbmZ1bmN0aW9uIF9yZW1vdmVOYW1lZE5vZGUoZWwsbGlzdCxhdHRyKXtcblx0Ly9jb25zb2xlLmxvZygncmVtb3ZlIGF0dHI6JythdHRyKVxuXHR2YXIgaSA9IF9maW5kTm9kZUluZGV4KGxpc3QsYXR0cik7XG5cdGlmKGk+PTApe1xuXHRcdHZhciBsYXN0SW5kZXggPSBsaXN0Lmxlbmd0aC0xXG5cdFx0d2hpbGUoaTxsYXN0SW5kZXgpe1xuXHRcdFx0bGlzdFtpXSA9IGxpc3RbKytpXVxuXHRcdH1cblx0XHRsaXN0Lmxlbmd0aCA9IGxhc3RJbmRleDtcblx0XHRpZihlbCl7XG5cdFx0XHR2YXIgZG9jID0gZWwub3duZXJEb2N1bWVudDtcblx0XHRcdGlmKGRvYyl7XG5cdFx0XHRcdF9vblJlbW92ZUF0dHJpYnV0ZShkb2MsZWwsYXR0cik7XG5cdFx0XHRcdGF0dHIub3duZXJFbGVtZW50ID0gbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cdH1lbHNle1xuXHRcdHRocm93IG5ldyBET01FeGNlcHRpb24oTk9UX0ZPVU5EX0VSUixuZXcgRXJyb3IoZWwudGFnTmFtZSsnQCcrYXR0cikpXG5cdH1cbn1cbk5hbWVkTm9kZU1hcC5wcm90b3R5cGUgPSB7XG5cdGxlbmd0aDowLFxuXHRpdGVtOk5vZGVMaXN0LnByb3RvdHlwZS5pdGVtLFxuXHRnZXROYW1lZEl0ZW06IGZ1bmN0aW9uKGtleSkge1xuLy9cdFx0aWYoa2V5LmluZGV4T2YoJzonKT4wIHx8IGtleSA9PSAneG1sbnMnKXtcbi8vXHRcdFx0cmV0dXJuIG51bGw7XG4vL1x0XHR9XG5cdFx0Ly9jb25zb2xlLmxvZygpXG5cdFx0dmFyIGkgPSB0aGlzLmxlbmd0aDtcblx0XHR3aGlsZShpLS0pe1xuXHRcdFx0dmFyIGF0dHIgPSB0aGlzW2ldO1xuXHRcdFx0Ly9jb25zb2xlLmxvZyhhdHRyLm5vZGVOYW1lLGtleSlcblx0XHRcdGlmKGF0dHIubm9kZU5hbWUgPT0ga2V5KXtcblx0XHRcdFx0cmV0dXJuIGF0dHI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRzZXROYW1lZEl0ZW06IGZ1bmN0aW9uKGF0dHIpIHtcblx0XHR2YXIgZWwgPSBhdHRyLm93bmVyRWxlbWVudDtcblx0XHRpZihlbCAmJiBlbCE9dGhpcy5fb3duZXJFbGVtZW50KXtcblx0XHRcdHRocm93IG5ldyBET01FeGNlcHRpb24oSU5VU0VfQVRUUklCVVRFX0VSUik7XG5cdFx0fVxuXHRcdHZhciBvbGRBdHRyID0gdGhpcy5nZXROYW1lZEl0ZW0oYXR0ci5ub2RlTmFtZSk7XG5cdFx0X2FkZE5hbWVkTm9kZSh0aGlzLl9vd25lckVsZW1lbnQsdGhpcyxhdHRyLG9sZEF0dHIpO1xuXHRcdHJldHVybiBvbGRBdHRyO1xuXHR9LFxuXHQvKiByZXR1cm5zIE5vZGUgKi9cblx0c2V0TmFtZWRJdGVtTlM6IGZ1bmN0aW9uKGF0dHIpIHsvLyByYWlzZXM6IFdST05HX0RPQ1VNRU5UX0VSUixOT19NT0RJRklDQVRJT05fQUxMT1dFRF9FUlIsSU5VU0VfQVRUUklCVVRFX0VSUlxuXHRcdHZhciBlbCA9IGF0dHIub3duZXJFbGVtZW50LCBvbGRBdHRyO1xuXHRcdGlmKGVsICYmIGVsIT10aGlzLl9vd25lckVsZW1lbnQpe1xuXHRcdFx0dGhyb3cgbmV3IERPTUV4Y2VwdGlvbihJTlVTRV9BVFRSSUJVVEVfRVJSKTtcblx0XHR9XG5cdFx0b2xkQXR0ciA9IHRoaXMuZ2V0TmFtZWRJdGVtTlMoYXR0ci5uYW1lc3BhY2VVUkksYXR0ci5sb2NhbE5hbWUpO1xuXHRcdF9hZGROYW1lZE5vZGUodGhpcy5fb3duZXJFbGVtZW50LHRoaXMsYXR0cixvbGRBdHRyKTtcblx0XHRyZXR1cm4gb2xkQXR0cjtcblx0fSxcblxuXHQvKiByZXR1cm5zIE5vZGUgKi9cblx0cmVtb3ZlTmFtZWRJdGVtOiBmdW5jdGlvbihrZXkpIHtcblx0XHR2YXIgYXR0ciA9IHRoaXMuZ2V0TmFtZWRJdGVtKGtleSk7XG5cdFx0X3JlbW92ZU5hbWVkTm9kZSh0aGlzLl9vd25lckVsZW1lbnQsdGhpcyxhdHRyKTtcblx0XHRyZXR1cm4gYXR0cjtcblxuXG5cdH0sLy8gcmFpc2VzOiBOT1RfRk9VTkRfRVJSLE5PX01PRElGSUNBVElPTl9BTExPV0VEX0VSUlxuXG5cdC8vZm9yIGxldmVsMlxuXHRyZW1vdmVOYW1lZEl0ZW1OUzpmdW5jdGlvbihuYW1lc3BhY2VVUkksbG9jYWxOYW1lKXtcblx0XHR2YXIgYXR0ciA9IHRoaXMuZ2V0TmFtZWRJdGVtTlMobmFtZXNwYWNlVVJJLGxvY2FsTmFtZSk7XG5cdFx0X3JlbW92ZU5hbWVkTm9kZSh0aGlzLl9vd25lckVsZW1lbnQsdGhpcyxhdHRyKTtcblx0XHRyZXR1cm4gYXR0cjtcblx0fSxcblx0Z2V0TmFtZWRJdGVtTlM6IGZ1bmN0aW9uKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKSB7XG5cdFx0dmFyIGkgPSB0aGlzLmxlbmd0aDtcblx0XHR3aGlsZShpLS0pe1xuXHRcdFx0dmFyIG5vZGUgPSB0aGlzW2ldO1xuXHRcdFx0aWYobm9kZS5sb2NhbE5hbWUgPT0gbG9jYWxOYW1lICYmIG5vZGUubmFtZXNwYWNlVVJJID09IG5hbWVzcGFjZVVSSSl7XG5cdFx0XHRcdHJldHVybiBub2RlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcblxuLyoqXG4gKiBUaGUgRE9NSW1wbGVtZW50YXRpb24gaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gb2JqZWN0IHByb3ZpZGluZyBtZXRob2RzXG4gKiB3aGljaCBhcmUgbm90IGRlcGVuZGVudCBvbiBhbnkgcGFydGljdWxhciBkb2N1bWVudC5cbiAqIFN1Y2ggYW4gb2JqZWN0IGlzIHJldHVybmVkIGJ5IHRoZSBgRG9jdW1lbnQuaW1wbGVtZW50YXRpb25gIHByb3BlcnR5LlxuICpcbiAqIF9fVGhlIGluZGl2aWR1YWwgbWV0aG9kcyBkZXNjcmliZSB0aGUgZGlmZmVyZW5jZXMgY29tcGFyZWQgdG8gdGhlIHNwZWNzLl9fXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKlxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRE9NSW1wbGVtZW50YXRpb24gTUROXG4gKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9SRUMtRE9NLUxldmVsLTEvbGV2ZWwtb25lLWNvcmUuaHRtbCNJRC0xMDIxNjE0OTAgRE9NIExldmVsIDEgQ29yZSAoSW5pdGlhbClcbiAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0yLUNvcmUvY29yZS5odG1sI0lELTEwMjE2MTQ5MCBET00gTGV2ZWwgMiBDb3JlXG4gKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMy1Db3JlL2NvcmUuaHRtbCNJRC0xMDIxNjE0OTAgRE9NIExldmVsIDMgQ29yZVxuICogQHNlZSBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2RvbWltcGxlbWVudGF0aW9uIERPTSBMaXZpbmcgU3RhbmRhcmRcbiAqL1xuZnVuY3Rpb24gRE9NSW1wbGVtZW50YXRpb24oKSB7XG59XG5cbkRPTUltcGxlbWVudGF0aW9uLnByb3RvdHlwZSA9IHtcblx0LyoqXG5cdCAqIFRoZSBET01JbXBsZW1lbnRhdGlvbi5oYXNGZWF0dXJlKCkgbWV0aG9kIHJldHVybnMgYSBCb29sZWFuIGZsYWcgaW5kaWNhdGluZyBpZiBhIGdpdmVuIGZlYXR1cmUgaXMgc3VwcG9ydGVkLlxuXHQgKiBUaGUgZGlmZmVyZW50IGltcGxlbWVudGF0aW9ucyBmYWlybHkgZGl2ZXJnZWQgaW4gd2hhdCBraW5kIG9mIGZlYXR1cmVzIHdlcmUgcmVwb3J0ZWQuXG5cdCAqIFRoZSBsYXRlc3QgdmVyc2lvbiBvZiB0aGUgc3BlYyBzZXR0bGVkIHRvIGZvcmNlIHRoaXMgbWV0aG9kIHRvIGFsd2F5cyByZXR1cm4gdHJ1ZSwgd2hlcmUgdGhlIGZ1bmN0aW9uYWxpdHkgd2FzIGFjY3VyYXRlIGFuZCBpbiB1c2UuXG5cdCAqXG5cdCAqIEBkZXByZWNhdGVkIEl0IGlzIGRlcHJlY2F0ZWQgYW5kIG1vZGVybiBicm93c2VycyByZXR1cm4gdHJ1ZSBpbiBhbGwgY2FzZXMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBmZWF0dXJlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbdmVyc2lvbl1cblx0ICogQHJldHVybnMge2Jvb2xlYW59IGFsd2F5cyB0cnVlXG5cdCAqXG5cdCAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RPTUltcGxlbWVudGF0aW9uL2hhc0ZlYXR1cmUgTUROXG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL1JFQy1ET00tTGV2ZWwtMS9sZXZlbC1vbmUtY29yZS5odG1sI0lELTVDRUQ5NEQ3IERPTSBMZXZlbCAxIENvcmVcblx0ICogQHNlZSBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2RvbS1kb21pbXBsZW1lbnRhdGlvbi1oYXNmZWF0dXJlIERPTSBMaXZpbmcgU3RhbmRhcmRcblx0ICovXG5cdGhhc0ZlYXR1cmU6IGZ1bmN0aW9uKGZlYXR1cmUsIHZlcnNpb24pIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXHQvKipcblx0ICogQ3JlYXRlcyBhbiBYTUwgRG9jdW1lbnQgb2JqZWN0IG9mIHRoZSBzcGVjaWZpZWQgdHlwZSB3aXRoIGl0cyBkb2N1bWVudCBlbGVtZW50LlxuXHQgKlxuXHQgKiBfX0l0IGJlaGF2ZXMgc2xpZ2h0bHkgZGlmZmVyZW50IGZyb20gdGhlIGRlc2NyaXB0aW9uIGluIHRoZSBsaXZpbmcgc3RhbmRhcmRfXzpcblx0ICogLSBUaGVyZSBpcyBubyBpbnRlcmZhY2UvY2xhc3MgYFhNTERvY3VtZW50YCwgaXQgcmV0dXJucyBhIGBEb2N1bWVudGAgaW5zdGFuY2UuXG5cdCAqIC0gYGNvbnRlbnRUeXBlYCwgYGVuY29kaW5nYCwgYG1vZGVgLCBgb3JpZ2luYCwgYHVybGAgZmllbGRzIGFyZSBjdXJyZW50bHkgbm90IGRlY2xhcmVkLlxuXHQgKiAtIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IHZhbGlkYXRpbmcgbmFtZXMgb3IgcXVhbGlmaWVkIG5hbWVzXG5cdCAqICAgKHdoZW4gcGFyc2luZyBYTUwgc3RyaW5ncywgdGhlIFNBWCBwYXJzZXIgdGFrZXMgY2FyZSBvZiB0aGF0KVxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ3xudWxsfSBuYW1lc3BhY2VVUklcblx0ICogQHBhcmFtIHtzdHJpbmd9IHF1YWxpZmllZE5hbWVcblx0ICogQHBhcmFtIHtEb2N1bWVudFR5cGU9bnVsbH0gZG9jdHlwZVxuXHQgKiBAcmV0dXJucyB7RG9jdW1lbnR9XG5cdCAqXG5cdCAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RPTUltcGxlbWVudGF0aW9uL2NyZWF0ZURvY3VtZW50IE1ETlxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMi1Db3JlL2NvcmUuaHRtbCNMZXZlbC0yLUNvcmUtRE9NLWNyZWF0ZURvY3VtZW50IERPTSBMZXZlbCAyIENvcmUgKGluaXRpYWwpXG5cdCAqIEBzZWUgaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNkb20tZG9taW1wbGVtZW50YXRpb24tY3JlYXRlZG9jdW1lbnQgIERPTSBMZXZlbCAyIENvcmVcblx0ICpcblx0ICogQHNlZSBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI3ZhbGlkYXRlLWFuZC1leHRyYWN0IERPTTogVmFsaWRhdGUgYW5kIGV4dHJhY3Rcblx0ICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIveG1sLyNOVC1OYW1lU3RhcnRDaGFyIFhNTCBTcGVjOiBOYW1lc1xuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi94bWwtbmFtZXMvI25zLXF1YWxuYW1lcyBYTUwgTmFtZXNwYWNlczogUXVhbGlmaWVkIG5hbWVzXG5cdCAqL1xuXHRjcmVhdGVEb2N1bWVudDogZnVuY3Rpb24obmFtZXNwYWNlVVJJLCAgcXVhbGlmaWVkTmFtZSwgZG9jdHlwZSl7XG5cdFx0dmFyIGRvYyA9IG5ldyBEb2N1bWVudCgpO1xuXHRcdGRvYy5pbXBsZW1lbnRhdGlvbiA9IHRoaXM7XG5cdFx0ZG9jLmNoaWxkTm9kZXMgPSBuZXcgTm9kZUxpc3QoKTtcblx0XHRkb2MuZG9jdHlwZSA9IGRvY3R5cGUgfHwgbnVsbDtcblx0XHRpZiAoZG9jdHlwZSl7XG5cdFx0XHRkb2MuYXBwZW5kQ2hpbGQoZG9jdHlwZSk7XG5cdFx0fVxuXHRcdGlmIChxdWFsaWZpZWROYW1lKXtcblx0XHRcdHZhciByb290ID0gZG9jLmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2VVUkksIHF1YWxpZmllZE5hbWUpO1xuXHRcdFx0ZG9jLmFwcGVuZENoaWxkKHJvb3QpO1xuXHRcdH1cblx0XHRyZXR1cm4gZG9jO1xuXHR9LFxuXHQvKipcblx0ICogUmV0dXJucyBhIGRvY3R5cGUsIHdpdGggdGhlIGdpdmVuIGBxdWFsaWZpZWROYW1lYCwgYHB1YmxpY0lkYCwgYW5kIGBzeXN0ZW1JZGAuXG5cdCAqXG5cdCAqIF9fVGhpcyBiZWhhdmlvciBpcyBzbGlnaHRseSBkaWZmZXJlbnQgZnJvbSB0aGUgaW4gdGhlIHNwZWNzX186XG5cdCAqIC0gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgdmFsaWRhdGluZyBuYW1lcyBvciBxdWFsaWZpZWQgbmFtZXNcblx0ICogICAod2hlbiBwYXJzaW5nIFhNTCBzdHJpbmdzLCB0aGUgU0FYIHBhcnNlciB0YWtlcyBjYXJlIG9mIHRoYXQpXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBxdWFsaWZpZWROYW1lXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbcHVibGljSWRdXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbc3lzdGVtSWRdXG5cdCAqIEByZXR1cm5zIHtEb2N1bWVudFR5cGV9IHdoaWNoIGNhbiBlaXRoZXIgYmUgdXNlZCB3aXRoIGBET01JbXBsZW1lbnRhdGlvbi5jcmVhdGVEb2N1bWVudGAgdXBvbiBkb2N1bWVudCBjcmVhdGlvblxuXHQgKiBcdFx0XHRcdCAgb3IgY2FuIGJlIHB1dCBpbnRvIHRoZSBkb2N1bWVudCB2aWEgbWV0aG9kcyBsaWtlIGBOb2RlLmluc2VydEJlZm9yZSgpYCBvciBgTm9kZS5yZXBsYWNlQ2hpbGQoKWBcblx0ICpcblx0ICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRE9NSW1wbGVtZW50YXRpb24vY3JlYXRlRG9jdW1lbnRUeXBlIE1ETlxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMi1Db3JlL2NvcmUuaHRtbCNMZXZlbC0yLUNvcmUtRE9NLWNyZWF0ZURvY1R5cGUgRE9NIExldmVsIDIgQ29yZVxuXHQgKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jZG9tLWRvbWltcGxlbWVudGF0aW9uLWNyZWF0ZWRvY3VtZW50dHlwZSBET00gTGl2aW5nIFN0YW5kYXJkXG5cdCAqXG5cdCAqIEBzZWUgaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyN2YWxpZGF0ZS1hbmQtZXh0cmFjdCBET006IFZhbGlkYXRlIGFuZCBleHRyYWN0XG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3htbC8jTlQtTmFtZVN0YXJ0Q2hhciBYTUwgU3BlYzogTmFtZXNcblx0ICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIveG1sLW5hbWVzLyNucy1xdWFsbmFtZXMgWE1MIE5hbWVzcGFjZXM6IFF1YWxpZmllZCBuYW1lc1xuXHQgKi9cblx0Y3JlYXRlRG9jdW1lbnRUeXBlOiBmdW5jdGlvbihxdWFsaWZpZWROYW1lLCBwdWJsaWNJZCwgc3lzdGVtSWQpe1xuXHRcdHZhciBub2RlID0gbmV3IERvY3VtZW50VHlwZSgpO1xuXHRcdG5vZGUubmFtZSA9IHF1YWxpZmllZE5hbWU7XG5cdFx0bm9kZS5ub2RlTmFtZSA9IHF1YWxpZmllZE5hbWU7XG5cdFx0bm9kZS5wdWJsaWNJZCA9IHB1YmxpY0lkIHx8ICcnO1xuXHRcdG5vZGUuc3lzdGVtSWQgPSBzeXN0ZW1JZCB8fCAnJztcblxuXHRcdHJldHVybiBub2RlO1xuXHR9XG59O1xuXG5cbi8qKlxuICogQHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAwL1JFQy1ET00tTGV2ZWwtMi1Db3JlLTIwMDAxMTEzL2NvcmUuaHRtbCNJRC0xOTUwNjQxMjQ3XG4gKi9cblxuZnVuY3Rpb24gTm9kZSgpIHtcbn07XG5cbk5vZGUucHJvdG90eXBlID0ge1xuXHRmaXJzdENoaWxkIDogbnVsbCxcblx0bGFzdENoaWxkIDogbnVsbCxcblx0cHJldmlvdXNTaWJsaW5nIDogbnVsbCxcblx0bmV4dFNpYmxpbmcgOiBudWxsLFxuXHRhdHRyaWJ1dGVzIDogbnVsbCxcblx0cGFyZW50Tm9kZSA6IG51bGwsXG5cdGNoaWxkTm9kZXMgOiBudWxsLFxuXHRvd25lckRvY3VtZW50IDogbnVsbCxcblx0bm9kZVZhbHVlIDogbnVsbCxcblx0bmFtZXNwYWNlVVJJIDogbnVsbCxcblx0cHJlZml4IDogbnVsbCxcblx0bG9jYWxOYW1lIDogbnVsbCxcblx0Ly8gTW9kaWZpZWQgaW4gRE9NIExldmVsIDI6XG5cdGluc2VydEJlZm9yZTpmdW5jdGlvbihuZXdDaGlsZCwgcmVmQ2hpbGQpey8vcmFpc2VzXG5cdFx0cmV0dXJuIF9pbnNlcnRCZWZvcmUodGhpcyxuZXdDaGlsZCxyZWZDaGlsZCk7XG5cdH0sXG5cdHJlcGxhY2VDaGlsZDpmdW5jdGlvbihuZXdDaGlsZCwgb2xkQ2hpbGQpey8vcmFpc2VzXG5cdFx0X2luc2VydEJlZm9yZSh0aGlzLCBuZXdDaGlsZCxvbGRDaGlsZCwgYXNzZXJ0UHJlUmVwbGFjZW1lbnRWYWxpZGl0eUluRG9jdW1lbnQpO1xuXHRcdGlmKG9sZENoaWxkKXtcblx0XHRcdHRoaXMucmVtb3ZlQ2hpbGQob2xkQ2hpbGQpO1xuXHRcdH1cblx0fSxcblx0cmVtb3ZlQ2hpbGQ6ZnVuY3Rpb24ob2xkQ2hpbGQpe1xuXHRcdHJldHVybiBfcmVtb3ZlQ2hpbGQodGhpcyxvbGRDaGlsZCk7XG5cdH0sXG5cdGFwcGVuZENoaWxkOmZ1bmN0aW9uKG5ld0NoaWxkKXtcblx0XHRyZXR1cm4gdGhpcy5pbnNlcnRCZWZvcmUobmV3Q2hpbGQsbnVsbCk7XG5cdH0sXG5cdGhhc0NoaWxkTm9kZXM6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gdGhpcy5maXJzdENoaWxkICE9IG51bGw7XG5cdH0sXG5cdGNsb25lTm9kZTpmdW5jdGlvbihkZWVwKXtcblx0XHRyZXR1cm4gY2xvbmVOb2RlKHRoaXMub3duZXJEb2N1bWVudHx8dGhpcyx0aGlzLGRlZXApO1xuXHR9LFxuXHQvLyBNb2RpZmllZCBpbiBET00gTGV2ZWwgMjpcblx0bm9ybWFsaXplOmZ1bmN0aW9uKCl7XG5cdFx0dmFyIGNoaWxkID0gdGhpcy5maXJzdENoaWxkO1xuXHRcdHdoaWxlKGNoaWxkKXtcblx0XHRcdHZhciBuZXh0ID0gY2hpbGQubmV4dFNpYmxpbmc7XG5cdFx0XHRpZihuZXh0ICYmIG5leHQubm9kZVR5cGUgPT0gVEVYVF9OT0RFICYmIGNoaWxkLm5vZGVUeXBlID09IFRFWFRfTk9ERSl7XG5cdFx0XHRcdHRoaXMucmVtb3ZlQ2hpbGQobmV4dCk7XG5cdFx0XHRcdGNoaWxkLmFwcGVuZERhdGEobmV4dC5kYXRhKTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRjaGlsZC5ub3JtYWxpemUoKTtcblx0XHRcdFx0Y2hpbGQgPSBuZXh0O1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcbiAgXHQvLyBJbnRyb2R1Y2VkIGluIERPTSBMZXZlbCAyOlxuXHRpc1N1cHBvcnRlZDpmdW5jdGlvbihmZWF0dXJlLCB2ZXJzaW9uKXtcblx0XHRyZXR1cm4gdGhpcy5vd25lckRvY3VtZW50LmltcGxlbWVudGF0aW9uLmhhc0ZlYXR1cmUoZmVhdHVyZSx2ZXJzaW9uKTtcblx0fSxcbiAgICAvLyBJbnRyb2R1Y2VkIGluIERPTSBMZXZlbCAyOlxuICAgIGhhc0F0dHJpYnV0ZXM6ZnVuY3Rpb24oKXtcbiAgICBcdHJldHVybiB0aGlzLmF0dHJpYnV0ZXMubGVuZ3RoPjA7XG4gICAgfSxcblx0LyoqXG5cdCAqIExvb2sgdXAgdGhlIHByZWZpeCBhc3NvY2lhdGVkIHRvIHRoZSBnaXZlbiBuYW1lc3BhY2UgVVJJLCBzdGFydGluZyBmcm9tIHRoaXMgbm9kZS5cblx0ICogKipUaGUgZGVmYXVsdCBuYW1lc3BhY2UgZGVjbGFyYXRpb25zIGFyZSBpZ25vcmVkIGJ5IHRoaXMgbWV0aG9kLioqXG5cdCAqIFNlZSBOYW1lc3BhY2UgUHJlZml4IExvb2t1cCBmb3IgZGV0YWlscyBvbiB0aGUgYWxnb3JpdGhtIHVzZWQgYnkgdGhpcyBtZXRob2QuXG5cdCAqXG5cdCAqIF9Ob3RlOiBUaGUgaW1wbGVtZW50YXRpb24gc2VlbXMgdG8gYmUgaW5jb21wbGV0ZSB3aGVuIGNvbXBhcmVkIHRvIHRoZSBhbGdvcml0aG0gZGVzY3JpYmVkIGluIHRoZSBzcGVjcy5fXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nIHwgbnVsbH0gbmFtZXNwYWNlVVJJXG5cdCAqIEByZXR1cm5zIHtzdHJpbmcgfCBudWxsfVxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMy1Db3JlL2NvcmUuaHRtbCNOb2RlMy1sb29rdXBOYW1lc3BhY2VQcmVmaXhcblx0ICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTMtQ29yZS9uYW1lc3BhY2VzLWFsZ29yaXRobXMuaHRtbCNsb29rdXBOYW1lc3BhY2VQcmVmaXhBbGdvXG5cdCAqIEBzZWUgaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNkb20tbm9kZS1sb29rdXBwcmVmaXhcblx0ICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20veG1sZG9tL3htbGRvbS9pc3N1ZXMvMzIyXG5cdCAqL1xuICAgIGxvb2t1cFByZWZpeDpmdW5jdGlvbihuYW1lc3BhY2VVUkkpe1xuICAgIFx0dmFyIGVsID0gdGhpcztcbiAgICBcdHdoaWxlKGVsKXtcbiAgICBcdFx0dmFyIG1hcCA9IGVsLl9uc01hcDtcbiAgICBcdFx0Ly9jb25zb2xlLmRpcihtYXApXG4gICAgXHRcdGlmKG1hcCl7XG4gICAgXHRcdFx0Zm9yKHZhciBuIGluIG1hcCl7XG5cdFx0XHRcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1hcCwgbikgJiYgbWFwW25dID09PSBuYW1lc3BhY2VVUkkpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIG47XG5cdFx0XHRcdFx0XHR9XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9XG4gICAgXHRcdGVsID0gZWwubm9kZVR5cGUgPT0gQVRUUklCVVRFX05PREU/ZWwub3duZXJEb2N1bWVudCA6IGVsLnBhcmVudE5vZGU7XG4gICAgXHR9XG4gICAgXHRyZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIC8vIEludHJvZHVjZWQgaW4gRE9NIExldmVsIDM6XG4gICAgbG9va3VwTmFtZXNwYWNlVVJJOmZ1bmN0aW9uKHByZWZpeCl7XG4gICAgXHR2YXIgZWwgPSB0aGlzO1xuICAgIFx0d2hpbGUoZWwpe1xuICAgIFx0XHR2YXIgbWFwID0gZWwuX25zTWFwO1xuICAgIFx0XHQvL2NvbnNvbGUuZGlyKG1hcClcbiAgICBcdFx0aWYobWFwKXtcbiAgICBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWFwLCBwcmVmaXgpKXtcbiAgICBcdFx0XHRcdHJldHVybiBtYXBbcHJlZml4XSA7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9XG4gICAgXHRcdGVsID0gZWwubm9kZVR5cGUgPT0gQVRUUklCVVRFX05PREU/ZWwub3duZXJEb2N1bWVudCA6IGVsLnBhcmVudE5vZGU7XG4gICAgXHR9XG4gICAgXHRyZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIC8vIEludHJvZHVjZWQgaW4gRE9NIExldmVsIDM6XG4gICAgaXNEZWZhdWx0TmFtZXNwYWNlOmZ1bmN0aW9uKG5hbWVzcGFjZVVSSSl7XG4gICAgXHR2YXIgcHJlZml4ID0gdGhpcy5sb29rdXBQcmVmaXgobmFtZXNwYWNlVVJJKTtcbiAgICBcdHJldHVybiBwcmVmaXggPT0gbnVsbDtcbiAgICB9XG59O1xuXG5cbmZ1bmN0aW9uIF94bWxFbmNvZGVyKGMpe1xuXHRyZXR1cm4gYyA9PSAnPCcgJiYgJyZsdDsnIHx8XG4gICAgICAgICBjID09ICc+JyAmJiAnJmd0OycgfHxcbiAgICAgICAgIGMgPT0gJyYnICYmICcmYW1wOycgfHxcbiAgICAgICAgIGMgPT0gJ1wiJyAmJiAnJnF1b3Q7JyB8fFxuICAgICAgICAgJyYjJytjLmNoYXJDb2RlQXQoKSsnOydcbn1cblxuXG5jb3B5KE5vZGVUeXBlLE5vZGUpO1xuY29weShOb2RlVHlwZSxOb2RlLnByb3RvdHlwZSk7XG5cbi8qKlxuICogQHBhcmFtIGNhbGxiYWNrIHJldHVybiB0cnVlIGZvciBjb250aW51ZSxmYWxzZSBmb3IgYnJlYWtcbiAqIEByZXR1cm4gYm9vbGVhbiB0cnVlOiBicmVhayB2aXNpdDtcbiAqL1xuZnVuY3Rpb24gX3Zpc2l0Tm9kZShub2RlLGNhbGxiYWNrKXtcblx0aWYoY2FsbGJhY2sobm9kZSkpe1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdGlmKG5vZGUgPSBub2RlLmZpcnN0Q2hpbGQpe1xuXHRcdGRve1xuXHRcdFx0aWYoX3Zpc2l0Tm9kZShub2RlLGNhbGxiYWNrKSl7cmV0dXJuIHRydWV9XG4gICAgICAgIH13aGlsZShub2RlPW5vZGUubmV4dFNpYmxpbmcpXG4gICAgfVxufVxuXG5cblxuZnVuY3Rpb24gRG9jdW1lbnQoKXtcblx0dGhpcy5vd25lckRvY3VtZW50ID0gdGhpcztcbn1cblxuZnVuY3Rpb24gX29uQWRkQXR0cmlidXRlKGRvYyxlbCxuZXdBdHRyKXtcblx0ZG9jICYmIGRvYy5faW5jKys7XG5cdHZhciBucyA9IG5ld0F0dHIubmFtZXNwYWNlVVJJIDtcblx0aWYobnMgPT09IE5BTUVTUEFDRS5YTUxOUyl7XG5cdFx0Ly91cGRhdGUgbmFtZXNwYWNlXG5cdFx0ZWwuX25zTWFwW25ld0F0dHIucHJlZml4P25ld0F0dHIubG9jYWxOYW1lOicnXSA9IG5ld0F0dHIudmFsdWVcblx0fVxufVxuXG5mdW5jdGlvbiBfb25SZW1vdmVBdHRyaWJ1dGUoZG9jLGVsLG5ld0F0dHIscmVtb3ZlKXtcblx0ZG9jICYmIGRvYy5faW5jKys7XG5cdHZhciBucyA9IG5ld0F0dHIubmFtZXNwYWNlVVJJIDtcblx0aWYobnMgPT09IE5BTUVTUEFDRS5YTUxOUyl7XG5cdFx0Ly91cGRhdGUgbmFtZXNwYWNlXG5cdFx0ZGVsZXRlIGVsLl9uc01hcFtuZXdBdHRyLnByZWZpeD9uZXdBdHRyLmxvY2FsTmFtZTonJ11cblx0fVxufVxuXG4vKipcbiAqIFVwZGF0ZXMgYGVsLmNoaWxkTm9kZXNgLCB1cGRhdGluZyB0aGUgaW5kZXhlZCBpdGVtcyBhbmQgaXQncyBgbGVuZ3RoYC5cbiAqIFBhc3NpbmcgYG5ld0NoaWxkYCBtZWFucyBpdCB3aWxsIGJlIGFwcGVuZGVkLlxuICogT3RoZXJ3aXNlIGl0J3MgYXNzdW1lZCB0aGF0IGFuIGl0ZW0gaGFzIGJlZW4gcmVtb3ZlZCxcbiAqIGFuZCBgZWwuZmlyc3ROb2RlYCBhbmQgaXQncyBgLm5leHRTaWJsaW5nYCBhcmUgdXNlZFxuICogdG8gd2FsayB0aGUgY3VycmVudCBsaXN0IG9mIGNoaWxkIG5vZGVzLlxuICpcbiAqIEBwYXJhbSB7RG9jdW1lbnR9IGRvY1xuICogQHBhcmFtIHtOb2RlfSBlbFxuICogQHBhcmFtIHtOb2RlfSBbbmV3Q2hpbGRdXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBfb25VcGRhdGVDaGlsZCAoZG9jLCBlbCwgbmV3Q2hpbGQpIHtcblx0aWYoZG9jICYmIGRvYy5faW5jKXtcblx0XHRkb2MuX2luYysrO1xuXHRcdC8vdXBkYXRlIGNoaWxkTm9kZXNcblx0XHR2YXIgY3MgPSBlbC5jaGlsZE5vZGVzO1xuXHRcdGlmIChuZXdDaGlsZCkge1xuXHRcdFx0Y3NbY3MubGVuZ3RoKytdID0gbmV3Q2hpbGQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBjaGlsZCA9IGVsLmZpcnN0Q2hpbGQ7XG5cdFx0XHR2YXIgaSA9IDA7XG5cdFx0XHR3aGlsZSAoY2hpbGQpIHtcblx0XHRcdFx0Y3NbaSsrXSA9IGNoaWxkO1xuXHRcdFx0XHRjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuXHRcdFx0fVxuXHRcdFx0Y3MubGVuZ3RoID0gaTtcblx0XHRcdGRlbGV0ZSBjc1tjcy5sZW5ndGhdO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIFJlbW92ZXMgdGhlIGNvbm5lY3Rpb25zIGJldHdlZW4gYHBhcmVudE5vZGVgIGFuZCBgY2hpbGRgXG4gKiBhbmQgYW55IGV4aXN0aW5nIGBjaGlsZC5wcmV2aW91c1NpYmxpbmdgIG9yIGBjaGlsZC5uZXh0U2libGluZ2AuXG4gKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20veG1sZG9tL3htbGRvbS9pc3N1ZXMvMTM1XG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS94bWxkb20veG1sZG9tL2lzc3Vlcy8xNDVcbiAqXG4gKiBAcGFyYW0ge05vZGV9IHBhcmVudE5vZGVcbiAqIEBwYXJhbSB7Tm9kZX0gY2hpbGRcbiAqIEByZXR1cm5zIHtOb2RlfSB0aGUgY2hpbGQgdGhhdCB3YXMgcmVtb3ZlZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIF9yZW1vdmVDaGlsZCAocGFyZW50Tm9kZSwgY2hpbGQpIHtcblx0dmFyIHByZXZpb3VzID0gY2hpbGQucHJldmlvdXNTaWJsaW5nO1xuXHR2YXIgbmV4dCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuXHRpZiAocHJldmlvdXMpIHtcblx0XHRwcmV2aW91cy5uZXh0U2libGluZyA9IG5leHQ7XG5cdH0gZWxzZSB7XG5cdFx0cGFyZW50Tm9kZS5maXJzdENoaWxkID0gbmV4dDtcblx0fVxuXHRpZiAobmV4dCkge1xuXHRcdG5leHQucHJldmlvdXNTaWJsaW5nID0gcHJldmlvdXM7XG5cdH0gZWxzZSB7XG5cdFx0cGFyZW50Tm9kZS5sYXN0Q2hpbGQgPSBwcmV2aW91cztcblx0fVxuXHRjaGlsZC5wYXJlbnROb2RlID0gbnVsbDtcblx0Y2hpbGQucHJldmlvdXNTaWJsaW5nID0gbnVsbDtcblx0Y2hpbGQubmV4dFNpYmxpbmcgPSBudWxsO1xuXHRfb25VcGRhdGVDaGlsZChwYXJlbnROb2RlLm93bmVyRG9jdW1lbnQsIHBhcmVudE5vZGUpO1xuXHRyZXR1cm4gY2hpbGQ7XG59XG5cbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgYG5vZGVgIGNhbiBiZSBhIHBhcmVudCBmb3IgaW5zZXJ0aW9uLlxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaGFzVmFsaWRQYXJlbnROb2RlVHlwZShub2RlKSB7XG5cdHJldHVybiAoXG5cdFx0bm9kZSAmJlxuXHRcdChub2RlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX05PREUgfHwgbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFIHx8IG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKVxuXHQpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIGBub2RlYCBjYW4gYmUgaW5zZXJ0ZWQgYWNjb3JkaW5nIHRvIGl0J3MgYG5vZGVUeXBlYC5cbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGhhc0luc2VydGFibGVOb2RlVHlwZShub2RlKSB7XG5cdHJldHVybiAoXG5cdFx0bm9kZSAmJlxuXHRcdChpc0VsZW1lbnROb2RlKG5vZGUpIHx8XG5cdFx0XHRpc1RleHROb2RlKG5vZGUpIHx8XG5cdFx0XHRpc0RvY1R5cGVOb2RlKG5vZGUpIHx8XG5cdFx0XHRub2RlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUgfHxcblx0XHRcdG5vZGUubm9kZVR5cGUgPT09IE5vZGUuQ09NTUVOVF9OT0RFIHx8XG5cdFx0XHRub2RlLm5vZGVUeXBlID09PSBOb2RlLlBST0NFU1NJTkdfSU5TVFJVQ1RJT05fTk9ERSlcblx0KTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYG5vZGVgIGlzIGEgRE9DVFlQRSBub2RlXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc0RvY1R5cGVOb2RlKG5vZGUpIHtcblx0cmV0dXJuIG5vZGUgJiYgbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9UWVBFX05PREU7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBub2RlIGlzIGFuIGVsZW1lbnRcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzRWxlbWVudE5vZGUobm9kZSkge1xuXHRyZXR1cm4gbm9kZSAmJiBub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERTtcbn1cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGBub2RlYCBpcyBhIHRleHQgbm9kZVxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNUZXh0Tm9kZShub2RlKSB7XG5cdHJldHVybiBub2RlICYmIG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGVuIGVsZW1lbnQgbm9kZSBjYW4gYmUgaW5zZXJ0ZWQgYmVmb3JlIGBjaGlsZGAsIG9yIGF0IHRoZSBlbmQgaWYgY2hpbGQgaXMgZmFsc3ksXG4gKiBhY2NvcmRpbmcgdG8gdGhlIHByZXNlbmNlIGFuZCBwb3NpdGlvbiBvZiBhIGRvY3R5cGUgbm9kZSBvbiB0aGUgc2FtZSBsZXZlbC5cbiAqXG4gKiBAcGFyYW0ge0RvY3VtZW50fSBkb2MgVGhlIGRvY3VtZW50IG5vZGVcbiAqIEBwYXJhbSB7Tm9kZX0gY2hpbGQgdGhlIG5vZGUgdGhhdCB3b3VsZCBiZWNvbWUgdGhlIG5leHRTaWJsaW5nIGlmIHRoZSBlbGVtZW50IHdvdWxkIGJlIGluc2VydGVkXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gYHRydWVgIGlmIGFuIGVsZW1lbnQgY2FuIGJlIGluc2VydGVkIGJlZm9yZSBjaGlsZFxuICogQHByaXZhdGVcbiAqIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1ub2RlLWVuc3VyZS1wcmUtaW5zZXJ0aW9uLXZhbGlkaXR5XG4gKi9cbmZ1bmN0aW9uIGlzRWxlbWVudEluc2VydGlvblBvc3NpYmxlKGRvYywgY2hpbGQpIHtcblx0dmFyIHBhcmVudENoaWxkTm9kZXMgPSBkb2MuY2hpbGROb2RlcyB8fCBbXTtcblx0aWYgKGZpbmQocGFyZW50Q2hpbGROb2RlcywgaXNFbGVtZW50Tm9kZSkgfHwgaXNEb2NUeXBlTm9kZShjaGlsZCkpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0dmFyIGRvY1R5cGVOb2RlID0gZmluZChwYXJlbnRDaGlsZE5vZGVzLCBpc0RvY1R5cGVOb2RlKTtcblx0cmV0dXJuICEoY2hpbGQgJiYgZG9jVHlwZU5vZGUgJiYgcGFyZW50Q2hpbGROb2Rlcy5pbmRleE9mKGRvY1R5cGVOb2RlKSA+IHBhcmVudENoaWxkTm9kZXMuaW5kZXhPZihjaGlsZCkpO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGVuIGVsZW1lbnQgbm9kZSBjYW4gYmUgaW5zZXJ0ZWQgYmVmb3JlIGBjaGlsZGAsIG9yIGF0IHRoZSBlbmQgaWYgY2hpbGQgaXMgZmFsc3ksXG4gKiBhY2NvcmRpbmcgdG8gdGhlIHByZXNlbmNlIGFuZCBwb3NpdGlvbiBvZiBhIGRvY3R5cGUgbm9kZSBvbiB0aGUgc2FtZSBsZXZlbC5cbiAqXG4gKiBAcGFyYW0ge05vZGV9IGRvYyBUaGUgZG9jdW1lbnQgbm9kZVxuICogQHBhcmFtIHtOb2RlfSBjaGlsZCB0aGUgbm9kZSB0aGF0IHdvdWxkIGJlY29tZSB0aGUgbmV4dFNpYmxpbmcgaWYgdGhlIGVsZW1lbnQgd291bGQgYmUgaW5zZXJ0ZWRcbiAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgYW4gZWxlbWVudCBjYW4gYmUgaW5zZXJ0ZWQgYmVmb3JlIGNoaWxkXG4gKiBAcHJpdmF0ZVxuICogaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LW5vZGUtZW5zdXJlLXByZS1pbnNlcnRpb24tdmFsaWRpdHlcbiAqL1xuZnVuY3Rpb24gaXNFbGVtZW50UmVwbGFjZW1lbnRQb3NzaWJsZShkb2MsIGNoaWxkKSB7XG5cdHZhciBwYXJlbnRDaGlsZE5vZGVzID0gZG9jLmNoaWxkTm9kZXMgfHwgW107XG5cblx0ZnVuY3Rpb24gaGFzRWxlbWVudENoaWxkVGhhdElzTm90Q2hpbGQobm9kZSkge1xuXHRcdHJldHVybiBpc0VsZW1lbnROb2RlKG5vZGUpICYmIG5vZGUgIT09IGNoaWxkO1xuXHR9XG5cblx0aWYgKGZpbmQocGFyZW50Q2hpbGROb2RlcywgaGFzRWxlbWVudENoaWxkVGhhdElzTm90Q2hpbGQpKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHZhciBkb2NUeXBlTm9kZSA9IGZpbmQocGFyZW50Q2hpbGROb2RlcywgaXNEb2NUeXBlTm9kZSk7XG5cdHJldHVybiAhKGNoaWxkICYmIGRvY1R5cGVOb2RlICYmIHBhcmVudENoaWxkTm9kZXMuaW5kZXhPZihkb2NUeXBlTm9kZSkgPiBwYXJlbnRDaGlsZE5vZGVzLmluZGV4T2YoY2hpbGQpKTtcbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICogU3RlcHMgMS01IG9mIHRoZSBjaGVja3MgYmVmb3JlIGluc2VydGluZyBhbmQgYmVmb3JlIHJlcGxhY2luZyBhIGNoaWxkIGFyZSB0aGUgc2FtZS5cbiAqXG4gKiBAcGFyYW0ge05vZGV9IHBhcmVudCB0aGUgcGFyZW50IG5vZGUgdG8gaW5zZXJ0IGBub2RlYCBpbnRvXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgdGhlIG5vZGUgdG8gaW5zZXJ0XG4gKiBAcGFyYW0ge05vZGU9fSBjaGlsZCB0aGUgbm9kZSB0aGF0IHNob3VsZCBiZWNvbWUgdGhlIGBuZXh0U2libGluZ2Agb2YgYG5vZGVgXG4gKiBAcmV0dXJucyB7Tm9kZX1cbiAqIEB0aHJvd3MgRE9NRXhjZXB0aW9uIGZvciBzZXZlcmFsIG5vZGUgY29tYmluYXRpb25zIHRoYXQgd291bGQgY3JlYXRlIGEgRE9NIHRoYXQgaXMgbm90IHdlbGwtZm9ybWVkLlxuICogQHRocm93cyBET01FeGNlcHRpb24gaWYgYGNoaWxkYCBpcyBwcm92aWRlZCBidXQgaXMgbm90IGEgY2hpbGQgb2YgYHBhcmVudGAuXG4gKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1ub2RlLWVuc3VyZS1wcmUtaW5zZXJ0aW9uLXZhbGlkaXR5XG4gKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1ub2RlLXJlcGxhY2VcbiAqL1xuZnVuY3Rpb24gYXNzZXJ0UHJlSW5zZXJ0aW9uVmFsaWRpdHkxdG81KHBhcmVudCwgbm9kZSwgY2hpbGQpIHtcblx0Ly8gMS4gSWYgYHBhcmVudGAgaXMgbm90IGEgRG9jdW1lbnQsIERvY3VtZW50RnJhZ21lbnQsIG9yIEVsZW1lbnQgbm9kZSwgdGhlbiB0aHJvdyBhIFwiSGllcmFyY2h5UmVxdWVzdEVycm9yXCIgRE9NRXhjZXB0aW9uLlxuXHRpZiAoIWhhc1ZhbGlkUGFyZW50Tm9kZVR5cGUocGFyZW50KSkge1xuXHRcdHRocm93IG5ldyBET01FeGNlcHRpb24oSElFUkFSQ0hZX1JFUVVFU1RfRVJSLCAnVW5leHBlY3RlZCBwYXJlbnQgbm9kZSB0eXBlICcgKyBwYXJlbnQubm9kZVR5cGUpO1xuXHR9XG5cdC8vIDIuIElmIGBub2RlYCBpcyBhIGhvc3QtaW5jbHVkaW5nIGluY2x1c2l2ZSBhbmNlc3RvciBvZiBgcGFyZW50YCwgdGhlbiB0aHJvdyBhIFwiSGllcmFyY2h5UmVxdWVzdEVycm9yXCIgRE9NRXhjZXB0aW9uLlxuXHQvLyBub3QgaW1wbGVtZW50ZWQhXG5cdC8vIDMuIElmIGBjaGlsZGAgaXMgbm9uLW51bGwgYW5kIGl0cyBwYXJlbnQgaXMgbm90IGBwYXJlbnRgLCB0aGVuIHRocm93IGEgXCJOb3RGb3VuZEVycm9yXCIgRE9NRXhjZXB0aW9uLlxuXHRpZiAoY2hpbGQgJiYgY2hpbGQucGFyZW50Tm9kZSAhPT0gcGFyZW50KSB7XG5cdFx0dGhyb3cgbmV3IERPTUV4Y2VwdGlvbihOT1RfRk9VTkRfRVJSLCAnY2hpbGQgbm90IGluIHBhcmVudCcpO1xuXHR9XG5cdGlmIChcblx0XHQvLyA0LiBJZiBgbm9kZWAgaXMgbm90IGEgRG9jdW1lbnRGcmFnbWVudCwgRG9jdW1lbnRUeXBlLCBFbGVtZW50LCBvciBDaGFyYWN0ZXJEYXRhIG5vZGUsIHRoZW4gdGhyb3cgYSBcIkhpZXJhcmNoeVJlcXVlc3RFcnJvclwiIERPTUV4Y2VwdGlvbi5cblx0XHQhaGFzSW5zZXJ0YWJsZU5vZGVUeXBlKG5vZGUpIHx8XG5cdFx0Ly8gNS4gSWYgZWl0aGVyIGBub2RlYCBpcyBhIFRleHQgbm9kZSBhbmQgYHBhcmVudGAgaXMgYSBkb2N1bWVudCxcblx0XHQvLyB0aGUgc2F4IHBhcnNlciBjdXJyZW50bHkgYWRkcyB0b3AgbGV2ZWwgdGV4dCBub2RlcywgdGhpcyB3aWxsIGJlIGZpeGVkIGluIDAuOS4wXG5cdFx0Ly8gfHwgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFICYmIHBhcmVudC5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9OT0RFKVxuXHRcdC8vIG9yIGBub2RlYCBpcyBhIGRvY3R5cGUgYW5kIGBwYXJlbnRgIGlzIG5vdCBhIGRvY3VtZW50LCB0aGVuIHRocm93IGEgXCJIaWVyYXJjaHlSZXF1ZXN0RXJyb3JcIiBET01FeGNlcHRpb24uXG5cdFx0KGlzRG9jVHlwZU5vZGUobm9kZSkgJiYgcGFyZW50Lm5vZGVUeXBlICE9PSBOb2RlLkRPQ1VNRU5UX05PREUpXG5cdCkge1xuXHRcdHRocm93IG5ldyBET01FeGNlcHRpb24oXG5cdFx0XHRISUVSQVJDSFlfUkVRVUVTVF9FUlIsXG5cdFx0XHQnVW5leHBlY3RlZCBub2RlIHR5cGUgJyArIG5vZGUubm9kZVR5cGUgKyAnIGZvciBwYXJlbnQgbm9kZSB0eXBlICcgKyBwYXJlbnQubm9kZVR5cGVcblx0XHQpO1xuXHR9XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqIFN0ZXAgNiBvZiB0aGUgY2hlY2tzIGJlZm9yZSBpbnNlcnRpbmcgYW5kIGJlZm9yZSByZXBsYWNpbmcgYSBjaGlsZCBhcmUgZGlmZmVyZW50LlxuICpcbiAqIEBwYXJhbSB7RG9jdW1lbnR9IHBhcmVudCB0aGUgcGFyZW50IG5vZGUgdG8gaW5zZXJ0IGBub2RlYCBpbnRvXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgdGhlIG5vZGUgdG8gaW5zZXJ0XG4gKiBAcGFyYW0ge05vZGUgfCB1bmRlZmluZWR9IGNoaWxkIHRoZSBub2RlIHRoYXQgc2hvdWxkIGJlY29tZSB0aGUgYG5leHRTaWJsaW5nYCBvZiBgbm9kZWBcbiAqIEByZXR1cm5zIHtOb2RlfVxuICogQHRocm93cyBET01FeGNlcHRpb24gZm9yIHNldmVyYWwgbm9kZSBjb21iaW5hdGlvbnMgdGhhdCB3b3VsZCBjcmVhdGUgYSBET00gdGhhdCBpcyBub3Qgd2VsbC1mb3JtZWQuXG4gKiBAdGhyb3dzIERPTUV4Y2VwdGlvbiBpZiBgY2hpbGRgIGlzIHByb3ZpZGVkIGJ1dCBpcyBub3QgYSBjaGlsZCBvZiBgcGFyZW50YC5cbiAqIEBzZWUgaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LW5vZGUtZW5zdXJlLXByZS1pbnNlcnRpb24tdmFsaWRpdHlcbiAqIEBzZWUgaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LW5vZGUtcmVwbGFjZVxuICovXG5mdW5jdGlvbiBhc3NlcnRQcmVJbnNlcnRpb25WYWxpZGl0eUluRG9jdW1lbnQocGFyZW50LCBub2RlLCBjaGlsZCkge1xuXHR2YXIgcGFyZW50Q2hpbGROb2RlcyA9IHBhcmVudC5jaGlsZE5vZGVzIHx8IFtdO1xuXHR2YXIgbm9kZUNoaWxkTm9kZXMgPSBub2RlLmNoaWxkTm9kZXMgfHwgW107XG5cblx0Ly8gRG9jdW1lbnRGcmFnbWVudFxuXHRpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFKSB7XG5cdFx0dmFyIG5vZGVDaGlsZEVsZW1lbnRzID0gbm9kZUNoaWxkTm9kZXMuZmlsdGVyKGlzRWxlbWVudE5vZGUpO1xuXHRcdC8vIElmIG5vZGUgaGFzIG1vcmUgdGhhbiBvbmUgZWxlbWVudCBjaGlsZCBvciBoYXMgYSBUZXh0IG5vZGUgY2hpbGQuXG5cdFx0aWYgKG5vZGVDaGlsZEVsZW1lbnRzLmxlbmd0aCA+IDEgfHwgZmluZChub2RlQ2hpbGROb2RlcywgaXNUZXh0Tm9kZSkpIHtcblx0XHRcdHRocm93IG5ldyBET01FeGNlcHRpb24oSElFUkFSQ0hZX1JFUVVFU1RfRVJSLCAnTW9yZSB0aGFuIG9uZSBlbGVtZW50IG9yIHRleHQgaW4gZnJhZ21lbnQnKTtcblx0XHR9XG5cdFx0Ly8gT3RoZXJ3aXNlLCBpZiBgbm9kZWAgaGFzIG9uZSBlbGVtZW50IGNoaWxkIGFuZCBlaXRoZXIgYHBhcmVudGAgaGFzIGFuIGVsZW1lbnQgY2hpbGQsXG5cdFx0Ly8gYGNoaWxkYCBpcyBhIGRvY3R5cGUsIG9yIGBjaGlsZGAgaXMgbm9uLW51bGwgYW5kIGEgZG9jdHlwZSBpcyBmb2xsb3dpbmcgYGNoaWxkYC5cblx0XHRpZiAobm9kZUNoaWxkRWxlbWVudHMubGVuZ3RoID09PSAxICYmICFpc0VsZW1lbnRJbnNlcnRpb25Qb3NzaWJsZShwYXJlbnQsIGNoaWxkKSkge1xuXHRcdFx0dGhyb3cgbmV3IERPTUV4Y2VwdGlvbihISUVSQVJDSFlfUkVRVUVTVF9FUlIsICdFbGVtZW50IGluIGZyYWdtZW50IGNhbiBub3QgYmUgaW5zZXJ0ZWQgYmVmb3JlIGRvY3R5cGUnKTtcblx0XHR9XG5cdH1cblx0Ly8gRWxlbWVudFxuXHRpZiAoaXNFbGVtZW50Tm9kZShub2RlKSkge1xuXHRcdC8vIGBwYXJlbnRgIGhhcyBhbiBlbGVtZW50IGNoaWxkLCBgY2hpbGRgIGlzIGEgZG9jdHlwZSxcblx0XHQvLyBvciBgY2hpbGRgIGlzIG5vbi1udWxsIGFuZCBhIGRvY3R5cGUgaXMgZm9sbG93aW5nIGBjaGlsZGAuXG5cdFx0aWYgKCFpc0VsZW1lbnRJbnNlcnRpb25Qb3NzaWJsZShwYXJlbnQsIGNoaWxkKSkge1xuXHRcdFx0dGhyb3cgbmV3IERPTUV4Y2VwdGlvbihISUVSQVJDSFlfUkVRVUVTVF9FUlIsICdPbmx5IG9uZSBlbGVtZW50IGNhbiBiZSBhZGRlZCBhbmQgb25seSBhZnRlciBkb2N0eXBlJyk7XG5cdFx0fVxuXHR9XG5cdC8vIERvY3VtZW50VHlwZVxuXHRpZiAoaXNEb2NUeXBlTm9kZShub2RlKSkge1xuXHRcdC8vIGBwYXJlbnRgIGhhcyBhIGRvY3R5cGUgY2hpbGQsXG5cdFx0aWYgKGZpbmQocGFyZW50Q2hpbGROb2RlcywgaXNEb2NUeXBlTm9kZSkpIHtcblx0XHRcdHRocm93IG5ldyBET01FeGNlcHRpb24oSElFUkFSQ0hZX1JFUVVFU1RfRVJSLCAnT25seSBvbmUgZG9jdHlwZSBpcyBhbGxvd2VkJyk7XG5cdFx0fVxuXHRcdHZhciBwYXJlbnRFbGVtZW50Q2hpbGQgPSBmaW5kKHBhcmVudENoaWxkTm9kZXMsIGlzRWxlbWVudE5vZGUpO1xuXHRcdC8vIGBjaGlsZGAgaXMgbm9uLW51bGwgYW5kIGFuIGVsZW1lbnQgaXMgcHJlY2VkaW5nIGBjaGlsZGAsXG5cdFx0aWYgKGNoaWxkICYmIHBhcmVudENoaWxkTm9kZXMuaW5kZXhPZihwYXJlbnRFbGVtZW50Q2hpbGQpIDwgcGFyZW50Q2hpbGROb2Rlcy5pbmRleE9mKGNoaWxkKSkge1xuXHRcdFx0dGhyb3cgbmV3IERPTUV4Y2VwdGlvbihISUVSQVJDSFlfUkVRVUVTVF9FUlIsICdEb2N0eXBlIGNhbiBvbmx5IGJlIGluc2VydGVkIGJlZm9yZSBhbiBlbGVtZW50Jyk7XG5cdFx0fVxuXHRcdC8vIG9yIGBjaGlsZGAgaXMgbnVsbCBhbmQgYHBhcmVudGAgaGFzIGFuIGVsZW1lbnQgY2hpbGQuXG5cdFx0aWYgKCFjaGlsZCAmJiBwYXJlbnRFbGVtZW50Q2hpbGQpIHtcblx0XHRcdHRocm93IG5ldyBET01FeGNlcHRpb24oSElFUkFSQ0hZX1JFUVVFU1RfRVJSLCAnRG9jdHlwZSBjYW4gbm90IGJlIGFwcGVuZGVkIHNpbmNlIGVsZW1lbnQgaXMgcHJlc2VudCcpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKiBTdGVwIDYgb2YgdGhlIGNoZWNrcyBiZWZvcmUgaW5zZXJ0aW5nIGFuZCBiZWZvcmUgcmVwbGFjaW5nIGEgY2hpbGQgYXJlIGRpZmZlcmVudC5cbiAqXG4gKiBAcGFyYW0ge0RvY3VtZW50fSBwYXJlbnQgdGhlIHBhcmVudCBub2RlIHRvIGluc2VydCBgbm9kZWAgaW50b1xuICogQHBhcmFtIHtOb2RlfSBub2RlIHRoZSBub2RlIHRvIGluc2VydFxuICogQHBhcmFtIHtOb2RlIHwgdW5kZWZpbmVkfSBjaGlsZCB0aGUgbm9kZSB0aGF0IHNob3VsZCBiZWNvbWUgdGhlIGBuZXh0U2libGluZ2Agb2YgYG5vZGVgXG4gKiBAcmV0dXJucyB7Tm9kZX1cbiAqIEB0aHJvd3MgRE9NRXhjZXB0aW9uIGZvciBzZXZlcmFsIG5vZGUgY29tYmluYXRpb25zIHRoYXQgd291bGQgY3JlYXRlIGEgRE9NIHRoYXQgaXMgbm90IHdlbGwtZm9ybWVkLlxuICogQHRocm93cyBET01FeGNlcHRpb24gaWYgYGNoaWxkYCBpcyBwcm92aWRlZCBidXQgaXMgbm90IGEgY2hpbGQgb2YgYHBhcmVudGAuXG4gKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1ub2RlLWVuc3VyZS1wcmUtaW5zZXJ0aW9uLXZhbGlkaXR5XG4gKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1ub2RlLXJlcGxhY2VcbiAqL1xuZnVuY3Rpb24gYXNzZXJ0UHJlUmVwbGFjZW1lbnRWYWxpZGl0eUluRG9jdW1lbnQocGFyZW50LCBub2RlLCBjaGlsZCkge1xuXHR2YXIgcGFyZW50Q2hpbGROb2RlcyA9IHBhcmVudC5jaGlsZE5vZGVzIHx8IFtdO1xuXHR2YXIgbm9kZUNoaWxkTm9kZXMgPSBub2RlLmNoaWxkTm9kZXMgfHwgW107XG5cblx0Ly8gRG9jdW1lbnRGcmFnbWVudFxuXHRpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFKSB7XG5cdFx0dmFyIG5vZGVDaGlsZEVsZW1lbnRzID0gbm9kZUNoaWxkTm9kZXMuZmlsdGVyKGlzRWxlbWVudE5vZGUpO1xuXHRcdC8vIElmIGBub2RlYCBoYXMgbW9yZSB0aGFuIG9uZSBlbGVtZW50IGNoaWxkIG9yIGhhcyBhIFRleHQgbm9kZSBjaGlsZC5cblx0XHRpZiAobm9kZUNoaWxkRWxlbWVudHMubGVuZ3RoID4gMSB8fCBmaW5kKG5vZGVDaGlsZE5vZGVzLCBpc1RleHROb2RlKSkge1xuXHRcdFx0dGhyb3cgbmV3IERPTUV4Y2VwdGlvbihISUVSQVJDSFlfUkVRVUVTVF9FUlIsICdNb3JlIHRoYW4gb25lIGVsZW1lbnQgb3IgdGV4dCBpbiBmcmFnbWVudCcpO1xuXHRcdH1cblx0XHQvLyBPdGhlcndpc2UsIGlmIGBub2RlYCBoYXMgb25lIGVsZW1lbnQgY2hpbGQgYW5kIGVpdGhlciBgcGFyZW50YCBoYXMgYW4gZWxlbWVudCBjaGlsZCB0aGF0IGlzIG5vdCBgY2hpbGRgIG9yIGEgZG9jdHlwZSBpcyBmb2xsb3dpbmcgYGNoaWxkYC5cblx0XHRpZiAobm9kZUNoaWxkRWxlbWVudHMubGVuZ3RoID09PSAxICYmICFpc0VsZW1lbnRSZXBsYWNlbWVudFBvc3NpYmxlKHBhcmVudCwgY2hpbGQpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKEhJRVJBUkNIWV9SRVFVRVNUX0VSUiwgJ0VsZW1lbnQgaW4gZnJhZ21lbnQgY2FuIG5vdCBiZSBpbnNlcnRlZCBiZWZvcmUgZG9jdHlwZScpO1xuXHRcdH1cblx0fVxuXHQvLyBFbGVtZW50XG5cdGlmIChpc0VsZW1lbnROb2RlKG5vZGUpKSB7XG5cdFx0Ly8gYHBhcmVudGAgaGFzIGFuIGVsZW1lbnQgY2hpbGQgdGhhdCBpcyBub3QgYGNoaWxkYCBvciBhIGRvY3R5cGUgaXMgZm9sbG93aW5nIGBjaGlsZGAuXG5cdFx0aWYgKCFpc0VsZW1lbnRSZXBsYWNlbWVudFBvc3NpYmxlKHBhcmVudCwgY2hpbGQpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKEhJRVJBUkNIWV9SRVFVRVNUX0VSUiwgJ09ubHkgb25lIGVsZW1lbnQgY2FuIGJlIGFkZGVkIGFuZCBvbmx5IGFmdGVyIGRvY3R5cGUnKTtcblx0XHR9XG5cdH1cblx0Ly8gRG9jdW1lbnRUeXBlXG5cdGlmIChpc0RvY1R5cGVOb2RlKG5vZGUpKSB7XG5cdFx0ZnVuY3Rpb24gaGFzRG9jdHlwZUNoaWxkVGhhdElzTm90Q2hpbGQobm9kZSkge1xuXHRcdFx0cmV0dXJuIGlzRG9jVHlwZU5vZGUobm9kZSkgJiYgbm9kZSAhPT0gY2hpbGQ7XG5cdFx0fVxuXG5cdFx0Ly8gYHBhcmVudGAgaGFzIGEgZG9jdHlwZSBjaGlsZCB0aGF0IGlzIG5vdCBgY2hpbGRgLFxuXHRcdGlmIChmaW5kKHBhcmVudENoaWxkTm9kZXMsIGhhc0RvY3R5cGVDaGlsZFRoYXRJc05vdENoaWxkKSkge1xuXHRcdFx0dGhyb3cgbmV3IERPTUV4Y2VwdGlvbihISUVSQVJDSFlfUkVRVUVTVF9FUlIsICdPbmx5IG9uZSBkb2N0eXBlIGlzIGFsbG93ZWQnKTtcblx0XHR9XG5cdFx0dmFyIHBhcmVudEVsZW1lbnRDaGlsZCA9IGZpbmQocGFyZW50Q2hpbGROb2RlcywgaXNFbGVtZW50Tm9kZSk7XG5cdFx0Ly8gb3IgYW4gZWxlbWVudCBpcyBwcmVjZWRpbmcgYGNoaWxkYC5cblx0XHRpZiAoY2hpbGQgJiYgcGFyZW50Q2hpbGROb2Rlcy5pbmRleE9mKHBhcmVudEVsZW1lbnRDaGlsZCkgPCBwYXJlbnRDaGlsZE5vZGVzLmluZGV4T2YoY2hpbGQpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKEhJRVJBUkNIWV9SRVFVRVNUX0VSUiwgJ0RvY3R5cGUgY2FuIG9ubHkgYmUgaW5zZXJ0ZWQgYmVmb3JlIGFuIGVsZW1lbnQnKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtOb2RlfSBwYXJlbnQgdGhlIHBhcmVudCBub2RlIHRvIGluc2VydCBgbm9kZWAgaW50b1xuICogQHBhcmFtIHtOb2RlfSBub2RlIHRoZSBub2RlIHRvIGluc2VydFxuICogQHBhcmFtIHtOb2RlPX0gY2hpbGQgdGhlIG5vZGUgdGhhdCBzaG91bGQgYmVjb21lIHRoZSBgbmV4dFNpYmxpbmdgIG9mIGBub2RlYFxuICogQHJldHVybnMge05vZGV9XG4gKiBAdGhyb3dzIERPTUV4Y2VwdGlvbiBmb3Igc2V2ZXJhbCBub2RlIGNvbWJpbmF0aW9ucyB0aGF0IHdvdWxkIGNyZWF0ZSBhIERPTSB0aGF0IGlzIG5vdCB3ZWxsLWZvcm1lZC5cbiAqIEB0aHJvd3MgRE9NRXhjZXB0aW9uIGlmIGBjaGlsZGAgaXMgcHJvdmlkZWQgYnV0IGlzIG5vdCBhIGNoaWxkIG9mIGBwYXJlbnRgLlxuICogQHNlZSBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2NvbmNlcHQtbm9kZS1lbnN1cmUtcHJlLWluc2VydGlvbi12YWxpZGl0eVxuICovXG5mdW5jdGlvbiBfaW5zZXJ0QmVmb3JlKHBhcmVudCwgbm9kZSwgY2hpbGQsIF9pbkRvY3VtZW50QXNzZXJ0aW9uKSB7XG5cdC8vIFRvIGVuc3VyZSBwcmUtaW5zZXJ0aW9uIHZhbGlkaXR5IG9mIGEgbm9kZSBpbnRvIGEgcGFyZW50IGJlZm9yZSBhIGNoaWxkLCBydW4gdGhlc2Ugc3RlcHM6XG5cdGFzc2VydFByZUluc2VydGlvblZhbGlkaXR5MXRvNShwYXJlbnQsIG5vZGUsIGNoaWxkKTtcblxuXHQvLyBJZiBwYXJlbnQgaXMgYSBkb2N1bWVudCwgYW5kIGFueSBvZiB0aGUgc3RhdGVtZW50cyBiZWxvdywgc3dpdGNoZWQgb24gdGhlIGludGVyZmFjZSBub2RlIGltcGxlbWVudHMsXG5cdC8vIGFyZSB0cnVlLCB0aGVuIHRocm93IGEgXCJIaWVyYXJjaHlSZXF1ZXN0RXJyb3JcIiBET01FeGNlcHRpb24uXG5cdGlmIChwYXJlbnQubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfTk9ERSkge1xuXHRcdChfaW5Eb2N1bWVudEFzc2VydGlvbiB8fCBhc3NlcnRQcmVJbnNlcnRpb25WYWxpZGl0eUluRG9jdW1lbnQpKHBhcmVudCwgbm9kZSwgY2hpbGQpO1xuXHR9XG5cblx0dmFyIGNwID0gbm9kZS5wYXJlbnROb2RlO1xuXHRpZihjcCl7XG5cdFx0Y3AucmVtb3ZlQ2hpbGQobm9kZSk7Ly9yZW1vdmUgYW5kIHVwZGF0ZVxuXHR9XG5cdGlmKG5vZGUubm9kZVR5cGUgPT09IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUpe1xuXHRcdHZhciBuZXdGaXJzdCA9IG5vZGUuZmlyc3RDaGlsZDtcblx0XHRpZiAobmV3Rmlyc3QgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIG5vZGU7XG5cdFx0fVxuXHRcdHZhciBuZXdMYXN0ID0gbm9kZS5sYXN0Q2hpbGQ7XG5cdH1lbHNle1xuXHRcdG5ld0ZpcnN0ID0gbmV3TGFzdCA9IG5vZGU7XG5cdH1cblx0dmFyIHByZSA9IGNoaWxkID8gY2hpbGQucHJldmlvdXNTaWJsaW5nIDogcGFyZW50Lmxhc3RDaGlsZDtcblxuXHRuZXdGaXJzdC5wcmV2aW91c1NpYmxpbmcgPSBwcmU7XG5cdG5ld0xhc3QubmV4dFNpYmxpbmcgPSBjaGlsZDtcblxuXG5cdGlmKHByZSl7XG5cdFx0cHJlLm5leHRTaWJsaW5nID0gbmV3Rmlyc3Q7XG5cdH1lbHNle1xuXHRcdHBhcmVudC5maXJzdENoaWxkID0gbmV3Rmlyc3Q7XG5cdH1cblx0aWYoY2hpbGQgPT0gbnVsbCl7XG5cdFx0cGFyZW50Lmxhc3RDaGlsZCA9IG5ld0xhc3Q7XG5cdH1lbHNle1xuXHRcdGNoaWxkLnByZXZpb3VzU2libGluZyA9IG5ld0xhc3Q7XG5cdH1cblx0ZG97XG5cdFx0bmV3Rmlyc3QucGFyZW50Tm9kZSA9IHBhcmVudDtcblx0fXdoaWxlKG5ld0ZpcnN0ICE9PSBuZXdMYXN0ICYmIChuZXdGaXJzdD0gbmV3Rmlyc3QubmV4dFNpYmxpbmcpKVxuXHRfb25VcGRhdGVDaGlsZChwYXJlbnQub3duZXJEb2N1bWVudHx8cGFyZW50LCBwYXJlbnQpO1xuXHQvL2NvbnNvbGUubG9nKHBhcmVudC5sYXN0Q2hpbGQubmV4dFNpYmxpbmcgPT0gbnVsbClcblx0aWYgKG5vZGUubm9kZVR5cGUgPT0gRE9DVU1FTlRfRlJBR01FTlRfTk9ERSkge1xuXHRcdG5vZGUuZmlyc3RDaGlsZCA9IG5vZGUubGFzdENoaWxkID0gbnVsbDtcblx0fVxuXHRyZXR1cm4gbm9kZTtcbn1cblxuLyoqXG4gKiBBcHBlbmRzIGBuZXdDaGlsZGAgdG8gYHBhcmVudE5vZGVgLlxuICogSWYgYG5ld0NoaWxkYCBpcyBhbHJlYWR5IGNvbm5lY3RlZCB0byBhIGBwYXJlbnROb2RlYCBpdCBpcyBmaXJzdCByZW1vdmVkIGZyb20gaXQuXG4gKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20veG1sZG9tL3htbGRvbS9pc3N1ZXMvMTM1XG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS94bWxkb20veG1sZG9tL2lzc3Vlcy8xNDVcbiAqIEBwYXJhbSB7Tm9kZX0gcGFyZW50Tm9kZVxuICogQHBhcmFtIHtOb2RlfSBuZXdDaGlsZFxuICogQHJldHVybnMge05vZGV9XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBfYXBwZW5kU2luZ2xlQ2hpbGQgKHBhcmVudE5vZGUsIG5ld0NoaWxkKSB7XG5cdGlmIChuZXdDaGlsZC5wYXJlbnROb2RlKSB7XG5cdFx0bmV3Q2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuZXdDaGlsZCk7XG5cdH1cblx0bmV3Q2hpbGQucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG5cdG5ld0NoaWxkLnByZXZpb3VzU2libGluZyA9IHBhcmVudE5vZGUubGFzdENoaWxkO1xuXHRuZXdDaGlsZC5uZXh0U2libGluZyA9IG51bGw7XG5cdGlmIChuZXdDaGlsZC5wcmV2aW91c1NpYmxpbmcpIHtcblx0XHRuZXdDaGlsZC5wcmV2aW91c1NpYmxpbmcubmV4dFNpYmxpbmcgPSBuZXdDaGlsZDtcblx0fSBlbHNlIHtcblx0XHRwYXJlbnROb2RlLmZpcnN0Q2hpbGQgPSBuZXdDaGlsZDtcblx0fVxuXHRwYXJlbnROb2RlLmxhc3RDaGlsZCA9IG5ld0NoaWxkO1xuXHRfb25VcGRhdGVDaGlsZChwYXJlbnROb2RlLm93bmVyRG9jdW1lbnQsIHBhcmVudE5vZGUsIG5ld0NoaWxkKTtcblx0cmV0dXJuIG5ld0NoaWxkO1xufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUgPSB7XG5cdC8vaW1wbGVtZW50YXRpb24gOiBudWxsLFxuXHRub2RlTmFtZSA6ICAnI2RvY3VtZW50Jyxcblx0bm9kZVR5cGUgOiAgRE9DVU1FTlRfTk9ERSxcblx0LyoqXG5cdCAqIFRoZSBEb2N1bWVudFR5cGUgbm9kZSBvZiB0aGUgZG9jdW1lbnQuXG5cdCAqXG5cdCAqIEByZWFkb25seVxuXHQgKiBAdHlwZSBEb2N1bWVudFR5cGVcblx0ICovXG5cdGRvY3R5cGUgOiAgbnVsbCxcblx0ZG9jdW1lbnRFbGVtZW50IDogIG51bGwsXG5cdF9pbmMgOiAxLFxuXG5cdGluc2VydEJlZm9yZSA6ICBmdW5jdGlvbihuZXdDaGlsZCwgcmVmQ2hpbGQpey8vcmFpc2VzXG5cdFx0aWYobmV3Q2hpbGQubm9kZVR5cGUgPT0gRE9DVU1FTlRfRlJBR01FTlRfTk9ERSl7XG5cdFx0XHR2YXIgY2hpbGQgPSBuZXdDaGlsZC5maXJzdENoaWxkO1xuXHRcdFx0d2hpbGUoY2hpbGQpe1xuXHRcdFx0XHR2YXIgbmV4dCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuXHRcdFx0XHR0aGlzLmluc2VydEJlZm9yZShjaGlsZCxyZWZDaGlsZCk7XG5cdFx0XHRcdGNoaWxkID0gbmV4dDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBuZXdDaGlsZDtcblx0XHR9XG5cdFx0X2luc2VydEJlZm9yZSh0aGlzLCBuZXdDaGlsZCwgcmVmQ2hpbGQpO1xuXHRcdG5ld0NoaWxkLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuXHRcdGlmICh0aGlzLmRvY3VtZW50RWxlbWVudCA9PT0gbnVsbCAmJiBuZXdDaGlsZC5ub2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFKSB7XG5cdFx0XHR0aGlzLmRvY3VtZW50RWxlbWVudCA9IG5ld0NoaWxkO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXdDaGlsZDtcblx0fSxcblx0cmVtb3ZlQ2hpbGQgOiAgZnVuY3Rpb24ob2xkQ2hpbGQpe1xuXHRcdGlmKHRoaXMuZG9jdW1lbnRFbGVtZW50ID09IG9sZENoaWxkKXtcblx0XHRcdHRoaXMuZG9jdW1lbnRFbGVtZW50ID0gbnVsbDtcblx0XHR9XG5cdFx0cmV0dXJuIF9yZW1vdmVDaGlsZCh0aGlzLG9sZENoaWxkKTtcblx0fSxcblx0cmVwbGFjZUNoaWxkOiBmdW5jdGlvbiAobmV3Q2hpbGQsIG9sZENoaWxkKSB7XG5cdFx0Ly9yYWlzZXNcblx0XHRfaW5zZXJ0QmVmb3JlKHRoaXMsIG5ld0NoaWxkLCBvbGRDaGlsZCwgYXNzZXJ0UHJlUmVwbGFjZW1lbnRWYWxpZGl0eUluRG9jdW1lbnQpO1xuXHRcdG5ld0NoaWxkLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuXHRcdGlmIChvbGRDaGlsZCkge1xuXHRcdFx0dGhpcy5yZW1vdmVDaGlsZChvbGRDaGlsZCk7XG5cdFx0fVxuXHRcdGlmIChpc0VsZW1lbnROb2RlKG5ld0NoaWxkKSkge1xuXHRcdFx0dGhpcy5kb2N1bWVudEVsZW1lbnQgPSBuZXdDaGlsZDtcblx0XHR9XG5cdH0sXG5cdC8vIEludHJvZHVjZWQgaW4gRE9NIExldmVsIDI6XG5cdGltcG9ydE5vZGUgOiBmdW5jdGlvbihpbXBvcnRlZE5vZGUsZGVlcCl7XG5cdFx0cmV0dXJuIGltcG9ydE5vZGUodGhpcyxpbXBvcnRlZE5vZGUsZGVlcCk7XG5cdH0sXG5cdC8vIEludHJvZHVjZWQgaW4gRE9NIExldmVsIDI6XG5cdGdldEVsZW1lbnRCeUlkIDpcdGZ1bmN0aW9uKGlkKXtcblx0XHR2YXIgcnR2ID0gbnVsbDtcblx0XHRfdmlzaXROb2RlKHRoaXMuZG9jdW1lbnRFbGVtZW50LGZ1bmN0aW9uKG5vZGUpe1xuXHRcdFx0aWYobm9kZS5ub2RlVHlwZSA9PSBFTEVNRU5UX05PREUpe1xuXHRcdFx0XHRpZihub2RlLmdldEF0dHJpYnV0ZSgnaWQnKSA9PSBpZCl7XG5cdFx0XHRcdFx0cnR2ID0gbm9kZTtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0cmV0dXJuIHJ0djtcblx0fSxcblxuXHQvKipcblx0ICogVGhlIGBnZXRFbGVtZW50c0J5Q2xhc3NOYW1lYCBtZXRob2Qgb2YgYERvY3VtZW50YCBpbnRlcmZhY2UgcmV0dXJucyBhbiBhcnJheS1saWtlIG9iamVjdFxuXHQgKiBvZiBhbGwgY2hpbGQgZWxlbWVudHMgd2hpY2ggaGF2ZSAqKmFsbCoqIG9mIHRoZSBnaXZlbiBjbGFzcyBuYW1lKHMpLlxuXHQgKlxuXHQgKiBSZXR1cm5zIGFuIGVtcHR5IGxpc3QgaWYgYGNsYXNzZU5hbWVzYCBpcyBhbiBlbXB0eSBzdHJpbmcgb3Igb25seSBjb250YWlucyBIVE1MIHdoaXRlIHNwYWNlIGNoYXJhY3RlcnMuXG5cdCAqXG5cdCAqXG5cdCAqIFdhcm5pbmc6IFRoaXMgaXMgYSBsaXZlIExpdmVOb2RlTGlzdC5cblx0ICogQ2hhbmdlcyBpbiB0aGUgRE9NIHdpbGwgcmVmbGVjdCBpbiB0aGUgYXJyYXkgYXMgdGhlIGNoYW5nZXMgb2NjdXIuXG5cdCAqIElmIGFuIGVsZW1lbnQgc2VsZWN0ZWQgYnkgdGhpcyBhcnJheSBubyBsb25nZXIgcXVhbGlmaWVzIGZvciB0aGUgc2VsZWN0b3IsXG5cdCAqIGl0IHdpbGwgYXV0b21hdGljYWxseSBiZSByZW1vdmVkLiBCZSBhd2FyZSBvZiB0aGlzIGZvciBpdGVyYXRpb24gcHVycG9zZXMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVzIGlzIGEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgY2xhc3MgbmFtZShzKSB0byBtYXRjaDsgbXVsdGlwbGUgY2xhc3MgbmFtZXMgYXJlIHNlcGFyYXRlZCBieSAoQVNDSUktKXdoaXRlc3BhY2Vcblx0ICpcblx0ICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRG9jdW1lbnQvZ2V0RWxlbWVudHNCeUNsYXNzTmFtZVxuXHQgKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1nZXRlbGVtZW50c2J5Y2xhc3NuYW1lXG5cdCAqL1xuXHRnZXRFbGVtZW50c0J5Q2xhc3NOYW1lOiBmdW5jdGlvbihjbGFzc05hbWVzKSB7XG5cdFx0dmFyIGNsYXNzTmFtZXNTZXQgPSB0b09yZGVyZWRTZXQoY2xhc3NOYW1lcylcblx0XHRyZXR1cm4gbmV3IExpdmVOb2RlTGlzdCh0aGlzLCBmdW5jdGlvbihiYXNlKSB7XG5cdFx0XHR2YXIgbHMgPSBbXTtcblx0XHRcdGlmIChjbGFzc05hbWVzU2V0Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0X3Zpc2l0Tm9kZShiYXNlLmRvY3VtZW50RWxlbWVudCwgZnVuY3Rpb24obm9kZSkge1xuXHRcdFx0XHRcdGlmKG5vZGUgIT09IGJhc2UgJiYgbm9kZS5ub2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFKSB7XG5cdFx0XHRcdFx0XHR2YXIgbm9kZUNsYXNzTmFtZXMgPSBub2RlLmdldEF0dHJpYnV0ZSgnY2xhc3MnKVxuXHRcdFx0XHRcdFx0Ly8gY2FuIGJlIG51bGwgaWYgdGhlIGF0dHJpYnV0ZSBkb2VzIG5vdCBleGlzdFxuXHRcdFx0XHRcdFx0aWYgKG5vZGVDbGFzc05hbWVzKSB7XG5cdFx0XHRcdFx0XHRcdC8vIGJlZm9yZSBzcGxpdHRpbmcgYW5kIGl0ZXJhdGluZyBqdXN0IGNvbXBhcmUgdGhlbSBmb3IgdGhlIG1vc3QgY29tbW9uIGNhc2Vcblx0XHRcdFx0XHRcdFx0dmFyIG1hdGNoZXMgPSBjbGFzc05hbWVzID09PSBub2RlQ2xhc3NOYW1lcztcblx0XHRcdFx0XHRcdFx0aWYgKCFtYXRjaGVzKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIG5vZGVDbGFzc05hbWVzU2V0ID0gdG9PcmRlcmVkU2V0KG5vZGVDbGFzc05hbWVzKVxuXHRcdFx0XHRcdFx0XHRcdG1hdGNoZXMgPSBjbGFzc05hbWVzU2V0LmV2ZXJ5KGFycmF5SW5jbHVkZXMobm9kZUNsYXNzTmFtZXNTZXQpKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmKG1hdGNoZXMpIHtcblx0XHRcdFx0XHRcdFx0XHRscy5wdXNoKG5vZGUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBscztcblx0XHR9KTtcblx0fSxcblxuXHQvL2RvY3VtZW50IGZhY3RvcnkgbWV0aG9kOlxuXHRjcmVhdGVFbGVtZW50IDpcdGZ1bmN0aW9uKHRhZ05hbWUpe1xuXHRcdHZhciBub2RlID0gbmV3IEVsZW1lbnQoKTtcblx0XHRub2RlLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuXHRcdG5vZGUubm9kZU5hbWUgPSB0YWdOYW1lO1xuXHRcdG5vZGUudGFnTmFtZSA9IHRhZ05hbWU7XG5cdFx0bm9kZS5sb2NhbE5hbWUgPSB0YWdOYW1lO1xuXHRcdG5vZGUuY2hpbGROb2RlcyA9IG5ldyBOb2RlTGlzdCgpO1xuXHRcdHZhciBhdHRyc1x0PSBub2RlLmF0dHJpYnV0ZXMgPSBuZXcgTmFtZWROb2RlTWFwKCk7XG5cdFx0YXR0cnMuX293bmVyRWxlbWVudCA9IG5vZGU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH0sXG5cdGNyZWF0ZURvY3VtZW50RnJhZ21lbnQgOlx0ZnVuY3Rpb24oKXtcblx0XHR2YXIgbm9kZSA9IG5ldyBEb2N1bWVudEZyYWdtZW50KCk7XG5cdFx0bm9kZS5vd25lckRvY3VtZW50ID0gdGhpcztcblx0XHRub2RlLmNoaWxkTm9kZXMgPSBuZXcgTm9kZUxpc3QoKTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fSxcblx0Y3JlYXRlVGV4dE5vZGUgOlx0ZnVuY3Rpb24oZGF0YSl7XG5cdFx0dmFyIG5vZGUgPSBuZXcgVGV4dCgpO1xuXHRcdG5vZGUub3duZXJEb2N1bWVudCA9IHRoaXM7XG5cdFx0bm9kZS5hcHBlbmREYXRhKGRhdGEpXG5cdFx0cmV0dXJuIG5vZGU7XG5cdH0sXG5cdGNyZWF0ZUNvbW1lbnQgOlx0ZnVuY3Rpb24oZGF0YSl7XG5cdFx0dmFyIG5vZGUgPSBuZXcgQ29tbWVudCgpO1xuXHRcdG5vZGUub3duZXJEb2N1bWVudCA9IHRoaXM7XG5cdFx0bm9kZS5hcHBlbmREYXRhKGRhdGEpXG5cdFx0cmV0dXJuIG5vZGU7XG5cdH0sXG5cdGNyZWF0ZUNEQVRBU2VjdGlvbiA6XHRmdW5jdGlvbihkYXRhKXtcblx0XHR2YXIgbm9kZSA9IG5ldyBDREFUQVNlY3Rpb24oKTtcblx0XHRub2RlLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuXHRcdG5vZGUuYXBwZW5kRGF0YShkYXRhKVxuXHRcdHJldHVybiBub2RlO1xuXHR9LFxuXHRjcmVhdGVQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24gOlx0ZnVuY3Rpb24odGFyZ2V0LGRhdGEpe1xuXHRcdHZhciBub2RlID0gbmV3IFByb2Nlc3NpbmdJbnN0cnVjdGlvbigpO1xuXHRcdG5vZGUub3duZXJEb2N1bWVudCA9IHRoaXM7XG5cdFx0bm9kZS50YWdOYW1lID0gbm9kZS5ub2RlTmFtZSA9IG5vZGUudGFyZ2V0ID0gdGFyZ2V0O1xuXHRcdG5vZGUubm9kZVZhbHVlID0gbm9kZS5kYXRhID0gZGF0YTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fSxcblx0Y3JlYXRlQXR0cmlidXRlIDpcdGZ1bmN0aW9uKG5hbWUpe1xuXHRcdHZhciBub2RlID0gbmV3IEF0dHIoKTtcblx0XHRub2RlLm93bmVyRG9jdW1lbnRcdD0gdGhpcztcblx0XHRub2RlLm5hbWUgPSBuYW1lO1xuXHRcdG5vZGUubm9kZU5hbWVcdD0gbmFtZTtcblx0XHRub2RlLmxvY2FsTmFtZSA9IG5hbWU7XG5cdFx0bm9kZS5zcGVjaWZpZWQgPSB0cnVlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9LFxuXHRjcmVhdGVFbnRpdHlSZWZlcmVuY2UgOlx0ZnVuY3Rpb24obmFtZSl7XG5cdFx0dmFyIG5vZGUgPSBuZXcgRW50aXR5UmVmZXJlbmNlKCk7XG5cdFx0bm9kZS5vd25lckRvY3VtZW50XHQ9IHRoaXM7XG5cdFx0bm9kZS5ub2RlTmFtZVx0PSBuYW1lO1xuXHRcdHJldHVybiBub2RlO1xuXHR9LFxuXHQvLyBJbnRyb2R1Y2VkIGluIERPTSBMZXZlbCAyOlxuXHRjcmVhdGVFbGVtZW50TlMgOlx0ZnVuY3Rpb24obmFtZXNwYWNlVVJJLHF1YWxpZmllZE5hbWUpe1xuXHRcdHZhciBub2RlID0gbmV3IEVsZW1lbnQoKTtcblx0XHR2YXIgcGwgPSBxdWFsaWZpZWROYW1lLnNwbGl0KCc6Jyk7XG5cdFx0dmFyIGF0dHJzXHQ9IG5vZGUuYXR0cmlidXRlcyA9IG5ldyBOYW1lZE5vZGVNYXAoKTtcblx0XHRub2RlLmNoaWxkTm9kZXMgPSBuZXcgTm9kZUxpc3QoKTtcblx0XHRub2RlLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuXHRcdG5vZGUubm9kZU5hbWUgPSBxdWFsaWZpZWROYW1lO1xuXHRcdG5vZGUudGFnTmFtZSA9IHF1YWxpZmllZE5hbWU7XG5cdFx0bm9kZS5uYW1lc3BhY2VVUkkgPSBuYW1lc3BhY2VVUkk7XG5cdFx0aWYocGwubGVuZ3RoID09IDIpe1xuXHRcdFx0bm9kZS5wcmVmaXggPSBwbFswXTtcblx0XHRcdG5vZGUubG9jYWxOYW1lID0gcGxbMV07XG5cdFx0fWVsc2V7XG5cdFx0XHQvL2VsLnByZWZpeCA9IG51bGw7XG5cdFx0XHRub2RlLmxvY2FsTmFtZSA9IHF1YWxpZmllZE5hbWU7XG5cdFx0fVxuXHRcdGF0dHJzLl9vd25lckVsZW1lbnQgPSBub2RlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9LFxuXHQvLyBJbnRyb2R1Y2VkIGluIERPTSBMZXZlbCAyOlxuXHRjcmVhdGVBdHRyaWJ1dGVOUyA6XHRmdW5jdGlvbihuYW1lc3BhY2VVUkkscXVhbGlmaWVkTmFtZSl7XG5cdFx0dmFyIG5vZGUgPSBuZXcgQXR0cigpO1xuXHRcdHZhciBwbCA9IHF1YWxpZmllZE5hbWUuc3BsaXQoJzonKTtcblx0XHRub2RlLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuXHRcdG5vZGUubm9kZU5hbWUgPSBxdWFsaWZpZWROYW1lO1xuXHRcdG5vZGUubmFtZSA9IHF1YWxpZmllZE5hbWU7XG5cdFx0bm9kZS5uYW1lc3BhY2VVUkkgPSBuYW1lc3BhY2VVUkk7XG5cdFx0bm9kZS5zcGVjaWZpZWQgPSB0cnVlO1xuXHRcdGlmKHBsLmxlbmd0aCA9PSAyKXtcblx0XHRcdG5vZGUucHJlZml4ID0gcGxbMF07XG5cdFx0XHRub2RlLmxvY2FsTmFtZSA9IHBsWzFdO1xuXHRcdH1lbHNle1xuXHRcdFx0Ly9lbC5wcmVmaXggPSBudWxsO1xuXHRcdFx0bm9kZS5sb2NhbE5hbWUgPSBxdWFsaWZpZWROYW1lO1xuXHRcdH1cblx0XHRyZXR1cm4gbm9kZTtcblx0fVxufTtcbl9leHRlbmRzKERvY3VtZW50LE5vZGUpO1xuXG5cbmZ1bmN0aW9uIEVsZW1lbnQoKSB7XG5cdHRoaXMuX25zTWFwID0ge307XG59O1xuRWxlbWVudC5wcm90b3R5cGUgPSB7XG5cdG5vZGVUeXBlIDogRUxFTUVOVF9OT0RFLFxuXHRoYXNBdHRyaWJ1dGUgOiBmdW5jdGlvbihuYW1lKXtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlKG5hbWUpIT1udWxsO1xuXHR9LFxuXHRnZXRBdHRyaWJ1dGUgOiBmdW5jdGlvbihuYW1lKXtcblx0XHR2YXIgYXR0ciA9IHRoaXMuZ2V0QXR0cmlidXRlTm9kZShuYW1lKTtcblx0XHRyZXR1cm4gYXR0ciAmJiBhdHRyLnZhbHVlIHx8ICcnO1xuXHR9LFxuXHRnZXRBdHRyaWJ1dGVOb2RlIDogZnVuY3Rpb24obmFtZSl7XG5cdFx0cmV0dXJuIHRoaXMuYXR0cmlidXRlcy5nZXROYW1lZEl0ZW0obmFtZSk7XG5cdH0sXG5cdHNldEF0dHJpYnV0ZSA6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKXtcblx0XHR2YXIgYXR0ciA9IHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0YXR0ci52YWx1ZSA9IGF0dHIubm9kZVZhbHVlID0gXCJcIiArIHZhbHVlO1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlTm9kZShhdHRyKVxuXHR9LFxuXHRyZW1vdmVBdHRyaWJ1dGUgOiBmdW5jdGlvbihuYW1lKXtcblx0XHR2YXIgYXR0ciA9IHRoaXMuZ2V0QXR0cmlidXRlTm9kZShuYW1lKVxuXHRcdGF0dHIgJiYgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOb2RlKGF0dHIpO1xuXHR9LFxuXG5cdC8vZm91ciByZWFsIG9wZWFydGlvbiBtZXRob2Rcblx0YXBwZW5kQ2hpbGQ6ZnVuY3Rpb24obmV3Q2hpbGQpe1xuXHRcdGlmKG5ld0NoaWxkLm5vZGVUeXBlID09PSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFKXtcblx0XHRcdHJldHVybiB0aGlzLmluc2VydEJlZm9yZShuZXdDaGlsZCxudWxsKTtcblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiBfYXBwZW5kU2luZ2xlQ2hpbGQodGhpcyxuZXdDaGlsZCk7XG5cdFx0fVxuXHR9LFxuXHRzZXRBdHRyaWJ1dGVOb2RlIDogZnVuY3Rpb24obmV3QXR0cil7XG5cdFx0cmV0dXJuIHRoaXMuYXR0cmlidXRlcy5zZXROYW1lZEl0ZW0obmV3QXR0cik7XG5cdH0sXG5cdHNldEF0dHJpYnV0ZU5vZGVOUyA6IGZ1bmN0aW9uKG5ld0F0dHIpe1xuXHRcdHJldHVybiB0aGlzLmF0dHJpYnV0ZXMuc2V0TmFtZWRJdGVtTlMobmV3QXR0cik7XG5cdH0sXG5cdHJlbW92ZUF0dHJpYnV0ZU5vZGUgOiBmdW5jdGlvbihvbGRBdHRyKXtcblx0XHQvL2NvbnNvbGUubG9nKHRoaXMgPT0gb2xkQXR0ci5vd25lckVsZW1lbnQpXG5cdFx0cmV0dXJuIHRoaXMuYXR0cmlidXRlcy5yZW1vdmVOYW1lZEl0ZW0ob2xkQXR0ci5ub2RlTmFtZSk7XG5cdH0sXG5cdC8vZ2V0IHJlYWwgYXR0cmlidXRlIG5hbWUsYW5kIHJlbW92ZSBpdCBieSByZW1vdmVBdHRyaWJ1dGVOb2RlXG5cdHJlbW92ZUF0dHJpYnV0ZU5TIDogZnVuY3Rpb24obmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpe1xuXHRcdHZhciBvbGQgPSB0aGlzLmdldEF0dHJpYnV0ZU5vZGVOUyhuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSk7XG5cdFx0b2xkICYmIHRoaXMucmVtb3ZlQXR0cmlidXRlTm9kZShvbGQpO1xuXHR9LFxuXG5cdGhhc0F0dHJpYnV0ZU5TIDogZnVuY3Rpb24obmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpe1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZU5vZGVOUyhuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSkhPW51bGw7XG5cdH0sXG5cdGdldEF0dHJpYnV0ZU5TIDogZnVuY3Rpb24obmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpe1xuXHRcdHZhciBhdHRyID0gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpO1xuXHRcdHJldHVybiBhdHRyICYmIGF0dHIudmFsdWUgfHwgJyc7XG5cdH0sXG5cdHNldEF0dHJpYnV0ZU5TIDogZnVuY3Rpb24obmFtZXNwYWNlVVJJLCBxdWFsaWZpZWROYW1lLCB2YWx1ZSl7XG5cdFx0dmFyIGF0dHIgPSB0aGlzLm93bmVyRG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBxdWFsaWZpZWROYW1lKTtcblx0XHRhdHRyLnZhbHVlID0gYXR0ci5ub2RlVmFsdWUgPSBcIlwiICsgdmFsdWU7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGVOb2RlKGF0dHIpXG5cdH0sXG5cdGdldEF0dHJpYnV0ZU5vZGVOUyA6IGZ1bmN0aW9uKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKXtcblx0XHRyZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKTtcblx0fSxcblxuXHRnZXRFbGVtZW50c0J5VGFnTmFtZSA6IGZ1bmN0aW9uKHRhZ05hbWUpe1xuXHRcdHJldHVybiBuZXcgTGl2ZU5vZGVMaXN0KHRoaXMsZnVuY3Rpb24oYmFzZSl7XG5cdFx0XHR2YXIgbHMgPSBbXTtcblx0XHRcdF92aXNpdE5vZGUoYmFzZSxmdW5jdGlvbihub2RlKXtcblx0XHRcdFx0aWYobm9kZSAhPT0gYmFzZSAmJiBub2RlLm5vZGVUeXBlID09IEVMRU1FTlRfTk9ERSAmJiAodGFnTmFtZSA9PT0gJyonIHx8IG5vZGUudGFnTmFtZSA9PSB0YWdOYW1lKSl7XG5cdFx0XHRcdFx0bHMucHVzaChub2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gbHM7XG5cdFx0fSk7XG5cdH0sXG5cdGdldEVsZW1lbnRzQnlUYWdOYW1lTlMgOiBmdW5jdGlvbihuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSl7XG5cdFx0cmV0dXJuIG5ldyBMaXZlTm9kZUxpc3QodGhpcyxmdW5jdGlvbihiYXNlKXtcblx0XHRcdHZhciBscyA9IFtdO1xuXHRcdFx0X3Zpc2l0Tm9kZShiYXNlLGZ1bmN0aW9uKG5vZGUpe1xuXHRcdFx0XHRpZihub2RlICE9PSBiYXNlICYmIG5vZGUubm9kZVR5cGUgPT09IEVMRU1FTlRfTk9ERSAmJiAobmFtZXNwYWNlVVJJID09PSAnKicgfHwgbm9kZS5uYW1lc3BhY2VVUkkgPT09IG5hbWVzcGFjZVVSSSkgJiYgKGxvY2FsTmFtZSA9PT0gJyonIHx8IG5vZGUubG9jYWxOYW1lID09IGxvY2FsTmFtZSkpe1xuXHRcdFx0XHRcdGxzLnB1c2gobm9kZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGxzO1xuXG5cdFx0fSk7XG5cdH1cbn07XG5Eb2N1bWVudC5wcm90b3R5cGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUgPSBFbGVtZW50LnByb3RvdHlwZS5nZXRFbGVtZW50c0J5VGFnTmFtZTtcbkRvY3VtZW50LnByb3RvdHlwZS5nZXRFbGVtZW50c0J5VGFnTmFtZU5TID0gRWxlbWVudC5wcm90b3R5cGUuZ2V0RWxlbWVudHNCeVRhZ05hbWVOUztcblxuXG5fZXh0ZW5kcyhFbGVtZW50LE5vZGUpO1xuZnVuY3Rpb24gQXR0cigpIHtcbn07XG5BdHRyLnByb3RvdHlwZS5ub2RlVHlwZSA9IEFUVFJJQlVURV9OT0RFO1xuX2V4dGVuZHMoQXR0cixOb2RlKTtcblxuXG5mdW5jdGlvbiBDaGFyYWN0ZXJEYXRhKCkge1xufTtcbkNoYXJhY3RlckRhdGEucHJvdG90eXBlID0ge1xuXHRkYXRhIDogJycsXG5cdHN1YnN0cmluZ0RhdGEgOiBmdW5jdGlvbihvZmZzZXQsIGNvdW50KSB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YS5zdWJzdHJpbmcob2Zmc2V0LCBvZmZzZXQrY291bnQpO1xuXHR9LFxuXHRhcHBlbmREYXRhOiBmdW5jdGlvbih0ZXh0KSB7XG5cdFx0dGV4dCA9IHRoaXMuZGF0YSt0ZXh0O1xuXHRcdHRoaXMubm9kZVZhbHVlID0gdGhpcy5kYXRhID0gdGV4dDtcblx0XHR0aGlzLmxlbmd0aCA9IHRleHQubGVuZ3RoO1xuXHR9LFxuXHRpbnNlcnREYXRhOiBmdW5jdGlvbihvZmZzZXQsdGV4dCkge1xuXHRcdHRoaXMucmVwbGFjZURhdGEob2Zmc2V0LDAsdGV4dCk7XG5cblx0fSxcblx0YXBwZW5kQ2hpbGQ6ZnVuY3Rpb24obmV3Q2hpbGQpe1xuXHRcdHRocm93IG5ldyBFcnJvcihFeGNlcHRpb25NZXNzYWdlW0hJRVJBUkNIWV9SRVFVRVNUX0VSUl0pXG5cdH0sXG5cdGRlbGV0ZURhdGE6IGZ1bmN0aW9uKG9mZnNldCwgY291bnQpIHtcblx0XHR0aGlzLnJlcGxhY2VEYXRhKG9mZnNldCxjb3VudCxcIlwiKTtcblx0fSxcblx0cmVwbGFjZURhdGE6IGZ1bmN0aW9uKG9mZnNldCwgY291bnQsIHRleHQpIHtcblx0XHR2YXIgc3RhcnQgPSB0aGlzLmRhdGEuc3Vic3RyaW5nKDAsb2Zmc2V0KTtcblx0XHR2YXIgZW5kID0gdGhpcy5kYXRhLnN1YnN0cmluZyhvZmZzZXQrY291bnQpO1xuXHRcdHRleHQgPSBzdGFydCArIHRleHQgKyBlbmQ7XG5cdFx0dGhpcy5ub2RlVmFsdWUgPSB0aGlzLmRhdGEgPSB0ZXh0O1xuXHRcdHRoaXMubGVuZ3RoID0gdGV4dC5sZW5ndGg7XG5cdH1cbn1cbl9leHRlbmRzKENoYXJhY3RlckRhdGEsTm9kZSk7XG5mdW5jdGlvbiBUZXh0KCkge1xufTtcblRleHQucHJvdG90eXBlID0ge1xuXHRub2RlTmFtZSA6IFwiI3RleHRcIixcblx0bm9kZVR5cGUgOiBURVhUX05PREUsXG5cdHNwbGl0VGV4dCA6IGZ1bmN0aW9uKG9mZnNldCkge1xuXHRcdHZhciB0ZXh0ID0gdGhpcy5kYXRhO1xuXHRcdHZhciBuZXdUZXh0ID0gdGV4dC5zdWJzdHJpbmcob2Zmc2V0KTtcblx0XHR0ZXh0ID0gdGV4dC5zdWJzdHJpbmcoMCwgb2Zmc2V0KTtcblx0XHR0aGlzLmRhdGEgPSB0aGlzLm5vZGVWYWx1ZSA9IHRleHQ7XG5cdFx0dGhpcy5sZW5ndGggPSB0ZXh0Lmxlbmd0aDtcblx0XHR2YXIgbmV3Tm9kZSA9IHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuZXdUZXh0KTtcblx0XHRpZih0aGlzLnBhcmVudE5vZGUpe1xuXHRcdFx0dGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCB0aGlzLm5leHRTaWJsaW5nKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5ld05vZGU7XG5cdH1cbn1cbl9leHRlbmRzKFRleHQsQ2hhcmFjdGVyRGF0YSk7XG5mdW5jdGlvbiBDb21tZW50KCkge1xufTtcbkNvbW1lbnQucHJvdG90eXBlID0ge1xuXHRub2RlTmFtZSA6IFwiI2NvbW1lbnRcIixcblx0bm9kZVR5cGUgOiBDT01NRU5UX05PREVcbn1cbl9leHRlbmRzKENvbW1lbnQsQ2hhcmFjdGVyRGF0YSk7XG5cbmZ1bmN0aW9uIENEQVRBU2VjdGlvbigpIHtcbn07XG5DREFUQVNlY3Rpb24ucHJvdG90eXBlID0ge1xuXHRub2RlTmFtZSA6IFwiI2NkYXRhLXNlY3Rpb25cIixcblx0bm9kZVR5cGUgOiBDREFUQV9TRUNUSU9OX05PREVcbn1cbl9leHRlbmRzKENEQVRBU2VjdGlvbixDaGFyYWN0ZXJEYXRhKTtcblxuXG5mdW5jdGlvbiBEb2N1bWVudFR5cGUoKSB7XG59O1xuRG9jdW1lbnRUeXBlLnByb3RvdHlwZS5ub2RlVHlwZSA9IERPQ1VNRU5UX1RZUEVfTk9ERTtcbl9leHRlbmRzKERvY3VtZW50VHlwZSxOb2RlKTtcblxuZnVuY3Rpb24gTm90YXRpb24oKSB7XG59O1xuTm90YXRpb24ucHJvdG90eXBlLm5vZGVUeXBlID0gTk9UQVRJT05fTk9ERTtcbl9leHRlbmRzKE5vdGF0aW9uLE5vZGUpO1xuXG5mdW5jdGlvbiBFbnRpdHkoKSB7XG59O1xuRW50aXR5LnByb3RvdHlwZS5ub2RlVHlwZSA9IEVOVElUWV9OT0RFO1xuX2V4dGVuZHMoRW50aXR5LE5vZGUpO1xuXG5mdW5jdGlvbiBFbnRpdHlSZWZlcmVuY2UoKSB7XG59O1xuRW50aXR5UmVmZXJlbmNlLnByb3RvdHlwZS5ub2RlVHlwZSA9IEVOVElUWV9SRUZFUkVOQ0VfTk9ERTtcbl9leHRlbmRzKEVudGl0eVJlZmVyZW5jZSxOb2RlKTtcblxuZnVuY3Rpb24gRG9jdW1lbnRGcmFnbWVudCgpIHtcbn07XG5Eb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZS5ub2RlTmFtZSA9XHRcIiNkb2N1bWVudC1mcmFnbWVudFwiO1xuRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUubm9kZVR5cGUgPVx0RE9DVU1FTlRfRlJBR01FTlRfTk9ERTtcbl9leHRlbmRzKERvY3VtZW50RnJhZ21lbnQsTm9kZSk7XG5cblxuZnVuY3Rpb24gUHJvY2Vzc2luZ0luc3RydWN0aW9uKCkge1xufVxuUHJvY2Vzc2luZ0luc3RydWN0aW9uLnByb3RvdHlwZS5ub2RlVHlwZSA9IFBST0NFU1NJTkdfSU5TVFJVQ1RJT05fTk9ERTtcbl9leHRlbmRzKFByb2Nlc3NpbmdJbnN0cnVjdGlvbixOb2RlKTtcbmZ1bmN0aW9uIFhNTFNlcmlhbGl6ZXIoKXt9XG5YTUxTZXJpYWxpemVyLnByb3RvdHlwZS5zZXJpYWxpemVUb1N0cmluZyA9IGZ1bmN0aW9uKG5vZGUsaXNIdG1sLG5vZGVGaWx0ZXIpe1xuXHRyZXR1cm4gbm9kZVNlcmlhbGl6ZVRvU3RyaW5nLmNhbGwobm9kZSxpc0h0bWwsbm9kZUZpbHRlcik7XG59XG5Ob2RlLnByb3RvdHlwZS50b1N0cmluZyA9IG5vZGVTZXJpYWxpemVUb1N0cmluZztcbmZ1bmN0aW9uIG5vZGVTZXJpYWxpemVUb1N0cmluZyhpc0h0bWwsbm9kZUZpbHRlcil7XG5cdHZhciBidWYgPSBbXTtcblx0dmFyIHJlZk5vZGUgPSB0aGlzLm5vZGVUeXBlID09IDkgJiYgdGhpcy5kb2N1bWVudEVsZW1lbnQgfHwgdGhpcztcblx0dmFyIHByZWZpeCA9IHJlZk5vZGUucHJlZml4O1xuXHR2YXIgdXJpID0gcmVmTm9kZS5uYW1lc3BhY2VVUkk7XG5cblx0aWYodXJpICYmIHByZWZpeCA9PSBudWxsKXtcblx0XHQvL2NvbnNvbGUubG9nKHByZWZpeClcblx0XHR2YXIgcHJlZml4ID0gcmVmTm9kZS5sb29rdXBQcmVmaXgodXJpKTtcblx0XHRpZihwcmVmaXggPT0gbnVsbCl7XG5cdFx0XHQvL2lzSFRNTCA9IHRydWU7XG5cdFx0XHR2YXIgdmlzaWJsZU5hbWVzcGFjZXM9W1xuXHRcdFx0e25hbWVzcGFjZTp1cmkscHJlZml4Om51bGx9XG5cdFx0XHQvL3tuYW1lc3BhY2U6dXJpLHByZWZpeDonJ31cblx0XHRcdF1cblx0XHR9XG5cdH1cblx0c2VyaWFsaXplVG9TdHJpbmcodGhpcyxidWYsaXNIdG1sLG5vZGVGaWx0ZXIsdmlzaWJsZU5hbWVzcGFjZXMpO1xuXHQvL2NvbnNvbGUubG9nKCcjIyMnLHRoaXMubm9kZVR5cGUsdXJpLHByZWZpeCxidWYuam9pbignJykpXG5cdHJldHVybiBidWYuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIG5lZWROYW1lc3BhY2VEZWZpbmUobm9kZSwgaXNIVE1MLCB2aXNpYmxlTmFtZXNwYWNlcykge1xuXHR2YXIgcHJlZml4ID0gbm9kZS5wcmVmaXggfHwgJyc7XG5cdHZhciB1cmkgPSBub2RlLm5hbWVzcGFjZVVSSTtcblx0Ly8gQWNjb3JkaW5nIHRvIFtOYW1lc3BhY2VzIGluIFhNTCAxLjBdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9SRUMteG1sLW5hbWVzLyNucy11c2luZykgLFxuXHQvLyBhbmQgbW9yZSBzcGVjaWZpY2FsbHkgaHR0cHM6Ly93d3cudzMub3JnL1RSL1JFQy14bWwtbmFtZXMvI25zYy1Ob1ByZWZpeFVuZGVjbCA6XG5cdC8vID4gSW4gYSBuYW1lc3BhY2UgZGVjbGFyYXRpb24gZm9yIGEgcHJlZml4IFsuLi5dLCB0aGUgYXR0cmlidXRlIHZhbHVlIE1VU1QgTk9UIGJlIGVtcHR5LlxuXHQvLyBpbiBhIHNpbWlsYXIgbWFubmVyIFtOYW1lc3BhY2VzIGluIFhNTCAxLjFdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi94bWwtbmFtZXMxMS8jbnMtdXNpbmcpXG5cdC8vIGFuZCBtb3JlIHNwZWNpZmljYWxseSBodHRwczovL3d3dy53My5vcmcvVFIveG1sLW5hbWVzMTEvI25zYy1OU0RlY2xhcmVkIDpcblx0Ly8gPiBbLi4uXSBGdXJ0aGVybW9yZSwgdGhlIGF0dHJpYnV0ZSB2YWx1ZSBbLi4uXSBtdXN0IG5vdCBiZSBhbiBlbXB0eSBzdHJpbmcuXG5cdC8vIHNvIHNlcmlhbGl6aW5nIGVtcHR5IG5hbWVzcGFjZSB2YWx1ZSBsaWtlIHhtbG5zOmRzPVwiXCIgd291bGQgcHJvZHVjZSBhbiBpbnZhbGlkIFhNTCBkb2N1bWVudC5cblx0aWYgKCF1cmkpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0aWYgKHByZWZpeCA9PT0gXCJ4bWxcIiAmJiB1cmkgPT09IE5BTUVTUEFDRS5YTUwgfHwgdXJpID09PSBOQU1FU1BBQ0UuWE1MTlMpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHR2YXIgaSA9IHZpc2libGVOYW1lc3BhY2VzLmxlbmd0aFxuXHR3aGlsZSAoaS0tKSB7XG5cdFx0dmFyIG5zID0gdmlzaWJsZU5hbWVzcGFjZXNbaV07XG5cdFx0Ly8gZ2V0IG5hbWVzcGFjZSBwcmVmaXhcblx0XHRpZiAobnMucHJlZml4ID09PSBwcmVmaXgpIHtcblx0XHRcdHJldHVybiBucy5uYW1lc3BhY2UgIT09IHVyaTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRydWU7XG59XG4vKipcbiAqIFdlbGwtZm9ybWVkIGNvbnN0cmFpbnQ6IE5vIDwgaW4gQXR0cmlidXRlIFZhbHVlc1xuICogPiBUaGUgcmVwbGFjZW1lbnQgdGV4dCBvZiBhbnkgZW50aXR5IHJlZmVycmVkIHRvIGRpcmVjdGx5IG9yIGluZGlyZWN0bHlcbiAqID4gaW4gYW4gYXR0cmlidXRlIHZhbHVlIG11c3Qgbm90IGNvbnRhaW4gYSA8LlxuICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIveG1sMTEvI0NsZWFuQXR0clZhbHNcbiAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3htbDExLyNOVC1BdHRWYWx1ZVxuICpcbiAqIExpdGVyYWwgd2hpdGVzcGFjZSBvdGhlciB0aGFuIHNwYWNlIHRoYXQgYXBwZWFyIGluIGF0dHJpYnV0ZSB2YWx1ZXNcbiAqIGFyZSBzZXJpYWxpemVkIGFzIHRoZWlyIGVudGl0eSByZWZlcmVuY2VzLCBzbyB0aGV5IHdpbGwgYmUgcHJlc2VydmVkLlxuICogKEluIGNvbnRyYXN0IHRvIHdoaXRlc3BhY2UgbGl0ZXJhbHMgaW4gdGhlIGlucHV0IHdoaWNoIGFyZSBub3JtYWxpemVkIHRvIHNwYWNlcylcbiAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3htbDExLyNBVk5vcm1hbGl6ZVxuICogQHNlZSBodHRwczovL3czYy5naXRodWIuaW8vRE9NLVBhcnNpbmcvI3NlcmlhbGl6aW5nLWFuLWVsZW1lbnQtcy1hdHRyaWJ1dGVzXG4gKi9cbmZ1bmN0aW9uIGFkZFNlcmlhbGl6ZWRBdHRyaWJ1dGUoYnVmLCBxdWFsaWZpZWROYW1lLCB2YWx1ZSkge1xuXHRidWYucHVzaCgnICcsIHF1YWxpZmllZE5hbWUsICc9XCInLCB2YWx1ZS5yZXBsYWNlKC9bPD4mXCJcXHRcXG5cXHJdL2csIF94bWxFbmNvZGVyKSwgJ1wiJylcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplVG9TdHJpbmcobm9kZSxidWYsaXNIVE1MLG5vZGVGaWx0ZXIsdmlzaWJsZU5hbWVzcGFjZXMpe1xuXHRpZiAoIXZpc2libGVOYW1lc3BhY2VzKSB7XG5cdFx0dmlzaWJsZU5hbWVzcGFjZXMgPSBbXTtcblx0fVxuXG5cdGlmKG5vZGVGaWx0ZXIpe1xuXHRcdG5vZGUgPSBub2RlRmlsdGVyKG5vZGUpO1xuXHRcdGlmKG5vZGUpe1xuXHRcdFx0aWYodHlwZW9mIG5vZGUgPT0gJ3N0cmluZycpe1xuXHRcdFx0XHRidWYucHVzaChub2RlKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQvL2J1Zi5zb3J0LmFwcGx5KGF0dHJzLCBhdHRyaWJ1dGVTb3J0ZXIpO1xuXHR9XG5cblx0c3dpdGNoKG5vZGUubm9kZVR5cGUpe1xuXHRjYXNlIEVMRU1FTlRfTk9ERTpcblx0XHR2YXIgYXR0cnMgPSBub2RlLmF0dHJpYnV0ZXM7XG5cdFx0dmFyIGxlbiA9IGF0dHJzLmxlbmd0aDtcblx0XHR2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG5cdFx0dmFyIG5vZGVOYW1lID0gbm9kZS50YWdOYW1lO1xuXG5cdFx0aXNIVE1MID0gTkFNRVNQQUNFLmlzSFRNTChub2RlLm5hbWVzcGFjZVVSSSkgfHwgaXNIVE1MXG5cblx0XHR2YXIgcHJlZml4ZWROb2RlTmFtZSA9IG5vZGVOYW1lXG5cdFx0aWYgKCFpc0hUTUwgJiYgIW5vZGUucHJlZml4ICYmIG5vZGUubmFtZXNwYWNlVVJJKSB7XG5cdFx0XHR2YXIgZGVmYXVsdE5TXG5cdFx0XHQvLyBsb29rdXAgY3VycmVudCBkZWZhdWx0IG5zIGZyb20gYHhtbG5zYCBhdHRyaWJ1dGVcblx0XHRcdGZvciAodmFyIGFpID0gMDsgYWkgPCBhdHRycy5sZW5ndGg7IGFpKyspIHtcblx0XHRcdFx0aWYgKGF0dHJzLml0ZW0oYWkpLm5hbWUgPT09ICd4bWxucycpIHtcblx0XHRcdFx0XHRkZWZhdWx0TlMgPSBhdHRycy5pdGVtKGFpKS52YWx1ZVxuXHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICghZGVmYXVsdE5TKSB7XG5cdFx0XHRcdC8vIGxvb2t1cCBjdXJyZW50IGRlZmF1bHQgbnMgaW4gdmlzaWJsZU5hbWVzcGFjZXNcblx0XHRcdFx0Zm9yICh2YXIgbnNpID0gdmlzaWJsZU5hbWVzcGFjZXMubGVuZ3RoIC0gMTsgbnNpID49IDA7IG5zaS0tKSB7XG5cdFx0XHRcdFx0dmFyIG5hbWVzcGFjZSA9IHZpc2libGVOYW1lc3BhY2VzW25zaV1cblx0XHRcdFx0XHRpZiAobmFtZXNwYWNlLnByZWZpeCA9PT0gJycgJiYgbmFtZXNwYWNlLm5hbWVzcGFjZSA9PT0gbm9kZS5uYW1lc3BhY2VVUkkpIHtcblx0XHRcdFx0XHRcdGRlZmF1bHROUyA9IG5hbWVzcGFjZS5uYW1lc3BhY2Vcblx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGVmYXVsdE5TICE9PSBub2RlLm5hbWVzcGFjZVVSSSkge1xuXHRcdFx0XHRmb3IgKHZhciBuc2kgPSB2aXNpYmxlTmFtZXNwYWNlcy5sZW5ndGggLSAxOyBuc2kgPj0gMDsgbnNpLS0pIHtcblx0XHRcdFx0XHR2YXIgbmFtZXNwYWNlID0gdmlzaWJsZU5hbWVzcGFjZXNbbnNpXVxuXHRcdFx0XHRcdGlmIChuYW1lc3BhY2UubmFtZXNwYWNlID09PSBub2RlLm5hbWVzcGFjZVVSSSkge1xuXHRcdFx0XHRcdFx0aWYgKG5hbWVzcGFjZS5wcmVmaXgpIHtcblx0XHRcdFx0XHRcdFx0cHJlZml4ZWROb2RlTmFtZSA9IG5hbWVzcGFjZS5wcmVmaXggKyAnOicgKyBub2RlTmFtZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRidWYucHVzaCgnPCcsIHByZWZpeGVkTm9kZU5hbWUpO1xuXG5cdFx0Zm9yKHZhciBpPTA7aTxsZW47aSsrKXtcblx0XHRcdC8vIGFkZCBuYW1lc3BhY2VzIGZvciBhdHRyaWJ1dGVzXG5cdFx0XHR2YXIgYXR0ciA9IGF0dHJzLml0ZW0oaSk7XG5cdFx0XHRpZiAoYXR0ci5wcmVmaXggPT0gJ3htbG5zJykge1xuXHRcdFx0XHR2aXNpYmxlTmFtZXNwYWNlcy5wdXNoKHsgcHJlZml4OiBhdHRyLmxvY2FsTmFtZSwgbmFtZXNwYWNlOiBhdHRyLnZhbHVlIH0pO1xuXHRcdFx0fWVsc2UgaWYoYXR0ci5ub2RlTmFtZSA9PSAneG1sbnMnKXtcblx0XHRcdFx0dmlzaWJsZU5hbWVzcGFjZXMucHVzaCh7IHByZWZpeDogJycsIG5hbWVzcGFjZTogYXR0ci52YWx1ZSB9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IodmFyIGk9MDtpPGxlbjtpKyspe1xuXHRcdFx0dmFyIGF0dHIgPSBhdHRycy5pdGVtKGkpO1xuXHRcdFx0aWYgKG5lZWROYW1lc3BhY2VEZWZpbmUoYXR0cixpc0hUTUwsIHZpc2libGVOYW1lc3BhY2VzKSkge1xuXHRcdFx0XHR2YXIgcHJlZml4ID0gYXR0ci5wcmVmaXh8fCcnO1xuXHRcdFx0XHR2YXIgdXJpID0gYXR0ci5uYW1lc3BhY2VVUkk7XG5cdFx0XHRcdGFkZFNlcmlhbGl6ZWRBdHRyaWJ1dGUoYnVmLCBwcmVmaXggPyAneG1sbnM6JyArIHByZWZpeCA6IFwieG1sbnNcIiwgdXJpKTtcblx0XHRcdFx0dmlzaWJsZU5hbWVzcGFjZXMucHVzaCh7IHByZWZpeDogcHJlZml4LCBuYW1lc3BhY2U6dXJpIH0pO1xuXHRcdFx0fVxuXHRcdFx0c2VyaWFsaXplVG9TdHJpbmcoYXR0cixidWYsaXNIVE1MLG5vZGVGaWx0ZXIsdmlzaWJsZU5hbWVzcGFjZXMpO1xuXHRcdH1cblxuXHRcdC8vIGFkZCBuYW1lc3BhY2UgZm9yIGN1cnJlbnQgbm9kZVxuXHRcdGlmIChub2RlTmFtZSA9PT0gcHJlZml4ZWROb2RlTmFtZSAmJiBuZWVkTmFtZXNwYWNlRGVmaW5lKG5vZGUsIGlzSFRNTCwgdmlzaWJsZU5hbWVzcGFjZXMpKSB7XG5cdFx0XHR2YXIgcHJlZml4ID0gbm9kZS5wcmVmaXh8fCcnO1xuXHRcdFx0dmFyIHVyaSA9IG5vZGUubmFtZXNwYWNlVVJJO1xuXHRcdFx0YWRkU2VyaWFsaXplZEF0dHJpYnV0ZShidWYsIHByZWZpeCA/ICd4bWxuczonICsgcHJlZml4IDogXCJ4bWxuc1wiLCB1cmkpO1xuXHRcdFx0dmlzaWJsZU5hbWVzcGFjZXMucHVzaCh7IHByZWZpeDogcHJlZml4LCBuYW1lc3BhY2U6dXJpIH0pO1xuXHRcdH1cblxuXHRcdGlmKGNoaWxkIHx8IGlzSFRNTCAmJiAhL14oPzptZXRhfGxpbmt8aW1nfGJyfGhyfGlucHV0KSQvaS50ZXN0KG5vZGVOYW1lKSl7XG5cdFx0XHRidWYucHVzaCgnPicpO1xuXHRcdFx0Ly9pZiBpcyBjZGF0YSBjaGlsZCBub2RlXG5cdFx0XHRpZihpc0hUTUwgJiYgL15zY3JpcHQkL2kudGVzdChub2RlTmFtZSkpe1xuXHRcdFx0XHR3aGlsZShjaGlsZCl7XG5cdFx0XHRcdFx0aWYoY2hpbGQuZGF0YSl7XG5cdFx0XHRcdFx0XHRidWYucHVzaChjaGlsZC5kYXRhKTtcblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdHNlcmlhbGl6ZVRvU3RyaW5nKGNoaWxkLCBidWYsIGlzSFRNTCwgbm9kZUZpbHRlciwgdmlzaWJsZU5hbWVzcGFjZXMuc2xpY2UoKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG5cdFx0XHRcdH1cblx0XHRcdH1lbHNlXG5cdFx0XHR7XG5cdFx0XHRcdHdoaWxlKGNoaWxkKXtcblx0XHRcdFx0XHRzZXJpYWxpemVUb1N0cmluZyhjaGlsZCwgYnVmLCBpc0hUTUwsIG5vZGVGaWx0ZXIsIHZpc2libGVOYW1lc3BhY2VzLnNsaWNlKCkpO1xuXHRcdFx0XHRcdGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGJ1Zi5wdXNoKCc8LycscHJlZml4ZWROb2RlTmFtZSwnPicpO1xuXHRcdH1lbHNle1xuXHRcdFx0YnVmLnB1c2goJy8+Jyk7XG5cdFx0fVxuXHRcdC8vIHJlbW92ZSBhZGRlZCB2aXNpYmxlIG5hbWVzcGFjZXNcblx0XHQvL3Zpc2libGVOYW1lc3BhY2VzLmxlbmd0aCA9IHN0YXJ0VmlzaWJsZU5hbWVzcGFjZXM7XG5cdFx0cmV0dXJuO1xuXHRjYXNlIERPQ1VNRU5UX05PREU6XG5cdGNhc2UgRE9DVU1FTlRfRlJBR01FTlRfTk9ERTpcblx0XHR2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG5cdFx0d2hpbGUoY2hpbGQpe1xuXHRcdFx0c2VyaWFsaXplVG9TdHJpbmcoY2hpbGQsIGJ1ZiwgaXNIVE1MLCBub2RlRmlsdGVyLCB2aXNpYmxlTmFtZXNwYWNlcy5zbGljZSgpKTtcblx0XHRcdGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG5cdFx0fVxuXHRcdHJldHVybjtcblx0Y2FzZSBBVFRSSUJVVEVfTk9ERTpcblx0XHRyZXR1cm4gYWRkU2VyaWFsaXplZEF0dHJpYnV0ZShidWYsIG5vZGUubmFtZSwgbm9kZS52YWx1ZSk7XG5cdGNhc2UgVEVYVF9OT0RFOlxuXHRcdC8qKlxuXHRcdCAqIFRoZSBhbXBlcnNhbmQgY2hhcmFjdGVyICgmKSBhbmQgdGhlIGxlZnQgYW5nbGUgYnJhY2tldCAoPCkgbXVzdCBub3QgYXBwZWFyIGluIHRoZWlyIGxpdGVyYWwgZm9ybSxcblx0XHQgKiBleGNlcHQgd2hlbiB1c2VkIGFzIG1hcmt1cCBkZWxpbWl0ZXJzLCBvciB3aXRoaW4gYSBjb21tZW50LCBhIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb24sIG9yIGEgQ0RBVEEgc2VjdGlvbi5cblx0XHQgKiBJZiB0aGV5IGFyZSBuZWVkZWQgZWxzZXdoZXJlLCB0aGV5IG11c3QgYmUgZXNjYXBlZCB1c2luZyBlaXRoZXIgbnVtZXJpYyBjaGFyYWN0ZXIgcmVmZXJlbmNlcyBvciB0aGUgc3RyaW5nc1xuXHRcdCAqIGAmYW1wO2AgYW5kIGAmbHQ7YCByZXNwZWN0aXZlbHkuXG5cdFx0ICogVGhlIHJpZ2h0IGFuZ2xlIGJyYWNrZXQgKD4pIG1heSBiZSByZXByZXNlbnRlZCB1c2luZyB0aGUgc3RyaW5nIFwiICZndDsgXCIsIGFuZCBtdXN0LCBmb3IgY29tcGF0aWJpbGl0eSxcblx0XHQgKiBiZSBlc2NhcGVkIHVzaW5nIGVpdGhlciBgJmd0O2Agb3IgYSBjaGFyYWN0ZXIgcmVmZXJlbmNlIHdoZW4gaXQgYXBwZWFycyBpbiB0aGUgc3RyaW5nIGBdXT5gIGluIGNvbnRlbnQsXG5cdFx0ICogd2hlbiB0aGF0IHN0cmluZyBpcyBub3QgbWFya2luZyB0aGUgZW5kIG9mIGEgQ0RBVEEgc2VjdGlvbi5cblx0XHQgKlxuXHRcdCAqIEluIHRoZSBjb250ZW50IG9mIGVsZW1lbnRzLCBjaGFyYWN0ZXIgZGF0YSBpcyBhbnkgc3RyaW5nIG9mIGNoYXJhY3RlcnNcblx0XHQgKiB3aGljaCBkb2VzIG5vdCBjb250YWluIHRoZSBzdGFydC1kZWxpbWl0ZXIgb2YgYW55IG1hcmt1cFxuXHRcdCAqIGFuZCBkb2VzIG5vdCBpbmNsdWRlIHRoZSBDREFUQS1zZWN0aW9uLWNsb3NlIGRlbGltaXRlciwgYF1dPmAuXG5cdFx0ICpcblx0XHQgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi94bWwvI05ULUNoYXJEYXRhXG5cdFx0ICogQHNlZSBodHRwczovL3czYy5naXRodWIuaW8vRE9NLVBhcnNpbmcvI3htbC1zZXJpYWxpemluZy1hLXRleHQtbm9kZVxuXHRcdCAqL1xuXHRcdHJldHVybiBidWYucHVzaChub2RlLmRhdGFcblx0XHRcdC5yZXBsYWNlKC9bPCY+XS9nLF94bWxFbmNvZGVyKVxuXHRcdCk7XG5cdGNhc2UgQ0RBVEFfU0VDVElPTl9OT0RFOlxuXHRcdHJldHVybiBidWYucHVzaCggJzwhW0NEQVRBWycsbm9kZS5kYXRhLCddXT4nKTtcblx0Y2FzZSBDT01NRU5UX05PREU6XG5cdFx0cmV0dXJuIGJ1Zi5wdXNoKCBcIjwhLS1cIixub2RlLmRhdGEsXCItLT5cIik7XG5cdGNhc2UgRE9DVU1FTlRfVFlQRV9OT0RFOlxuXHRcdHZhciBwdWJpZCA9IG5vZGUucHVibGljSWQ7XG5cdFx0dmFyIHN5c2lkID0gbm9kZS5zeXN0ZW1JZDtcblx0XHRidWYucHVzaCgnPCFET0NUWVBFICcsbm9kZS5uYW1lKTtcblx0XHRpZihwdWJpZCl7XG5cdFx0XHRidWYucHVzaCgnIFBVQkxJQyAnLCBwdWJpZCk7XG5cdFx0XHRpZiAoc3lzaWQgJiYgc3lzaWQhPScuJykge1xuXHRcdFx0XHRidWYucHVzaCgnICcsIHN5c2lkKTtcblx0XHRcdH1cblx0XHRcdGJ1Zi5wdXNoKCc+Jyk7XG5cdFx0fWVsc2UgaWYoc3lzaWQgJiYgc3lzaWQhPScuJyl7XG5cdFx0XHRidWYucHVzaCgnIFNZU1RFTSAnLCBzeXNpZCwgJz4nKTtcblx0XHR9ZWxzZXtcblx0XHRcdHZhciBzdWIgPSBub2RlLmludGVybmFsU3Vic2V0O1xuXHRcdFx0aWYoc3ViKXtcblx0XHRcdFx0YnVmLnB1c2goXCIgW1wiLHN1YixcIl1cIik7XG5cdFx0XHR9XG5cdFx0XHRidWYucHVzaChcIj5cIik7XG5cdFx0fVxuXHRcdHJldHVybjtcblx0Y2FzZSBQUk9DRVNTSU5HX0lOU1RSVUNUSU9OX05PREU6XG5cdFx0cmV0dXJuIGJ1Zi5wdXNoKCBcIjw/XCIsbm9kZS50YXJnZXQsXCIgXCIsbm9kZS5kYXRhLFwiPz5cIik7XG5cdGNhc2UgRU5USVRZX1JFRkVSRU5DRV9OT0RFOlxuXHRcdHJldHVybiBidWYucHVzaCggJyYnLG5vZGUubm9kZU5hbWUsJzsnKTtcblx0Ly9jYXNlIEVOVElUWV9OT0RFOlxuXHQvL2Nhc2UgTk9UQVRJT05fTk9ERTpcblx0ZGVmYXVsdDpcblx0XHRidWYucHVzaCgnPz8nLG5vZGUubm9kZU5hbWUpO1xuXHR9XG59XG5mdW5jdGlvbiBpbXBvcnROb2RlKGRvYyxub2RlLGRlZXApe1xuXHR2YXIgbm9kZTI7XG5cdHN3aXRjaCAobm9kZS5ub2RlVHlwZSkge1xuXHRjYXNlIEVMRU1FTlRfTk9ERTpcblx0XHRub2RlMiA9IG5vZGUuY2xvbmVOb2RlKGZhbHNlKTtcblx0XHRub2RlMi5vd25lckRvY3VtZW50ID0gZG9jO1xuXHRcdC8vdmFyIGF0dHJzID0gbm9kZTIuYXR0cmlidXRlcztcblx0XHQvL3ZhciBsZW4gPSBhdHRycy5sZW5ndGg7XG5cdFx0Ly9mb3IodmFyIGk9MDtpPGxlbjtpKyspe1xuXHRcdFx0Ly9ub2RlMi5zZXRBdHRyaWJ1dGVOb2RlTlMoaW1wb3J0Tm9kZShkb2MsYXR0cnMuaXRlbShpKSxkZWVwKSk7XG5cdFx0Ly99XG5cdGNhc2UgRE9DVU1FTlRfRlJBR01FTlRfTk9ERTpcblx0XHRicmVhaztcblx0Y2FzZSBBVFRSSUJVVEVfTk9ERTpcblx0XHRkZWVwID0gdHJ1ZTtcblx0XHRicmVhaztcblx0Ly9jYXNlIEVOVElUWV9SRUZFUkVOQ0VfTk9ERTpcblx0Ly9jYXNlIFBST0NFU1NJTkdfSU5TVFJVQ1RJT05fTk9ERTpcblx0Ly8vL2Nhc2UgVEVYVF9OT0RFOlxuXHQvL2Nhc2UgQ0RBVEFfU0VDVElPTl9OT0RFOlxuXHQvL2Nhc2UgQ09NTUVOVF9OT0RFOlxuXHQvL1x0ZGVlcCA9IGZhbHNlO1xuXHQvL1x0YnJlYWs7XG5cdC8vY2FzZSBET0NVTUVOVF9OT0RFOlxuXHQvL2Nhc2UgRE9DVU1FTlRfVFlQRV9OT0RFOlxuXHQvL2Nhbm5vdCBiZSBpbXBvcnRlZC5cblx0Ly9jYXNlIEVOVElUWV9OT0RFOlxuXHQvL2Nhc2UgTk9UQVRJT05fTk9ERe+8mlxuXHQvL2NhbiBub3QgaGl0IGluIGxldmVsM1xuXHQvL2RlZmF1bHQ6dGhyb3cgZTtcblx0fVxuXHRpZighbm9kZTIpe1xuXHRcdG5vZGUyID0gbm9kZS5jbG9uZU5vZGUoZmFsc2UpOy8vZmFsc2Vcblx0fVxuXHRub2RlMi5vd25lckRvY3VtZW50ID0gZG9jO1xuXHRub2RlMi5wYXJlbnROb2RlID0gbnVsbDtcblx0aWYoZGVlcCl7XG5cdFx0dmFyIGNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuXHRcdHdoaWxlKGNoaWxkKXtcblx0XHRcdG5vZGUyLmFwcGVuZENoaWxkKGltcG9ydE5vZGUoZG9jLGNoaWxkLGRlZXApKTtcblx0XHRcdGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBub2RlMjtcbn1cbi8vXG4vL3ZhciBfcmVsYXRpb25NYXAgPSB7Zmlyc3RDaGlsZDoxLGxhc3RDaGlsZDoxLHByZXZpb3VzU2libGluZzoxLG5leHRTaWJsaW5nOjEsXG4vL1x0XHRcdFx0XHRhdHRyaWJ1dGVzOjEsY2hpbGROb2RlczoxLHBhcmVudE5vZGU6MSxkb2N1bWVudEVsZW1lbnQ6MSxkb2N0eXBlLH07XG5mdW5jdGlvbiBjbG9uZU5vZGUoZG9jLG5vZGUsZGVlcCl7XG5cdHZhciBub2RlMiA9IG5ldyBub2RlLmNvbnN0cnVjdG9yKCk7XG5cdGZvciAodmFyIG4gaW4gbm9kZSkge1xuXHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobm9kZSwgbikpIHtcblx0XHRcdHZhciB2ID0gbm9kZVtuXTtcblx0XHRcdGlmICh0eXBlb2YgdiAhPSBcIm9iamVjdFwiKSB7XG5cdFx0XHRcdGlmICh2ICE9IG5vZGUyW25dKSB7XG5cdFx0XHRcdFx0bm9kZTJbbl0gPSB2O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGlmKG5vZGUuY2hpbGROb2Rlcyl7XG5cdFx0bm9kZTIuY2hpbGROb2RlcyA9IG5ldyBOb2RlTGlzdCgpO1xuXHR9XG5cdG5vZGUyLm93bmVyRG9jdW1lbnQgPSBkb2M7XG5cdHN3aXRjaCAobm9kZTIubm9kZVR5cGUpIHtcblx0Y2FzZSBFTEVNRU5UX05PREU6XG5cdFx0dmFyIGF0dHJzXHQ9IG5vZGUuYXR0cmlidXRlcztcblx0XHR2YXIgYXR0cnMyXHQ9IG5vZGUyLmF0dHJpYnV0ZXMgPSBuZXcgTmFtZWROb2RlTWFwKCk7XG5cdFx0dmFyIGxlbiA9IGF0dHJzLmxlbmd0aFxuXHRcdGF0dHJzMi5fb3duZXJFbGVtZW50ID0gbm9kZTI7XG5cdFx0Zm9yKHZhciBpPTA7aTxsZW47aSsrKXtcblx0XHRcdG5vZGUyLnNldEF0dHJpYnV0ZU5vZGUoY2xvbmVOb2RlKGRvYyxhdHRycy5pdGVtKGkpLHRydWUpKTtcblx0XHR9XG5cdFx0YnJlYWs7O1xuXHRjYXNlIEFUVFJJQlVURV9OT0RFOlxuXHRcdGRlZXAgPSB0cnVlO1xuXHR9XG5cdGlmKGRlZXApe1xuXHRcdHZhciBjaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcblx0XHR3aGlsZShjaGlsZCl7XG5cdFx0XHRub2RlMi5hcHBlbmRDaGlsZChjbG9uZU5vZGUoZG9jLGNoaWxkLGRlZXApKTtcblx0XHRcdGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBub2RlMjtcbn1cblxuZnVuY3Rpb24gX19zZXRfXyhvYmplY3Qsa2V5LHZhbHVlKXtcblx0b2JqZWN0W2tleV0gPSB2YWx1ZVxufVxuLy9kbyBkeW5hbWljXG50cnl7XG5cdGlmKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSl7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KExpdmVOb2RlTGlzdC5wcm90b3R5cGUsJ2xlbmd0aCcse1xuXHRcdFx0Z2V0OmZ1bmN0aW9uKCl7XG5cdFx0XHRcdF91cGRhdGVMaXZlTGlzdCh0aGlzKTtcblx0XHRcdFx0cmV0dXJuIHRoaXMuJCRsZW5ndGg7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoTm9kZS5wcm90b3R5cGUsJ3RleHRDb250ZW50Jyx7XG5cdFx0XHRnZXQ6ZnVuY3Rpb24oKXtcblx0XHRcdFx0cmV0dXJuIGdldFRleHRDb250ZW50KHRoaXMpO1xuXHRcdFx0fSxcblxuXHRcdFx0c2V0OmZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0XHRzd2l0Y2godGhpcy5ub2RlVHlwZSl7XG5cdFx0XHRcdGNhc2UgRUxFTUVOVF9OT0RFOlxuXHRcdFx0XHRjYXNlIERPQ1VNRU5UX0ZSQUdNRU5UX05PREU6XG5cdFx0XHRcdFx0d2hpbGUodGhpcy5maXJzdENoaWxkKXtcblx0XHRcdFx0XHRcdHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5maXJzdENoaWxkKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYoZGF0YSB8fCBTdHJpbmcoZGF0YSkpe1xuXHRcdFx0XHRcdFx0dGhpcy5hcHBlbmRDaGlsZCh0aGlzLm93bmVyRG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YSkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cdFx0XHRcdFx0dGhpcy52YWx1ZSA9IGRhdGE7XG5cdFx0XHRcdFx0dGhpcy5ub2RlVmFsdWUgPSBkYXRhO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdGZ1bmN0aW9uIGdldFRleHRDb250ZW50KG5vZGUpe1xuXHRcdFx0c3dpdGNoKG5vZGUubm9kZVR5cGUpe1xuXHRcdFx0Y2FzZSBFTEVNRU5UX05PREU6XG5cdFx0XHRjYXNlIERPQ1VNRU5UX0ZSQUdNRU5UX05PREU6XG5cdFx0XHRcdHZhciBidWYgPSBbXTtcblx0XHRcdFx0bm9kZSA9IG5vZGUuZmlyc3RDaGlsZDtcblx0XHRcdFx0d2hpbGUobm9kZSl7XG5cdFx0XHRcdFx0aWYobm9kZS5ub2RlVHlwZSE9PTcgJiYgbm9kZS5ub2RlVHlwZSAhPT04KXtcblx0XHRcdFx0XHRcdGJ1Zi5wdXNoKGdldFRleHRDb250ZW50KG5vZGUpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bm9kZSA9IG5vZGUubmV4dFNpYmxpbmc7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGJ1Zi5qb2luKCcnKTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBub2RlLm5vZGVWYWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRfX3NldF9fID0gZnVuY3Rpb24ob2JqZWN0LGtleSx2YWx1ZSl7XG5cdFx0XHQvL2NvbnNvbGUubG9nKHZhbHVlKVxuXHRcdFx0b2JqZWN0WyckJCcra2V5XSA9IHZhbHVlXG5cdFx0fVxuXHR9XG59Y2F0Y2goZSl7Ly9pZThcbn1cblxuLy9pZih0eXBlb2YgcmVxdWlyZSA9PSAnZnVuY3Rpb24nKXtcblx0ZXhwb3J0cy5Eb2N1bWVudFR5cGUgPSBEb2N1bWVudFR5cGU7XG5cdGV4cG9ydHMuRE9NRXhjZXB0aW9uID0gRE9NRXhjZXB0aW9uO1xuXHRleHBvcnRzLkRPTUltcGxlbWVudGF0aW9uID0gRE9NSW1wbGVtZW50YXRpb247XG5cdGV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5cdGV4cG9ydHMuTm9kZSA9IE5vZGU7XG5cdGV4cG9ydHMuTm9kZUxpc3QgPSBOb2RlTGlzdDtcblx0ZXhwb3J0cy5YTUxTZXJpYWxpemVyID0gWE1MU2VyaWFsaXplcjtcbi8vfVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZnJlZXplID0gcmVxdWlyZSgnLi9jb252ZW50aW9ucycpLmZyZWV6ZTtcblxuLyoqXG4gKiBUaGUgZW50aXRpZXMgdGhhdCBhcmUgcHJlZGVmaW5lZCBpbiBldmVyeSBYTUwgZG9jdW1lbnQuXG4gKlxuICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvMjAwNi9SRUMteG1sMTEtMjAwNjA4MTYvI3NlYy1wcmVkZWZpbmVkLWVudCBXM0MgWE1MIDEuMVxuICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvMjAwOC9SRUMteG1sLTIwMDgxMTI2LyNzZWMtcHJlZGVmaW5lZC1lbnQgVzNDIFhNTCAxLjBcbiAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGlzdF9vZl9YTUxfYW5kX0hUTUxfY2hhcmFjdGVyX2VudGl0eV9yZWZlcmVuY2VzI1ByZWRlZmluZWRfZW50aXRpZXNfaW5fWE1MIFdpa2lwZWRpYVxuICovXG5leHBvcnRzLlhNTF9FTlRJVElFUyA9IGZyZWV6ZSh7XG5cdGFtcDogJyYnLFxuXHRhcG9zOiBcIidcIixcblx0Z3Q6ICc+Jyxcblx0bHQ6ICc8Jyxcblx0cXVvdDogJ1wiJyxcbn0pO1xuXG4vKipcbiAqIEEgbWFwIG9mIGFsbCBlbnRpdGllcyB0aGF0IGFyZSBkZXRlY3RlZCBpbiBhbiBIVE1MIGRvY3VtZW50LlxuICogVGhleSBjb250YWluIGFsbCBlbnRyaWVzIGZyb20gYFhNTF9FTlRJVElFU2AuXG4gKlxuICogQHNlZSBYTUxfRU5USVRJRVNcbiAqIEBzZWUgRE9NUGFyc2VyLnBhcnNlRnJvbVN0cmluZ1xuICogQHNlZSBET01JbXBsZW1lbnRhdGlvbi5wcm90b3R5cGUuY3JlYXRlSFRNTERvY3VtZW50XG4gKiBAc2VlIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI25hbWVkLWNoYXJhY3Rlci1yZWZlcmVuY2VzIFdIQVRXRyBIVE1MKDUpIFNwZWNcbiAqIEBzZWUgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9lbnRpdGllcy5qc29uIEpTT05cbiAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3htbC1lbnRpdHktbmFtZXMvIFczQyBYTUwgRW50aXR5IE5hbWVzXG4gKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9odG1sNC9zZ21sL2VudGl0aWVzLmh0bWwgVzNDIEhUTUw0L1NHTUxcbiAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGlzdF9vZl9YTUxfYW5kX0hUTUxfY2hhcmFjdGVyX2VudGl0eV9yZWZlcmVuY2VzI0NoYXJhY3Rlcl9lbnRpdHlfcmVmZXJlbmNlc19pbl9IVE1MIFdpa2lwZWRpYSAoSFRNTClcbiAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGlzdF9vZl9YTUxfYW5kX0hUTUxfY2hhcmFjdGVyX2VudGl0eV9yZWZlcmVuY2VzI0VudGl0aWVzX3JlcHJlc2VudGluZ19zcGVjaWFsX2NoYXJhY3RlcnNfaW5fWEhUTUwgV2lrcGVkaWEgKFhIVE1MKVxuICovXG5leHBvcnRzLkhUTUxfRU5USVRJRVMgPSBmcmVlemUoe1xuXHRBYWN1dGU6ICdcXHUwMEMxJyxcblx0YWFjdXRlOiAnXFx1MDBFMScsXG5cdEFicmV2ZTogJ1xcdTAxMDInLFxuXHRhYnJldmU6ICdcXHUwMTAzJyxcblx0YWM6ICdcXHUyMjNFJyxcblx0YWNkOiAnXFx1MjIzRicsXG5cdGFjRTogJ1xcdTIyM0VcXHUwMzMzJyxcblx0QWNpcmM6ICdcXHUwMEMyJyxcblx0YWNpcmM6ICdcXHUwMEUyJyxcblx0YWN1dGU6ICdcXHUwMEI0Jyxcblx0QWN5OiAnXFx1MDQxMCcsXG5cdGFjeTogJ1xcdTA0MzAnLFxuXHRBRWxpZzogJ1xcdTAwQzYnLFxuXHRhZWxpZzogJ1xcdTAwRTYnLFxuXHRhZjogJ1xcdTIwNjEnLFxuXHRBZnI6ICdcXHVEODM1XFx1REQwNCcsXG5cdGFmcjogJ1xcdUQ4MzVcXHVERDFFJyxcblx0QWdyYXZlOiAnXFx1MDBDMCcsXG5cdGFncmF2ZTogJ1xcdTAwRTAnLFxuXHRhbGVmc3ltOiAnXFx1MjEzNScsXG5cdGFsZXBoOiAnXFx1MjEzNScsXG5cdEFscGhhOiAnXFx1MDM5MScsXG5cdGFscGhhOiAnXFx1MDNCMScsXG5cdEFtYWNyOiAnXFx1MDEwMCcsXG5cdGFtYWNyOiAnXFx1MDEwMScsXG5cdGFtYWxnOiAnXFx1MkEzRicsXG5cdEFNUDogJ1xcdTAwMjYnLFxuXHRhbXA6ICdcXHUwMDI2Jyxcblx0QW5kOiAnXFx1MkE1MycsXG5cdGFuZDogJ1xcdTIyMjcnLFxuXHRhbmRhbmQ6ICdcXHUyQTU1Jyxcblx0YW5kZDogJ1xcdTJBNUMnLFxuXHRhbmRzbG9wZTogJ1xcdTJBNTgnLFxuXHRhbmR2OiAnXFx1MkE1QScsXG5cdGFuZzogJ1xcdTIyMjAnLFxuXHRhbmdlOiAnXFx1MjlBNCcsXG5cdGFuZ2xlOiAnXFx1MjIyMCcsXG5cdGFuZ21zZDogJ1xcdTIyMjEnLFxuXHRhbmdtc2RhYTogJ1xcdTI5QTgnLFxuXHRhbmdtc2RhYjogJ1xcdTI5QTknLFxuXHRhbmdtc2RhYzogJ1xcdTI5QUEnLFxuXHRhbmdtc2RhZDogJ1xcdTI5QUInLFxuXHRhbmdtc2RhZTogJ1xcdTI5QUMnLFxuXHRhbmdtc2RhZjogJ1xcdTI5QUQnLFxuXHRhbmdtc2RhZzogJ1xcdTI5QUUnLFxuXHRhbmdtc2RhaDogJ1xcdTI5QUYnLFxuXHRhbmdydDogJ1xcdTIyMUYnLFxuXHRhbmdydHZiOiAnXFx1MjJCRScsXG5cdGFuZ3J0dmJkOiAnXFx1Mjk5RCcsXG5cdGFuZ3NwaDogJ1xcdTIyMjInLFxuXHRhbmdzdDogJ1xcdTAwQzUnLFxuXHRhbmd6YXJyOiAnXFx1MjM3QycsXG5cdEFvZ29uOiAnXFx1MDEwNCcsXG5cdGFvZ29uOiAnXFx1MDEwNScsXG5cdEFvcGY6ICdcXHVEODM1XFx1REQzOCcsXG5cdGFvcGY6ICdcXHVEODM1XFx1REQ1MicsXG5cdGFwOiAnXFx1MjI0OCcsXG5cdGFwYWNpcjogJ1xcdTJBNkYnLFxuXHRhcEU6ICdcXHUyQTcwJyxcblx0YXBlOiAnXFx1MjI0QScsXG5cdGFwaWQ6ICdcXHUyMjRCJyxcblx0YXBvczogJ1xcdTAwMjcnLFxuXHRBcHBseUZ1bmN0aW9uOiAnXFx1MjA2MScsXG5cdGFwcHJveDogJ1xcdTIyNDgnLFxuXHRhcHByb3hlcTogJ1xcdTIyNEEnLFxuXHRBcmluZzogJ1xcdTAwQzUnLFxuXHRhcmluZzogJ1xcdTAwRTUnLFxuXHRBc2NyOiAnXFx1RDgzNVxcdURDOUMnLFxuXHRhc2NyOiAnXFx1RDgzNVxcdURDQjYnLFxuXHRBc3NpZ246ICdcXHUyMjU0Jyxcblx0YXN0OiAnXFx1MDAyQScsXG5cdGFzeW1wOiAnXFx1MjI0OCcsXG5cdGFzeW1wZXE6ICdcXHUyMjREJyxcblx0QXRpbGRlOiAnXFx1MDBDMycsXG5cdGF0aWxkZTogJ1xcdTAwRTMnLFxuXHRBdW1sOiAnXFx1MDBDNCcsXG5cdGF1bWw6ICdcXHUwMEU0Jyxcblx0YXdjb25pbnQ6ICdcXHUyMjMzJyxcblx0YXdpbnQ6ICdcXHUyQTExJyxcblx0YmFja2Nvbmc6ICdcXHUyMjRDJyxcblx0YmFja2Vwc2lsb246ICdcXHUwM0Y2Jyxcblx0YmFja3ByaW1lOiAnXFx1MjAzNScsXG5cdGJhY2tzaW06ICdcXHUyMjNEJyxcblx0YmFja3NpbWVxOiAnXFx1MjJDRCcsXG5cdEJhY2tzbGFzaDogJ1xcdTIyMTYnLFxuXHRCYXJ2OiAnXFx1MkFFNycsXG5cdGJhcnZlZTogJ1xcdTIyQkQnLFxuXHRCYXJ3ZWQ6ICdcXHUyMzA2Jyxcblx0YmFyd2VkOiAnXFx1MjMwNScsXG5cdGJhcndlZGdlOiAnXFx1MjMwNScsXG5cdGJicms6ICdcXHUyM0I1Jyxcblx0YmJya3Ricms6ICdcXHUyM0I2Jyxcblx0YmNvbmc6ICdcXHUyMjRDJyxcblx0QmN5OiAnXFx1MDQxMScsXG5cdGJjeTogJ1xcdTA0MzEnLFxuXHRiZHF1bzogJ1xcdTIwMUUnLFxuXHRiZWNhdXM6ICdcXHUyMjM1Jyxcblx0QmVjYXVzZTogJ1xcdTIyMzUnLFxuXHRiZWNhdXNlOiAnXFx1MjIzNScsXG5cdGJlbXB0eXY6ICdcXHUyOUIwJyxcblx0YmVwc2k6ICdcXHUwM0Y2Jyxcblx0YmVybm91OiAnXFx1MjEyQycsXG5cdEJlcm5vdWxsaXM6ICdcXHUyMTJDJyxcblx0QmV0YTogJ1xcdTAzOTInLFxuXHRiZXRhOiAnXFx1MDNCMicsXG5cdGJldGg6ICdcXHUyMTM2Jyxcblx0YmV0d2VlbjogJ1xcdTIyNkMnLFxuXHRCZnI6ICdcXHVEODM1XFx1REQwNScsXG5cdGJmcjogJ1xcdUQ4MzVcXHVERDFGJyxcblx0YmlnY2FwOiAnXFx1MjJDMicsXG5cdGJpZ2NpcmM6ICdcXHUyNUVGJyxcblx0YmlnY3VwOiAnXFx1MjJDMycsXG5cdGJpZ29kb3Q6ICdcXHUyQTAwJyxcblx0Ymlnb3BsdXM6ICdcXHUyQTAxJyxcblx0Ymlnb3RpbWVzOiAnXFx1MkEwMicsXG5cdGJpZ3NxY3VwOiAnXFx1MkEwNicsXG5cdGJpZ3N0YXI6ICdcXHUyNjA1Jyxcblx0YmlndHJpYW5nbGVkb3duOiAnXFx1MjVCRCcsXG5cdGJpZ3RyaWFuZ2xldXA6ICdcXHUyNUIzJyxcblx0YmlndXBsdXM6ICdcXHUyQTA0Jyxcblx0YmlndmVlOiAnXFx1MjJDMScsXG5cdGJpZ3dlZGdlOiAnXFx1MjJDMCcsXG5cdGJrYXJvdzogJ1xcdTI5MEQnLFxuXHRibGFja2xvemVuZ2U6ICdcXHUyOUVCJyxcblx0YmxhY2tzcXVhcmU6ICdcXHUyNUFBJyxcblx0YmxhY2t0cmlhbmdsZTogJ1xcdTI1QjQnLFxuXHRibGFja3RyaWFuZ2xlZG93bjogJ1xcdTI1QkUnLFxuXHRibGFja3RyaWFuZ2xlbGVmdDogJ1xcdTI1QzInLFxuXHRibGFja3RyaWFuZ2xlcmlnaHQ6ICdcXHUyNUI4Jyxcblx0Ymxhbms6ICdcXHUyNDIzJyxcblx0YmxrMTI6ICdcXHUyNTkyJyxcblx0YmxrMTQ6ICdcXHUyNTkxJyxcblx0YmxrMzQ6ICdcXHUyNTkzJyxcblx0YmxvY2s6ICdcXHUyNTg4Jyxcblx0Ym5lOiAnXFx1MDAzRFxcdTIwRTUnLFxuXHRibmVxdWl2OiAnXFx1MjI2MVxcdTIwRTUnLFxuXHRiTm90OiAnXFx1MkFFRCcsXG5cdGJub3Q6ICdcXHUyMzEwJyxcblx0Qm9wZjogJ1xcdUQ4MzVcXHVERDM5Jyxcblx0Ym9wZjogJ1xcdUQ4MzVcXHVERDUzJyxcblx0Ym90OiAnXFx1MjJBNScsXG5cdGJvdHRvbTogJ1xcdTIyQTUnLFxuXHRib3d0aWU6ICdcXHUyMkM4Jyxcblx0Ym94Ym94OiAnXFx1MjlDOScsXG5cdGJveERMOiAnXFx1MjU1NycsXG5cdGJveERsOiAnXFx1MjU1NicsXG5cdGJveGRMOiAnXFx1MjU1NScsXG5cdGJveGRsOiAnXFx1MjUxMCcsXG5cdGJveERSOiAnXFx1MjU1NCcsXG5cdGJveERyOiAnXFx1MjU1MycsXG5cdGJveGRSOiAnXFx1MjU1MicsXG5cdGJveGRyOiAnXFx1MjUwQycsXG5cdGJveEg6ICdcXHUyNTUwJyxcblx0Ym94aDogJ1xcdTI1MDAnLFxuXHRib3hIRDogJ1xcdTI1NjYnLFxuXHRib3hIZDogJ1xcdTI1NjQnLFxuXHRib3hoRDogJ1xcdTI1NjUnLFxuXHRib3hoZDogJ1xcdTI1MkMnLFxuXHRib3hIVTogJ1xcdTI1NjknLFxuXHRib3hIdTogJ1xcdTI1NjcnLFxuXHRib3hoVTogJ1xcdTI1NjgnLFxuXHRib3hodTogJ1xcdTI1MzQnLFxuXHRib3htaW51czogJ1xcdTIyOUYnLFxuXHRib3hwbHVzOiAnXFx1MjI5RScsXG5cdGJveHRpbWVzOiAnXFx1MjJBMCcsXG5cdGJveFVMOiAnXFx1MjU1RCcsXG5cdGJveFVsOiAnXFx1MjU1QycsXG5cdGJveHVMOiAnXFx1MjU1QicsXG5cdGJveHVsOiAnXFx1MjUxOCcsXG5cdGJveFVSOiAnXFx1MjU1QScsXG5cdGJveFVyOiAnXFx1MjU1OScsXG5cdGJveHVSOiAnXFx1MjU1OCcsXG5cdGJveHVyOiAnXFx1MjUxNCcsXG5cdGJveFY6ICdcXHUyNTUxJyxcblx0Ym94djogJ1xcdTI1MDInLFxuXHRib3hWSDogJ1xcdTI1NkMnLFxuXHRib3hWaDogJ1xcdTI1NkInLFxuXHRib3h2SDogJ1xcdTI1NkEnLFxuXHRib3h2aDogJ1xcdTI1M0MnLFxuXHRib3hWTDogJ1xcdTI1NjMnLFxuXHRib3hWbDogJ1xcdTI1NjInLFxuXHRib3h2TDogJ1xcdTI1NjEnLFxuXHRib3h2bDogJ1xcdTI1MjQnLFxuXHRib3hWUjogJ1xcdTI1NjAnLFxuXHRib3hWcjogJ1xcdTI1NUYnLFxuXHRib3h2UjogJ1xcdTI1NUUnLFxuXHRib3h2cjogJ1xcdTI1MUMnLFxuXHRicHJpbWU6ICdcXHUyMDM1Jyxcblx0QnJldmU6ICdcXHUwMkQ4Jyxcblx0YnJldmU6ICdcXHUwMkQ4Jyxcblx0YnJ2YmFyOiAnXFx1MDBBNicsXG5cdEJzY3I6ICdcXHUyMTJDJyxcblx0YnNjcjogJ1xcdUQ4MzVcXHVEQ0I3Jyxcblx0YnNlbWk6ICdcXHUyMDRGJyxcblx0YnNpbTogJ1xcdTIyM0QnLFxuXHRic2ltZTogJ1xcdTIyQ0QnLFxuXHRic29sOiAnXFx1MDA1QycsXG5cdGJzb2xiOiAnXFx1MjlDNScsXG5cdGJzb2xoc3ViOiAnXFx1MjdDOCcsXG5cdGJ1bGw6ICdcXHUyMDIyJyxcblx0YnVsbGV0OiAnXFx1MjAyMicsXG5cdGJ1bXA6ICdcXHUyMjRFJyxcblx0YnVtcEU6ICdcXHUyQUFFJyxcblx0YnVtcGU6ICdcXHUyMjRGJyxcblx0QnVtcGVxOiAnXFx1MjI0RScsXG5cdGJ1bXBlcTogJ1xcdTIyNEYnLFxuXHRDYWN1dGU6ICdcXHUwMTA2Jyxcblx0Y2FjdXRlOiAnXFx1MDEwNycsXG5cdENhcDogJ1xcdTIyRDInLFxuXHRjYXA6ICdcXHUyMjI5Jyxcblx0Y2FwYW5kOiAnXFx1MkE0NCcsXG5cdGNhcGJyY3VwOiAnXFx1MkE0OScsXG5cdGNhcGNhcDogJ1xcdTJBNEInLFxuXHRjYXBjdXA6ICdcXHUyQTQ3Jyxcblx0Y2FwZG90OiAnXFx1MkE0MCcsXG5cdENhcGl0YWxEaWZmZXJlbnRpYWxEOiAnXFx1MjE0NScsXG5cdGNhcHM6ICdcXHUyMjI5XFx1RkUwMCcsXG5cdGNhcmV0OiAnXFx1MjA0MScsXG5cdGNhcm9uOiAnXFx1MDJDNycsXG5cdENheWxleXM6ICdcXHUyMTJEJyxcblx0Y2NhcHM6ICdcXHUyQTREJyxcblx0Q2Nhcm9uOiAnXFx1MDEwQycsXG5cdGNjYXJvbjogJ1xcdTAxMEQnLFxuXHRDY2VkaWw6ICdcXHUwMEM3Jyxcblx0Y2NlZGlsOiAnXFx1MDBFNycsXG5cdENjaXJjOiAnXFx1MDEwOCcsXG5cdGNjaXJjOiAnXFx1MDEwOScsXG5cdENjb25pbnQ6ICdcXHUyMjMwJyxcblx0Y2N1cHM6ICdcXHUyQTRDJyxcblx0Y2N1cHNzbTogJ1xcdTJBNTAnLFxuXHRDZG90OiAnXFx1MDEwQScsXG5cdGNkb3Q6ICdcXHUwMTBCJyxcblx0Y2VkaWw6ICdcXHUwMEI4Jyxcblx0Q2VkaWxsYTogJ1xcdTAwQjgnLFxuXHRjZW1wdHl2OiAnXFx1MjlCMicsXG5cdGNlbnQ6ICdcXHUwMEEyJyxcblx0Q2VudGVyRG90OiAnXFx1MDBCNycsXG5cdGNlbnRlcmRvdDogJ1xcdTAwQjcnLFxuXHRDZnI6ICdcXHUyMTJEJyxcblx0Y2ZyOiAnXFx1RDgzNVxcdUREMjAnLFxuXHRDSGN5OiAnXFx1MDQyNycsXG5cdGNoY3k6ICdcXHUwNDQ3Jyxcblx0Y2hlY2s6ICdcXHUyNzEzJyxcblx0Y2hlY2ttYXJrOiAnXFx1MjcxMycsXG5cdENoaTogJ1xcdTAzQTcnLFxuXHRjaGk6ICdcXHUwM0M3Jyxcblx0Y2lyOiAnXFx1MjVDQicsXG5cdGNpcmM6ICdcXHUwMkM2Jyxcblx0Y2lyY2VxOiAnXFx1MjI1NycsXG5cdGNpcmNsZWFycm93bGVmdDogJ1xcdTIxQkEnLFxuXHRjaXJjbGVhcnJvd3JpZ2h0OiAnXFx1MjFCQicsXG5cdGNpcmNsZWRhc3Q6ICdcXHUyMjlCJyxcblx0Y2lyY2xlZGNpcmM6ICdcXHUyMjlBJyxcblx0Y2lyY2xlZGRhc2g6ICdcXHUyMjlEJyxcblx0Q2lyY2xlRG90OiAnXFx1MjI5OScsXG5cdGNpcmNsZWRSOiAnXFx1MDBBRScsXG5cdGNpcmNsZWRTOiAnXFx1MjRDOCcsXG5cdENpcmNsZU1pbnVzOiAnXFx1MjI5NicsXG5cdENpcmNsZVBsdXM6ICdcXHUyMjk1Jyxcblx0Q2lyY2xlVGltZXM6ICdcXHUyMjk3Jyxcblx0Y2lyRTogJ1xcdTI5QzMnLFxuXHRjaXJlOiAnXFx1MjI1NycsXG5cdGNpcmZuaW50OiAnXFx1MkExMCcsXG5cdGNpcm1pZDogJ1xcdTJBRUYnLFxuXHRjaXJzY2lyOiAnXFx1MjlDMicsXG5cdENsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbDogJ1xcdTIyMzInLFxuXHRDbG9zZUN1cmx5RG91YmxlUXVvdGU6ICdcXHUyMDFEJyxcblx0Q2xvc2VDdXJseVF1b3RlOiAnXFx1MjAxOScsXG5cdGNsdWJzOiAnXFx1MjY2MycsXG5cdGNsdWJzdWl0OiAnXFx1MjY2MycsXG5cdENvbG9uOiAnXFx1MjIzNycsXG5cdGNvbG9uOiAnXFx1MDAzQScsXG5cdENvbG9uZTogJ1xcdTJBNzQnLFxuXHRjb2xvbmU6ICdcXHUyMjU0Jyxcblx0Y29sb25lcTogJ1xcdTIyNTQnLFxuXHRjb21tYTogJ1xcdTAwMkMnLFxuXHRjb21tYXQ6ICdcXHUwMDQwJyxcblx0Y29tcDogJ1xcdTIyMDEnLFxuXHRjb21wZm46ICdcXHUyMjE4Jyxcblx0Y29tcGxlbWVudDogJ1xcdTIyMDEnLFxuXHRjb21wbGV4ZXM6ICdcXHUyMTAyJyxcblx0Y29uZzogJ1xcdTIyNDUnLFxuXHRjb25nZG90OiAnXFx1MkE2RCcsXG5cdENvbmdydWVudDogJ1xcdTIyNjEnLFxuXHRDb25pbnQ6ICdcXHUyMjJGJyxcblx0Y29uaW50OiAnXFx1MjIyRScsXG5cdENvbnRvdXJJbnRlZ3JhbDogJ1xcdTIyMkUnLFxuXHRDb3BmOiAnXFx1MjEwMicsXG5cdGNvcGY6ICdcXHVEODM1XFx1REQ1NCcsXG5cdGNvcHJvZDogJ1xcdTIyMTAnLFxuXHRDb3Byb2R1Y3Q6ICdcXHUyMjEwJyxcblx0Q09QWTogJ1xcdTAwQTknLFxuXHRjb3B5OiAnXFx1MDBBOScsXG5cdGNvcHlzcjogJ1xcdTIxMTcnLFxuXHRDb3VudGVyQ2xvY2t3aXNlQ29udG91ckludGVncmFsOiAnXFx1MjIzMycsXG5cdGNyYXJyOiAnXFx1MjFCNScsXG5cdENyb3NzOiAnXFx1MkEyRicsXG5cdGNyb3NzOiAnXFx1MjcxNycsXG5cdENzY3I6ICdcXHVEODM1XFx1REM5RScsXG5cdGNzY3I6ICdcXHVEODM1XFx1RENCOCcsXG5cdGNzdWI6ICdcXHUyQUNGJyxcblx0Y3N1YmU6ICdcXHUyQUQxJyxcblx0Y3N1cDogJ1xcdTJBRDAnLFxuXHRjc3VwZTogJ1xcdTJBRDInLFxuXHRjdGRvdDogJ1xcdTIyRUYnLFxuXHRjdWRhcnJsOiAnXFx1MjkzOCcsXG5cdGN1ZGFycnI6ICdcXHUyOTM1Jyxcblx0Y3VlcHI6ICdcXHUyMkRFJyxcblx0Y3Vlc2M6ICdcXHUyMkRGJyxcblx0Y3VsYXJyOiAnXFx1MjFCNicsXG5cdGN1bGFycnA6ICdcXHUyOTNEJyxcblx0Q3VwOiAnXFx1MjJEMycsXG5cdGN1cDogJ1xcdTIyMkEnLFxuXHRjdXBicmNhcDogJ1xcdTJBNDgnLFxuXHRDdXBDYXA6ICdcXHUyMjREJyxcblx0Y3VwY2FwOiAnXFx1MkE0NicsXG5cdGN1cGN1cDogJ1xcdTJBNEEnLFxuXHRjdXBkb3Q6ICdcXHUyMjhEJyxcblx0Y3Vwb3I6ICdcXHUyQTQ1Jyxcblx0Y3VwczogJ1xcdTIyMkFcXHVGRTAwJyxcblx0Y3VyYXJyOiAnXFx1MjFCNycsXG5cdGN1cmFycm06ICdcXHUyOTNDJyxcblx0Y3VybHllcXByZWM6ICdcXHUyMkRFJyxcblx0Y3VybHllcXN1Y2M6ICdcXHUyMkRGJyxcblx0Y3VybHl2ZWU6ICdcXHUyMkNFJyxcblx0Y3VybHl3ZWRnZTogJ1xcdTIyQ0YnLFxuXHRjdXJyZW46ICdcXHUwMEE0Jyxcblx0Y3VydmVhcnJvd2xlZnQ6ICdcXHUyMUI2Jyxcblx0Y3VydmVhcnJvd3JpZ2h0OiAnXFx1MjFCNycsXG5cdGN1dmVlOiAnXFx1MjJDRScsXG5cdGN1d2VkOiAnXFx1MjJDRicsXG5cdGN3Y29uaW50OiAnXFx1MjIzMicsXG5cdGN3aW50OiAnXFx1MjIzMScsXG5cdGN5bGN0eTogJ1xcdTIzMkQnLFxuXHREYWdnZXI6ICdcXHUyMDIxJyxcblx0ZGFnZ2VyOiAnXFx1MjAyMCcsXG5cdGRhbGV0aDogJ1xcdTIxMzgnLFxuXHREYXJyOiAnXFx1MjFBMScsXG5cdGRBcnI6ICdcXHUyMUQzJyxcblx0ZGFycjogJ1xcdTIxOTMnLFxuXHRkYXNoOiAnXFx1MjAxMCcsXG5cdERhc2h2OiAnXFx1MkFFNCcsXG5cdGRhc2h2OiAnXFx1MjJBMycsXG5cdGRia2Fyb3c6ICdcXHUyOTBGJyxcblx0ZGJsYWM6ICdcXHUwMkREJyxcblx0RGNhcm9uOiAnXFx1MDEwRScsXG5cdGRjYXJvbjogJ1xcdTAxMEYnLFxuXHREY3k6ICdcXHUwNDE0Jyxcblx0ZGN5OiAnXFx1MDQzNCcsXG5cdEREOiAnXFx1MjE0NScsXG5cdGRkOiAnXFx1MjE0NicsXG5cdGRkYWdnZXI6ICdcXHUyMDIxJyxcblx0ZGRhcnI6ICdcXHUyMUNBJyxcblx0RERvdHJhaGQ6ICdcXHUyOTExJyxcblx0ZGRvdHNlcTogJ1xcdTJBNzcnLFxuXHRkZWc6ICdcXHUwMEIwJyxcblx0RGVsOiAnXFx1MjIwNycsXG5cdERlbHRhOiAnXFx1MDM5NCcsXG5cdGRlbHRhOiAnXFx1MDNCNCcsXG5cdGRlbXB0eXY6ICdcXHUyOUIxJyxcblx0ZGZpc2h0OiAnXFx1Mjk3RicsXG5cdERmcjogJ1xcdUQ4MzVcXHVERDA3Jyxcblx0ZGZyOiAnXFx1RDgzNVxcdUREMjEnLFxuXHRkSGFyOiAnXFx1Mjk2NScsXG5cdGRoYXJsOiAnXFx1MjFDMycsXG5cdGRoYXJyOiAnXFx1MjFDMicsXG5cdERpYWNyaXRpY2FsQWN1dGU6ICdcXHUwMEI0Jyxcblx0RGlhY3JpdGljYWxEb3Q6ICdcXHUwMkQ5Jyxcblx0RGlhY3JpdGljYWxEb3VibGVBY3V0ZTogJ1xcdTAyREQnLFxuXHREaWFjcml0aWNhbEdyYXZlOiAnXFx1MDA2MCcsXG5cdERpYWNyaXRpY2FsVGlsZGU6ICdcXHUwMkRDJyxcblx0ZGlhbTogJ1xcdTIyQzQnLFxuXHREaWFtb25kOiAnXFx1MjJDNCcsXG5cdGRpYW1vbmQ6ICdcXHUyMkM0Jyxcblx0ZGlhbW9uZHN1aXQ6ICdcXHUyNjY2Jyxcblx0ZGlhbXM6ICdcXHUyNjY2Jyxcblx0ZGllOiAnXFx1MDBBOCcsXG5cdERpZmZlcmVudGlhbEQ6ICdcXHUyMTQ2Jyxcblx0ZGlnYW1tYTogJ1xcdTAzREQnLFxuXHRkaXNpbjogJ1xcdTIyRjInLFxuXHRkaXY6ICdcXHUwMEY3Jyxcblx0ZGl2aWRlOiAnXFx1MDBGNycsXG5cdGRpdmlkZW9udGltZXM6ICdcXHUyMkM3Jyxcblx0ZGl2b254OiAnXFx1MjJDNycsXG5cdERKY3k6ICdcXHUwNDAyJyxcblx0ZGpjeTogJ1xcdTA0NTInLFxuXHRkbGNvcm46ICdcXHUyMzFFJyxcblx0ZGxjcm9wOiAnXFx1MjMwRCcsXG5cdGRvbGxhcjogJ1xcdTAwMjQnLFxuXHREb3BmOiAnXFx1RDgzNVxcdUREM0InLFxuXHRkb3BmOiAnXFx1RDgzNVxcdURENTUnLFxuXHREb3Q6ICdcXHUwMEE4Jyxcblx0ZG90OiAnXFx1MDJEOScsXG5cdERvdERvdDogJ1xcdTIwREMnLFxuXHRkb3RlcTogJ1xcdTIyNTAnLFxuXHRkb3RlcWRvdDogJ1xcdTIyNTEnLFxuXHREb3RFcXVhbDogJ1xcdTIyNTAnLFxuXHRkb3RtaW51czogJ1xcdTIyMzgnLFxuXHRkb3RwbHVzOiAnXFx1MjIxNCcsXG5cdGRvdHNxdWFyZTogJ1xcdTIyQTEnLFxuXHRkb3VibGViYXJ3ZWRnZTogJ1xcdTIzMDYnLFxuXHREb3VibGVDb250b3VySW50ZWdyYWw6ICdcXHUyMjJGJyxcblx0RG91YmxlRG90OiAnXFx1MDBBOCcsXG5cdERvdWJsZURvd25BcnJvdzogJ1xcdTIxRDMnLFxuXHREb3VibGVMZWZ0QXJyb3c6ICdcXHUyMUQwJyxcblx0RG91YmxlTGVmdFJpZ2h0QXJyb3c6ICdcXHUyMUQ0Jyxcblx0RG91YmxlTGVmdFRlZTogJ1xcdTJBRTQnLFxuXHREb3VibGVMb25nTGVmdEFycm93OiAnXFx1MjdGOCcsXG5cdERvdWJsZUxvbmdMZWZ0UmlnaHRBcnJvdzogJ1xcdTI3RkEnLFxuXHREb3VibGVMb25nUmlnaHRBcnJvdzogJ1xcdTI3RjknLFxuXHREb3VibGVSaWdodEFycm93OiAnXFx1MjFEMicsXG5cdERvdWJsZVJpZ2h0VGVlOiAnXFx1MjJBOCcsXG5cdERvdWJsZVVwQXJyb3c6ICdcXHUyMUQxJyxcblx0RG91YmxlVXBEb3duQXJyb3c6ICdcXHUyMUQ1Jyxcblx0RG91YmxlVmVydGljYWxCYXI6ICdcXHUyMjI1Jyxcblx0RG93bkFycm93OiAnXFx1MjE5MycsXG5cdERvd25hcnJvdzogJ1xcdTIxRDMnLFxuXHRkb3duYXJyb3c6ICdcXHUyMTkzJyxcblx0RG93bkFycm93QmFyOiAnXFx1MjkxMycsXG5cdERvd25BcnJvd1VwQXJyb3c6ICdcXHUyMUY1Jyxcblx0RG93bkJyZXZlOiAnXFx1MDMxMScsXG5cdGRvd25kb3duYXJyb3dzOiAnXFx1MjFDQScsXG5cdGRvd25oYXJwb29ubGVmdDogJ1xcdTIxQzMnLFxuXHRkb3duaGFycG9vbnJpZ2h0OiAnXFx1MjFDMicsXG5cdERvd25MZWZ0UmlnaHRWZWN0b3I6ICdcXHUyOTUwJyxcblx0RG93bkxlZnRUZWVWZWN0b3I6ICdcXHUyOTVFJyxcblx0RG93bkxlZnRWZWN0b3I6ICdcXHUyMUJEJyxcblx0RG93bkxlZnRWZWN0b3JCYXI6ICdcXHUyOTU2Jyxcblx0RG93blJpZ2h0VGVlVmVjdG9yOiAnXFx1Mjk1RicsXG5cdERvd25SaWdodFZlY3RvcjogJ1xcdTIxQzEnLFxuXHREb3duUmlnaHRWZWN0b3JCYXI6ICdcXHUyOTU3Jyxcblx0RG93blRlZTogJ1xcdTIyQTQnLFxuXHREb3duVGVlQXJyb3c6ICdcXHUyMUE3Jyxcblx0ZHJia2Fyb3c6ICdcXHUyOTEwJyxcblx0ZHJjb3JuOiAnXFx1MjMxRicsXG5cdGRyY3JvcDogJ1xcdTIzMEMnLFxuXHREc2NyOiAnXFx1RDgzNVxcdURDOUYnLFxuXHRkc2NyOiAnXFx1RDgzNVxcdURDQjknLFxuXHREU2N5OiAnXFx1MDQwNScsXG5cdGRzY3k6ICdcXHUwNDU1Jyxcblx0ZHNvbDogJ1xcdTI5RjYnLFxuXHREc3Ryb2s6ICdcXHUwMTEwJyxcblx0ZHN0cm9rOiAnXFx1MDExMScsXG5cdGR0ZG90OiAnXFx1MjJGMScsXG5cdGR0cmk6ICdcXHUyNUJGJyxcblx0ZHRyaWY6ICdcXHUyNUJFJyxcblx0ZHVhcnI6ICdcXHUyMUY1Jyxcblx0ZHVoYXI6ICdcXHUyOTZGJyxcblx0ZHdhbmdsZTogJ1xcdTI5QTYnLFxuXHREWmN5OiAnXFx1MDQwRicsXG5cdGR6Y3k6ICdcXHUwNDVGJyxcblx0ZHppZ3JhcnI6ICdcXHUyN0ZGJyxcblx0RWFjdXRlOiAnXFx1MDBDOScsXG5cdGVhY3V0ZTogJ1xcdTAwRTknLFxuXHRlYXN0ZXI6ICdcXHUyQTZFJyxcblx0RWNhcm9uOiAnXFx1MDExQScsXG5cdGVjYXJvbjogJ1xcdTAxMUInLFxuXHRlY2lyOiAnXFx1MjI1NicsXG5cdEVjaXJjOiAnXFx1MDBDQScsXG5cdGVjaXJjOiAnXFx1MDBFQScsXG5cdGVjb2xvbjogJ1xcdTIyNTUnLFxuXHRFY3k6ICdcXHUwNDJEJyxcblx0ZWN5OiAnXFx1MDQ0RCcsXG5cdGVERG90OiAnXFx1MkE3NycsXG5cdEVkb3Q6ICdcXHUwMTE2Jyxcblx0ZURvdDogJ1xcdTIyNTEnLFxuXHRlZG90OiAnXFx1MDExNycsXG5cdGVlOiAnXFx1MjE0NycsXG5cdGVmRG90OiAnXFx1MjI1MicsXG5cdEVmcjogJ1xcdUQ4MzVcXHVERDA4Jyxcblx0ZWZyOiAnXFx1RDgzNVxcdUREMjInLFxuXHRlZzogJ1xcdTJBOUEnLFxuXHRFZ3JhdmU6ICdcXHUwMEM4Jyxcblx0ZWdyYXZlOiAnXFx1MDBFOCcsXG5cdGVnczogJ1xcdTJBOTYnLFxuXHRlZ3Nkb3Q6ICdcXHUyQTk4Jyxcblx0ZWw6ICdcXHUyQTk5Jyxcblx0RWxlbWVudDogJ1xcdTIyMDgnLFxuXHRlbGludGVyczogJ1xcdTIzRTcnLFxuXHRlbGw6ICdcXHUyMTEzJyxcblx0ZWxzOiAnXFx1MkE5NScsXG5cdGVsc2RvdDogJ1xcdTJBOTcnLFxuXHRFbWFjcjogJ1xcdTAxMTInLFxuXHRlbWFjcjogJ1xcdTAxMTMnLFxuXHRlbXB0eTogJ1xcdTIyMDUnLFxuXHRlbXB0eXNldDogJ1xcdTIyMDUnLFxuXHRFbXB0eVNtYWxsU3F1YXJlOiAnXFx1MjVGQicsXG5cdGVtcHR5djogJ1xcdTIyMDUnLFxuXHRFbXB0eVZlcnlTbWFsbFNxdWFyZTogJ1xcdTI1QUInLFxuXHRlbXNwOiAnXFx1MjAwMycsXG5cdGVtc3AxMzogJ1xcdTIwMDQnLFxuXHRlbXNwMTQ6ICdcXHUyMDA1Jyxcblx0RU5HOiAnXFx1MDE0QScsXG5cdGVuZzogJ1xcdTAxNEInLFxuXHRlbnNwOiAnXFx1MjAwMicsXG5cdEVvZ29uOiAnXFx1MDExOCcsXG5cdGVvZ29uOiAnXFx1MDExOScsXG5cdEVvcGY6ICdcXHVEODM1XFx1REQzQycsXG5cdGVvcGY6ICdcXHVEODM1XFx1REQ1NicsXG5cdGVwYXI6ICdcXHUyMkQ1Jyxcblx0ZXBhcnNsOiAnXFx1MjlFMycsXG5cdGVwbHVzOiAnXFx1MkE3MScsXG5cdGVwc2k6ICdcXHUwM0I1Jyxcblx0RXBzaWxvbjogJ1xcdTAzOTUnLFxuXHRlcHNpbG9uOiAnXFx1MDNCNScsXG5cdGVwc2l2OiAnXFx1MDNGNScsXG5cdGVxY2lyYzogJ1xcdTIyNTYnLFxuXHRlcWNvbG9uOiAnXFx1MjI1NScsXG5cdGVxc2ltOiAnXFx1MjI0MicsXG5cdGVxc2xhbnRndHI6ICdcXHUyQTk2Jyxcblx0ZXFzbGFudGxlc3M6ICdcXHUyQTk1Jyxcblx0RXF1YWw6ICdcXHUyQTc1Jyxcblx0ZXF1YWxzOiAnXFx1MDAzRCcsXG5cdEVxdWFsVGlsZGU6ICdcXHUyMjQyJyxcblx0ZXF1ZXN0OiAnXFx1MjI1RicsXG5cdEVxdWlsaWJyaXVtOiAnXFx1MjFDQycsXG5cdGVxdWl2OiAnXFx1MjI2MScsXG5cdGVxdWl2REQ6ICdcXHUyQTc4Jyxcblx0ZXF2cGFyc2w6ICdcXHUyOUU1Jyxcblx0ZXJhcnI6ICdcXHUyOTcxJyxcblx0ZXJEb3Q6ICdcXHUyMjUzJyxcblx0RXNjcjogJ1xcdTIxMzAnLFxuXHRlc2NyOiAnXFx1MjEyRicsXG5cdGVzZG90OiAnXFx1MjI1MCcsXG5cdEVzaW06ICdcXHUyQTczJyxcblx0ZXNpbTogJ1xcdTIyNDInLFxuXHRFdGE6ICdcXHUwMzk3Jyxcblx0ZXRhOiAnXFx1MDNCNycsXG5cdEVUSDogJ1xcdTAwRDAnLFxuXHRldGg6ICdcXHUwMEYwJyxcblx0RXVtbDogJ1xcdTAwQ0InLFxuXHRldW1sOiAnXFx1MDBFQicsXG5cdGV1cm86ICdcXHUyMEFDJyxcblx0ZXhjbDogJ1xcdTAwMjEnLFxuXHRleGlzdDogJ1xcdTIyMDMnLFxuXHRFeGlzdHM6ICdcXHUyMjAzJyxcblx0ZXhwZWN0YXRpb246ICdcXHUyMTMwJyxcblx0RXhwb25lbnRpYWxFOiAnXFx1MjE0NycsXG5cdGV4cG9uZW50aWFsZTogJ1xcdTIxNDcnLFxuXHRmYWxsaW5nZG90c2VxOiAnXFx1MjI1MicsXG5cdEZjeTogJ1xcdTA0MjQnLFxuXHRmY3k6ICdcXHUwNDQ0Jyxcblx0ZmVtYWxlOiAnXFx1MjY0MCcsXG5cdGZmaWxpZzogJ1xcdUZCMDMnLFxuXHRmZmxpZzogJ1xcdUZCMDAnLFxuXHRmZmxsaWc6ICdcXHVGQjA0Jyxcblx0RmZyOiAnXFx1RDgzNVxcdUREMDknLFxuXHRmZnI6ICdcXHVEODM1XFx1REQyMycsXG5cdGZpbGlnOiAnXFx1RkIwMScsXG5cdEZpbGxlZFNtYWxsU3F1YXJlOiAnXFx1MjVGQycsXG5cdEZpbGxlZFZlcnlTbWFsbFNxdWFyZTogJ1xcdTI1QUEnLFxuXHRmamxpZzogJ1xcdTAwNjZcXHUwMDZBJyxcblx0ZmxhdDogJ1xcdTI2NkQnLFxuXHRmbGxpZzogJ1xcdUZCMDInLFxuXHRmbHRuczogJ1xcdTI1QjEnLFxuXHRmbm9mOiAnXFx1MDE5MicsXG5cdEZvcGY6ICdcXHVEODM1XFx1REQzRCcsXG5cdGZvcGY6ICdcXHVEODM1XFx1REQ1NycsXG5cdEZvckFsbDogJ1xcdTIyMDAnLFxuXHRmb3JhbGw6ICdcXHUyMjAwJyxcblx0Zm9yazogJ1xcdTIyRDQnLFxuXHRmb3JrdjogJ1xcdTJBRDknLFxuXHRGb3VyaWVydHJmOiAnXFx1MjEzMScsXG5cdGZwYXJ0aW50OiAnXFx1MkEwRCcsXG5cdGZyYWMxMjogJ1xcdTAwQkQnLFxuXHRmcmFjMTM6ICdcXHUyMTUzJyxcblx0ZnJhYzE0OiAnXFx1MDBCQycsXG5cdGZyYWMxNTogJ1xcdTIxNTUnLFxuXHRmcmFjMTY6ICdcXHUyMTU5Jyxcblx0ZnJhYzE4OiAnXFx1MjE1QicsXG5cdGZyYWMyMzogJ1xcdTIxNTQnLFxuXHRmcmFjMjU6ICdcXHUyMTU2Jyxcblx0ZnJhYzM0OiAnXFx1MDBCRScsXG5cdGZyYWMzNTogJ1xcdTIxNTcnLFxuXHRmcmFjMzg6ICdcXHUyMTVDJyxcblx0ZnJhYzQ1OiAnXFx1MjE1OCcsXG5cdGZyYWM1NjogJ1xcdTIxNUEnLFxuXHRmcmFjNTg6ICdcXHUyMTVEJyxcblx0ZnJhYzc4OiAnXFx1MjE1RScsXG5cdGZyYXNsOiAnXFx1MjA0NCcsXG5cdGZyb3duOiAnXFx1MjMyMicsXG5cdEZzY3I6ICdcXHUyMTMxJyxcblx0ZnNjcjogJ1xcdUQ4MzVcXHVEQ0JCJyxcblx0Z2FjdXRlOiAnXFx1MDFGNScsXG5cdEdhbW1hOiAnXFx1MDM5MycsXG5cdGdhbW1hOiAnXFx1MDNCMycsXG5cdEdhbW1hZDogJ1xcdTAzREMnLFxuXHRnYW1tYWQ6ICdcXHUwM0REJyxcblx0Z2FwOiAnXFx1MkE4NicsXG5cdEdicmV2ZTogJ1xcdTAxMUUnLFxuXHRnYnJldmU6ICdcXHUwMTFGJyxcblx0R2NlZGlsOiAnXFx1MDEyMicsXG5cdEdjaXJjOiAnXFx1MDExQycsXG5cdGdjaXJjOiAnXFx1MDExRCcsXG5cdEdjeTogJ1xcdTA0MTMnLFxuXHRnY3k6ICdcXHUwNDMzJyxcblx0R2RvdDogJ1xcdTAxMjAnLFxuXHRnZG90OiAnXFx1MDEyMScsXG5cdGdFOiAnXFx1MjI2NycsXG5cdGdlOiAnXFx1MjI2NScsXG5cdGdFbDogJ1xcdTJBOEMnLFxuXHRnZWw6ICdcXHUyMkRCJyxcblx0Z2VxOiAnXFx1MjI2NScsXG5cdGdlcXE6ICdcXHUyMjY3Jyxcblx0Z2Vxc2xhbnQ6ICdcXHUyQTdFJyxcblx0Z2VzOiAnXFx1MkE3RScsXG5cdGdlc2NjOiAnXFx1MkFBOScsXG5cdGdlc2RvdDogJ1xcdTJBODAnLFxuXHRnZXNkb3RvOiAnXFx1MkE4MicsXG5cdGdlc2RvdG9sOiAnXFx1MkE4NCcsXG5cdGdlc2w6ICdcXHUyMkRCXFx1RkUwMCcsXG5cdGdlc2xlczogJ1xcdTJBOTQnLFxuXHRHZnI6ICdcXHVEODM1XFx1REQwQScsXG5cdGdmcjogJ1xcdUQ4MzVcXHVERDI0Jyxcblx0R2c6ICdcXHUyMkQ5Jyxcblx0Z2c6ICdcXHUyMjZCJyxcblx0Z2dnOiAnXFx1MjJEOScsXG5cdGdpbWVsOiAnXFx1MjEzNycsXG5cdEdKY3k6ICdcXHUwNDAzJyxcblx0Z2pjeTogJ1xcdTA0NTMnLFxuXHRnbDogJ1xcdTIyNzcnLFxuXHRnbGE6ICdcXHUyQUE1Jyxcblx0Z2xFOiAnXFx1MkE5MicsXG5cdGdsajogJ1xcdTJBQTQnLFxuXHRnbmFwOiAnXFx1MkE4QScsXG5cdGduYXBwcm94OiAnXFx1MkE4QScsXG5cdGduRTogJ1xcdTIyNjknLFxuXHRnbmU6ICdcXHUyQTg4Jyxcblx0Z25lcTogJ1xcdTJBODgnLFxuXHRnbmVxcTogJ1xcdTIyNjknLFxuXHRnbnNpbTogJ1xcdTIyRTcnLFxuXHRHb3BmOiAnXFx1RDgzNVxcdUREM0UnLFxuXHRnb3BmOiAnXFx1RDgzNVxcdURENTgnLFxuXHRncmF2ZTogJ1xcdTAwNjAnLFxuXHRHcmVhdGVyRXF1YWw6ICdcXHUyMjY1Jyxcblx0R3JlYXRlckVxdWFsTGVzczogJ1xcdTIyREInLFxuXHRHcmVhdGVyRnVsbEVxdWFsOiAnXFx1MjI2NycsXG5cdEdyZWF0ZXJHcmVhdGVyOiAnXFx1MkFBMicsXG5cdEdyZWF0ZXJMZXNzOiAnXFx1MjI3NycsXG5cdEdyZWF0ZXJTbGFudEVxdWFsOiAnXFx1MkE3RScsXG5cdEdyZWF0ZXJUaWxkZTogJ1xcdTIyNzMnLFxuXHRHc2NyOiAnXFx1RDgzNVxcdURDQTInLFxuXHRnc2NyOiAnXFx1MjEwQScsXG5cdGdzaW06ICdcXHUyMjczJyxcblx0Z3NpbWU6ICdcXHUyQThFJyxcblx0Z3NpbWw6ICdcXHUyQTkwJyxcblx0R3Q6ICdcXHUyMjZCJyxcblx0R1Q6ICdcXHUwMDNFJyxcblx0Z3Q6ICdcXHUwMDNFJyxcblx0Z3RjYzogJ1xcdTJBQTcnLFxuXHRndGNpcjogJ1xcdTJBN0EnLFxuXHRndGRvdDogJ1xcdTIyRDcnLFxuXHRndGxQYXI6ICdcXHUyOTk1Jyxcblx0Z3RxdWVzdDogJ1xcdTJBN0MnLFxuXHRndHJhcHByb3g6ICdcXHUyQTg2Jyxcblx0Z3RyYXJyOiAnXFx1Mjk3OCcsXG5cdGd0cmRvdDogJ1xcdTIyRDcnLFxuXHRndHJlcWxlc3M6ICdcXHUyMkRCJyxcblx0Z3RyZXFxbGVzczogJ1xcdTJBOEMnLFxuXHRndHJsZXNzOiAnXFx1MjI3NycsXG5cdGd0cnNpbTogJ1xcdTIyNzMnLFxuXHRndmVydG5lcXE6ICdcXHUyMjY5XFx1RkUwMCcsXG5cdGd2bkU6ICdcXHUyMjY5XFx1RkUwMCcsXG5cdEhhY2VrOiAnXFx1MDJDNycsXG5cdGhhaXJzcDogJ1xcdTIwMEEnLFxuXHRoYWxmOiAnXFx1MDBCRCcsXG5cdGhhbWlsdDogJ1xcdTIxMEInLFxuXHRIQVJEY3k6ICdcXHUwNDJBJyxcblx0aGFyZGN5OiAnXFx1MDQ0QScsXG5cdGhBcnI6ICdcXHUyMUQ0Jyxcblx0aGFycjogJ1xcdTIxOTQnLFxuXHRoYXJyY2lyOiAnXFx1Mjk0OCcsXG5cdGhhcnJ3OiAnXFx1MjFBRCcsXG5cdEhhdDogJ1xcdTAwNUUnLFxuXHRoYmFyOiAnXFx1MjEwRicsXG5cdEhjaXJjOiAnXFx1MDEyNCcsXG5cdGhjaXJjOiAnXFx1MDEyNScsXG5cdGhlYXJ0czogJ1xcdTI2NjUnLFxuXHRoZWFydHN1aXQ6ICdcXHUyNjY1Jyxcblx0aGVsbGlwOiAnXFx1MjAyNicsXG5cdGhlcmNvbjogJ1xcdTIyQjknLFxuXHRIZnI6ICdcXHUyMTBDJyxcblx0aGZyOiAnXFx1RDgzNVxcdUREMjUnLFxuXHRIaWxiZXJ0U3BhY2U6ICdcXHUyMTBCJyxcblx0aGtzZWFyb3c6ICdcXHUyOTI1Jyxcblx0aGtzd2Fyb3c6ICdcXHUyOTI2Jyxcblx0aG9hcnI6ICdcXHUyMUZGJyxcblx0aG9tdGh0OiAnXFx1MjIzQicsXG5cdGhvb2tsZWZ0YXJyb3c6ICdcXHUyMUE5Jyxcblx0aG9va3JpZ2h0YXJyb3c6ICdcXHUyMUFBJyxcblx0SG9wZjogJ1xcdTIxMEQnLFxuXHRob3BmOiAnXFx1RDgzNVxcdURENTknLFxuXHRob3JiYXI6ICdcXHUyMDE1Jyxcblx0SG9yaXpvbnRhbExpbmU6ICdcXHUyNTAwJyxcblx0SHNjcjogJ1xcdTIxMEInLFxuXHRoc2NyOiAnXFx1RDgzNVxcdURDQkQnLFxuXHRoc2xhc2g6ICdcXHUyMTBGJyxcblx0SHN0cm9rOiAnXFx1MDEyNicsXG5cdGhzdHJvazogJ1xcdTAxMjcnLFxuXHRIdW1wRG93bkh1bXA6ICdcXHUyMjRFJyxcblx0SHVtcEVxdWFsOiAnXFx1MjI0RicsXG5cdGh5YnVsbDogJ1xcdTIwNDMnLFxuXHRoeXBoZW46ICdcXHUyMDEwJyxcblx0SWFjdXRlOiAnXFx1MDBDRCcsXG5cdGlhY3V0ZTogJ1xcdTAwRUQnLFxuXHRpYzogJ1xcdTIwNjMnLFxuXHRJY2lyYzogJ1xcdTAwQ0UnLFxuXHRpY2lyYzogJ1xcdTAwRUUnLFxuXHRJY3k6ICdcXHUwNDE4Jyxcblx0aWN5OiAnXFx1MDQzOCcsXG5cdElkb3Q6ICdcXHUwMTMwJyxcblx0SUVjeTogJ1xcdTA0MTUnLFxuXHRpZWN5OiAnXFx1MDQzNScsXG5cdGlleGNsOiAnXFx1MDBBMScsXG5cdGlmZjogJ1xcdTIxRDQnLFxuXHRJZnI6ICdcXHUyMTExJyxcblx0aWZyOiAnXFx1RDgzNVxcdUREMjYnLFxuXHRJZ3JhdmU6ICdcXHUwMENDJyxcblx0aWdyYXZlOiAnXFx1MDBFQycsXG5cdGlpOiAnXFx1MjE0OCcsXG5cdGlpaWludDogJ1xcdTJBMEMnLFxuXHRpaWludDogJ1xcdTIyMkQnLFxuXHRpaW5maW46ICdcXHUyOURDJyxcblx0aWlvdGE6ICdcXHUyMTI5Jyxcblx0SUpsaWc6ICdcXHUwMTMyJyxcblx0aWpsaWc6ICdcXHUwMTMzJyxcblx0SW06ICdcXHUyMTExJyxcblx0SW1hY3I6ICdcXHUwMTJBJyxcblx0aW1hY3I6ICdcXHUwMTJCJyxcblx0aW1hZ2U6ICdcXHUyMTExJyxcblx0SW1hZ2luYXJ5STogJ1xcdTIxNDgnLFxuXHRpbWFnbGluZTogJ1xcdTIxMTAnLFxuXHRpbWFncGFydDogJ1xcdTIxMTEnLFxuXHRpbWF0aDogJ1xcdTAxMzEnLFxuXHRpbW9mOiAnXFx1MjJCNycsXG5cdGltcGVkOiAnXFx1MDFCNScsXG5cdEltcGxpZXM6ICdcXHUyMUQyJyxcblx0aW46ICdcXHUyMjA4Jyxcblx0aW5jYXJlOiAnXFx1MjEwNScsXG5cdGluZmluOiAnXFx1MjIxRScsXG5cdGluZmludGllOiAnXFx1MjlERCcsXG5cdGlub2RvdDogJ1xcdTAxMzEnLFxuXHRJbnQ6ICdcXHUyMjJDJyxcblx0aW50OiAnXFx1MjIyQicsXG5cdGludGNhbDogJ1xcdTIyQkEnLFxuXHRpbnRlZ2VyczogJ1xcdTIxMjQnLFxuXHRJbnRlZ3JhbDogJ1xcdTIyMkInLFxuXHRpbnRlcmNhbDogJ1xcdTIyQkEnLFxuXHRJbnRlcnNlY3Rpb246ICdcXHUyMkMyJyxcblx0aW50bGFyaGs6ICdcXHUyQTE3Jyxcblx0aW50cHJvZDogJ1xcdTJBM0MnLFxuXHRJbnZpc2libGVDb21tYTogJ1xcdTIwNjMnLFxuXHRJbnZpc2libGVUaW1lczogJ1xcdTIwNjInLFxuXHRJT2N5OiAnXFx1MDQwMScsXG5cdGlvY3k6ICdcXHUwNDUxJyxcblx0SW9nb246ICdcXHUwMTJFJyxcblx0aW9nb246ICdcXHUwMTJGJyxcblx0SW9wZjogJ1xcdUQ4MzVcXHVERDQwJyxcblx0aW9wZjogJ1xcdUQ4MzVcXHVERDVBJyxcblx0SW90YTogJ1xcdTAzOTknLFxuXHRpb3RhOiAnXFx1MDNCOScsXG5cdGlwcm9kOiAnXFx1MkEzQycsXG5cdGlxdWVzdDogJ1xcdTAwQkYnLFxuXHRJc2NyOiAnXFx1MjExMCcsXG5cdGlzY3I6ICdcXHVEODM1XFx1RENCRScsXG5cdGlzaW46ICdcXHUyMjA4Jyxcblx0aXNpbmRvdDogJ1xcdTIyRjUnLFxuXHRpc2luRTogJ1xcdTIyRjknLFxuXHRpc2luczogJ1xcdTIyRjQnLFxuXHRpc2luc3Y6ICdcXHUyMkYzJyxcblx0aXNpbnY6ICdcXHUyMjA4Jyxcblx0aXQ6ICdcXHUyMDYyJyxcblx0SXRpbGRlOiAnXFx1MDEyOCcsXG5cdGl0aWxkZTogJ1xcdTAxMjknLFxuXHRJdWtjeTogJ1xcdTA0MDYnLFxuXHRpdWtjeTogJ1xcdTA0NTYnLFxuXHRJdW1sOiAnXFx1MDBDRicsXG5cdGl1bWw6ICdcXHUwMEVGJyxcblx0SmNpcmM6ICdcXHUwMTM0Jyxcblx0amNpcmM6ICdcXHUwMTM1Jyxcblx0SmN5OiAnXFx1MDQxOScsXG5cdGpjeTogJ1xcdTA0MzknLFxuXHRKZnI6ICdcXHVEODM1XFx1REQwRCcsXG5cdGpmcjogJ1xcdUQ4MzVcXHVERDI3Jyxcblx0am1hdGg6ICdcXHUwMjM3Jyxcblx0Sm9wZjogJ1xcdUQ4MzVcXHVERDQxJyxcblx0am9wZjogJ1xcdUQ4MzVcXHVERDVCJyxcblx0SnNjcjogJ1xcdUQ4MzVcXHVEQ0E1Jyxcblx0anNjcjogJ1xcdUQ4MzVcXHVEQ0JGJyxcblx0SnNlcmN5OiAnXFx1MDQwOCcsXG5cdGpzZXJjeTogJ1xcdTA0NTgnLFxuXHRKdWtjeTogJ1xcdTA0MDQnLFxuXHRqdWtjeTogJ1xcdTA0NTQnLFxuXHRLYXBwYTogJ1xcdTAzOUEnLFxuXHRrYXBwYTogJ1xcdTAzQkEnLFxuXHRrYXBwYXY6ICdcXHUwM0YwJyxcblx0S2NlZGlsOiAnXFx1MDEzNicsXG5cdGtjZWRpbDogJ1xcdTAxMzcnLFxuXHRLY3k6ICdcXHUwNDFBJyxcblx0a2N5OiAnXFx1MDQzQScsXG5cdEtmcjogJ1xcdUQ4MzVcXHVERDBFJyxcblx0a2ZyOiAnXFx1RDgzNVxcdUREMjgnLFxuXHRrZ3JlZW46ICdcXHUwMTM4Jyxcblx0S0hjeTogJ1xcdTA0MjUnLFxuXHRraGN5OiAnXFx1MDQ0NScsXG5cdEtKY3k6ICdcXHUwNDBDJyxcblx0a2pjeTogJ1xcdTA0NUMnLFxuXHRLb3BmOiAnXFx1RDgzNVxcdURENDInLFxuXHRrb3BmOiAnXFx1RDgzNVxcdURENUMnLFxuXHRLc2NyOiAnXFx1RDgzNVxcdURDQTYnLFxuXHRrc2NyOiAnXFx1RDgzNVxcdURDQzAnLFxuXHRsQWFycjogJ1xcdTIxREEnLFxuXHRMYWN1dGU6ICdcXHUwMTM5Jyxcblx0bGFjdXRlOiAnXFx1MDEzQScsXG5cdGxhZW1wdHl2OiAnXFx1MjlCNCcsXG5cdGxhZ3JhbjogJ1xcdTIxMTInLFxuXHRMYW1iZGE6ICdcXHUwMzlCJyxcblx0bGFtYmRhOiAnXFx1MDNCQicsXG5cdExhbmc6ICdcXHUyN0VBJyxcblx0bGFuZzogJ1xcdTI3RTgnLFxuXHRsYW5nZDogJ1xcdTI5OTEnLFxuXHRsYW5nbGU6ICdcXHUyN0U4Jyxcblx0bGFwOiAnXFx1MkE4NScsXG5cdExhcGxhY2V0cmY6ICdcXHUyMTEyJyxcblx0bGFxdW86ICdcXHUwMEFCJyxcblx0TGFycjogJ1xcdTIxOUUnLFxuXHRsQXJyOiAnXFx1MjFEMCcsXG5cdGxhcnI6ICdcXHUyMTkwJyxcblx0bGFycmI6ICdcXHUyMUU0Jyxcblx0bGFycmJmczogJ1xcdTI5MUYnLFxuXHRsYXJyZnM6ICdcXHUyOTFEJyxcblx0bGFycmhrOiAnXFx1MjFBOScsXG5cdGxhcnJscDogJ1xcdTIxQUInLFxuXHRsYXJycGw6ICdcXHUyOTM5Jyxcblx0bGFycnNpbTogJ1xcdTI5NzMnLFxuXHRsYXJydGw6ICdcXHUyMUEyJyxcblx0bGF0OiAnXFx1MkFBQicsXG5cdGxBdGFpbDogJ1xcdTI5MUInLFxuXHRsYXRhaWw6ICdcXHUyOTE5Jyxcblx0bGF0ZTogJ1xcdTJBQUQnLFxuXHRsYXRlczogJ1xcdTJBQURcXHVGRTAwJyxcblx0bEJhcnI6ICdcXHUyOTBFJyxcblx0bGJhcnI6ICdcXHUyOTBDJyxcblx0bGJicms6ICdcXHUyNzcyJyxcblx0bGJyYWNlOiAnXFx1MDA3QicsXG5cdGxicmFjazogJ1xcdTAwNUInLFxuXHRsYnJrZTogJ1xcdTI5OEInLFxuXHRsYnJrc2xkOiAnXFx1Mjk4RicsXG5cdGxicmtzbHU6ICdcXHUyOThEJyxcblx0TGNhcm9uOiAnXFx1MDEzRCcsXG5cdGxjYXJvbjogJ1xcdTAxM0UnLFxuXHRMY2VkaWw6ICdcXHUwMTNCJyxcblx0bGNlZGlsOiAnXFx1MDEzQycsXG5cdGxjZWlsOiAnXFx1MjMwOCcsXG5cdGxjdWI6ICdcXHUwMDdCJyxcblx0TGN5OiAnXFx1MDQxQicsXG5cdGxjeTogJ1xcdTA0M0InLFxuXHRsZGNhOiAnXFx1MjkzNicsXG5cdGxkcXVvOiAnXFx1MjAxQycsXG5cdGxkcXVvcjogJ1xcdTIwMUUnLFxuXHRsZHJkaGFyOiAnXFx1Mjk2NycsXG5cdGxkcnVzaGFyOiAnXFx1Mjk0QicsXG5cdGxkc2g6ICdcXHUyMUIyJyxcblx0bEU6ICdcXHUyMjY2Jyxcblx0bGU6ICdcXHUyMjY0Jyxcblx0TGVmdEFuZ2xlQnJhY2tldDogJ1xcdTI3RTgnLFxuXHRMZWZ0QXJyb3c6ICdcXHUyMTkwJyxcblx0TGVmdGFycm93OiAnXFx1MjFEMCcsXG5cdGxlZnRhcnJvdzogJ1xcdTIxOTAnLFxuXHRMZWZ0QXJyb3dCYXI6ICdcXHUyMUU0Jyxcblx0TGVmdEFycm93UmlnaHRBcnJvdzogJ1xcdTIxQzYnLFxuXHRsZWZ0YXJyb3d0YWlsOiAnXFx1MjFBMicsXG5cdExlZnRDZWlsaW5nOiAnXFx1MjMwOCcsXG5cdExlZnREb3VibGVCcmFja2V0OiAnXFx1MjdFNicsXG5cdExlZnREb3duVGVlVmVjdG9yOiAnXFx1Mjk2MScsXG5cdExlZnREb3duVmVjdG9yOiAnXFx1MjFDMycsXG5cdExlZnREb3duVmVjdG9yQmFyOiAnXFx1Mjk1OScsXG5cdExlZnRGbG9vcjogJ1xcdTIzMEEnLFxuXHRsZWZ0aGFycG9vbmRvd246ICdcXHUyMUJEJyxcblx0bGVmdGhhcnBvb251cDogJ1xcdTIxQkMnLFxuXHRsZWZ0bGVmdGFycm93czogJ1xcdTIxQzcnLFxuXHRMZWZ0UmlnaHRBcnJvdzogJ1xcdTIxOTQnLFxuXHRMZWZ0cmlnaHRhcnJvdzogJ1xcdTIxRDQnLFxuXHRsZWZ0cmlnaHRhcnJvdzogJ1xcdTIxOTQnLFxuXHRsZWZ0cmlnaHRhcnJvd3M6ICdcXHUyMUM2Jyxcblx0bGVmdHJpZ2h0aGFycG9vbnM6ICdcXHUyMUNCJyxcblx0bGVmdHJpZ2h0c3F1aWdhcnJvdzogJ1xcdTIxQUQnLFxuXHRMZWZ0UmlnaHRWZWN0b3I6ICdcXHUyOTRFJyxcblx0TGVmdFRlZTogJ1xcdTIyQTMnLFxuXHRMZWZ0VGVlQXJyb3c6ICdcXHUyMUE0Jyxcblx0TGVmdFRlZVZlY3RvcjogJ1xcdTI5NUEnLFxuXHRsZWZ0dGhyZWV0aW1lczogJ1xcdTIyQ0InLFxuXHRMZWZ0VHJpYW5nbGU6ICdcXHUyMkIyJyxcblx0TGVmdFRyaWFuZ2xlQmFyOiAnXFx1MjlDRicsXG5cdExlZnRUcmlhbmdsZUVxdWFsOiAnXFx1MjJCNCcsXG5cdExlZnRVcERvd25WZWN0b3I6ICdcXHUyOTUxJyxcblx0TGVmdFVwVGVlVmVjdG9yOiAnXFx1Mjk2MCcsXG5cdExlZnRVcFZlY3RvcjogJ1xcdTIxQkYnLFxuXHRMZWZ0VXBWZWN0b3JCYXI6ICdcXHUyOTU4Jyxcblx0TGVmdFZlY3RvcjogJ1xcdTIxQkMnLFxuXHRMZWZ0VmVjdG9yQmFyOiAnXFx1Mjk1MicsXG5cdGxFZzogJ1xcdTJBOEInLFxuXHRsZWc6ICdcXHUyMkRBJyxcblx0bGVxOiAnXFx1MjI2NCcsXG5cdGxlcXE6ICdcXHUyMjY2Jyxcblx0bGVxc2xhbnQ6ICdcXHUyQTdEJyxcblx0bGVzOiAnXFx1MkE3RCcsXG5cdGxlc2NjOiAnXFx1MkFBOCcsXG5cdGxlc2RvdDogJ1xcdTJBN0YnLFxuXHRsZXNkb3RvOiAnXFx1MkE4MScsXG5cdGxlc2RvdG9yOiAnXFx1MkE4MycsXG5cdGxlc2c6ICdcXHUyMkRBXFx1RkUwMCcsXG5cdGxlc2dlczogJ1xcdTJBOTMnLFxuXHRsZXNzYXBwcm94OiAnXFx1MkE4NScsXG5cdGxlc3Nkb3Q6ICdcXHUyMkQ2Jyxcblx0bGVzc2VxZ3RyOiAnXFx1MjJEQScsXG5cdGxlc3NlcXFndHI6ICdcXHUyQThCJyxcblx0TGVzc0VxdWFsR3JlYXRlcjogJ1xcdTIyREEnLFxuXHRMZXNzRnVsbEVxdWFsOiAnXFx1MjI2NicsXG5cdExlc3NHcmVhdGVyOiAnXFx1MjI3NicsXG5cdGxlc3NndHI6ICdcXHUyMjc2Jyxcblx0TGVzc0xlc3M6ICdcXHUyQUExJyxcblx0bGVzc3NpbTogJ1xcdTIyNzInLFxuXHRMZXNzU2xhbnRFcXVhbDogJ1xcdTJBN0QnLFxuXHRMZXNzVGlsZGU6ICdcXHUyMjcyJyxcblx0bGZpc2h0OiAnXFx1Mjk3QycsXG5cdGxmbG9vcjogJ1xcdTIzMEEnLFxuXHRMZnI6ICdcXHVEODM1XFx1REQwRicsXG5cdGxmcjogJ1xcdUQ4MzVcXHVERDI5Jyxcblx0bGc6ICdcXHUyMjc2Jyxcblx0bGdFOiAnXFx1MkE5MScsXG5cdGxIYXI6ICdcXHUyOTYyJyxcblx0bGhhcmQ6ICdcXHUyMUJEJyxcblx0bGhhcnU6ICdcXHUyMUJDJyxcblx0bGhhcnVsOiAnXFx1Mjk2QScsXG5cdGxoYmxrOiAnXFx1MjU4NCcsXG5cdExKY3k6ICdcXHUwNDA5Jyxcblx0bGpjeTogJ1xcdTA0NTknLFxuXHRMbDogJ1xcdTIyRDgnLFxuXHRsbDogJ1xcdTIyNkEnLFxuXHRsbGFycjogJ1xcdTIxQzcnLFxuXHRsbGNvcm5lcjogJ1xcdTIzMUUnLFxuXHRMbGVmdGFycm93OiAnXFx1MjFEQScsXG5cdGxsaGFyZDogJ1xcdTI5NkInLFxuXHRsbHRyaTogJ1xcdTI1RkEnLFxuXHRMbWlkb3Q6ICdcXHUwMTNGJyxcblx0bG1pZG90OiAnXFx1MDE0MCcsXG5cdGxtb3VzdDogJ1xcdTIzQjAnLFxuXHRsbW91c3RhY2hlOiAnXFx1MjNCMCcsXG5cdGxuYXA6ICdcXHUyQTg5Jyxcblx0bG5hcHByb3g6ICdcXHUyQTg5Jyxcblx0bG5FOiAnXFx1MjI2OCcsXG5cdGxuZTogJ1xcdTJBODcnLFxuXHRsbmVxOiAnXFx1MkE4NycsXG5cdGxuZXFxOiAnXFx1MjI2OCcsXG5cdGxuc2ltOiAnXFx1MjJFNicsXG5cdGxvYW5nOiAnXFx1MjdFQycsXG5cdGxvYXJyOiAnXFx1MjFGRCcsXG5cdGxvYnJrOiAnXFx1MjdFNicsXG5cdExvbmdMZWZ0QXJyb3c6ICdcXHUyN0Y1Jyxcblx0TG9uZ2xlZnRhcnJvdzogJ1xcdTI3RjgnLFxuXHRsb25nbGVmdGFycm93OiAnXFx1MjdGNScsXG5cdExvbmdMZWZ0UmlnaHRBcnJvdzogJ1xcdTI3RjcnLFxuXHRMb25nbGVmdHJpZ2h0YXJyb3c6ICdcXHUyN0ZBJyxcblx0bG9uZ2xlZnRyaWdodGFycm93OiAnXFx1MjdGNycsXG5cdGxvbmdtYXBzdG86ICdcXHUyN0ZDJyxcblx0TG9uZ1JpZ2h0QXJyb3c6ICdcXHUyN0Y2Jyxcblx0TG9uZ3JpZ2h0YXJyb3c6ICdcXHUyN0Y5Jyxcblx0bG9uZ3JpZ2h0YXJyb3c6ICdcXHUyN0Y2Jyxcblx0bG9vcGFycm93bGVmdDogJ1xcdTIxQUInLFxuXHRsb29wYXJyb3dyaWdodDogJ1xcdTIxQUMnLFxuXHRsb3BhcjogJ1xcdTI5ODUnLFxuXHRMb3BmOiAnXFx1RDgzNVxcdURENDMnLFxuXHRsb3BmOiAnXFx1RDgzNVxcdURENUQnLFxuXHRsb3BsdXM6ICdcXHUyQTJEJyxcblx0bG90aW1lczogJ1xcdTJBMzQnLFxuXHRsb3dhc3Q6ICdcXHUyMjE3Jyxcblx0bG93YmFyOiAnXFx1MDA1RicsXG5cdExvd2VyTGVmdEFycm93OiAnXFx1MjE5OScsXG5cdExvd2VyUmlnaHRBcnJvdzogJ1xcdTIxOTgnLFxuXHRsb3o6ICdcXHUyNUNBJyxcblx0bG96ZW5nZTogJ1xcdTI1Q0EnLFxuXHRsb3pmOiAnXFx1MjlFQicsXG5cdGxwYXI6ICdcXHUwMDI4Jyxcblx0bHBhcmx0OiAnXFx1Mjk5MycsXG5cdGxyYXJyOiAnXFx1MjFDNicsXG5cdGxyY29ybmVyOiAnXFx1MjMxRicsXG5cdGxyaGFyOiAnXFx1MjFDQicsXG5cdGxyaGFyZDogJ1xcdTI5NkQnLFxuXHRscm06ICdcXHUyMDBFJyxcblx0bHJ0cmk6ICdcXHUyMkJGJyxcblx0bHNhcXVvOiAnXFx1MjAzOScsXG5cdExzY3I6ICdcXHUyMTEyJyxcblx0bHNjcjogJ1xcdUQ4MzVcXHVEQ0MxJyxcblx0THNoOiAnXFx1MjFCMCcsXG5cdGxzaDogJ1xcdTIxQjAnLFxuXHRsc2ltOiAnXFx1MjI3MicsXG5cdGxzaW1lOiAnXFx1MkE4RCcsXG5cdGxzaW1nOiAnXFx1MkE4RicsXG5cdGxzcWI6ICdcXHUwMDVCJyxcblx0bHNxdW86ICdcXHUyMDE4Jyxcblx0bHNxdW9yOiAnXFx1MjAxQScsXG5cdExzdHJvazogJ1xcdTAxNDEnLFxuXHRsc3Ryb2s6ICdcXHUwMTQyJyxcblx0THQ6ICdcXHUyMjZBJyxcblx0TFQ6ICdcXHUwMDNDJyxcblx0bHQ6ICdcXHUwMDNDJyxcblx0bHRjYzogJ1xcdTJBQTYnLFxuXHRsdGNpcjogJ1xcdTJBNzknLFxuXHRsdGRvdDogJ1xcdTIyRDYnLFxuXHRsdGhyZWU6ICdcXHUyMkNCJyxcblx0bHRpbWVzOiAnXFx1MjJDOScsXG5cdGx0bGFycjogJ1xcdTI5NzYnLFxuXHRsdHF1ZXN0OiAnXFx1MkE3QicsXG5cdGx0cmk6ICdcXHUyNUMzJyxcblx0bHRyaWU6ICdcXHUyMkI0Jyxcblx0bHRyaWY6ICdcXHUyNUMyJyxcblx0bHRyUGFyOiAnXFx1Mjk5NicsXG5cdGx1cmRzaGFyOiAnXFx1Mjk0QScsXG5cdGx1cnVoYXI6ICdcXHUyOTY2Jyxcblx0bHZlcnRuZXFxOiAnXFx1MjI2OFxcdUZFMDAnLFxuXHRsdm5FOiAnXFx1MjI2OFxcdUZFMDAnLFxuXHRtYWNyOiAnXFx1MDBBRicsXG5cdG1hbGU6ICdcXHUyNjQyJyxcblx0bWFsdDogJ1xcdTI3MjAnLFxuXHRtYWx0ZXNlOiAnXFx1MjcyMCcsXG5cdE1hcDogJ1xcdTI5MDUnLFxuXHRtYXA6ICdcXHUyMUE2Jyxcblx0bWFwc3RvOiAnXFx1MjFBNicsXG5cdG1hcHN0b2Rvd246ICdcXHUyMUE3Jyxcblx0bWFwc3RvbGVmdDogJ1xcdTIxQTQnLFxuXHRtYXBzdG91cDogJ1xcdTIxQTUnLFxuXHRtYXJrZXI6ICdcXHUyNUFFJyxcblx0bWNvbW1hOiAnXFx1MkEyOScsXG5cdE1jeTogJ1xcdTA0MUMnLFxuXHRtY3k6ICdcXHUwNDNDJyxcblx0bWRhc2g6ICdcXHUyMDE0Jyxcblx0bUREb3Q6ICdcXHUyMjNBJyxcblx0bWVhc3VyZWRhbmdsZTogJ1xcdTIyMjEnLFxuXHRNZWRpdW1TcGFjZTogJ1xcdTIwNUYnLFxuXHRNZWxsaW50cmY6ICdcXHUyMTMzJyxcblx0TWZyOiAnXFx1RDgzNVxcdUREMTAnLFxuXHRtZnI6ICdcXHVEODM1XFx1REQyQScsXG5cdG1obzogJ1xcdTIxMjcnLFxuXHRtaWNybzogJ1xcdTAwQjUnLFxuXHRtaWQ6ICdcXHUyMjIzJyxcblx0bWlkYXN0OiAnXFx1MDAyQScsXG5cdG1pZGNpcjogJ1xcdTJBRjAnLFxuXHRtaWRkb3Q6ICdcXHUwMEI3Jyxcblx0bWludXM6ICdcXHUyMjEyJyxcblx0bWludXNiOiAnXFx1MjI5RicsXG5cdG1pbnVzZDogJ1xcdTIyMzgnLFxuXHRtaW51c2R1OiAnXFx1MkEyQScsXG5cdE1pbnVzUGx1czogJ1xcdTIyMTMnLFxuXHRtbGNwOiAnXFx1MkFEQicsXG5cdG1sZHI6ICdcXHUyMDI2Jyxcblx0bW5wbHVzOiAnXFx1MjIxMycsXG5cdG1vZGVsczogJ1xcdTIyQTcnLFxuXHRNb3BmOiAnXFx1RDgzNVxcdURENDQnLFxuXHRtb3BmOiAnXFx1RDgzNVxcdURENUUnLFxuXHRtcDogJ1xcdTIyMTMnLFxuXHRNc2NyOiAnXFx1MjEzMycsXG5cdG1zY3I6ICdcXHVEODM1XFx1RENDMicsXG5cdG1zdHBvczogJ1xcdTIyM0UnLFxuXHRNdTogJ1xcdTAzOUMnLFxuXHRtdTogJ1xcdTAzQkMnLFxuXHRtdWx0aW1hcDogJ1xcdTIyQjgnLFxuXHRtdW1hcDogJ1xcdTIyQjgnLFxuXHRuYWJsYTogJ1xcdTIyMDcnLFxuXHROYWN1dGU6ICdcXHUwMTQzJyxcblx0bmFjdXRlOiAnXFx1MDE0NCcsXG5cdG5hbmc6ICdcXHUyMjIwXFx1MjBEMicsXG5cdG5hcDogJ1xcdTIyNDknLFxuXHRuYXBFOiAnXFx1MkE3MFxcdTAzMzgnLFxuXHRuYXBpZDogJ1xcdTIyNEJcXHUwMzM4Jyxcblx0bmFwb3M6ICdcXHUwMTQ5Jyxcblx0bmFwcHJveDogJ1xcdTIyNDknLFxuXHRuYXR1cjogJ1xcdTI2NkUnLFxuXHRuYXR1cmFsOiAnXFx1MjY2RScsXG5cdG5hdHVyYWxzOiAnXFx1MjExNScsXG5cdG5ic3A6ICdcXHUwMEEwJyxcblx0bmJ1bXA6ICdcXHUyMjRFXFx1MDMzOCcsXG5cdG5idW1wZTogJ1xcdTIyNEZcXHUwMzM4Jyxcblx0bmNhcDogJ1xcdTJBNDMnLFxuXHROY2Fyb246ICdcXHUwMTQ3Jyxcblx0bmNhcm9uOiAnXFx1MDE0OCcsXG5cdE5jZWRpbDogJ1xcdTAxNDUnLFxuXHRuY2VkaWw6ICdcXHUwMTQ2Jyxcblx0bmNvbmc6ICdcXHUyMjQ3Jyxcblx0bmNvbmdkb3Q6ICdcXHUyQTZEXFx1MDMzOCcsXG5cdG5jdXA6ICdcXHUyQTQyJyxcblx0TmN5OiAnXFx1MDQxRCcsXG5cdG5jeTogJ1xcdTA0M0QnLFxuXHRuZGFzaDogJ1xcdTIwMTMnLFxuXHRuZTogJ1xcdTIyNjAnLFxuXHRuZWFyaGs6ICdcXHUyOTI0Jyxcblx0bmVBcnI6ICdcXHUyMUQ3Jyxcblx0bmVhcnI6ICdcXHUyMTk3Jyxcblx0bmVhcnJvdzogJ1xcdTIxOTcnLFxuXHRuZWRvdDogJ1xcdTIyNTBcXHUwMzM4Jyxcblx0TmVnYXRpdmVNZWRpdW1TcGFjZTogJ1xcdTIwMEInLFxuXHROZWdhdGl2ZVRoaWNrU3BhY2U6ICdcXHUyMDBCJyxcblx0TmVnYXRpdmVUaGluU3BhY2U6ICdcXHUyMDBCJyxcblx0TmVnYXRpdmVWZXJ5VGhpblNwYWNlOiAnXFx1MjAwQicsXG5cdG5lcXVpdjogJ1xcdTIyNjInLFxuXHRuZXNlYXI6ICdcXHUyOTI4Jyxcblx0bmVzaW06ICdcXHUyMjQyXFx1MDMzOCcsXG5cdE5lc3RlZEdyZWF0ZXJHcmVhdGVyOiAnXFx1MjI2QicsXG5cdE5lc3RlZExlc3NMZXNzOiAnXFx1MjI2QScsXG5cdE5ld0xpbmU6ICdcXHUwMDBBJyxcblx0bmV4aXN0OiAnXFx1MjIwNCcsXG5cdG5leGlzdHM6ICdcXHUyMjA0Jyxcblx0TmZyOiAnXFx1RDgzNVxcdUREMTEnLFxuXHRuZnI6ICdcXHVEODM1XFx1REQyQicsXG5cdG5nRTogJ1xcdTIyNjdcXHUwMzM4Jyxcblx0bmdlOiAnXFx1MjI3MScsXG5cdG5nZXE6ICdcXHUyMjcxJyxcblx0bmdlcXE6ICdcXHUyMjY3XFx1MDMzOCcsXG5cdG5nZXFzbGFudDogJ1xcdTJBN0VcXHUwMzM4Jyxcblx0bmdlczogJ1xcdTJBN0VcXHUwMzM4Jyxcblx0bkdnOiAnXFx1MjJEOVxcdTAzMzgnLFxuXHRuZ3NpbTogJ1xcdTIyNzUnLFxuXHRuR3Q6ICdcXHUyMjZCXFx1MjBEMicsXG5cdG5ndDogJ1xcdTIyNkYnLFxuXHRuZ3RyOiAnXFx1MjI2RicsXG5cdG5HdHY6ICdcXHUyMjZCXFx1MDMzOCcsXG5cdG5oQXJyOiAnXFx1MjFDRScsXG5cdG5oYXJyOiAnXFx1MjFBRScsXG5cdG5ocGFyOiAnXFx1MkFGMicsXG5cdG5pOiAnXFx1MjIwQicsXG5cdG5pczogJ1xcdTIyRkMnLFxuXHRuaXNkOiAnXFx1MjJGQScsXG5cdG5pdjogJ1xcdTIyMEInLFxuXHROSmN5OiAnXFx1MDQwQScsXG5cdG5qY3k6ICdcXHUwNDVBJyxcblx0bmxBcnI6ICdcXHUyMUNEJyxcblx0bmxhcnI6ICdcXHUyMTlBJyxcblx0bmxkcjogJ1xcdTIwMjUnLFxuXHRubEU6ICdcXHUyMjY2XFx1MDMzOCcsXG5cdG5sZTogJ1xcdTIyNzAnLFxuXHRuTGVmdGFycm93OiAnXFx1MjFDRCcsXG5cdG5sZWZ0YXJyb3c6ICdcXHUyMTlBJyxcblx0bkxlZnRyaWdodGFycm93OiAnXFx1MjFDRScsXG5cdG5sZWZ0cmlnaHRhcnJvdzogJ1xcdTIxQUUnLFxuXHRubGVxOiAnXFx1MjI3MCcsXG5cdG5sZXFxOiAnXFx1MjI2NlxcdTAzMzgnLFxuXHRubGVxc2xhbnQ6ICdcXHUyQTdEXFx1MDMzOCcsXG5cdG5sZXM6ICdcXHUyQTdEXFx1MDMzOCcsXG5cdG5sZXNzOiAnXFx1MjI2RScsXG5cdG5MbDogJ1xcdTIyRDhcXHUwMzM4Jyxcblx0bmxzaW06ICdcXHUyMjc0Jyxcblx0bkx0OiAnXFx1MjI2QVxcdTIwRDInLFxuXHRubHQ6ICdcXHUyMjZFJyxcblx0bmx0cmk6ICdcXHUyMkVBJyxcblx0bmx0cmllOiAnXFx1MjJFQycsXG5cdG5MdHY6ICdcXHUyMjZBXFx1MDMzOCcsXG5cdG5taWQ6ICdcXHUyMjI0Jyxcblx0Tm9CcmVhazogJ1xcdTIwNjAnLFxuXHROb25CcmVha2luZ1NwYWNlOiAnXFx1MDBBMCcsXG5cdE5vcGY6ICdcXHUyMTE1Jyxcblx0bm9wZjogJ1xcdUQ4MzVcXHVERDVGJyxcblx0Tm90OiAnXFx1MkFFQycsXG5cdG5vdDogJ1xcdTAwQUMnLFxuXHROb3RDb25ncnVlbnQ6ICdcXHUyMjYyJyxcblx0Tm90Q3VwQ2FwOiAnXFx1MjI2RCcsXG5cdE5vdERvdWJsZVZlcnRpY2FsQmFyOiAnXFx1MjIyNicsXG5cdE5vdEVsZW1lbnQ6ICdcXHUyMjA5Jyxcblx0Tm90RXF1YWw6ICdcXHUyMjYwJyxcblx0Tm90RXF1YWxUaWxkZTogJ1xcdTIyNDJcXHUwMzM4Jyxcblx0Tm90RXhpc3RzOiAnXFx1MjIwNCcsXG5cdE5vdEdyZWF0ZXI6ICdcXHUyMjZGJyxcblx0Tm90R3JlYXRlckVxdWFsOiAnXFx1MjI3MScsXG5cdE5vdEdyZWF0ZXJGdWxsRXF1YWw6ICdcXHUyMjY3XFx1MDMzOCcsXG5cdE5vdEdyZWF0ZXJHcmVhdGVyOiAnXFx1MjI2QlxcdTAzMzgnLFxuXHROb3RHcmVhdGVyTGVzczogJ1xcdTIyNzknLFxuXHROb3RHcmVhdGVyU2xhbnRFcXVhbDogJ1xcdTJBN0VcXHUwMzM4Jyxcblx0Tm90R3JlYXRlclRpbGRlOiAnXFx1MjI3NScsXG5cdE5vdEh1bXBEb3duSHVtcDogJ1xcdTIyNEVcXHUwMzM4Jyxcblx0Tm90SHVtcEVxdWFsOiAnXFx1MjI0RlxcdTAzMzgnLFxuXHRub3RpbjogJ1xcdTIyMDknLFxuXHRub3RpbmRvdDogJ1xcdTIyRjVcXHUwMzM4Jyxcblx0bm90aW5FOiAnXFx1MjJGOVxcdTAzMzgnLFxuXHRub3RpbnZhOiAnXFx1MjIwOScsXG5cdG5vdGludmI6ICdcXHUyMkY3Jyxcblx0bm90aW52YzogJ1xcdTIyRjYnLFxuXHROb3RMZWZ0VHJpYW5nbGU6ICdcXHUyMkVBJyxcblx0Tm90TGVmdFRyaWFuZ2xlQmFyOiAnXFx1MjlDRlxcdTAzMzgnLFxuXHROb3RMZWZ0VHJpYW5nbGVFcXVhbDogJ1xcdTIyRUMnLFxuXHROb3RMZXNzOiAnXFx1MjI2RScsXG5cdE5vdExlc3NFcXVhbDogJ1xcdTIyNzAnLFxuXHROb3RMZXNzR3JlYXRlcjogJ1xcdTIyNzgnLFxuXHROb3RMZXNzTGVzczogJ1xcdTIyNkFcXHUwMzM4Jyxcblx0Tm90TGVzc1NsYW50RXF1YWw6ICdcXHUyQTdEXFx1MDMzOCcsXG5cdE5vdExlc3NUaWxkZTogJ1xcdTIyNzQnLFxuXHROb3ROZXN0ZWRHcmVhdGVyR3JlYXRlcjogJ1xcdTJBQTJcXHUwMzM4Jyxcblx0Tm90TmVzdGVkTGVzc0xlc3M6ICdcXHUyQUExXFx1MDMzOCcsXG5cdG5vdG5pOiAnXFx1MjIwQycsXG5cdG5vdG5pdmE6ICdcXHUyMjBDJyxcblx0bm90bml2YjogJ1xcdTIyRkUnLFxuXHRub3RuaXZjOiAnXFx1MjJGRCcsXG5cdE5vdFByZWNlZGVzOiAnXFx1MjI4MCcsXG5cdE5vdFByZWNlZGVzRXF1YWw6ICdcXHUyQUFGXFx1MDMzOCcsXG5cdE5vdFByZWNlZGVzU2xhbnRFcXVhbDogJ1xcdTIyRTAnLFxuXHROb3RSZXZlcnNlRWxlbWVudDogJ1xcdTIyMEMnLFxuXHROb3RSaWdodFRyaWFuZ2xlOiAnXFx1MjJFQicsXG5cdE5vdFJpZ2h0VHJpYW5nbGVCYXI6ICdcXHUyOUQwXFx1MDMzOCcsXG5cdE5vdFJpZ2h0VHJpYW5nbGVFcXVhbDogJ1xcdTIyRUQnLFxuXHROb3RTcXVhcmVTdWJzZXQ6ICdcXHUyMjhGXFx1MDMzOCcsXG5cdE5vdFNxdWFyZVN1YnNldEVxdWFsOiAnXFx1MjJFMicsXG5cdE5vdFNxdWFyZVN1cGVyc2V0OiAnXFx1MjI5MFxcdTAzMzgnLFxuXHROb3RTcXVhcmVTdXBlcnNldEVxdWFsOiAnXFx1MjJFMycsXG5cdE5vdFN1YnNldDogJ1xcdTIyODJcXHUyMEQyJyxcblx0Tm90U3Vic2V0RXF1YWw6ICdcXHUyMjg4Jyxcblx0Tm90U3VjY2VlZHM6ICdcXHUyMjgxJyxcblx0Tm90U3VjY2VlZHNFcXVhbDogJ1xcdTJBQjBcXHUwMzM4Jyxcblx0Tm90U3VjY2VlZHNTbGFudEVxdWFsOiAnXFx1MjJFMScsXG5cdE5vdFN1Y2NlZWRzVGlsZGU6ICdcXHUyMjdGXFx1MDMzOCcsXG5cdE5vdFN1cGVyc2V0OiAnXFx1MjI4M1xcdTIwRDInLFxuXHROb3RTdXBlcnNldEVxdWFsOiAnXFx1MjI4OScsXG5cdE5vdFRpbGRlOiAnXFx1MjI0MScsXG5cdE5vdFRpbGRlRXF1YWw6ICdcXHUyMjQ0Jyxcblx0Tm90VGlsZGVGdWxsRXF1YWw6ICdcXHUyMjQ3Jyxcblx0Tm90VGlsZGVUaWxkZTogJ1xcdTIyNDknLFxuXHROb3RWZXJ0aWNhbEJhcjogJ1xcdTIyMjQnLFxuXHRucGFyOiAnXFx1MjIyNicsXG5cdG5wYXJhbGxlbDogJ1xcdTIyMjYnLFxuXHRucGFyc2w6ICdcXHUyQUZEXFx1MjBFNScsXG5cdG5wYXJ0OiAnXFx1MjIwMlxcdTAzMzgnLFxuXHRucG9saW50OiAnXFx1MkExNCcsXG5cdG5wcjogJ1xcdTIyODAnLFxuXHRucHJjdWU6ICdcXHUyMkUwJyxcblx0bnByZTogJ1xcdTJBQUZcXHUwMzM4Jyxcblx0bnByZWM6ICdcXHUyMjgwJyxcblx0bnByZWNlcTogJ1xcdTJBQUZcXHUwMzM4Jyxcblx0bnJBcnI6ICdcXHUyMUNGJyxcblx0bnJhcnI6ICdcXHUyMTlCJyxcblx0bnJhcnJjOiAnXFx1MjkzM1xcdTAzMzgnLFxuXHRucmFycnc6ICdcXHUyMTlEXFx1MDMzOCcsXG5cdG5SaWdodGFycm93OiAnXFx1MjFDRicsXG5cdG5yaWdodGFycm93OiAnXFx1MjE5QicsXG5cdG5ydHJpOiAnXFx1MjJFQicsXG5cdG5ydHJpZTogJ1xcdTIyRUQnLFxuXHRuc2M6ICdcXHUyMjgxJyxcblx0bnNjY3VlOiAnXFx1MjJFMScsXG5cdG5zY2U6ICdcXHUyQUIwXFx1MDMzOCcsXG5cdE5zY3I6ICdcXHVEODM1XFx1RENBOScsXG5cdG5zY3I6ICdcXHVEODM1XFx1RENDMycsXG5cdG5zaG9ydG1pZDogJ1xcdTIyMjQnLFxuXHRuc2hvcnRwYXJhbGxlbDogJ1xcdTIyMjYnLFxuXHRuc2ltOiAnXFx1MjI0MScsXG5cdG5zaW1lOiAnXFx1MjI0NCcsXG5cdG5zaW1lcTogJ1xcdTIyNDQnLFxuXHRuc21pZDogJ1xcdTIyMjQnLFxuXHRuc3BhcjogJ1xcdTIyMjYnLFxuXHRuc3FzdWJlOiAnXFx1MjJFMicsXG5cdG5zcXN1cGU6ICdcXHUyMkUzJyxcblx0bnN1YjogJ1xcdTIyODQnLFxuXHRuc3ViRTogJ1xcdTJBQzVcXHUwMzM4Jyxcblx0bnN1YmU6ICdcXHUyMjg4Jyxcblx0bnN1YnNldDogJ1xcdTIyODJcXHUyMEQyJyxcblx0bnN1YnNldGVxOiAnXFx1MjI4OCcsXG5cdG5zdWJzZXRlcXE6ICdcXHUyQUM1XFx1MDMzOCcsXG5cdG5zdWNjOiAnXFx1MjI4MScsXG5cdG5zdWNjZXE6ICdcXHUyQUIwXFx1MDMzOCcsXG5cdG5zdXA6ICdcXHUyMjg1Jyxcblx0bnN1cEU6ICdcXHUyQUM2XFx1MDMzOCcsXG5cdG5zdXBlOiAnXFx1MjI4OScsXG5cdG5zdXBzZXQ6ICdcXHUyMjgzXFx1MjBEMicsXG5cdG5zdXBzZXRlcTogJ1xcdTIyODknLFxuXHRuc3Vwc2V0ZXFxOiAnXFx1MkFDNlxcdTAzMzgnLFxuXHRudGdsOiAnXFx1MjI3OScsXG5cdE50aWxkZTogJ1xcdTAwRDEnLFxuXHRudGlsZGU6ICdcXHUwMEYxJyxcblx0bnRsZzogJ1xcdTIyNzgnLFxuXHRudHJpYW5nbGVsZWZ0OiAnXFx1MjJFQScsXG5cdG50cmlhbmdsZWxlZnRlcTogJ1xcdTIyRUMnLFxuXHRudHJpYW5nbGVyaWdodDogJ1xcdTIyRUInLFxuXHRudHJpYW5nbGVyaWdodGVxOiAnXFx1MjJFRCcsXG5cdE51OiAnXFx1MDM5RCcsXG5cdG51OiAnXFx1MDNCRCcsXG5cdG51bTogJ1xcdTAwMjMnLFxuXHRudW1lcm86ICdcXHUyMTE2Jyxcblx0bnVtc3A6ICdcXHUyMDA3Jyxcblx0bnZhcDogJ1xcdTIyNERcXHUyMEQyJyxcblx0blZEYXNoOiAnXFx1MjJBRicsXG5cdG5WZGFzaDogJ1xcdTIyQUUnLFxuXHRudkRhc2g6ICdcXHUyMkFEJyxcblx0bnZkYXNoOiAnXFx1MjJBQycsXG5cdG52Z2U6ICdcXHUyMjY1XFx1MjBEMicsXG5cdG52Z3Q6ICdcXHUwMDNFXFx1MjBEMicsXG5cdG52SGFycjogJ1xcdTI5MDQnLFxuXHRudmluZmluOiAnXFx1MjlERScsXG5cdG52bEFycjogJ1xcdTI5MDInLFxuXHRudmxlOiAnXFx1MjI2NFxcdTIwRDInLFxuXHRudmx0OiAnXFx1MDAzQ1xcdTIwRDInLFxuXHRudmx0cmllOiAnXFx1MjJCNFxcdTIwRDInLFxuXHRudnJBcnI6ICdcXHUyOTAzJyxcblx0bnZydHJpZTogJ1xcdTIyQjVcXHUyMEQyJyxcblx0bnZzaW06ICdcXHUyMjNDXFx1MjBEMicsXG5cdG53YXJoazogJ1xcdTI5MjMnLFxuXHRud0FycjogJ1xcdTIxRDYnLFxuXHRud2FycjogJ1xcdTIxOTYnLFxuXHRud2Fycm93OiAnXFx1MjE5NicsXG5cdG53bmVhcjogJ1xcdTI5MjcnLFxuXHRPYWN1dGU6ICdcXHUwMEQzJyxcblx0b2FjdXRlOiAnXFx1MDBGMycsXG5cdG9hc3Q6ICdcXHUyMjlCJyxcblx0b2NpcjogJ1xcdTIyOUEnLFxuXHRPY2lyYzogJ1xcdTAwRDQnLFxuXHRvY2lyYzogJ1xcdTAwRjQnLFxuXHRPY3k6ICdcXHUwNDFFJyxcblx0b2N5OiAnXFx1MDQzRScsXG5cdG9kYXNoOiAnXFx1MjI5RCcsXG5cdE9kYmxhYzogJ1xcdTAxNTAnLFxuXHRvZGJsYWM6ICdcXHUwMTUxJyxcblx0b2RpdjogJ1xcdTJBMzgnLFxuXHRvZG90OiAnXFx1MjI5OScsXG5cdG9kc29sZDogJ1xcdTI5QkMnLFxuXHRPRWxpZzogJ1xcdTAxNTInLFxuXHRvZWxpZzogJ1xcdTAxNTMnLFxuXHRvZmNpcjogJ1xcdTI5QkYnLFxuXHRPZnI6ICdcXHVEODM1XFx1REQxMicsXG5cdG9mcjogJ1xcdUQ4MzVcXHVERDJDJyxcblx0b2dvbjogJ1xcdTAyREInLFxuXHRPZ3JhdmU6ICdcXHUwMEQyJyxcblx0b2dyYXZlOiAnXFx1MDBGMicsXG5cdG9ndDogJ1xcdTI5QzEnLFxuXHRvaGJhcjogJ1xcdTI5QjUnLFxuXHRvaG06ICdcXHUwM0E5Jyxcblx0b2ludDogJ1xcdTIyMkUnLFxuXHRvbGFycjogJ1xcdTIxQkEnLFxuXHRvbGNpcjogJ1xcdTI5QkUnLFxuXHRvbGNyb3NzOiAnXFx1MjlCQicsXG5cdG9saW5lOiAnXFx1MjAzRScsXG5cdG9sdDogJ1xcdTI5QzAnLFxuXHRPbWFjcjogJ1xcdTAxNEMnLFxuXHRvbWFjcjogJ1xcdTAxNEQnLFxuXHRPbWVnYTogJ1xcdTAzQTknLFxuXHRvbWVnYTogJ1xcdTAzQzknLFxuXHRPbWljcm9uOiAnXFx1MDM5RicsXG5cdG9taWNyb246ICdcXHUwM0JGJyxcblx0b21pZDogJ1xcdTI5QjYnLFxuXHRvbWludXM6ICdcXHUyMjk2Jyxcblx0T29wZjogJ1xcdUQ4MzVcXHVERDQ2Jyxcblx0b29wZjogJ1xcdUQ4MzVcXHVERDYwJyxcblx0b3BhcjogJ1xcdTI5QjcnLFxuXHRPcGVuQ3VybHlEb3VibGVRdW90ZTogJ1xcdTIwMUMnLFxuXHRPcGVuQ3VybHlRdW90ZTogJ1xcdTIwMTgnLFxuXHRvcGVycDogJ1xcdTI5QjknLFxuXHRvcGx1czogJ1xcdTIyOTUnLFxuXHRPcjogJ1xcdTJBNTQnLFxuXHRvcjogJ1xcdTIyMjgnLFxuXHRvcmFycjogJ1xcdTIxQkInLFxuXHRvcmQ6ICdcXHUyQTVEJyxcblx0b3JkZXI6ICdcXHUyMTM0Jyxcblx0b3JkZXJvZjogJ1xcdTIxMzQnLFxuXHRvcmRmOiAnXFx1MDBBQScsXG5cdG9yZG06ICdcXHUwMEJBJyxcblx0b3JpZ29mOiAnXFx1MjJCNicsXG5cdG9yb3I6ICdcXHUyQTU2Jyxcblx0b3JzbG9wZTogJ1xcdTJBNTcnLFxuXHRvcnY6ICdcXHUyQTVCJyxcblx0b1M6ICdcXHUyNEM4Jyxcblx0T3NjcjogJ1xcdUQ4MzVcXHVEQ0FBJyxcblx0b3NjcjogJ1xcdTIxMzQnLFxuXHRPc2xhc2g6ICdcXHUwMEQ4Jyxcblx0b3NsYXNoOiAnXFx1MDBGOCcsXG5cdG9zb2w6ICdcXHUyMjk4Jyxcblx0T3RpbGRlOiAnXFx1MDBENScsXG5cdG90aWxkZTogJ1xcdTAwRjUnLFxuXHRPdGltZXM6ICdcXHUyQTM3Jyxcblx0b3RpbWVzOiAnXFx1MjI5NycsXG5cdG90aW1lc2FzOiAnXFx1MkEzNicsXG5cdE91bWw6ICdcXHUwMEQ2Jyxcblx0b3VtbDogJ1xcdTAwRjYnLFxuXHRvdmJhcjogJ1xcdTIzM0QnLFxuXHRPdmVyQmFyOiAnXFx1MjAzRScsXG5cdE92ZXJCcmFjZTogJ1xcdTIzREUnLFxuXHRPdmVyQnJhY2tldDogJ1xcdTIzQjQnLFxuXHRPdmVyUGFyZW50aGVzaXM6ICdcXHUyM0RDJyxcblx0cGFyOiAnXFx1MjIyNScsXG5cdHBhcmE6ICdcXHUwMEI2Jyxcblx0cGFyYWxsZWw6ICdcXHUyMjI1Jyxcblx0cGFyc2ltOiAnXFx1MkFGMycsXG5cdHBhcnNsOiAnXFx1MkFGRCcsXG5cdHBhcnQ6ICdcXHUyMjAyJyxcblx0UGFydGlhbEQ6ICdcXHUyMjAyJyxcblx0UGN5OiAnXFx1MDQxRicsXG5cdHBjeTogJ1xcdTA0M0YnLFxuXHRwZXJjbnQ6ICdcXHUwMDI1Jyxcblx0cGVyaW9kOiAnXFx1MDAyRScsXG5cdHBlcm1pbDogJ1xcdTIwMzAnLFxuXHRwZXJwOiAnXFx1MjJBNScsXG5cdHBlcnRlbms6ICdcXHUyMDMxJyxcblx0UGZyOiAnXFx1RDgzNVxcdUREMTMnLFxuXHRwZnI6ICdcXHVEODM1XFx1REQyRCcsXG5cdFBoaTogJ1xcdTAzQTYnLFxuXHRwaGk6ICdcXHUwM0M2Jyxcblx0cGhpdjogJ1xcdTAzRDUnLFxuXHRwaG1tYXQ6ICdcXHUyMTMzJyxcblx0cGhvbmU6ICdcXHUyNjBFJyxcblx0UGk6ICdcXHUwM0EwJyxcblx0cGk6ICdcXHUwM0MwJyxcblx0cGl0Y2hmb3JrOiAnXFx1MjJENCcsXG5cdHBpdjogJ1xcdTAzRDYnLFxuXHRwbGFuY2s6ICdcXHUyMTBGJyxcblx0cGxhbmNraDogJ1xcdTIxMEUnLFxuXHRwbGFua3Y6ICdcXHUyMTBGJyxcblx0cGx1czogJ1xcdTAwMkInLFxuXHRwbHVzYWNpcjogJ1xcdTJBMjMnLFxuXHRwbHVzYjogJ1xcdTIyOUUnLFxuXHRwbHVzY2lyOiAnXFx1MkEyMicsXG5cdHBsdXNkbzogJ1xcdTIyMTQnLFxuXHRwbHVzZHU6ICdcXHUyQTI1Jyxcblx0cGx1c2U6ICdcXHUyQTcyJyxcblx0UGx1c01pbnVzOiAnXFx1MDBCMScsXG5cdHBsdXNtbjogJ1xcdTAwQjEnLFxuXHRwbHVzc2ltOiAnXFx1MkEyNicsXG5cdHBsdXN0d286ICdcXHUyQTI3Jyxcblx0cG06ICdcXHUwMEIxJyxcblx0UG9pbmNhcmVwbGFuZTogJ1xcdTIxMEMnLFxuXHRwb2ludGludDogJ1xcdTJBMTUnLFxuXHRQb3BmOiAnXFx1MjExOScsXG5cdHBvcGY6ICdcXHVEODM1XFx1REQ2MScsXG5cdHBvdW5kOiAnXFx1MDBBMycsXG5cdFByOiAnXFx1MkFCQicsXG5cdHByOiAnXFx1MjI3QScsXG5cdHByYXA6ICdcXHUyQUI3Jyxcblx0cHJjdWU6ICdcXHUyMjdDJyxcblx0cHJFOiAnXFx1MkFCMycsXG5cdHByZTogJ1xcdTJBQUYnLFxuXHRwcmVjOiAnXFx1MjI3QScsXG5cdHByZWNhcHByb3g6ICdcXHUyQUI3Jyxcblx0cHJlY2N1cmx5ZXE6ICdcXHUyMjdDJyxcblx0UHJlY2VkZXM6ICdcXHUyMjdBJyxcblx0UHJlY2VkZXNFcXVhbDogJ1xcdTJBQUYnLFxuXHRQcmVjZWRlc1NsYW50RXF1YWw6ICdcXHUyMjdDJyxcblx0UHJlY2VkZXNUaWxkZTogJ1xcdTIyN0UnLFxuXHRwcmVjZXE6ICdcXHUyQUFGJyxcblx0cHJlY25hcHByb3g6ICdcXHUyQUI5Jyxcblx0cHJlY25lcXE6ICdcXHUyQUI1Jyxcblx0cHJlY25zaW06ICdcXHUyMkU4Jyxcblx0cHJlY3NpbTogJ1xcdTIyN0UnLFxuXHRQcmltZTogJ1xcdTIwMzMnLFxuXHRwcmltZTogJ1xcdTIwMzInLFxuXHRwcmltZXM6ICdcXHUyMTE5Jyxcblx0cHJuYXA6ICdcXHUyQUI5Jyxcblx0cHJuRTogJ1xcdTJBQjUnLFxuXHRwcm5zaW06ICdcXHUyMkU4Jyxcblx0cHJvZDogJ1xcdTIyMEYnLFxuXHRQcm9kdWN0OiAnXFx1MjIwRicsXG5cdHByb2ZhbGFyOiAnXFx1MjMyRScsXG5cdHByb2ZsaW5lOiAnXFx1MjMxMicsXG5cdHByb2ZzdXJmOiAnXFx1MjMxMycsXG5cdHByb3A6ICdcXHUyMjFEJyxcblx0UHJvcG9ydGlvbjogJ1xcdTIyMzcnLFxuXHRQcm9wb3J0aW9uYWw6ICdcXHUyMjFEJyxcblx0cHJvcHRvOiAnXFx1MjIxRCcsXG5cdHByc2ltOiAnXFx1MjI3RScsXG5cdHBydXJlbDogJ1xcdTIyQjAnLFxuXHRQc2NyOiAnXFx1RDgzNVxcdURDQUInLFxuXHRwc2NyOiAnXFx1RDgzNVxcdURDQzUnLFxuXHRQc2k6ICdcXHUwM0E4Jyxcblx0cHNpOiAnXFx1MDNDOCcsXG5cdHB1bmNzcDogJ1xcdTIwMDgnLFxuXHRRZnI6ICdcXHVEODM1XFx1REQxNCcsXG5cdHFmcjogJ1xcdUQ4MzVcXHVERDJFJyxcblx0cWludDogJ1xcdTJBMEMnLFxuXHRRb3BmOiAnXFx1MjExQScsXG5cdHFvcGY6ICdcXHVEODM1XFx1REQ2MicsXG5cdHFwcmltZTogJ1xcdTIwNTcnLFxuXHRRc2NyOiAnXFx1RDgzNVxcdURDQUMnLFxuXHRxc2NyOiAnXFx1RDgzNVxcdURDQzYnLFxuXHRxdWF0ZXJuaW9uczogJ1xcdTIxMEQnLFxuXHRxdWF0aW50OiAnXFx1MkExNicsXG5cdHF1ZXN0OiAnXFx1MDAzRicsXG5cdHF1ZXN0ZXE6ICdcXHUyMjVGJyxcblx0UVVPVDogJ1xcdTAwMjInLFxuXHRxdW90OiAnXFx1MDAyMicsXG5cdHJBYXJyOiAnXFx1MjFEQicsXG5cdHJhY2U6ICdcXHUyMjNEXFx1MDMzMScsXG5cdFJhY3V0ZTogJ1xcdTAxNTQnLFxuXHRyYWN1dGU6ICdcXHUwMTU1Jyxcblx0cmFkaWM6ICdcXHUyMjFBJyxcblx0cmFlbXB0eXY6ICdcXHUyOUIzJyxcblx0UmFuZzogJ1xcdTI3RUInLFxuXHRyYW5nOiAnXFx1MjdFOScsXG5cdHJhbmdkOiAnXFx1Mjk5MicsXG5cdHJhbmdlOiAnXFx1MjlBNScsXG5cdHJhbmdsZTogJ1xcdTI3RTknLFxuXHRyYXF1bzogJ1xcdTAwQkInLFxuXHRSYXJyOiAnXFx1MjFBMCcsXG5cdHJBcnI6ICdcXHUyMUQyJyxcblx0cmFycjogJ1xcdTIxOTInLFxuXHRyYXJyYXA6ICdcXHUyOTc1Jyxcblx0cmFycmI6ICdcXHUyMUU1Jyxcblx0cmFycmJmczogJ1xcdTI5MjAnLFxuXHRyYXJyYzogJ1xcdTI5MzMnLFxuXHRyYXJyZnM6ICdcXHUyOTFFJyxcblx0cmFycmhrOiAnXFx1MjFBQScsXG5cdHJhcnJscDogJ1xcdTIxQUMnLFxuXHRyYXJycGw6ICdcXHUyOTQ1Jyxcblx0cmFycnNpbTogJ1xcdTI5NzQnLFxuXHRSYXJydGw6ICdcXHUyOTE2Jyxcblx0cmFycnRsOiAnXFx1MjFBMycsXG5cdHJhcnJ3OiAnXFx1MjE5RCcsXG5cdHJBdGFpbDogJ1xcdTI5MUMnLFxuXHRyYXRhaWw6ICdcXHUyOTFBJyxcblx0cmF0aW86ICdcXHUyMjM2Jyxcblx0cmF0aW9uYWxzOiAnXFx1MjExQScsXG5cdFJCYXJyOiAnXFx1MjkxMCcsXG5cdHJCYXJyOiAnXFx1MjkwRicsXG5cdHJiYXJyOiAnXFx1MjkwRCcsXG5cdHJiYnJrOiAnXFx1Mjc3MycsXG5cdHJicmFjZTogJ1xcdTAwN0QnLFxuXHRyYnJhY2s6ICdcXHUwMDVEJyxcblx0cmJya2U6ICdcXHUyOThDJyxcblx0cmJya3NsZDogJ1xcdTI5OEUnLFxuXHRyYnJrc2x1OiAnXFx1Mjk5MCcsXG5cdFJjYXJvbjogJ1xcdTAxNTgnLFxuXHRyY2Fyb246ICdcXHUwMTU5Jyxcblx0UmNlZGlsOiAnXFx1MDE1NicsXG5cdHJjZWRpbDogJ1xcdTAxNTcnLFxuXHRyY2VpbDogJ1xcdTIzMDknLFxuXHRyY3ViOiAnXFx1MDA3RCcsXG5cdFJjeTogJ1xcdTA0MjAnLFxuXHRyY3k6ICdcXHUwNDQwJyxcblx0cmRjYTogJ1xcdTI5MzcnLFxuXHRyZGxkaGFyOiAnXFx1Mjk2OScsXG5cdHJkcXVvOiAnXFx1MjAxRCcsXG5cdHJkcXVvcjogJ1xcdTIwMUQnLFxuXHRyZHNoOiAnXFx1MjFCMycsXG5cdFJlOiAnXFx1MjExQycsXG5cdHJlYWw6ICdcXHUyMTFDJyxcblx0cmVhbGluZTogJ1xcdTIxMUInLFxuXHRyZWFscGFydDogJ1xcdTIxMUMnLFxuXHRyZWFsczogJ1xcdTIxMUQnLFxuXHRyZWN0OiAnXFx1MjVBRCcsXG5cdFJFRzogJ1xcdTAwQUUnLFxuXHRyZWc6ICdcXHUwMEFFJyxcblx0UmV2ZXJzZUVsZW1lbnQ6ICdcXHUyMjBCJyxcblx0UmV2ZXJzZUVxdWlsaWJyaXVtOiAnXFx1MjFDQicsXG5cdFJldmVyc2VVcEVxdWlsaWJyaXVtOiAnXFx1Mjk2RicsXG5cdHJmaXNodDogJ1xcdTI5N0QnLFxuXHRyZmxvb3I6ICdcXHUyMzBCJyxcblx0UmZyOiAnXFx1MjExQycsXG5cdHJmcjogJ1xcdUQ4MzVcXHVERDJGJyxcblx0ckhhcjogJ1xcdTI5NjQnLFxuXHRyaGFyZDogJ1xcdTIxQzEnLFxuXHRyaGFydTogJ1xcdTIxQzAnLFxuXHRyaGFydWw6ICdcXHUyOTZDJyxcblx0UmhvOiAnXFx1MDNBMScsXG5cdHJobzogJ1xcdTAzQzEnLFxuXHRyaG92OiAnXFx1MDNGMScsXG5cdFJpZ2h0QW5nbGVCcmFja2V0OiAnXFx1MjdFOScsXG5cdFJpZ2h0QXJyb3c6ICdcXHUyMTkyJyxcblx0UmlnaHRhcnJvdzogJ1xcdTIxRDInLFxuXHRyaWdodGFycm93OiAnXFx1MjE5MicsXG5cdFJpZ2h0QXJyb3dCYXI6ICdcXHUyMUU1Jyxcblx0UmlnaHRBcnJvd0xlZnRBcnJvdzogJ1xcdTIxQzQnLFxuXHRyaWdodGFycm93dGFpbDogJ1xcdTIxQTMnLFxuXHRSaWdodENlaWxpbmc6ICdcXHUyMzA5Jyxcblx0UmlnaHREb3VibGVCcmFja2V0OiAnXFx1MjdFNycsXG5cdFJpZ2h0RG93blRlZVZlY3RvcjogJ1xcdTI5NUQnLFxuXHRSaWdodERvd25WZWN0b3I6ICdcXHUyMUMyJyxcblx0UmlnaHREb3duVmVjdG9yQmFyOiAnXFx1Mjk1NScsXG5cdFJpZ2h0Rmxvb3I6ICdcXHUyMzBCJyxcblx0cmlnaHRoYXJwb29uZG93bjogJ1xcdTIxQzEnLFxuXHRyaWdodGhhcnBvb251cDogJ1xcdTIxQzAnLFxuXHRyaWdodGxlZnRhcnJvd3M6ICdcXHUyMUM0Jyxcblx0cmlnaHRsZWZ0aGFycG9vbnM6ICdcXHUyMUNDJyxcblx0cmlnaHRyaWdodGFycm93czogJ1xcdTIxQzknLFxuXHRyaWdodHNxdWlnYXJyb3c6ICdcXHUyMTlEJyxcblx0UmlnaHRUZWU6ICdcXHUyMkEyJyxcblx0UmlnaHRUZWVBcnJvdzogJ1xcdTIxQTYnLFxuXHRSaWdodFRlZVZlY3RvcjogJ1xcdTI5NUInLFxuXHRyaWdodHRocmVldGltZXM6ICdcXHUyMkNDJyxcblx0UmlnaHRUcmlhbmdsZTogJ1xcdTIyQjMnLFxuXHRSaWdodFRyaWFuZ2xlQmFyOiAnXFx1MjlEMCcsXG5cdFJpZ2h0VHJpYW5nbGVFcXVhbDogJ1xcdTIyQjUnLFxuXHRSaWdodFVwRG93blZlY3RvcjogJ1xcdTI5NEYnLFxuXHRSaWdodFVwVGVlVmVjdG9yOiAnXFx1Mjk1QycsXG5cdFJpZ2h0VXBWZWN0b3I6ICdcXHUyMUJFJyxcblx0UmlnaHRVcFZlY3RvckJhcjogJ1xcdTI5NTQnLFxuXHRSaWdodFZlY3RvcjogJ1xcdTIxQzAnLFxuXHRSaWdodFZlY3RvckJhcjogJ1xcdTI5NTMnLFxuXHRyaW5nOiAnXFx1MDJEQScsXG5cdHJpc2luZ2RvdHNlcTogJ1xcdTIyNTMnLFxuXHRybGFycjogJ1xcdTIxQzQnLFxuXHRybGhhcjogJ1xcdTIxQ0MnLFxuXHRybG06ICdcXHUyMDBGJyxcblx0cm1vdXN0OiAnXFx1MjNCMScsXG5cdHJtb3VzdGFjaGU6ICdcXHUyM0IxJyxcblx0cm5taWQ6ICdcXHUyQUVFJyxcblx0cm9hbmc6ICdcXHUyN0VEJyxcblx0cm9hcnI6ICdcXHUyMUZFJyxcblx0cm9icms6ICdcXHUyN0U3Jyxcblx0cm9wYXI6ICdcXHUyOTg2Jyxcblx0Um9wZjogJ1xcdTIxMUQnLFxuXHRyb3BmOiAnXFx1RDgzNVxcdURENjMnLFxuXHRyb3BsdXM6ICdcXHUyQTJFJyxcblx0cm90aW1lczogJ1xcdTJBMzUnLFxuXHRSb3VuZEltcGxpZXM6ICdcXHUyOTcwJyxcblx0cnBhcjogJ1xcdTAwMjknLFxuXHRycGFyZ3Q6ICdcXHUyOTk0Jyxcblx0cnBwb2xpbnQ6ICdcXHUyQTEyJyxcblx0cnJhcnI6ICdcXHUyMUM5Jyxcblx0UnJpZ2h0YXJyb3c6ICdcXHUyMURCJyxcblx0cnNhcXVvOiAnXFx1MjAzQScsXG5cdFJzY3I6ICdcXHUyMTFCJyxcblx0cnNjcjogJ1xcdUQ4MzVcXHVEQ0M3Jyxcblx0UnNoOiAnXFx1MjFCMScsXG5cdHJzaDogJ1xcdTIxQjEnLFxuXHRyc3FiOiAnXFx1MDA1RCcsXG5cdHJzcXVvOiAnXFx1MjAxOScsXG5cdHJzcXVvcjogJ1xcdTIwMTknLFxuXHRydGhyZWU6ICdcXHUyMkNDJyxcblx0cnRpbWVzOiAnXFx1MjJDQScsXG5cdHJ0cmk6ICdcXHUyNUI5Jyxcblx0cnRyaWU6ICdcXHUyMkI1Jyxcblx0cnRyaWY6ICdcXHUyNUI4Jyxcblx0cnRyaWx0cmk6ICdcXHUyOUNFJyxcblx0UnVsZURlbGF5ZWQ6ICdcXHUyOUY0Jyxcblx0cnVsdWhhcjogJ1xcdTI5NjgnLFxuXHRyeDogJ1xcdTIxMUUnLFxuXHRTYWN1dGU6ICdcXHUwMTVBJyxcblx0c2FjdXRlOiAnXFx1MDE1QicsXG5cdHNicXVvOiAnXFx1MjAxQScsXG5cdFNjOiAnXFx1MkFCQycsXG5cdHNjOiAnXFx1MjI3QicsXG5cdHNjYXA6ICdcXHUyQUI4Jyxcblx0U2Nhcm9uOiAnXFx1MDE2MCcsXG5cdHNjYXJvbjogJ1xcdTAxNjEnLFxuXHRzY2N1ZTogJ1xcdTIyN0QnLFxuXHRzY0U6ICdcXHUyQUI0Jyxcblx0c2NlOiAnXFx1MkFCMCcsXG5cdFNjZWRpbDogJ1xcdTAxNUUnLFxuXHRzY2VkaWw6ICdcXHUwMTVGJyxcblx0U2NpcmM6ICdcXHUwMTVDJyxcblx0c2NpcmM6ICdcXHUwMTVEJyxcblx0c2NuYXA6ICdcXHUyQUJBJyxcblx0c2NuRTogJ1xcdTJBQjYnLFxuXHRzY25zaW06ICdcXHUyMkU5Jyxcblx0c2Nwb2xpbnQ6ICdcXHUyQTEzJyxcblx0c2NzaW06ICdcXHUyMjdGJyxcblx0U2N5OiAnXFx1MDQyMScsXG5cdHNjeTogJ1xcdTA0NDEnLFxuXHRzZG90OiAnXFx1MjJDNScsXG5cdHNkb3RiOiAnXFx1MjJBMScsXG5cdHNkb3RlOiAnXFx1MkE2NicsXG5cdHNlYXJoazogJ1xcdTI5MjUnLFxuXHRzZUFycjogJ1xcdTIxRDgnLFxuXHRzZWFycjogJ1xcdTIxOTgnLFxuXHRzZWFycm93OiAnXFx1MjE5OCcsXG5cdHNlY3Q6ICdcXHUwMEE3Jyxcblx0c2VtaTogJ1xcdTAwM0InLFxuXHRzZXN3YXI6ICdcXHUyOTI5Jyxcblx0c2V0bWludXM6ICdcXHUyMjE2Jyxcblx0c2V0bW46ICdcXHUyMjE2Jyxcblx0c2V4dDogJ1xcdTI3MzYnLFxuXHRTZnI6ICdcXHVEODM1XFx1REQxNicsXG5cdHNmcjogJ1xcdUQ4MzVcXHVERDMwJyxcblx0c2Zyb3duOiAnXFx1MjMyMicsXG5cdHNoYXJwOiAnXFx1MjY2RicsXG5cdFNIQ0hjeTogJ1xcdTA0MjknLFxuXHRzaGNoY3k6ICdcXHUwNDQ5Jyxcblx0U0hjeTogJ1xcdTA0MjgnLFxuXHRzaGN5OiAnXFx1MDQ0OCcsXG5cdFNob3J0RG93bkFycm93OiAnXFx1MjE5MycsXG5cdFNob3J0TGVmdEFycm93OiAnXFx1MjE5MCcsXG5cdHNob3J0bWlkOiAnXFx1MjIyMycsXG5cdHNob3J0cGFyYWxsZWw6ICdcXHUyMjI1Jyxcblx0U2hvcnRSaWdodEFycm93OiAnXFx1MjE5MicsXG5cdFNob3J0VXBBcnJvdzogJ1xcdTIxOTEnLFxuXHRzaHk6ICdcXHUwMEFEJyxcblx0U2lnbWE6ICdcXHUwM0EzJyxcblx0c2lnbWE6ICdcXHUwM0MzJyxcblx0c2lnbWFmOiAnXFx1MDNDMicsXG5cdHNpZ21hdjogJ1xcdTAzQzInLFxuXHRzaW06ICdcXHUyMjNDJyxcblx0c2ltZG90OiAnXFx1MkE2QScsXG5cdHNpbWU6ICdcXHUyMjQzJyxcblx0c2ltZXE6ICdcXHUyMjQzJyxcblx0c2ltZzogJ1xcdTJBOUUnLFxuXHRzaW1nRTogJ1xcdTJBQTAnLFxuXHRzaW1sOiAnXFx1MkE5RCcsXG5cdHNpbWxFOiAnXFx1MkE5RicsXG5cdHNpbW5lOiAnXFx1MjI0NicsXG5cdHNpbXBsdXM6ICdcXHUyQTI0Jyxcblx0c2ltcmFycjogJ1xcdTI5NzInLFxuXHRzbGFycjogJ1xcdTIxOTAnLFxuXHRTbWFsbENpcmNsZTogJ1xcdTIyMTgnLFxuXHRzbWFsbHNldG1pbnVzOiAnXFx1MjIxNicsXG5cdHNtYXNocDogJ1xcdTJBMzMnLFxuXHRzbWVwYXJzbDogJ1xcdTI5RTQnLFxuXHRzbWlkOiAnXFx1MjIyMycsXG5cdHNtaWxlOiAnXFx1MjMyMycsXG5cdHNtdDogJ1xcdTJBQUEnLFxuXHRzbXRlOiAnXFx1MkFBQycsXG5cdHNtdGVzOiAnXFx1MkFBQ1xcdUZFMDAnLFxuXHRTT0ZUY3k6ICdcXHUwNDJDJyxcblx0c29mdGN5OiAnXFx1MDQ0QycsXG5cdHNvbDogJ1xcdTAwMkYnLFxuXHRzb2xiOiAnXFx1MjlDNCcsXG5cdHNvbGJhcjogJ1xcdTIzM0YnLFxuXHRTb3BmOiAnXFx1RDgzNVxcdURENEEnLFxuXHRzb3BmOiAnXFx1RDgzNVxcdURENjQnLFxuXHRzcGFkZXM6ICdcXHUyNjYwJyxcblx0c3BhZGVzdWl0OiAnXFx1MjY2MCcsXG5cdHNwYXI6ICdcXHUyMjI1Jyxcblx0c3FjYXA6ICdcXHUyMjkzJyxcblx0c3FjYXBzOiAnXFx1MjI5M1xcdUZFMDAnLFxuXHRzcWN1cDogJ1xcdTIyOTQnLFxuXHRzcWN1cHM6ICdcXHUyMjk0XFx1RkUwMCcsXG5cdFNxcnQ6ICdcXHUyMjFBJyxcblx0c3FzdWI6ICdcXHUyMjhGJyxcblx0c3FzdWJlOiAnXFx1MjI5MScsXG5cdHNxc3Vic2V0OiAnXFx1MjI4RicsXG5cdHNxc3Vic2V0ZXE6ICdcXHUyMjkxJyxcblx0c3FzdXA6ICdcXHUyMjkwJyxcblx0c3FzdXBlOiAnXFx1MjI5MicsXG5cdHNxc3Vwc2V0OiAnXFx1MjI5MCcsXG5cdHNxc3Vwc2V0ZXE6ICdcXHUyMjkyJyxcblx0c3F1OiAnXFx1MjVBMScsXG5cdFNxdWFyZTogJ1xcdTI1QTEnLFxuXHRzcXVhcmU6ICdcXHUyNUExJyxcblx0U3F1YXJlSW50ZXJzZWN0aW9uOiAnXFx1MjI5MycsXG5cdFNxdWFyZVN1YnNldDogJ1xcdTIyOEYnLFxuXHRTcXVhcmVTdWJzZXRFcXVhbDogJ1xcdTIyOTEnLFxuXHRTcXVhcmVTdXBlcnNldDogJ1xcdTIyOTAnLFxuXHRTcXVhcmVTdXBlcnNldEVxdWFsOiAnXFx1MjI5MicsXG5cdFNxdWFyZVVuaW9uOiAnXFx1MjI5NCcsXG5cdHNxdWFyZjogJ1xcdTI1QUEnLFxuXHRzcXVmOiAnXFx1MjVBQScsXG5cdHNyYXJyOiAnXFx1MjE5MicsXG5cdFNzY3I6ICdcXHVEODM1XFx1RENBRScsXG5cdHNzY3I6ICdcXHVEODM1XFx1RENDOCcsXG5cdHNzZXRtbjogJ1xcdTIyMTYnLFxuXHRzc21pbGU6ICdcXHUyMzIzJyxcblx0c3N0YXJmOiAnXFx1MjJDNicsXG5cdFN0YXI6ICdcXHUyMkM2Jyxcblx0c3RhcjogJ1xcdTI2MDYnLFxuXHRzdGFyZjogJ1xcdTI2MDUnLFxuXHRzdHJhaWdodGVwc2lsb246ICdcXHUwM0Y1Jyxcblx0c3RyYWlnaHRwaGk6ICdcXHUwM0Q1Jyxcblx0c3RybnM6ICdcXHUwMEFGJyxcblx0U3ViOiAnXFx1MjJEMCcsXG5cdHN1YjogJ1xcdTIyODInLFxuXHRzdWJkb3Q6ICdcXHUyQUJEJyxcblx0c3ViRTogJ1xcdTJBQzUnLFxuXHRzdWJlOiAnXFx1MjI4NicsXG5cdHN1YmVkb3Q6ICdcXHUyQUMzJyxcblx0c3VibXVsdDogJ1xcdTJBQzEnLFxuXHRzdWJuRTogJ1xcdTJBQ0InLFxuXHRzdWJuZTogJ1xcdTIyOEEnLFxuXHRzdWJwbHVzOiAnXFx1MkFCRicsXG5cdHN1YnJhcnI6ICdcXHUyOTc5Jyxcblx0U3Vic2V0OiAnXFx1MjJEMCcsXG5cdHN1YnNldDogJ1xcdTIyODInLFxuXHRzdWJzZXRlcTogJ1xcdTIyODYnLFxuXHRzdWJzZXRlcXE6ICdcXHUyQUM1Jyxcblx0U3Vic2V0RXF1YWw6ICdcXHUyMjg2Jyxcblx0c3Vic2V0bmVxOiAnXFx1MjI4QScsXG5cdHN1YnNldG5lcXE6ICdcXHUyQUNCJyxcblx0c3Vic2ltOiAnXFx1MkFDNycsXG5cdHN1YnN1YjogJ1xcdTJBRDUnLFxuXHRzdWJzdXA6ICdcXHUyQUQzJyxcblx0c3VjYzogJ1xcdTIyN0InLFxuXHRzdWNjYXBwcm94OiAnXFx1MkFCOCcsXG5cdHN1Y2NjdXJseWVxOiAnXFx1MjI3RCcsXG5cdFN1Y2NlZWRzOiAnXFx1MjI3QicsXG5cdFN1Y2NlZWRzRXF1YWw6ICdcXHUyQUIwJyxcblx0U3VjY2VlZHNTbGFudEVxdWFsOiAnXFx1MjI3RCcsXG5cdFN1Y2NlZWRzVGlsZGU6ICdcXHUyMjdGJyxcblx0c3VjY2VxOiAnXFx1MkFCMCcsXG5cdHN1Y2NuYXBwcm94OiAnXFx1MkFCQScsXG5cdHN1Y2NuZXFxOiAnXFx1MkFCNicsXG5cdHN1Y2Nuc2ltOiAnXFx1MjJFOScsXG5cdHN1Y2NzaW06ICdcXHUyMjdGJyxcblx0U3VjaFRoYXQ6ICdcXHUyMjBCJyxcblx0U3VtOiAnXFx1MjIxMScsXG5cdHN1bTogJ1xcdTIyMTEnLFxuXHRzdW5nOiAnXFx1MjY2QScsXG5cdFN1cDogJ1xcdTIyRDEnLFxuXHRzdXA6ICdcXHUyMjgzJyxcblx0c3VwMTogJ1xcdTAwQjknLFxuXHRzdXAyOiAnXFx1MDBCMicsXG5cdHN1cDM6ICdcXHUwMEIzJyxcblx0c3VwZG90OiAnXFx1MkFCRScsXG5cdHN1cGRzdWI6ICdcXHUyQUQ4Jyxcblx0c3VwRTogJ1xcdTJBQzYnLFxuXHRzdXBlOiAnXFx1MjI4NycsXG5cdHN1cGVkb3Q6ICdcXHUyQUM0Jyxcblx0U3VwZXJzZXQ6ICdcXHUyMjgzJyxcblx0U3VwZXJzZXRFcXVhbDogJ1xcdTIyODcnLFxuXHRzdXBoc29sOiAnXFx1MjdDOScsXG5cdHN1cGhzdWI6ICdcXHUyQUQ3Jyxcblx0c3VwbGFycjogJ1xcdTI5N0InLFxuXHRzdXBtdWx0OiAnXFx1MkFDMicsXG5cdHN1cG5FOiAnXFx1MkFDQycsXG5cdHN1cG5lOiAnXFx1MjI4QicsXG5cdHN1cHBsdXM6ICdcXHUyQUMwJyxcblx0U3Vwc2V0OiAnXFx1MjJEMScsXG5cdHN1cHNldDogJ1xcdTIyODMnLFxuXHRzdXBzZXRlcTogJ1xcdTIyODcnLFxuXHRzdXBzZXRlcXE6ICdcXHUyQUM2Jyxcblx0c3Vwc2V0bmVxOiAnXFx1MjI4QicsXG5cdHN1cHNldG5lcXE6ICdcXHUyQUNDJyxcblx0c3Vwc2ltOiAnXFx1MkFDOCcsXG5cdHN1cHN1YjogJ1xcdTJBRDQnLFxuXHRzdXBzdXA6ICdcXHUyQUQ2Jyxcblx0c3dhcmhrOiAnXFx1MjkyNicsXG5cdHN3QXJyOiAnXFx1MjFEOScsXG5cdHN3YXJyOiAnXFx1MjE5OScsXG5cdHN3YXJyb3c6ICdcXHUyMTk5Jyxcblx0c3dud2FyOiAnXFx1MjkyQScsXG5cdHN6bGlnOiAnXFx1MDBERicsXG5cdFRhYjogJ1xcdTAwMDknLFxuXHR0YXJnZXQ6ICdcXHUyMzE2Jyxcblx0VGF1OiAnXFx1MDNBNCcsXG5cdHRhdTogJ1xcdTAzQzQnLFxuXHR0YnJrOiAnXFx1MjNCNCcsXG5cdFRjYXJvbjogJ1xcdTAxNjQnLFxuXHR0Y2Fyb246ICdcXHUwMTY1Jyxcblx0VGNlZGlsOiAnXFx1MDE2MicsXG5cdHRjZWRpbDogJ1xcdTAxNjMnLFxuXHRUY3k6ICdcXHUwNDIyJyxcblx0dGN5OiAnXFx1MDQ0MicsXG5cdHRkb3Q6ICdcXHUyMERCJyxcblx0dGVscmVjOiAnXFx1MjMxNScsXG5cdFRmcjogJ1xcdUQ4MzVcXHVERDE3Jyxcblx0dGZyOiAnXFx1RDgzNVxcdUREMzEnLFxuXHR0aGVyZTQ6ICdcXHUyMjM0Jyxcblx0VGhlcmVmb3JlOiAnXFx1MjIzNCcsXG5cdHRoZXJlZm9yZTogJ1xcdTIyMzQnLFxuXHRUaGV0YTogJ1xcdTAzOTgnLFxuXHR0aGV0YTogJ1xcdTAzQjgnLFxuXHR0aGV0YXN5bTogJ1xcdTAzRDEnLFxuXHR0aGV0YXY6ICdcXHUwM0QxJyxcblx0dGhpY2thcHByb3g6ICdcXHUyMjQ4Jyxcblx0dGhpY2tzaW06ICdcXHUyMjNDJyxcblx0VGhpY2tTcGFjZTogJ1xcdTIwNUZcXHUyMDBBJyxcblx0dGhpbnNwOiAnXFx1MjAwOScsXG5cdFRoaW5TcGFjZTogJ1xcdTIwMDknLFxuXHR0aGthcDogJ1xcdTIyNDgnLFxuXHR0aGtzaW06ICdcXHUyMjNDJyxcblx0VEhPUk46ICdcXHUwMERFJyxcblx0dGhvcm46ICdcXHUwMEZFJyxcblx0VGlsZGU6ICdcXHUyMjNDJyxcblx0dGlsZGU6ICdcXHUwMkRDJyxcblx0VGlsZGVFcXVhbDogJ1xcdTIyNDMnLFxuXHRUaWxkZUZ1bGxFcXVhbDogJ1xcdTIyNDUnLFxuXHRUaWxkZVRpbGRlOiAnXFx1MjI0OCcsXG5cdHRpbWVzOiAnXFx1MDBENycsXG5cdHRpbWVzYjogJ1xcdTIyQTAnLFxuXHR0aW1lc2JhcjogJ1xcdTJBMzEnLFxuXHR0aW1lc2Q6ICdcXHUyQTMwJyxcblx0dGludDogJ1xcdTIyMkQnLFxuXHR0b2VhOiAnXFx1MjkyOCcsXG5cdHRvcDogJ1xcdTIyQTQnLFxuXHR0b3Bib3Q6ICdcXHUyMzM2Jyxcblx0dG9wY2lyOiAnXFx1MkFGMScsXG5cdFRvcGY6ICdcXHVEODM1XFx1REQ0QicsXG5cdHRvcGY6ICdcXHVEODM1XFx1REQ2NScsXG5cdHRvcGZvcms6ICdcXHUyQURBJyxcblx0dG9zYTogJ1xcdTI5MjknLFxuXHR0cHJpbWU6ICdcXHUyMDM0Jyxcblx0VFJBREU6ICdcXHUyMTIyJyxcblx0dHJhZGU6ICdcXHUyMTIyJyxcblx0dHJpYW5nbGU6ICdcXHUyNUI1Jyxcblx0dHJpYW5nbGVkb3duOiAnXFx1MjVCRicsXG5cdHRyaWFuZ2xlbGVmdDogJ1xcdTI1QzMnLFxuXHR0cmlhbmdsZWxlZnRlcTogJ1xcdTIyQjQnLFxuXHR0cmlhbmdsZXE6ICdcXHUyMjVDJyxcblx0dHJpYW5nbGVyaWdodDogJ1xcdTI1QjknLFxuXHR0cmlhbmdsZXJpZ2h0ZXE6ICdcXHUyMkI1Jyxcblx0dHJpZG90OiAnXFx1MjVFQycsXG5cdHRyaWU6ICdcXHUyMjVDJyxcblx0dHJpbWludXM6ICdcXHUyQTNBJyxcblx0VHJpcGxlRG90OiAnXFx1MjBEQicsXG5cdHRyaXBsdXM6ICdcXHUyQTM5Jyxcblx0dHJpc2I6ICdcXHUyOUNEJyxcblx0dHJpdGltZTogJ1xcdTJBM0InLFxuXHR0cnBleml1bTogJ1xcdTIzRTInLFxuXHRUc2NyOiAnXFx1RDgzNVxcdURDQUYnLFxuXHR0c2NyOiAnXFx1RDgzNVxcdURDQzknLFxuXHRUU2N5OiAnXFx1MDQyNicsXG5cdHRzY3k6ICdcXHUwNDQ2Jyxcblx0VFNIY3k6ICdcXHUwNDBCJyxcblx0dHNoY3k6ICdcXHUwNDVCJyxcblx0VHN0cm9rOiAnXFx1MDE2NicsXG5cdHRzdHJvazogJ1xcdTAxNjcnLFxuXHR0d2l4dDogJ1xcdTIyNkMnLFxuXHR0d29oZWFkbGVmdGFycm93OiAnXFx1MjE5RScsXG5cdHR3b2hlYWRyaWdodGFycm93OiAnXFx1MjFBMCcsXG5cdFVhY3V0ZTogJ1xcdTAwREEnLFxuXHR1YWN1dGU6ICdcXHUwMEZBJyxcblx0VWFycjogJ1xcdTIxOUYnLFxuXHR1QXJyOiAnXFx1MjFEMScsXG5cdHVhcnI6ICdcXHUyMTkxJyxcblx0VWFycm9jaXI6ICdcXHUyOTQ5Jyxcblx0VWJyY3k6ICdcXHUwNDBFJyxcblx0dWJyY3k6ICdcXHUwNDVFJyxcblx0VWJyZXZlOiAnXFx1MDE2QycsXG5cdHVicmV2ZTogJ1xcdTAxNkQnLFxuXHRVY2lyYzogJ1xcdTAwREInLFxuXHR1Y2lyYzogJ1xcdTAwRkInLFxuXHRVY3k6ICdcXHUwNDIzJyxcblx0dWN5OiAnXFx1MDQ0MycsXG5cdHVkYXJyOiAnXFx1MjFDNScsXG5cdFVkYmxhYzogJ1xcdTAxNzAnLFxuXHR1ZGJsYWM6ICdcXHUwMTcxJyxcblx0dWRoYXI6ICdcXHUyOTZFJyxcblx0dWZpc2h0OiAnXFx1Mjk3RScsXG5cdFVmcjogJ1xcdUQ4MzVcXHVERDE4Jyxcblx0dWZyOiAnXFx1RDgzNVxcdUREMzInLFxuXHRVZ3JhdmU6ICdcXHUwMEQ5Jyxcblx0dWdyYXZlOiAnXFx1MDBGOScsXG5cdHVIYXI6ICdcXHUyOTYzJyxcblx0dWhhcmw6ICdcXHUyMUJGJyxcblx0dWhhcnI6ICdcXHUyMUJFJyxcblx0dWhibGs6ICdcXHUyNTgwJyxcblx0dWxjb3JuOiAnXFx1MjMxQycsXG5cdHVsY29ybmVyOiAnXFx1MjMxQycsXG5cdHVsY3JvcDogJ1xcdTIzMEYnLFxuXHR1bHRyaTogJ1xcdTI1RjgnLFxuXHRVbWFjcjogJ1xcdTAxNkEnLFxuXHR1bWFjcjogJ1xcdTAxNkInLFxuXHR1bWw6ICdcXHUwMEE4Jyxcblx0VW5kZXJCYXI6ICdcXHUwMDVGJyxcblx0VW5kZXJCcmFjZTogJ1xcdTIzREYnLFxuXHRVbmRlckJyYWNrZXQ6ICdcXHUyM0I1Jyxcblx0VW5kZXJQYXJlbnRoZXNpczogJ1xcdTIzREQnLFxuXHRVbmlvbjogJ1xcdTIyQzMnLFxuXHRVbmlvblBsdXM6ICdcXHUyMjhFJyxcblx0VW9nb246ICdcXHUwMTcyJyxcblx0dW9nb246ICdcXHUwMTczJyxcblx0VW9wZjogJ1xcdUQ4MzVcXHVERDRDJyxcblx0dW9wZjogJ1xcdUQ4MzVcXHVERDY2Jyxcblx0VXBBcnJvdzogJ1xcdTIxOTEnLFxuXHRVcGFycm93OiAnXFx1MjFEMScsXG5cdHVwYXJyb3c6ICdcXHUyMTkxJyxcblx0VXBBcnJvd0JhcjogJ1xcdTI5MTInLFxuXHRVcEFycm93RG93bkFycm93OiAnXFx1MjFDNScsXG5cdFVwRG93bkFycm93OiAnXFx1MjE5NScsXG5cdFVwZG93bmFycm93OiAnXFx1MjFENScsXG5cdHVwZG93bmFycm93OiAnXFx1MjE5NScsXG5cdFVwRXF1aWxpYnJpdW06ICdcXHUyOTZFJyxcblx0dXBoYXJwb29ubGVmdDogJ1xcdTIxQkYnLFxuXHR1cGhhcnBvb25yaWdodDogJ1xcdTIxQkUnLFxuXHR1cGx1czogJ1xcdTIyOEUnLFxuXHRVcHBlckxlZnRBcnJvdzogJ1xcdTIxOTYnLFxuXHRVcHBlclJpZ2h0QXJyb3c6ICdcXHUyMTk3Jyxcblx0VXBzaTogJ1xcdTAzRDInLFxuXHR1cHNpOiAnXFx1MDNDNScsXG5cdHVwc2loOiAnXFx1MDNEMicsXG5cdFVwc2lsb246ICdcXHUwM0E1Jyxcblx0dXBzaWxvbjogJ1xcdTAzQzUnLFxuXHRVcFRlZTogJ1xcdTIyQTUnLFxuXHRVcFRlZUFycm93OiAnXFx1MjFBNScsXG5cdHVwdXBhcnJvd3M6ICdcXHUyMUM4Jyxcblx0dXJjb3JuOiAnXFx1MjMxRCcsXG5cdHVyY29ybmVyOiAnXFx1MjMxRCcsXG5cdHVyY3JvcDogJ1xcdTIzMEUnLFxuXHRVcmluZzogJ1xcdTAxNkUnLFxuXHR1cmluZzogJ1xcdTAxNkYnLFxuXHR1cnRyaTogJ1xcdTI1RjknLFxuXHRVc2NyOiAnXFx1RDgzNVxcdURDQjAnLFxuXHR1c2NyOiAnXFx1RDgzNVxcdURDQ0EnLFxuXHR1dGRvdDogJ1xcdTIyRjAnLFxuXHRVdGlsZGU6ICdcXHUwMTY4Jyxcblx0dXRpbGRlOiAnXFx1MDE2OScsXG5cdHV0cmk6ICdcXHUyNUI1Jyxcblx0dXRyaWY6ICdcXHUyNUI0Jyxcblx0dXVhcnI6ICdcXHUyMUM4Jyxcblx0VXVtbDogJ1xcdTAwREMnLFxuXHR1dW1sOiAnXFx1MDBGQycsXG5cdHV3YW5nbGU6ICdcXHUyOUE3Jyxcblx0dmFuZ3J0OiAnXFx1Mjk5QycsXG5cdHZhcmVwc2lsb246ICdcXHUwM0Y1Jyxcblx0dmFya2FwcGE6ICdcXHUwM0YwJyxcblx0dmFybm90aGluZzogJ1xcdTIyMDUnLFxuXHR2YXJwaGk6ICdcXHUwM0Q1Jyxcblx0dmFycGk6ICdcXHUwM0Q2Jyxcblx0dmFycHJvcHRvOiAnXFx1MjIxRCcsXG5cdHZBcnI6ICdcXHUyMUQ1Jyxcblx0dmFycjogJ1xcdTIxOTUnLFxuXHR2YXJyaG86ICdcXHUwM0YxJyxcblx0dmFyc2lnbWE6ICdcXHUwM0MyJyxcblx0dmFyc3Vic2V0bmVxOiAnXFx1MjI4QVxcdUZFMDAnLFxuXHR2YXJzdWJzZXRuZXFxOiAnXFx1MkFDQlxcdUZFMDAnLFxuXHR2YXJzdXBzZXRuZXE6ICdcXHUyMjhCXFx1RkUwMCcsXG5cdHZhcnN1cHNldG5lcXE6ICdcXHUyQUNDXFx1RkUwMCcsXG5cdHZhcnRoZXRhOiAnXFx1MDNEMScsXG5cdHZhcnRyaWFuZ2xlbGVmdDogJ1xcdTIyQjInLFxuXHR2YXJ0cmlhbmdsZXJpZ2h0OiAnXFx1MjJCMycsXG5cdFZiYXI6ICdcXHUyQUVCJyxcblx0dkJhcjogJ1xcdTJBRTgnLFxuXHR2QmFydjogJ1xcdTJBRTknLFxuXHRWY3k6ICdcXHUwNDEyJyxcblx0dmN5OiAnXFx1MDQzMicsXG5cdFZEYXNoOiAnXFx1MjJBQicsXG5cdFZkYXNoOiAnXFx1MjJBOScsXG5cdHZEYXNoOiAnXFx1MjJBOCcsXG5cdHZkYXNoOiAnXFx1MjJBMicsXG5cdFZkYXNobDogJ1xcdTJBRTYnLFxuXHRWZWU6ICdcXHUyMkMxJyxcblx0dmVlOiAnXFx1MjIyOCcsXG5cdHZlZWJhcjogJ1xcdTIyQkInLFxuXHR2ZWVlcTogJ1xcdTIyNUEnLFxuXHR2ZWxsaXA6ICdcXHUyMkVFJyxcblx0VmVyYmFyOiAnXFx1MjAxNicsXG5cdHZlcmJhcjogJ1xcdTAwN0MnLFxuXHRWZXJ0OiAnXFx1MjAxNicsXG5cdHZlcnQ6ICdcXHUwMDdDJyxcblx0VmVydGljYWxCYXI6ICdcXHUyMjIzJyxcblx0VmVydGljYWxMaW5lOiAnXFx1MDA3QycsXG5cdFZlcnRpY2FsU2VwYXJhdG9yOiAnXFx1Mjc1OCcsXG5cdFZlcnRpY2FsVGlsZGU6ICdcXHUyMjQwJyxcblx0VmVyeVRoaW5TcGFjZTogJ1xcdTIwMEEnLFxuXHRWZnI6ICdcXHVEODM1XFx1REQxOScsXG5cdHZmcjogJ1xcdUQ4MzVcXHVERDMzJyxcblx0dmx0cmk6ICdcXHUyMkIyJyxcblx0dm5zdWI6ICdcXHUyMjgyXFx1MjBEMicsXG5cdHZuc3VwOiAnXFx1MjI4M1xcdTIwRDInLFxuXHRWb3BmOiAnXFx1RDgzNVxcdURENEQnLFxuXHR2b3BmOiAnXFx1RDgzNVxcdURENjcnLFxuXHR2cHJvcDogJ1xcdTIyMUQnLFxuXHR2cnRyaTogJ1xcdTIyQjMnLFxuXHRWc2NyOiAnXFx1RDgzNVxcdURDQjEnLFxuXHR2c2NyOiAnXFx1RDgzNVxcdURDQ0InLFxuXHR2c3VibkU6ICdcXHUyQUNCXFx1RkUwMCcsXG5cdHZzdWJuZTogJ1xcdTIyOEFcXHVGRTAwJyxcblx0dnN1cG5FOiAnXFx1MkFDQ1xcdUZFMDAnLFxuXHR2c3VwbmU6ICdcXHUyMjhCXFx1RkUwMCcsXG5cdFZ2ZGFzaDogJ1xcdTIyQUEnLFxuXHR2emlnemFnOiAnXFx1Mjk5QScsXG5cdFdjaXJjOiAnXFx1MDE3NCcsXG5cdHdjaXJjOiAnXFx1MDE3NScsXG5cdHdlZGJhcjogJ1xcdTJBNUYnLFxuXHRXZWRnZTogJ1xcdTIyQzAnLFxuXHR3ZWRnZTogJ1xcdTIyMjcnLFxuXHR3ZWRnZXE6ICdcXHUyMjU5Jyxcblx0d2VpZXJwOiAnXFx1MjExOCcsXG5cdFdmcjogJ1xcdUQ4MzVcXHVERDFBJyxcblx0d2ZyOiAnXFx1RDgzNVxcdUREMzQnLFxuXHRXb3BmOiAnXFx1RDgzNVxcdURENEUnLFxuXHR3b3BmOiAnXFx1RDgzNVxcdURENjgnLFxuXHR3cDogJ1xcdTIxMTgnLFxuXHR3cjogJ1xcdTIyNDAnLFxuXHR3cmVhdGg6ICdcXHUyMjQwJyxcblx0V3NjcjogJ1xcdUQ4MzVcXHVEQ0IyJyxcblx0d3NjcjogJ1xcdUQ4MzVcXHVEQ0NDJyxcblx0eGNhcDogJ1xcdTIyQzInLFxuXHR4Y2lyYzogJ1xcdTI1RUYnLFxuXHR4Y3VwOiAnXFx1MjJDMycsXG5cdHhkdHJpOiAnXFx1MjVCRCcsXG5cdFhmcjogJ1xcdUQ4MzVcXHVERDFCJyxcblx0eGZyOiAnXFx1RDgzNVxcdUREMzUnLFxuXHR4aEFycjogJ1xcdTI3RkEnLFxuXHR4aGFycjogJ1xcdTI3RjcnLFxuXHRYaTogJ1xcdTAzOUUnLFxuXHR4aTogJ1xcdTAzQkUnLFxuXHR4bEFycjogJ1xcdTI3RjgnLFxuXHR4bGFycjogJ1xcdTI3RjUnLFxuXHR4bWFwOiAnXFx1MjdGQycsXG5cdHhuaXM6ICdcXHUyMkZCJyxcblx0eG9kb3Q6ICdcXHUyQTAwJyxcblx0WG9wZjogJ1xcdUQ4MzVcXHVERDRGJyxcblx0eG9wZjogJ1xcdUQ4MzVcXHVERDY5Jyxcblx0eG9wbHVzOiAnXFx1MkEwMScsXG5cdHhvdGltZTogJ1xcdTJBMDInLFxuXHR4ckFycjogJ1xcdTI3RjknLFxuXHR4cmFycjogJ1xcdTI3RjYnLFxuXHRYc2NyOiAnXFx1RDgzNVxcdURDQjMnLFxuXHR4c2NyOiAnXFx1RDgzNVxcdURDQ0QnLFxuXHR4c3FjdXA6ICdcXHUyQTA2Jyxcblx0eHVwbHVzOiAnXFx1MkEwNCcsXG5cdHh1dHJpOiAnXFx1MjVCMycsXG5cdHh2ZWU6ICdcXHUyMkMxJyxcblx0eHdlZGdlOiAnXFx1MjJDMCcsXG5cdFlhY3V0ZTogJ1xcdTAwREQnLFxuXHR5YWN1dGU6ICdcXHUwMEZEJyxcblx0WUFjeTogJ1xcdTA0MkYnLFxuXHR5YWN5OiAnXFx1MDQ0RicsXG5cdFljaXJjOiAnXFx1MDE3NicsXG5cdHljaXJjOiAnXFx1MDE3NycsXG5cdFljeTogJ1xcdTA0MkInLFxuXHR5Y3k6ICdcXHUwNDRCJyxcblx0eWVuOiAnXFx1MDBBNScsXG5cdFlmcjogJ1xcdUQ4MzVcXHVERDFDJyxcblx0eWZyOiAnXFx1RDgzNVxcdUREMzYnLFxuXHRZSWN5OiAnXFx1MDQwNycsXG5cdHlpY3k6ICdcXHUwNDU3Jyxcblx0WW9wZjogJ1xcdUQ4MzVcXHVERDUwJyxcblx0eW9wZjogJ1xcdUQ4MzVcXHVERDZBJyxcblx0WXNjcjogJ1xcdUQ4MzVcXHVEQ0I0Jyxcblx0eXNjcjogJ1xcdUQ4MzVcXHVEQ0NFJyxcblx0WVVjeTogJ1xcdTA0MkUnLFxuXHR5dWN5OiAnXFx1MDQ0RScsXG5cdFl1bWw6ICdcXHUwMTc4Jyxcblx0eXVtbDogJ1xcdTAwRkYnLFxuXHRaYWN1dGU6ICdcXHUwMTc5Jyxcblx0emFjdXRlOiAnXFx1MDE3QScsXG5cdFpjYXJvbjogJ1xcdTAxN0QnLFxuXHR6Y2Fyb246ICdcXHUwMTdFJyxcblx0WmN5OiAnXFx1MDQxNycsXG5cdHpjeTogJ1xcdTA0MzcnLFxuXHRaZG90OiAnXFx1MDE3QicsXG5cdHpkb3Q6ICdcXHUwMTdDJyxcblx0emVldHJmOiAnXFx1MjEyOCcsXG5cdFplcm9XaWR0aFNwYWNlOiAnXFx1MjAwQicsXG5cdFpldGE6ICdcXHUwMzk2Jyxcblx0emV0YTogJ1xcdTAzQjYnLFxuXHRaZnI6ICdcXHUyMTI4Jyxcblx0emZyOiAnXFx1RDgzNVxcdUREMzcnLFxuXHRaSGN5OiAnXFx1MDQxNicsXG5cdHpoY3k6ICdcXHUwNDM2Jyxcblx0emlncmFycjogJ1xcdTIxREQnLFxuXHRab3BmOiAnXFx1MjEyNCcsXG5cdHpvcGY6ICdcXHVEODM1XFx1REQ2QicsXG5cdFpzY3I6ICdcXHVEODM1XFx1RENCNScsXG5cdHpzY3I6ICdcXHVEODM1XFx1RENDRicsXG5cdHp3ajogJ1xcdTIwMEQnLFxuXHR6d25qOiAnXFx1MjAwQycsXG59KTtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCB1c2UgYEhUTUxfRU5USVRJRVNgIGluc3RlYWRcbiAqIEBzZWUgSFRNTF9FTlRJVElFU1xuICovXG5leHBvcnRzLmVudGl0eU1hcCA9IGV4cG9ydHMuSFRNTF9FTlRJVElFUztcbiIsInZhciBkb20gPSByZXF1aXJlKCcuL2RvbScpXG5leHBvcnRzLkRPTUltcGxlbWVudGF0aW9uID0gZG9tLkRPTUltcGxlbWVudGF0aW9uXG5leHBvcnRzLlhNTFNlcmlhbGl6ZXIgPSBkb20uWE1MU2VyaWFsaXplclxuZXhwb3J0cy5ET01QYXJzZXIgPSByZXF1aXJlKCcuL2RvbS1wYXJzZXInKS5ET01QYXJzZXJcbiIsInZhciBOQU1FU1BBQ0UgPSByZXF1aXJlKFwiLi9jb252ZW50aW9uc1wiKS5OQU1FU1BBQ0U7XG5cbi8vWzRdICAgXHROYW1lU3RhcnRDaGFyXHQgICA6Oj0gICBcdFwiOlwiIHwgW0EtWl0gfCBcIl9cIiB8IFthLXpdIHwgWyN4QzAtI3hENl0gfCBbI3hEOC0jeEY2XSB8IFsjeEY4LSN4MkZGXSB8IFsjeDM3MC0jeDM3RF0gfCBbI3gzN0YtI3gxRkZGXSB8IFsjeDIwMEMtI3gyMDBEXSB8IFsjeDIwNzAtI3gyMThGXSB8IFsjeDJDMDAtI3gyRkVGXSB8IFsjeDMwMDEtI3hEN0ZGXSB8IFsjeEY5MDAtI3hGRENGXSB8IFsjeEZERjAtI3hGRkZEXSB8IFsjeDEwMDAwLSN4RUZGRkZdXG4vL1s0YV0gICBcdE5hbWVDaGFyXHQgICA6Oj0gICBcdE5hbWVTdGFydENoYXIgfCBcIi1cIiB8IFwiLlwiIHwgWzAtOV0gfCAjeEI3IHwgWyN4MDMwMC0jeDAzNkZdIHwgWyN4MjAzRi0jeDIwNDBdXG4vL1s1XSAgIFx0TmFtZVx0ICAgOjo9ICAgXHROYW1lU3RhcnRDaGFyIChOYW1lQ2hhcikqXG52YXIgbmFtZVN0YXJ0Q2hhciA9IC9bQS1aX2EtelxceEMwLVxceEQ2XFx4RDgtXFx4RjZcXHUwMEY4LVxcdTAyRkZcXHUwMzcwLVxcdTAzN0RcXHUwMzdGLVxcdTFGRkZcXHUyMDBDLVxcdTIwMERcXHUyMDcwLVxcdTIxOEZcXHUyQzAwLVxcdTJGRUZcXHUzMDAxLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRkRdLy8vXFx1MTAwMDAtXFx1RUZGRkZcbnZhciBuYW1lQ2hhciA9IG5ldyBSZWdFeHAoXCJbXFxcXC1cXFxcLjAtOVwiK25hbWVTdGFydENoYXIuc291cmNlLnNsaWNlKDEsLTEpK1wiXFxcXHUwMEI3XFxcXHUwMzAwLVxcXFx1MDM2RlxcXFx1MjAzRi1cXFxcdTIwNDBdXCIpO1xudmFyIHRhZ05hbWVQYXR0ZXJuID0gbmV3IFJlZ0V4cCgnXicrbmFtZVN0YXJ0Q2hhci5zb3VyY2UrbmFtZUNoYXIuc291cmNlKycqKD86XFw6JytuYW1lU3RhcnRDaGFyLnNvdXJjZStuYW1lQ2hhci5zb3VyY2UrJyopPyQnKTtcbi8vdmFyIHRhZ05hbWVQYXR0ZXJuID0gL15bYS16QS1aX11bXFx3XFwtXFwuXSooPzpcXDpbYS16QS1aX11bXFx3XFwtXFwuXSopPyQvXG4vL3ZhciBoYW5kbGVycyA9ICdyZXNvbHZlRW50aXR5LGdldEV4dGVybmFsU3Vic2V0LGNoYXJhY3RlcnMsZW5kRG9jdW1lbnQsZW5kRWxlbWVudCxlbmRQcmVmaXhNYXBwaW5nLGlnbm9yYWJsZVdoaXRlc3BhY2UscHJvY2Vzc2luZ0luc3RydWN0aW9uLHNldERvY3VtZW50TG9jYXRvcixza2lwcGVkRW50aXR5LHN0YXJ0RG9jdW1lbnQsc3RhcnRFbGVtZW50LHN0YXJ0UHJlZml4TWFwcGluZyxub3RhdGlvbkRlY2wsdW5wYXJzZWRFbnRpdHlEZWNsLGVycm9yLGZhdGFsRXJyb3Isd2FybmluZyxhdHRyaWJ1dGVEZWNsLGVsZW1lbnREZWNsLGV4dGVybmFsRW50aXR5RGVjbCxpbnRlcm5hbEVudGl0eURlY2wsY29tbWVudCxlbmRDREFUQSxlbmREVEQsZW5kRW50aXR5LHN0YXJ0Q0RBVEEsc3RhcnREVEQsc3RhcnRFbnRpdHknLnNwbGl0KCcsJylcblxuLy9TX1RBRyxcdFNfQVRUUixcdFNfRVEsXHRTX0FUVFJfTk9RVU9UX1ZBTFVFXG4vL1NfQVRUUl9TUEFDRSxcdFNfQVRUUl9FTkQsXHRTX1RBR19TUEFDRSwgU19UQUdfQ0xPU0VcbnZhciBTX1RBRyA9IDA7Ly90YWcgbmFtZSBvZmZlcnJpbmdcbnZhciBTX0FUVFIgPSAxOy8vYXR0ciBuYW1lIG9mZmVycmluZ1xudmFyIFNfQVRUUl9TUEFDRT0yOy8vYXR0ciBuYW1lIGVuZCBhbmQgc3BhY2Ugb2ZmZXJcbnZhciBTX0VRID0gMzsvLz1zcGFjZT9cbnZhciBTX0FUVFJfTk9RVU9UX1ZBTFVFID0gNDsvL2F0dHIgdmFsdWUobm8gcXVvdCB2YWx1ZSBvbmx5KVxudmFyIFNfQVRUUl9FTkQgPSA1Oy8vYXR0ciB2YWx1ZSBlbmQgYW5kIG5vIHNwYWNlKHF1b3QgZW5kKVxudmFyIFNfVEFHX1NQQUNFID0gNjsvLyhhdHRyIHZhbHVlIGVuZCB8fCB0YWcgZW5kICkgJiYgKHNwYWNlIG9mZmVyKVxudmFyIFNfVEFHX0NMT1NFID0gNzsvL2Nsb3NlZCBlbDxlbCAvPlxuXG4vKipcbiAqIENyZWF0ZXMgYW4gZXJyb3IgdGhhdCB3aWxsIG5vdCBiZSBjYXVnaHQgYnkgWE1MUmVhZGVyIGFrYSB0aGUgU0FYIHBhcnNlci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICogQHBhcmFtIHthbnk/fSBsb2NhdG9yIE9wdGlvbmFsLCBjYW4gcHJvdmlkZSBkZXRhaWxzIGFib3V0IHRoZSBsb2NhdGlvbiBpbiB0aGUgc291cmNlXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gUGFyc2VFcnJvcihtZXNzYWdlLCBsb2NhdG9yKSB7XG5cdHRoaXMubWVzc2FnZSA9IG1lc3NhZ2Vcblx0dGhpcy5sb2NhdG9yID0gbG9jYXRvclxuXHRpZihFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgUGFyc2VFcnJvcik7XG59XG5QYXJzZUVycm9yLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuUGFyc2VFcnJvci5wcm90b3R5cGUubmFtZSA9IFBhcnNlRXJyb3IubmFtZVxuXG5mdW5jdGlvbiBYTUxSZWFkZXIoKXtcblxufVxuXG5YTUxSZWFkZXIucHJvdG90eXBlID0ge1xuXHRwYXJzZTpmdW5jdGlvbihzb3VyY2UsZGVmYXVsdE5TTWFwLGVudGl0eU1hcCl7XG5cdFx0dmFyIGRvbUJ1aWxkZXIgPSB0aGlzLmRvbUJ1aWxkZXI7XG5cdFx0ZG9tQnVpbGRlci5zdGFydERvY3VtZW50KCk7XG5cdFx0X2NvcHkoZGVmYXVsdE5TTWFwICxkZWZhdWx0TlNNYXAgPSB7fSlcblx0XHRwYXJzZShzb3VyY2UsZGVmYXVsdE5TTWFwLGVudGl0eU1hcCxcblx0XHRcdFx0ZG9tQnVpbGRlcix0aGlzLmVycm9ySGFuZGxlcik7XG5cdFx0ZG9tQnVpbGRlci5lbmREb2N1bWVudCgpO1xuXHR9XG59XG5mdW5jdGlvbiBwYXJzZShzb3VyY2UsZGVmYXVsdE5TTWFwQ29weSxlbnRpdHlNYXAsZG9tQnVpbGRlcixlcnJvckhhbmRsZXIpe1xuXHRmdW5jdGlvbiBmaXhlZEZyb21DaGFyQ29kZShjb2RlKSB7XG5cdFx0Ly8gU3RyaW5nLnByb3RvdHlwZS5mcm9tQ2hhckNvZGUgZG9lcyBub3Qgc3VwcG9ydHNcblx0XHQvLyA+IDIgYnl0ZXMgdW5pY29kZSBjaGFycyBkaXJlY3RseVxuXHRcdGlmIChjb2RlID4gMHhmZmZmKSB7XG5cdFx0XHRjb2RlIC09IDB4MTAwMDA7XG5cdFx0XHR2YXIgc3Vycm9nYXRlMSA9IDB4ZDgwMCArIChjb2RlID4+IDEwKVxuXHRcdFx0XHQsIHN1cnJvZ2F0ZTIgPSAweGRjMDAgKyAoY29kZSAmIDB4M2ZmKTtcblxuXHRcdFx0cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoc3Vycm9nYXRlMSwgc3Vycm9nYXRlMik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpO1xuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBlbnRpdHlSZXBsYWNlcihhKXtcblx0XHR2YXIgayA9IGEuc2xpY2UoMSwtMSk7XG5cdFx0aWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKGVudGl0eU1hcCwgaykpIHtcblx0XHRcdHJldHVybiBlbnRpdHlNYXBba107XG5cdFx0fWVsc2UgaWYoay5jaGFyQXQoMCkgPT09ICcjJyl7XG5cdFx0XHRyZXR1cm4gZml4ZWRGcm9tQ2hhckNvZGUocGFyc2VJbnQoay5zdWJzdHIoMSkucmVwbGFjZSgneCcsJzB4JykpKVxuXHRcdH1lbHNle1xuXHRcdFx0ZXJyb3JIYW5kbGVyLmVycm9yKCdlbnRpdHkgbm90IGZvdW5kOicrYSk7XG5cdFx0XHRyZXR1cm4gYTtcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gYXBwZW5kVGV4dChlbmQpey8vaGFzIHNvbWUgYnVnc1xuXHRcdGlmKGVuZD5zdGFydCl7XG5cdFx0XHR2YXIgeHQgPSBzb3VyY2Uuc3Vic3RyaW5nKHN0YXJ0LGVuZCkucmVwbGFjZSgvJiM/XFx3KzsvZyxlbnRpdHlSZXBsYWNlcik7XG5cdFx0XHRsb2NhdG9yJiZwb3NpdGlvbihzdGFydCk7XG5cdFx0XHRkb21CdWlsZGVyLmNoYXJhY3RlcnMoeHQsMCxlbmQtc3RhcnQpO1xuXHRcdFx0c3RhcnQgPSBlbmRcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gcG9zaXRpb24ocCxtKXtcblx0XHR3aGlsZShwPj1saW5lRW5kICYmIChtID0gbGluZVBhdHRlcm4uZXhlYyhzb3VyY2UpKSl7XG5cdFx0XHRsaW5lU3RhcnQgPSBtLmluZGV4O1xuXHRcdFx0bGluZUVuZCA9IGxpbmVTdGFydCArIG1bMF0ubGVuZ3RoO1xuXHRcdFx0bG9jYXRvci5saW5lTnVtYmVyKys7XG5cdFx0XHQvL2NvbnNvbGUubG9nKCdsaW5lKys6Jyxsb2NhdG9yLHN0YXJ0UG9zLGVuZFBvcylcblx0XHR9XG5cdFx0bG9jYXRvci5jb2x1bW5OdW1iZXIgPSBwLWxpbmVTdGFydCsxO1xuXHR9XG5cdHZhciBsaW5lU3RhcnQgPSAwO1xuXHR2YXIgbGluZUVuZCA9IDA7XG5cdHZhciBsaW5lUGF0dGVybiA9IC8uKig/Olxcclxcbj98XFxuKXwuKiQvZ1xuXHR2YXIgbG9jYXRvciA9IGRvbUJ1aWxkZXIubG9jYXRvcjtcblxuXHR2YXIgcGFyc2VTdGFjayA9IFt7Y3VycmVudE5TTWFwOmRlZmF1bHROU01hcENvcHl9XVxuXHR2YXIgY2xvc2VNYXAgPSB7fTtcblx0dmFyIHN0YXJ0ID0gMDtcblx0d2hpbGUodHJ1ZSl7XG5cdFx0dHJ5e1xuXHRcdFx0dmFyIHRhZ1N0YXJ0ID0gc291cmNlLmluZGV4T2YoJzwnLHN0YXJ0KTtcblx0XHRcdGlmKHRhZ1N0YXJ0PDApe1xuXHRcdFx0XHRpZighc291cmNlLnN1YnN0cihzdGFydCkubWF0Y2goL15cXHMqJC8pKXtcblx0XHRcdFx0XHR2YXIgZG9jID0gZG9tQnVpbGRlci5kb2M7XG5cdCAgICBcdFx0XHR2YXIgdGV4dCA9IGRvYy5jcmVhdGVUZXh0Tm9kZShzb3VyY2Uuc3Vic3RyKHN0YXJ0KSk7XG5cdCAgICBcdFx0XHRkb2MuYXBwZW5kQ2hpbGQodGV4dCk7XG5cdCAgICBcdFx0XHRkb21CdWlsZGVyLmN1cnJlbnRFbGVtZW50ID0gdGV4dDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZih0YWdTdGFydD5zdGFydCl7XG5cdFx0XHRcdGFwcGVuZFRleHQodGFnU3RhcnQpO1xuXHRcdFx0fVxuXHRcdFx0c3dpdGNoKHNvdXJjZS5jaGFyQXQodGFnU3RhcnQrMSkpe1xuXHRcdFx0Y2FzZSAnLyc6XG5cdFx0XHRcdHZhciBlbmQgPSBzb3VyY2UuaW5kZXhPZignPicsdGFnU3RhcnQrMyk7XG5cdFx0XHRcdHZhciB0YWdOYW1lID0gc291cmNlLnN1YnN0cmluZyh0YWdTdGFydCArIDIsIGVuZCkucmVwbGFjZSgvWyBcXHRcXG5cXHJdKyQvZywgJycpO1xuXHRcdFx0XHR2YXIgY29uZmlnID0gcGFyc2VTdGFjay5wb3AoKTtcblx0XHRcdFx0aWYoZW5kPDApe1xuXG5cdCAgICAgICAgXHRcdHRhZ05hbWUgPSBzb3VyY2Uuc3Vic3RyaW5nKHRhZ1N0YXJ0KzIpLnJlcGxhY2UoL1tcXHM8XS4qLywnJyk7XG5cdCAgICAgICAgXHRcdGVycm9ySGFuZGxlci5lcnJvcihcImVuZCB0YWcgbmFtZTogXCIrdGFnTmFtZSsnIGlzIG5vdCBjb21wbGV0ZTonK2NvbmZpZy50YWdOYW1lKTtcblx0ICAgICAgICBcdFx0ZW5kID0gdGFnU3RhcnQrMSt0YWdOYW1lLmxlbmd0aDtcblx0ICAgICAgICBcdH1lbHNlIGlmKHRhZ05hbWUubWF0Y2goL1xcczwvKSl7XG5cdCAgICAgICAgXHRcdHRhZ05hbWUgPSB0YWdOYW1lLnJlcGxhY2UoL1tcXHM8XS4qLywnJyk7XG5cdCAgICAgICAgXHRcdGVycm9ySGFuZGxlci5lcnJvcihcImVuZCB0YWcgbmFtZTogXCIrdGFnTmFtZSsnIG1heWJlIG5vdCBjb21wbGV0ZScpO1xuXHQgICAgICAgIFx0XHRlbmQgPSB0YWdTdGFydCsxK3RhZ05hbWUubGVuZ3RoO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciBsb2NhbE5TTWFwID0gY29uZmlnLmxvY2FsTlNNYXA7XG5cdFx0XHRcdHZhciBlbmRNYXRjaCA9IGNvbmZpZy50YWdOYW1lID09IHRhZ05hbWU7XG5cdFx0XHRcdHZhciBlbmRJZ25vcmVDYXNlTWFjaCA9IGVuZE1hdGNoIHx8IGNvbmZpZy50YWdOYW1lJiZjb25maWcudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09IHRhZ05hbWUudG9Mb3dlckNhc2UoKVxuXHRcdCAgICAgICAgaWYoZW5kSWdub3JlQ2FzZU1hY2gpe1xuXHRcdCAgICAgICAgXHRkb21CdWlsZGVyLmVuZEVsZW1lbnQoY29uZmlnLnVyaSxjb25maWcubG9jYWxOYW1lLHRhZ05hbWUpO1xuXHRcdFx0XHRcdGlmKGxvY2FsTlNNYXApe1xuXHRcdFx0XHRcdFx0Zm9yICh2YXIgcHJlZml4IGluIGxvY2FsTlNNYXApIHtcblx0XHRcdFx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChsb2NhbE5TTWFwLCBwcmVmaXgpKSB7XG5cdFx0XHRcdFx0XHRcdFx0ZG9tQnVpbGRlci5lbmRQcmVmaXhNYXBwaW5nKHByZWZpeCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYoIWVuZE1hdGNoKXtcblx0XHQgICAgICAgICAgICBcdGVycm9ySGFuZGxlci5mYXRhbEVycm9yKFwiZW5kIHRhZyBuYW1lOiBcIit0YWdOYW1lKycgaXMgbm90IG1hdGNoIHRoZSBjdXJyZW50IHN0YXJ0IHRhZ05hbWU6Jytjb25maWcudGFnTmFtZSApOyAvLyBObyBrbm93biB0ZXN0IGNhc2Vcblx0XHRcdFx0XHR9XG5cdFx0ICAgICAgICB9ZWxzZXtcblx0XHQgICAgICAgIFx0cGFyc2VTdGFjay5wdXNoKGNvbmZpZylcblx0XHQgICAgICAgIH1cblxuXHRcdFx0XHRlbmQrKztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdC8vIGVuZCBlbG1lbnRcblx0XHRcdGNhc2UgJz8nOi8vIDw/Li4uPz5cblx0XHRcdFx0bG9jYXRvciYmcG9zaXRpb24odGFnU3RhcnQpO1xuXHRcdFx0XHRlbmQgPSBwYXJzZUluc3RydWN0aW9uKHNvdXJjZSx0YWdTdGFydCxkb21CdWlsZGVyKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICchJzovLyA8IWRvY3R5cGUsPCFbQ0RBVEEsPCEtLVxuXHRcdFx0XHRsb2NhdG9yJiZwb3NpdGlvbih0YWdTdGFydCk7XG5cdFx0XHRcdGVuZCA9IHBhcnNlRENDKHNvdXJjZSx0YWdTdGFydCxkb21CdWlsZGVyLGVycm9ySGFuZGxlcik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0bG9jYXRvciYmcG9zaXRpb24odGFnU3RhcnQpO1xuXHRcdFx0XHR2YXIgZWwgPSBuZXcgRWxlbWVudEF0dHJpYnV0ZXMoKTtcblx0XHRcdFx0dmFyIGN1cnJlbnROU01hcCA9IHBhcnNlU3RhY2tbcGFyc2VTdGFjay5sZW5ndGgtMV0uY3VycmVudE5TTWFwO1xuXHRcdFx0XHQvL2VsU3RhcnRFbmRcblx0XHRcdFx0dmFyIGVuZCA9IHBhcnNlRWxlbWVudFN0YXJ0UGFydChzb3VyY2UsdGFnU3RhcnQsZWwsY3VycmVudE5TTWFwLGVudGl0eVJlcGxhY2VyLGVycm9ySGFuZGxlcik7XG5cdFx0XHRcdHZhciBsZW4gPSBlbC5sZW5ndGg7XG5cblxuXHRcdFx0XHRpZighZWwuY2xvc2VkICYmIGZpeFNlbGZDbG9zZWQoc291cmNlLGVuZCxlbC50YWdOYW1lLGNsb3NlTWFwKSl7XG5cdFx0XHRcdFx0ZWwuY2xvc2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRpZighZW50aXR5TWFwLm5ic3Ape1xuXHRcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyLndhcm5pbmcoJ3VuY2xvc2VkIHhtbCBhdHRyaWJ1dGUnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYobG9jYXRvciAmJiBsZW4pe1xuXHRcdFx0XHRcdHZhciBsb2NhdG9yMiA9IGNvcHlMb2NhdG9yKGxvY2F0b3Ise30pO1xuXHRcdFx0XHRcdC8vdHJ5ey8vYXR0cmlidXRlIHBvc2l0aW9uIGZpeGVkXG5cdFx0XHRcdFx0Zm9yKHZhciBpID0gMDtpPGxlbjtpKyspe1xuXHRcdFx0XHRcdFx0dmFyIGEgPSBlbFtpXTtcblx0XHRcdFx0XHRcdHBvc2l0aW9uKGEub2Zmc2V0KTtcblx0XHRcdFx0XHRcdGEubG9jYXRvciA9IGNvcHlMb2NhdG9yKGxvY2F0b3Ise30pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkb21CdWlsZGVyLmxvY2F0b3IgPSBsb2NhdG9yMlxuXHRcdFx0XHRcdGlmKGFwcGVuZEVsZW1lbnQoZWwsZG9tQnVpbGRlcixjdXJyZW50TlNNYXApKXtcblx0XHRcdFx0XHRcdHBhcnNlU3RhY2sucHVzaChlbClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZG9tQnVpbGRlci5sb2NhdG9yID0gbG9jYXRvcjtcblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0aWYoYXBwZW5kRWxlbWVudChlbCxkb21CdWlsZGVyLGN1cnJlbnROU01hcCkpe1xuXHRcdFx0XHRcdFx0cGFyc2VTdGFjay5wdXNoKGVsKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChOQU1FU1BBQ0UuaXNIVE1MKGVsLnVyaSkgJiYgIWVsLmNsb3NlZCkge1xuXHRcdFx0XHRcdGVuZCA9IHBhcnNlSHRtbFNwZWNpYWxDb250ZW50KHNvdXJjZSxlbmQsZWwudGFnTmFtZSxlbnRpdHlSZXBsYWNlcixkb21CdWlsZGVyKVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVuZCsrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fWNhdGNoKGUpe1xuXHRcdFx0aWYgKGUgaW5zdGFuY2VvZiBQYXJzZUVycm9yKSB7XG5cdFx0XHRcdHRocm93IGU7XG5cdFx0XHR9XG5cdFx0XHRlcnJvckhhbmRsZXIuZXJyb3IoJ2VsZW1lbnQgcGFyc2UgZXJyb3I6ICcrZSlcblx0XHRcdGVuZCA9IC0xO1xuXHRcdH1cblx0XHRpZihlbmQ+c3RhcnQpe1xuXHRcdFx0c3RhcnQgPSBlbmQ7XG5cdFx0fWVsc2V7XG5cdFx0XHQvL1RPRE86IOi/memHjOacieWPr+iDvXNheOWbnumAgO+8jOacieS9jee9rumUmeivr+mjjumZqVxuXHRcdFx0YXBwZW5kVGV4dChNYXRoLm1heCh0YWdTdGFydCxzdGFydCkrMSk7XG5cdFx0fVxuXHR9XG59XG5mdW5jdGlvbiBjb3B5TG9jYXRvcihmLHQpe1xuXHR0LmxpbmVOdW1iZXIgPSBmLmxpbmVOdW1iZXI7XG5cdHQuY29sdW1uTnVtYmVyID0gZi5jb2x1bW5OdW1iZXI7XG5cdHJldHVybiB0O1xufVxuXG4vKipcbiAqIEBzZWUgI2FwcGVuZEVsZW1lbnQoc291cmNlLGVsU3RhcnRFbmQsZWwsc2VsZkNsb3NlZCxlbnRpdHlSZXBsYWNlcixkb21CdWlsZGVyLHBhcnNlU3RhY2spO1xuICogQHJldHVybiBlbmQgb2YgdGhlIGVsZW1lbnRTdGFydFBhcnQoZW5kIG9mIGVsZW1lbnRFbmRQYXJ0IGZvciBzZWxmQ2xvc2VkIGVsKVxuICovXG5mdW5jdGlvbiBwYXJzZUVsZW1lbnRTdGFydFBhcnQoc291cmNlLHN0YXJ0LGVsLGN1cnJlbnROU01hcCxlbnRpdHlSZXBsYWNlcixlcnJvckhhbmRsZXIpe1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcW5hbWVcblx0ICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydEluZGV4XG5cdCAqL1xuXHRmdW5jdGlvbiBhZGRBdHRyaWJ1dGUocW5hbWUsIHZhbHVlLCBzdGFydEluZGV4KSB7XG5cdFx0aWYgKGVsLmF0dHJpYnV0ZU5hbWVzLmhhc093blByb3BlcnR5KHFuYW1lKSkge1xuXHRcdFx0ZXJyb3JIYW5kbGVyLmZhdGFsRXJyb3IoJ0F0dHJpYnV0ZSAnICsgcW5hbWUgKyAnIHJlZGVmaW5lZCcpXG5cdFx0fVxuXHRcdGVsLmFkZFZhbHVlKFxuXHRcdFx0cW5hbWUsXG5cdFx0XHQvLyBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi94bWwvI0FWTm9ybWFsaXplXG5cdFx0XHQvLyBzaW5jZSB0aGUgeG1sZG9tIHNheCBwYXJzZXIgZG9lcyBub3QgXCJpbnRlcnByZXRcIiBEVEQgdGhlIGZvbGxvd2luZyBpcyBub3QgaW1wbGVtZW50ZWQ6XG5cdFx0XHQvLyAtIHJlY3Vyc2l2ZSByZXBsYWNlbWVudCBvZiAoRFREKSBlbnRpdHkgcmVmZXJlbmNlc1xuXHRcdFx0Ly8gLSB0cmltbWluZyBhbmQgY29sbGFwc2luZyBtdWx0aXBsZSBzcGFjZXMgaW50byBhIHNpbmdsZSBvbmUgZm9yIGF0dHJpYnV0ZXMgdGhhdCBhcmUgbm90IG9mIHR5cGUgQ0RBVEFcblx0XHRcdHZhbHVlLnJlcGxhY2UoL1tcXHRcXG5cXHJdL2csICcgJykucmVwbGFjZSgvJiM/XFx3KzsvZywgZW50aXR5UmVwbGFjZXIpLFxuXHRcdFx0c3RhcnRJbmRleFxuXHRcdClcblx0fVxuXHR2YXIgYXR0ck5hbWU7XG5cdHZhciB2YWx1ZTtcblx0dmFyIHAgPSArK3N0YXJ0O1xuXHR2YXIgcyA9IFNfVEFHOy8vc3RhdHVzXG5cdHdoaWxlKHRydWUpe1xuXHRcdHZhciBjID0gc291cmNlLmNoYXJBdChwKTtcblx0XHRzd2l0Y2goYyl7XG5cdFx0Y2FzZSAnPSc6XG5cdFx0XHRpZihzID09PSBTX0FUVFIpey8vYXR0ck5hbWVcblx0XHRcdFx0YXR0ck5hbWUgPSBzb3VyY2Uuc2xpY2Uoc3RhcnQscCk7XG5cdFx0XHRcdHMgPSBTX0VRO1xuXHRcdFx0fWVsc2UgaWYocyA9PT0gU19BVFRSX1NQQUNFKXtcblx0XHRcdFx0cyA9IFNfRVE7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0Ly9mYXRhbEVycm9yOiBlcXVhbCBtdXN0IGFmdGVyIGF0dHJOYW1lIG9yIHNwYWNlIGFmdGVyIGF0dHJOYW1lXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignYXR0cmlidXRlIGVxdWFsIG11c3QgYWZ0ZXIgYXR0ck5hbWUnKTsgLy8gTm8ga25vd24gdGVzdCBjYXNlXG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdcXCcnOlxuXHRcdGNhc2UgJ1wiJzpcblx0XHRcdGlmKHMgPT09IFNfRVEgfHwgcyA9PT0gU19BVFRSIC8vfHwgcyA9PSBTX0FUVFJfU1BBQ0Vcblx0XHRcdFx0KXsvL2VxdWFsXG5cdFx0XHRcdGlmKHMgPT09IFNfQVRUUil7XG5cdFx0XHRcdFx0ZXJyb3JIYW5kbGVyLndhcm5pbmcoJ2F0dHJpYnV0ZSB2YWx1ZSBtdXN0IGFmdGVyIFwiPVwiJylcblx0XHRcdFx0XHRhdHRyTmFtZSA9IHNvdXJjZS5zbGljZShzdGFydCxwKVxuXHRcdFx0XHR9XG5cdFx0XHRcdHN0YXJ0ID0gcCsxO1xuXHRcdFx0XHRwID0gc291cmNlLmluZGV4T2YoYyxzdGFydClcblx0XHRcdFx0aWYocD4wKXtcblx0XHRcdFx0XHR2YWx1ZSA9IHNvdXJjZS5zbGljZShzdGFydCwgcCk7XG5cdFx0XHRcdFx0YWRkQXR0cmlidXRlKGF0dHJOYW1lLCB2YWx1ZSwgc3RhcnQtMSk7XG5cdFx0XHRcdFx0cyA9IFNfQVRUUl9FTkQ7XG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdC8vZmF0YWxFcnJvcjogbm8gZW5kIHF1b3QgbWF0Y2hcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2F0dHJpYnV0ZSB2YWx1ZSBubyBlbmQgXFwnJytjKydcXCcgbWF0Y2gnKTtcblx0XHRcdFx0fVxuXHRcdFx0fWVsc2UgaWYocyA9PSBTX0FUVFJfTk9RVU9UX1ZBTFVFKXtcblx0XHRcdFx0dmFsdWUgPSBzb3VyY2Uuc2xpY2Uoc3RhcnQsIHApO1xuXHRcdFx0XHRhZGRBdHRyaWJ1dGUoYXR0ck5hbWUsIHZhbHVlLCBzdGFydCk7XG5cdFx0XHRcdGVycm9ySGFuZGxlci53YXJuaW5nKCdhdHRyaWJ1dGUgXCInK2F0dHJOYW1lKydcIiBtaXNzZWQgc3RhcnQgcXVvdCgnK2MrJykhIScpO1xuXHRcdFx0XHRzdGFydCA9IHArMTtcblx0XHRcdFx0cyA9IFNfQVRUUl9FTkRcblx0XHRcdH1lbHNle1xuXHRcdFx0XHQvL2ZhdGFsRXJyb3I6IG5vIGVxdWFsIGJlZm9yZVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2F0dHJpYnV0ZSB2YWx1ZSBtdXN0IGFmdGVyIFwiPVwiJyk7IC8vIE5vIGtub3duIHRlc3QgY2FzZVxuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnLyc6XG5cdFx0XHRzd2l0Y2gocyl7XG5cdFx0XHRjYXNlIFNfVEFHOlxuXHRcdFx0XHRlbC5zZXRUYWdOYW1lKHNvdXJjZS5zbGljZShzdGFydCxwKSk7XG5cdFx0XHRjYXNlIFNfQVRUUl9FTkQ6XG5cdFx0XHRjYXNlIFNfVEFHX1NQQUNFOlxuXHRcdFx0Y2FzZSBTX1RBR19DTE9TRTpcblx0XHRcdFx0cyA9U19UQUdfQ0xPU0U7XG5cdFx0XHRcdGVsLmNsb3NlZCA9IHRydWU7XG5cdFx0XHRjYXNlIFNfQVRUUl9OT1FVT1RfVkFMVUU6XG5cdFx0XHRjYXNlIFNfQVRUUjpcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgU19BVFRSX1NQQUNFOlxuXHRcdFx0XHRcdGVsLmNsb3NlZCA9IHRydWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Ly9jYXNlIFNfRVE6XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhdHRyaWJ1dGUgaW52YWxpZCBjbG9zZSBjaGFyKCcvJylcIikgLy8gTm8ga25vd24gdGVzdCBjYXNlXG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICcnOi8vZW5kIGRvY3VtZW50XG5cdFx0XHRlcnJvckhhbmRsZXIuZXJyb3IoJ3VuZXhwZWN0ZWQgZW5kIG9mIGlucHV0Jyk7XG5cdFx0XHRpZihzID09IFNfVEFHKXtcblx0XHRcdFx0ZWwuc2V0VGFnTmFtZShzb3VyY2Uuc2xpY2Uoc3RhcnQscCkpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHA7XG5cdFx0Y2FzZSAnPic6XG5cdFx0XHRzd2l0Y2gocyl7XG5cdFx0XHRjYXNlIFNfVEFHOlxuXHRcdFx0XHRlbC5zZXRUYWdOYW1lKHNvdXJjZS5zbGljZShzdGFydCxwKSk7XG5cdFx0XHRjYXNlIFNfQVRUUl9FTkQ6XG5cdFx0XHRjYXNlIFNfVEFHX1NQQUNFOlxuXHRcdFx0Y2FzZSBTX1RBR19DTE9TRTpcblx0XHRcdFx0YnJlYWs7Ly9ub3JtYWxcblx0XHRcdGNhc2UgU19BVFRSX05PUVVPVF9WQUxVRTovL0NvbXBhdGlibGUgc3RhdGVcblx0XHRcdGNhc2UgU19BVFRSOlxuXHRcdFx0XHR2YWx1ZSA9IHNvdXJjZS5zbGljZShzdGFydCxwKTtcblx0XHRcdFx0aWYodmFsdWUuc2xpY2UoLTEpID09PSAnLycpe1xuXHRcdFx0XHRcdGVsLmNsb3NlZCAgPSB0cnVlO1xuXHRcdFx0XHRcdHZhbHVlID0gdmFsdWUuc2xpY2UoMCwtMSlcblx0XHRcdFx0fVxuXHRcdFx0Y2FzZSBTX0FUVFJfU1BBQ0U6XG5cdFx0XHRcdGlmKHMgPT09IFNfQVRUUl9TUEFDRSl7XG5cdFx0XHRcdFx0dmFsdWUgPSBhdHRyTmFtZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZihzID09IFNfQVRUUl9OT1FVT1RfVkFMVUUpe1xuXHRcdFx0XHRcdGVycm9ySGFuZGxlci53YXJuaW5nKCdhdHRyaWJ1dGUgXCInK3ZhbHVlKydcIiBtaXNzZWQgcXVvdChcIikhJyk7XG5cdFx0XHRcdFx0YWRkQXR0cmlidXRlKGF0dHJOYW1lLCB2YWx1ZSwgc3RhcnQpXG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdGlmKCFOQU1FU1BBQ0UuaXNIVE1MKGN1cnJlbnROU01hcFsnJ10pIHx8ICF2YWx1ZS5tYXRjaCgvXig/OmRpc2FibGVkfGNoZWNrZWR8c2VsZWN0ZWQpJC9pKSl7XG5cdFx0XHRcdFx0XHRlcnJvckhhbmRsZXIud2FybmluZygnYXR0cmlidXRlIFwiJyt2YWx1ZSsnXCIgbWlzc2VkIHZhbHVlISEgXCInK3ZhbHVlKydcIiBpbnN0ZWFkISEnKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhZGRBdHRyaWJ1dGUodmFsdWUsIHZhbHVlLCBzdGFydClcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgU19FUTpcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdhdHRyaWJ1dGUgdmFsdWUgbWlzc2VkISEnKTtcblx0XHRcdH1cbi8vXHRcdFx0Y29uc29sZS5sb2codGFnTmFtZSx0YWdOYW1lUGF0dGVybix0YWdOYW1lUGF0dGVybi50ZXN0KHRhZ05hbWUpKVxuXHRcdFx0cmV0dXJuIHA7XG5cdFx0Lyp4bWwgc3BhY2UgJ1xceDIwJyB8ICN4OSB8ICN4RCB8ICN4QTsgKi9cblx0XHRjYXNlICdcXHUwMDgwJzpcblx0XHRcdGMgPSAnICc7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdGlmKGM8PSAnICcpey8vc3BhY2Vcblx0XHRcdFx0c3dpdGNoKHMpe1xuXHRcdFx0XHRjYXNlIFNfVEFHOlxuXHRcdFx0XHRcdGVsLnNldFRhZ05hbWUoc291cmNlLnNsaWNlKHN0YXJ0LHApKTsvL3RhZ05hbWVcblx0XHRcdFx0XHRzID0gU19UQUdfU1BBQ0U7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgU19BVFRSOlxuXHRcdFx0XHRcdGF0dHJOYW1lID0gc291cmNlLnNsaWNlKHN0YXJ0LHApXG5cdFx0XHRcdFx0cyA9IFNfQVRUUl9TUEFDRTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBTX0FUVFJfTk9RVU9UX1ZBTFVFOlxuXHRcdFx0XHRcdHZhciB2YWx1ZSA9IHNvdXJjZS5zbGljZShzdGFydCwgcCk7XG5cdFx0XHRcdFx0ZXJyb3JIYW5kbGVyLndhcm5pbmcoJ2F0dHJpYnV0ZSBcIicrdmFsdWUrJ1wiIG1pc3NlZCBxdW90KFwiKSEhJyk7XG5cdFx0XHRcdFx0YWRkQXR0cmlidXRlKGF0dHJOYW1lLCB2YWx1ZSwgc3RhcnQpXG5cdFx0XHRcdGNhc2UgU19BVFRSX0VORDpcblx0XHRcdFx0XHRzID0gU19UQUdfU1BBQ0U7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdC8vY2FzZSBTX1RBR19TUEFDRTpcblx0XHRcdFx0Ly9jYXNlIFNfRVE6XG5cdFx0XHRcdC8vY2FzZSBTX0FUVFJfU1BBQ0U6XG5cdFx0XHRcdC8vXHR2b2lkKCk7YnJlYWs7XG5cdFx0XHRcdC8vY2FzZSBTX1RBR19DTE9TRTpcblx0XHRcdFx0XHQvL2lnbm9yZSB3YXJuaW5nXG5cdFx0XHRcdH1cblx0XHRcdH1lbHNley8vbm90IHNwYWNlXG4vL1NfVEFHLFx0U19BVFRSLFx0U19FUSxcdFNfQVRUUl9OT1FVT1RfVkFMVUVcbi8vU19BVFRSX1NQQUNFLFx0U19BVFRSX0VORCxcdFNfVEFHX1NQQUNFLCBTX1RBR19DTE9TRVxuXHRcdFx0XHRzd2l0Y2gocyl7XG5cdFx0XHRcdC8vY2FzZSBTX1RBRzp2b2lkKCk7YnJlYWs7XG5cdFx0XHRcdC8vY2FzZSBTX0FUVFI6dm9pZCgpO2JyZWFrO1xuXHRcdFx0XHQvL2Nhc2UgU19BVFRSX05PUVVPVF9WQUxVRTp2b2lkKCk7YnJlYWs7XG5cdFx0XHRcdGNhc2UgU19BVFRSX1NQQUNFOlxuXHRcdFx0XHRcdHZhciB0YWdOYW1lID0gIGVsLnRhZ05hbWU7XG5cdFx0XHRcdFx0aWYgKCFOQU1FU1BBQ0UuaXNIVE1MKGN1cnJlbnROU01hcFsnJ10pIHx8ICFhdHRyTmFtZS5tYXRjaCgvXig/OmRpc2FibGVkfGNoZWNrZWR8c2VsZWN0ZWQpJC9pKSkge1xuXHRcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyLndhcm5pbmcoJ2F0dHJpYnV0ZSBcIicrYXR0ck5hbWUrJ1wiIG1pc3NlZCB2YWx1ZSEhIFwiJythdHRyTmFtZSsnXCIgaW5zdGVhZDIhIScpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGFkZEF0dHJpYnV0ZShhdHRyTmFtZSwgYXR0ck5hbWUsIHN0YXJ0KTtcblx0XHRcdFx0XHRzdGFydCA9IHA7XG5cdFx0XHRcdFx0cyA9IFNfQVRUUjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBTX0FUVFJfRU5EOlxuXHRcdFx0XHRcdGVycm9ySGFuZGxlci53YXJuaW5nKCdhdHRyaWJ1dGUgc3BhY2UgaXMgcmVxdWlyZWRcIicrYXR0ck5hbWUrJ1wiISEnKVxuXHRcdFx0XHRjYXNlIFNfVEFHX1NQQUNFOlxuXHRcdFx0XHRcdHMgPSBTX0FUVFI7XG5cdFx0XHRcdFx0c3RhcnQgPSBwO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFNfRVE6XG5cdFx0XHRcdFx0cyA9IFNfQVRUUl9OT1FVT1RfVkFMVUU7XG5cdFx0XHRcdFx0c3RhcnQgPSBwO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFNfVEFHX0NMT1NFOlxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcImVsZW1lbnRzIGNsb3NlZCBjaGFyYWN0ZXIgJy8nIGFuZCAnPicgbXVzdCBiZSBjb25uZWN0ZWQgdG9cIik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9Ly9lbmQgb3V0ZXIgc3dpdGNoXG5cdFx0Ly9jb25zb2xlLmxvZygncCsrJyxwKVxuXHRcdHArKztcblx0fVxufVxuLyoqXG4gKiBAcmV0dXJuIHRydWUgaWYgaGFzIG5ldyBuYW1lc3BhY2UgZGVmaW5lXG4gKi9cbmZ1bmN0aW9uIGFwcGVuZEVsZW1lbnQoZWwsZG9tQnVpbGRlcixjdXJyZW50TlNNYXApe1xuXHR2YXIgdGFnTmFtZSA9IGVsLnRhZ05hbWU7XG5cdHZhciBsb2NhbE5TTWFwID0gbnVsbDtcblx0Ly92YXIgY3VycmVudE5TTWFwID0gcGFyc2VTdGFja1twYXJzZVN0YWNrLmxlbmd0aC0xXS5jdXJyZW50TlNNYXA7XG5cdHZhciBpID0gZWwubGVuZ3RoO1xuXHR3aGlsZShpLS0pe1xuXHRcdHZhciBhID0gZWxbaV07XG5cdFx0dmFyIHFOYW1lID0gYS5xTmFtZTtcblx0XHR2YXIgdmFsdWUgPSBhLnZhbHVlO1xuXHRcdHZhciBuc3AgPSBxTmFtZS5pbmRleE9mKCc6Jyk7XG5cdFx0aWYobnNwPjApe1xuXHRcdFx0dmFyIHByZWZpeCA9IGEucHJlZml4ID0gcU5hbWUuc2xpY2UoMCxuc3ApO1xuXHRcdFx0dmFyIGxvY2FsTmFtZSA9IHFOYW1lLnNsaWNlKG5zcCsxKTtcblx0XHRcdHZhciBuc1ByZWZpeCA9IHByZWZpeCA9PT0gJ3htbG5zJyAmJiBsb2NhbE5hbWVcblx0XHR9ZWxzZXtcblx0XHRcdGxvY2FsTmFtZSA9IHFOYW1lO1xuXHRcdFx0cHJlZml4ID0gbnVsbFxuXHRcdFx0bnNQcmVmaXggPSBxTmFtZSA9PT0gJ3htbG5zJyAmJiAnJ1xuXHRcdH1cblx0XHQvL2NhbiBub3Qgc2V0IHByZWZpeCxiZWNhdXNlIHByZWZpeCAhPT0gJydcblx0XHRhLmxvY2FsTmFtZSA9IGxvY2FsTmFtZSA7XG5cdFx0Ly9wcmVmaXggPT0gbnVsbCBmb3Igbm8gbnMgcHJlZml4IGF0dHJpYnV0ZVxuXHRcdGlmKG5zUHJlZml4ICE9PSBmYWxzZSl7Ly9oYWNrISFcblx0XHRcdGlmKGxvY2FsTlNNYXAgPT0gbnVsbCl7XG5cdFx0XHRcdGxvY2FsTlNNYXAgPSB7fVxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKGN1cnJlbnROU01hcCwwKVxuXHRcdFx0XHRfY29weShjdXJyZW50TlNNYXAsY3VycmVudE5TTWFwPXt9KVxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKGN1cnJlbnROU01hcCwxKVxuXHRcdFx0fVxuXHRcdFx0Y3VycmVudE5TTWFwW25zUHJlZml4XSA9IGxvY2FsTlNNYXBbbnNQcmVmaXhdID0gdmFsdWU7XG5cdFx0XHRhLnVyaSA9IE5BTUVTUEFDRS5YTUxOU1xuXHRcdFx0ZG9tQnVpbGRlci5zdGFydFByZWZpeE1hcHBpbmcobnNQcmVmaXgsIHZhbHVlKVxuXHRcdH1cblx0fVxuXHR2YXIgaSA9IGVsLmxlbmd0aDtcblx0d2hpbGUoaS0tKXtcblx0XHRhID0gZWxbaV07XG5cdFx0dmFyIHByZWZpeCA9IGEucHJlZml4O1xuXHRcdGlmKHByZWZpeCl7Ly9ubyBwcmVmaXggYXR0cmlidXRlIGhhcyBubyBuYW1lc3BhY2Vcblx0XHRcdGlmKHByZWZpeCA9PT0gJ3htbCcpe1xuXHRcdFx0XHRhLnVyaSA9IE5BTUVTUEFDRS5YTUw7XG5cdFx0XHR9aWYocHJlZml4ICE9PSAneG1sbnMnKXtcblx0XHRcdFx0YS51cmkgPSBjdXJyZW50TlNNYXBbcHJlZml4IHx8ICcnXVxuXG5cdFx0XHRcdC8ve2NvbnNvbGUubG9nKCcjIyMnK2EucU5hbWUsZG9tQnVpbGRlci5sb2NhdG9yLnN5c3RlbUlkKycnLGN1cnJlbnROU01hcCxhLnVyaSl9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHZhciBuc3AgPSB0YWdOYW1lLmluZGV4T2YoJzonKTtcblx0aWYobnNwPjApe1xuXHRcdHByZWZpeCA9IGVsLnByZWZpeCA9IHRhZ05hbWUuc2xpY2UoMCxuc3ApO1xuXHRcdGxvY2FsTmFtZSA9IGVsLmxvY2FsTmFtZSA9IHRhZ05hbWUuc2xpY2UobnNwKzEpO1xuXHR9ZWxzZXtcblx0XHRwcmVmaXggPSBudWxsOy8vaW1wb3J0YW50ISFcblx0XHRsb2NhbE5hbWUgPSBlbC5sb2NhbE5hbWUgPSB0YWdOYW1lO1xuXHR9XG5cdC8vbm8gcHJlZml4IGVsZW1lbnQgaGFzIGRlZmF1bHQgbmFtZXNwYWNlXG5cdHZhciBucyA9IGVsLnVyaSA9IGN1cnJlbnROU01hcFtwcmVmaXggfHwgJyddO1xuXHRkb21CdWlsZGVyLnN0YXJ0RWxlbWVudChucyxsb2NhbE5hbWUsdGFnTmFtZSxlbCk7XG5cdC8vZW5kUHJlZml4TWFwcGluZyBhbmQgc3RhcnRQcmVmaXhNYXBwaW5nIGhhdmUgbm90IGFueSBoZWxwIGZvciBkb20gYnVpbGRlclxuXHQvL2xvY2FsTlNNYXAgPSBudWxsXG5cdGlmKGVsLmNsb3NlZCl7XG5cdFx0ZG9tQnVpbGRlci5lbmRFbGVtZW50KG5zLGxvY2FsTmFtZSx0YWdOYW1lKTtcblx0XHRpZihsb2NhbE5TTWFwKXtcblx0XHRcdGZvciAocHJlZml4IGluIGxvY2FsTlNNYXApIHtcblx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChsb2NhbE5TTWFwLCBwcmVmaXgpKSB7XG5cdFx0XHRcdFx0ZG9tQnVpbGRlci5lbmRQcmVmaXhNYXBwaW5nKHByZWZpeCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1lbHNle1xuXHRcdGVsLmN1cnJlbnROU01hcCA9IGN1cnJlbnROU01hcDtcblx0XHRlbC5sb2NhbE5TTWFwID0gbG9jYWxOU01hcDtcblx0XHQvL3BhcnNlU3RhY2sucHVzaChlbCk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cbmZ1bmN0aW9uIHBhcnNlSHRtbFNwZWNpYWxDb250ZW50KHNvdXJjZSxlbFN0YXJ0RW5kLHRhZ05hbWUsZW50aXR5UmVwbGFjZXIsZG9tQnVpbGRlcil7XG5cdGlmKC9eKD86c2NyaXB0fHRleHRhcmVhKSQvaS50ZXN0KHRhZ05hbWUpKXtcblx0XHR2YXIgZWxFbmRTdGFydCA9ICBzb3VyY2UuaW5kZXhPZignPC8nK3RhZ05hbWUrJz4nLGVsU3RhcnRFbmQpO1xuXHRcdHZhciB0ZXh0ID0gc291cmNlLnN1YnN0cmluZyhlbFN0YXJ0RW5kKzEsZWxFbmRTdGFydCk7XG5cdFx0aWYoL1smPF0vLnRlc3QodGV4dCkpe1xuXHRcdFx0aWYoL15zY3JpcHQkL2kudGVzdCh0YWdOYW1lKSl7XG5cdFx0XHRcdC8vaWYoIS9cXF1cXF0+Ly50ZXN0KHRleHQpKXtcblx0XHRcdFx0XHQvL2xleEhhbmRsZXIuc3RhcnRDREFUQSgpO1xuXHRcdFx0XHRcdGRvbUJ1aWxkZXIuY2hhcmFjdGVycyh0ZXh0LDAsdGV4dC5sZW5ndGgpO1xuXHRcdFx0XHRcdC8vbGV4SGFuZGxlci5lbmRDREFUQSgpO1xuXHRcdFx0XHRcdHJldHVybiBlbEVuZFN0YXJ0O1xuXHRcdFx0XHQvL31cblx0XHRcdH0vL31lbHNley8vdGV4dCBhcmVhXG5cdFx0XHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UoLyYjP1xcdys7L2csZW50aXR5UmVwbGFjZXIpO1xuXHRcdFx0XHRkb21CdWlsZGVyLmNoYXJhY3RlcnModGV4dCwwLHRleHQubGVuZ3RoKTtcblx0XHRcdFx0cmV0dXJuIGVsRW5kU3RhcnQ7XG5cdFx0XHQvL31cblxuXHRcdH1cblx0fVxuXHRyZXR1cm4gZWxTdGFydEVuZCsxO1xufVxuZnVuY3Rpb24gZml4U2VsZkNsb3NlZChzb3VyY2UsZWxTdGFydEVuZCx0YWdOYW1lLGNsb3NlTWFwKXtcblx0Ly9pZih0YWdOYW1lIGluIGNsb3NlTWFwKXtcblx0dmFyIHBvcyA9IGNsb3NlTWFwW3RhZ05hbWVdO1xuXHRpZihwb3MgPT0gbnVsbCl7XG5cdFx0Ly9jb25zb2xlLmxvZyh0YWdOYW1lKVxuXHRcdHBvcyA9ICBzb3VyY2UubGFzdEluZGV4T2YoJzwvJyt0YWdOYW1lKyc+Jylcblx0XHRpZihwb3M8ZWxTdGFydEVuZCl7Ly/lv5jorrDpl63lkIhcblx0XHRcdHBvcyA9IHNvdXJjZS5sYXN0SW5kZXhPZignPC8nK3RhZ05hbWUpXG5cdFx0fVxuXHRcdGNsb3NlTWFwW3RhZ05hbWVdID1wb3Ncblx0fVxuXHRyZXR1cm4gcG9zPGVsU3RhcnRFbmQ7XG5cdC8vfVxufVxuXG5mdW5jdGlvbiBfY29weSAoc291cmNlLCB0YXJnZXQpIHtcblx0Zm9yICh2YXIgbiBpbiBzb3VyY2UpIHtcblx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwgbikpIHtcblx0XHRcdHRhcmdldFtuXSA9IHNvdXJjZVtuXTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gcGFyc2VEQ0Moc291cmNlLHN0YXJ0LGRvbUJ1aWxkZXIsZXJyb3JIYW5kbGVyKXsvL3N1cmUgc3RhcnQgd2l0aCAnPCEnXG5cdHZhciBuZXh0PSBzb3VyY2UuY2hhckF0KHN0YXJ0KzIpXG5cdHN3aXRjaChuZXh0KXtcblx0Y2FzZSAnLSc6XG5cdFx0aWYoc291cmNlLmNoYXJBdChzdGFydCArIDMpID09PSAnLScpe1xuXHRcdFx0dmFyIGVuZCA9IHNvdXJjZS5pbmRleE9mKCctLT4nLHN0YXJ0KzQpO1xuXHRcdFx0Ly9hcHBlbmQgY29tbWVudCBzb3VyY2Uuc3Vic3RyaW5nKDQsZW5kKS8vPCEtLVxuXHRcdFx0aWYoZW5kPnN0YXJ0KXtcblx0XHRcdFx0ZG9tQnVpbGRlci5jb21tZW50KHNvdXJjZSxzdGFydCs0LGVuZC1zdGFydC00KTtcblx0XHRcdFx0cmV0dXJuIGVuZCszO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdGVycm9ySGFuZGxlci5lcnJvcihcIlVuY2xvc2VkIGNvbW1lbnRcIik7XG5cdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdH1cblx0XHR9ZWxzZXtcblx0XHRcdC8vZXJyb3Jcblx0XHRcdHJldHVybiAtMTtcblx0XHR9XG5cdGRlZmF1bHQ6XG5cdFx0aWYoc291cmNlLnN1YnN0cihzdGFydCszLDYpID09ICdDREFUQVsnKXtcblx0XHRcdHZhciBlbmQgPSBzb3VyY2UuaW5kZXhPZignXV0+JyxzdGFydCs5KTtcblx0XHRcdGRvbUJ1aWxkZXIuc3RhcnRDREFUQSgpO1xuXHRcdFx0ZG9tQnVpbGRlci5jaGFyYWN0ZXJzKHNvdXJjZSxzdGFydCs5LGVuZC1zdGFydC05KTtcblx0XHRcdGRvbUJ1aWxkZXIuZW5kQ0RBVEEoKVxuXHRcdFx0cmV0dXJuIGVuZCszO1xuXHRcdH1cblx0XHQvLzwhRE9DVFlQRVxuXHRcdC8vc3RhcnREVEQoamF2YS5sYW5nLlN0cmluZyBuYW1lLCBqYXZhLmxhbmcuU3RyaW5nIHB1YmxpY0lkLCBqYXZhLmxhbmcuU3RyaW5nIHN5c3RlbUlkKVxuXHRcdHZhciBtYXRjaHMgPSBzcGxpdChzb3VyY2Usc3RhcnQpO1xuXHRcdHZhciBsZW4gPSBtYXRjaHMubGVuZ3RoO1xuXHRcdGlmKGxlbj4xICYmIC8hZG9jdHlwZS9pLnRlc3QobWF0Y2hzWzBdWzBdKSl7XG5cdFx0XHR2YXIgbmFtZSA9IG1hdGNoc1sxXVswXTtcblx0XHRcdHZhciBwdWJpZCA9IGZhbHNlO1xuXHRcdFx0dmFyIHN5c2lkID0gZmFsc2U7XG5cdFx0XHRpZihsZW4+Myl7XG5cdFx0XHRcdGlmKC9ecHVibGljJC9pLnRlc3QobWF0Y2hzWzJdWzBdKSl7XG5cdFx0XHRcdFx0cHViaWQgPSBtYXRjaHNbM11bMF07XG5cdFx0XHRcdFx0c3lzaWQgPSBsZW4+NCAmJiBtYXRjaHNbNF1bMF07XG5cdFx0XHRcdH1lbHNlIGlmKC9ec3lzdGVtJC9pLnRlc3QobWF0Y2hzWzJdWzBdKSl7XG5cdFx0XHRcdFx0c3lzaWQgPSBtYXRjaHNbM11bMF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHZhciBsYXN0TWF0Y2ggPSBtYXRjaHNbbGVuLTFdXG5cdFx0XHRkb21CdWlsZGVyLnN0YXJ0RFREKG5hbWUsIHB1YmlkLCBzeXNpZCk7XG5cdFx0XHRkb21CdWlsZGVyLmVuZERURCgpO1xuXG5cdFx0XHRyZXR1cm4gbGFzdE1hdGNoLmluZGV4K2xhc3RNYXRjaFswXS5sZW5ndGhcblx0XHR9XG5cdH1cblx0cmV0dXJuIC0xO1xufVxuXG5cblxuZnVuY3Rpb24gcGFyc2VJbnN0cnVjdGlvbihzb3VyY2Usc3RhcnQsZG9tQnVpbGRlcil7XG5cdHZhciBlbmQgPSBzb3VyY2UuaW5kZXhPZignPz4nLHN0YXJ0KTtcblx0aWYoZW5kKXtcblx0XHR2YXIgbWF0Y2ggPSBzb3VyY2Uuc3Vic3RyaW5nKHN0YXJ0LGVuZCkubWF0Y2goL148XFw/KFxcUyopXFxzKihbXFxzXFxTXSo/KVxccyokLyk7XG5cdFx0aWYobWF0Y2gpe1xuXHRcdFx0dmFyIGxlbiA9IG1hdGNoWzBdLmxlbmd0aDtcblx0XHRcdGRvbUJ1aWxkZXIucHJvY2Vzc2luZ0luc3RydWN0aW9uKG1hdGNoWzFdLCBtYXRjaFsyXSkgO1xuXHRcdFx0cmV0dXJuIGVuZCsyO1xuXHRcdH1lbHNley8vZXJyb3Jcblx0XHRcdHJldHVybiAtMTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIC0xO1xufVxuXG5mdW5jdGlvbiBFbGVtZW50QXR0cmlidXRlcygpe1xuXHR0aGlzLmF0dHJpYnV0ZU5hbWVzID0ge31cbn1cbkVsZW1lbnRBdHRyaWJ1dGVzLnByb3RvdHlwZSA9IHtcblx0c2V0VGFnTmFtZTpmdW5jdGlvbih0YWdOYW1lKXtcblx0XHRpZighdGFnTmFtZVBhdHRlcm4udGVzdCh0YWdOYW1lKSl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgdGFnTmFtZTonK3RhZ05hbWUpXG5cdFx0fVxuXHRcdHRoaXMudGFnTmFtZSA9IHRhZ05hbWVcblx0fSxcblx0YWRkVmFsdWU6ZnVuY3Rpb24ocU5hbWUsIHZhbHVlLCBvZmZzZXQpIHtcblx0XHRpZighdGFnTmFtZVBhdHRlcm4udGVzdChxTmFtZSkpe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGF0dHJpYnV0ZTonK3FOYW1lKVxuXHRcdH1cblx0XHR0aGlzLmF0dHJpYnV0ZU5hbWVzW3FOYW1lXSA9IHRoaXMubGVuZ3RoO1xuXHRcdHRoaXNbdGhpcy5sZW5ndGgrK10gPSB7cU5hbWU6cU5hbWUsdmFsdWU6dmFsdWUsb2Zmc2V0Om9mZnNldH1cblx0fSxcblx0bGVuZ3RoOjAsXG5cdGdldExvY2FsTmFtZTpmdW5jdGlvbihpKXtyZXR1cm4gdGhpc1tpXS5sb2NhbE5hbWV9LFxuXHRnZXRMb2NhdG9yOmZ1bmN0aW9uKGkpe3JldHVybiB0aGlzW2ldLmxvY2F0b3J9LFxuXHRnZXRRTmFtZTpmdW5jdGlvbihpKXtyZXR1cm4gdGhpc1tpXS5xTmFtZX0sXG5cdGdldFVSSTpmdW5jdGlvbihpKXtyZXR1cm4gdGhpc1tpXS51cml9LFxuXHRnZXRWYWx1ZTpmdW5jdGlvbihpKXtyZXR1cm4gdGhpc1tpXS52YWx1ZX1cbi8vXHQsZ2V0SW5kZXg6ZnVuY3Rpb24odXJpLCBsb2NhbE5hbWUpKXtcbi8vXHRcdGlmKGxvY2FsTmFtZSl7XG4vL1xuLy9cdFx0fWVsc2V7XG4vL1x0XHRcdHZhciBxTmFtZSA9IHVyaVxuLy9cdFx0fVxuLy9cdH0sXG4vL1x0Z2V0VmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXRWYWx1ZSh0aGlzLmdldEluZGV4LmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9LFxuLy9cdGdldFR5cGU6ZnVuY3Rpb24odXJpLGxvY2FsTmFtZSl7fVxuLy9cdGdldFR5cGU6ZnVuY3Rpb24oaSl7fSxcbn1cblxuXG5cbmZ1bmN0aW9uIHNwbGl0KHNvdXJjZSxzdGFydCl7XG5cdHZhciBtYXRjaDtcblx0dmFyIGJ1ZiA9IFtdO1xuXHR2YXIgcmVnID0gLydbXiddKyd8XCJbXlwiXStcInxbXlxcczw+XFwvPV0rPT98KFxcLz9cXHMqPnw8KS9nO1xuXHRyZWcubGFzdEluZGV4ID0gc3RhcnQ7XG5cdHJlZy5leGVjKHNvdXJjZSk7Ly9za2lwIDxcblx0d2hpbGUobWF0Y2ggPSByZWcuZXhlYyhzb3VyY2UpKXtcblx0XHRidWYucHVzaChtYXRjaCk7XG5cdFx0aWYobWF0Y2hbMV0pcmV0dXJuIGJ1Zjtcblx0fVxufVxuXG5leHBvcnRzLlhNTFJlYWRlciA9IFhNTFJlYWRlcjtcbmV4cG9ydHMuUGFyc2VFcnJvciA9IFBhcnNlRXJyb3I7XG4iLCJ2YXIgd2luO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHdpbiA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHdpbiA9IGdsb2JhbDtcbn0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIpe1xuICAgIHdpbiA9IHNlbGY7XG59IGVsc2Uge1xuICAgIHdpbiA9IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbjtcbiIsIi8qISBAbmFtZSBtcGQtcGFyc2VyIEB2ZXJzaW9uIDEuMi4yIEBsaWNlbnNlIEFwYWNoZS0yLjAgKi9cbmltcG9ydCByZXNvbHZlVXJsIGZyb20gJ0B2aWRlb2pzL3Zocy11dGlscy9lcy9yZXNvbHZlLXVybCc7XG5pbXBvcnQgd2luZG93IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xuaW1wb3J0IHsgZm9yRWFjaE1lZGlhR3JvdXAgfSBmcm9tICdAdmlkZW9qcy92aHMtdXRpbHMvZXMvbWVkaWEtZ3JvdXBzJztcbmltcG9ydCBkZWNvZGVCNjRUb1VpbnQ4QXJyYXkgZnJvbSAnQHZpZGVvanMvdmhzLXV0aWxzL2VzL2RlY29kZS1iNjQtdG8tdWludDgtYXJyYXknO1xuaW1wb3J0IHsgRE9NUGFyc2VyIH0gZnJvbSAnQHhtbGRvbS94bWxkb20nO1xuXG52YXIgdmVyc2lvbiA9IFwiMS4yLjJcIjtcblxuY29uc3QgaXNPYmplY3QgPSBvYmogPT4ge1xuICByZXR1cm4gISFvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG59O1xuXG5jb25zdCBtZXJnZSA9ICguLi5vYmplY3RzKSA9PiB7XG4gIHJldHVybiBvYmplY3RzLnJlZHVjZSgocmVzdWx0LCBzb3VyY2UpID0+IHtcbiAgICBpZiAodHlwZW9mIHNvdXJjZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHRba2V5XSkgJiYgQXJyYXkuaXNBcnJheShzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSByZXN1bHRba2V5XS5jb25jYXQoc291cmNlW2tleV0pO1xuICAgICAgfSBlbHNlIGlmIChpc09iamVjdChyZXN1bHRba2V5XSkgJiYgaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHNvdXJjZVtrZXldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSwge30pO1xufTtcbmNvbnN0IHZhbHVlcyA9IG8gPT4gT2JqZWN0LmtleXMobykubWFwKGsgPT4gb1trXSk7XG5cbmNvbnN0IHJhbmdlID0gKHN0YXJ0LCBlbmQpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICByZXN1bHQucHVzaChpKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuY29uc3QgZmxhdHRlbiA9IGxpc3RzID0+IGxpc3RzLnJlZHVjZSgoeCwgeSkgPT4geC5jb25jYXQoeSksIFtdKTtcbmNvbnN0IGZyb20gPSBsaXN0ID0+IHtcbiAgaWYgKCFsaXN0Lmxlbmd0aCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHJlc3VsdC5wdXNoKGxpc3RbaV0pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5jb25zdCBmaW5kSW5kZXhlcyA9IChsLCBrZXkpID0+IGwucmVkdWNlKChhLCBlLCBpKSA9PiB7XG4gIGlmIChlW2tleV0pIHtcbiAgICBhLnB1c2goaSk7XG4gIH1cblxuICByZXR1cm4gYTtcbn0sIFtdKTtcbi8qKlxuICogUmV0dXJucyBhIHVuaW9uIG9mIHRoZSBpbmNsdWRlZCBsaXN0cyBwcm92aWRlZCBlYWNoIGVsZW1lbnQgY2FuIGJlIGlkZW50aWZpZWQgYnkgYSBrZXkuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gbGlzdCAtIGxpc3Qgb2YgbGlzdHMgdG8gZ2V0IHRoZSB1bmlvbiBvZlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5RnVuY3Rpb24gLSB0aGUgZnVuY3Rpb24gdG8gdXNlIGFzIGEga2V5IGZvciBlYWNoIGVsZW1lbnRcbiAqXG4gKiBAcmV0dXJuIHtBcnJheX0gdGhlIHVuaW9uIG9mIHRoZSBhcnJheXNcbiAqL1xuXG5jb25zdCB1bmlvbiA9IChsaXN0cywga2V5RnVuY3Rpb24pID0+IHtcbiAgcmV0dXJuIHZhbHVlcyhsaXN0cy5yZWR1Y2UoKGFjYywgbGlzdCkgPT4ge1xuICAgIGxpc3QuZm9yRWFjaChlbCA9PiB7XG4gICAgICBhY2Nba2V5RnVuY3Rpb24oZWwpXSA9IGVsO1xuICAgIH0pO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KSk7XG59O1xuXG52YXIgZXJyb3JzID0ge1xuICBJTlZBTElEX05VTUJFUl9PRl9QRVJJT0Q6ICdJTlZBTElEX05VTUJFUl9PRl9QRVJJT0QnLFxuICBJTlZBTElEX05VTUJFUl9PRl9DT05URU5UX1NURUVSSU5HOiAnSU5WQUxJRF9OVU1CRVJfT0ZfQ09OVEVOVF9TVEVFUklORycsXG4gIERBU0hfRU1QVFlfTUFOSUZFU1Q6ICdEQVNIX0VNUFRZX01BTklGRVNUJyxcbiAgREFTSF9JTlZBTElEX1hNTDogJ0RBU0hfSU5WQUxJRF9YTUwnLFxuICBOT19CQVNFX1VSTDogJ05PX0JBU0VfVVJMJyxcbiAgTUlTU0lOR19TRUdNRU5UX0lORk9STUFUSU9OOiAnTUlTU0lOR19TRUdNRU5UX0lORk9STUFUSU9OJyxcbiAgU0VHTUVOVF9USU1FX1VOU1BFQ0lGSUVEOiAnU0VHTUVOVF9USU1FX1VOU1BFQ0lGSUVEJyxcbiAgVU5TVVBQT1JURURfVVRDX1RJTUlOR19TQ0hFTUU6ICdVTlNVUFBPUlRFRF9VVENfVElNSU5HX1NDSEVNRSdcbn07XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gU2luZ2xlVXJpXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdXJpIC0gcmVsYXRpdmUgbG9jYXRpb24gb2Ygc2VnbWVudFxuICogQHByb3BlcnR5IHtzdHJpbmd9IHJlc29sdmVkVXJpIC0gcmVzb2x2ZWQgbG9jYXRpb24gb2Ygc2VnbWVudFxuICogQHByb3BlcnR5IHtPYmplY3R9IGJ5dGVyYW5nZSAtIE9iamVjdCBjb250YWluaW5nIGluZm9ybWF0aW9uIG9uIGhvdyB0byBtYWtlIGJ5dGUgcmFuZ2VcbiAqICAgcmVxdWVzdHMgZm9sbG93aW5nIGJ5dGUtcmFuZ2Utc3BlYyBwZXIgUkZDMjYxNi5cbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBieXRlcmFuZ2UubGVuZ3RoIC0gbGVuZ3RoIG9mIHJhbmdlIHJlcXVlc3RcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBieXRlcmFuZ2Uub2Zmc2V0IC0gYnl0ZSBvZmZzZXQgb2YgcmFuZ2UgcmVxdWVzdFxuICpcbiAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1Byb3RvY29scy9yZmMyNjE2L3JmYzI2MTYtc2VjMTQuaHRtbCNzZWMxNC4zNS4xXG4gKi9cblxuLyoqXG4gKiBDb252ZXJ0cyBhIFVSTFR5cGUgbm9kZSAoNS4zLjkuMi4zIFRhYmxlIDEzKSB0byBhIHNlZ21lbnQgb2JqZWN0XG4gKiB0aGF0IGNvbmZvcm1zIHRvIGhvdyBtM3U4LXBhcnNlciBpcyBzdHJ1Y3R1cmVkXG4gKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vdmlkZW9qcy9tM3U4LXBhcnNlclxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVXJsIC0gYmFzZVVybCBwcm92aWRlZCBieSA8QmFzZVVybD4gbm9kZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2UgLSBzb3VyY2UgdXJsIGZvciBzZWdtZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gcmFuZ2UgLSBvcHRpb25hbCByYW5nZSB1c2VkIGZvciByYW5nZSBjYWxscyxcbiAqICAgZm9sbG93cyAgUkZDIDI2MTYsIENsYXVzZSAxNC4zNS4xXG4gKiBAcmV0dXJuIHtTaW5nbGVVcml9IGZ1bGwgc2VnbWVudCBpbmZvcm1hdGlvbiB0cmFuc2Zvcm1lZCBpbnRvIGEgZm9ybWF0IHNpbWlsYXJcbiAqICAgdG8gbTN1OC1wYXJzZXJcbiAqL1xuXG5jb25zdCB1cmxUeXBlVG9TZWdtZW50ID0gKHtcbiAgYmFzZVVybCA9ICcnLFxuICBzb3VyY2UgPSAnJyxcbiAgcmFuZ2UgPSAnJyxcbiAgaW5kZXhSYW5nZSA9ICcnXG59KSA9PiB7XG4gIGNvbnN0IHNlZ21lbnQgPSB7XG4gICAgdXJpOiBzb3VyY2UsXG4gICAgcmVzb2x2ZWRVcmk6IHJlc29sdmVVcmwoYmFzZVVybCB8fCAnJywgc291cmNlKVxuICB9O1xuXG4gIGlmIChyYW5nZSB8fCBpbmRleFJhbmdlKSB7XG4gICAgY29uc3QgcmFuZ2VTdHIgPSByYW5nZSA/IHJhbmdlIDogaW5kZXhSYW5nZTtcbiAgICBjb25zdCByYW5nZXMgPSByYW5nZVN0ci5zcGxpdCgnLScpOyAvLyBkZWZhdWx0IHRvIHBhcnNpbmcgdGhpcyBhcyBhIEJpZ0ludCBpZiBwb3NzaWJsZVxuXG4gICAgbGV0IHN0YXJ0UmFuZ2UgPSB3aW5kb3cuQmlnSW50ID8gd2luZG93LkJpZ0ludChyYW5nZXNbMF0pIDogcGFyc2VJbnQocmFuZ2VzWzBdLCAxMCk7XG4gICAgbGV0IGVuZFJhbmdlID0gd2luZG93LkJpZ0ludCA/IHdpbmRvdy5CaWdJbnQocmFuZ2VzWzFdKSA6IHBhcnNlSW50KHJhbmdlc1sxXSwgMTApOyAvLyBjb252ZXJ0IGJhY2sgdG8gYSBudW1iZXIgaWYgbGVzcyB0aGFuIE1BWF9TQUZFX0lOVEVHRVJcblxuICAgIGlmIChzdGFydFJhbmdlIDwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgJiYgdHlwZW9mIHN0YXJ0UmFuZ2UgPT09ICdiaWdpbnQnKSB7XG4gICAgICBzdGFydFJhbmdlID0gTnVtYmVyKHN0YXJ0UmFuZ2UpO1xuICAgIH1cblxuICAgIGlmIChlbmRSYW5nZSA8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSICYmIHR5cGVvZiBlbmRSYW5nZSA9PT0gJ2JpZ2ludCcpIHtcbiAgICAgIGVuZFJhbmdlID0gTnVtYmVyKGVuZFJhbmdlKTtcbiAgICB9XG5cbiAgICBsZXQgbGVuZ3RoO1xuXG4gICAgaWYgKHR5cGVvZiBlbmRSYW5nZSA9PT0gJ2JpZ2ludCcgfHwgdHlwZW9mIHN0YXJ0UmFuZ2UgPT09ICdiaWdpbnQnKSB7XG4gICAgICBsZW5ndGggPSB3aW5kb3cuQmlnSW50KGVuZFJhbmdlKSAtIHdpbmRvdy5CaWdJbnQoc3RhcnRSYW5nZSkgKyB3aW5kb3cuQmlnSW50KDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSBlbmRSYW5nZSAtIHN0YXJ0UmFuZ2UgKyAxO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbGVuZ3RoID09PSAnYmlnaW50JyAmJiBsZW5ndGggPCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikge1xuICAgICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aCk7XG4gICAgfSAvLyBieXRlcmFuZ2Ugc2hvdWxkIGJlIGluY2x1c2l2ZSBhY2NvcmRpbmcgdG9cbiAgICAvLyBSRkMgMjYxNiwgQ2xhdXNlIDE0LjM1LjFcblxuXG4gICAgc2VnbWVudC5ieXRlcmFuZ2UgPSB7XG4gICAgICBsZW5ndGgsXG4gICAgICBvZmZzZXQ6IHN0YXJ0UmFuZ2VcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHNlZ21lbnQ7XG59O1xuY29uc3QgYnl0ZVJhbmdlVG9TdHJpbmcgPSBieXRlcmFuZ2UgPT4ge1xuICAvLyBgZW5kUmFuZ2VgIGlzIG9uZSBsZXNzIHRoYW4gYG9mZnNldCArIGxlbmd0aGAgYmVjYXVzZSB0aGUgSFRUUCByYW5nZVxuICAvLyBoZWFkZXIgdXNlcyBpbmNsdXNpdmUgcmFuZ2VzXG4gIGxldCBlbmRSYW5nZTtcblxuICBpZiAodHlwZW9mIGJ5dGVyYW5nZS5vZmZzZXQgPT09ICdiaWdpbnQnIHx8IHR5cGVvZiBieXRlcmFuZ2UubGVuZ3RoID09PSAnYmlnaW50Jykge1xuICAgIGVuZFJhbmdlID0gd2luZG93LkJpZ0ludChieXRlcmFuZ2Uub2Zmc2V0KSArIHdpbmRvdy5CaWdJbnQoYnl0ZXJhbmdlLmxlbmd0aCkgLSB3aW5kb3cuQmlnSW50KDEpO1xuICB9IGVsc2Uge1xuICAgIGVuZFJhbmdlID0gYnl0ZXJhbmdlLm9mZnNldCArIGJ5dGVyYW5nZS5sZW5ndGggLSAxO1xuICB9XG5cbiAgcmV0dXJuIGAke2J5dGVyYW5nZS5vZmZzZXR9LSR7ZW5kUmFuZ2V9YDtcbn07XG5cbi8qKlxuICogcGFyc2UgdGhlIGVuZCBudW1iZXIgYXR0cmlidWUgdGhhdCBjYW4gYmUgYSBzdHJpbmdcbiAqIG51bWJlciwgb3IgdW5kZWZpbmVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcnx1bmRlZmluZWR9IGVuZE51bWJlclxuICogICAgICAgIFRoZSBlbmQgbnVtYmVyIGF0dHJpYnV0ZS5cbiAqXG4gKiBAcmV0dXJuIHtudW1iZXJ8bnVsbH1cbiAqICAgICAgICAgIFRoZSByZXN1bHQgb2YgcGFyc2luZyB0aGUgZW5kIG51bWJlci5cbiAqL1xuXG5jb25zdCBwYXJzZUVuZE51bWJlciA9IGVuZE51bWJlciA9PiB7XG4gIGlmIChlbmROdW1iZXIgJiYgdHlwZW9mIGVuZE51bWJlciAhPT0gJ251bWJlcicpIHtcbiAgICBlbmROdW1iZXIgPSBwYXJzZUludChlbmROdW1iZXIsIDEwKTtcbiAgfVxuXG4gIGlmIChpc05hTihlbmROdW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gZW5kTnVtYmVyO1xufTtcbi8qKlxuICogRnVuY3Rpb25zIGZvciBjYWxjdWxhdGluZyB0aGUgcmFuZ2Ugb2YgYXZhaWxhYmxlIHNlZ21lbnRzIGluIHN0YXRpYyBhbmQgZHluYW1pY1xuICogbWFuaWZlc3RzLlxuICovXG5cblxuY29uc3Qgc2VnbWVudFJhbmdlID0ge1xuICAvKipcbiAgICogUmV0dXJucyB0aGUgZW50aXJlIHJhbmdlIG9mIGF2YWlsYWJsZSBzZWdtZW50cyBmb3IgYSBzdGF0aWMgTVBEXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyaWJ1dGVzXG4gICAqICAgICAgICBJbmhlcml0aWVkIE1QRCBhdHRyaWJ1dGVzXG4gICAqIEByZXR1cm4ge3sgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIgfX1cbiAgICogICAgICAgICBUaGUgc3RhcnQgYW5kIGVuZCBudW1iZXJzIGZvciBhdmFpbGFibGUgc2VnbWVudHNcbiAgICovXG4gIHN0YXRpYyhhdHRyaWJ1dGVzKSB7XG4gICAgY29uc3Qge1xuICAgICAgZHVyYXRpb24sXG4gICAgICB0aW1lc2NhbGUgPSAxLFxuICAgICAgc291cmNlRHVyYXRpb24sXG4gICAgICBwZXJpb2REdXJhdGlvblxuICAgIH0gPSBhdHRyaWJ1dGVzO1xuICAgIGNvbnN0IGVuZE51bWJlciA9IHBhcnNlRW5kTnVtYmVyKGF0dHJpYnV0ZXMuZW5kTnVtYmVyKTtcbiAgICBjb25zdCBzZWdtZW50RHVyYXRpb24gPSBkdXJhdGlvbiAvIHRpbWVzY2FsZTtcblxuICAgIGlmICh0eXBlb2YgZW5kTnVtYmVyID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgIGVuZDogZW5kTnVtYmVyXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcGVyaW9kRHVyYXRpb24gPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGFydDogMCxcbiAgICAgICAgZW5kOiBwZXJpb2REdXJhdGlvbiAvIHNlZ21lbnREdXJhdGlvblxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnQ6IDAsXG4gICAgICBlbmQ6IHNvdXJjZUR1cmF0aW9uIC8gc2VnbWVudER1cmF0aW9uXG4gICAgfTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBsaXZlIHdpbmRvdyByYW5nZSBvZiBhdmFpbGFibGUgc2VnbWVudHMgZm9yIGEgZHluYW1pYyBNUERcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGF0dHJpYnV0ZXNcbiAgICogICAgICAgIEluaGVyaXRpZWQgTVBEIGF0dHJpYnV0ZXNcbiAgICogQHJldHVybiB7eyBzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlciB9fVxuICAgKiAgICAgICAgIFRoZSBzdGFydCBhbmQgZW5kIG51bWJlcnMgZm9yIGF2YWlsYWJsZSBzZWdtZW50c1xuICAgKi9cbiAgZHluYW1pYyhhdHRyaWJ1dGVzKSB7XG4gICAgY29uc3Qge1xuICAgICAgTk9XLFxuICAgICAgY2xpZW50T2Zmc2V0LFxuICAgICAgYXZhaWxhYmlsaXR5U3RhcnRUaW1lLFxuICAgICAgdGltZXNjYWxlID0gMSxcbiAgICAgIGR1cmF0aW9uLFxuICAgICAgcGVyaW9kU3RhcnQgPSAwLFxuICAgICAgbWluaW11bVVwZGF0ZVBlcmlvZCA9IDAsXG4gICAgICB0aW1lU2hpZnRCdWZmZXJEZXB0aCA9IEluZmluaXR5XG4gICAgfSA9IGF0dHJpYnV0ZXM7XG4gICAgY29uc3QgZW5kTnVtYmVyID0gcGFyc2VFbmROdW1iZXIoYXR0cmlidXRlcy5lbmROdW1iZXIpOyAvLyBjbGllbnRPZmZzZXQgaXMgcGFzc2VkIGluIGF0IHRoZSB0b3AgbGV2ZWwgb2YgbXBkLXBhcnNlciBhbmQgaXMgYW4gb2Zmc2V0IGNhbGN1bGF0ZWRcbiAgICAvLyBhZnRlciByZXRyaWV2aW5nIFVUQyBzZXJ2ZXIgdGltZS5cblxuICAgIGNvbnN0IG5vdyA9IChOT1cgKyBjbGllbnRPZmZzZXQpIC8gMTAwMDsgLy8gV0Mgc3RhbmRzIGZvciBXYWxsIENsb2NrLlxuICAgIC8vIENvbnZlcnQgdGhlIHBlcmlvZCBzdGFydCB0aW1lIHRvIEVQT0NILlxuXG4gICAgY29uc3QgcGVyaW9kU3RhcnRXQyA9IGF2YWlsYWJpbGl0eVN0YXJ0VGltZSArIHBlcmlvZFN0YXJ0OyAvLyBQZXJpb2QgZW5kIGluIEVQT0NIIGlzIG1hbmlmZXN0J3MgcmV0cmlldmFsIHRpbWUgKyB0aW1lIHVudGlsIG5leHQgdXBkYXRlLlxuXG4gICAgY29uc3QgcGVyaW9kRW5kV0MgPSBub3cgKyBtaW5pbXVtVXBkYXRlUGVyaW9kO1xuICAgIGNvbnN0IHBlcmlvZER1cmF0aW9uID0gcGVyaW9kRW5kV0MgLSBwZXJpb2RTdGFydFdDO1xuICAgIGNvbnN0IHNlZ21lbnRDb3VudCA9IE1hdGguY2VpbChwZXJpb2REdXJhdGlvbiAqIHRpbWVzY2FsZSAvIGR1cmF0aW9uKTtcbiAgICBjb25zdCBhdmFpbGFibGVTdGFydCA9IE1hdGguZmxvb3IoKG5vdyAtIHBlcmlvZFN0YXJ0V0MgLSB0aW1lU2hpZnRCdWZmZXJEZXB0aCkgKiB0aW1lc2NhbGUgLyBkdXJhdGlvbik7XG4gICAgY29uc3QgYXZhaWxhYmxlRW5kID0gTWF0aC5mbG9vcigobm93IC0gcGVyaW9kU3RhcnRXQykgKiB0aW1lc2NhbGUgLyBkdXJhdGlvbik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0OiBNYXRoLm1heCgwLCBhdmFpbGFibGVTdGFydCksXG4gICAgICBlbmQ6IHR5cGVvZiBlbmROdW1iZXIgPT09ICdudW1iZXInID8gZW5kTnVtYmVyIDogTWF0aC5taW4oc2VnbWVudENvdW50LCBhdmFpbGFibGVFbmQpXG4gICAgfTtcbiAgfVxuXG59O1xuLyoqXG4gKiBNYXBzIGEgcmFuZ2Ugb2YgbnVtYmVycyB0byBvYmplY3RzIHdpdGggaW5mb3JtYXRpb24gbmVlZGVkIHRvIGJ1aWxkIHRoZSBjb3JyZXNwb25kaW5nXG4gKiBzZWdtZW50IGxpc3RcbiAqXG4gKiBAbmFtZSB0b1NlZ21lbnRzQ2FsbGJhY2tcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IG51bWJlclxuICogICAgICAgIE51bWJlciBvZiB0aGUgc2VnbWVudFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiAgICAgICAgSW5kZXggb2YgdGhlIG51bWJlciBpbiB0aGUgcmFuZ2UgbGlzdFxuICogQHJldHVybiB7eyBudW1iZXI6IE51bWJlciwgZHVyYXRpb246IE51bWJlciwgdGltZWxpbmU6IE51bWJlciwgdGltZTogTnVtYmVyIH19XG4gKiAgICAgICAgIE9iamVjdCB3aXRoIHNlZ21lbnQgdGltaW5nIGFuZCBkdXJhdGlvbiBpbmZvXG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIGEgY2FsbGJhY2sgZm9yIEFycmF5LnByb3RvdHlwZS5tYXAgZm9yIG1hcHBpbmcgYSByYW5nZSBvZiBudW1iZXJzIHRvXG4gKiBpbmZvcm1hdGlvbiBuZWVkZWQgdG8gYnVpbGQgdGhlIHNlZ21lbnQgbGlzdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cmlidXRlc1xuICogICAgICAgIEluaGVyaXRlZCBNUEQgYXR0cmlidXRlc1xuICogQHJldHVybiB7dG9TZWdtZW50c0NhbGxiYWNrfVxuICogICAgICAgICBDYWxsYmFjayBtYXAgZnVuY3Rpb25cbiAqL1xuXG5jb25zdCB0b1NlZ21lbnRzID0gYXR0cmlidXRlcyA9PiBudW1iZXIgPT4ge1xuICBjb25zdCB7XG4gICAgZHVyYXRpb24sXG4gICAgdGltZXNjYWxlID0gMSxcbiAgICBwZXJpb2RTdGFydCxcbiAgICBzdGFydE51bWJlciA9IDFcbiAgfSA9IGF0dHJpYnV0ZXM7XG4gIHJldHVybiB7XG4gICAgbnVtYmVyOiBzdGFydE51bWJlciArIG51bWJlcixcbiAgICBkdXJhdGlvbjogZHVyYXRpb24gLyB0aW1lc2NhbGUsXG4gICAgdGltZWxpbmU6IHBlcmlvZFN0YXJ0LFxuICAgIHRpbWU6IG51bWJlciAqIGR1cmF0aW9uXG4gIH07XG59O1xuLyoqXG4gKiBSZXR1cm5zIGEgbGlzdCBvZiBvYmplY3RzIGNvbnRhaW5pbmcgc2VnbWVudCB0aW1pbmcgYW5kIGR1cmF0aW9uIGluZm8gdXNlZCBmb3JcbiAqIGJ1aWxkaW5nIHRoZSBsaXN0IG9mIHNlZ21lbnRzLiBUaGlzIHVzZXMgdGhlIEBkdXJhdGlvbiBhdHRyaWJ1dGUgc3BlY2lmaWVkXG4gKiBpbiB0aGUgTVBEIG1hbmlmZXN0IHRvIGRlcml2ZSB0aGUgcmFuZ2Ugb2Ygc2VnbWVudHMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJpYnV0ZXNcbiAqICAgICAgICBJbmhlcml0ZWQgTVBEIGF0dHJpYnV0ZXNcbiAqIEByZXR1cm4ge3tudW1iZXI6IG51bWJlciwgZHVyYXRpb246IG51bWJlciwgdGltZTogbnVtYmVyLCB0aW1lbGluZTogbnVtYmVyfVtdfVxuICogICAgICAgICBMaXN0IG9mIE9iamVjdHMgd2l0aCBzZWdtZW50IHRpbWluZyBhbmQgZHVyYXRpb24gaW5mb1xuICovXG5cbmNvbnN0IHBhcnNlQnlEdXJhdGlvbiA9IGF0dHJpYnV0ZXMgPT4ge1xuICBjb25zdCB7XG4gICAgdHlwZSxcbiAgICBkdXJhdGlvbixcbiAgICB0aW1lc2NhbGUgPSAxLFxuICAgIHBlcmlvZER1cmF0aW9uLFxuICAgIHNvdXJjZUR1cmF0aW9uXG4gIH0gPSBhdHRyaWJ1dGVzO1xuICBjb25zdCB7XG4gICAgc3RhcnQsXG4gICAgZW5kXG4gIH0gPSBzZWdtZW50UmFuZ2VbdHlwZV0oYXR0cmlidXRlcyk7XG4gIGNvbnN0IHNlZ21lbnRzID0gcmFuZ2Uoc3RhcnQsIGVuZCkubWFwKHRvU2VnbWVudHMoYXR0cmlidXRlcykpO1xuXG4gIGlmICh0eXBlID09PSAnc3RhdGljJykge1xuICAgIGNvbnN0IGluZGV4ID0gc2VnbWVudHMubGVuZ3RoIC0gMTsgLy8gc2VjdGlvbiBpcyBlaXRoZXIgYSBwZXJpb2Qgb3IgdGhlIGZ1bGwgc291cmNlXG5cbiAgICBjb25zdCBzZWN0aW9uRHVyYXRpb24gPSB0eXBlb2YgcGVyaW9kRHVyYXRpb24gPT09ICdudW1iZXInID8gcGVyaW9kRHVyYXRpb24gOiBzb3VyY2VEdXJhdGlvbjsgLy8gZmluYWwgc2VnbWVudCBtYXkgYmUgbGVzcyB0aGFuIGZ1bGwgc2VnbWVudCBkdXJhdGlvblxuXG4gICAgc2VnbWVudHNbaW5kZXhdLmR1cmF0aW9uID0gc2VjdGlvbkR1cmF0aW9uIC0gZHVyYXRpb24gLyB0aW1lc2NhbGUgKiBpbmRleDtcbiAgfVxuXG4gIHJldHVybiBzZWdtZW50cztcbn07XG5cbi8qKlxuICogVHJhbnNsYXRlcyBTZWdtZW50QmFzZSBpbnRvIGEgc2V0IG9mIHNlZ21lbnRzLlxuICogKERBU0ggU1BFQyBTZWN0aW9uIDUuMy45LjMuMikgY29udGFpbnMgYSBzZXQgb2YgPFNlZ21lbnRVUkw+IG5vZGVzLiAgRWFjaFxuICogbm9kZSBzaG91bGQgYmUgdHJhbnNsYXRlZCBpbnRvIHNlZ21lbnQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJpYnV0ZXNcbiAqICAgT2JqZWN0IGNvbnRhaW5pbmcgYWxsIGluaGVyaXRlZCBhdHRyaWJ1dGVzIGZyb20gcGFyZW50IGVsZW1lbnRzIHdpdGggYXR0cmlidXRlXG4gKiAgIG5hbWVzIGFzIGtleXNcbiAqIEByZXR1cm4ge09iamVjdC48QXJyYXk+fSBsaXN0IG9mIHNlZ21lbnRzXG4gKi9cblxuY29uc3Qgc2VnbWVudHNGcm9tQmFzZSA9IGF0dHJpYnV0ZXMgPT4ge1xuICBjb25zdCB7XG4gICAgYmFzZVVybCxcbiAgICBpbml0aWFsaXphdGlvbiA9IHt9LFxuICAgIHNvdXJjZUR1cmF0aW9uLFxuICAgIGluZGV4UmFuZ2UgPSAnJyxcbiAgICBwZXJpb2RTdGFydCxcbiAgICBwcmVzZW50YXRpb25UaW1lLFxuICAgIG51bWJlciA9IDAsXG4gICAgZHVyYXRpb25cbiAgfSA9IGF0dHJpYnV0ZXM7IC8vIGJhc2UgdXJsIGlzIHJlcXVpcmVkIGZvciBTZWdtZW50QmFzZSB0byB3b3JrLCBwZXIgc3BlYyAoU2VjdGlvbiA1LjMuOS4yLjEpXG5cbiAgaWYgKCFiYXNlVXJsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGVycm9ycy5OT19CQVNFX1VSTCk7XG4gIH1cblxuICBjb25zdCBpbml0U2VnbWVudCA9IHVybFR5cGVUb1NlZ21lbnQoe1xuICAgIGJhc2VVcmwsXG4gICAgc291cmNlOiBpbml0aWFsaXphdGlvbi5zb3VyY2VVUkwsXG4gICAgcmFuZ2U6IGluaXRpYWxpemF0aW9uLnJhbmdlXG4gIH0pO1xuICBjb25zdCBzZWdtZW50ID0gdXJsVHlwZVRvU2VnbWVudCh7XG4gICAgYmFzZVVybCxcbiAgICBzb3VyY2U6IGJhc2VVcmwsXG4gICAgaW5kZXhSYW5nZVxuICB9KTtcbiAgc2VnbWVudC5tYXAgPSBpbml0U2VnbWVudDsgLy8gSWYgdGhlcmUgaXMgYSBkdXJhdGlvbiwgdXNlIGl0LCBvdGhlcndpc2UgdXNlIHRoZSBnaXZlbiBkdXJhdGlvbiBvZiB0aGUgc291cmNlXG4gIC8vIChzaW5jZSBTZWdtZW50QmFzZSBpcyBvbmx5IGZvciBvbmUgdG90YWwgc2VnbWVudClcblxuICBpZiAoZHVyYXRpb24pIHtcbiAgICBjb25zdCBzZWdtZW50VGltZUluZm8gPSBwYXJzZUJ5RHVyYXRpb24oYXR0cmlidXRlcyk7XG5cbiAgICBpZiAoc2VnbWVudFRpbWVJbmZvLmxlbmd0aCkge1xuICAgICAgc2VnbWVudC5kdXJhdGlvbiA9IHNlZ21lbnRUaW1lSW5mb1swXS5kdXJhdGlvbjtcbiAgICAgIHNlZ21lbnQudGltZWxpbmUgPSBzZWdtZW50VGltZUluZm9bMF0udGltZWxpbmU7XG4gICAgfVxuICB9IGVsc2UgaWYgKHNvdXJjZUR1cmF0aW9uKSB7XG4gICAgc2VnbWVudC5kdXJhdGlvbiA9IHNvdXJjZUR1cmF0aW9uO1xuICAgIHNlZ21lbnQudGltZWxpbmUgPSBwZXJpb2RTdGFydDtcbiAgfSAvLyBJZiBwcmVzZW50YXRpb24gdGltZSBpcyBwcm92aWRlZCwgdGhlc2Ugc2VnbWVudHMgYXJlIGJlaW5nIGdlbmVyYXRlZCBieSBTSURYXG4gIC8vIHJlZmVyZW5jZXMsIGFuZCBzaG91bGQgdXNlIHRoZSB0aW1lIHByb3ZpZGVkLiBGb3IgdGhlIGdlbmVyYWwgY2FzZSBvZiBTZWdtZW50QmFzZSxcbiAgLy8gdGhlcmUgc2hvdWxkIG9ubHkgYmUgb25lIHNlZ21lbnQgaW4gdGhlIHBlcmlvZCwgc28gaXRzIHByZXNlbnRhdGlvbiB0aW1lIGlzIHRoZSBzYW1lXG4gIC8vIGFzIGl0cyBwZXJpb2Qgc3RhcnQuXG5cblxuICBzZWdtZW50LnByZXNlbnRhdGlvblRpbWUgPSBwcmVzZW50YXRpb25UaW1lIHx8IHBlcmlvZFN0YXJ0O1xuICBzZWdtZW50Lm51bWJlciA9IG51bWJlcjtcbiAgcmV0dXJuIFtzZWdtZW50XTtcbn07XG4vKipcbiAqIEdpdmVuIGEgcGxheWxpc3QsIGEgc2lkeCBib3gsIGFuZCBhIGJhc2VVcmwsIHVwZGF0ZSB0aGUgc2VnbWVudCBsaXN0IG9mIHRoZSBwbGF5bGlzdFxuICogYWNjb3JkaW5nIHRvIHRoZSBzaWR4IGluZm9ybWF0aW9uIGdpdmVuLlxuICpcbiAqIHBsYXlsaXN0LnNpZHggaGFzIG1ldGFkYWRhdGEgYWJvdXQgdGhlIHNpZHggd2hlcmUtYXMgdGhlIHNpZHggcGFyYW1cbiAqIGlzIHRoZSBwYXJzZWQgc2lkeCBib3ggaXRzZWxmLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwbGF5bGlzdCB0aGUgcGxheWxpc3QgdG8gdXBkYXRlIHRoZSBzaWR4IGluZm9ybWF0aW9uIGZvclxuICogQHBhcmFtIHtPYmplY3R9IHNpZHggdGhlIHBhcnNlZCBzaWR4IGJveFxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgcGxheWxpc3Qgb2JqZWN0IHdpdGggdGhlIHVwZGF0ZWQgc2lkeCBpbmZvcm1hdGlvblxuICovXG5cbmNvbnN0IGFkZFNpZHhTZWdtZW50c1RvUGxheWxpc3QkMSA9IChwbGF5bGlzdCwgc2lkeCwgYmFzZVVybCkgPT4ge1xuICAvLyBSZXRhaW4gaW5pdCBzZWdtZW50IGluZm9ybWF0aW9uXG4gIGNvbnN0IGluaXRTZWdtZW50ID0gcGxheWxpc3Quc2lkeC5tYXAgPyBwbGF5bGlzdC5zaWR4Lm1hcCA6IG51bGw7IC8vIFJldGFpbiBzb3VyY2UgZHVyYXRpb24gZnJvbSBpbml0aWFsIG1haW4gbWFuaWZlc3QgcGFyc2luZ1xuXG4gIGNvbnN0IHNvdXJjZUR1cmF0aW9uID0gcGxheWxpc3Quc2lkeC5kdXJhdGlvbjsgLy8gUmV0YWluIHNvdXJjZSB0aW1lbGluZVxuXG4gIGNvbnN0IHRpbWVsaW5lID0gcGxheWxpc3QudGltZWxpbmUgfHwgMDtcbiAgY29uc3Qgc2lkeEJ5dGVSYW5nZSA9IHBsYXlsaXN0LnNpZHguYnl0ZXJhbmdlO1xuICBjb25zdCBzaWR4RW5kID0gc2lkeEJ5dGVSYW5nZS5vZmZzZXQgKyBzaWR4Qnl0ZVJhbmdlLmxlbmd0aDsgLy8gUmV0YWluIHRpbWVzY2FsZSBvZiB0aGUgcGFyc2VkIHNpZHhcblxuICBjb25zdCB0aW1lc2NhbGUgPSBzaWR4LnRpbWVzY2FsZTsgLy8gcmVmZXJlbmNlVHlwZSAxIHJlZmVycyB0byBvdGhlciBzaWR4IGJveGVzXG5cbiAgY29uc3QgbWVkaWFSZWZlcmVuY2VzID0gc2lkeC5yZWZlcmVuY2VzLmZpbHRlcihyID0+IHIucmVmZXJlbmNlVHlwZSAhPT0gMSk7XG4gIGNvbnN0IHNlZ21lbnRzID0gW107XG4gIGNvbnN0IHR5cGUgPSBwbGF5bGlzdC5lbmRMaXN0ID8gJ3N0YXRpYycgOiAnZHluYW1pYyc7XG4gIGNvbnN0IHBlcmlvZFN0YXJ0ID0gcGxheWxpc3Quc2lkeC50aW1lbGluZTtcbiAgbGV0IHByZXNlbnRhdGlvblRpbWUgPSBwZXJpb2RTdGFydDtcbiAgbGV0IG51bWJlciA9IHBsYXlsaXN0Lm1lZGlhU2VxdWVuY2UgfHwgMDsgLy8gZmlyc3RPZmZzZXQgaXMgdGhlIG9mZnNldCBmcm9tIHRoZSBlbmQgb2YgdGhlIHNpZHggYm94XG5cbiAgbGV0IHN0YXJ0SW5kZXg7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG4gIGlmICh0eXBlb2Ygc2lkeC5maXJzdE9mZnNldCA9PT0gJ2JpZ2ludCcpIHtcbiAgICBzdGFydEluZGV4ID0gd2luZG93LkJpZ0ludChzaWR4RW5kKSArIHNpZHguZmlyc3RPZmZzZXQ7XG4gIH0gZWxzZSB7XG4gICAgc3RhcnRJbmRleCA9IHNpZHhFbmQgKyBzaWR4LmZpcnN0T2Zmc2V0O1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZWRpYVJlZmVyZW5jZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSBzaWR4LnJlZmVyZW5jZXNbaV07IC8vIHNpemUgb2YgdGhlIHJlZmVyZW5jZWQgKHN1YilzZWdtZW50XG5cbiAgICBjb25zdCBzaXplID0gcmVmZXJlbmNlLnJlZmVyZW5jZWRTaXplOyAvLyBkdXJhdGlvbiBvZiB0aGUgcmVmZXJlbmNlZCAoc3ViKXNlZ21lbnQsIGluICB0aGUgIHRpbWVzY2FsZVxuICAgIC8vIHRoaXMgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gc2Vjb25kcyB3aGVuIGdlbmVyYXRpbmcgc2VnbWVudHNcblxuICAgIGNvbnN0IGR1cmF0aW9uID0gcmVmZXJlbmNlLnN1YnNlZ21lbnREdXJhdGlvbjsgLy8gc2hvdWxkIGJlIGFuIGluY2x1c2l2ZSByYW5nZVxuXG4gICAgbGV0IGVuZEluZGV4OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuICAgIGlmICh0eXBlb2Ygc3RhcnRJbmRleCA9PT0gJ2JpZ2ludCcpIHtcbiAgICAgIGVuZEluZGV4ID0gc3RhcnRJbmRleCArIHdpbmRvdy5CaWdJbnQoc2l6ZSkgLSB3aW5kb3cuQmlnSW50KDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmRJbmRleCA9IHN0YXJ0SW5kZXggKyBzaXplIC0gMTtcbiAgICB9XG5cbiAgICBjb25zdCBpbmRleFJhbmdlID0gYCR7c3RhcnRJbmRleH0tJHtlbmRJbmRleH1gO1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB7XG4gICAgICBiYXNlVXJsLFxuICAgICAgdGltZXNjYWxlLFxuICAgICAgdGltZWxpbmUsXG4gICAgICBwZXJpb2RTdGFydCxcbiAgICAgIHByZXNlbnRhdGlvblRpbWUsXG4gICAgICBudW1iZXIsXG4gICAgICBkdXJhdGlvbixcbiAgICAgIHNvdXJjZUR1cmF0aW9uLFxuICAgICAgaW5kZXhSYW5nZSxcbiAgICAgIHR5cGVcbiAgICB9O1xuICAgIGNvbnN0IHNlZ21lbnQgPSBzZWdtZW50c0Zyb21CYXNlKGF0dHJpYnV0ZXMpWzBdO1xuXG4gICAgaWYgKGluaXRTZWdtZW50KSB7XG4gICAgICBzZWdtZW50Lm1hcCA9IGluaXRTZWdtZW50O1xuICAgIH1cblxuICAgIHNlZ21lbnRzLnB1c2goc2VnbWVudCk7XG5cbiAgICBpZiAodHlwZW9mIHN0YXJ0SW5kZXggPT09ICdiaWdpbnQnKSB7XG4gICAgICBzdGFydEluZGV4ICs9IHdpbmRvdy5CaWdJbnQoc2l6ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0SW5kZXggKz0gc2l6ZTtcbiAgICB9XG5cbiAgICBwcmVzZW50YXRpb25UaW1lICs9IGR1cmF0aW9uIC8gdGltZXNjYWxlO1xuICAgIG51bWJlcisrO1xuICB9XG5cbiAgcGxheWxpc3Quc2VnbWVudHMgPSBzZWdtZW50cztcbiAgcmV0dXJuIHBsYXlsaXN0O1xufTtcblxuY29uc3QgU1VQUE9SVEVEX01FRElBX1RZUEVTID0gWydBVURJTycsICdTVUJUSVRMRVMnXTsgLy8gYWxsb3cgb25lIDYwZnBzIGZyYW1lIGFzIGxlbmllbmN5IChhcmJpdHJhcmlseSBjaG9zZW4pXG5cbmNvbnN0IFRJTUVfRlVER0UgPSAxIC8gNjA7XG4vKipcbiAqIEdpdmVuIGEgbGlzdCBvZiB0aW1lbGluZVN0YXJ0cywgY29tYmluZXMsIGRlZHVwZXMsIGFuZCBzb3J0cyB0aGVtLlxuICpcbiAqIEBwYXJhbSB7VGltZWxpbmVTdGFydFtdfSB0aW1lbGluZVN0YXJ0cyAtIGxpc3Qgb2YgdGltZWxpbmUgc3RhcnRzXG4gKlxuICogQHJldHVybiB7VGltZWxpbmVTdGFydFtdfSB0aGUgY29tYmluZWQgYW5kIGRlZHVwZWQgdGltZWxpbmUgc3RhcnRzXG4gKi9cblxuY29uc3QgZ2V0VW5pcXVlVGltZWxpbmVTdGFydHMgPSB0aW1lbGluZVN0YXJ0cyA9PiB7XG4gIHJldHVybiB1bmlvbih0aW1lbGluZVN0YXJ0cywgKHtcbiAgICB0aW1lbGluZVxuICB9KSA9PiB0aW1lbGluZSkuc29ydCgoYSwgYikgPT4gYS50aW1lbGluZSA+IGIudGltZWxpbmUgPyAxIDogLTEpO1xufTtcbi8qKlxuICogRmluZHMgdGhlIHBsYXlsaXN0IHdpdGggdGhlIG1hdGNoaW5nIE5BTUUgYXR0cmlidXRlLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHBsYXlsaXN0cyAtIHBsYXlsaXN0cyB0byBzZWFyY2ggdGhyb3VnaFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSB0aGUgTkFNRSBhdHRyaWJ1dGUgdG8gc2VhcmNoIGZvclxuICpcbiAqIEByZXR1cm4ge09iamVjdHxudWxsfSB0aGUgbWF0Y2hpbmcgcGxheWxpc3Qgb2JqZWN0LCBvciBudWxsXG4gKi9cblxuY29uc3QgZmluZFBsYXlsaXN0V2l0aE5hbWUgPSAocGxheWxpc3RzLCBuYW1lKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWxpc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHBsYXlsaXN0c1tpXS5hdHRyaWJ1dGVzLk5BTUUgPT09IG5hbWUpIHtcbiAgICAgIHJldHVybiBwbGF5bGlzdHNbaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuLyoqXG4gKiBHZXRzIGEgZmxhdHRlbmVkIGFycmF5IG9mIG1lZGlhIGdyb3VwIHBsYXlsaXN0cy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gbWFuaWZlc3QgLSB0aGUgbWFpbiBtYW5pZmVzdCBvYmplY3RcbiAqXG4gKiBAcmV0dXJuIHtBcnJheX0gdGhlIG1lZGlhIGdyb3VwIHBsYXlsaXN0c1xuICovXG5cbmNvbnN0IGdldE1lZGlhR3JvdXBQbGF5bGlzdHMgPSBtYW5pZmVzdCA9PiB7XG4gIGxldCBtZWRpYUdyb3VwUGxheWxpc3RzID0gW107XG4gIGZvckVhY2hNZWRpYUdyb3VwKG1hbmlmZXN0LCBTVVBQT1JURURfTUVESUFfVFlQRVMsIChwcm9wZXJ0aWVzLCB0eXBlLCBncm91cCwgbGFiZWwpID0+IHtcbiAgICBtZWRpYUdyb3VwUGxheWxpc3RzID0gbWVkaWFHcm91cFBsYXlsaXN0cy5jb25jYXQocHJvcGVydGllcy5wbGF5bGlzdHMgfHwgW10pO1xuICB9KTtcbiAgcmV0dXJuIG1lZGlhR3JvdXBQbGF5bGlzdHM7XG59O1xuLyoqXG4gKiBVcGRhdGVzIHRoZSBwbGF5bGlzdCdzIG1lZGlhIHNlcXVlbmNlIG51bWJlcnMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyAtIG9wdGlvbnMgb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnLnBsYXlsaXN0IC0gdGhlIHBsYXlsaXN0IHRvIHVwZGF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IGNvbmZpZy5tZWRpYVNlcXVlbmNlIC0gdGhlIG1lZGlhU2VxdWVuY2UgbnVtYmVyIHRvIHN0YXJ0IHdpdGhcbiAqL1xuXG5jb25zdCB1cGRhdGVNZWRpYVNlcXVlbmNlRm9yUGxheWxpc3QgPSAoe1xuICBwbGF5bGlzdCxcbiAgbWVkaWFTZXF1ZW5jZVxufSkgPT4ge1xuICBwbGF5bGlzdC5tZWRpYVNlcXVlbmNlID0gbWVkaWFTZXF1ZW5jZTtcbiAgcGxheWxpc3Quc2VnbWVudHMuZm9yRWFjaCgoc2VnbWVudCwgaW5kZXgpID0+IHtcbiAgICBzZWdtZW50Lm51bWJlciA9IHBsYXlsaXN0Lm1lZGlhU2VxdWVuY2UgKyBpbmRleDtcbiAgfSk7XG59O1xuLyoqXG4gKiBVcGRhdGVzIHRoZSBtZWRpYSBhbmQgZGlzY29udGludWl0eSBzZXF1ZW5jZSBudW1iZXJzIG9mIG5ld1BsYXlsaXN0cyBnaXZlbiBvbGRQbGF5bGlzdHNcbiAqIGFuZCBhIGNvbXBsZXRlIGxpc3Qgb2YgdGltZWxpbmUgc3RhcnRzLlxuICpcbiAqIElmIG5vIG1hdGNoaW5nIHBsYXlsaXN0IGlzIGZvdW5kLCBvbmx5IHRoZSBkaXNjb250aW51aXR5IHNlcXVlbmNlIG51bWJlciBvZiB0aGUgcGxheWxpc3RcbiAqIHdpbGwgYmUgdXBkYXRlZC5cbiAqXG4gKiBTaW5jZSBlYXJseSBhdmFpbGFibGUgdGltZWxpbmVzIGFyZSBub3Qgc3VwcG9ydGVkLCBhdCBsZWFzdCBvbmUgc2VnbWVudCBtdXN0IGJlIHByZXNlbnQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyAtIG9wdGlvbnMgb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdFtdfSBvbGRQbGF5bGlzdHMgLSB0aGUgb2xkIHBsYXlsaXN0cyB0byB1c2UgYXMgYSByZWZlcmVuY2VcbiAqIEBwYXJhbSB7T2JqZWN0W119IG5ld1BsYXlsaXN0cyAtIHRoZSBuZXcgcGxheWxpc3RzIHRvIHVwZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHRpbWVsaW5lU3RhcnRzIC0gYWxsIHRpbWVsaW5lU3RhcnRzIHNlZW4gaW4gdGhlIHN0cmVhbSB0byB0aGlzIHBvaW50XG4gKi9cblxuY29uc3QgdXBkYXRlU2VxdWVuY2VOdW1iZXJzID0gKHtcbiAgb2xkUGxheWxpc3RzLFxuICBuZXdQbGF5bGlzdHMsXG4gIHRpbWVsaW5lU3RhcnRzXG59KSA9PiB7XG4gIG5ld1BsYXlsaXN0cy5mb3JFYWNoKHBsYXlsaXN0ID0+IHtcbiAgICBwbGF5bGlzdC5kaXNjb250aW51aXR5U2VxdWVuY2UgPSB0aW1lbGluZVN0YXJ0cy5maW5kSW5kZXgoZnVuY3Rpb24gKHtcbiAgICAgIHRpbWVsaW5lXG4gICAgfSkge1xuICAgICAgcmV0dXJuIHRpbWVsaW5lID09PSBwbGF5bGlzdC50aW1lbGluZTtcbiAgICB9KTsgLy8gUGxheWxpc3RzIE5BTUVzIGNvbWUgZnJvbSBEQVNIIFJlcHJlc2VudGF0aW9uIElEcywgd2hpY2ggYXJlIG1hbmRhdG9yeVxuICAgIC8vIChzZWUgSVNPXzIzMDA5LTEtMjAxMiA1LjMuNS4yKS5cbiAgICAvL1xuICAgIC8vIElmIHRoZSBzYW1lIFJlcHJlc2VudGF0aW9uIGV4aXN0ZWQgaW4gYSBwcmlvciBQZXJpb2QsIGl0IHdpbGwgcmV0YWluIHRoZSBzYW1lIE5BTUUuXG5cbiAgICBjb25zdCBvbGRQbGF5bGlzdCA9IGZpbmRQbGF5bGlzdFdpdGhOYW1lKG9sZFBsYXlsaXN0cywgcGxheWxpc3QuYXR0cmlidXRlcy5OQU1FKTtcblxuICAgIGlmICghb2xkUGxheWxpc3QpIHtcbiAgICAgIC8vIFNpbmNlIHRoaXMgaXMgYSBuZXcgcGxheWxpc3QsIHRoZSBtZWRpYSBzZXF1ZW5jZSB2YWx1ZXMgY2FuIHN0YXJ0IGZyb20gMCB3aXRob3V0XG4gICAgICAvLyBjb25zZXF1ZW5jZS5cbiAgICAgIHJldHVybjtcbiAgICB9IC8vIFRPRE8gYmV0dGVyIHN1cHBvcnQgZm9yIGxpdmUgU0lEWFxuICAgIC8vXG4gICAgLy8gQXMgb2YgdGhpcyB3cml0aW5nLCBtcGQtcGFyc2VyIGRvZXMgbm90IHN1cHBvcnQgbXVsdGlwZXJpb2QgU0lEWCAoaW4gbGl2ZSBvciBWT0QpLlxuICAgIC8vIFRoaXMgaXMgZXZpZGVudCBieSBhIHBsYXlsaXN0IG9ubHkgaGF2aW5nIGEgc2luZ2xlIFNJRFggcmVmZXJlbmNlLiBJbiBhIG11bHRpcGVyaW9kXG4gICAgLy8gcGxheWxpc3QgdGhlcmUgd291bGQgbmVlZCB0byBiZSBtdWx0aXBsZSBTSURYIHJlZmVyZW5jZXMuIEluIGFkZGl0aW9uLCBsaXZlIFNJRFggaXNcbiAgICAvLyBub3Qgc3VwcG9ydGVkIHdoZW4gdGhlIFNJRFggcHJvcGVydGllcyBjaGFuZ2Ugb24gcmVmcmVzaGVzLlxuICAgIC8vXG4gICAgLy8gSW4gdGhlIGZ1dHVyZSwgaWYgc3VwcG9ydCBuZWVkcyB0byBiZSBhZGRlZCwgdGhlIG1lcmdpbmcgbG9naWMgaGVyZSBjYW4gYmUgY2FsbGVkXG4gICAgLy8gYWZ0ZXIgU0lEWCByZWZlcmVuY2VzIGFyZSByZXNvbHZlZC4gRm9yIG5vdywgZXhpdCBlYXJseSB0byBwcmV2ZW50IGV4Y2VwdGlvbnMgYmVpbmdcbiAgICAvLyB0aHJvd24gZHVlIHRvIHVuZGVmaW5lZCByZWZlcmVuY2VzLlxuXG5cbiAgICBpZiAocGxheWxpc3Quc2lkeCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gU2luY2Ugd2UgZG9uJ3QgeWV0IHN1cHBvcnQgZWFybHkgYXZhaWxhYmxlIHRpbWVsaW5lcywgd2UgZG9uJ3QgbmVlZCB0byBzdXBwb3J0XG4gICAgLy8gcGxheWxpc3RzIHdpdGggbm8gc2VnbWVudHMuXG5cblxuICAgIGNvbnN0IGZpcnN0TmV3U2VnbWVudCA9IHBsYXlsaXN0LnNlZ21lbnRzWzBdO1xuICAgIGNvbnN0IG9sZE1hdGNoaW5nU2VnbWVudEluZGV4ID0gb2xkUGxheWxpc3Quc2VnbWVudHMuZmluZEluZGV4KGZ1bmN0aW9uIChvbGRTZWdtZW50KSB7XG4gICAgICByZXR1cm4gTWF0aC5hYnMob2xkU2VnbWVudC5wcmVzZW50YXRpb25UaW1lIC0gZmlyc3ROZXdTZWdtZW50LnByZXNlbnRhdGlvblRpbWUpIDwgVElNRV9GVURHRTtcbiAgICB9KTsgLy8gTm8gbWF0Y2hpbmcgc2VnbWVudCBmcm9tIHRoZSBvbGQgcGxheWxpc3QgbWVhbnMgdGhlIGVudGlyZSBwbGF5bGlzdCB3YXMgcmVmcmVzaGVkLlxuICAgIC8vIEluIHRoaXMgY2FzZSB0aGUgbWVkaWEgc2VxdWVuY2Ugc2hvdWxkIGFjY291bnQgZm9yIHRoaXMgdXBkYXRlLCBhbmQgdGhlIG5ldyBzZWdtZW50c1xuICAgIC8vIHNob3VsZCBiZSBtYXJrZWQgYXMgZGlzY29udGludW91cyBmcm9tIHRoZSBwcmlvciBjb250ZW50LCBzaW5jZSB0aGUgbGFzdCBwcmlvclxuICAgIC8vIHRpbWVsaW5lIHdhcyByZW1vdmVkLlxuXG4gICAgaWYgKG9sZE1hdGNoaW5nU2VnbWVudEluZGV4ID09PSAtMSkge1xuICAgICAgdXBkYXRlTWVkaWFTZXF1ZW5jZUZvclBsYXlsaXN0KHtcbiAgICAgICAgcGxheWxpc3QsXG4gICAgICAgIG1lZGlhU2VxdWVuY2U6IG9sZFBsYXlsaXN0Lm1lZGlhU2VxdWVuY2UgKyBvbGRQbGF5bGlzdC5zZWdtZW50cy5sZW5ndGhcbiAgICAgIH0pO1xuICAgICAgcGxheWxpc3Quc2VnbWVudHNbMF0uZGlzY29udGludWl0eSA9IHRydWU7XG4gICAgICBwbGF5bGlzdC5kaXNjb250aW51aXR5U3RhcnRzLnVuc2hpZnQoMCk7IC8vIE5vIG1hdGNoaW5nIHNlZ21lbnQgZG9lcyBub3QgbmVjZXNzYXJpbHkgbWVhbiB0aGVyZSdzIG1pc3NpbmcgY29udGVudC5cbiAgICAgIC8vXG4gICAgICAvLyBJZiB0aGUgbmV3IHBsYXlsaXN0J3MgdGltZWxpbmUgaXMgdGhlIHNhbWUgYXMgdGhlIGxhc3Qgc2VlbiBzZWdtZW50J3MgdGltZWxpbmUsXG4gICAgICAvLyB0aGVuIGEgZGlzY29udGludWl0eSBjYW4gYmUgYWRkZWQgdG8gaWRlbnRpZnkgdGhhdCB0aGVyZSdzIHBvdGVudGlhbGx5IG1pc3NpbmdcbiAgICAgIC8vIGNvbnRlbnQuIElmIHRoZXJlJ3Mgbm8gbWlzc2luZyBjb250ZW50LCB0aGUgZGlzY29udGludWl0eSBzaG91bGQgc3RpbGwgYmUgcmF0aGVyXG4gICAgICAvLyBoYXJtbGVzcy4gSXQncyBwb3NzaWJsZSB0aGF0IGlmIHNlZ21lbnQgZHVyYXRpb25zIGFyZSBhY2N1cmF0ZSBlbm91Z2gsIHRoYXQgdGhlXG4gICAgICAvLyBleGlzdGVuY2Ugb2YgYSBnYXAgY2FuIGJlIGRldGVybWluZWQgdXNpbmcgdGhlIHByZXNlbnRhdGlvbiB0aW1lcyBhbmQgZHVyYXRpb25zLFxuICAgICAgLy8gYnV0IGlmIHRoZSBzZWdtZW50IHRpbWluZyBpbmZvIGlzIG9mZiwgaXQgbWF5IGludHJvZHVjZSBtb3JlIHByb2JsZW1zIHRoYW4gc2ltcGx5XG4gICAgICAvLyBhZGRpbmcgdGhlIGRpc2NvbnRpbnVpdHkuXG4gICAgICAvL1xuICAgICAgLy8gSWYgdGhlIG5ldyBwbGF5bGlzdCdzIHRpbWVsaW5lIGlzIGRpZmZlcmVudCBmcm9tIHRoZSBsYXN0IHNlZW4gc2VnbWVudCdzIHRpbWVsaW5lLFxuICAgICAgLy8gdGhlbiBhIGRpc2NvbnRpbnVpdHkgY2FuIGJlIGFkZGVkIHRvIGlkZW50aWZ5IHRoYXQgdGhpcyBpcyB0aGUgZmlyc3Qgc2VlbiBzZWdtZW50XG4gICAgICAvLyBvZiBhIG5ldyB0aW1lbGluZS4gSG93ZXZlciwgdGhlIGxvZ2ljIGF0IHRoZSBzdGFydCBvZiB0aGlzIGZ1bmN0aW9uIHRoYXRcbiAgICAgIC8vIGRldGVybWluZWQgdGhlIGRpc2NvbmludWl0eSBzZXF1ZW5jZSBieSB0aW1lbGluZSBpbmRleCBpcyBub3cgb2ZmIGJ5IG9uZSAodGhlXG4gICAgICAvLyBkaXNjb250aW51aXR5IG9mIHRoZSBuZXdlc3QgdGltZWxpbmUgaGFzbid0IHlldCBmYWxsZW4gb2ZmIHRoZSBtYW5pZmVzdC4uLnNpbmNlXG4gICAgICAvLyB3ZSBhZGRlZCBpdCksIHNvIHRoZSBkaXNjb25pbnVpdHkgc2VxdWVuY2UgbXVzdCBiZSBkZWNyZW1lbnRlZC5cbiAgICAgIC8vXG4gICAgICAvLyBBIHBlcmlvZCBtYXkgYWxzbyBoYXZlIGEgZHVyYXRpb24gb2YgemVybywgc28gdGhlIGNhc2Ugb2Ygbm8gc2VnbWVudHMgaXMgaGFuZGxlZFxuICAgICAgLy8gaGVyZSBldmVuIHRob3VnaCB3ZSBkb24ndCB5ZXQgc3VwcG9ydCBlYXJseSBhdmFpbGFibGUgcGVyaW9kcy5cblxuICAgICAgaWYgKCFvbGRQbGF5bGlzdC5zZWdtZW50cy5sZW5ndGggJiYgcGxheWxpc3QudGltZWxpbmUgPiBvbGRQbGF5bGlzdC50aW1lbGluZSB8fCBvbGRQbGF5bGlzdC5zZWdtZW50cy5sZW5ndGggJiYgcGxheWxpc3QudGltZWxpbmUgPiBvbGRQbGF5bGlzdC5zZWdtZW50c1tvbGRQbGF5bGlzdC5zZWdtZW50cy5sZW5ndGggLSAxXS50aW1lbGluZSkge1xuICAgICAgICBwbGF5bGlzdC5kaXNjb250aW51aXR5U2VxdWVuY2UtLTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gSWYgdGhlIGZpcnN0IHNlZ21lbnQgbWF0Y2hlZCB3aXRoIGEgcHJpb3Igc2VnbWVudCBvbiBhIGRpc2NvbnRpbnVpdHkgKGl0J3MgbWF0Y2hpbmdcbiAgICAvLyBvbiB0aGUgZmlyc3Qgc2VnbWVudCBvZiBhIHBlcmlvZCksIHRoZW4gdGhlIGRpc2NvbnRpbnVpdHlTZXF1ZW5jZSBzaG91bGRuJ3QgYmUgdGhlXG4gICAgLy8gdGltZWxpbmUncyBtYXRjaGluZyBvbmUsIGJ1dCBpbnN0ZWFkIHNob3VsZCBiZSB0aGUgb25lIHByaW9yLCBhbmQgdGhlIGZpcnN0IHNlZ21lbnRcbiAgICAvLyBvZiB0aGUgbmV3IG1hbmlmZXN0IHNob3VsZCBiZSBtYXJrZWQgd2l0aCBhIGRpc2NvbnRpbnVpdHkuXG4gICAgLy9cbiAgICAvLyBUaGUgcmVhc29uIGZvciB0aGlzIHNwZWNpYWwgY2FzZSBpcyB0aGF0IGRpc2NvbnRpbnVpdHkgc2VxdWVuY2Ugc2hvd3MgaG93IG1hbnlcbiAgICAvLyBkaXNjb250aW51aXRpZXMgaGF2ZSBmYWxsZW4gb2ZmIG9mIHRoZSBwbGF5bGlzdCwgYW5kIGRpc2NvbnRpbnVpdGllcyBhcmUgbWFya2VkIG9uXG4gICAgLy8gdGhlIGZpcnN0IHNlZ21lbnQgb2YgYSBuZXcgXCJ0aW1lbGluZS5cIiBCZWNhdXNlIG9mIHRoaXMsIHdoaWxlIERBU0ggd2lsbCByZXRhaW4gdGhhdFxuICAgIC8vIFBlcmlvZCB3aGlsZSB0aGUgXCJ0aW1lbGluZVwiIGV4aXN0cywgSExTIGtlZXBzIHRyYWNrIG9mIGl0IHZpYSB0aGUgZGlzY29udGludWl0eVxuICAgIC8vIHNlcXVlbmNlLCBhbmQgdGhhdCBmaXJzdCBzZWdtZW50IGlzIGFuIGluZGljYXRvciwgYnV0IGNhbiBiZSByZW1vdmVkIGJlZm9yZSB0aGF0XG4gICAgLy8gdGltZWxpbmUgaXMgZ29uZS5cblxuXG4gICAgY29uc3Qgb2xkTWF0Y2hpbmdTZWdtZW50ID0gb2xkUGxheWxpc3Quc2VnbWVudHNbb2xkTWF0Y2hpbmdTZWdtZW50SW5kZXhdO1xuXG4gICAgaWYgKG9sZE1hdGNoaW5nU2VnbWVudC5kaXNjb250aW51aXR5ICYmICFmaXJzdE5ld1NlZ21lbnQuZGlzY29udGludWl0eSkge1xuICAgICAgZmlyc3ROZXdTZWdtZW50LmRpc2NvbnRpbnVpdHkgPSB0cnVlO1xuICAgICAgcGxheWxpc3QuZGlzY29udGludWl0eVN0YXJ0cy51bnNoaWZ0KDApO1xuICAgICAgcGxheWxpc3QuZGlzY29udGludWl0eVNlcXVlbmNlLS07XG4gICAgfVxuXG4gICAgdXBkYXRlTWVkaWFTZXF1ZW5jZUZvclBsYXlsaXN0KHtcbiAgICAgIHBsYXlsaXN0LFxuICAgICAgbWVkaWFTZXF1ZW5jZTogb2xkUGxheWxpc3Quc2VnbWVudHNbb2xkTWF0Y2hpbmdTZWdtZW50SW5kZXhdLm51bWJlclxuICAgIH0pO1xuICB9KTtcbn07XG4vKipcbiAqIEdpdmVuIGFuIG9sZCBwYXJzZWQgbWFuaWZlc3Qgb2JqZWN0IGFuZCBhIG5ldyBwYXJzZWQgbWFuaWZlc3Qgb2JqZWN0LCB1cGRhdGVzIHRoZVxuICogc2VxdWVuY2UgYW5kIHRpbWluZyB2YWx1ZXMgd2l0aGluIHRoZSBuZXcgbWFuaWZlc3QgdG8gZW5zdXJlIHRoYXQgaXQgbGluZXMgdXAgd2l0aCB0aGVcbiAqIG9sZC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBvbGRNYW5pZmVzdCAtIHRoZSBvbGQgbWFpbiBtYW5pZmVzdCBvYmplY3RcbiAqIEBwYXJhbSB7QXJyYXl9IG5ld01hbmlmZXN0IC0gdGhlIG5ldyBtYWluIG1hbmlmZXN0IG9iamVjdFxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIHVwZGF0ZWQgbmV3IG1hbmlmZXN0IG9iamVjdFxuICovXG5cbmNvbnN0IHBvc2l0aW9uTWFuaWZlc3RPblRpbWVsaW5lID0gKHtcbiAgb2xkTWFuaWZlc3QsXG4gIG5ld01hbmlmZXN0XG59KSA9PiB7XG4gIC8vIFN0YXJ0aW5nIGZyb20gdjQuMS4yIG9mIHRoZSBJT1AsIHNlY3Rpb24gNC40LjMuMyBzdGF0ZXM6XG4gIC8vXG4gIC8vIFwiTVBEQGF2YWlsYWJpbGl0eVN0YXJ0VGltZSBhbmQgUGVyaW9kQHN0YXJ0IHNoYWxsIG5vdCBiZSBjaGFuZ2VkIG92ZXIgTVBEIHVwZGF0ZXMuXCJcbiAgLy9cbiAgLy8gVGhpcyB3YXMgYWRkZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vRGFzaC1JbmR1c3RyeS1Gb3J1bS9EQVNILUlGLUlPUC9pc3N1ZXMvMTYwXG4gIC8vXG4gIC8vIEJlY2F1c2Ugb2YgdGhpcyBjaGFuZ2UsIGFuZCB0aGUgZGlmZmljdWx0eSBvZiBzdXBwb3J0aW5nIHBlcmlvZHMgd2l0aCBjaGFuZ2luZyBzdGFydFxuICAvLyB0aW1lcywgcGVyaW9kcyB3aXRoIGNoYW5naW5nIHN0YXJ0IHRpbWVzIGFyZSBub3Qgc3VwcG9ydGVkLiBUaGlzIG1ha2VzIHRoZSBsb2dpYyBtdWNoXG4gIC8vIHNpbXBsZXIsIHNpbmNlIHBlcmlvZHMgd2l0aCB0aGUgc2FtZSBzdGFydCB0aW1lIGNhbiBiZSBjb25zaWRlcnJlZCB0aGUgc2FtZSBwZXJpb2RcbiAgLy8gYWNyb3NzIHJlZnJlc2hlcy5cbiAgLy9cbiAgLy8gVG8gZ2l2ZSBhbiBleGFtcGxlIGFzIHRvIHRoZSBkaWZmaWN1bHR5IG9mIGhhbmRsaW5nIHBlcmlvZHMgd2hlcmUgdGhlIHN0YXJ0IHRpbWUgbWF5XG4gIC8vIGNoYW5nZSwgaWYgYSBzaW5nbGUgcGVyaW9kIG1hbmlmZXN0IGlzIHJlZnJlc2hlZCB3aXRoIGFub3RoZXIgbWFuaWZlc3Qgd2l0aCBhIHNpbmdsZVxuICAvLyBwZXJpb2QsIGFuZCBib3RoIHRoZSBzdGFydCBhbmQgZW5kIHRpbWVzIGFyZSBpbmNyZWFzZWQsIHRoZW4gdGhlIG9ubHkgd2F5IHRvIGRldGVybWluZVxuICAvLyBpZiBpdCdzIGEgbmV3IHBlcmlvZCBvciBhbiBvbGQgb25lIHRoYXQgaGFzIGNoYW5nZWQgaXMgdG8gbG9vayB0aHJvdWdoIHRoZSBzZWdtZW50cyBvZlxuICAvLyBlYWNoIHBsYXlsaXN0IGFuZCBkZXRlcm1pbmUgdGhlIHByZXNlbnRhdGlvbiB0aW1lIGJvdW5kcyB0byBmaW5kIGEgbWF0Y2guIEluIGFkZGl0aW9uLFxuICAvLyBpZiB0aGUgcGVyaW9kIHN0YXJ0IGNoYW5nZWQgdG8gZXhjZWVkIHRoZSBvbGQgcGVyaW9kIGVuZCwgdGhlbiB0aGVyZSB3b3VsZCBiZSBub1xuICAvLyBtYXRjaCwgYW5kIGl0IHdvdWxkIG5vdCBiZSBwb3NzaWJsZSB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgcmVmcmVzaGVkIHBlcmlvZCBpcyBhIG5ld1xuICAvLyBvbmUgb3IgdGhlIG9sZCBvbmUuXG4gIGNvbnN0IG9sZFBsYXlsaXN0cyA9IG9sZE1hbmlmZXN0LnBsYXlsaXN0cy5jb25jYXQoZ2V0TWVkaWFHcm91cFBsYXlsaXN0cyhvbGRNYW5pZmVzdCkpO1xuICBjb25zdCBuZXdQbGF5bGlzdHMgPSBuZXdNYW5pZmVzdC5wbGF5bGlzdHMuY29uY2F0KGdldE1lZGlhR3JvdXBQbGF5bGlzdHMobmV3TWFuaWZlc3QpKTsgLy8gU2F2ZSBhbGwgc2VlbiB0aW1lbGluZVN0YXJ0cyB0byB0aGUgbmV3IG1hbmlmZXN0LiBBbHRob3VnaCB0aGlzIHBvdGVudGlhbGx5IG1lYW5zIHRoYXRcbiAgLy8gdGhlcmUncyBhIFwibWVtb3J5IGxlYWtcIiBpbiB0aGF0IGl0IHdpbGwgbmV2ZXIgc3RvcCBncm93aW5nLCBpbiByZWFsaXR5LCBvbmx5IGEgY291cGxlXG4gIC8vIG9mIHByb3BlcnRpZXMgYXJlIHNhdmVkIGZvciBlYWNoIHNlZW4gUGVyaW9kLiBFdmVuIGxvbmcgcnVubmluZyBsaXZlIHN0cmVhbXMgd29uJ3RcbiAgLy8gZ2VuZXJhdGUgdG9vIG1hbnkgUGVyaW9kcywgdW5sZXNzIHRoZSBzdHJlYW0gaXMgd2F0Y2hlZCBmb3IgZGVjYWRlcy4gSW4gdGhlIGZ1dHVyZSxcbiAgLy8gdGhpcyBjYW4gYmUgb3B0aW1pemVkIGJ5IG1hcHBpbmcgdG8gZGlzY29udGludWl0eSBzZXF1ZW5jZSBudW1iZXJzIGZvciBlYWNoIHRpbWVsaW5lLFxuICAvLyBidXQgaXQgbWF5IG5vdCBiZWNvbWUgYW4gaXNzdWUsIGFuZCB0aGUgYWRkaXRpb25hbCBpbmZvIGNhbiBiZSB1c2VmdWwgZm9yIGRlYnVnZ2luZy5cblxuICBuZXdNYW5pZmVzdC50aW1lbGluZVN0YXJ0cyA9IGdldFVuaXF1ZVRpbWVsaW5lU3RhcnRzKFtvbGRNYW5pZmVzdC50aW1lbGluZVN0YXJ0cywgbmV3TWFuaWZlc3QudGltZWxpbmVTdGFydHNdKTtcbiAgdXBkYXRlU2VxdWVuY2VOdW1iZXJzKHtcbiAgICBvbGRQbGF5bGlzdHMsXG4gICAgbmV3UGxheWxpc3RzLFxuICAgIHRpbWVsaW5lU3RhcnRzOiBuZXdNYW5pZmVzdC50aW1lbGluZVN0YXJ0c1xuICB9KTtcbiAgcmV0dXJuIG5ld01hbmlmZXN0O1xufTtcblxuY29uc3QgZ2VuZXJhdGVTaWR4S2V5ID0gc2lkeCA9PiBzaWR4ICYmIHNpZHgudXJpICsgJy0nICsgYnl0ZVJhbmdlVG9TdHJpbmcoc2lkeC5ieXRlcmFuZ2UpO1xuXG5jb25zdCBtZXJnZURpc2NvbnRpZ3VvdXNQbGF5bGlzdHMgPSBwbGF5bGlzdHMgPT4ge1xuICAvLyBCcmVhayBvdXQgcGxheWxpc3RzIGludG8gZ3JvdXBzIGJhc2VkIG9uIHRoZWlyIGJhc2VVcmxcbiAgY29uc3QgcGxheWxpc3RzQnlCYXNlVXJsID0gcGxheWxpc3RzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBjdXIpIHtcbiAgICBpZiAoIWFjY1tjdXIuYXR0cmlidXRlcy5iYXNlVXJsXSkge1xuICAgICAgYWNjW2N1ci5hdHRyaWJ1dGVzLmJhc2VVcmxdID0gW107XG4gICAgfVxuXG4gICAgYWNjW2N1ci5hdHRyaWJ1dGVzLmJhc2VVcmxdLnB1c2goY3VyKTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIGxldCBhbGxQbGF5bGlzdHMgPSBbXTtcbiAgT2JqZWN0LnZhbHVlcyhwbGF5bGlzdHNCeUJhc2VVcmwpLmZvckVhY2gocGxheWxpc3RHcm91cCA9PiB7XG4gICAgY29uc3QgbWVyZ2VkUGxheWxpc3RzID0gdmFsdWVzKHBsYXlsaXN0R3JvdXAucmVkdWNlKChhY2MsIHBsYXlsaXN0KSA9PiB7XG4gICAgICAvLyBhc3N1bWluZyBwbGF5bGlzdCBJRHMgYXJlIHRoZSBzYW1lIGFjcm9zcyBwZXJpb2RzXG4gICAgICAvLyBUT0RPOiBoYW5kbGUgbXVsdGlwZXJpb2Qgd2hlcmUgcmVwcmVzZW50YXRpb24gc2V0cyBhcmUgbm90IHRoZSBzYW1lXG4gICAgICAvLyBhY3Jvc3MgcGVyaW9kc1xuICAgICAgY29uc3QgbmFtZSA9IHBsYXlsaXN0LmF0dHJpYnV0ZXMuaWQgKyAocGxheWxpc3QuYXR0cmlidXRlcy5sYW5nIHx8ICcnKTtcblxuICAgICAgaWYgKCFhY2NbbmFtZV0pIHtcbiAgICAgICAgLy8gRmlyc3QgUGVyaW9kXG4gICAgICAgIGFjY1tuYW1lXSA9IHBsYXlsaXN0O1xuICAgICAgICBhY2NbbmFtZV0uYXR0cmlidXRlcy50aW1lbGluZVN0YXJ0cyA9IFtdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU3Vic2VxdWVudCBQZXJpb2RzXG4gICAgICAgIGlmIChwbGF5bGlzdC5zZWdtZW50cykge1xuICAgICAgICAgIC8vIGZpcnN0IHNlZ21lbnQgb2Ygc3Vic2VxdWVudCBwZXJpb2RzIHNpZ25hbCBhIGRpc2NvbnRpbnVpdHlcbiAgICAgICAgICBpZiAocGxheWxpc3Quc2VnbWVudHNbMF0pIHtcbiAgICAgICAgICAgIHBsYXlsaXN0LnNlZ21lbnRzWzBdLmRpc2NvbnRpbnVpdHkgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFjY1tuYW1lXS5zZWdtZW50cy5wdXNoKC4uLnBsYXlsaXN0LnNlZ21lbnRzKTtcbiAgICAgICAgfSAvLyBidWJibGUgdXAgY29udGVudFByb3RlY3Rpb24sIHRoaXMgYXNzdW1lcyBhbGwgRFJNIGNvbnRlbnRcbiAgICAgICAgLy8gaGFzIHRoZSBzYW1lIGNvbnRlbnRQcm90ZWN0aW9uXG5cblxuICAgICAgICBpZiAocGxheWxpc3QuYXR0cmlidXRlcy5jb250ZW50UHJvdGVjdGlvbikge1xuICAgICAgICAgIGFjY1tuYW1lXS5hdHRyaWJ1dGVzLmNvbnRlbnRQcm90ZWN0aW9uID0gcGxheWxpc3QuYXR0cmlidXRlcy5jb250ZW50UHJvdGVjdGlvbjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBhY2NbbmFtZV0uYXR0cmlidXRlcy50aW1lbGluZVN0YXJ0cy5wdXNoKHtcbiAgICAgICAgLy8gQWx0aG91Z2ggdGhleSByZXByZXNlbnQgdGhlIHNhbWUgbnVtYmVyLCBpdCdzIGltcG9ydGFudCB0byBoYXZlIGJvdGggdG8gbWFrZSBpdFxuICAgICAgICAvLyBjb21wYXRpYmxlIHdpdGggSExTIHBvdGVudGlhbGx5IGhhdmluZyBhIHNpbWlsYXIgYXR0cmlidXRlLlxuICAgICAgICBzdGFydDogcGxheWxpc3QuYXR0cmlidXRlcy5wZXJpb2RTdGFydCxcbiAgICAgICAgdGltZWxpbmU6IHBsYXlsaXN0LmF0dHJpYnV0ZXMucGVyaW9kU3RhcnRcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSkpO1xuICAgIGFsbFBsYXlsaXN0cyA9IGFsbFBsYXlsaXN0cy5jb25jYXQobWVyZ2VkUGxheWxpc3RzKTtcbiAgfSk7XG4gIHJldHVybiBhbGxQbGF5bGlzdHMubWFwKHBsYXlsaXN0ID0+IHtcbiAgICBwbGF5bGlzdC5kaXNjb250aW51aXR5U3RhcnRzID0gZmluZEluZGV4ZXMocGxheWxpc3Quc2VnbWVudHMgfHwgW10sICdkaXNjb250aW51aXR5Jyk7XG4gICAgcmV0dXJuIHBsYXlsaXN0O1xuICB9KTtcbn07XG5cbmNvbnN0IGFkZFNpZHhTZWdtZW50c1RvUGxheWxpc3QgPSAocGxheWxpc3QsIHNpZHhNYXBwaW5nKSA9PiB7XG4gIGNvbnN0IHNpZHhLZXkgPSBnZW5lcmF0ZVNpZHhLZXkocGxheWxpc3Quc2lkeCk7XG4gIGNvbnN0IHNpZHhNYXRjaCA9IHNpZHhLZXkgJiYgc2lkeE1hcHBpbmdbc2lkeEtleV0gJiYgc2lkeE1hcHBpbmdbc2lkeEtleV0uc2lkeDtcblxuICBpZiAoc2lkeE1hdGNoKSB7XG4gICAgYWRkU2lkeFNlZ21lbnRzVG9QbGF5bGlzdCQxKHBsYXlsaXN0LCBzaWR4TWF0Y2gsIHBsYXlsaXN0LnNpZHgucmVzb2x2ZWRVcmkpO1xuICB9XG5cbiAgcmV0dXJuIHBsYXlsaXN0O1xufTtcbmNvbnN0IGFkZFNpZHhTZWdtZW50c1RvUGxheWxpc3RzID0gKHBsYXlsaXN0cywgc2lkeE1hcHBpbmcgPSB7fSkgPT4ge1xuICBpZiAoIU9iamVjdC5rZXlzKHNpZHhNYXBwaW5nKS5sZW5ndGgpIHtcbiAgICByZXR1cm4gcGxheWxpc3RzO1xuICB9XG5cbiAgZm9yIChjb25zdCBpIGluIHBsYXlsaXN0cykge1xuICAgIHBsYXlsaXN0c1tpXSA9IGFkZFNpZHhTZWdtZW50c1RvUGxheWxpc3QocGxheWxpc3RzW2ldLCBzaWR4TWFwcGluZyk7XG4gIH1cblxuICByZXR1cm4gcGxheWxpc3RzO1xufTtcbmNvbnN0IGZvcm1hdEF1ZGlvUGxheWxpc3QgPSAoe1xuICBhdHRyaWJ1dGVzLFxuICBzZWdtZW50cyxcbiAgc2lkeCxcbiAgbWVkaWFTZXF1ZW5jZSxcbiAgZGlzY29udGludWl0eVNlcXVlbmNlLFxuICBkaXNjb250aW51aXR5U3RhcnRzXG59LCBpc0F1ZGlvT25seSkgPT4ge1xuICBjb25zdCBwbGF5bGlzdCA9IHtcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBOQU1FOiBhdHRyaWJ1dGVzLmlkLFxuICAgICAgQkFORFdJRFRIOiBhdHRyaWJ1dGVzLmJhbmR3aWR0aCxcbiAgICAgIENPREVDUzogYXR0cmlidXRlcy5jb2RlY3MsXG4gICAgICBbJ1BST0dSQU0tSUQnXTogMVxuICAgIH0sXG4gICAgdXJpOiAnJyxcbiAgICBlbmRMaXN0OiBhdHRyaWJ1dGVzLnR5cGUgPT09ICdzdGF0aWMnLFxuICAgIHRpbWVsaW5lOiBhdHRyaWJ1dGVzLnBlcmlvZFN0YXJ0LFxuICAgIHJlc29sdmVkVXJpOiBhdHRyaWJ1dGVzLmJhc2VVcmwgfHwgJycsXG4gICAgdGFyZ2V0RHVyYXRpb246IGF0dHJpYnV0ZXMuZHVyYXRpb24sXG4gICAgZGlzY29udGludWl0eVNlcXVlbmNlLFxuICAgIGRpc2NvbnRpbnVpdHlTdGFydHMsXG4gICAgdGltZWxpbmVTdGFydHM6IGF0dHJpYnV0ZXMudGltZWxpbmVTdGFydHMsXG4gICAgbWVkaWFTZXF1ZW5jZSxcbiAgICBzZWdtZW50c1xuICB9O1xuXG4gIGlmIChhdHRyaWJ1dGVzLmNvbnRlbnRQcm90ZWN0aW9uKSB7XG4gICAgcGxheWxpc3QuY29udGVudFByb3RlY3Rpb24gPSBhdHRyaWJ1dGVzLmNvbnRlbnRQcm90ZWN0aW9uO1xuICB9XG5cbiAgaWYgKGF0dHJpYnV0ZXMuc2VydmljZUxvY2F0aW9uKSB7XG4gICAgcGxheWxpc3QuYXR0cmlidXRlcy5zZXJ2aWNlTG9jYXRpb24gPSBhdHRyaWJ1dGVzLnNlcnZpY2VMb2NhdGlvbjtcbiAgfVxuXG4gIGlmIChzaWR4KSB7XG4gICAgcGxheWxpc3Quc2lkeCA9IHNpZHg7XG4gIH1cblxuICBpZiAoaXNBdWRpb09ubHkpIHtcbiAgICBwbGF5bGlzdC5hdHRyaWJ1dGVzLkFVRElPID0gJ2F1ZGlvJztcbiAgICBwbGF5bGlzdC5hdHRyaWJ1dGVzLlNVQlRJVExFUyA9ICdzdWJzJztcbiAgfVxuXG4gIHJldHVybiBwbGF5bGlzdDtcbn07XG5jb25zdCBmb3JtYXRWdHRQbGF5bGlzdCA9ICh7XG4gIGF0dHJpYnV0ZXMsXG4gIHNlZ21lbnRzLFxuICBtZWRpYVNlcXVlbmNlLFxuICBkaXNjb250aW51aXR5U3RhcnRzLFxuICBkaXNjb250aW51aXR5U2VxdWVuY2Vcbn0pID0+IHtcbiAgaWYgKHR5cGVvZiBzZWdtZW50cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyB2dHQgdHJhY2tzIG1heSB1c2Ugc2luZ2xlIGZpbGUgaW4gQmFzZVVSTFxuICAgIHNlZ21lbnRzID0gW3tcbiAgICAgIHVyaTogYXR0cmlidXRlcy5iYXNlVXJsLFxuICAgICAgdGltZWxpbmU6IGF0dHJpYnV0ZXMucGVyaW9kU3RhcnQsXG4gICAgICByZXNvbHZlZFVyaTogYXR0cmlidXRlcy5iYXNlVXJsIHx8ICcnLFxuICAgICAgZHVyYXRpb246IGF0dHJpYnV0ZXMuc291cmNlRHVyYXRpb24sXG4gICAgICBudW1iZXI6IDBcbiAgICB9XTsgLy8gdGFyZ2V0RHVyYXRpb24gc2hvdWxkIGJlIHRoZSBzYW1lIGR1cmF0aW9uIGFzIHRoZSBvbmx5IHNlZ21lbnRcblxuICAgIGF0dHJpYnV0ZXMuZHVyYXRpb24gPSBhdHRyaWJ1dGVzLnNvdXJjZUR1cmF0aW9uO1xuICB9XG5cbiAgY29uc3QgbTN1OEF0dHJpYnV0ZXMgPSB7XG4gICAgTkFNRTogYXR0cmlidXRlcy5pZCxcbiAgICBCQU5EV0lEVEg6IGF0dHJpYnV0ZXMuYmFuZHdpZHRoLFxuICAgIFsnUFJPR1JBTS1JRCddOiAxXG4gIH07XG5cbiAgaWYgKGF0dHJpYnV0ZXMuY29kZWNzKSB7XG4gICAgbTN1OEF0dHJpYnV0ZXMuQ09ERUNTID0gYXR0cmlidXRlcy5jb2RlY3M7XG4gIH1cblxuICBjb25zdCB2dHRQbGF5bGlzdCA9IHtcbiAgICBhdHRyaWJ1dGVzOiBtM3U4QXR0cmlidXRlcyxcbiAgICB1cmk6ICcnLFxuICAgIGVuZExpc3Q6IGF0dHJpYnV0ZXMudHlwZSA9PT0gJ3N0YXRpYycsXG4gICAgdGltZWxpbmU6IGF0dHJpYnV0ZXMucGVyaW9kU3RhcnQsXG4gICAgcmVzb2x2ZWRVcmk6IGF0dHJpYnV0ZXMuYmFzZVVybCB8fCAnJyxcbiAgICB0YXJnZXREdXJhdGlvbjogYXR0cmlidXRlcy5kdXJhdGlvbixcbiAgICB0aW1lbGluZVN0YXJ0czogYXR0cmlidXRlcy50aW1lbGluZVN0YXJ0cyxcbiAgICBkaXNjb250aW51aXR5U3RhcnRzLFxuICAgIGRpc2NvbnRpbnVpdHlTZXF1ZW5jZSxcbiAgICBtZWRpYVNlcXVlbmNlLFxuICAgIHNlZ21lbnRzXG4gIH07XG5cbiAgaWYgKGF0dHJpYnV0ZXMuc2VydmljZUxvY2F0aW9uKSB7XG4gICAgdnR0UGxheWxpc3QuYXR0cmlidXRlcy5zZXJ2aWNlTG9jYXRpb24gPSBhdHRyaWJ1dGVzLnNlcnZpY2VMb2NhdGlvbjtcbiAgfVxuXG4gIHJldHVybiB2dHRQbGF5bGlzdDtcbn07XG5jb25zdCBvcmdhbml6ZUF1ZGlvUGxheWxpc3RzID0gKHBsYXlsaXN0cywgc2lkeE1hcHBpbmcgPSB7fSwgaXNBdWRpb09ubHkgPSBmYWxzZSkgPT4ge1xuICBsZXQgbWFpblBsYXlsaXN0O1xuICBjb25zdCBmb3JtYXR0ZWRQbGF5bGlzdHMgPSBwbGF5bGlzdHMucmVkdWNlKChhLCBwbGF5bGlzdCkgPT4ge1xuICAgIGNvbnN0IHJvbGUgPSBwbGF5bGlzdC5hdHRyaWJ1dGVzLnJvbGUgJiYgcGxheWxpc3QuYXR0cmlidXRlcy5yb2xlLnZhbHVlIHx8ICcnO1xuICAgIGNvbnN0IGxhbmd1YWdlID0gcGxheWxpc3QuYXR0cmlidXRlcy5sYW5nIHx8ICcnO1xuICAgIGxldCBsYWJlbCA9IHBsYXlsaXN0LmF0dHJpYnV0ZXMubGFiZWwgfHwgJ21haW4nO1xuXG4gICAgaWYgKGxhbmd1YWdlICYmICFwbGF5bGlzdC5hdHRyaWJ1dGVzLmxhYmVsKSB7XG4gICAgICBjb25zdCByb2xlTGFiZWwgPSByb2xlID8gYCAoJHtyb2xlfSlgIDogJyc7XG4gICAgICBsYWJlbCA9IGAke3BsYXlsaXN0LmF0dHJpYnV0ZXMubGFuZ30ke3JvbGVMYWJlbH1gO1xuICAgIH1cblxuICAgIGlmICghYVtsYWJlbF0pIHtcbiAgICAgIGFbbGFiZWxdID0ge1xuICAgICAgICBsYW5ndWFnZSxcbiAgICAgICAgYXV0b3NlbGVjdDogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdDogcm9sZSA9PT0gJ21haW4nLFxuICAgICAgICBwbGF5bGlzdHM6IFtdLFxuICAgICAgICB1cmk6ICcnXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm1hdHRlZCA9IGFkZFNpZHhTZWdtZW50c1RvUGxheWxpc3QoZm9ybWF0QXVkaW9QbGF5bGlzdChwbGF5bGlzdCwgaXNBdWRpb09ubHkpLCBzaWR4TWFwcGluZyk7XG4gICAgYVtsYWJlbF0ucGxheWxpc3RzLnB1c2goZm9ybWF0dGVkKTtcblxuICAgIGlmICh0eXBlb2YgbWFpblBsYXlsaXN0ID09PSAndW5kZWZpbmVkJyAmJiByb2xlID09PSAnbWFpbicpIHtcbiAgICAgIG1haW5QbGF5bGlzdCA9IHBsYXlsaXN0O1xuICAgICAgbWFpblBsYXlsaXN0LmRlZmF1bHQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBhO1xuICB9LCB7fSk7IC8vIGlmIG5vIHBsYXlsaXN0cyBoYXZlIHJvbGUgXCJtYWluXCIsIG1hcmsgdGhlIGZpcnN0IGFzIG1haW5cblxuICBpZiAoIW1haW5QbGF5bGlzdCkge1xuICAgIGNvbnN0IGZpcnN0TGFiZWwgPSBPYmplY3Qua2V5cyhmb3JtYXR0ZWRQbGF5bGlzdHMpWzBdO1xuICAgIGZvcm1hdHRlZFBsYXlsaXN0c1tmaXJzdExhYmVsXS5kZWZhdWx0ID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXR0ZWRQbGF5bGlzdHM7XG59O1xuY29uc3Qgb3JnYW5pemVWdHRQbGF5bGlzdHMgPSAocGxheWxpc3RzLCBzaWR4TWFwcGluZyA9IHt9KSA9PiB7XG4gIHJldHVybiBwbGF5bGlzdHMucmVkdWNlKChhLCBwbGF5bGlzdCkgPT4ge1xuICAgIGNvbnN0IGxhYmVsID0gcGxheWxpc3QuYXR0cmlidXRlcy5sYWJlbCB8fCBwbGF5bGlzdC5hdHRyaWJ1dGVzLmxhbmcgfHwgJ3RleHQnO1xuXG4gICAgaWYgKCFhW2xhYmVsXSkge1xuICAgICAgYVtsYWJlbF0gPSB7XG4gICAgICAgIGxhbmd1YWdlOiBsYWJlbCxcbiAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIGF1dG9zZWxlY3Q6IGZhbHNlLFxuICAgICAgICBwbGF5bGlzdHM6IFtdLFxuICAgICAgICB1cmk6ICcnXG4gICAgICB9O1xuICAgIH1cblxuICAgIGFbbGFiZWxdLnBsYXlsaXN0cy5wdXNoKGFkZFNpZHhTZWdtZW50c1RvUGxheWxpc3QoZm9ybWF0VnR0UGxheWxpc3QocGxheWxpc3QpLCBzaWR4TWFwcGluZykpO1xuICAgIHJldHVybiBhO1xuICB9LCB7fSk7XG59O1xuXG5jb25zdCBvcmdhbml6ZUNhcHRpb25TZXJ2aWNlcyA9IGNhcHRpb25TZXJ2aWNlcyA9PiBjYXB0aW9uU2VydmljZXMucmVkdWNlKChzdmNPYmosIHN2YykgPT4ge1xuICBpZiAoIXN2Yykge1xuICAgIHJldHVybiBzdmNPYmo7XG4gIH1cblxuICBzdmMuZm9yRWFjaChzZXJ2aWNlID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBjaGFubmVsLFxuICAgICAgbGFuZ3VhZ2VcbiAgICB9ID0gc2VydmljZTtcbiAgICBzdmNPYmpbbGFuZ3VhZ2VdID0ge1xuICAgICAgYXV0b3NlbGVjdDogZmFsc2UsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGluc3RyZWFtSWQ6IGNoYW5uZWwsXG4gICAgICBsYW5ndWFnZVxuICAgIH07XG5cbiAgICBpZiAoc2VydmljZS5oYXNPd25Qcm9wZXJ0eSgnYXNwZWN0UmF0aW8nKSkge1xuICAgICAgc3ZjT2JqW2xhbmd1YWdlXS5hc3BlY3RSYXRpbyA9IHNlcnZpY2UuYXNwZWN0UmF0aW87XG4gICAgfVxuXG4gICAgaWYgKHNlcnZpY2UuaGFzT3duUHJvcGVydHkoJ2Vhc3lSZWFkZXInKSkge1xuICAgICAgc3ZjT2JqW2xhbmd1YWdlXS5lYXN5UmVhZGVyID0gc2VydmljZS5lYXN5UmVhZGVyO1xuICAgIH1cblxuICAgIGlmIChzZXJ2aWNlLmhhc093blByb3BlcnR5KCczRCcpKSB7XG4gICAgICBzdmNPYmpbbGFuZ3VhZ2VdWyczRCddID0gc2VydmljZVsnM0QnXTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc3ZjT2JqO1xufSwge30pO1xuXG5jb25zdCBmb3JtYXRWaWRlb1BsYXlsaXN0ID0gKHtcbiAgYXR0cmlidXRlcyxcbiAgc2VnbWVudHMsXG4gIHNpZHgsXG4gIGRpc2NvbnRpbnVpdHlTdGFydHNcbn0pID0+IHtcbiAgY29uc3QgcGxheWxpc3QgPSB7XG4gICAgYXR0cmlidXRlczoge1xuICAgICAgTkFNRTogYXR0cmlidXRlcy5pZCxcbiAgICAgIEFVRElPOiAnYXVkaW8nLFxuICAgICAgU1VCVElUTEVTOiAnc3VicycsXG4gICAgICBSRVNPTFVUSU9OOiB7XG4gICAgICAgIHdpZHRoOiBhdHRyaWJ1dGVzLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IGF0dHJpYnV0ZXMuaGVpZ2h0XG4gICAgICB9LFxuICAgICAgQ09ERUNTOiBhdHRyaWJ1dGVzLmNvZGVjcyxcbiAgICAgIEJBTkRXSURUSDogYXR0cmlidXRlcy5iYW5kd2lkdGgsXG4gICAgICBbJ1BST0dSQU0tSUQnXTogMVxuICAgIH0sXG4gICAgdXJpOiAnJyxcbiAgICBlbmRMaXN0OiBhdHRyaWJ1dGVzLnR5cGUgPT09ICdzdGF0aWMnLFxuICAgIHRpbWVsaW5lOiBhdHRyaWJ1dGVzLnBlcmlvZFN0YXJ0LFxuICAgIHJlc29sdmVkVXJpOiBhdHRyaWJ1dGVzLmJhc2VVcmwgfHwgJycsXG4gICAgdGFyZ2V0RHVyYXRpb246IGF0dHJpYnV0ZXMuZHVyYXRpb24sXG4gICAgZGlzY29udGludWl0eVN0YXJ0cyxcbiAgICB0aW1lbGluZVN0YXJ0czogYXR0cmlidXRlcy50aW1lbGluZVN0YXJ0cyxcbiAgICBzZWdtZW50c1xuICB9O1xuXG4gIGlmIChhdHRyaWJ1dGVzLmZyYW1lUmF0ZSkge1xuICAgIHBsYXlsaXN0LmF0dHJpYnV0ZXNbJ0ZSQU1FLVJBVEUnXSA9IGF0dHJpYnV0ZXMuZnJhbWVSYXRlO1xuICB9XG5cbiAgaWYgKGF0dHJpYnV0ZXMuY29udGVudFByb3RlY3Rpb24pIHtcbiAgICBwbGF5bGlzdC5jb250ZW50UHJvdGVjdGlvbiA9IGF0dHJpYnV0ZXMuY29udGVudFByb3RlY3Rpb247XG4gIH1cblxuICBpZiAoYXR0cmlidXRlcy5zZXJ2aWNlTG9jYXRpb24pIHtcbiAgICBwbGF5bGlzdC5hdHRyaWJ1dGVzLnNlcnZpY2VMb2NhdGlvbiA9IGF0dHJpYnV0ZXMuc2VydmljZUxvY2F0aW9uO1xuICB9XG5cbiAgaWYgKHNpZHgpIHtcbiAgICBwbGF5bGlzdC5zaWR4ID0gc2lkeDtcbiAgfVxuXG4gIHJldHVybiBwbGF5bGlzdDtcbn07XG5cbmNvbnN0IHZpZGVvT25seSA9ICh7XG4gIGF0dHJpYnV0ZXNcbn0pID0+IGF0dHJpYnV0ZXMubWltZVR5cGUgPT09ICd2aWRlby9tcDQnIHx8IGF0dHJpYnV0ZXMubWltZVR5cGUgPT09ICd2aWRlby93ZWJtJyB8fCBhdHRyaWJ1dGVzLmNvbnRlbnRUeXBlID09PSAndmlkZW8nO1xuXG5jb25zdCBhdWRpb09ubHkgPSAoe1xuICBhdHRyaWJ1dGVzXG59KSA9PiBhdHRyaWJ1dGVzLm1pbWVUeXBlID09PSAnYXVkaW8vbXA0JyB8fCBhdHRyaWJ1dGVzLm1pbWVUeXBlID09PSAnYXVkaW8vd2VibScgfHwgYXR0cmlidXRlcy5jb250ZW50VHlwZSA9PT0gJ2F1ZGlvJztcblxuY29uc3QgdnR0T25seSA9ICh7XG4gIGF0dHJpYnV0ZXNcbn0pID0+IGF0dHJpYnV0ZXMubWltZVR5cGUgPT09ICd0ZXh0L3Z0dCcgfHwgYXR0cmlidXRlcy5jb250ZW50VHlwZSA9PT0gJ3RleHQnO1xuLyoqXG4gKiBDb250YWlucyBzdGFydCBhbmQgdGltZWxpbmUgcHJvcGVydGllcyBkZW5vdGluZyBhIHRpbWVsaW5lIHN0YXJ0LiBGb3IgREFTSCwgdGhlc2Ugd2lsbFxuICogYmUgdGhlIHNhbWUgbnVtYmVyLlxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFRpbWVsaW5lU3RhcnRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzdGFydCAtIHRoZSBzdGFydCB0aW1lIG9mIHRoZSB0aW1lbGluZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IHRpbWVsaW5lIC0gdGhlIHRpbWVsaW5lIG51bWJlclxuICovXG5cbi8qKlxuICogQWRkcyBhcHByb3ByaWF0ZSBtZWRpYSBhbmQgZGlzY29udGludWl0eSBzZXF1ZW5jZSB2YWx1ZXMgdG8gdGhlIHNlZ21lbnRzIGFuZCBwbGF5bGlzdHMuXG4gKlxuICogVGhyb3VnaG91dCBtcGQtcGFyc2VyLCB0aGUgYG51bWJlcmAgYXR0cmlidXRlIGlzIHVzZWQgaW4gcmVsYXRpb24gdG8gYHN0YXJ0TnVtYmVyYCwgYVxuICogREFTSCBzcGVjaWZpYyBhdHRyaWJ1dGUgdXNlZCBpbiBjb25zdHJ1Y3Rpbmcgc2VnbWVudCBVUkkncyBmcm9tIHRlbXBsYXRlcy4gSG93ZXZlciwgZnJvbVxuICogYW4gSExTIHBlcnNwZWN0aXZlLCB0aGUgYG51bWJlcmAgYXR0cmlidXRlIG9uIGEgc2VnbWVudCB3b3VsZCBiZSBpdHMgYG1lZGlhU2VxdWVuY2VgXG4gKiB2YWx1ZSwgd2hpY2ggc2hvdWxkIHN0YXJ0IGF0IHRoZSBvcmlnaW5hbCBtZWRpYSBzZXF1ZW5jZSB2YWx1ZSAob3IgMCkgYW5kIGluY3JlbWVudCBieSAxXG4gKiBmb3IgZWFjaCBzZWdtZW50IHRoZXJlYWZ0ZXIuIFNpbmNlIERBU0gncyBgc3RhcnROdW1iZXJgIHZhbHVlcyBhcmUgaW5kZXBlbmRlbnQgcGVyXG4gKiBwZXJpb2QsIGl0IGRvZXNuJ3QgbWFrZSBzZW5zZSB0byB1c2UgaXQgZm9yIGBudW1iZXJgLiBJbnN0ZWFkLCBhc3N1bWUgZXZlcnl0aGluZyBzdGFydHNcbiAqIGZyb20gYSAwIG1lZGlhU2VxdWVuY2UgdmFsdWUgYW5kIGluY3JlbWVudCBmcm9tIHRoZXJlLlxuICpcbiAqIE5vdGUgdGhhdCBWSFMgY3VycmVudGx5IGRvZXNuJ3QgdXNlIHRoZSBgbnVtYmVyYCBwcm9wZXJ0eSwgYnV0IGl0IGNhbiBiZSBoZWxwZnVsIGZvclxuICogZGVidWdnaW5nIGFuZCBtYWtpbmcgc2Vuc2Ugb2YgdGhlIG1hbmlmZXN0LlxuICpcbiAqIEZvciBsaXZlIHBsYXlsaXN0cywgdG8gYWNjb3VudCBmb3IgdmFsdWVzIGluY3JlYXNpbmcgaW4gbWFuaWZlc3RzIHdoZW4gcGVyaW9kcyBhcmVcbiAqIHJlbW92ZWQgb24gcmVmcmVzaGVzLCBtZXJnaW5nIGxvZ2ljIHNob3VsZCBiZSB1c2VkIHRvIHVwZGF0ZSB0aGUgbnVtYmVycyB0byB0aGVpclxuICogYXBwcm9wcmlhdGUgdmFsdWVzICh0byBlbnN1cmUgdGhleSdyZSBzZXF1ZW50aWFsIGFuZCBpbmNyZWFzaW5nKS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdFtdfSBwbGF5bGlzdHMgLSB0aGUgcGxheWxpc3RzIHRvIHVwZGF0ZVxuICogQHBhcmFtIHtUaW1lbGluZVN0YXJ0W119IHRpbWVsaW5lU3RhcnRzIC0gdGhlIHRpbWVsaW5lIHN0YXJ0cyBmb3IgdGhlIG1hbmlmZXN0XG4gKi9cblxuXG5jb25zdCBhZGRNZWRpYVNlcXVlbmNlVmFsdWVzID0gKHBsYXlsaXN0cywgdGltZWxpbmVTdGFydHMpID0+IHtcbiAgLy8gaW5jcmVtZW50IGFsbCBzZWdtZW50cyBzZXF1ZW50aWFsbHlcbiAgcGxheWxpc3RzLmZvckVhY2gocGxheWxpc3QgPT4ge1xuICAgIHBsYXlsaXN0Lm1lZGlhU2VxdWVuY2UgPSAwO1xuICAgIHBsYXlsaXN0LmRpc2NvbnRpbnVpdHlTZXF1ZW5jZSA9IHRpbWVsaW5lU3RhcnRzLmZpbmRJbmRleChmdW5jdGlvbiAoe1xuICAgICAgdGltZWxpbmVcbiAgICB9KSB7XG4gICAgICByZXR1cm4gdGltZWxpbmUgPT09IHBsYXlsaXN0LnRpbWVsaW5lO1xuICAgIH0pO1xuXG4gICAgaWYgKCFwbGF5bGlzdC5zZWdtZW50cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHBsYXlsaXN0LnNlZ21lbnRzLmZvckVhY2goKHNlZ21lbnQsIGluZGV4KSA9PiB7XG4gICAgICBzZWdtZW50Lm51bWJlciA9IGluZGV4O1xuICAgIH0pO1xuICB9KTtcbn07XG4vKipcbiAqIEdpdmVuIGEgbWVkaWEgZ3JvdXAgb2JqZWN0LCBmbGF0dGVucyBhbGwgcGxheWxpc3RzIHdpdGhpbiB0aGUgbWVkaWEgZ3JvdXAgaW50byBhIHNpbmdsZVxuICogYXJyYXkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG1lZGlhR3JvdXBPYmplY3QgLSB0aGUgbWVkaWEgZ3JvdXAgb2JqZWN0XG4gKlxuICogQHJldHVybiB7T2JqZWN0W119XG4gKiAgICAgICAgIFRoZSBtZWRpYSBncm91cCBwbGF5bGlzdHNcbiAqL1xuXG5jb25zdCBmbGF0dGVuTWVkaWFHcm91cFBsYXlsaXN0cyA9IG1lZGlhR3JvdXBPYmplY3QgPT4ge1xuICBpZiAoIW1lZGlhR3JvdXBPYmplY3QpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmtleXMobWVkaWFHcm91cE9iamVjdCkucmVkdWNlKChhY2MsIGxhYmVsKSA9PiB7XG4gICAgY29uc3QgbGFiZWxDb250ZW50cyA9IG1lZGlhR3JvdXBPYmplY3RbbGFiZWxdO1xuICAgIHJldHVybiBhY2MuY29uY2F0KGxhYmVsQ29udGVudHMucGxheWxpc3RzKTtcbiAgfSwgW10pO1xufTtcbmNvbnN0IHRvTTN1OCA9ICh7XG4gIGRhc2hQbGF5bGlzdHMsXG4gIGxvY2F0aW9ucyxcbiAgY29udGVudFN0ZWVyaW5nLFxuICBzaWR4TWFwcGluZyA9IHt9LFxuICBwcmV2aW91c01hbmlmZXN0LFxuICBldmVudFN0cmVhbVxufSkgPT4ge1xuICBpZiAoIWRhc2hQbGF5bGlzdHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9IC8vIGdyYWIgYWxsIG1haW4gbWFuaWZlc3QgYXR0cmlidXRlc1xuXG5cbiAgY29uc3Qge1xuICAgIHNvdXJjZUR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICB0eXBlLFxuICAgIHN1Z2dlc3RlZFByZXNlbnRhdGlvbkRlbGF5LFxuICAgIG1pbmltdW1VcGRhdGVQZXJpb2RcbiAgfSA9IGRhc2hQbGF5bGlzdHNbMF0uYXR0cmlidXRlcztcbiAgY29uc3QgdmlkZW9QbGF5bGlzdHMgPSBtZXJnZURpc2NvbnRpZ3VvdXNQbGF5bGlzdHMoZGFzaFBsYXlsaXN0cy5maWx0ZXIodmlkZW9Pbmx5KSkubWFwKGZvcm1hdFZpZGVvUGxheWxpc3QpO1xuICBjb25zdCBhdWRpb1BsYXlsaXN0cyA9IG1lcmdlRGlzY29udGlndW91c1BsYXlsaXN0cyhkYXNoUGxheWxpc3RzLmZpbHRlcihhdWRpb09ubHkpKTtcbiAgY29uc3QgdnR0UGxheWxpc3RzID0gbWVyZ2VEaXNjb250aWd1b3VzUGxheWxpc3RzKGRhc2hQbGF5bGlzdHMuZmlsdGVyKHZ0dE9ubHkpKTtcbiAgY29uc3QgY2FwdGlvbnMgPSBkYXNoUGxheWxpc3RzLm1hcChwbGF5bGlzdCA9PiBwbGF5bGlzdC5hdHRyaWJ1dGVzLmNhcHRpb25TZXJ2aWNlcykuZmlsdGVyKEJvb2xlYW4pO1xuICBjb25zdCBtYW5pZmVzdCA9IHtcbiAgICBhbGxvd0NhY2hlOiB0cnVlLFxuICAgIGRpc2NvbnRpbnVpdHlTdGFydHM6IFtdLFxuICAgIHNlZ21lbnRzOiBbXSxcbiAgICBlbmRMaXN0OiB0cnVlLFxuICAgIG1lZGlhR3JvdXBzOiB7XG4gICAgICBBVURJTzoge30sXG4gICAgICBWSURFTzoge30sXG4gICAgICBbJ0NMT1NFRC1DQVBUSU9OUyddOiB7fSxcbiAgICAgIFNVQlRJVExFUzoge31cbiAgICB9LFxuICAgIHVyaTogJycsXG4gICAgZHVyYXRpb24sXG4gICAgcGxheWxpc3RzOiBhZGRTaWR4U2VnbWVudHNUb1BsYXlsaXN0cyh2aWRlb1BsYXlsaXN0cywgc2lkeE1hcHBpbmcpXG4gIH07XG5cbiAgaWYgKG1pbmltdW1VcGRhdGVQZXJpb2QgPj0gMCkge1xuICAgIG1hbmlmZXN0Lm1pbmltdW1VcGRhdGVQZXJpb2QgPSBtaW5pbXVtVXBkYXRlUGVyaW9kICogMTAwMDtcbiAgfVxuXG4gIGlmIChsb2NhdGlvbnMpIHtcbiAgICBtYW5pZmVzdC5sb2NhdGlvbnMgPSBsb2NhdGlvbnM7XG4gIH1cblxuICBpZiAoY29udGVudFN0ZWVyaW5nKSB7XG4gICAgbWFuaWZlc3QuY29udGVudFN0ZWVyaW5nID0gY29udGVudFN0ZWVyaW5nO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdkeW5hbWljJykge1xuICAgIG1hbmlmZXN0LnN1Z2dlc3RlZFByZXNlbnRhdGlvbkRlbGF5ID0gc3VnZ2VzdGVkUHJlc2VudGF0aW9uRGVsYXk7XG4gIH1cblxuICBpZiAoZXZlbnRTdHJlYW0gJiYgZXZlbnRTdHJlYW0ubGVuZ3RoID4gMCkge1xuICAgIG1hbmlmZXN0LmV2ZW50U3RyZWFtID0gZXZlbnRTdHJlYW07XG4gIH1cblxuICBjb25zdCBpc0F1ZGlvT25seSA9IG1hbmlmZXN0LnBsYXlsaXN0cy5sZW5ndGggPT09IDA7XG4gIGNvbnN0IG9yZ2FuaXplZEF1ZGlvR3JvdXAgPSBhdWRpb1BsYXlsaXN0cy5sZW5ndGggPyBvcmdhbml6ZUF1ZGlvUGxheWxpc3RzKGF1ZGlvUGxheWxpc3RzLCBzaWR4TWFwcGluZywgaXNBdWRpb09ubHkpIDogbnVsbDtcbiAgY29uc3Qgb3JnYW5pemVkVnR0R3JvdXAgPSB2dHRQbGF5bGlzdHMubGVuZ3RoID8gb3JnYW5pemVWdHRQbGF5bGlzdHModnR0UGxheWxpc3RzLCBzaWR4TWFwcGluZykgOiBudWxsO1xuICBjb25zdCBmb3JtYXR0ZWRQbGF5bGlzdHMgPSB2aWRlb1BsYXlsaXN0cy5jb25jYXQoZmxhdHRlbk1lZGlhR3JvdXBQbGF5bGlzdHMob3JnYW5pemVkQXVkaW9Hcm91cCksIGZsYXR0ZW5NZWRpYUdyb3VwUGxheWxpc3RzKG9yZ2FuaXplZFZ0dEdyb3VwKSk7XG4gIGNvbnN0IHBsYXlsaXN0VGltZWxpbmVTdGFydHMgPSBmb3JtYXR0ZWRQbGF5bGlzdHMubWFwKCh7XG4gICAgdGltZWxpbmVTdGFydHNcbiAgfSkgPT4gdGltZWxpbmVTdGFydHMpO1xuICBtYW5pZmVzdC50aW1lbGluZVN0YXJ0cyA9IGdldFVuaXF1ZVRpbWVsaW5lU3RhcnRzKHBsYXlsaXN0VGltZWxpbmVTdGFydHMpO1xuICBhZGRNZWRpYVNlcXVlbmNlVmFsdWVzKGZvcm1hdHRlZFBsYXlsaXN0cywgbWFuaWZlc3QudGltZWxpbmVTdGFydHMpO1xuXG4gIGlmIChvcmdhbml6ZWRBdWRpb0dyb3VwKSB7XG4gICAgbWFuaWZlc3QubWVkaWFHcm91cHMuQVVESU8uYXVkaW8gPSBvcmdhbml6ZWRBdWRpb0dyb3VwO1xuICB9XG5cbiAgaWYgKG9yZ2FuaXplZFZ0dEdyb3VwKSB7XG4gICAgbWFuaWZlc3QubWVkaWFHcm91cHMuU1VCVElUTEVTLnN1YnMgPSBvcmdhbml6ZWRWdHRHcm91cDtcbiAgfVxuXG4gIGlmIChjYXB0aW9ucy5sZW5ndGgpIHtcbiAgICBtYW5pZmVzdC5tZWRpYUdyb3Vwc1snQ0xPU0VELUNBUFRJT05TJ10uY2MgPSBvcmdhbml6ZUNhcHRpb25TZXJ2aWNlcyhjYXB0aW9ucyk7XG4gIH1cblxuICBpZiAocHJldmlvdXNNYW5pZmVzdCkge1xuICAgIHJldHVybiBwb3NpdGlvbk1hbmlmZXN0T25UaW1lbGluZSh7XG4gICAgICBvbGRNYW5pZmVzdDogcHJldmlvdXNNYW5pZmVzdCxcbiAgICAgIG5ld01hbmlmZXN0OiBtYW5pZmVzdFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG1hbmlmZXN0O1xufTtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBSIChyZXBldGl0aW9uKSB2YWx1ZSBmb3IgYSBsaXZlIHN0cmVhbSAoZm9yIHRoZSBmaW5hbCBzZWdtZW50XG4gKiBpbiBhIG1hbmlmZXN0IHdoZXJlIHRoZSByIHZhbHVlIGlzIG5lZ2F0aXZlIDEpXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJpYnV0ZXNcbiAqICAgICAgICBPYmplY3QgY29udGFpbmluZyBhbGwgaW5oZXJpdGVkIGF0dHJpYnV0ZXMgZnJvbSBwYXJlbnQgZWxlbWVudHMgd2l0aCBhdHRyaWJ1dGVcbiAqICAgICAgICBuYW1lcyBhcyBrZXlzXG4gKiBAcGFyYW0ge251bWJlcn0gdGltZVxuICogICAgICAgIGN1cnJlbnQgdGltZSAodHlwaWNhbGx5IHRoZSB0b3RhbCB0aW1lIHVwIHVudGlsIHRoZSBmaW5hbCBzZWdtZW50KVxuICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uXG4gKiAgICAgICAgZHVyYXRpb24gcHJvcGVydHkgZm9yIHRoZSBnaXZlbiA8UyAvPlxuICpcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqICAgICAgICBSIHZhbHVlIHRvIHJlYWNoIHRoZSBlbmQgb2YgdGhlIGdpdmVuIHBlcmlvZFxuICovXG5jb25zdCBnZXRMaXZlUlZhbHVlID0gKGF0dHJpYnV0ZXMsIHRpbWUsIGR1cmF0aW9uKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBOT1csXG4gICAgY2xpZW50T2Zmc2V0LFxuICAgIGF2YWlsYWJpbGl0eVN0YXJ0VGltZSxcbiAgICB0aW1lc2NhbGUgPSAxLFxuICAgIHBlcmlvZFN0YXJ0ID0gMCxcbiAgICBtaW5pbXVtVXBkYXRlUGVyaW9kID0gMFxuICB9ID0gYXR0cmlidXRlcztcbiAgY29uc3Qgbm93ID0gKE5PVyArIGNsaWVudE9mZnNldCkgLyAxMDAwO1xuICBjb25zdCBwZXJpb2RTdGFydFdDID0gYXZhaWxhYmlsaXR5U3RhcnRUaW1lICsgcGVyaW9kU3RhcnQ7XG4gIGNvbnN0IHBlcmlvZEVuZFdDID0gbm93ICsgbWluaW11bVVwZGF0ZVBlcmlvZDtcbiAgY29uc3QgcGVyaW9kRHVyYXRpb24gPSBwZXJpb2RFbmRXQyAtIHBlcmlvZFN0YXJ0V0M7XG4gIHJldHVybiBNYXRoLmNlaWwoKHBlcmlvZER1cmF0aW9uICogdGltZXNjYWxlIC0gdGltZSkgLyBkdXJhdGlvbik7XG59O1xuLyoqXG4gKiBVc2VzIGluZm9ybWF0aW9uIHByb3ZpZGVkIGJ5IFNlZ21lbnRUZW1wbGF0ZS5TZWdtZW50VGltZWxpbmUgdG8gZGV0ZXJtaW5lIHNlZ21lbnRcbiAqIHRpbWluZyBhbmQgZHVyYXRpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cmlidXRlc1xuICogICAgICAgIE9iamVjdCBjb250YWluaW5nIGFsbCBpbmhlcml0ZWQgYXR0cmlidXRlcyBmcm9tIHBhcmVudCBlbGVtZW50cyB3aXRoIGF0dHJpYnV0ZVxuICogICAgICAgIG5hbWVzIGFzIGtleXNcbiAqIEBwYXJhbSB7T2JqZWN0W119IHNlZ21lbnRUaW1lbGluZVxuICogICAgICAgIExpc3Qgb2Ygb2JqZWN0cyByZXByZXNlbnRpbmcgdGhlIGF0dHJpYnV0ZXMgb2YgZWFjaCBTIGVsZW1lbnQgY29udGFpbmVkIHdpdGhpblxuICpcbiAqIEByZXR1cm4ge3tudW1iZXI6IG51bWJlciwgZHVyYXRpb246IG51bWJlciwgdGltZTogbnVtYmVyLCB0aW1lbGluZTogbnVtYmVyfVtdfVxuICogICAgICAgICBMaXN0IG9mIE9iamVjdHMgd2l0aCBzZWdtZW50IHRpbWluZyBhbmQgZHVyYXRpb24gaW5mb1xuICovXG5cblxuY29uc3QgcGFyc2VCeVRpbWVsaW5lID0gKGF0dHJpYnV0ZXMsIHNlZ21lbnRUaW1lbGluZSkgPT4ge1xuICBjb25zdCB7XG4gICAgdHlwZSxcbiAgICBtaW5pbXVtVXBkYXRlUGVyaW9kID0gMCxcbiAgICBtZWRpYSA9ICcnLFxuICAgIHNvdXJjZUR1cmF0aW9uLFxuICAgIHRpbWVzY2FsZSA9IDEsXG4gICAgc3RhcnROdW1iZXIgPSAxLFxuICAgIHBlcmlvZFN0YXJ0OiB0aW1lbGluZVxuICB9ID0gYXR0cmlidXRlcztcbiAgY29uc3Qgc2VnbWVudHMgPSBbXTtcbiAgbGV0IHRpbWUgPSAtMTtcblxuICBmb3IgKGxldCBzSW5kZXggPSAwOyBzSW5kZXggPCBzZWdtZW50VGltZWxpbmUubGVuZ3RoOyBzSW5kZXgrKykge1xuICAgIGNvbnN0IFMgPSBzZWdtZW50VGltZWxpbmVbc0luZGV4XTtcbiAgICBjb25zdCBkdXJhdGlvbiA9IFMuZDtcbiAgICBjb25zdCByZXBlYXQgPSBTLnIgfHwgMDtcbiAgICBjb25zdCBzZWdtZW50VGltZSA9IFMudCB8fCAwO1xuXG4gICAgaWYgKHRpbWUgPCAwKSB7XG4gICAgICAvLyBmaXJzdCBzZWdtZW50XG4gICAgICB0aW1lID0gc2VnbWVudFRpbWU7XG4gICAgfVxuXG4gICAgaWYgKHNlZ21lbnRUaW1lICYmIHNlZ21lbnRUaW1lID4gdGltZSkge1xuICAgICAgLy8gZGlzY29udGludWl0eVxuICAgICAgLy8gVE9ETzogSG93IHRvIGhhbmRsZSB0aGlzIHR5cGUgb2YgZGlzY29udGludWl0eVxuICAgICAgLy8gdGltZWxpbmUrKyBoZXJlIHdvdWxkIHRyZWF0IGl0IGxpa2UgSExTIGRpc2NvbnR1aXR5IGFuZCBjb250ZW50IHdvdWxkXG4gICAgICAvLyBnZXQgYXBwZW5kZWQgd2l0aG91dCBnYXBcbiAgICAgIC8vIEUuRy5cbiAgICAgIC8vICA8UyB0PVwiMFwiIGQ9XCIxXCIgLz5cbiAgICAgIC8vICA8UyBkPVwiMVwiIC8+XG4gICAgICAvLyAgPFMgZD1cIjFcIiAvPlxuICAgICAgLy8gIDxTIHQ9XCI1XCIgZD1cIjFcIiAvPlxuICAgICAgLy8gd291bGQgaGF2ZSAkVGltZSQgdmFsdWVzIG9mIFswLCAxLCAyLCA1XVxuICAgICAgLy8gc2hvdWxkIHRoaXMgYmUgYXBwZW5lZCBhdCB0aW1lIHBvc2l0aW9ucyBbMCwgMSwgMiwgM10sKCNFWFQtWC1ESVNDT05USU5VSVRZKVxuICAgICAgLy8gb3IgWzAsIDEsIDIsIGdhcCwgZ2FwLCA1XT8gKCNFWFQtWC1HQVApXG4gICAgICAvLyBkb2VzIHRoZSB2YWx1ZSBvZiBzb3VyY2VEdXJhdGlvbiBjb25zaWRlciB0aGlzIHdoZW4gY2FsY3VsYXRpbmcgYXJiaXRyYXJ5XG4gICAgICAvLyBuZWdhdGl2ZSBAciByZXBlYXQgdmFsdWU/XG4gICAgICAvLyBFLkcuIFNhbWUgZWxlbWVudHMgYXMgYWJvdmUgd2l0aCB0aGlzIGFkZGVkIGF0IHRoZSBlbmRcbiAgICAgIC8vICA8UyBkPVwiMVwiIHI9XCItMVwiIC8+XG4gICAgICAvLyAgd2l0aCBhIHNvdXJjZUR1cmF0aW9uIG9mIDEwXG4gICAgICAvLyBXb3VsZCB0aGUgMiBnYXBzIGJlIGluY2x1ZGVkIGluIHRoZSB0aW1lIGR1cmF0aW9uIGNhbGN1bGF0aW9ucyByZXN1bHRpbmcgaW5cbiAgICAgIC8vIDggc2VnbWVudHMgd2l0aCAkVGltZSQgdmFsdWVzIG9mIFswLCAxLCAyLCA1LCA2LCA3LCA4LCA5XSBvciAxMCBzZWdtZW50c1xuICAgICAgLy8gd2l0aCAkVGltZSQgdmFsdWVzIG9mIFswLCAxLCAyLCA1LCA2LCA3LCA4LCA5LCAxMCwgMTFdID9cbiAgICAgIHRpbWUgPSBzZWdtZW50VGltZTtcbiAgICB9XG5cbiAgICBsZXQgY291bnQ7XG5cbiAgICBpZiAocmVwZWF0IDwgMCkge1xuICAgICAgY29uc3QgbmV4dFMgPSBzSW5kZXggKyAxO1xuXG4gICAgICBpZiAobmV4dFMgPT09IHNlZ21lbnRUaW1lbGluZS5sZW5ndGgpIHtcbiAgICAgICAgLy8gbGFzdCBzZWdtZW50XG4gICAgICAgIGlmICh0eXBlID09PSAnZHluYW1pYycgJiYgbWluaW11bVVwZGF0ZVBlcmlvZCA+IDAgJiYgbWVkaWEuaW5kZXhPZignJE51bWJlciQnKSA+IDApIHtcbiAgICAgICAgICBjb3VudCA9IGdldExpdmVSVmFsdWUoYXR0cmlidXRlcywgdGltZSwgZHVyYXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFRPRE86IFRoaXMgbWF5IGJlIGluY29ycmVjdCBkZXBlbmRpbmcgb24gY29uY2x1c2lvbiBvZiBUT0RPIGFib3ZlXG4gICAgICAgICAgY291bnQgPSAoc291cmNlRHVyYXRpb24gKiB0aW1lc2NhbGUgLSB0aW1lKSAvIGR1cmF0aW9uO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb3VudCA9IChzZWdtZW50VGltZWxpbmVbbmV4dFNdLnQgLSB0aW1lKSAvIGR1cmF0aW9uO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb3VudCA9IHJlcGVhdCArIDE7XG4gICAgfVxuXG4gICAgY29uc3QgZW5kID0gc3RhcnROdW1iZXIgKyBzZWdtZW50cy5sZW5ndGggKyBjb3VudDtcbiAgICBsZXQgbnVtYmVyID0gc3RhcnROdW1iZXIgKyBzZWdtZW50cy5sZW5ndGg7XG5cbiAgICB3aGlsZSAobnVtYmVyIDwgZW5kKSB7XG4gICAgICBzZWdtZW50cy5wdXNoKHtcbiAgICAgICAgbnVtYmVyLFxuICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24gLyB0aW1lc2NhbGUsXG4gICAgICAgIHRpbWUsXG4gICAgICAgIHRpbWVsaW5lXG4gICAgICB9KTtcbiAgICAgIHRpbWUgKz0gZHVyYXRpb247XG4gICAgICBudW1iZXIrKztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc2VnbWVudHM7XG59O1xuXG5jb25zdCBpZGVudGlmaWVyUGF0dGVybiA9IC9cXCQoW0Etel0qKSg/OiglMCkoWzAtOV0rKWQpP1xcJC9nO1xuLyoqXG4gKiBSZXBsYWNlcyB0ZW1wbGF0ZSBpZGVudGlmaWVycyB3aXRoIGNvcnJlc3BvbmRpbmcgdmFsdWVzLiBUbyBiZSB1c2VkIGFzIHRoZSBjYWxsYmFja1xuICogZm9yIFN0cmluZy5wcm90b3R5cGUucmVwbGFjZVxuICpcbiAqIEBuYW1lIHJlcGxhY2VDYWxsYmFja1xuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gbWF0Y2hcbiAqICAgICAgICBFbnRpcmUgbWF0Y2ggb2YgaWRlbnRpZmllclxuICogQHBhcmFtIHtzdHJpbmd9IGlkZW50aWZpZXJcbiAqICAgICAgICBOYW1lIG9mIG1hdGNoZWQgaWRlbnRpZmllclxuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1hdFxuICogICAgICAgIEZvcm1hdCB0YWcgc3RyaW5nLiBJdHMgcHJlc2VuY2UgaW5kaWNhdGVzIHRoYXQgcGFkZGluZyBpcyBleHBlY3RlZFxuICogQHBhcmFtIHtzdHJpbmd9IHdpZHRoXG4gKiAgICAgICAgRGVzaXJlZCBsZW5ndGggb2YgdGhlIHJlcGxhY2VkIHZhbHVlLiBWYWx1ZXMgbGVzcyB0aGFuIHRoaXMgd2lkdGggc2hhbGwgYmUgbGVmdFxuICogICAgICAgIHplcm8gcGFkZGVkXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKiAgICAgICAgIFJlcGxhY2VtZW50IGZvciB0aGUgbWF0Y2hlZCBpZGVudGlmaWVyXG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdG8gYmUgdXNlZCBhcyBhIGNhbGxiYWNrIGZvciBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UgdG8gcmVwbGFjZVxuICogdGVtcGxhdGUgaWRlbnRpZmllcnNcbiAqXG4gKiBAcGFyYW0ge09iZWN0fSB2YWx1ZXNcbiAqICAgICAgICBPYmplY3QgY29udGFpbmluZyB2YWx1ZXMgdGhhdCBzaGFsbCBiZSB1c2VkIHRvIHJlcGxhY2Uga25vd24gaWRlbnRpZmllcnNcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZXMuUmVwcmVzZW50YXRpb25JRFxuICogICAgICAgIFZhbHVlIG9mIHRoZSBSZXByZXNlbnRhdGlvbkBpZCBhdHRyaWJ1dGVcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZXMuTnVtYmVyXG4gKiAgICAgICAgTnVtYmVyIG9mIHRoZSBjb3JyZXNwb25kaW5nIHNlZ21lbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZXMuQmFuZHdpZHRoXG4gKiAgICAgICAgVmFsdWUgb2YgdGhlIFJlcHJlc2VudGF0aW9uQGJhbmR3aWR0aCBhdHRyaWJ1dGUuXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVzLlRpbWVcbiAqICAgICAgICBUaW1lc3RhbXAgdmFsdWUgb2YgdGhlIGNvcnJlc3BvbmRpbmcgc2VnbWVudFxuICogQHJldHVybiB7cmVwbGFjZUNhbGxiYWNrfVxuICogICAgICAgICBDYWxsYmFjayB0byBiZSB1c2VkIHdpdGggU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlIHRvIHJlcGxhY2UgaWRlbnRpZmllcnNcbiAqL1xuXG5jb25zdCBpZGVudGlmaWVyUmVwbGFjZW1lbnQgPSB2YWx1ZXMgPT4gKG1hdGNoLCBpZGVudGlmaWVyLCBmb3JtYXQsIHdpZHRoKSA9PiB7XG4gIGlmIChtYXRjaCA9PT0gJyQkJykge1xuICAgIC8vIGVzY2FwZSBzZXF1ZW5jZVxuICAgIHJldHVybiAnJCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlc1tpZGVudGlmaWVyXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbWF0Y2g7XG4gIH1cblxuICBjb25zdCB2YWx1ZSA9ICcnICsgdmFsdWVzW2lkZW50aWZpZXJdO1xuXG4gIGlmIChpZGVudGlmaWVyID09PSAnUmVwcmVzZW50YXRpb25JRCcpIHtcbiAgICAvLyBGb3JtYXQgdGFnIHNoYWxsIG5vdCBiZSBwcmVzZW50IHdpdGggUmVwcmVzZW50YXRpb25JRFxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGlmICghZm9ybWF0KSB7XG4gICAgd2lkdGggPSAxO1xuICB9IGVsc2Uge1xuICAgIHdpZHRoID0gcGFyc2VJbnQod2lkdGgsIDEwKTtcbiAgfVxuXG4gIGlmICh2YWx1ZS5sZW5ndGggPj0gd2lkdGgpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gYCR7bmV3IEFycmF5KHdpZHRoIC0gdmFsdWUubGVuZ3RoICsgMSkuam9pbignMCcpfSR7dmFsdWV9YDtcbn07XG4vKipcbiAqIENvbnN0cnVjdHMgYSBzZWdtZW50IHVybCBmcm9tIGEgdGVtcGxhdGUgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogICAgICAgIFRlbXBsYXRlIHN0cmluZyB0byBjb25zdHJ1Y3QgdXJsIGZyb21cbiAqIEBwYXJhbSB7T2JlY3R9IHZhbHVlc1xuICogICAgICAgIE9iamVjdCBjb250YWluaW5nIHZhbHVlcyB0aGF0IHNoYWxsIGJlIHVzZWQgdG8gcmVwbGFjZSBrbm93biBpZGVudGlmaWVyc1xuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlcy5SZXByZXNlbnRhdGlvbklEXG4gKiAgICAgICAgVmFsdWUgb2YgdGhlIFJlcHJlc2VudGF0aW9uQGlkIGF0dHJpYnV0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlcy5OdW1iZXJcbiAqICAgICAgICBOdW1iZXIgb2YgdGhlIGNvcnJlc3BvbmRpbmcgc2VnbWVudFxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlcy5CYW5kd2lkdGhcbiAqICAgICAgICBWYWx1ZSBvZiB0aGUgUmVwcmVzZW50YXRpb25AYmFuZHdpZHRoIGF0dHJpYnV0ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZXMuVGltZVxuICogICAgICAgIFRpbWVzdGFtcCB2YWx1ZSBvZiB0aGUgY29ycmVzcG9uZGluZyBzZWdtZW50XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKiAgICAgICAgIFNlZ21lbnQgdXJsIHdpdGggaWRlbnRpZmllcnMgcmVwbGFjZWRcbiAqL1xuXG5jb25zdCBjb25zdHJ1Y3RUZW1wbGF0ZVVybCA9ICh1cmwsIHZhbHVlcykgPT4gdXJsLnJlcGxhY2UoaWRlbnRpZmllclBhdHRlcm4sIGlkZW50aWZpZXJSZXBsYWNlbWVudCh2YWx1ZXMpKTtcbi8qKlxuICogR2VuZXJhdGVzIGEgbGlzdCBvZiBvYmplY3RzIGNvbnRhaW5pbmcgdGltaW5nIGFuZCBkdXJhdGlvbiBpbmZvcm1hdGlvbiBhYm91dCBlYWNoXG4gKiBzZWdtZW50IG5lZWRlZCB0byBnZW5lcmF0ZSBzZWdtZW50IHVyaXMgYW5kIHRoZSBjb21wbGV0ZSBzZWdtZW50IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyaWJ1dGVzXG4gKiAgICAgICAgT2JqZWN0IGNvbnRhaW5pbmcgYWxsIGluaGVyaXRlZCBhdHRyaWJ1dGVzIGZyb20gcGFyZW50IGVsZW1lbnRzIHdpdGggYXR0cmlidXRlXG4gKiAgICAgICAgbmFtZXMgYXMga2V5c1xuICogQHBhcmFtIHtPYmplY3RbXXx1bmRlZmluZWR9IHNlZ21lbnRUaW1lbGluZVxuICogICAgICAgIExpc3Qgb2Ygb2JqZWN0cyByZXByZXNlbnRpbmcgdGhlIGF0dHJpYnV0ZXMgb2YgZWFjaCBTIGVsZW1lbnQgY29udGFpbmVkIHdpdGhpblxuICogICAgICAgIHRoZSBTZWdtZW50VGltZWxpbmUgZWxlbWVudFxuICogQHJldHVybiB7e251bWJlcjogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyLCB0aW1lOiBudW1iZXIsIHRpbWVsaW5lOiBudW1iZXJ9W119XG4gKiAgICAgICAgIExpc3Qgb2YgT2JqZWN0cyB3aXRoIHNlZ21lbnQgdGltaW5nIGFuZCBkdXJhdGlvbiBpbmZvXG4gKi9cblxuY29uc3QgcGFyc2VUZW1wbGF0ZUluZm8gPSAoYXR0cmlidXRlcywgc2VnbWVudFRpbWVsaW5lKSA9PiB7XG4gIGlmICghYXR0cmlidXRlcy5kdXJhdGlvbiAmJiAhc2VnbWVudFRpbWVsaW5lKSB7XG4gICAgLy8gaWYgbmVpdGhlciBAZHVyYXRpb24gb3IgU2VnbWVudFRpbWVsaW5lIGFyZSBwcmVzZW50LCB0aGVuIHRoZXJlIHNoYWxsIGJlIGV4YWN0bHlcbiAgICAvLyBvbmUgbWVkaWEgc2VnbWVudFxuICAgIHJldHVybiBbe1xuICAgICAgbnVtYmVyOiBhdHRyaWJ1dGVzLnN0YXJ0TnVtYmVyIHx8IDEsXG4gICAgICBkdXJhdGlvbjogYXR0cmlidXRlcy5zb3VyY2VEdXJhdGlvbixcbiAgICAgIHRpbWU6IDAsXG4gICAgICB0aW1lbGluZTogYXR0cmlidXRlcy5wZXJpb2RTdGFydFxuICAgIH1dO1xuICB9XG5cbiAgaWYgKGF0dHJpYnV0ZXMuZHVyYXRpb24pIHtcbiAgICByZXR1cm4gcGFyc2VCeUR1cmF0aW9uKGF0dHJpYnV0ZXMpO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlQnlUaW1lbGluZShhdHRyaWJ1dGVzLCBzZWdtZW50VGltZWxpbmUpO1xufTtcbi8qKlxuICogR2VuZXJhdGVzIGEgbGlzdCBvZiBzZWdtZW50cyB1c2luZyBpbmZvcm1hdGlvbiBwcm92aWRlZCBieSB0aGUgU2VnbWVudFRlbXBsYXRlIGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cmlidXRlc1xuICogICAgICAgIE9iamVjdCBjb250YWluaW5nIGFsbCBpbmhlcml0ZWQgYXR0cmlidXRlcyBmcm9tIHBhcmVudCBlbGVtZW50cyB3aXRoIGF0dHJpYnV0ZVxuICogICAgICAgIG5hbWVzIGFzIGtleXNcbiAqIEBwYXJhbSB7T2JqZWN0W118dW5kZWZpbmVkfSBzZWdtZW50VGltZWxpbmVcbiAqICAgICAgICBMaXN0IG9mIG9iamVjdHMgcmVwcmVzZW50aW5nIHRoZSBhdHRyaWJ1dGVzIG9mIGVhY2ggUyBlbGVtZW50IGNvbnRhaW5lZCB3aXRoaW5cbiAqICAgICAgICB0aGUgU2VnbWVudFRpbWVsaW5lIGVsZW1lbnRcbiAqIEByZXR1cm4ge09iamVjdFtdfVxuICogICAgICAgICBMaXN0IG9mIHNlZ21lbnQgb2JqZWN0c1xuICovXG5cbmNvbnN0IHNlZ21lbnRzRnJvbVRlbXBsYXRlID0gKGF0dHJpYnV0ZXMsIHNlZ21lbnRUaW1lbGluZSkgPT4ge1xuICBjb25zdCB0ZW1wbGF0ZVZhbHVlcyA9IHtcbiAgICBSZXByZXNlbnRhdGlvbklEOiBhdHRyaWJ1dGVzLmlkLFxuICAgIEJhbmR3aWR0aDogYXR0cmlidXRlcy5iYW5kd2lkdGggfHwgMFxuICB9O1xuICBjb25zdCB7XG4gICAgaW5pdGlhbGl6YXRpb24gPSB7XG4gICAgICBzb3VyY2VVUkw6ICcnLFxuICAgICAgcmFuZ2U6ICcnXG4gICAgfVxuICB9ID0gYXR0cmlidXRlcztcbiAgY29uc3QgbWFwU2VnbWVudCA9IHVybFR5cGVUb1NlZ21lbnQoe1xuICAgIGJhc2VVcmw6IGF0dHJpYnV0ZXMuYmFzZVVybCxcbiAgICBzb3VyY2U6IGNvbnN0cnVjdFRlbXBsYXRlVXJsKGluaXRpYWxpemF0aW9uLnNvdXJjZVVSTCwgdGVtcGxhdGVWYWx1ZXMpLFxuICAgIHJhbmdlOiBpbml0aWFsaXphdGlvbi5yYW5nZVxuICB9KTtcbiAgY29uc3Qgc2VnbWVudHMgPSBwYXJzZVRlbXBsYXRlSW5mbyhhdHRyaWJ1dGVzLCBzZWdtZW50VGltZWxpbmUpO1xuICByZXR1cm4gc2VnbWVudHMubWFwKHNlZ21lbnQgPT4ge1xuICAgIHRlbXBsYXRlVmFsdWVzLk51bWJlciA9IHNlZ21lbnQubnVtYmVyO1xuICAgIHRlbXBsYXRlVmFsdWVzLlRpbWUgPSBzZWdtZW50LnRpbWU7XG4gICAgY29uc3QgdXJpID0gY29uc3RydWN0VGVtcGxhdGVVcmwoYXR0cmlidXRlcy5tZWRpYSB8fCAnJywgdGVtcGxhdGVWYWx1ZXMpOyAvLyBTZWUgREFTSCBzcGVjIHNlY3Rpb24gNS4zLjkuMi4yXG4gICAgLy8gLSBpZiB0aW1lc2NhbGUgaXNuJ3QgcHJlc2VudCBvbiBhbnkgbGV2ZWwsIGRlZmF1bHQgdG8gMS5cblxuICAgIGNvbnN0IHRpbWVzY2FsZSA9IGF0dHJpYnV0ZXMudGltZXNjYWxlIHx8IDE7IC8vIC0gaWYgcHJlc2VudGF0aW9uVGltZU9mZnNldCBpc24ndCBwcmVzZW50IG9uIGFueSBsZXZlbCwgZGVmYXVsdCB0byAwXG5cbiAgICBjb25zdCBwcmVzZW50YXRpb25UaW1lT2Zmc2V0ID0gYXR0cmlidXRlcy5wcmVzZW50YXRpb25UaW1lT2Zmc2V0IHx8IDA7XG4gICAgY29uc3QgcHJlc2VudGF0aW9uVGltZSA9IC8vIEV2ZW4gaWYgdGhlIEB0IGF0dHJpYnV0ZSBpcyBub3Qgc3BlY2lmaWVkIGZvciB0aGUgc2VnbWVudCwgc2VnbWVudC50aW1lIGlzXG4gICAgLy8gY2FsY3VsYXRlZCBpbiBtcGQtcGFyc2VyIHByaW9yIHRvIHRoaXMsIHNvIGl0J3MgYXNzdW1lZCB0byBiZSBhdmFpbGFibGUuXG4gICAgYXR0cmlidXRlcy5wZXJpb2RTdGFydCArIChzZWdtZW50LnRpbWUgLSBwcmVzZW50YXRpb25UaW1lT2Zmc2V0KSAvIHRpbWVzY2FsZTtcbiAgICBjb25zdCBtYXAgPSB7XG4gICAgICB1cmksXG4gICAgICB0aW1lbGluZTogc2VnbWVudC50aW1lbGluZSxcbiAgICAgIGR1cmF0aW9uOiBzZWdtZW50LmR1cmF0aW9uLFxuICAgICAgcmVzb2x2ZWRVcmk6IHJlc29sdmVVcmwoYXR0cmlidXRlcy5iYXNlVXJsIHx8ICcnLCB1cmkpLFxuICAgICAgbWFwOiBtYXBTZWdtZW50LFxuICAgICAgbnVtYmVyOiBzZWdtZW50Lm51bWJlcixcbiAgICAgIHByZXNlbnRhdGlvblRpbWVcbiAgICB9O1xuICAgIHJldHVybiBtYXA7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhIDxTZWdtZW50VXJsPiAob2YgdHlwZSBVUkxUeXBlIGZyb20gdGhlIERBU0ggc3BlYyA1LjMuOS4yIFRhYmxlIDE0KVxuICogdG8gYW4gb2JqZWN0IHRoYXQgbWF0Y2hlcyB0aGUgb3V0cHV0IG9mIGEgc2VnbWVudCBpbiB2aWRlb2pzL21wZC1wYXJzZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cmlidXRlc1xuICogICBPYmplY3QgY29udGFpbmluZyBhbGwgaW5oZXJpdGVkIGF0dHJpYnV0ZXMgZnJvbSBwYXJlbnQgZWxlbWVudHMgd2l0aCBhdHRyaWJ1dGVcbiAqICAgbmFtZXMgYXMga2V5c1xuICogQHBhcmFtIHtPYmplY3R9IHNlZ21lbnRVcmxcbiAqICAgPFNlZ21lbnRVUkw+IG5vZGUgdG8gdHJhbnNsYXRlIGludG8gYSBzZWdtZW50IG9iamVjdFxuICogQHJldHVybiB7T2JqZWN0fSB0cmFuc2xhdGVkIHNlZ21lbnQgb2JqZWN0XG4gKi9cblxuY29uc3QgU2VnbWVudFVSTFRvU2VnbWVudE9iamVjdCA9IChhdHRyaWJ1dGVzLCBzZWdtZW50VXJsKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBiYXNlVXJsLFxuICAgIGluaXRpYWxpemF0aW9uID0ge31cbiAgfSA9IGF0dHJpYnV0ZXM7XG4gIGNvbnN0IGluaXRTZWdtZW50ID0gdXJsVHlwZVRvU2VnbWVudCh7XG4gICAgYmFzZVVybCxcbiAgICBzb3VyY2U6IGluaXRpYWxpemF0aW9uLnNvdXJjZVVSTCxcbiAgICByYW5nZTogaW5pdGlhbGl6YXRpb24ucmFuZ2VcbiAgfSk7XG4gIGNvbnN0IHNlZ21lbnQgPSB1cmxUeXBlVG9TZWdtZW50KHtcbiAgICBiYXNlVXJsLFxuICAgIHNvdXJjZTogc2VnbWVudFVybC5tZWRpYSxcbiAgICByYW5nZTogc2VnbWVudFVybC5tZWRpYVJhbmdlXG4gIH0pO1xuICBzZWdtZW50Lm1hcCA9IGluaXRTZWdtZW50O1xuICByZXR1cm4gc2VnbWVudDtcbn07XG4vKipcbiAqIEdlbmVyYXRlcyBhIGxpc3Qgb2Ygc2VnbWVudHMgdXNpbmcgaW5mb3JtYXRpb24gcHJvdmlkZWQgYnkgdGhlIFNlZ21lbnRMaXN0IGVsZW1lbnRcbiAqIFNlZ21lbnRMaXN0IChEQVNIIFNQRUMgU2VjdGlvbiA1LjMuOS4zLjIpIGNvbnRhaW5zIGEgc2V0IG9mIDxTZWdtZW50VVJMPiBub2Rlcy4gIEVhY2hcbiAqIG5vZGUgc2hvdWxkIGJlIHRyYW5zbGF0ZWQgaW50byBzZWdtZW50LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyaWJ1dGVzXG4gKiAgIE9iamVjdCBjb250YWluaW5nIGFsbCBpbmhlcml0ZWQgYXR0cmlidXRlcyBmcm9tIHBhcmVudCBlbGVtZW50cyB3aXRoIGF0dHJpYnV0ZVxuICogICBuYW1lcyBhcyBrZXlzXG4gKiBAcGFyYW0ge09iamVjdFtdfHVuZGVmaW5lZH0gc2VnbWVudFRpbWVsaW5lXG4gKiAgICAgICAgTGlzdCBvZiBvYmplY3RzIHJlcHJlc2VudGluZyB0aGUgYXR0cmlidXRlcyBvZiBlYWNoIFMgZWxlbWVudCBjb250YWluZWQgd2l0aGluXG4gKiAgICAgICAgdGhlIFNlZ21lbnRUaW1lbGluZSBlbGVtZW50XG4gKiBAcmV0dXJuIHtPYmplY3QuPEFycmF5Pn0gbGlzdCBvZiBzZWdtZW50c1xuICovXG5cblxuY29uc3Qgc2VnbWVudHNGcm9tTGlzdCA9IChhdHRyaWJ1dGVzLCBzZWdtZW50VGltZWxpbmUpID0+IHtcbiAgY29uc3Qge1xuICAgIGR1cmF0aW9uLFxuICAgIHNlZ21lbnRVcmxzID0gW10sXG4gICAgcGVyaW9kU3RhcnRcbiAgfSA9IGF0dHJpYnV0ZXM7IC8vIFBlciBzcGVjICg1LjMuOS4yLjEpIG5vIHdheSB0byBkZXRlcm1pbmUgc2VnbWVudCBkdXJhdGlvbiBPUlxuICAvLyBpZiBib3RoIFNlZ21lbnRUaW1lbGluZSBhbmQgQGR1cmF0aW9uIGFyZSBkZWZpbmVkLCBpdCBpcyBvdXRzaWRlIG9mIHNwZWMuXG5cbiAgaWYgKCFkdXJhdGlvbiAmJiAhc2VnbWVudFRpbWVsaW5lIHx8IGR1cmF0aW9uICYmIHNlZ21lbnRUaW1lbGluZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihlcnJvcnMuU0VHTUVOVF9USU1FX1VOU1BFQ0lGSUVEKTtcbiAgfVxuXG4gIGNvbnN0IHNlZ21lbnRVcmxNYXAgPSBzZWdtZW50VXJscy5tYXAoc2VnbWVudFVybE9iamVjdCA9PiBTZWdtZW50VVJMVG9TZWdtZW50T2JqZWN0KGF0dHJpYnV0ZXMsIHNlZ21lbnRVcmxPYmplY3QpKTtcbiAgbGV0IHNlZ21lbnRUaW1lSW5mbztcblxuICBpZiAoZHVyYXRpb24pIHtcbiAgICBzZWdtZW50VGltZUluZm8gPSBwYXJzZUJ5RHVyYXRpb24oYXR0cmlidXRlcyk7XG4gIH1cblxuICBpZiAoc2VnbWVudFRpbWVsaW5lKSB7XG4gICAgc2VnbWVudFRpbWVJbmZvID0gcGFyc2VCeVRpbWVsaW5lKGF0dHJpYnV0ZXMsIHNlZ21lbnRUaW1lbGluZSk7XG4gIH1cblxuICBjb25zdCBzZWdtZW50cyA9IHNlZ21lbnRUaW1lSW5mby5tYXAoKHNlZ21lbnRUaW1lLCBpbmRleCkgPT4ge1xuICAgIGlmIChzZWdtZW50VXJsTWFwW2luZGV4XSkge1xuICAgICAgY29uc3Qgc2VnbWVudCA9IHNlZ21lbnRVcmxNYXBbaW5kZXhdOyAvLyBTZWUgREFTSCBzcGVjIHNlY3Rpb24gNS4zLjkuMi4yXG4gICAgICAvLyAtIGlmIHRpbWVzY2FsZSBpc24ndCBwcmVzZW50IG9uIGFueSBsZXZlbCwgZGVmYXVsdCB0byAxLlxuXG4gICAgICBjb25zdCB0aW1lc2NhbGUgPSBhdHRyaWJ1dGVzLnRpbWVzY2FsZSB8fCAxOyAvLyAtIGlmIHByZXNlbnRhdGlvblRpbWVPZmZzZXQgaXNuJ3QgcHJlc2VudCBvbiBhbnkgbGV2ZWwsIGRlZmF1bHQgdG8gMFxuXG4gICAgICBjb25zdCBwcmVzZW50YXRpb25UaW1lT2Zmc2V0ID0gYXR0cmlidXRlcy5wcmVzZW50YXRpb25UaW1lT2Zmc2V0IHx8IDA7XG4gICAgICBzZWdtZW50LnRpbWVsaW5lID0gc2VnbWVudFRpbWUudGltZWxpbmU7XG4gICAgICBzZWdtZW50LmR1cmF0aW9uID0gc2VnbWVudFRpbWUuZHVyYXRpb247XG4gICAgICBzZWdtZW50Lm51bWJlciA9IHNlZ21lbnRUaW1lLm51bWJlcjtcbiAgICAgIHNlZ21lbnQucHJlc2VudGF0aW9uVGltZSA9IHBlcmlvZFN0YXJ0ICsgKHNlZ21lbnRUaW1lLnRpbWUgLSBwcmVzZW50YXRpb25UaW1lT2Zmc2V0KSAvIHRpbWVzY2FsZTtcbiAgICAgIHJldHVybiBzZWdtZW50O1xuICAgIH0gLy8gU2luY2Ugd2UncmUgbWFwcGluZyB3ZSBzaG91bGQgZ2V0IHJpZCBvZiBhbnkgYmxhbmsgc2VnbWVudHMgKGluIGNhc2VcbiAgICAvLyB0aGUgZ2l2ZW4gU2VnbWVudFRpbWVsaW5lIGlzIGhhbmRsaW5nIGZvciBtb3JlIGVsZW1lbnRzIHRoYW4gd2UgaGF2ZVxuICAgIC8vIFNlZ21lbnRVUkxzIGZvcikuXG5cbiAgfSkuZmlsdGVyKHNlZ21lbnQgPT4gc2VnbWVudCk7XG4gIHJldHVybiBzZWdtZW50cztcbn07XG5cbmNvbnN0IGdlbmVyYXRlU2VnbWVudHMgPSAoe1xuICBhdHRyaWJ1dGVzLFxuICBzZWdtZW50SW5mb1xufSkgPT4ge1xuICBsZXQgc2VnbWVudEF0dHJpYnV0ZXM7XG4gIGxldCBzZWdtZW50c0ZuO1xuXG4gIGlmIChzZWdtZW50SW5mby50ZW1wbGF0ZSkge1xuICAgIHNlZ21lbnRzRm4gPSBzZWdtZW50c0Zyb21UZW1wbGF0ZTtcbiAgICBzZWdtZW50QXR0cmlidXRlcyA9IG1lcmdlKGF0dHJpYnV0ZXMsIHNlZ21lbnRJbmZvLnRlbXBsYXRlKTtcbiAgfSBlbHNlIGlmIChzZWdtZW50SW5mby5iYXNlKSB7XG4gICAgc2VnbWVudHNGbiA9IHNlZ21lbnRzRnJvbUJhc2U7XG4gICAgc2VnbWVudEF0dHJpYnV0ZXMgPSBtZXJnZShhdHRyaWJ1dGVzLCBzZWdtZW50SW5mby5iYXNlKTtcbiAgfSBlbHNlIGlmIChzZWdtZW50SW5mby5saXN0KSB7XG4gICAgc2VnbWVudHNGbiA9IHNlZ21lbnRzRnJvbUxpc3Q7XG4gICAgc2VnbWVudEF0dHJpYnV0ZXMgPSBtZXJnZShhdHRyaWJ1dGVzLCBzZWdtZW50SW5mby5saXN0KTtcbiAgfVxuXG4gIGNvbnN0IHNlZ21lbnRzSW5mbyA9IHtcbiAgICBhdHRyaWJ1dGVzXG4gIH07XG5cbiAgaWYgKCFzZWdtZW50c0ZuKSB7XG4gICAgcmV0dXJuIHNlZ21lbnRzSW5mbztcbiAgfVxuXG4gIGNvbnN0IHNlZ21lbnRzID0gc2VnbWVudHNGbihzZWdtZW50QXR0cmlidXRlcywgc2VnbWVudEluZm8uc2VnbWVudFRpbWVsaW5lKTsgLy8gVGhlIEBkdXJhdGlvbiBhdHRyaWJ1dGUgd2lsbCBiZSB1c2VkIHRvIGRldGVybWluIHRoZSBwbGF5bGlzdCdzIHRhcmdldER1cmF0aW9uIHdoaWNoXG4gIC8vIG11c3QgYmUgaW4gc2Vjb25kcy4gU2luY2Ugd2UndmUgZ2VuZXJhdGVkIHRoZSBzZWdtZW50IGxpc3QsIHdlIG5vIGxvbmdlciBuZWVkXG4gIC8vIEBkdXJhdGlvbiB0byBiZSBpbiBAdGltZXNjYWxlIHVuaXRzLCBzbyB3ZSBjYW4gY29udmVydCBpdCBoZXJlLlxuXG4gIGlmIChzZWdtZW50QXR0cmlidXRlcy5kdXJhdGlvbikge1xuICAgIGNvbnN0IHtcbiAgICAgIGR1cmF0aW9uLFxuICAgICAgdGltZXNjYWxlID0gMVxuICAgIH0gPSBzZWdtZW50QXR0cmlidXRlcztcbiAgICBzZWdtZW50QXR0cmlidXRlcy5kdXJhdGlvbiA9IGR1cmF0aW9uIC8gdGltZXNjYWxlO1xuICB9IGVsc2UgaWYgKHNlZ21lbnRzLmxlbmd0aCkge1xuICAgIC8vIGlmIHRoZXJlIGlzIG5vIEBkdXJhdGlvbiBhdHRyaWJ1dGUsIHVzZSB0aGUgbGFyZ2VzdCBzZWdtZW50IGR1cmF0aW9uIGFzXG4gICAgLy8gYXMgdGFyZ2V0IGR1cmF0aW9uXG4gICAgc2VnbWVudEF0dHJpYnV0ZXMuZHVyYXRpb24gPSBzZWdtZW50cy5yZWR1Y2UoKG1heCwgc2VnbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIE1hdGgubWF4KG1heCwgTWF0aC5jZWlsKHNlZ21lbnQuZHVyYXRpb24pKTtcbiAgICB9LCAwKTtcbiAgfSBlbHNlIHtcbiAgICBzZWdtZW50QXR0cmlidXRlcy5kdXJhdGlvbiA9IDA7XG4gIH1cblxuICBzZWdtZW50c0luZm8uYXR0cmlidXRlcyA9IHNlZ21lbnRBdHRyaWJ1dGVzO1xuICBzZWdtZW50c0luZm8uc2VnbWVudHMgPSBzZWdtZW50czsgLy8gVGhpcyBpcyBhIHNpZHggYm94IHdpdGhvdXQgYWN0dWFsIHNlZ21lbnQgaW5mb3JtYXRpb25cblxuICBpZiAoc2VnbWVudEluZm8uYmFzZSAmJiBzZWdtZW50QXR0cmlidXRlcy5pbmRleFJhbmdlKSB7XG4gICAgc2VnbWVudHNJbmZvLnNpZHggPSBzZWdtZW50c1swXTtcbiAgICBzZWdtZW50c0luZm8uc2VnbWVudHMgPSBbXTtcbiAgfVxuXG4gIHJldHVybiBzZWdtZW50c0luZm87XG59O1xuY29uc3QgdG9QbGF5bGlzdHMgPSByZXByZXNlbnRhdGlvbnMgPT4gcmVwcmVzZW50YXRpb25zLm1hcChnZW5lcmF0ZVNlZ21lbnRzKTtcblxuY29uc3QgZmluZENoaWxkcmVuID0gKGVsZW1lbnQsIG5hbWUpID0+IGZyb20oZWxlbWVudC5jaGlsZE5vZGVzKS5maWx0ZXIoKHtcbiAgdGFnTmFtZVxufSkgPT4gdGFnTmFtZSA9PT0gbmFtZSk7XG5jb25zdCBnZXRDb250ZW50ID0gZWxlbWVudCA9PiBlbGVtZW50LnRleHRDb250ZW50LnRyaW0oKTtcblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgcHJvdmlkZWQgc3RyaW5nIHRoYXQgbWF5IGNvbnRhaW4gYSBkaXZpc2lvbiBvcGVyYXRpb24gdG8gYSBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gdGhlIHByb3ZpZGVkIHN0cmluZyB2YWx1ZVxuICpcbiAqIEByZXR1cm4ge251bWJlcn0gdGhlIHBhcnNlZCBzdHJpbmcgdmFsdWVcbiAqL1xuY29uc3QgcGFyc2VEaXZpc2lvblZhbHVlID0gdmFsdWUgPT4ge1xuICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZS5zcGxpdCgnLycpLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4gcHJldiAvIGN1cnJlbnQpKTtcbn07XG5cbmNvbnN0IHBhcnNlRHVyYXRpb24gPSBzdHIgPT4ge1xuICBjb25zdCBTRUNPTkRTX0lOX1lFQVIgPSAzNjUgKiAyNCAqIDYwICogNjA7XG4gIGNvbnN0IFNFQ09ORFNfSU5fTU9OVEggPSAzMCAqIDI0ICogNjAgKiA2MDtcbiAgY29uc3QgU0VDT05EU19JTl9EQVkgPSAyNCAqIDYwICogNjA7XG4gIGNvbnN0IFNFQ09ORFNfSU5fSE9VUiA9IDYwICogNjA7XG4gIGNvbnN0IFNFQ09ORFNfSU5fTUlOID0gNjA7IC8vIFAxMFkxME0xMERUMTBIMTBNMTAuMVNcblxuICBjb25zdCBkdXJhdGlvblJlZ2V4ID0gL1AoPzooXFxkKilZKT8oPzooXFxkKilNKT8oPzooXFxkKilEKT8oPzpUKD86KFxcZCopSCk/KD86KFxcZCopTSk/KD86KFtcXGQuXSopUyk/KT8vO1xuICBjb25zdCBtYXRjaCA9IGR1cmF0aW9uUmVnZXguZXhlYyhzdHIpO1xuXG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGNvbnN0IFt5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZF0gPSBtYXRjaC5zbGljZSgxKTtcbiAgcmV0dXJuIHBhcnNlRmxvYXQoeWVhciB8fCAwKSAqIFNFQ09ORFNfSU5fWUVBUiArIHBhcnNlRmxvYXQobW9udGggfHwgMCkgKiBTRUNPTkRTX0lOX01PTlRIICsgcGFyc2VGbG9hdChkYXkgfHwgMCkgKiBTRUNPTkRTX0lOX0RBWSArIHBhcnNlRmxvYXQoaG91ciB8fCAwKSAqIFNFQ09ORFNfSU5fSE9VUiArIHBhcnNlRmxvYXQobWludXRlIHx8IDApICogU0VDT05EU19JTl9NSU4gKyBwYXJzZUZsb2F0KHNlY29uZCB8fCAwKTtcbn07XG5jb25zdCBwYXJzZURhdGUgPSBzdHIgPT4ge1xuICAvLyBEYXRlIGZvcm1hdCB3aXRob3V0IHRpbWV6b25lIGFjY29yZGluZyB0byBJU08gODYwMVxuICAvLyBZWVktTU0tRERUaGg6bW06c3Muc3Nzc3NzXG4gIGNvbnN0IGRhdGVSZWdleCA9IC9eXFxkKy1cXGQrLVxcZCtUXFxkKzpcXGQrOlxcZCsoXFwuXFxkKyk/JC87IC8vIElmIHRoZSBkYXRlIHN0cmluZyBkb2VzIG5vdCBzcGVjaWZpeSBhIHRpbWV6b25lLCB3ZSBtdXN0IHNwZWNpZml5IFVUQy4gVGhpcyBpc1xuICAvLyBleHByZXNzZWQgYnkgZW5kaW5nIHdpdGggJ1onXG5cbiAgaWYgKGRhdGVSZWdleC50ZXN0KHN0cikpIHtcbiAgICBzdHIgKz0gJ1onO1xuICB9XG5cbiAgcmV0dXJuIERhdGUucGFyc2Uoc3RyKTtcbn07XG5cbmNvbnN0IHBhcnNlcnMgPSB7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIGR1cmF0aW9uIG9mIHRoZSBlbnRpcmUgTWVkaWEgUHJlc2VudGF0aW9uLiBGb3JtYXQgaXMgYSBkdXJhdGlvbiBzdHJpbmdcbiAgICogYXMgc3BlY2lmaWVkIGluIElTTyA4NjAxXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiAgICAgICAgdmFsdWUgb2YgYXR0cmlidXRlIGFzIGEgc3RyaW5nXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogICAgICAgICBUaGUgZHVyYXRpb24gaW4gc2Vjb25kc1xuICAgKi9cbiAgbWVkaWFQcmVzZW50YXRpb25EdXJhdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZUR1cmF0aW9uKHZhbHVlKTtcbiAgfSxcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBTZWdtZW50IGF2YWlsYWJpbGl0eSBzdGFydCB0aW1lIGZvciBhbGwgU2VnbWVudHMgcmVmZXJyZWQgdG8gaW4gdGhpc1xuICAgKiBNUEQuIEZvciBhIGR5bmFtaWMgbWFuaWZlc3QsIGl0IHNwZWNpZmllcyB0aGUgYW5jaG9yIGZvciB0aGUgZWFybGllc3QgYXZhaWxhYmlsaXR5XG4gICAqIHRpbWUuIEZvcm1hdCBpcyBhIGRhdGUgc3RyaW5nIGFzIHNwZWNpZmllZCBpbiBJU08gODYwMVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogICAgICAgIHZhbHVlIG9mIGF0dHJpYnV0ZSBhcyBhIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqICAgICAgICAgVGhlIGRhdGUgYXMgc2Vjb25kcyBmcm9tIHVuaXggZXBvY2hcbiAgICovXG4gIGF2YWlsYWJpbGl0eVN0YXJ0VGltZSh2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZURhdGUodmFsdWUpIC8gMTAwMDtcbiAgfSxcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBzbWFsbGVzdCBwZXJpb2QgYmV0d2VlbiBwb3RlbnRpYWwgY2hhbmdlcyB0byB0aGUgTVBELiBGb3JtYXQgaXMgYVxuICAgKiBkdXJhdGlvbiBzdHJpbmcgYXMgc3BlY2lmaWVkIGluIElTTyA4NjAxXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiAgICAgICAgdmFsdWUgb2YgYXR0cmlidXRlIGFzIGEgc3RyaW5nXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogICAgICAgICBUaGUgZHVyYXRpb24gaW4gc2Vjb25kc1xuICAgKi9cbiAgbWluaW11bVVwZGF0ZVBlcmlvZCh2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZUR1cmF0aW9uKHZhbHVlKTtcbiAgfSxcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBzdWdnZXN0ZWQgcHJlc2VudGF0aW9uIGRlbGF5LiBGb3JtYXQgaXMgYVxuICAgKiBkdXJhdGlvbiBzdHJpbmcgYXMgc3BlY2lmaWVkIGluIElTTyA4NjAxXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiAgICAgICAgdmFsdWUgb2YgYXR0cmlidXRlIGFzIGEgc3RyaW5nXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogICAgICAgICBUaGUgZHVyYXRpb24gaW4gc2Vjb25kc1xuICAgKi9cbiAgc3VnZ2VzdGVkUHJlc2VudGF0aW9uRGVsYXkodmFsdWUpIHtcbiAgICByZXR1cm4gcGFyc2VEdXJhdGlvbih2YWx1ZSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIHNwZWNpZmljZXMgdGhlIHR5cGUgb2YgbXBkLiBDYW4gYmUgZWl0aGVyIFwic3RhdGljXCIgb3IgXCJkeW5hbWljXCJcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqICAgICAgICB2YWx1ZSBvZiBhdHRyaWJ1dGUgYXMgYSBzdHJpbmdcbiAgICpcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKiAgICAgICAgIFRoZSB0eXBlIGFzIGEgc3RyaW5nXG4gICAqL1xuICB0eXBlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIGR1cmF0aW9uIG9mIHRoZSBzbWFsbGVzdCB0aW1lIHNoaWZ0aW5nIGJ1ZmZlciBmb3IgYW55IFJlcHJlc2VudGF0aW9uXG4gICAqIGluIHRoZSBNUEQuIEZvcm1hdCBpcyBhIGR1cmF0aW9uIHN0cmluZyBhcyBzcGVjaWZpZWQgaW4gSVNPIDg2MDFcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqICAgICAgICB2YWx1ZSBvZiBhdHRyaWJ1dGUgYXMgYSBzdHJpbmdcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiAgICAgICAgIFRoZSBkdXJhdGlvbiBpbiBzZWNvbmRzXG4gICAqL1xuICB0aW1lU2hpZnRCdWZmZXJEZXB0aCh2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZUR1cmF0aW9uKHZhbHVlKTtcbiAgfSxcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBQZXJpb2RTdGFydCB0aW1lIG9mIHRoZSBQZXJpb2QgcmVsYXRpdmUgdG8gdGhlIGF2YWlsYWJpbGl0eVN0YXJ0dGltZS5cbiAgICogRm9ybWF0IGlzIGEgZHVyYXRpb24gc3RyaW5nIGFzIHNwZWNpZmllZCBpbiBJU08gODYwMVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogICAgICAgIHZhbHVlIG9mIGF0dHJpYnV0ZSBhcyBhIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqICAgICAgICAgVGhlIGR1cmF0aW9uIGluIHNlY29uZHNcbiAgICovXG4gIHN0YXJ0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHBhcnNlRHVyYXRpb24odmFsdWUpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIHdpZHRoIG9mIHRoZSB2aXN1YWwgcHJlc2VudGF0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiAgICAgICAgdmFsdWUgb2YgYXR0cmlidXRlIGFzIGEgc3RyaW5nXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogICAgICAgICBUaGUgcGFyc2VkIHdpZHRoXG4gICAqL1xuICB3aWR0aCh2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIGhlaWdodCBvZiB0aGUgdmlzdWFsIHByZXNlbnRhdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogICAgICAgIHZhbHVlIG9mIGF0dHJpYnV0ZSBhcyBhIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqICAgICAgICAgVGhlIHBhcnNlZCBoZWlnaHRcbiAgICovXG4gIGhlaWdodCh2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIGJpdHJhdGUgb2YgdGhlIHJlcHJlc2VudGF0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiAgICAgICAgdmFsdWUgb2YgYXR0cmlidXRlIGFzIGEgc3RyaW5nXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogICAgICAgICBUaGUgcGFyc2VkIGJhbmR3aWR0aFxuICAgKi9cbiAgYmFuZHdpZHRoKHZhbHVlKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgZnJhbWUgcmF0ZSBvZiB0aGUgcmVwcmVzZW50YXRpb25cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqICAgICAgICB2YWx1ZSBvZiBhdHRyaWJ1dGUgYXMgYSBzdHJpbmdcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiAgICAgICAgIFRoZSBwYXJzZWQgZnJhbWUgcmF0ZVxuICAgKi9cbiAgZnJhbWVSYXRlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHBhcnNlRGl2aXNpb25WYWx1ZSh2YWx1ZSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIG9mIHRoZSBmaXJzdCBNZWRpYSBTZWdtZW50IGluIHRoaXMgUmVwcmVzZW50YXRpb24gaW4gdGhlIFBlcmlvZFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogICAgICAgIHZhbHVlIG9mIGF0dHJpYnV0ZSBhcyBhIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqICAgICAgICAgVGhlIHBhcnNlZCBudW1iZXJcbiAgICovXG4gIHN0YXJ0TnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgdGltZXNjYWxlIGluIHVuaXRzIHBlciBzZWNvbmRzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiAgICAgICAgdmFsdWUgb2YgYXR0cmlidXRlIGFzIGEgc3RyaW5nXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogICAgICAgICBUaGUgcGFyc2VkIHRpbWVzY2FsZVxuICAgKi9cbiAgdGltZXNjYWxlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgcHJlc2VudGF0aW9uVGltZU9mZnNldC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqICAgICAgICB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlIGFzIGEgc3RyaW5nXG4gICAqXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogICAgICAgICBUaGUgcGFyc2VkIHByZXNlbnRhdGlvblRpbWVPZmZzZXRcbiAgICovXG4gIHByZXNlbnRhdGlvblRpbWVPZmZzZXQodmFsdWUpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgfSxcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBjb25zdGFudCBhcHByb3hpbWF0ZSBTZWdtZW50IGR1cmF0aW9uXG4gICAqIE5PVEU6IFRoZSA8UGVyaW9kPiBlbGVtZW50IGFsc28gY29udGFpbnMgYW4gQGR1cmF0aW9uIGF0dHJpYnV0ZS4gVGhpcyBkdXJhdGlvblxuICAgKiAgICAgICBzcGVjaWZpZXMgdGhlIGR1cmF0aW9uIG9mIHRoZSBQZXJpb2QuIFRoaXMgYXR0cmlidXRlIGlzIGN1cnJlbnRseSBub3RcbiAgICogICAgICAgc3VwcG9ydGVkIGJ5IHRoZSByZXN0IG9mIHRoZSBwYXJzZXIsIGhvd2V2ZXIgd2Ugc3RpbGwgY2hlY2sgZm9yIGl0IHRvIHByZXZlbnRcbiAgICogICAgICAgZXJyb3JzLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogICAgICAgIHZhbHVlIG9mIGF0dHJpYnV0ZSBhcyBhIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqICAgICAgICAgVGhlIHBhcnNlZCBkdXJhdGlvblxuICAgKi9cbiAgZHVyYXRpb24odmFsdWUpIHtcbiAgICBjb25zdCBwYXJzZWRWYWx1ZSA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG5cbiAgICBpZiAoaXNOYU4ocGFyc2VkVmFsdWUpKSB7XG4gICAgICByZXR1cm4gcGFyc2VEdXJhdGlvbih2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZFZhbHVlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIFNlZ21lbnQgZHVyYXRpb24sIGluIHVuaXRzIG9mIHRoZSB2YWx1ZSBvZiB0aGUgQHRpbWVzY2FsZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqICAgICAgICB2YWx1ZSBvZiBhdHRyaWJ1dGUgYXMgYSBzdHJpbmdcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiAgICAgICAgIFRoZSBwYXJzZWQgZHVyYXRpb25cbiAgICovXG4gIGQodmFsdWUpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgfSxcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBNUEQgc3RhcnQgdGltZSwgaW4gQHRpbWVzY2FsZSB1bml0cywgdGhlIGZpcnN0IFNlZ21lbnQgaW4gdGhlIHNlcmllc1xuICAgKiBzdGFydHMgcmVsYXRpdmUgdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgUGVyaW9kXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiAgICAgICAgdmFsdWUgb2YgYXR0cmlidXRlIGFzIGEgc3RyaW5nXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogICAgICAgICBUaGUgcGFyc2VkIHRpbWVcbiAgICovXG4gIHQodmFsdWUpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgfSxcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSByZXBlYXQgY291bnQgb2YgdGhlIG51bWJlciBvZiBmb2xsb3dpbmcgY29udGlndW91cyBTZWdtZW50cyB3aXRoIHRoZVxuICAgKiBzYW1lIGR1cmF0aW9uIGV4cHJlc3NlZCBieSB0aGUgdmFsdWUgb2YgQGRcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqICAgICAgICB2YWx1ZSBvZiBhdHRyaWJ1dGUgYXMgYSBzdHJpbmdcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiAgICAgICAgIFRoZSBwYXJzZWQgbnVtYmVyXG4gICAqL1xuICByKHZhbHVlKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgcHJlc2VudGF0aW9uVGltZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqICAgICAgICB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlIGFzIGEgc3RyaW5nXG4gICAqXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogICAgICAgICBUaGUgcGFyc2VkIHByZXNlbnRhdGlvblRpbWVcbiAgICovXG4gIHByZXNlbnRhdGlvblRpbWUodmFsdWUpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgfSxcblxuICAvKipcbiAgICogRGVmYXVsdCBwYXJzZXIgZm9yIGFsbCBvdGhlciBhdHRyaWJ1dGVzLiBBY3RzIGFzIGEgbm8tb3AgYW5kIGp1c3QgcmV0dXJucyB0aGUgdmFsdWVcbiAgICogYXMgYSBzdHJpbmdcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqICAgICAgICB2YWx1ZSBvZiBhdHRyaWJ1dGUgYXMgYSBzdHJpbmdcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKiAgICAgICAgIFVucGFyc2VkIHZhbHVlXG4gICAqL1xuICBERUZBVUxUKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbn07XG4vKipcbiAqIEdldHMgYWxsIHRoZSBhdHRyaWJ1dGVzIGFuZCB2YWx1ZXMgb2YgdGhlIHByb3ZpZGVkIG5vZGUsIHBhcnNlcyBhdHRyaWJ1dGVzIHdpdGgga25vd25cbiAqIHR5cGVzLCBhbmQgcmV0dXJucyBhbiBvYmplY3Qgd2l0aCBhdHRyaWJ1dGUgbmFtZXMgbWFwcGVkIHRvIHZhbHVlcy5cbiAqXG4gKiBAcGFyYW0ge05vZGV9IGVsXG4gKiAgICAgICAgVGhlIG5vZGUgdG8gcGFyc2UgYXR0cmlidXRlcyBmcm9tXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiAgICAgICAgIE9iamVjdCB3aXRoIGFsbCBhdHRyaWJ1dGVzIG9mIGVsIHBhcnNlZFxuICovXG5cbmNvbnN0IHBhcnNlQXR0cmlidXRlcyA9IGVsID0+IHtcbiAgaWYgKCEoZWwgJiYgZWwuYXR0cmlidXRlcykpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICByZXR1cm4gZnJvbShlbC5hdHRyaWJ1dGVzKS5yZWR1Y2UoKGEsIGUpID0+IHtcbiAgICBjb25zdCBwYXJzZUZuID0gcGFyc2Vyc1tlLm5hbWVdIHx8IHBhcnNlcnMuREVGQVVMVDtcbiAgICBhW2UubmFtZV0gPSBwYXJzZUZuKGUudmFsdWUpO1xuICAgIHJldHVybiBhO1xuICB9LCB7fSk7XG59O1xuXG5jb25zdCBrZXlTeXN0ZW1zTWFwID0ge1xuICAndXJuOnV1aWQ6MTA3N2VmZWMtYzBiMi00ZDAyLWFjZTMtM2MxZTUyZTJmYjRiJzogJ29yZy53My5jbGVhcmtleScsXG4gICd1cm46dXVpZDplZGVmOGJhOS03OWQ2LTRhY2UtYTNjOC0yN2RjZDUxZDIxZWQnOiAnY29tLndpZGV2aW5lLmFscGhhJyxcbiAgJ3Vybjp1dWlkOjlhMDRmMDc5LTk4NDAtNDI4Ni1hYjkyLWU2NWJlMDg4NWY5NSc6ICdjb20ubWljcm9zb2Z0LnBsYXlyZWFkeScsXG4gICd1cm46dXVpZDpmMjM5ZTc2OS1lZmEzLTQ4NTAtOWMxNi1hOTAzYzY5MzJlZmInOiAnY29tLmFkb2JlLnByaW1ldGltZSdcbn07XG4vKipcbiAqIEJ1aWxkcyBhIGxpc3Qgb2YgdXJscyB0aGF0IGlzIHRoZSBwcm9kdWN0IG9mIHRoZSByZWZlcmVuY2UgdXJscyBhbmQgQmFzZVVSTCB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge09iamVjdFtdfSByZWZlcmVuY2VzXG4gKiAgICAgICAgTGlzdCBvZiBvYmplY3RzIGNvbnRhaW5pbmcgdGhlIHJlZmVyZW5jZSBVUkwgYXMgd2VsbCBhcyBpdHMgYXR0cmlidXRlc1xuICogQHBhcmFtIHtOb2RlW119IGJhc2VVcmxFbGVtZW50c1xuICogICAgICAgIExpc3Qgb2YgQmFzZVVSTCBub2RlcyBmcm9tIHRoZSBtcGRcbiAqIEByZXR1cm4ge09iamVjdFtdfVxuICogICAgICAgICBMaXN0IG9mIG9iamVjdHMgd2l0aCByZXNvbHZlZCB1cmxzIGFuZCBhdHRyaWJ1dGVzXG4gKi9cblxuY29uc3QgYnVpbGRCYXNlVXJscyA9IChyZWZlcmVuY2VzLCBiYXNlVXJsRWxlbWVudHMpID0+IHtcbiAgaWYgKCFiYXNlVXJsRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHJlZmVyZW5jZXM7XG4gIH1cblxuICByZXR1cm4gZmxhdHRlbihyZWZlcmVuY2VzLm1hcChmdW5jdGlvbiAocmVmZXJlbmNlKSB7XG4gICAgcmV0dXJuIGJhc2VVcmxFbGVtZW50cy5tYXAoZnVuY3Rpb24gKGJhc2VVcmxFbGVtZW50KSB7XG4gICAgICBjb25zdCBpbml0aWFsQmFzZVVybCA9IGdldENvbnRlbnQoYmFzZVVybEVsZW1lbnQpO1xuICAgICAgY29uc3QgcmVzb2x2ZWRCYXNlVXJsID0gcmVzb2x2ZVVybChyZWZlcmVuY2UuYmFzZVVybCwgaW5pdGlhbEJhc2VVcmwpO1xuICAgICAgY29uc3QgZmluYWxCYXNlVXJsID0gbWVyZ2UocGFyc2VBdHRyaWJ1dGVzKGJhc2VVcmxFbGVtZW50KSwge1xuICAgICAgICBiYXNlVXJsOiByZXNvbHZlZEJhc2VVcmxcbiAgICAgIH0pOyAvLyBJZiB0aGUgVVJMIGlzIHJlc29sdmVkLCB3ZSB3YW50IHRvIGdldCB0aGUgc2VydmljZUxvY2F0aW9uIGZyb20gdGhlIHJlZmVyZW5jZVxuICAgICAgLy8gYXNzdW1pbmcgdGhlcmUgaXMgbm8gc2VydmljZUxvY2F0aW9uIG9uIHRoZSBpbml0aWFsQmFzZVVybFxuXG4gICAgICBpZiAocmVzb2x2ZWRCYXNlVXJsICE9PSBpbml0aWFsQmFzZVVybCAmJiAhZmluYWxCYXNlVXJsLnNlcnZpY2VMb2NhdGlvbiAmJiByZWZlcmVuY2Uuc2VydmljZUxvY2F0aW9uKSB7XG4gICAgICAgIGZpbmFsQmFzZVVybC5zZXJ2aWNlTG9jYXRpb24gPSByZWZlcmVuY2Uuc2VydmljZUxvY2F0aW9uO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmluYWxCYXNlVXJsO1xuICAgIH0pO1xuICB9KSk7XG59O1xuLyoqXG4gKiBDb250YWlucyBhbGwgU2VnbWVudCBpbmZvcm1hdGlvbiBmb3IgaXRzIGNvbnRhaW5pbmcgQWRhcHRhdGlvblNldFxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFNlZ21lbnRJbmZvcm1hdGlvblxuICogQHByb3BlcnR5IHtPYmplY3R8dW5kZWZpbmVkfSB0ZW1wbGF0ZVxuICogICAgICAgICAgIENvbnRhaW5zIHRoZSBhdHRyaWJ1dGVzIGZvciB0aGUgU2VnbWVudFRlbXBsYXRlIG5vZGVcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0W118dW5kZWZpbmVkfSBzZWdtZW50VGltZWxpbmVcbiAqICAgICAgICAgICBDb250YWlucyBhIGxpc3Qgb2YgYXRycmlidXRlcyBmb3IgZWFjaCBTIG5vZGUgd2l0aGluIHRoZSBTZWdtZW50VGltZWxpbmUgbm9kZVxuICogQHByb3BlcnR5IHtPYmplY3R8dW5kZWZpbmVkfSBsaXN0XG4gKiAgICAgICAgICAgQ29udGFpbnMgdGhlIGF0dHJpYnV0ZXMgZm9yIHRoZSBTZWdtZW50TGlzdCBub2RlXG4gKiBAcHJvcGVydHkge09iamVjdHx1bmRlZmluZWR9IGJhc2VcbiAqICAgICAgICAgICBDb250YWlucyB0aGUgYXR0cmlidXRlcyBmb3IgdGhlIFNlZ21lbnRCYXNlIG5vZGVcbiAqL1xuXG4vKipcbiAqIFJldHVybnMgYWxsIGF2YWlsYWJsZSBTZWdtZW50IGluZm9ybWF0aW9uIGNvbnRhaW5lZCB3aXRoaW4gdGhlIEFkYXB0YXRpb25TZXQgbm9kZVxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gYWRhcHRhdGlvblNldFxuICogICAgICAgIFRoZSBBZGFwdGF0aW9uU2V0IG5vZGUgdG8gZ2V0IFNlZ21lbnQgaW5mb3JtYXRpb24gZnJvbVxuICogQHJldHVybiB7U2VnbWVudEluZm9ybWF0aW9ufVxuICogICAgICAgICBUaGUgU2VnbWVudCBpbmZvcm1hdGlvbiBjb250YWluZWQgd2l0aGluIHRoZSBwcm92aWRlZCBBZGFwdGF0aW9uU2V0XG4gKi9cblxuY29uc3QgZ2V0U2VnbWVudEluZm9ybWF0aW9uID0gYWRhcHRhdGlvblNldCA9PiB7XG4gIGNvbnN0IHNlZ21lbnRUZW1wbGF0ZSA9IGZpbmRDaGlsZHJlbihhZGFwdGF0aW9uU2V0LCAnU2VnbWVudFRlbXBsYXRlJylbMF07XG4gIGNvbnN0IHNlZ21lbnRMaXN0ID0gZmluZENoaWxkcmVuKGFkYXB0YXRpb25TZXQsICdTZWdtZW50TGlzdCcpWzBdO1xuICBjb25zdCBzZWdtZW50VXJscyA9IHNlZ21lbnRMaXN0ICYmIGZpbmRDaGlsZHJlbihzZWdtZW50TGlzdCwgJ1NlZ21lbnRVUkwnKS5tYXAocyA9PiBtZXJnZSh7XG4gICAgdGFnOiAnU2VnbWVudFVSTCdcbiAgfSwgcGFyc2VBdHRyaWJ1dGVzKHMpKSk7XG4gIGNvbnN0IHNlZ21lbnRCYXNlID0gZmluZENoaWxkcmVuKGFkYXB0YXRpb25TZXQsICdTZWdtZW50QmFzZScpWzBdO1xuICBjb25zdCBzZWdtZW50VGltZWxpbmVQYXJlbnROb2RlID0gc2VnbWVudExpc3QgfHwgc2VnbWVudFRlbXBsYXRlO1xuICBjb25zdCBzZWdtZW50VGltZWxpbmUgPSBzZWdtZW50VGltZWxpbmVQYXJlbnROb2RlICYmIGZpbmRDaGlsZHJlbihzZWdtZW50VGltZWxpbmVQYXJlbnROb2RlLCAnU2VnbWVudFRpbWVsaW5lJylbMF07XG4gIGNvbnN0IHNlZ21lbnRJbml0aWFsaXphdGlvblBhcmVudE5vZGUgPSBzZWdtZW50TGlzdCB8fCBzZWdtZW50QmFzZSB8fCBzZWdtZW50VGVtcGxhdGU7XG4gIGNvbnN0IHNlZ21lbnRJbml0aWFsaXphdGlvbiA9IHNlZ21lbnRJbml0aWFsaXphdGlvblBhcmVudE5vZGUgJiYgZmluZENoaWxkcmVuKHNlZ21lbnRJbml0aWFsaXphdGlvblBhcmVudE5vZGUsICdJbml0aWFsaXphdGlvbicpWzBdOyAvLyBTZWdtZW50VGVtcGxhdGUgaXMgaGFuZGxlZCBzbGlnaHRseSBkaWZmZXJlbnRseSwgc2luY2UgaXQgY2FuIGhhdmUgYm90aFxuICAvLyBAaW5pdGlhbGl6YXRpb24gYW5kIGFuIDxJbml0aWFsaXphdGlvbj4gbm9kZS4gIEBpbml0aWFsaXphdGlvbiBjYW4gYmUgdGVtcGxhdGVkLFxuICAvLyB3aGlsZSB0aGUgbm9kZSBjYW4gaGF2ZSBhIHVybCBhbmQgcmFuZ2Ugc3BlY2lmaWVkLiAgSWYgdGhlIDxTZWdtZW50VGVtcGxhdGU+IGhhc1xuICAvLyBib3RoIEBpbml0aWFsaXphdGlvbiBhbmQgYW4gPEluaXRpYWxpemF0aW9uPiBzdWJlbGVtZW50IHdlIG9wdCB0byBvdmVycmlkZSB3aXRoXG4gIC8vIHRoZSBub2RlLCBhcyB0aGlzIGludGVyYWN0aW9uIGlzIG5vdCBkZWZpbmVkIGluIHRoZSBzcGVjLlxuXG4gIGNvbnN0IHRlbXBsYXRlID0gc2VnbWVudFRlbXBsYXRlICYmIHBhcnNlQXR0cmlidXRlcyhzZWdtZW50VGVtcGxhdGUpO1xuXG4gIGlmICh0ZW1wbGF0ZSAmJiBzZWdtZW50SW5pdGlhbGl6YXRpb24pIHtcbiAgICB0ZW1wbGF0ZS5pbml0aWFsaXphdGlvbiA9IHNlZ21lbnRJbml0aWFsaXphdGlvbiAmJiBwYXJzZUF0dHJpYnV0ZXMoc2VnbWVudEluaXRpYWxpemF0aW9uKTtcbiAgfSBlbHNlIGlmICh0ZW1wbGF0ZSAmJiB0ZW1wbGF0ZS5pbml0aWFsaXphdGlvbikge1xuICAgIC8vIElmIGl0IGlzIEBpbml0aWFsaXphdGlvbiB3ZSBjb252ZXJ0IGl0IHRvIGFuIG9iamVjdCBzaW5jZSB0aGlzIGlzIHRoZSBmb3JtYXQgdGhhdFxuICAgIC8vIGxhdGVyIGZ1bmN0aW9ucyB3aWxsIHJlbHkgb24gZm9yIHRoZSBpbml0aWFsaXphdGlvbiBzZWdtZW50LiAgVGhpcyBpcyBvbmx5IHZhbGlkXG4gICAgLy8gZm9yIDxTZWdtZW50VGVtcGxhdGU+XG4gICAgdGVtcGxhdGUuaW5pdGlhbGl6YXRpb24gPSB7XG4gICAgICBzb3VyY2VVUkw6IHRlbXBsYXRlLmluaXRpYWxpemF0aW9uXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHNlZ21lbnRJbmZvID0ge1xuICAgIHRlbXBsYXRlLFxuICAgIHNlZ21lbnRUaW1lbGluZTogc2VnbWVudFRpbWVsaW5lICYmIGZpbmRDaGlsZHJlbihzZWdtZW50VGltZWxpbmUsICdTJykubWFwKHMgPT4gcGFyc2VBdHRyaWJ1dGVzKHMpKSxcbiAgICBsaXN0OiBzZWdtZW50TGlzdCAmJiBtZXJnZShwYXJzZUF0dHJpYnV0ZXMoc2VnbWVudExpc3QpLCB7XG4gICAgICBzZWdtZW50VXJscyxcbiAgICAgIGluaXRpYWxpemF0aW9uOiBwYXJzZUF0dHJpYnV0ZXMoc2VnbWVudEluaXRpYWxpemF0aW9uKVxuICAgIH0pLFxuICAgIGJhc2U6IHNlZ21lbnRCYXNlICYmIG1lcmdlKHBhcnNlQXR0cmlidXRlcyhzZWdtZW50QmFzZSksIHtcbiAgICAgIGluaXRpYWxpemF0aW9uOiBwYXJzZUF0dHJpYnV0ZXMoc2VnbWVudEluaXRpYWxpemF0aW9uKVxuICAgIH0pXG4gIH07XG4gIE9iamVjdC5rZXlzKHNlZ21lbnRJbmZvKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgaWYgKCFzZWdtZW50SW5mb1trZXldKSB7XG4gICAgICBkZWxldGUgc2VnbWVudEluZm9ba2V5XTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc2VnbWVudEluZm87XG59O1xuLyoqXG4gKiBDb250YWlucyBTZWdtZW50IGluZm9ybWF0aW9uIGFuZCBhdHRyaWJ1dGVzIG5lZWRlZCB0byBjb25zdHJ1Y3QgYSBQbGF5bGlzdCBvYmplY3RcbiAqIGZyb20gYSBSZXByZXNlbnRhdGlvblxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFJlcHJlc2VudGF0aW9uSW5mb3JtYXRpb25cbiAqIEBwcm9wZXJ0eSB7U2VnbWVudEluZm9ybWF0aW9ufSBzZWdtZW50SW5mb1xuICogICAgICAgICAgIFNlZ21lbnQgaW5mb3JtYXRpb24gZm9yIHRoaXMgUmVwcmVzZW50YXRpb25cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBhdHRyaWJ1dGVzXG4gKiAgICAgICAgICAgSW5oZXJpdGVkIGF0dHJpYnV0ZXMgZm9yIHRoaXMgUmVwcmVzZW50YXRpb25cbiAqL1xuXG4vKipcbiAqIE1hcHMgYSBSZXByZXNlbnRhdGlvbiBub2RlIHRvIGFuIG9iamVjdCBjb250YWluaW5nIFNlZ21lbnQgaW5mb3JtYXRpb24gYW5kIGF0dHJpYnV0ZXNcbiAqXG4gKiBAbmFtZSBpbmhlcml0QmFzZVVybHNDYWxsYmFja1xuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge05vZGV9IHJlcHJlc2VudGF0aW9uXG4gKiAgICAgICAgUmVwcmVzZW50YXRpb24gbm9kZSBmcm9tIHRoZSBtcGRcbiAqIEByZXR1cm4ge1JlcHJlc2VudGF0aW9uSW5mb3JtYXRpb259XG4gKiAgICAgICAgIFJlcHJlc2VudGF0aW9uIGluZm9ybWF0aW9uIG5lZWRlZCB0byBjb25zdHJ1Y3QgYSBQbGF5bGlzdCBvYmplY3RcbiAqL1xuXG4vKipcbiAqIFJldHVybnMgYSBjYWxsYmFjayBmb3IgQXJyYXkucHJvdG90eXBlLm1hcCBmb3IgbWFwcGluZyBSZXByZXNlbnRhdGlvbiBub2RlcyB0b1xuICogU2VnbWVudCBpbmZvcm1hdGlvbiBhbmQgYXR0cmlidXRlcyB1c2luZyBpbmhlcml0ZWQgQmFzZVVSTCBub2Rlcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYWRhcHRhdGlvblNldEF0dHJpYnV0ZXNcbiAqICAgICAgICBDb250YWlucyBhdHRyaWJ1dGVzIGluaGVyaXRlZCBieSB0aGUgQWRhcHRhdGlvblNldFxuICogQHBhcmFtIHtPYmplY3RbXX0gYWRhcHRhdGlvblNldEJhc2VVcmxzXG4gKiAgICAgICAgTGlzdCBvZiBvYmplY3RzIGNvbnRhaW5pbmcgcmVzb2x2ZWQgYmFzZSBVUkxzIGFuZCBhdHRyaWJ1dGVzXG4gKiAgICAgICAgaW5oZXJpdGVkIGJ5IHRoZSBBZGFwdGF0aW9uU2V0XG4gKiBAcGFyYW0ge1NlZ21lbnRJbmZvcm1hdGlvbn0gYWRhcHRhdGlvblNldFNlZ21lbnRJbmZvXG4gKiAgICAgICAgQ29udGFpbnMgU2VnbWVudCBpbmZvcm1hdGlvbiBmb3IgdGhlIEFkYXB0YXRpb25TZXRcbiAqIEByZXR1cm4ge2luaGVyaXRCYXNlVXJsc0NhbGxiYWNrfVxuICogICAgICAgICBDYWxsYmFjayBtYXAgZnVuY3Rpb25cbiAqL1xuXG5jb25zdCBpbmhlcml0QmFzZVVybHMgPSAoYWRhcHRhdGlvblNldEF0dHJpYnV0ZXMsIGFkYXB0YXRpb25TZXRCYXNlVXJscywgYWRhcHRhdGlvblNldFNlZ21lbnRJbmZvKSA9PiByZXByZXNlbnRhdGlvbiA9PiB7XG4gIGNvbnN0IHJlcEJhc2VVcmxFbGVtZW50cyA9IGZpbmRDaGlsZHJlbihyZXByZXNlbnRhdGlvbiwgJ0Jhc2VVUkwnKTtcbiAgY29uc3QgcmVwQmFzZVVybHMgPSBidWlsZEJhc2VVcmxzKGFkYXB0YXRpb25TZXRCYXNlVXJscywgcmVwQmFzZVVybEVsZW1lbnRzKTtcbiAgY29uc3QgYXR0cmlidXRlcyA9IG1lcmdlKGFkYXB0YXRpb25TZXRBdHRyaWJ1dGVzLCBwYXJzZUF0dHJpYnV0ZXMocmVwcmVzZW50YXRpb24pKTtcbiAgY29uc3QgcmVwcmVzZW50YXRpb25TZWdtZW50SW5mbyA9IGdldFNlZ21lbnRJbmZvcm1hdGlvbihyZXByZXNlbnRhdGlvbik7XG4gIHJldHVybiByZXBCYXNlVXJscy5tYXAoYmFzZVVybCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlZ21lbnRJbmZvOiBtZXJnZShhZGFwdGF0aW9uU2V0U2VnbWVudEluZm8sIHJlcHJlc2VudGF0aW9uU2VnbWVudEluZm8pLFxuICAgICAgYXR0cmlidXRlczogbWVyZ2UoYXR0cmlidXRlcywgYmFzZVVybClcbiAgICB9O1xuICB9KTtcbn07XG4vKipcbiAqIFRyYW5mb3JtcyBhIHNlcmllcyBvZiBjb250ZW50IHByb3RlY3Rpb24gbm9kZXMgdG9cbiAqIGFuIG9iamVjdCBjb250YWluaW5nIHBzc2ggZGF0YSBieSBrZXkgc3lzdGVtXG4gKlxuICogQHBhcmFtIHtOb2RlW119IGNvbnRlbnRQcm90ZWN0aW9uTm9kZXNcbiAqICAgICAgICBDb250ZW50IHByb3RlY3Rpb24gbm9kZXNcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqICAgICAgICBPYmplY3QgY29udGFpbmluZyBwc3NoIGRhdGEgYnkga2V5IHN5c3RlbVxuICovXG5cbmNvbnN0IGdlbmVyYXRlS2V5U3lzdGVtSW5mb3JtYXRpb24gPSBjb250ZW50UHJvdGVjdGlvbk5vZGVzID0+IHtcbiAgcmV0dXJuIGNvbnRlbnRQcm90ZWN0aW9uTm9kZXMucmVkdWNlKChhY2MsIG5vZGUpID0+IHtcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gcGFyc2VBdHRyaWJ1dGVzKG5vZGUpOyAvLyBBbHRob3VnaCBpdCBjb3VsZCBiZSBhcmd1ZWQgdGhhdCBhY2NvcmRpbmcgdG8gdGhlIFVVSUQgUkZDIHNwZWMgdGhlIFVVSUQgc3RyaW5nIChhLWYgY2hhcnMpIHNob3VsZCBiZSBnZW5lcmF0ZWRcbiAgICAvLyBhcyBhIGxvd2VyY2FzZSBzdHJpbmcgaXQgYWxzbyBtZW50aW9ucyBpdCBzaG91bGQgYmUgdHJlYXRlZCBhcyBjYXNlLWluc2Vuc2l0aXZlIG9uIGlucHV0LiBTaW5jZSB0aGUga2V5IHN5c3RlbVxuICAgIC8vIFVVSURzIGluIHRoZSBrZXlTeXN0ZW1zTWFwIGFyZSBoYXJkY29kZWQgYXMgbG93ZXJjYXNlIGluIHRoZSBjb2RlYmFzZSB0aGVyZSBpc24ndCBhbnkgcmVhc29uIG5vdCB0byBkb1xuICAgIC8vIC50b0xvd2VyQ2FzZSgpIG9uIHRoZSBpbnB1dCBVVUlEIHN0cmluZyBmcm9tIHRoZSBtYW5pZmVzdCAoYXQgbGVhc3QgSSBjb3VsZCBub3QgdGhpbmsgb2Ygb25lKS5cblxuICAgIGlmIChhdHRyaWJ1dGVzLnNjaGVtZUlkVXJpKSB7XG4gICAgICBhdHRyaWJ1dGVzLnNjaGVtZUlkVXJpID0gYXR0cmlidXRlcy5zY2hlbWVJZFVyaS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGtleVN5c3RlbSA9IGtleVN5c3RlbXNNYXBbYXR0cmlidXRlcy5zY2hlbWVJZFVyaV07XG5cbiAgICBpZiAoa2V5U3lzdGVtKSB7XG4gICAgICBhY2Nba2V5U3lzdGVtXSA9IHtcbiAgICAgICAgYXR0cmlidXRlc1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHBzc2hOb2RlID0gZmluZENoaWxkcmVuKG5vZGUsICdjZW5jOnBzc2gnKVswXTtcblxuICAgICAgaWYgKHBzc2hOb2RlKSB7XG4gICAgICAgIGNvbnN0IHBzc2ggPSBnZXRDb250ZW50KHBzc2hOb2RlKTtcbiAgICAgICAgYWNjW2tleVN5c3RlbV0ucHNzaCA9IHBzc2ggJiYgZGVjb2RlQjY0VG9VaW50OEFycmF5KHBzc2gpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbn07IC8vIGRlZmluZWQgaW4gQU5TSV9TQ1RFIDIxNC0xIDIwMTZcblxuXG5jb25zdCBwYXJzZUNhcHRpb25TZXJ2aWNlTWV0YWRhdGEgPSBzZXJ2aWNlID0+IHtcbiAgLy8gNjA4IGNhcHRpb25zXG4gIGlmIChzZXJ2aWNlLnNjaGVtZUlkVXJpID09PSAndXJuOnNjdGU6ZGFzaDpjYzpjZWEtNjA4OjIwMTUnKSB7XG4gICAgY29uc3QgdmFsdWVzID0gdHlwZW9mIHNlcnZpY2UudmFsdWUgIT09ICdzdHJpbmcnID8gW10gOiBzZXJ2aWNlLnZhbHVlLnNwbGl0KCc7Jyk7XG4gICAgcmV0dXJuIHZhbHVlcy5tYXAodmFsdWUgPT4ge1xuICAgICAgbGV0IGNoYW5uZWw7XG4gICAgICBsZXQgbGFuZ3VhZ2U7IC8vIGRlZmF1bHQgbGFuZ3VhZ2UgdG8gdmFsdWVcblxuICAgICAgbGFuZ3VhZ2UgPSB2YWx1ZTtcblxuICAgICAgaWYgKC9eQ0NcXGQ9Ly50ZXN0KHZhbHVlKSkge1xuICAgICAgICBbY2hhbm5lbCwgbGFuZ3VhZ2VdID0gdmFsdWUuc3BsaXQoJz0nKTtcbiAgICAgIH0gZWxzZSBpZiAoL15DQ1xcZCQvLnRlc3QodmFsdWUpKSB7XG4gICAgICAgIGNoYW5uZWwgPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2hhbm5lbCxcbiAgICAgICAgbGFuZ3VhZ2VcbiAgICAgIH07XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoc2VydmljZS5zY2hlbWVJZFVyaSA9PT0gJ3VybjpzY3RlOmRhc2g6Y2M6Y2VhLTcwODoyMDE1Jykge1xuICAgIGNvbnN0IHZhbHVlcyA9IHR5cGVvZiBzZXJ2aWNlLnZhbHVlICE9PSAnc3RyaW5nJyA/IFtdIDogc2VydmljZS52YWx1ZS5zcGxpdCgnOycpO1xuICAgIHJldHVybiB2YWx1ZXMubWFwKHZhbHVlID0+IHtcbiAgICAgIGNvbnN0IGZsYWdzID0ge1xuICAgICAgICAvLyBzZXJ2aWNlIG9yIGNoYW5uZWwgbnVtYmVyIDEtNjNcbiAgICAgICAgJ2NoYW5uZWwnOiB1bmRlZmluZWQsXG4gICAgICAgIC8vIGxhbmd1YWdlIGlzIGEgM0FMUEhBIHBlciBJU08gNjM5LjIvQlxuICAgICAgICAvLyBmaWVsZCBpcyByZXF1aXJlZFxuICAgICAgICAnbGFuZ3VhZ2UnOiB1bmRlZmluZWQsXG4gICAgICAgIC8vIEJJVCAxLzAgb3IgP1xuICAgICAgICAvLyBkZWZhdWx0IHZhbHVlIGlzIDEsIG1lYW5pbmcgMTY6OSBhc3BlY3QgcmF0aW8sIDAgaXMgNDozLCA/IGlzIHVua25vd25cbiAgICAgICAgJ2FzcGVjdFJhdGlvJzogMSxcbiAgICAgICAgLy8gQklUIDEvMFxuICAgICAgICAvLyBlYXN5IHJlYWRlciBmbGFnIGluZGljYXRlZCB0aGUgdGV4dCBpcyB0YWlsZWQgdG8gdGhlIG5lZWRzIG9mIGJlZ2lubmluZyByZWFkZXJzXG4gICAgICAgIC8vIGRlZmF1bHQgMCwgb3Igb2ZmXG4gICAgICAgICdlYXN5UmVhZGVyJzogMCxcbiAgICAgICAgLy8gQklUIDEvMFxuICAgICAgICAvLyBJZiAzZCBtZXRhZGF0YSBpcyBwcmVzZW50IChDRUEtNzA4LjEpIHRoZW4gMVxuICAgICAgICAvLyBkZWZhdWx0IDBcbiAgICAgICAgJzNEJzogMFxuICAgICAgfTtcblxuICAgICAgaWYgKC89Ly50ZXN0KHZhbHVlKSkge1xuICAgICAgICBjb25zdCBbY2hhbm5lbCwgb3B0cyA9ICcnXSA9IHZhbHVlLnNwbGl0KCc9Jyk7XG4gICAgICAgIGZsYWdzLmNoYW5uZWwgPSBjaGFubmVsO1xuICAgICAgICBmbGFncy5sYW5ndWFnZSA9IHZhbHVlO1xuICAgICAgICBvcHRzLnNwbGl0KCcsJykuZm9yRWFjaChvcHQgPT4ge1xuICAgICAgICAgIGNvbnN0IFtuYW1lLCB2YWxdID0gb3B0LnNwbGl0KCc6Jyk7XG5cbiAgICAgICAgICBpZiAobmFtZSA9PT0gJ2xhbmcnKSB7XG4gICAgICAgICAgICBmbGFncy5sYW5ndWFnZSA9IHZhbDsgLy8gZXIgZm9yIGVhc3lSZWFkZXJ5XG4gICAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSAnZXInKSB7XG4gICAgICAgICAgICBmbGFncy5lYXN5UmVhZGVyID0gTnVtYmVyKHZhbCk7IC8vIHdhciBmb3Igd2lkZSBhc3BlY3QgcmF0aW9cbiAgICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICd3YXInKSB7XG4gICAgICAgICAgICBmbGFncy5hc3BlY3RSYXRpbyA9IE51bWJlcih2YWwpO1xuICAgICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJzNEJykge1xuICAgICAgICAgICAgZmxhZ3NbJzNEJ10gPSBOdW1iZXIodmFsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmxhZ3MubGFuZ3VhZ2UgPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZsYWdzLmNoYW5uZWwpIHtcbiAgICAgICAgZmxhZ3MuY2hhbm5lbCA9ICdTRVJWSUNFJyArIGZsYWdzLmNoYW5uZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmbGFncztcbiAgICB9KTtcbiAgfVxufTtcbi8qKlxuICogQSBtYXAgY2FsbGJhY2sgdGhhdCB3aWxsIHBhcnNlIGFsbCBldmVudCBzdHJlYW0gZGF0YSBmb3IgYSBjb2xsZWN0aW9uIG9mIHBlcmlvZHNcbiAqIERBU0ggSVNPX0lFQ18yMzAwOSA1LjEwLjIuMlxuICogaHR0cHM6Ly9kYXNoaWYtZG9jdW1lbnRzLmF6dXJld2Vic2l0ZXMubmV0L0V2ZW50cy9tYXN0ZXIvZXZlbnQuaHRtbCNtcGQtZXZlbnQtdGltaW5nXG4gKlxuICogQHBhcmFtIHtQZXJpb2RJbmZvcm1hdGlvbn0gcGVyaW9kIG9iamVjdCBjb250YWluaW5nIG5lY2Vzc2FyeSBwZXJpb2QgaW5mb3JtYXRpb25cbiAqIEByZXR1cm4gYSBjb2xsZWN0aW9uIG9mIHBhcnNlZCBldmVudHN0cmVhbSBldmVudCBvYmplY3RzXG4gKi9cblxuY29uc3QgdG9FdmVudFN0cmVhbSA9IHBlcmlvZCA9PiB7XG4gIC8vIGdldCBhbmQgZmxhdHRlbiBhbGwgRXZlbnRTdHJlYW1zIHRhZ3MgYW5kIHBhcnNlIGF0dHJpYnV0ZXMgYW5kIGNoaWxkcmVuXG4gIHJldHVybiBmbGF0dGVuKGZpbmRDaGlsZHJlbihwZXJpb2Qubm9kZSwgJ0V2ZW50U3RyZWFtJykubWFwKGV2ZW50U3RyZWFtID0+IHtcbiAgICBjb25zdCBldmVudFN0cmVhbUF0dHJpYnV0ZXMgPSBwYXJzZUF0dHJpYnV0ZXMoZXZlbnRTdHJlYW0pO1xuICAgIGNvbnN0IHNjaGVtZUlkVXJpID0gZXZlbnRTdHJlYW1BdHRyaWJ1dGVzLnNjaGVtZUlkVXJpOyAvLyBmaW5kIGFsbCBFdmVudHMgcGVyIEV2ZW50U3RyZWFtIHRhZyBhbmQgbWFwIHRvIHJldHVybiBvYmplY3RzXG5cbiAgICByZXR1cm4gZmluZENoaWxkcmVuKGV2ZW50U3RyZWFtLCAnRXZlbnQnKS5tYXAoZXZlbnQgPT4ge1xuICAgICAgY29uc3QgZXZlbnRBdHRyaWJ1dGVzID0gcGFyc2VBdHRyaWJ1dGVzKGV2ZW50KTtcbiAgICAgIGNvbnN0IHByZXNlbnRhdGlvblRpbWUgPSBldmVudEF0dHJpYnV0ZXMucHJlc2VudGF0aW9uVGltZSB8fCAwO1xuICAgICAgY29uc3QgdGltZXNjYWxlID0gZXZlbnRTdHJlYW1BdHRyaWJ1dGVzLnRpbWVzY2FsZSB8fCAxO1xuICAgICAgY29uc3QgZHVyYXRpb24gPSBldmVudEF0dHJpYnV0ZXMuZHVyYXRpb24gfHwgMDtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gcHJlc2VudGF0aW9uVGltZSAvIHRpbWVzY2FsZSArIHBlcmlvZC5hdHRyaWJ1dGVzLnN0YXJ0O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2NoZW1lSWRVcmksXG4gICAgICAgIHZhbHVlOiBldmVudFN0cmVhbUF0dHJpYnV0ZXMudmFsdWUsXG4gICAgICAgIGlkOiBldmVudEF0dHJpYnV0ZXMuaWQsXG4gICAgICAgIHN0YXJ0LFxuICAgICAgICBlbmQ6IHN0YXJ0ICsgZHVyYXRpb24gLyB0aW1lc2NhbGUsXG4gICAgICAgIG1lc3NhZ2VEYXRhOiBnZXRDb250ZW50KGV2ZW50KSB8fCBldmVudEF0dHJpYnV0ZXMubWVzc2FnZURhdGEsXG4gICAgICAgIGNvbnRlbnRFbmNvZGluZzogZXZlbnRTdHJlYW1BdHRyaWJ1dGVzLmNvbnRlbnRFbmNvZGluZyxcbiAgICAgICAgcHJlc2VudGF0aW9uVGltZU9mZnNldDogZXZlbnRTdHJlYW1BdHRyaWJ1dGVzLnByZXNlbnRhdGlvblRpbWVPZmZzZXQgfHwgMFxuICAgICAgfTtcbiAgICB9KTtcbiAgfSkpO1xufTtcbi8qKlxuICogTWFwcyBhbiBBZGFwdGF0aW9uU2V0IG5vZGUgdG8gYSBsaXN0IG9mIFJlcHJlc2VudGF0aW9uIGluZm9ybWF0aW9uIG9iamVjdHNcbiAqXG4gKiBAbmFtZSB0b1JlcHJlc2VudGF0aW9uc0NhbGxiYWNrXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7Tm9kZX0gYWRhcHRhdGlvblNldFxuICogICAgICAgIEFkYXB0YXRpb25TZXQgbm9kZSBmcm9tIHRoZSBtcGRcbiAqIEByZXR1cm4ge1JlcHJlc2VudGF0aW9uSW5mb3JtYXRpb25bXX1cbiAqICAgICAgICAgTGlzdCBvZiBvYmplY3RzIGNvbnRhaW5pbmcgUmVwcmVzZW50YWlvbiBpbmZvcm1hdGlvblxuICovXG5cbi8qKlxuICogUmV0dXJucyBhIGNhbGxiYWNrIGZvciBBcnJheS5wcm90b3R5cGUubWFwIGZvciBtYXBwaW5nIEFkYXB0YXRpb25TZXQgbm9kZXMgdG8gYSBsaXN0IG9mXG4gKiBSZXByZXNlbnRhdGlvbiBpbmZvcm1hdGlvbiBvYmplY3RzXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBlcmlvZEF0dHJpYnV0ZXNcbiAqICAgICAgICBDb250YWlucyBhdHRyaWJ1dGVzIGluaGVyaXRlZCBieSB0aGUgUGVyaW9kXG4gKiBAcGFyYW0ge09iamVjdFtdfSBwZXJpb2RCYXNlVXJsc1xuICogICAgICAgIENvbnRhaW5zIGxpc3Qgb2Ygb2JqZWN0cyB3aXRoIHJlc29sdmVkIGJhc2UgdXJscyBhbmQgYXR0cmlidXRlc1xuICogICAgICAgIGluaGVyaXRlZCBieSB0aGUgUGVyaW9kXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBwZXJpb2RTZWdtZW50SW5mb1xuICogICAgICAgIENvbnRhaW5zIFNlZ21lbnQgSW5mb3JtYXRpb24gYXQgdGhlIHBlcmlvZCBsZXZlbFxuICogQHJldHVybiB7dG9SZXByZXNlbnRhdGlvbnNDYWxsYmFja31cbiAqICAgICAgICAgQ2FsbGJhY2sgbWFwIGZ1bmN0aW9uXG4gKi9cblxuY29uc3QgdG9SZXByZXNlbnRhdGlvbnMgPSAocGVyaW9kQXR0cmlidXRlcywgcGVyaW9kQmFzZVVybHMsIHBlcmlvZFNlZ21lbnRJbmZvKSA9PiBhZGFwdGF0aW9uU2V0ID0+IHtcbiAgY29uc3QgYWRhcHRhdGlvblNldEF0dHJpYnV0ZXMgPSBwYXJzZUF0dHJpYnV0ZXMoYWRhcHRhdGlvblNldCk7XG4gIGNvbnN0IGFkYXB0YXRpb25TZXRCYXNlVXJscyA9IGJ1aWxkQmFzZVVybHMocGVyaW9kQmFzZVVybHMsIGZpbmRDaGlsZHJlbihhZGFwdGF0aW9uU2V0LCAnQmFzZVVSTCcpKTtcbiAgY29uc3Qgcm9sZSA9IGZpbmRDaGlsZHJlbihhZGFwdGF0aW9uU2V0LCAnUm9sZScpWzBdO1xuICBjb25zdCByb2xlQXR0cmlidXRlcyA9IHtcbiAgICByb2xlOiBwYXJzZUF0dHJpYnV0ZXMocm9sZSlcbiAgfTtcbiAgbGV0IGF0dHJzID0gbWVyZ2UocGVyaW9kQXR0cmlidXRlcywgYWRhcHRhdGlvblNldEF0dHJpYnV0ZXMsIHJvbGVBdHRyaWJ1dGVzKTtcbiAgY29uc3QgYWNjZXNzaWJpbGl0eSA9IGZpbmRDaGlsZHJlbihhZGFwdGF0aW9uU2V0LCAnQWNjZXNzaWJpbGl0eScpWzBdO1xuICBjb25zdCBjYXB0aW9uU2VydmljZXMgPSBwYXJzZUNhcHRpb25TZXJ2aWNlTWV0YWRhdGEocGFyc2VBdHRyaWJ1dGVzKGFjY2Vzc2liaWxpdHkpKTtcblxuICBpZiAoY2FwdGlvblNlcnZpY2VzKSB7XG4gICAgYXR0cnMgPSBtZXJnZShhdHRycywge1xuICAgICAgY2FwdGlvblNlcnZpY2VzXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBsYWJlbCA9IGZpbmRDaGlsZHJlbihhZGFwdGF0aW9uU2V0LCAnTGFiZWwnKVswXTtcblxuICBpZiAobGFiZWwgJiYgbGFiZWwuY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICBjb25zdCBsYWJlbFZhbCA9IGxhYmVsLmNoaWxkTm9kZXNbMF0ubm9kZVZhbHVlLnRyaW0oKTtcbiAgICBhdHRycyA9IG1lcmdlKGF0dHJzLCB7XG4gICAgICBsYWJlbDogbGFiZWxWYWxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGNvbnRlbnRQcm90ZWN0aW9uID0gZ2VuZXJhdGVLZXlTeXN0ZW1JbmZvcm1hdGlvbihmaW5kQ2hpbGRyZW4oYWRhcHRhdGlvblNldCwgJ0NvbnRlbnRQcm90ZWN0aW9uJykpO1xuXG4gIGlmIChPYmplY3Qua2V5cyhjb250ZW50UHJvdGVjdGlvbikubGVuZ3RoKSB7XG4gICAgYXR0cnMgPSBtZXJnZShhdHRycywge1xuICAgICAgY29udGVudFByb3RlY3Rpb25cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHNlZ21lbnRJbmZvID0gZ2V0U2VnbWVudEluZm9ybWF0aW9uKGFkYXB0YXRpb25TZXQpO1xuICBjb25zdCByZXByZXNlbnRhdGlvbnMgPSBmaW5kQ2hpbGRyZW4oYWRhcHRhdGlvblNldCwgJ1JlcHJlc2VudGF0aW9uJyk7XG4gIGNvbnN0IGFkYXB0YXRpb25TZXRTZWdtZW50SW5mbyA9IG1lcmdlKHBlcmlvZFNlZ21lbnRJbmZvLCBzZWdtZW50SW5mbyk7XG4gIHJldHVybiBmbGF0dGVuKHJlcHJlc2VudGF0aW9ucy5tYXAoaW5oZXJpdEJhc2VVcmxzKGF0dHJzLCBhZGFwdGF0aW9uU2V0QmFzZVVybHMsIGFkYXB0YXRpb25TZXRTZWdtZW50SW5mbykpKTtcbn07XG4vKipcbiAqIENvbnRhaW5zIGFsbCBwZXJpb2QgaW5mb3JtYXRpb24gZm9yIG1hcHBpbmcgbm9kZXMgb250byBhZGFwdGF0aW9uIHNldHMuXG4gKlxuICogQHR5cGVkZWYge09iamVjdH0gUGVyaW9kSW5mb3JtYXRpb25cbiAqIEBwcm9wZXJ0eSB7Tm9kZX0gcGVyaW9kLm5vZGVcbiAqICAgICAgICAgICBQZXJpb2Qgbm9kZSBmcm9tIHRoZSBtcGRcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBwZXJpb2QuYXR0cmlidXRlc1xuICogICAgICAgICAgIFBhcnNlZCBwZXJpb2QgYXR0cmlidXRlcyBmcm9tIG5vZGUgcGx1cyBhbnkgYWRkZWRcbiAqL1xuXG4vKipcbiAqIE1hcHMgYSBQZXJpb2RJbmZvcm1hdGlvbiBvYmplY3QgdG8gYSBsaXN0IG9mIFJlcHJlc2VudGF0aW9uIGluZm9ybWF0aW9uIG9iamVjdHMgZm9yIGFsbFxuICogQWRhcHRhdGlvblNldCBub2RlcyBjb250YWluZWQgd2l0aGluIHRoZSBQZXJpb2QuXG4gKlxuICogQG5hbWUgdG9BZGFwdGF0aW9uU2V0c0NhbGxiYWNrXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7UGVyaW9kSW5mb3JtYXRpb259IHBlcmlvZFxuICogICAgICAgIFBlcmlvZCBvYmplY3QgY29udGFpbmluZyBuZWNlc3NhcnkgcGVyaW9kIGluZm9ybWF0aW9uXG4gKiBAcGFyYW0ge251bWJlcn0gcGVyaW9kU3RhcnRcbiAqICAgICAgICBTdGFydCB0aW1lIG9mIHRoZSBQZXJpb2Qgd2l0aGluIHRoZSBtcGRcbiAqIEByZXR1cm4ge1JlcHJlc2VudGF0aW9uSW5mb3JtYXRpb25bXX1cbiAqICAgICAgICAgTGlzdCBvZiBvYmplY3RzIGNvbnRhaW5pbmcgUmVwcmVzZW50YWlvbiBpbmZvcm1hdGlvblxuICovXG5cbi8qKlxuICogUmV0dXJucyBhIGNhbGxiYWNrIGZvciBBcnJheS5wcm90b3R5cGUubWFwIGZvciBtYXBwaW5nIFBlcmlvZCBub2RlcyB0byBhIGxpc3Qgb2ZcbiAqIFJlcHJlc2VudGF0aW9uIGluZm9ybWF0aW9uIG9iamVjdHNcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gbXBkQXR0cmlidXRlc1xuICogICAgICAgIENvbnRhaW5zIGF0dHJpYnV0ZXMgaW5oZXJpdGVkIGJ5IHRoZSBtcGRcbiAgKiBAcGFyYW0ge09iamVjdFtdfSBtcGRCYXNlVXJsc1xuICogICAgICAgIENvbnRhaW5zIGxpc3Qgb2Ygb2JqZWN0cyB3aXRoIHJlc29sdmVkIGJhc2UgdXJscyBhbmQgYXR0cmlidXRlc1xuICogICAgICAgIGluaGVyaXRlZCBieSB0aGUgbXBkXG4gKiBAcmV0dXJuIHt0b0FkYXB0YXRpb25TZXRzQ2FsbGJhY2t9XG4gKiAgICAgICAgIENhbGxiYWNrIG1hcCBmdW5jdGlvblxuICovXG5cbmNvbnN0IHRvQWRhcHRhdGlvblNldHMgPSAobXBkQXR0cmlidXRlcywgbXBkQmFzZVVybHMpID0+IChwZXJpb2QsIGluZGV4KSA9PiB7XG4gIGNvbnN0IHBlcmlvZEJhc2VVcmxzID0gYnVpbGRCYXNlVXJscyhtcGRCYXNlVXJscywgZmluZENoaWxkcmVuKHBlcmlvZC5ub2RlLCAnQmFzZVVSTCcpKTtcbiAgY29uc3QgcGVyaW9kQXR0cmlidXRlcyA9IG1lcmdlKG1wZEF0dHJpYnV0ZXMsIHtcbiAgICBwZXJpb2RTdGFydDogcGVyaW9kLmF0dHJpYnV0ZXMuc3RhcnRcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBwZXJpb2QuYXR0cmlidXRlcy5kdXJhdGlvbiA9PT0gJ251bWJlcicpIHtcbiAgICBwZXJpb2RBdHRyaWJ1dGVzLnBlcmlvZER1cmF0aW9uID0gcGVyaW9kLmF0dHJpYnV0ZXMuZHVyYXRpb247XG4gIH1cblxuICBjb25zdCBhZGFwdGF0aW9uU2V0cyA9IGZpbmRDaGlsZHJlbihwZXJpb2Qubm9kZSwgJ0FkYXB0YXRpb25TZXQnKTtcbiAgY29uc3QgcGVyaW9kU2VnbWVudEluZm8gPSBnZXRTZWdtZW50SW5mb3JtYXRpb24ocGVyaW9kLm5vZGUpO1xuICByZXR1cm4gZmxhdHRlbihhZGFwdGF0aW9uU2V0cy5tYXAodG9SZXByZXNlbnRhdGlvbnMocGVyaW9kQXR0cmlidXRlcywgcGVyaW9kQmFzZVVybHMsIHBlcmlvZFNlZ21lbnRJbmZvKSkpO1xufTtcbi8qKlxuICogVHJhbmZvcm1zIGFuIGFycmF5IG9mIGNvbnRlbnQgc3RlZXJpbmcgbm9kZXMgaW50byBhbiBvYmplY3RcbiAqIGNvbnRhaW5pbmcgQ0ROIGNvbnRlbnQgc3RlZXJpbmcgaW5mb3JtYXRpb24gZnJvbSB0aGUgTVBEIG1hbmlmZXN0LlxuICpcbiAqIEZvciBtb3JlIGluZm9ybWF0aW9uIG9uIHRoZSBEQVNIIHNwZWMgZm9yIENvbnRlbnQgU3RlZXJpbmcgcGFyc2luZywgc2VlOlxuICogaHR0cHM6Ly9kYXNoaWYub3JnL2RvY3MvREFTSC1JRi1DVFMtMDBYWC1Db250ZW50LVN0ZWVyaW5nLUNvbW11bml0eS1SZXZpZXcucGRmXG4gKlxuICogQHBhcmFtIHtOb2RlW119IGNvbnRlbnRTdGVlcmluZ05vZGVzXG4gKiAgICAgICAgQ29udGVudCBzdGVlcmluZyBub2Rlc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXZlbnRIYW5kbGVyXG4gKiAgICAgICAgVGhlIGV2ZW50IGhhbmRsZXIgcGFzc2VkIGludG8gdGhlIHBhcnNlciBvcHRpb25zIHRvIGhhbmRsZSB3YXJuaW5nc1xuICogQHJldHVybiB7T2JqZWN0fVxuICogICAgICAgIE9iamVjdCBjb250YWluaW5nIGNvbnRlbnQgc3RlZXJpbmcgZGF0YVxuICovXG5cbmNvbnN0IGdlbmVyYXRlQ29udGVudFN0ZWVyaW5nSW5mb3JtYXRpb24gPSAoY29udGVudFN0ZWVyaW5nTm9kZXMsIGV2ZW50SGFuZGxlcikgPT4ge1xuICAvLyBJZiB0aGVyZSBhcmUgbW9yZSB0aGFuIG9uZSBDb250ZW50U3RlZXJpbmcgdGFncywgdGhyb3cgYW4gZXJyb3JcbiAgaWYgKGNvbnRlbnRTdGVlcmluZ05vZGVzLmxlbmd0aCA+IDEpIHtcbiAgICBldmVudEhhbmRsZXIoe1xuICAgICAgdHlwZTogJ3dhcm4nLFxuICAgICAgbWVzc2FnZTogJ1RoZSBNUEQgbWFuaWZlc3Qgc2hvdWxkIGNvbnRhaW4gbm8gbW9yZSB0aGFuIG9uZSBDb250ZW50U3RlZXJpbmcgdGFnJ1xuICAgIH0pO1xuICB9IC8vIFJldHVybiBhIG51bGwgdmFsdWUgaWYgdGhlcmUgYXJlIG5vIENvbnRlbnRTdGVlcmluZyB0YWdzXG5cblxuICBpZiAoIWNvbnRlbnRTdGVlcmluZ05vZGVzLmxlbmd0aCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgaW5mb0Zyb21Db250ZW50U3RlZXJpbmdUYWcgPSBtZXJnZSh7XG4gICAgc2VydmVyVVJMOiBnZXRDb250ZW50KGNvbnRlbnRTdGVlcmluZ05vZGVzWzBdKVxuICB9LCBwYXJzZUF0dHJpYnV0ZXMoY29udGVudFN0ZWVyaW5nTm9kZXNbMF0pKTsgLy8gQ29udmVydHMgYHF1ZXJ5QmVmb3JlU3RhcnRgIHRvIGEgYm9vbGVhbiwgYXMgd2VsbCBhcyBzZXR0aW5nIHRoZSBkZWZhdWx0IHZhbHVlXG4gIC8vIHRvIGBmYWxzZWAgaWYgaXQgZG9lc24ndCBleGlzdFxuXG4gIGluZm9Gcm9tQ29udGVudFN0ZWVyaW5nVGFnLnF1ZXJ5QmVmb3JlU3RhcnQgPSBpbmZvRnJvbUNvbnRlbnRTdGVlcmluZ1RhZy5xdWVyeUJlZm9yZVN0YXJ0ID09PSAndHJ1ZSc7XG4gIHJldHVybiBpbmZvRnJvbUNvbnRlbnRTdGVlcmluZ1RhZztcbn07XG4vKipcbiAqIEdldHMgUGVyaW9kQHN0YXJ0IHByb3BlcnR5IGZvciBhIGdpdmVuIHBlcmlvZC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogICAgICAgIE9wdGlvbnMgb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5hdHRyaWJ1dGVzXG4gKiAgICAgICAgUGVyaW9kIGF0dHJpYnV0ZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5wcmlvclBlcmlvZEF0dHJpYnV0ZXNdXG4gKiAgICAgICAgUHJpb3IgcGVyaW9kIGF0dHJpYnV0ZXMgKGlmIHByaW9yIHBlcmlvZCBpcyBhdmFpbGFibGUpXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5tcGRUeXBlXG4gKiAgICAgICAgVGhlIE1QREB0eXBlIHRoZXNlIHBlcmlvZHMgY2FtZSBmcm9tXG4gKiBAcmV0dXJuIHtudW1iZXJ8bnVsbH1cbiAqICAgICAgICAgVGhlIHBlcmlvZCBzdGFydCwgb3IgbnVsbCBpZiBpdCdzIGFuIGVhcmx5IGF2YWlsYWJsZSBwZXJpb2Qgb3IgZXJyb3JcbiAqL1xuXG5jb25zdCBnZXRQZXJpb2RTdGFydCA9ICh7XG4gIGF0dHJpYnV0ZXMsXG4gIHByaW9yUGVyaW9kQXR0cmlidXRlcyxcbiAgbXBkVHlwZVxufSkgPT4ge1xuICAvLyBTdW1tYXJ5IG9mIHBlcmlvZCBzdGFydCB0aW1lIGNhbGN1bGF0aW9uIGZyb20gREFTSCBzcGVjIHNlY3Rpb24gNS4zLjIuMVxuICAvL1xuICAvLyBBIHBlcmlvZCdzIHN0YXJ0IGlzIHRoZSBmaXJzdCBwZXJpb2QncyBzdGFydCArIHRpbWUgZWxhcHNlZCBhZnRlciBwbGF5aW5nIGFsbFxuICAvLyBwcmlvciBwZXJpb2RzIHRvIHRoaXMgb25lLiBQZXJpb2RzIGNvbnRpbnVlIG9uZSBhZnRlciB0aGUgb3RoZXIgaW4gdGltZSAod2l0aG91dFxuICAvLyBnYXBzKSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBwcmVzZW50YXRpb24uXG4gIC8vXG4gIC8vIFRoZSB2YWx1ZSBvZiBQZXJpb2RAc3RhcnQgc2hvdWxkIGJlOlxuICAvLyAxLiBpZiBQZXJpb2RAc3RhcnQgaXMgcHJlc2VudDogdmFsdWUgb2YgUGVyaW9kQHN0YXJ0XG4gIC8vIDIuIGlmIHByZXZpb3VzIHBlcmlvZCBleGlzdHMgYW5kIGl0IGhhcyBAZHVyYXRpb246IHByZXZpb3VzIFBlcmlvZEBzdGFydCArXG4gIC8vICAgIHByZXZpb3VzIFBlcmlvZEBkdXJhdGlvblxuICAvLyAzLiBpZiB0aGlzIGlzIGZpcnN0IHBlcmlvZCBhbmQgTVBEQHR5cGUgaXMgJ3N0YXRpYyc6IDBcbiAgLy8gNC4gaW4gYWxsIG90aGVyIGNhc2VzLCBjb25zaWRlciB0aGUgcGVyaW9kIGFuIFwiZWFybHkgYXZhaWxhYmxlIHBlcmlvZFwiIChub3RlOiBub3RcbiAgLy8gICAgY3VycmVudGx5IHN1cHBvcnRlZClcbiAgLy8gKDEpXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5zdGFydCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gYXR0cmlidXRlcy5zdGFydDtcbiAgfSAvLyAoMilcblxuXG4gIGlmIChwcmlvclBlcmlvZEF0dHJpYnV0ZXMgJiYgdHlwZW9mIHByaW9yUGVyaW9kQXR0cmlidXRlcy5zdGFydCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHByaW9yUGVyaW9kQXR0cmlidXRlcy5kdXJhdGlvbiA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gcHJpb3JQZXJpb2RBdHRyaWJ1dGVzLnN0YXJ0ICsgcHJpb3JQZXJpb2RBdHRyaWJ1dGVzLmR1cmF0aW9uO1xuICB9IC8vICgzKVxuXG5cbiAgaWYgKCFwcmlvclBlcmlvZEF0dHJpYnV0ZXMgJiYgbXBkVHlwZSA9PT0gJ3N0YXRpYycpIHtcbiAgICByZXR1cm4gMDtcbiAgfSAvLyAoNClcbiAgLy8gVGhlcmUgaXMgY3VycmVudGx5IG5vIGxvZ2ljIGZvciBjYWxjdWxhdGluZyB0aGUgUGVyaW9kQHN0YXJ0IHZhbHVlIGlmIHRoZXJlIGlzXG4gIC8vIG5vIFBlcmlvZEBzdGFydCBvciBwcmlvciBQZXJpb2RAc3RhcnQgYW5kIFBlcmlvZEBkdXJhdGlvbiBhdmFpbGFibGUuIFRoaXMgaXMgbm90IG1hZGVcbiAgLy8gZXhwbGljaXQgYnkgdGhlIERBU0ggaW50ZXJvcCBndWlkZWxpbmVzIG9yIHRoZSBEQVNIIHNwZWMsIGhvd2V2ZXIsIHNpbmNlIHRoZXJlJ3NcbiAgLy8gbm90aGluZyBhYm91dCBhbnkgb3RoZXIgcmVzb2x1dGlvbiBzdHJhdGVnaWVzLCBpdCdzIGltcGxpZWQuIFRodXMsIHRoaXMgY2FzZSBzaG91bGRcbiAgLy8gYmUgY29uc2lkZXJlZCBhbiBlYXJseSBhdmFpbGFibGUgcGVyaW9kLCBvciBlcnJvciwgYW5kIG51bGwgc2hvdWxkIHN1ZmZpY2UgZm9yIGJvdGhcbiAgLy8gb2YgdGhvc2UgY2FzZXMuXG5cblxuICByZXR1cm4gbnVsbDtcbn07XG4vKipcbiAqIFRyYXZlcnNlcyB0aGUgbXBkIHhtbCB0cmVlIHRvIGdlbmVyYXRlIGEgbGlzdCBvZiBSZXByZXNlbnRhdGlvbiBpbmZvcm1hdGlvbiBvYmplY3RzXG4gKiB0aGF0IGhhdmUgaW5oZXJpdGVkIGF0dHJpYnV0ZXMgZnJvbSBwYXJlbnQgbm9kZXNcbiAqXG4gKiBAcGFyYW0ge05vZGV9IG1wZFxuICogICAgICAgIFRoZSByb290IG5vZGUgb2YgdGhlIG1wZFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqICAgICAgICBBdmFpbGFibGUgb3B0aW9ucyBmb3IgaW5oZXJpdEF0dHJpYnV0ZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm1hbmlmZXN0VXJpXG4gKiAgICAgICAgVGhlIHVyaSBzb3VyY2Ugb2YgdGhlIG1wZFxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMuTk9XXG4gKiAgICAgICAgQ3VycmVudCB0aW1lIHBlciBEQVNIIElPUC4gIERlZmF1bHQgaXMgY3VycmVudCB0aW1lIGluIG1zIHNpbmNlIGVwb2NoXG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5jbGllbnRPZmZzZXRcbiAqICAgICAgICBDbGllbnQgdGltZSBkaWZmZXJlbmNlIGZyb20gTk9XIChpbiBtaWxsaXNlY29uZHMpXG4gKiBAcmV0dXJuIHtSZXByZXNlbnRhdGlvbkluZm9ybWF0aW9uW119XG4gKiAgICAgICAgIExpc3Qgb2Ygb2JqZWN0cyBjb250YWluaW5nIFJlcHJlc2VudGF0aW9uIGluZm9ybWF0aW9uXG4gKi9cblxuY29uc3QgaW5oZXJpdEF0dHJpYnV0ZXMgPSAobXBkLCBvcHRpb25zID0ge30pID0+IHtcbiAgY29uc3Qge1xuICAgIG1hbmlmZXN0VXJpID0gJycsXG4gICAgTk9XID0gRGF0ZS5ub3coKSxcbiAgICBjbGllbnRPZmZzZXQgPSAwLFxuICAgIC8vIFRPRE86IEZvciBub3csIHdlIGFyZSBleHBlY3RpbmcgYW4gZXZlbnRIYW5kbGVyIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgLy8gdG8gYmUgcGFzc2VkIGludG8gdGhlIG1wZCBwYXJzZXIgYXMgYW4gb3B0aW9uLlxuICAgIC8vIEluIHRoZSBmdXR1cmUsIHdlIHNob3VsZCBlbmFibGUgc3RyZWFtIHBhcnNpbmcgYnkgdXNpbmcgdGhlIFN0cmVhbSBjbGFzcyBmcm9tIHZocy11dGlscy5cbiAgICAvLyBUaGlzIHdpbGwgc3VwcG9ydCBuZXcgZmVhdHVyZXMgaW5jbHVkaW5nIGEgc3RhbmRhcmRpemVkIGV2ZW50IGhhbmRsZXIuXG4gICAgLy8gU2VlIHRoZSBtM3U4IHBhcnNlciBmb3IgZXhhbXBsZXMgb2YgaG93IHN0cmVhbSBwYXJzaW5nIGlzIGN1cnJlbnRseSB1c2VkIGZvciBITFMgcGFyc2luZy5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdmlkZW9qcy92aHMtdXRpbHMvYmxvYi84OGQ2ZTEwYzYzMWU1N2E1YWYwMmM1YTYyYmM3Mzc2Y2Q0NTZiNGY1L3NyYy9zdHJlYW0uanMjTDlcbiAgICBldmVudEhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7fVxuICB9ID0gb3B0aW9ucztcbiAgY29uc3QgcGVyaW9kTm9kZXMgPSBmaW5kQ2hpbGRyZW4obXBkLCAnUGVyaW9kJyk7XG5cbiAgaWYgKCFwZXJpb2ROb2Rlcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JzLklOVkFMSURfTlVNQkVSX09GX1BFUklPRCk7XG4gIH1cblxuICBjb25zdCBsb2NhdGlvbnMgPSBmaW5kQ2hpbGRyZW4obXBkLCAnTG9jYXRpb24nKTtcbiAgY29uc3QgbXBkQXR0cmlidXRlcyA9IHBhcnNlQXR0cmlidXRlcyhtcGQpO1xuICBjb25zdCBtcGRCYXNlVXJscyA9IGJ1aWxkQmFzZVVybHMoW3tcbiAgICBiYXNlVXJsOiBtYW5pZmVzdFVyaVxuICB9XSwgZmluZENoaWxkcmVuKG1wZCwgJ0Jhc2VVUkwnKSk7XG4gIGNvbnN0IGNvbnRlbnRTdGVlcmluZ05vZGVzID0gZmluZENoaWxkcmVuKG1wZCwgJ0NvbnRlbnRTdGVlcmluZycpOyAvLyBTZWUgREFTSCBzcGVjIHNlY3Rpb24gNS4zLjEuMiwgU2VtYW50aWNzIG9mIE1QRCBlbGVtZW50LiBEZWZhdWx0IHR5cGUgdG8gJ3N0YXRpYycuXG5cbiAgbXBkQXR0cmlidXRlcy50eXBlID0gbXBkQXR0cmlidXRlcy50eXBlIHx8ICdzdGF0aWMnO1xuICBtcGRBdHRyaWJ1dGVzLnNvdXJjZUR1cmF0aW9uID0gbXBkQXR0cmlidXRlcy5tZWRpYVByZXNlbnRhdGlvbkR1cmF0aW9uIHx8IDA7XG4gIG1wZEF0dHJpYnV0ZXMuTk9XID0gTk9XO1xuICBtcGRBdHRyaWJ1dGVzLmNsaWVudE9mZnNldCA9IGNsaWVudE9mZnNldDtcblxuICBpZiAobG9jYXRpb25zLmxlbmd0aCkge1xuICAgIG1wZEF0dHJpYnV0ZXMubG9jYXRpb25zID0gbG9jYXRpb25zLm1hcChnZXRDb250ZW50KTtcbiAgfVxuXG4gIGNvbnN0IHBlcmlvZHMgPSBbXTsgLy8gU2luY2UgdG9BZGFwdGF0aW9uU2V0cyBhY3RzIG9uIGluZGl2aWR1YWwgcGVyaW9kcyByaWdodCBub3csIHRoZSBzaW1wbGVzdCBhcHByb2FjaCB0b1xuICAvLyBhZGRpbmcgcHJvcGVydGllcyB0aGF0IHJlcXVpcmUgbG9va2luZyBhdCBwcmlvciBwZXJpb2RzIGlzIHRvIHBhcnNlIGF0dHJpYnV0ZXMgYW5kIGFkZFxuICAvLyBtaXNzaW5nIG9uZXMgYmVmb3JlIHRvQWRhcHRhdGlvblNldHMgaXMgY2FsbGVkLiBJZiBtb3JlIHN1Y2ggcHJvcGVydGllcyBhcmUgYWRkZWQsIGl0XG4gIC8vIG1heSBiZSBiZXR0ZXIgdG8gcmVmYWN0b3IgdG9BZGFwdGF0aW9uU2V0cy5cblxuICBwZXJpb2ROb2Rlcy5mb3JFYWNoKChub2RlLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBwYXJzZUF0dHJpYnV0ZXMobm9kZSk7IC8vIFVzZSB0aGUgbGFzdCBtb2RpZmllZCBwcmlvciBwZXJpb2QsIGFzIGl0IG1heSBjb250YWluIGFkZGVkIGluZm9ybWF0aW9uIG5lY2Vzc2FyeVxuICAgIC8vIGZvciB0aGlzIHBlcmlvZC5cblxuICAgIGNvbnN0IHByaW9yUGVyaW9kID0gcGVyaW9kc1tpbmRleCAtIDFdO1xuICAgIGF0dHJpYnV0ZXMuc3RhcnQgPSBnZXRQZXJpb2RTdGFydCh7XG4gICAgICBhdHRyaWJ1dGVzLFxuICAgICAgcHJpb3JQZXJpb2RBdHRyaWJ1dGVzOiBwcmlvclBlcmlvZCA/IHByaW9yUGVyaW9kLmF0dHJpYnV0ZXMgOiBudWxsLFxuICAgICAgbXBkVHlwZTogbXBkQXR0cmlidXRlcy50eXBlXG4gICAgfSk7XG4gICAgcGVyaW9kcy5wdXNoKHtcbiAgICAgIG5vZGUsXG4gICAgICBhdHRyaWJ1dGVzXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGxvY2F0aW9uczogbXBkQXR0cmlidXRlcy5sb2NhdGlvbnMsXG4gICAgY29udGVudFN0ZWVyaW5nSW5mbzogZ2VuZXJhdGVDb250ZW50U3RlZXJpbmdJbmZvcm1hdGlvbihjb250ZW50U3RlZXJpbmdOb2RlcywgZXZlbnRIYW5kbGVyKSxcbiAgICAvLyBUT0RPOiBUaGVyZSBhcmUgb2NjdXJlbmNlcyB3aGVyZSB0aGlzIGByZXByZXNlbnRhdGlvbkluZm9gIGFycmF5IGNvbnRhaW5zIHVuZGVzaXJlZFxuICAgIC8vIGR1cGxpY2F0ZXMuIFRoaXMgZ2VuZXJhbGx5IG9jY3VycyB3aGVuIHRoZXJlIGFyZSBtdWx0aXBsZSBCYXNlVVJMIG5vZGVzIHRoYXQgYXJlXG4gICAgLy8gZGlyZWN0IGNoaWxkcmVuIG9mIHRoZSBNUEQgbm9kZS4gV2hlbiB3ZSBhdHRlbXB0IHRvIHJlc29sdmUgVVJMcyBmcm9tIGEgY29tYmluYXRpb24gb2YgdGhlXG4gICAgLy8gcGFyZW50IEJhc2VVUkwgYW5kIGEgY2hpbGQgQmFzZVVSTCwgYW5kIHRoZSB2YWx1ZSBkb2VzIG5vdCByZXNvbHZlLFxuICAgIC8vIHdlIGVuZCB1cCByZXR1cm5pbmcgdGhlIGNoaWxkIEJhc2VVUkwgbXVsdGlwbGUgdGltZXMuXG4gICAgLy8gV2UgbmVlZCB0byBkZXRlcm1pbmUgYSB3YXkgdG8gcmVtb3ZlIHRoZXNlIGR1cGxpY2F0ZXMgaW4gYSBzYWZlIHdheS5cbiAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS92aWRlb2pzL21wZC1wYXJzZXIvcHVsbC8xNyNkaXNjdXNzaW9uX3IxNjI3NTA1MjdcbiAgICByZXByZXNlbnRhdGlvbkluZm86IGZsYXR0ZW4ocGVyaW9kcy5tYXAodG9BZGFwdGF0aW9uU2V0cyhtcGRBdHRyaWJ1dGVzLCBtcGRCYXNlVXJscykpKSxcbiAgICBldmVudFN0cmVhbTogZmxhdHRlbihwZXJpb2RzLm1hcCh0b0V2ZW50U3RyZWFtKSlcbiAgfTtcbn07XG5cbmNvbnN0IHN0cmluZ1RvTXBkWG1sID0gbWFuaWZlc3RTdHJpbmcgPT4ge1xuICBpZiAobWFuaWZlc3RTdHJpbmcgPT09ICcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGVycm9ycy5EQVNIX0VNUFRZX01BTklGRVNUKTtcbiAgfVxuXG4gIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgbGV0IHhtbDtcbiAgbGV0IG1wZDtcblxuICB0cnkge1xuICAgIHhtbCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcobWFuaWZlc3RTdHJpbmcsICdhcHBsaWNhdGlvbi94bWwnKTtcbiAgICBtcGQgPSB4bWwgJiYgeG1sLmRvY3VtZW50RWxlbWVudC50YWdOYW1lID09PSAnTVBEJyA/IHhtbC5kb2N1bWVudEVsZW1lbnQgOiBudWxsO1xuICB9IGNhdGNoIChlKSB7Ly8gaWUgMTEgdGhyb3dzIG9uIGludmFsaWQgeG1sXG4gIH1cblxuICBpZiAoIW1wZCB8fCBtcGQgJiYgbXBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdwYXJzZXJlcnJvcicpLmxlbmd0aCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JzLkRBU0hfSU5WQUxJRF9YTUwpO1xuICB9XG5cbiAgcmV0dXJuIG1wZDtcbn07XG5cbi8qKlxuICogUGFyc2VzIHRoZSBtYW5pZmVzdCBmb3IgYSBVVENUaW1pbmcgbm9kZSwgcmV0dXJuaW5nIHRoZSBub2RlcyBhdHRyaWJ1dGVzIGlmIGZvdW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1wZFxuICogICAgICAgIFhNTCBzdHJpbmcgb2YgdGhlIE1QRCBtYW5pZmVzdFxuICogQHJldHVybiB7T2JqZWN0fG51bGx9XG4gKiAgICAgICAgIEF0dHJpYnV0ZXMgb2YgVVRDVGltaW5nIG5vZGUgc3BlY2lmaWVkIGluIHRoZSBtYW5pZmVzdC4gTnVsbCBpZiBub25lIGZvdW5kXG4gKi9cblxuY29uc3QgcGFyc2VVVENUaW1pbmdTY2hlbWUgPSBtcGQgPT4ge1xuICBjb25zdCBVVENUaW1pbmdOb2RlID0gZmluZENoaWxkcmVuKG1wZCwgJ1VUQ1RpbWluZycpWzBdO1xuXG4gIGlmICghVVRDVGltaW5nTm9kZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgYXR0cmlidXRlcyA9IHBhcnNlQXR0cmlidXRlcyhVVENUaW1pbmdOb2RlKTtcblxuICBzd2l0Y2ggKGF0dHJpYnV0ZXMuc2NoZW1lSWRVcmkpIHtcbiAgICBjYXNlICd1cm46bXBlZzpkYXNoOnV0YzpodHRwLWhlYWQ6MjAxNCc6XG4gICAgY2FzZSAndXJuOm1wZWc6ZGFzaDp1dGM6aHR0cC1oZWFkOjIwMTInOlxuICAgICAgYXR0cmlidXRlcy5tZXRob2QgPSAnSEVBRCc7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3VybjptcGVnOmRhc2g6dXRjOmh0dHAteHNkYXRlOjIwMTQnOlxuICAgIGNhc2UgJ3VybjptcGVnOmRhc2g6dXRjOmh0dHAtaXNvOjIwMTQnOlxuICAgIGNhc2UgJ3VybjptcGVnOmRhc2g6dXRjOmh0dHAteHNkYXRlOjIwMTInOlxuICAgIGNhc2UgJ3VybjptcGVnOmRhc2g6dXRjOmh0dHAtaXNvOjIwMTInOlxuICAgICAgYXR0cmlidXRlcy5tZXRob2QgPSAnR0VUJztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAndXJuOm1wZWc6ZGFzaDp1dGM6ZGlyZWN0OjIwMTQnOlxuICAgIGNhc2UgJ3VybjptcGVnOmRhc2g6dXRjOmRpcmVjdDoyMDEyJzpcbiAgICAgIGF0dHJpYnV0ZXMubWV0aG9kID0gJ0RJUkVDVCc7XG4gICAgICBhdHRyaWJ1dGVzLnZhbHVlID0gRGF0ZS5wYXJzZShhdHRyaWJ1dGVzLnZhbHVlKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAndXJuOm1wZWc6ZGFzaDp1dGM6aHR0cC1udHA6MjAxNCc6XG4gICAgY2FzZSAndXJuOm1wZWc6ZGFzaDp1dGM6bnRwOjIwMTQnOlxuICAgIGNhc2UgJ3VybjptcGVnOmRhc2g6dXRjOnNudHA6MjAxNCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcnMuVU5TVVBQT1JURURfVVRDX1RJTUlOR19TQ0hFTUUpO1xuICB9XG5cbiAgcmV0dXJuIGF0dHJpYnV0ZXM7XG59O1xuXG5jb25zdCBWRVJTSU9OID0gdmVyc2lvbjtcbi8qXG4gKiBHaXZlbiBhIERBU0ggbWFuaWZlc3Qgc3RyaW5nIGFuZCBvcHRpb25zLCBwYXJzZXMgdGhlIERBU0ggbWFuaWZlc3QgaW50byBhbiBvYmplY3QgaW4gdGhlXG4gKiBmb3JtIG91dHB1dGVkIGJ5IG0zdTgtcGFyc2VyIGFuZCBhY2NlcHRlZCBieSB2aWRlb2pzL2h0dHAtc3RyZWFtaW5nLlxuICpcbiAqIEZvciBsaXZlIERBU0ggbWFuaWZlc3RzLCBpZiBgcHJldmlvdXNNYW5pZmVzdGAgaXMgcHJvdmlkZWQgaW4gb3B0aW9ucywgdGhlbiB0aGUgbmV3bHlcbiAqIHBhcnNlZCBEQVNIIG1hbmlmZXN0IHdpbGwgaGF2ZSBpdHMgbWVkaWEgc2VxdWVuY2UgYW5kIGRpc2NvbnRpbnVpdHkgc2VxdWVuY2UgdmFsdWVzXG4gKiB1cGRhdGVkIHRvIHJlZmxlY3QgaXRzIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSBwcmlvciBtYW5pZmVzdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWFuaWZlc3RTdHJpbmcgLSB0aGUgREFTSCBtYW5pZmVzdCBhcyBhIHN0cmluZ1xuICogQHBhcmFtIHtvcHRpb25zfSBbb3B0aW9uc10gLSBhbnkgb3B0aW9uc1xuICpcbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIG1hbmlmZXN0IG9iamVjdFxuICovXG5cbmNvbnN0IHBhcnNlID0gKG1hbmlmZXN0U3RyaW5nLCBvcHRpb25zID0ge30pID0+IHtcbiAgY29uc3QgcGFyc2VkTWFuaWZlc3RJbmZvID0gaW5oZXJpdEF0dHJpYnV0ZXMoc3RyaW5nVG9NcGRYbWwobWFuaWZlc3RTdHJpbmcpLCBvcHRpb25zKTtcbiAgY29uc3QgcGxheWxpc3RzID0gdG9QbGF5bGlzdHMocGFyc2VkTWFuaWZlc3RJbmZvLnJlcHJlc2VudGF0aW9uSW5mbyk7XG4gIHJldHVybiB0b00zdTgoe1xuICAgIGRhc2hQbGF5bGlzdHM6IHBsYXlsaXN0cyxcbiAgICBsb2NhdGlvbnM6IHBhcnNlZE1hbmlmZXN0SW5mby5sb2NhdGlvbnMsXG4gICAgY29udGVudFN0ZWVyaW5nOiBwYXJzZWRNYW5pZmVzdEluZm8uY29udGVudFN0ZWVyaW5nSW5mbyxcbiAgICBzaWR4TWFwcGluZzogb3B0aW9ucy5zaWR4TWFwcGluZyxcbiAgICBwcmV2aW91c01hbmlmZXN0OiBvcHRpb25zLnByZXZpb3VzTWFuaWZlc3QsXG4gICAgZXZlbnRTdHJlYW06IHBhcnNlZE1hbmlmZXN0SW5mby5ldmVudFN0cmVhbVxuICB9KTtcbn07XG4vKipcbiAqIFBhcnNlcyB0aGUgbWFuaWZlc3QgZm9yIGEgVVRDVGltaW5nIG5vZGUsIHJldHVybmluZyB0aGUgbm9kZXMgYXR0cmlidXRlcyBpZiBmb3VuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtYW5pZmVzdFN0cmluZ1xuICogICAgICAgIFhNTCBzdHJpbmcgb2YgdGhlIE1QRCBtYW5pZmVzdFxuICogQHJldHVybiB7T2JqZWN0fG51bGx9XG4gKiAgICAgICAgIEF0dHJpYnV0ZXMgb2YgVVRDVGltaW5nIG5vZGUgc3BlY2lmaWVkIGluIHRoZSBtYW5pZmVzdC4gTnVsbCBpZiBub25lIGZvdW5kXG4gKi9cblxuXG5jb25zdCBwYXJzZVVUQ1RpbWluZyA9IG1hbmlmZXN0U3RyaW5nID0+IHBhcnNlVVRDVGltaW5nU2NoZW1lKHN0cmluZ1RvTXBkWG1sKG1hbmlmZXN0U3RyaW5nKSk7XG5cbmV4cG9ydCB7IFZFUlNJT04sIGFkZFNpZHhTZWdtZW50c1RvUGxheWxpc3QkMSBhcyBhZGRTaWR4U2VnbWVudHNUb1BsYXlsaXN0LCBnZW5lcmF0ZVNpZHhLZXksIGluaGVyaXRBdHRyaWJ1dGVzLCBwYXJzZSwgcGFyc2VVVENUaW1pbmcsIHN0cmluZ1RvTXBkWG1sLCB0b00zdTgsIHRvUGxheWxpc3RzIH07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gXCJtcGQtcGFyc2VyXCI7XG5leHBvcnQgdmFyIGdldFBhcnNlZE1hbmlmZXN0ID0gZnVuY3Rpb24gKG1hbmlmZXN0VXJpKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBtYW5pZmVzdFJlc3BvbnNlLCBtYW5pZmVzdCwgcGFyc2VkTWFuaWZlc3QsIGNvZGVjcywgc2VnbWVudHMsIGluaXRpYWxpemF0aW9uU2VnbWVudDtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2gobWFuaWZlc3RVcmkpXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBtYW5pZmVzdFJlc3BvbnNlID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG1hbmlmZXN0UmVzcG9uc2UudGV4dCgpXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBtYW5pZmVzdCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRNYW5pZmVzdCA9IHBhcnNlKG1hbmlmZXN0KTtcbiAgICAgICAgICAgICAgICBjb2RlY3MgPSBwYXJzZWRNYW5pZmVzdC5wbGF5bGlzdHNbMF0uYXR0cmlidXRlcy5DT0RFQ1M7XG4gICAgICAgICAgICAgICAgc2VnbWVudHMgPSBwYXJzZWRNYW5pZmVzdC5wbGF5bGlzdHNbMF0uc2VnbWVudHMubWFwKGZ1bmN0aW9uIChzZWdtZW50KSB7IHJldHVybiBcIi4vbWVkaWEvXCIuY29uY2F0KHNlZ21lbnQudXJpKTsgfSk7XG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6YXRpb25TZWdtZW50ID0gXCIuL21lZGlhL1wiLmNvbmNhdChwYXJzZWRNYW5pZmVzdC5wbGF5bGlzdHNbMF0uc2VnbWVudHNbMF0ubWFwLnVyaSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHsgY29kZWNzOiBjb2RlY3MsIHNlZ21lbnRzOiBzZWdtZW50cywgaW5pdGlhbGl6YXRpb25TZWdtZW50OiBpbml0aWFsaXphdGlvblNlZ21lbnQgfV07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9O1xuIiwiLy8gc2VlIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMxODA4XG5cbihmdW5jdGlvbiAocm9vdCkge1xuICB2YXIgVVJMX1JFR0VYID1cbiAgICAvXig/PSgoPzpbYS16QS1aMC05K1xcLS5dKzopPykpXFwxKD89KCg/OlxcL1xcL1teXFwvPyNdKik/KSlcXDIoPz0oKD86KD86W14/I1xcL10qXFwvKSpbXjs/I1xcL10qKT8pKVxcMygoPzo7W14/I10qKT8pKFxcP1teI10qKT8oI1teXSopPyQvO1xuICB2YXIgRklSU1RfU0VHTUVOVF9SRUdFWCA9IC9eKD89KFteXFwvPyNdKikpXFwxKFteXSopJC87XG4gIHZhciBTTEFTSF9ET1RfUkVHRVggPSAvKD86XFwvfF4pXFwuKD89XFwvKS9nO1xuICB2YXIgU0xBU0hfRE9UX0RPVF9SRUdFWCA9IC8oPzpcXC98XilcXC5cXC5cXC8oPyFcXC5cXC5cXC8pW15cXC9dKig/PVxcLykvZztcblxuICB2YXIgVVJMVG9vbGtpdCA9IHtcbiAgICAvLyBJZiBvcHRzLmFsd2F5c05vcm1hbGl6ZSBpcyB0cnVlIHRoZW4gdGhlIHBhdGggd2lsbCBhbHdheXMgYmUgbm9ybWFsaXplZCBldmVuIHdoZW4gaXQgc3RhcnRzIHdpdGggLyBvciAvL1xuICAgIC8vIEUuZ1xuICAgIC8vIFdpdGggb3B0cy5hbHdheXNOb3JtYWxpemUgPSBmYWxzZSAoZGVmYXVsdCwgc3BlYyBjb21wbGlhbnQpXG4gICAgLy8gaHR0cDovL2EuY29tL2IvY2QgKyAvZS9mLy4uL2cgPT4gaHR0cDovL2EuY29tL2UvZi8uLi9nXG4gICAgLy8gV2l0aCBvcHRzLmFsd2F5c05vcm1hbGl6ZSA9IHRydWUgKG5vdCBzcGVjIGNvbXBsaWFudClcbiAgICAvLyBodHRwOi8vYS5jb20vYi9jZCArIC9lL2YvLi4vZyA9PiBodHRwOi8vYS5jb20vZS9nXG4gICAgYnVpbGRBYnNvbHV0ZVVSTDogZnVuY3Rpb24gKGJhc2VVUkwsIHJlbGF0aXZlVVJMLCBvcHRzKSB7XG4gICAgICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgICAgIC8vIHJlbW92ZSBhbnkgcmVtYWluaW5nIHNwYWNlIGFuZCBDUkxGXG4gICAgICBiYXNlVVJMID0gYmFzZVVSTC50cmltKCk7XG4gICAgICByZWxhdGl2ZVVSTCA9IHJlbGF0aXZlVVJMLnRyaW0oKTtcbiAgICAgIGlmICghcmVsYXRpdmVVUkwpIHtcbiAgICAgICAgLy8gMmEpIElmIHRoZSBlbWJlZGRlZCBVUkwgaXMgZW50aXJlbHkgZW1wdHksIGl0IGluaGVyaXRzIHRoZVxuICAgICAgICAvLyBlbnRpcmUgYmFzZSBVUkwgKGkuZS4sIGlzIHNldCBlcXVhbCB0byB0aGUgYmFzZSBVUkwpXG4gICAgICAgIC8vIGFuZCB3ZSBhcmUgZG9uZS5cbiAgICAgICAgaWYgKCFvcHRzLmFsd2F5c05vcm1hbGl6ZSkge1xuICAgICAgICAgIHJldHVybiBiYXNlVVJMO1xuICAgICAgICB9XG4gICAgICAgIHZhciBiYXNlUGFydHNGb3JOb3JtYWxpc2UgPSBVUkxUb29sa2l0LnBhcnNlVVJMKGJhc2VVUkwpO1xuICAgICAgICBpZiAoIWJhc2VQYXJ0c0Zvck5vcm1hbGlzZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgdHJ5aW5nIHRvIHBhcnNlIGJhc2UgVVJMLicpO1xuICAgICAgICB9XG4gICAgICAgIGJhc2VQYXJ0c0Zvck5vcm1hbGlzZS5wYXRoID0gVVJMVG9vbGtpdC5ub3JtYWxpemVQYXRoKFxuICAgICAgICAgIGJhc2VQYXJ0c0Zvck5vcm1hbGlzZS5wYXRoXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBVUkxUb29sa2l0LmJ1aWxkVVJMRnJvbVBhcnRzKGJhc2VQYXJ0c0Zvck5vcm1hbGlzZSk7XG4gICAgICB9XG4gICAgICB2YXIgcmVsYXRpdmVQYXJ0cyA9IFVSTFRvb2xraXQucGFyc2VVUkwocmVsYXRpdmVVUkwpO1xuICAgICAgaWYgKCFyZWxhdGl2ZVBhcnRzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgdHJ5aW5nIHRvIHBhcnNlIHJlbGF0aXZlIFVSTC4nKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZWxhdGl2ZVBhcnRzLnNjaGVtZSkge1xuICAgICAgICAvLyAyYikgSWYgdGhlIGVtYmVkZGVkIFVSTCBzdGFydHMgd2l0aCBhIHNjaGVtZSBuYW1lLCBpdCBpc1xuICAgICAgICAvLyBpbnRlcnByZXRlZCBhcyBhbiBhYnNvbHV0ZSBVUkwgYW5kIHdlIGFyZSBkb25lLlxuICAgICAgICBpZiAoIW9wdHMuYWx3YXlzTm9ybWFsaXplKSB7XG4gICAgICAgICAgcmV0dXJuIHJlbGF0aXZlVVJMO1xuICAgICAgICB9XG4gICAgICAgIHJlbGF0aXZlUGFydHMucGF0aCA9IFVSTFRvb2xraXQubm9ybWFsaXplUGF0aChyZWxhdGl2ZVBhcnRzLnBhdGgpO1xuICAgICAgICByZXR1cm4gVVJMVG9vbGtpdC5idWlsZFVSTEZyb21QYXJ0cyhyZWxhdGl2ZVBhcnRzKTtcbiAgICAgIH1cbiAgICAgIHZhciBiYXNlUGFydHMgPSBVUkxUb29sa2l0LnBhcnNlVVJMKGJhc2VVUkwpO1xuICAgICAgaWYgKCFiYXNlUGFydHMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciB0cnlpbmcgdG8gcGFyc2UgYmFzZSBVUkwuJyk7XG4gICAgICB9XG4gICAgICBpZiAoIWJhc2VQYXJ0cy5uZXRMb2MgJiYgYmFzZVBhcnRzLnBhdGggJiYgYmFzZVBhcnRzLnBhdGhbMF0gIT09ICcvJykge1xuICAgICAgICAvLyBJZiBuZXRMb2MgbWlzc2luZyBhbmQgcGF0aCBkb2Vzbid0IHN0YXJ0IHdpdGggJy8nLCBhc3N1bWUgZXZlcnRoaW5nIGJlZm9yZSB0aGUgZmlyc3QgJy8nIGlzIHRoZSBuZXRMb2NcbiAgICAgICAgLy8gVGhpcyBjYXVzZXMgJ2V4YW1wbGUuY29tL2EnIHRvIGJlIGhhbmRsZWQgYXMgJy8vZXhhbXBsZS5jb20vYScgaW5zdGVhZCBvZiAnL2V4YW1wbGUuY29tL2EnXG4gICAgICAgIHZhciBwYXRoUGFydHMgPSBGSVJTVF9TRUdNRU5UX1JFR0VYLmV4ZWMoYmFzZVBhcnRzLnBhdGgpO1xuICAgICAgICBiYXNlUGFydHMubmV0TG9jID0gcGF0aFBhcnRzWzFdO1xuICAgICAgICBiYXNlUGFydHMucGF0aCA9IHBhdGhQYXJ0c1syXTtcbiAgICAgIH1cbiAgICAgIGlmIChiYXNlUGFydHMubmV0TG9jICYmICFiYXNlUGFydHMucGF0aCkge1xuICAgICAgICBiYXNlUGFydHMucGF0aCA9ICcvJztcbiAgICAgIH1cbiAgICAgIHZhciBidWlsdFBhcnRzID0ge1xuICAgICAgICAvLyAyYykgT3RoZXJ3aXNlLCB0aGUgZW1iZWRkZWQgVVJMIGluaGVyaXRzIHRoZSBzY2hlbWUgb2ZcbiAgICAgICAgLy8gdGhlIGJhc2UgVVJMLlxuICAgICAgICBzY2hlbWU6IGJhc2VQYXJ0cy5zY2hlbWUsXG4gICAgICAgIG5ldExvYzogcmVsYXRpdmVQYXJ0cy5uZXRMb2MsXG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIHBhcmFtczogcmVsYXRpdmVQYXJ0cy5wYXJhbXMsXG4gICAgICAgIHF1ZXJ5OiByZWxhdGl2ZVBhcnRzLnF1ZXJ5LFxuICAgICAgICBmcmFnbWVudDogcmVsYXRpdmVQYXJ0cy5mcmFnbWVudCxcbiAgICAgIH07XG4gICAgICBpZiAoIXJlbGF0aXZlUGFydHMubmV0TG9jKSB7XG4gICAgICAgIC8vIDMpIElmIHRoZSBlbWJlZGRlZCBVUkwncyA8bmV0X2xvYz4gaXMgbm9uLWVtcHR5LCB3ZSBza2lwIHRvXG4gICAgICAgIC8vIFN0ZXAgNy4gIE90aGVyd2lzZSwgdGhlIGVtYmVkZGVkIFVSTCBpbmhlcml0cyB0aGUgPG5ldF9sb2M+XG4gICAgICAgIC8vIChpZiBhbnkpIG9mIHRoZSBiYXNlIFVSTC5cbiAgICAgICAgYnVpbHRQYXJ0cy5uZXRMb2MgPSBiYXNlUGFydHMubmV0TG9jO1xuICAgICAgICAvLyA0KSBJZiB0aGUgZW1iZWRkZWQgVVJMIHBhdGggaXMgcHJlY2VkZWQgYnkgYSBzbGFzaCBcIi9cIiwgdGhlXG4gICAgICAgIC8vIHBhdGggaXMgbm90IHJlbGF0aXZlIGFuZCB3ZSBza2lwIHRvIFN0ZXAgNy5cbiAgICAgICAgaWYgKHJlbGF0aXZlUGFydHMucGF0aFswXSAhPT0gJy8nKSB7XG4gICAgICAgICAgaWYgKCFyZWxhdGl2ZVBhcnRzLnBhdGgpIHtcbiAgICAgICAgICAgIC8vIDUpIElmIHRoZSBlbWJlZGRlZCBVUkwgcGF0aCBpcyBlbXB0eSAoYW5kIG5vdCBwcmVjZWRlZCBieSBhXG4gICAgICAgICAgICAvLyBzbGFzaCksIHRoZW4gdGhlIGVtYmVkZGVkIFVSTCBpbmhlcml0cyB0aGUgYmFzZSBVUkwgcGF0aFxuICAgICAgICAgICAgYnVpbHRQYXJ0cy5wYXRoID0gYmFzZVBhcnRzLnBhdGg7XG4gICAgICAgICAgICAvLyA1YSkgaWYgdGhlIGVtYmVkZGVkIFVSTCdzIDxwYXJhbXM+IGlzIG5vbi1lbXB0eSwgd2Ugc2tpcCB0b1xuICAgICAgICAgICAgLy8gc3RlcCA3OyBvdGhlcndpc2UsIGl0IGluaGVyaXRzIHRoZSA8cGFyYW1zPiBvZiB0aGUgYmFzZVxuICAgICAgICAgICAgLy8gVVJMIChpZiBhbnkpIGFuZFxuICAgICAgICAgICAgaWYgKCFyZWxhdGl2ZVBhcnRzLnBhcmFtcykge1xuICAgICAgICAgICAgICBidWlsdFBhcnRzLnBhcmFtcyA9IGJhc2VQYXJ0cy5wYXJhbXM7XG4gICAgICAgICAgICAgIC8vIDViKSBpZiB0aGUgZW1iZWRkZWQgVVJMJ3MgPHF1ZXJ5PiBpcyBub24tZW1wdHksIHdlIHNraXAgdG9cbiAgICAgICAgICAgICAgLy8gc3RlcCA3OyBvdGhlcndpc2UsIGl0IGluaGVyaXRzIHRoZSA8cXVlcnk+IG9mIHRoZSBiYXNlXG4gICAgICAgICAgICAgIC8vIFVSTCAoaWYgYW55KSBhbmQgd2Ugc2tpcCB0byBzdGVwIDcuXG4gICAgICAgICAgICAgIGlmICghcmVsYXRpdmVQYXJ0cy5xdWVyeSkge1xuICAgICAgICAgICAgICAgIGJ1aWx0UGFydHMucXVlcnkgPSBiYXNlUGFydHMucXVlcnk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gNikgVGhlIGxhc3Qgc2VnbWVudCBvZiB0aGUgYmFzZSBVUkwncyBwYXRoIChhbnl0aGluZ1xuICAgICAgICAgICAgLy8gZm9sbG93aW5nIHRoZSByaWdodG1vc3Qgc2xhc2ggXCIvXCIsIG9yIHRoZSBlbnRpcmUgcGF0aCBpZiBub1xuICAgICAgICAgICAgLy8gc2xhc2ggaXMgcHJlc2VudCkgaXMgcmVtb3ZlZCBhbmQgdGhlIGVtYmVkZGVkIFVSTCdzIHBhdGggaXNcbiAgICAgICAgICAgIC8vIGFwcGVuZGVkIGluIGl0cyBwbGFjZS5cbiAgICAgICAgICAgIHZhciBiYXNlVVJMUGF0aCA9IGJhc2VQYXJ0cy5wYXRoO1xuICAgICAgICAgICAgdmFyIG5ld1BhdGggPVxuICAgICAgICAgICAgICBiYXNlVVJMUGF0aC5zdWJzdHJpbmcoMCwgYmFzZVVSTFBhdGgubGFzdEluZGV4T2YoJy8nKSArIDEpICtcbiAgICAgICAgICAgICAgcmVsYXRpdmVQYXJ0cy5wYXRoO1xuICAgICAgICAgICAgYnVpbHRQYXJ0cy5wYXRoID0gVVJMVG9vbGtpdC5ub3JtYWxpemVQYXRoKG5ld1BhdGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGJ1aWx0UGFydHMucGF0aCA9PT0gbnVsbCkge1xuICAgICAgICBidWlsdFBhcnRzLnBhdGggPSBvcHRzLmFsd2F5c05vcm1hbGl6ZVxuICAgICAgICAgID8gVVJMVG9vbGtpdC5ub3JtYWxpemVQYXRoKHJlbGF0aXZlUGFydHMucGF0aClcbiAgICAgICAgICA6IHJlbGF0aXZlUGFydHMucGF0aDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBVUkxUb29sa2l0LmJ1aWxkVVJMRnJvbVBhcnRzKGJ1aWx0UGFydHMpO1xuICAgIH0sXG4gICAgcGFyc2VVUkw6IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgIHZhciBwYXJ0cyA9IFVSTF9SRUdFWC5leGVjKHVybCk7XG4gICAgICBpZiAoIXBhcnRzKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2NoZW1lOiBwYXJ0c1sxXSB8fCAnJyxcbiAgICAgICAgbmV0TG9jOiBwYXJ0c1syXSB8fCAnJyxcbiAgICAgICAgcGF0aDogcGFydHNbM10gfHwgJycsXG4gICAgICAgIHBhcmFtczogcGFydHNbNF0gfHwgJycsXG4gICAgICAgIHF1ZXJ5OiBwYXJ0c1s1XSB8fCAnJyxcbiAgICAgICAgZnJhZ21lbnQ6IHBhcnRzWzZdIHx8ICcnLFxuICAgICAgfTtcbiAgICB9LFxuICAgIG5vcm1hbGl6ZVBhdGg6IGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgICAvLyBUaGUgZm9sbG93aW5nIG9wZXJhdGlvbnMgYXJlXG4gICAgICAvLyB0aGVuIGFwcGxpZWQsIGluIG9yZGVyLCB0byB0aGUgbmV3IHBhdGg6XG4gICAgICAvLyA2YSkgQWxsIG9jY3VycmVuY2VzIG9mIFwiLi9cIiwgd2hlcmUgXCIuXCIgaXMgYSBjb21wbGV0ZSBwYXRoXG4gICAgICAvLyBzZWdtZW50LCBhcmUgcmVtb3ZlZC5cbiAgICAgIC8vIDZiKSBJZiB0aGUgcGF0aCBlbmRzIHdpdGggXCIuXCIgYXMgYSBjb21wbGV0ZSBwYXRoIHNlZ21lbnQsXG4gICAgICAvLyB0aGF0IFwiLlwiIGlzIHJlbW92ZWQuXG4gICAgICBwYXRoID0gcGF0aC5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpLnJlcGxhY2UoU0xBU0hfRE9UX1JFR0VYLCAnJyk7XG4gICAgICAvLyA2YykgQWxsIG9jY3VycmVuY2VzIG9mIFwiPHNlZ21lbnQ+Ly4uL1wiLCB3aGVyZSA8c2VnbWVudD4gaXMgYVxuICAgICAgLy8gY29tcGxldGUgcGF0aCBzZWdtZW50IG5vdCBlcXVhbCB0byBcIi4uXCIsIGFyZSByZW1vdmVkLlxuICAgICAgLy8gUmVtb3ZhbCBvZiB0aGVzZSBwYXRoIHNlZ21lbnRzIGlzIHBlcmZvcm1lZCBpdGVyYXRpdmVseSxcbiAgICAgIC8vIHJlbW92aW5nIHRoZSBsZWZ0bW9zdCBtYXRjaGluZyBwYXR0ZXJuIG9uIGVhY2ggaXRlcmF0aW9uLFxuICAgICAgLy8gdW50aWwgbm8gbWF0Y2hpbmcgcGF0dGVybiByZW1haW5zLlxuICAgICAgLy8gNmQpIElmIHRoZSBwYXRoIGVuZHMgd2l0aCBcIjxzZWdtZW50Pi8uLlwiLCB3aGVyZSA8c2VnbWVudD4gaXMgYVxuICAgICAgLy8gY29tcGxldGUgcGF0aCBzZWdtZW50IG5vdCBlcXVhbCB0byBcIi4uXCIsIHRoYXRcbiAgICAgIC8vIFwiPHNlZ21lbnQ+Ly4uXCIgaXMgcmVtb3ZlZC5cbiAgICAgIHdoaWxlIChcbiAgICAgICAgcGF0aC5sZW5ndGggIT09IChwYXRoID0gcGF0aC5yZXBsYWNlKFNMQVNIX0RPVF9ET1RfUkVHRVgsICcnKSkubGVuZ3RoXG4gICAgICApIHt9XG4gICAgICByZXR1cm4gcGF0aC5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpO1xuICAgIH0sXG4gICAgYnVpbGRVUkxGcm9tUGFydHM6IGZ1bmN0aW9uIChwYXJ0cykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgcGFydHMuc2NoZW1lICtcbiAgICAgICAgcGFydHMubmV0TG9jICtcbiAgICAgICAgcGFydHMucGF0aCArXG4gICAgICAgIHBhcnRzLnBhcmFtcyArXG4gICAgICAgIHBhcnRzLnF1ZXJ5ICtcbiAgICAgICAgcGFydHMuZnJhZ21lbnRcbiAgICAgICk7XG4gICAgfSxcbiAgfTtcblxuICBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuICAgIG1vZHVsZS5leHBvcnRzID0gVVJMVG9vbGtpdDtcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuICAgIGRlZmluZShbXSwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIFVSTFRvb2xraXQ7XG4gICAgfSk7XG4gIGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JykgZXhwb3J0c1snVVJMVG9vbGtpdCddID0gVVJMVG9vbGtpdDtcbiAgZWxzZSByb290WydVUkxUb29sa2l0J10gPSBVUkxUb29sa2l0O1xufSkodGhpcyk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgeyBnZXRQYXJzZWRNYW5pZmVzdCB9IGZyb20gXCIuL3NyYy9tcGQtcGFyc2VyXCI7XG52YXIgaGFuZGxlV2ViVlRUVGV4dFRyYWNrcyA9IGZ1bmN0aW9uICh2aWRlbykgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBwYXJzZVdlYlZUVCh2dHRTdHJpbmcpIHtcbiAgICAgICAgLy8gU3BsaXQgdGhlIFZUVCBzdHJpbmcgaW50byBsaW5lc1xuICAgICAgICB2YXIgbGluZXMgPSB2dHRTdHJpbmcuc3BsaXQoXCJcXG5cIik7XG4gICAgICAgIC8vIFJlZ3VsYXIgZXhwcmVzc2lvbiB0byBtYXRjaCB0aGUgY3VlIHRpbWluZ3NcbiAgICAgICAgdmFyIGN1ZVBhdHRlcm4gPSAvKFxcZHsyfTpcXGR7Mn06XFxkezJ9XFwuXFxkezN9KSAtLT4gKFxcZHsyfTpcXGR7Mn06XFxkezJ9XFwuXFxkezN9KS87XG4gICAgICAgIC8vIEFycmF5IHRvIGhvbGQgYWxsIG91ciBjdWVzXG4gICAgICAgIHZhciBjdWVzID0gW107XG4gICAgICAgIHZhciBjdXJyZW50Q3VlID0gbnVsbDtcbiAgICAgICAgLy8gUHJvY2VzcyB0aGUgbGluZXNcbiAgICAgICAgbGluZXMuZm9yRWFjaChmdW5jdGlvbiAobGluZSkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIGEgY3VlIHRpbWluZ1xuICAgICAgICAgICAgdmFyIGN1ZU1hdGNoID0gbGluZS5tYXRjaChjdWVQYXR0ZXJuKTtcbiAgICAgICAgICAgIGlmIChjdWVNYXRjaCkge1xuICAgICAgICAgICAgICAgIC8vIEZvdW5kIGEgY3VlIHRpbWluZyBsaW5lXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IGN1ZSBvYmplY3RcbiAgICAgICAgICAgICAgICBjdXJyZW50Q3VlID0ge1xuICAgICAgICAgICAgICAgICAgICBzdGFydDogY3VlTWF0Y2hbMV0sXG4gICAgICAgICAgICAgICAgICAgIGVuZDogY3VlTWF0Y2hbMl0sXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjdWVzLnB1c2goY3VycmVudEN1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjdXJyZW50Q3VlICYmIGxpbmUudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgLy8gRm91bmQgYSBjdWUgdGV4dCBsaW5lLCBhcHBlbmQgdG8gY3VycmVudCBjdWUgdGV4dFxuICAgICAgICAgICAgICAgIGN1cnJlbnRDdWUudGV4dCArPSBsaW5lLnRyaW0oKSArIFwiXFxuXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY3VlcztcbiAgICB9XG4gICAgZnVuY3Rpb24gY29udmVydFZ0dFRpbWVUb1NlY29uZHModnR0VGltZSkge1xuICAgICAgICB2YXIgc3BsaXRUaW1lID0gdnR0VGltZS5zcGxpdChcIjpcIik7XG4gICAgICAgIHZhciBob3VycyA9IHBhcnNlSW50KHNwbGl0VGltZVswXSk7XG4gICAgICAgIHZhciBtaW51dGVzID0gcGFyc2VJbnQoc3BsaXRUaW1lWzFdKTtcbiAgICAgICAgdmFyIHNlY29uZHNBbmRNaWxsaXNlY29uZHMgPSBzcGxpdFRpbWVbMl0uc3BsaXQoXCIuXCIpO1xuICAgICAgICB2YXIgc2Vjb25kcyA9IHBhcnNlSW50KHNlY29uZHNBbmRNaWxsaXNlY29uZHNbMF0pO1xuICAgICAgICB2YXIgbWlsbGlzZWNvbmRzID0gcGFyc2VJbnQoc2Vjb25kc0FuZE1pbGxpc2Vjb25kc1sxXSk7XG4gICAgICAgIHJldHVybiBob3VycyAqIDM2MDAgKyBtaW51dGVzICogNjAgKyBzZWNvbmRzICsgbWlsbGlzZWNvbmRzIC8gMTAwMDtcbiAgICB9XG4gICAgdmFyIGZldGNoU3VidGl0bGVzLCBzdWJ0aXRsZXMsIGN1ZXMsIHRyYWNrO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGZldGNoU3VidGl0bGVzID0gZnVuY3Rpb24gKHN1YnRpdGxlc1VSTCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN1YnRpdGxlc1Jlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaChzdWJ0aXRsZXNVUkwpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnRpdGxlc1Jlc3BvbnNlID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgc3VidGl0bGVzUmVzcG9uc2UudGV4dCgpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7IH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2hTdWJ0aXRsZXMoXCIuL21lZGlhL3N1YnRpdGxlcy52dHRcIildO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHN1YnRpdGxlcyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBjdWVzID0gcGFyc2VXZWJWVFQoc3VidGl0bGVzKTtcbiAgICAgICAgICAgICAgICB0cmFjayA9IHZpZGVvLmFkZFRleHRUcmFjayhcInN1YnRpdGxlc1wiLCBcIkVuZ2xpc2hcIiwgXCJlblwiKTtcbiAgICAgICAgICAgICAgICB0cmFjay5tb2RlID0gXCJzaG93aW5nXCI7IC8vIFRoZSB0cmFjayBzaG91bGQgYmUgdmlzaWJsZVxuICAgICAgICAgICAgICAgIGN1ZXMuZm9yRWFjaChmdW5jdGlvbiAoY3VlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGFydFNlY29uZHMgPSBjb252ZXJ0VnR0VGltZVRvU2Vjb25kcyhjdWUuc3RhcnQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZW5kU2Vjb25kcyA9IGNvbnZlcnRWdHRUaW1lVG9TZWNvbmRzKGN1ZS5lbmQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdnR0Q3VlID0gbmV3IFZUVEN1ZShzdGFydFNlY29uZHMsIGVuZFNlY29uZHMsIGN1ZS50ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgdHJhY2suYWRkQ3VlKHZ0dEN1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfTtcbnZhciBzdGFydFBsYXliYWNrID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBnZXRNcDREYXRhKG1wNFVyaSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbXA0UmVzcG9uc2U7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKG1wNFVyaSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBtcDRSZXNwb25zZSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBtcDRSZXNwb25zZS5hcnJheUJ1ZmZlcigpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uU291cmNlT3BlbigpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGksIHNvdXJjZUJ1ZmZlciwgZmlyc3RTZWdtZW50O1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHZpZGVvLnNyYyk7IC8vIFJldm9rZSBPYmplY3QgVVJMIGZvciBnYXJiYWdlIGNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlciA9IG1lZGlhU291cmNlLmFkZFNvdXJjZUJ1ZmZlcihtaW1lQ29kZWMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVlbmRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5leHRTZWdtZW50VXJpLCBuZXh0U2VnbWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoIXNvdXJjZUJ1ZmZlci51cGRhdGluZyAmJiBpICE9PSBzZWdtZW50cy5sZW5ndGgpKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFNlZ21lbnRVcmkgPSBzZWdtZW50c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZ2V0TXA0RGF0YShuZXh0U2VnbWVudFVyaSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFNlZ21lbnQgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hcHBlbmRCdWZmZXIobmV4dFNlZ21lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZWRpYVNvdXJjZS5yZWFkeVN0YXRlID09PSBcIm9wZW5cIiAmJiBpID09PSBzZWdtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhU291cmNlLmVuZE9mU3RyZWFtKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZ2V0TXA0RGF0YShtcDRJbml0aWFsaXphdGlvblVyaSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdFNlZ21lbnQgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYXBwZW5kQnVmZmVyKGZpcnN0U2VnbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB2YXIgdmlkZW8sIF9hLCBjb2RlY3MsIHNlZ21lbnRzLCBpbml0aWFsaXphdGlvblNlZ21lbnQsIG1wNEluaXRpYWxpemF0aW9uVXJpLCBtaW1lQ29kZWMsIG1lZGlhU291cmNlLCB1cmw7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidmlkZW9cIik7XG4gICAgICAgICAgICAgICAgdmlkZW8uc3R5bGUud2lkdGggPSBcIjY0MHB4XCI7XG4gICAgICAgICAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKFwiY29udHJvbHNcIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLmFwcGVuZENoaWxkKHZpZGVvKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBnZXRQYXJzZWRNYW5pZmVzdChcIi4vbWVkaWEvQmlnQnVja0J1bm55Lm1wZFwiKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgX2EgPSBfYi5zZW50KCksIGNvZGVjcyA9IF9hLmNvZGVjcywgc2VnbWVudHMgPSBfYS5zZWdtZW50cywgaW5pdGlhbGl6YXRpb25TZWdtZW50ID0gX2EuaW5pdGlhbGl6YXRpb25TZWdtZW50O1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGhhbmRsZVdlYlZUVFRleHRUcmFja3ModmlkZW8pXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgbXA0SW5pdGlhbGl6YXRpb25VcmkgPSBpbml0aWFsaXphdGlvblNlZ21lbnQ7XG4gICAgICAgICAgICAgICAgbWltZUNvZGVjID0gXCJ2aWRlby9tcDQ7IGNvZGVjcz1cXFwiXCIuY29uY2F0KGNvZGVjcywgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIGlmICghTWVkaWFTb3VyY2UuaXNUeXBlU3VwcG9ydGVkKG1pbWVDb2RlYykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlVuc3VwcG9ydGVkIG1lZGlhIGZvcm1hdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtZWRpYVNvdXJjZSA9IG5ldyBNZWRpYVNvdXJjZSgpO1xuICAgICAgICAgICAgICAgIHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKG1lZGlhU291cmNlKTtcbiAgICAgICAgICAgICAgICB2aWRlby5zcmMgPSB1cmw7XG4gICAgICAgICAgICAgICAgbWVkaWFTb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcihcInNvdXJjZW9wZW5cIiwgb25Tb3VyY2VPcGVuLmJpbmQobWVkaWFTb3VyY2UpKTtcbiAgICAgICAgICAgICAgICB2aWRlby5wbGF5KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfTtcbnN0YXJ0UGxheWJhY2soKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==