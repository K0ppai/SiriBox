"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assets/likeButton.png */ "./src/assets/likeButton.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
  color: white;
}

nav {
  z-index: 8;
  box-shadow: 0 0 10px rgb(28, 231, 131);
}

body {
  background-color: black;
}

#Koppai {
  color: rgb(28, 231, 131);
}

.cmt-img {
  width: 100%;
  height: 100%;
}

#popUp {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  z-index: 10;
  overflow: hidden;
}

#form-title,
#comment-title {
  font-size: 20px;
}

#bg-layer {
  background-color: rgba(0, 0, 0, 0.8);
}

.close-btn {
  font-size: 30px;
  font-weight: 800;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding-right: 20px;
}

#logo {
  width: 100%;
}

#summary p,
.small-fonts {
  font-size: 13px;
  margin: 0;
}

#all-shows {
  font-size: 20px;
}

#comments {
  max-height: 32vh;
  overflow: auto;
}

#comments::-webkit-scrollbar {
  display: none;
}

nav a {
  width: 15%;
  position: relative;
  right: 2.5vw;
}

.shows {
  width: 16vw;
  height: 45vh;
  position: relative;
  background-color: rgb(0, 0, 0, 0.5);
}

.shows .background-image {
  position: absolute;
  background-size: cover;
  opacity: 0.8;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -5;
}

.shows:hover img {
  cursor: pointer;
  opacity: 0.8;
}

.show-titles {
  text-align: center;
  position: absolute;
  top: 0;
  font-size: 20px;
  font-weight: 800;
}

.show-imgs {
  width: 100%;
  height: 70%;
  object-fit: cover;
}

#summary {
  height: 130px;
  overflow: auto;
}

#drop-down {
  width: 15%;
  font-size: 16px;
  padding: 6px;
}

#summary::-webkit-scrollbar {
  display: none;
}

.like-container {
  position: relative;
}

.heart {
  cursor: pointer;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat;
  background-position: left;
  background-size: cover;
  height: 75px;
  width: 75px;
  position: absolute;
  bottom: 20%;
  right: -10%;
}

.likes {
  position: relative;
  left: 50%;
  bottom: 100%;
  width: 100%;
  font-size: 12px;
  font-weight: 600;
}

.btn-outline-success {
  border-color: rgb(28, 231, 131);
  color: rgb(28, 231, 131);
  background-color: rgb(0, 0, 0, 0.5);
}

.btn-outline-success:hover {
  background-color: rgb(28, 231, 131);
  color: black;
}

.fa-heart {
  cursor: pointer;
}

.heart.heart-active {
  animation: animate 0.8s steps(28) 1;
  background-position: right;
}

@keyframes animate {
  0% {
    background-position: left;
  }

  100% {
    background-position: right;
  }
}

#overlay {
  background-color: rgb(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 1;
  z-index: 5;
}

select option:checked {
  background-color: rgb(28, 231, 131);
}

select {
  color: white;
}

select option:hover {
  background-color: rgb(28, 231, 131);
}

#popUp .background-image {
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
}

@media screen and (min-width: 768px) {
  .shows:hover {
    cursor: pointer;
    border: solid 5px rgb(28, 231, 131, 0.5);
    border-radius: 10px;
    overflow: hidden;
    transition: 0.2s;
    background-color: rgb(0, 0, 0, 0.7);
  }
}

@media screen and (max-width: 768px) {
  #logo {
    width: 160%;
    position: relative;
    right: 30%;
  }

  #drop-down {
    position: relative;
    left: 5%;
    width: 30%;
    font-size: 14px;
    padding: 4px;
  }

  #all-shows {
    font-size: 14px;
    align-self: center;
    position: relative;
    left: 5%;
  }

  .shows {
    width: 40vw;
    height: 25vh;
  }

  .show-titles {
    font-size: 12px;
  }

  .heart {
    height: 50px;
    width: 50px;
    bottom: 10%;
    right: -10px;
  }

  .likes {
    font-size: 8px;
    left: 20px;
  }

  .cmt-btn {
    font-size: 12px;
    padding: 20px;
  }

  .cmt-img {
    display: none;
  }

  #summary {
    height: 100px;
  }

  .cmt-show-name {
    font-size: 20px;
    font-weight: 600;
  }

  #comment-title,
  #form-title {
    font-size: 15px;
  }

  #comments {
    max-height: 17vh;
  }
}
`, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Lato', sans-serif;\r\n  color: white;\r\n}\r\n\r\nnav {\r\n  z-index: 8;\r\n  box-shadow: 0 0 10px rgb(28, 231, 131);\r\n}\r\n\r\nbody {\r\n  background-color: black;\r\n}\r\n\r\n#Koppai {\r\n  color: rgb(28, 231, 131);\r\n}\r\n\r\n.cmt-img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n#popUp {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 80vw;\r\n  z-index: 10;\r\n  overflow: hidden;\r\n}\r\n\r\n#form-title,\r\n#comment-title {\r\n  font-size: 20px;\r\n}\r\n\r\n#bg-layer {\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.close-btn {\r\n  font-size: 30px;\r\n  font-weight: 800;\r\n  background: none;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  padding-right: 20px;\r\n}\r\n\r\n#logo {\r\n  width: 100%;\r\n}\r\n\r\n#summary p,\r\n.small-fonts {\r\n  font-size: 13px;\r\n  margin: 0;\r\n}\r\n\r\n#all-shows {\r\n  font-size: 20px;\r\n}\r\n\r\n#comments {\r\n  max-height: 32vh;\r\n  overflow: auto;\r\n}\r\n\r\n#comments::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\nnav a {\r\n  width: 15%;\r\n  position: relative;\r\n  right: 2.5vw;\r\n}\r\n\r\n.shows {\r\n  width: 16vw;\r\n  height: 45vh;\r\n  position: relative;\r\n  background-color: rgb(0, 0, 0, 0.5);\r\n}\r\n\r\n.shows .background-image {\r\n  position: absolute;\r\n  background-size: cover;\r\n  opacity: 0.8;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: -5;\r\n}\r\n\r\n.shows:hover img {\r\n  cursor: pointer;\r\n  opacity: 0.8;\r\n}\r\n\r\n.show-titles {\r\n  text-align: center;\r\n  position: absolute;\r\n  top: 0;\r\n  font-size: 20px;\r\n  font-weight: 800;\r\n}\r\n\r\n.show-imgs {\r\n  width: 100%;\r\n  height: 70%;\r\n  object-fit: cover;\r\n}\r\n\r\n#summary {\r\n  height: 130px;\r\n  overflow: auto;\r\n}\r\n\r\n#drop-down {\r\n  width: 15%;\r\n  font-size: 16px;\r\n  padding: 6px;\r\n}\r\n\r\n#summary::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.like-container {\r\n  position: relative;\r\n}\r\n\r\n.heart {\r\n  cursor: pointer;\r\n  background: url(\"assets/likeButton.png\") no-repeat;\r\n  background-position: left;\r\n  background-size: cover;\r\n  height: 75px;\r\n  width: 75px;\r\n  position: absolute;\r\n  bottom: 20%;\r\n  right: -10%;\r\n}\r\n\r\n.likes {\r\n  position: relative;\r\n  left: 50%;\r\n  bottom: 100%;\r\n  width: 100%;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n}\r\n\r\n.btn-outline-success {\r\n  border-color: rgb(28, 231, 131);\r\n  color: rgb(28, 231, 131);\r\n  background-color: rgb(0, 0, 0, 0.5);\r\n}\r\n\r\n.btn-outline-success:hover {\r\n  background-color: rgb(28, 231, 131);\r\n  color: black;\r\n}\r\n\r\n.fa-heart {\r\n  cursor: pointer;\r\n}\r\n\r\n.heart.heart-active {\r\n  animation: animate 0.8s steps(28) 1;\r\n  background-position: right;\r\n}\r\n\r\n@keyframes animate {\r\n  0% {\r\n    background-position: left;\r\n  }\r\n\r\n  100% {\r\n    background-position: right;\r\n  }\r\n}\r\n\r\n#overlay {\r\n  background-color: rgb(0, 0, 0, 0.8);\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  opacity: 1;\r\n  z-index: 5;\r\n}\r\n\r\nselect option:checked {\r\n  background-color: rgb(28, 231, 131);\r\n}\r\n\r\nselect {\r\n  color: white;\r\n}\r\n\r\nselect option:hover {\r\n  background-color: rgb(28, 231, 131);\r\n}\r\n\r\n#popUp .background-image {\r\n  position: absolute;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: -10;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .shows:hover {\r\n    cursor: pointer;\r\n    border: solid 5px rgb(28, 231, 131, 0.5);\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    transition: 0.2s;\r\n    background-color: rgb(0, 0, 0, 0.7);\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  #logo {\r\n    width: 160%;\r\n    position: relative;\r\n    right: 30%;\r\n  }\r\n\r\n  #drop-down {\r\n    position: relative;\r\n    left: 5%;\r\n    width: 30%;\r\n    font-size: 14px;\r\n    padding: 4px;\r\n  }\r\n\r\n  #all-shows {\r\n    font-size: 14px;\r\n    align-self: center;\r\n    position: relative;\r\n    left: 5%;\r\n  }\r\n\r\n  .shows {\r\n    width: 40vw;\r\n    height: 25vh;\r\n  }\r\n\r\n  .show-titles {\r\n    font-size: 12px;\r\n  }\r\n\r\n  .heart {\r\n    height: 50px;\r\n    width: 50px;\r\n    bottom: 10%;\r\n    right: -10px;\r\n  }\r\n\r\n  .likes {\r\n    font-size: 8px;\r\n    left: 20px;\r\n  }\r\n\r\n  .cmt-btn {\r\n    font-size: 12px;\r\n    padding: 20px;\r\n  }\r\n\r\n  .cmt-img {\r\n    display: none;\r\n  }\r\n\r\n  #summary {\r\n    height: 100px;\r\n  }\r\n\r\n  .cmt-show-name {\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n  }\r\n\r\n  #comment-title,\r\n  #form-title {\r\n    font-size: 15px;\r\n  }\r\n\r\n  #comments {\r\n    max-height: 17vh;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _assets_siribox_removebg_preview_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/siribox-removebg-preview.png */ "./src/assets/siribox-removebg-preview.png");
/* harmony import */ var _modules_getDatafromApi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getDatafromApi.js */ "./src/modules/getDatafromApi.js");
/* harmony import */ var _modules_comment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/comment.js */ "./src/modules/comment.js");
/* harmony import */ var _modules_like_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/like.js */ "./src/modules/like.js");
/* harmony import */ var _modules_showCount_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showCount.js */ "./src/modules/showCount.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_getDatafromApi_js__WEBPACK_IMPORTED_MODULE_2__, _modules_comment_js__WEBPACK_IMPORTED_MODULE_3__]);
([_modules_getDatafromApi_js__WEBPACK_IMPORTED_MODULE_2__, _modules_comment_js__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const logo = document.getElementById('logo');
logo.src = _assets_siribox_removebg_preview_png__WEBPACK_IMPORTED_MODULE_1__;

const convertApiDataToHtml = (data) => {
  const htmlString = data.reverse().map((show) => `
          <div class="col d-flex flex-column mx-2 my-4 p-0 shows align-items-center justify-content-end">
            <div class="background-image" style="background-image: url(${show.image.original});"></div>
            <h1 class="m-0 show-titles text-white p-2">${show.name}</h1>
            <div class="d-flex align-items-center like-container">
              <span class="heart like-btn" id="${show.id}"></span>
              <span class="likes" id="like-count-${show.id}">${(0,_modules_like_js__WEBPACK_IMPORTED_MODULE_4__.appendLikesToDom)(show.id)} likes</span>
            </div>
            <button class="btn btn-outline-success cmt-btn fw-bold w-75 align-self-center px-2 py-1 p-md-1 mb-3" data="${show.id}">Comments</button>
          </div>
      `).join('');
  return htmlString;
};

const allShows = await (0,_modules_getDatafromApi_js__WEBPACK_IMPORTED_MODULE_2__.fetchData)();

const displayShows = async (genre, shows) => {
  await (0,_modules_like_js__WEBPACK_IMPORTED_MODULE_4__.fetchLikesCounts)();

  const htmlString = convertApiDataToHtml(shows);
  const ul = document.getElementById('lists-container');
  ul.innerHTML = htmlString;
  (0,_modules_like_js__WEBPACK_IMPORTED_MODULE_4__.addEventListenerToLikeBtns)();
  (0,_modules_comment_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const numberOfShows = (0,_modules_showCount_js__WEBPACK_IMPORTED_MODULE_5__.countShows)();
  (0,_modules_showCount_js__WEBPACK_IMPORTED_MODULE_5__.showCount)(genre, numberOfShows);
};

displayShows('All Shows', allShows);

const displayShowsByGenre = (genre) => {
  if (genre === 'All Shows') {
    displayShows(genre, allShows);
    return;
  }
  if (genre === 'Choose Genre') {
    return;
  }
  const ShowsByGenre = allShows.filter((show) => show.genres.includes(genre));
  displayShows(genre, ShowsByGenre);
};

const chooseGenre = document.getElementById('drop-down');
chooseGenre.addEventListener('change', (e) => {
  displayShowsByGenre(e.target.value);
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/modules/comment.js":
/*!********************************!*\
  !*** ./src/modules/comment.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addEventListenerToCmtBtns)
/* harmony export */ });
/* harmony import */ var _getDatafromApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDatafromApi.js */ "./src/modules/getDatafromApi.js");
/* harmony import */ var _commentCount_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentCount.js */ "./src/modules/commentCount.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.js */ "./src/modules/data.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_getDatafromApi_js__WEBPACK_IMPORTED_MODULE_0__]);
_getDatafromApi_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const parentElement = document.getElementById('parent-container');
const body = document.querySelector('body');
const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const findShowById = async (id) => {
  const datas = await (0,_getDatafromApi_js__WEBPACK_IMPORTED_MODULE_0__.getData)();
  const show = await datas.find((data) => data.id === Number(id));
  return show;
};

const addEventListenerToCloseBtns = () => {
  const closeBtns = document.querySelectorAll('.close-btn');
  closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
      const popUp = document.getElementById('popUp');
      const overlay = document.getElementById('overlay');
      parentElement.removeChild(popUp);
      parentElement.removeChild(overlay);
      body.style.overflow = 'auto';
    });
  });
};

const postCommentToApi = async (event, nameInput, commentInput) => {
  const requestBody = {
    item_id: event.target.getAttribute('data'),
    username: nameInput.value,
    comment: commentInput.value,
  };
  const request = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(requestBody),
  };
  await fetch(`${baseUrl}/${_data_js__WEBPACK_IMPORTED_MODULE_2__.appId}/comments`, request);
};

const getCommentsFromApi = async (id) => {
  const response = await fetch(`${baseUrl}/${_data_js__WEBPACK_IMPORTED_MODULE_2__.appId}/comments?item_id=${id}`);
  const data = await response.json();
  return data;
};

const changeApiDataToHtml = (data) => {
  const htmlString = data
    .map((element) => `
    <li>
      ${element.creation_date} <strong class="px-1">${element.username}:</strong> ${element.comment}
    </li>
  `).join('');
  return htmlString;
};

const sortCommentsFromLatest = (comments) => {
  const latestComments = comments.reverse();
  return latestComments;
};

const appendCommentsToPopup = async (id) => {
  const ul = document.getElementById('comments');
  ul.innerHTML = '';
  const comments = await getCommentsFromApi(id);

  if (Object.keys(comments)[0] === 'error') {
    ul.innerHTML = 'No comments yet';
  } else {
    const latestComments = sortCommentsFromLatest(comments);
    const li = changeApiDataToHtml(latestComments);
    ul.innerHTML = li;
  }
};

const updateComments = async (id) => {
  const ul = document.getElementById('comments');
  const commentTitle = document.getElementById('comment-title');
  const comments = await getCommentsFromApi(id);
  const latestComments = sortCommentsFromLatest(comments);
  const li = await changeApiDataToHtml(latestComments);
  ul.innerHTML = li;
  commentTitle.textContent = `Comments (${comments.length})`;
};

const addEventListenerToCommentForm = async () => {
  const form = document.querySelector('form');
  const addCmtBtn = document.getElementById('add-cmt-btn');
  const nameInput = document.getElementById('username');
  const commentInput = document.getElementById('usercmt');

  addCmtBtn.addEventListener('click', async (e) => {
    if (nameInput.value === '' || commentInput.value === '') {
      return;
    }
    e.preventDefault();
    await postCommentToApi(e, nameInput, commentInput);
    updateComments(e.target.getAttribute('data'));
    form.reset();
  });
};

const generatePopupCommentBox = async (id) => {
  const show = await findShowById(id);
  const div = document.createElement('div');
  const overlay = document.createElement('div');
  overlay.id = 'overlay';

  div.id = 'popUp';
  div.className = 'rounded-4';
  div.innerHTML = `
    <div id="bg-layer" class="p-md-5 p-2 h-100">
      <div class="row" id="popup-desc">
        <div class="background-image" style="background-image: url(${show.image.original});"></div>
        <div class="col-md-3 d-flex justify-content-center align-items-center">
          <img src="${show.image.original}" alt="${show.name}" class="cmt-img"/>
        </div>
        <div class="col-md-9">
          <div class="d-flex justify-content-between align-items-center p-2 p-md-0">
            <h1 class="cmt-show-name">${show.name}</h1>
            <button class="close-btn p-0">&times;</button>
          </div>
          <div class="d-flex justify-content-around mb-2 m-md-0">
            <span class="small-fonts"><strong>Rating :</strong> ${show.rating.average}</span>
            <span class="small-fonts"><a href="https://www.imdb.com/title/${show.externals.imdb}/"><strong>IMDB :</strong> ${show.externals.imdb}</a></span>
          </div>
          <span class="fs-6 fw-bold py-5 p-md-0">Overview :</span><br>
          <article id="summary" class="small-fonts mb-2">${show.summary}</article>
          <div class="row">
            <div class="col-6">
              <span class="small-fonts"><strong>Genres : </strong>${show.genres}</span><br>
              <span class="small-fonts"><strong>Average Run Time : </strong>${show.averageRuntime}</span><br>
              <span class="small-fonts"><strong>Ended : </strong>${show.ended}</span>
            </div>
            <div class="col-6">
              <span class="small-fonts"><strong>Language : </strong>${show.language}</span><br>
              <span class="small-fonts"><strong>Type : </strong>${show.type}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center p-md-2 mt-md-0" id="popup-cmt-sec">
        <div class="col-md-6 d-flex flex-column align-items-center mt-2">
          <h3 class="p-1"><strong id="comment-title">Latest Comments()</strong></h3>
          <ul class="list-unstyled mb-1" id="comments">
          
          </ul>
        </div>
        <form class="col-md-6 d-flex flex-column align-items-center mt-2">
          <h3 class="p-1" id="form-title"><strong>Add a comment</strong></h3>
          <input id="username" type="text" placeholder="Your name" class="mb-2 form-control w-50 px-2 py-1" required>
          <input id="usercmt" type="text" placeholder="Your comment" class="mb-2 form-control w-50 px-2 py-1" required>
          <button type="submit" data="${id}" class="btn-outline-success btn px-2 py-1 fw-bold" id="add-cmt-btn">Add comment</button>
        <form>
      </div>
    </div>
  `;

  parentElement.append(div, overlay);
  addEventListenerToCloseBtns();
  addEventListenerToCommentForm();
  await appendCommentsToPopup(id);
  await (0,_commentCount_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

const addEventListenerToCmtBtns = async () => {
  const cmtBtns = document.querySelectorAll('.cmt-btn');
  cmtBtns.forEach((cmtBtn) => {
    cmtBtn.addEventListener('click', (e) => {
      generatePopupCommentBox(e.target.getAttribute('data'));
      body.style.overflow = 'hidden';
    });
  });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./src/modules/commentCount.js":
/*!*************************************!*\
  !*** ./src/modules/commentCount.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ commentCounter)
/* harmony export */ });
const commentCounter = async () => {
  const ul = document.getElementById('comments');
  const childCount = ul.childElementCount;
  const commentTitle = document.getElementById('comment-title');
  commentTitle.textContent = `Latest Comments ( ${childCount} )`;
  return childCount;
};


/***/ }),

/***/ "./src/modules/data.js":
/*!*****************************!*\
  !*** ./src/modules/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appId: () => (/* binding */ appId),
/* harmony export */   baseUrl: () => (/* binding */ baseUrl)
/* harmony export */ });
const appId = 'GDekpPn32TvleOW4OoY2';
const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const createAppId = async () => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await response.text();
  return data;
};
createAppId();


/***/ }),

/***/ "./src/modules/getDatafromApi.js":
/*!***************************************!*\
  !*** ./src/modules/getDatafromApi.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchData: () => (/* binding */ fetchData),
/* harmony export */   getData: () => (/* binding */ getData)
/* harmony export */ });
const getData = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const data = await response.json();
  return data;
};

const fetchData = async () => {
  let shows = [];
  shows = await getData();
  return shows;
};
await fetchData();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/modules/like.js":
/*!*****************************!*\
  !*** ./src/modules/like.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addEventListenerToLikeBtns: () => (/* binding */ addEventListenerToLikeBtns),
/* harmony export */   appendLikesToDom: () => (/* binding */ appendLikesToDom),
/* harmony export */   fetchLikesCounts: () => (/* binding */ fetchLikesCounts)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/modules/data.js");


const postLikesToApi = async (event) => {
  const requestBody = {
    item_id: event.target.id,
    like: 0,
  };
  const request = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(requestBody),
  };
  await fetch(`${_data_js__WEBPACK_IMPORTED_MODULE_0__.baseUrl}${_data_js__WEBPACK_IMPORTED_MODULE_0__.appId}/likes`, request);
};

const findRightElement = async (datas, id) => {
  const foundLike = await datas.find((data) => data.item_id === id);
  if (foundLike) return foundLike.likes;
  return 0;
};

const getLikesFromApi = async () => {
  const response = await fetch(`${_data_js__WEBPACK_IMPORTED_MODULE_0__.baseUrl}${_data_js__WEBPACK_IMPORTED_MODULE_0__.appId}/likes`);
  const data = await response.json();
  return data;
};

const addEventListenerToLikeBtns = () => {
  const likeBtns = document.querySelectorAll('.like-btn');
  likeBtns.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      const likeBtn = document.getElementById(e.target.id);
      likeBtn.style.animation = 'animate .8s steps(28) 1';
      likeBtn.style.backgroundPosition = 'right';
      await postLikesToApi(e);
      const data = await getLikesFromApi();
      const foundLike = await findRightElement(data, e.target.id);
      const likeCount = document.getElementById(`like-count-${e.target.id}`);
      likeCount.textContent = `${foundLike} likes`;
      likeBtn.style.animation = 'none';
    });
  });
};

const likesCache = {};

const fetchLikesCounts = async () => {
  if (Object.keys(likesCache).length === 0) {
    const likesFromApi = await getLikesFromApi();

    likesFromApi.map((like) => {
      likesCache[like.item_id] = like.likes;
      return null;
    });
  }
};

const appendLikesToDom = (id) => likesCache[id] || 0;


/***/ }),

/***/ "./src/modules/showCount.js":
/*!**********************************!*\
  !*** ./src/modules/showCount.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   countShows: () => (/* binding */ countShows),
/* harmony export */   showCount: () => (/* binding */ showCount)
/* harmony export */ });
const countShows = () => {
  const container = document.getElementById('lists-container');
  const childCount = container.childElementCount;
  return childCount;
};

const showCount = async (genre, count) => {
  const allShows = document.getElementById('all-shows');
  allShows.textContent = `${genre} ( ${count} )`;
};



/***/ }),

/***/ "./src/assets/likeButton.png":
/*!***********************************!*\
  !*** ./src/assets/likeButton.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "040a34297072bf43d0be.png";

/***/ }),

/***/ "./src/assets/siribox-removebg-preview.png":
/*!*************************************************!*\
  !*** ./src/assets/siribox-removebg-preview.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8692bd15dd98d3fab249.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseUhBQXdDO0FBQ3BGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Ysa0hBQWtIO0FBQ2xILHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFh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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DLGdCQUFnQjtBQUNsRTtBQUNBO0FBQ0EsaUJBQWlCLDZDQUFPLENBQUMsRUFBRSwyQ0FBSyxDQUFDO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0MsNkNBQU8sQ0FBQyxFQUFFLDJDQUFLLENBQUM7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELFlBQVk7QUFDMUUsaUNBQWlDLFdBQVc7QUFDNUM7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsT0FBTyxJQUFJLE9BQU87QUFDOUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZHVsZXMvY29tbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9jb21tZW50Q291bnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZHVsZXMvZGF0YS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9nZXREYXRhZnJvbUFwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9saWtlLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL3Nob3dDb3VudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiYXNzZXRzL2xpa2VCdXR0b24ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgei1pbmRleDogODtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2IoMjgsIDIzMSwgMTMxKTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiNLb3BwYWkge1xyXG4gIGNvbG9yOiByZ2IoMjgsIDIzMSwgMTMxKTtcclxufVxyXG5cclxuLmNtdC1pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI3BvcFVwIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbiNmb3JtLXRpdGxlLFxyXG4jY29tbWVudC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4jYmctbGF5ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxufVxyXG5cclxuLmNsb3NlLWJ0biB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuI2xvZ28ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jc3VtbWFyeSBwLFxyXG4uc21hbGwtZm9udHMge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiNhbGwtc2hvd3Mge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuI2NvbW1lbnRzIHtcclxuICBtYXgtaGVpZ2h0OiAzMnZoO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4jY29tbWVudHM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5uYXYgYSB7XHJcbiAgd2lkdGg6IDE1JTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcmlnaHQ6IDIuNXZ3O1xyXG59XHJcblxyXG4uc2hvd3Mge1xyXG4gIHdpZHRoOiAxNnZ3O1xyXG4gIGhlaWdodDogNDV2aDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5zaG93cyAuYmFja2dyb3VuZC1pbWFnZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAtNTtcclxufVxyXG5cclxuLnNob3dzOmhvdmVyIGltZyB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLnNob3ctdGl0bGVzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLnNob3ctaW1ncyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA3MCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbiNzdW1tYXJ5IHtcclxuICBoZWlnaHQ6IDEzMHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4jZHJvcC1kb3duIHtcclxuICB3aWR0aDogMTUlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiA2cHg7XHJcbn1cclxuXHJcbiNzdW1tYXJ5Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmxpa2UtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5oZWFydCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGhlaWdodDogNzVweDtcclxuICB3aWR0aDogNzVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAyMCU7XHJcbiAgcmlnaHQ6IC0xMCU7XHJcbn1cclxuXHJcbi5saWtlcyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBib3R0b206IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1zdWNjZXNzIHtcclxuICBib3JkZXItY29sb3I6IHJnYigyOCwgMjMxLCAxMzEpO1xyXG4gIGNvbG9yOiByZ2IoMjgsIDIzMSwgMTMxKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOCwgMjMxLCAxMzEpO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmZhLWhlYXJ0IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5oZWFydC5oZWFydC1hY3RpdmUge1xyXG4gIGFuaW1hdGlvbjogYW5pbWF0ZSAwLjhzIHN0ZXBzKDI4KSAxO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xyXG4gIDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuI292ZXJsYXkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjgpO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHotaW5kZXg6IDU7XHJcbn1cclxuXHJcbnNlbGVjdCBvcHRpb246Y2hlY2tlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI4LCAyMzEsIDEzMSk7XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5zZWxlY3Qgb3B0aW9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjgsIDIzMSwgMTMxKTtcclxufVxyXG5cclxuI3BvcFVwIC5iYWNrZ3JvdW5kLWltYWdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAtMTA7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLnNob3dzOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogc29saWQgNXB4IHJnYigyOCwgMjMxLCAxMzEsIDAuNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC43KTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgI2xvZ28ge1xyXG4gICAgd2lkdGg6IDE2MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICByaWdodDogMzAlO1xyXG4gIH1cclxuXHJcbiAgI2Ryb3AtZG93biB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1JTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgfVxyXG5cclxuICAjYWxsLXNob3dzIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDUlO1xyXG4gIH1cclxuXHJcbiAgLnNob3dzIHtcclxuICAgIHdpZHRoOiA0MHZ3O1xyXG4gICAgaGVpZ2h0OiAyNXZoO1xyXG4gIH1cclxuXHJcbiAgLnNob3ctdGl0bGVzIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcblxyXG4gIC5oZWFydCB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGJvdHRvbTogMTAlO1xyXG4gICAgcmlnaHQ6IC0xMHB4O1xyXG4gIH1cclxuXHJcbiAgLmxpa2VzIHtcclxuICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgbGVmdDogMjBweDtcclxuICB9XHJcblxyXG4gIC5jbXQtYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuY210LWltZyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgI3N1bW1hcnkge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICB9XHJcblxyXG4gIC5jbXQtc2hvdy1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuICAjY29tbWVudC10aXRsZSxcclxuICAjZm9ybS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAjY29tbWVudHMge1xyXG4gICAgbWF4LWhlaWdodDogMTd2aDtcclxuICB9XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsK0JBQStCO0VBQy9CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDZEQUFrRDtFQUNsRCx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQix3QkFBd0I7RUFDeEIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osYUFBYTtFQUNiLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2Ysd0NBQXdDO0lBQ3hDLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1DQUFtQztFQUNyQztBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtJQUNWLGVBQWU7SUFDZixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGNBQWM7SUFDZCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTs7SUFFRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0byZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gIHotaW5kZXg6IDg7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2IoMjgsIDIzMSwgMTMxKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuI0tvcHBhaSB7XFxyXFxuICBjb2xvcjogcmdiKDI4LCAyMzEsIDEzMSk7XFxyXFxufVxcclxcblxcclxcbi5jbXQtaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jcG9wVXAge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIHdpZHRoOiA4MHZ3O1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9ybS10aXRsZSxcXHJcXG4jY29tbWVudC10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNiZy1sYXllciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1idG4ge1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ28ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNzdW1tYXJ5IHAsXFxyXFxuLnNtYWxsLWZvbnRzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2FsbC1zaG93cyB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50cyB7XFxyXFxuICBtYXgtaGVpZ2h0OiAzMnZoO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50czo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGEge1xcclxcbiAgd2lkdGg6IDE1JTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHJpZ2h0OiAyLjV2dztcXHJcXG59XFxyXFxuXFxyXFxuLnNob3dzIHtcXHJcXG4gIHdpZHRoOiAxNnZ3O1xcclxcbiAgaGVpZ2h0OiA0NXZoO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbi5zaG93cyAuYmFja2dyb3VuZC1pbWFnZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgb3BhY2l0eTogMC44O1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgei1pbmRleDogLTU7XFxyXFxufVxcclxcblxcclxcbi5zaG93czpob3ZlciBpbWcge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgb3BhY2l0eTogMC44O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy10aXRsZXMge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3ctaW1ncyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNzAlO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblxcclxcbiNzdW1tYXJ5IHtcXHJcXG4gIGhlaWdodDogMTMwcHg7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI2Ryb3AtZG93biB7XFxyXFxuICB3aWR0aDogMTUlO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgcGFkZGluZzogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc3VtbWFyeTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYXJ0IHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiYXNzZXRzL2xpa2VCdXR0b24ucG5nXFxcIikgbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBoZWlnaHQ6IDc1cHg7XFxyXFxuICB3aWR0aDogNzVweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMjAlO1xcclxcbiAgcmlnaHQ6IC0xMCU7XFxyXFxufVxcclxcblxcclxcbi5saWtlcyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICBib3R0b206IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5idG4tb3V0bGluZS1zdWNjZXNzIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiKDI4LCAyMzEsIDEzMSk7XFxyXFxuICBjb2xvcjogcmdiKDI4LCAyMzEsIDEzMSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI4LCAyMzEsIDEzMSk7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5mYS1oZWFydCB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFydC5oZWFydC1hY3RpdmUge1xcclxcbiAgYW5pbWF0aW9uOiBhbmltYXRlIDAuOHMgc3RlcHMoMjgpIDE7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBhbmltYXRlIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuI292ZXJsYXkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuOCk7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICB6LWluZGV4OiA1O1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3Qgb3B0aW9uOmNoZWNrZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI4LCAyMzEsIDEzMSk7XFxyXFxufVxcclxcblxcclxcbnNlbGVjdCB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbnNlbGVjdCBvcHRpb246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI4LCAyMzEsIDEzMSk7XFxyXFxufVxcclxcblxcclxcbiNwb3BVcCAuYmFja2dyb3VuZC1pbWFnZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IC0xMDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5zaG93czpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCA1cHggcmdiKDI4LCAyMzEsIDEzMSwgMC41KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNyk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAjbG9nbyB7XFxyXFxuICAgIHdpZHRoOiAxNjAlO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHJpZ2h0OiAzMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjZHJvcC1kb3duIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBsZWZ0OiA1JTtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBwYWRkaW5nOiA0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjYWxsLXNob3dzIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbGVmdDogNSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2hvd3Mge1xcclxcbiAgICB3aWR0aDogNDB2dztcXHJcXG4gICAgaGVpZ2h0OiAyNXZoO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNob3ctdGl0bGVzIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYXJ0IHtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgYm90dG9tOiAxMCU7XFxyXFxuICAgIHJpZ2h0OiAtMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5saWtlcyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogOHB4O1xcclxcbiAgICBsZWZ0OiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNtdC1idG4ge1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY210LWltZyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjc3VtbWFyeSB7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY210LXNob3ctbmFtZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjb21tZW50LXRpdGxlLFxcclxcbiAgI2Zvcm0tdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjY29tbWVudHMge1xcclxcbiAgICBtYXgtaGVpZ2h0OiAxN3ZoO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IGxvZ29JbWFnZSBmcm9tICcuL2Fzc2V0cy9zaXJpYm94LXJlbW92ZWJnLXByZXZpZXcucG5nJztcbmltcG9ydCB7IGZldGNoRGF0YSB9IGZyb20gJy4vbW9kdWxlcy9nZXREYXRhZnJvbUFwaS5qcyc7XG5pbXBvcnQgYWRkRXZlbnRMaXN0ZW5lclRvQ210QnRucyBmcm9tICcuL21vZHVsZXMvY29tbWVudC5qcyc7XG5pbXBvcnQgeyBhZGRFdmVudExpc3RlbmVyVG9MaWtlQnRucywgYXBwZW5kTGlrZXNUb0RvbSwgZmV0Y2hMaWtlc0NvdW50cyB9IGZyb20gJy4vbW9kdWxlcy9saWtlLmpzJztcbmltcG9ydCB7IGNvdW50U2hvd3MsIHNob3dDb3VudCB9IGZyb20gJy4vbW9kdWxlcy9zaG93Q291bnQuanMnO1xuXG5jb25zdCBsb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ28nKTtcbmxvZ28uc3JjID0gbG9nb0ltYWdlO1xuXG5jb25zdCBjb252ZXJ0QXBpRGF0YVRvSHRtbCA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IGh0bWxTdHJpbmcgPSBkYXRhLnJldmVyc2UoKS5tYXAoKHNob3cpID0+IGBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGQtZmxleCBmbGV4LWNvbHVtbiBteC0yIG15LTQgcC0wIHNob3dzIGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmFja2dyb3VuZC1pbWFnZVwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7c2hvdy5pbWFnZS5vcmlnaW5hbH0pO1wiPjwvZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzPVwibS0wIHNob3ctdGl0bGVzIHRleHQtd2hpdGUgcC0yXCI+JHtzaG93Lm5hbWV9PC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGxpa2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhcnQgbGlrZS1idG5cIiBpZD1cIiR7c2hvdy5pZH1cIj48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGlrZXNcIiBpZD1cImxpa2UtY291bnQtJHtzaG93LmlkfVwiPiR7YXBwZW5kTGlrZXNUb0RvbShzaG93LmlkKX0gbGlrZXM8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBjbXQtYnRuIGZ3LWJvbGQgdy03NSBhbGlnbi1zZWxmLWNlbnRlciBweC0yIHB5LTEgcC1tZC0xIG1iLTNcIiBkYXRhPVwiJHtzaG93LmlkfVwiPkNvbW1lbnRzPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICBgKS5qb2luKCcnKTtcbiAgcmV0dXJuIGh0bWxTdHJpbmc7XG59O1xuXG5jb25zdCBhbGxTaG93cyA9IGF3YWl0IGZldGNoRGF0YSgpO1xuXG5jb25zdCBkaXNwbGF5U2hvd3MgPSBhc3luYyAoZ2VucmUsIHNob3dzKSA9PiB7XG4gIGF3YWl0IGZldGNoTGlrZXNDb3VudHMoKTtcblxuICBjb25zdCBodG1sU3RyaW5nID0gY29udmVydEFwaURhdGFUb0h0bWwoc2hvd3MpO1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0cy1jb250YWluZXInKTtcbiAgdWwuaW5uZXJIVE1MID0gaHRtbFN0cmluZztcbiAgYWRkRXZlbnRMaXN0ZW5lclRvTGlrZUJ0bnMoKTtcbiAgYWRkRXZlbnRMaXN0ZW5lclRvQ210QnRucygpO1xuICBjb25zdCBudW1iZXJPZlNob3dzID0gY291bnRTaG93cygpO1xuICBzaG93Q291bnQoZ2VucmUsIG51bWJlck9mU2hvd3MpO1xufTtcblxuZGlzcGxheVNob3dzKCdBbGwgU2hvd3MnLCBhbGxTaG93cyk7XG5cbmNvbnN0IGRpc3BsYXlTaG93c0J5R2VucmUgPSAoZ2VucmUpID0+IHtcbiAgaWYgKGdlbnJlID09PSAnQWxsIFNob3dzJykge1xuICAgIGRpc3BsYXlTaG93cyhnZW5yZSwgYWxsU2hvd3MpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoZ2VucmUgPT09ICdDaG9vc2UgR2VucmUnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IFNob3dzQnlHZW5yZSA9IGFsbFNob3dzLmZpbHRlcigoc2hvdykgPT4gc2hvdy5nZW5yZXMuaW5jbHVkZXMoZ2VucmUpKTtcbiAgZGlzcGxheVNob3dzKGdlbnJlLCBTaG93c0J5R2VucmUpO1xufTtcblxuY29uc3QgY2hvb3NlR2VucmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcC1kb3duJyk7XG5jaG9vc2VHZW5yZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICBkaXNwbGF5U2hvd3NCeUdlbnJlKGUudGFyZ2V0LnZhbHVlKTtcbn0pOyIsImltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuL2dldERhdGFmcm9tQXBpLmpzJztcbmltcG9ydCBjb21tZW50Q291bnRlciBmcm9tICcuL2NvbW1lbnRDb3VudC5qcyc7XG5pbXBvcnQgeyBhcHBJZCB9IGZyb20gJy4vZGF0YS5qcyc7XG5cbmNvbnN0IHBhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFyZW50LWNvbnRhaW5lcicpO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJztcblxuY29uc3QgZmluZFNob3dCeUlkID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IGRhdGFzID0gYXdhaXQgZ2V0RGF0YSgpO1xuICBjb25zdCBzaG93ID0gYXdhaXQgZGF0YXMuZmluZCgoZGF0YSkgPT4gZGF0YS5pZCA9PT0gTnVtYmVyKGlkKSk7XG4gIHJldHVybiBzaG93O1xufTtcblxuY29uc3QgYWRkRXZlbnRMaXN0ZW5lclRvQ2xvc2VCdG5zID0gKCkgPT4ge1xuICBjb25zdCBjbG9zZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xvc2UtYnRuJyk7XG4gIGNsb3NlQnRucy5mb3JFYWNoKChjbG9zZUJ0bikgPT4ge1xuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgcG9wVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wVXAnKTtcbiAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpO1xuICAgICAgcGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChwb3BVcCk7XG4gICAgICBwYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKG92ZXJsYXkpO1xuICAgICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBwb3N0Q29tbWVudFRvQXBpID0gYXN5bmMgKGV2ZW50LCBuYW1lSW5wdXQsIGNvbW1lbnRJbnB1dCkgPT4ge1xuICBjb25zdCByZXF1ZXN0Qm9keSA9IHtcbiAgICBpdGVtX2lkOiBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhJyksXG4gICAgdXNlcm5hbWU6IG5hbWVJbnB1dC52YWx1ZSxcbiAgICBjb21tZW50OiBjb21tZW50SW5wdXQudmFsdWUsXG4gIH07XG4gIGNvbnN0IHJlcXVlc3QgPSB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkpLFxuICB9O1xuICBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS8ke2FwcElkfS9jb21tZW50c2AsIHJlcXVlc3QpO1xufTtcblxuY29uc3QgZ2V0Q29tbWVudHNGcm9tQXBpID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vJHthcHBJZH0vY29tbWVudHM/aXRlbV9pZD0ke2lkfWApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmNvbnN0IGNoYW5nZUFwaURhdGFUb0h0bWwgPSAoZGF0YSkgPT4ge1xuICBjb25zdCBodG1sU3RyaW5nID0gZGF0YVxuICAgIC5tYXAoKGVsZW1lbnQpID0+IGBcbiAgICA8bGk+XG4gICAgICAke2VsZW1lbnQuY3JlYXRpb25fZGF0ZX0gPHN0cm9uZyBjbGFzcz1cInB4LTFcIj4ke2VsZW1lbnQudXNlcm5hbWV9Ojwvc3Ryb25nPiAke2VsZW1lbnQuY29tbWVudH1cbiAgICA8L2xpPlxuICBgKS5qb2luKCcnKTtcbiAgcmV0dXJuIGh0bWxTdHJpbmc7XG59O1xuXG5jb25zdCBzb3J0Q29tbWVudHNGcm9tTGF0ZXN0ID0gKGNvbW1lbnRzKSA9PiB7XG4gIGNvbnN0IGxhdGVzdENvbW1lbnRzID0gY29tbWVudHMucmV2ZXJzZSgpO1xuICByZXR1cm4gbGF0ZXN0Q29tbWVudHM7XG59O1xuXG5jb25zdCBhcHBlbmRDb21tZW50c1RvUG9wdXAgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudHMnKTtcbiAgdWwuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgZ2V0Q29tbWVudHNGcm9tQXBpKGlkKTtcblxuICBpZiAoT2JqZWN0LmtleXMoY29tbWVudHMpWzBdID09PSAnZXJyb3InKSB7XG4gICAgdWwuaW5uZXJIVE1MID0gJ05vIGNvbW1lbnRzIHlldCc7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbGF0ZXN0Q29tbWVudHMgPSBzb3J0Q29tbWVudHNGcm9tTGF0ZXN0KGNvbW1lbnRzKTtcbiAgICBjb25zdCBsaSA9IGNoYW5nZUFwaURhdGFUb0h0bWwobGF0ZXN0Q29tbWVudHMpO1xuICAgIHVsLmlubmVySFRNTCA9IGxpO1xuICB9XG59O1xuXG5jb25zdCB1cGRhdGVDb21tZW50cyA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50cycpO1xuICBjb25zdCBjb21tZW50VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudC10aXRsZScpO1xuICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGdldENvbW1lbnRzRnJvbUFwaShpZCk7XG4gIGNvbnN0IGxhdGVzdENvbW1lbnRzID0gc29ydENvbW1lbnRzRnJvbUxhdGVzdChjb21tZW50cyk7XG4gIGNvbnN0IGxpID0gYXdhaXQgY2hhbmdlQXBpRGF0YVRvSHRtbChsYXRlc3RDb21tZW50cyk7XG4gIHVsLmlubmVySFRNTCA9IGxpO1xuICBjb21tZW50VGl0bGUudGV4dENvbnRlbnQgPSBgQ29tbWVudHMgKCR7Y29tbWVudHMubGVuZ3RofSlgO1xufTtcblxuY29uc3QgYWRkRXZlbnRMaXN0ZW5lclRvQ29tbWVudEZvcm0gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIGNvbnN0IGFkZENtdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtY210LWJ0bicpO1xuICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcm5hbWUnKTtcbiAgY29uc3QgY29tbWVudElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJjbXQnKTtcblxuICBhZGRDbXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICAgIGlmIChuYW1lSW5wdXQudmFsdWUgPT09ICcnIHx8IGNvbW1lbnRJbnB1dC52YWx1ZSA9PT0gJycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGF3YWl0IHBvc3RDb21tZW50VG9BcGkoZSwgbmFtZUlucHV0LCBjb21tZW50SW5wdXQpO1xuICAgIHVwZGF0ZUNvbW1lbnRzKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YScpKTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gIH0pO1xufTtcblxuY29uc3QgZ2VuZXJhdGVQb3B1cENvbW1lbnRCb3ggPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3Qgc2hvdyA9IGF3YWl0IGZpbmRTaG93QnlJZChpZCk7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG92ZXJsYXkuaWQgPSAnb3ZlcmxheSc7XG5cbiAgZGl2LmlkID0gJ3BvcFVwJztcbiAgZGl2LmNsYXNzTmFtZSA9ICdyb3VuZGVkLTQnO1xuICBkaXYuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgaWQ9XCJiZy1sYXllclwiIGNsYXNzPVwicC1tZC01IHAtMiBoLTEwMFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIGlkPVwicG9wdXAtZGVzY1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmFja2dyb3VuZC1pbWFnZVwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7c2hvdy5pbWFnZS5vcmlnaW5hbH0pO1wiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTMgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIke3Nob3cuaW1hZ2Uub3JpZ2luYWx9XCIgYWx0PVwiJHtzaG93Lm5hbWV9XCIgY2xhc3M9XCJjbXQtaW1nXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC05XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgcC0yIHAtbWQtMFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzPVwiY210LXNob3ctbmFtZVwiPiR7c2hvdy5uYW1lfTwvaDE+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2xvc2UtYnRuIHAtMFwiPiZ0aW1lczs8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1hcm91bmQgbWItMiBtLW1kLTBcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic21hbGwtZm9udHNcIj48c3Ryb25nPlJhdGluZyA6PC9zdHJvbmc+ICR7c2hvdy5yYXRpbmcuYXZlcmFnZX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNtYWxsLWZvbnRzXCI+PGEgaHJlZj1cImh0dHBzOi8vd3d3LmltZGIuY29tL3RpdGxlLyR7c2hvdy5leHRlcm5hbHMuaW1kYn0vXCI+PHN0cm9uZz5JTURCIDo8L3N0cm9uZz4gJHtzaG93LmV4dGVybmFscy5pbWRifTwvYT48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJmcy02IGZ3LWJvbGQgcHktNSBwLW1kLTBcIj5PdmVydmlldyA6PC9zcGFuPjxicj5cbiAgICAgICAgICA8YXJ0aWNsZSBpZD1cInN1bW1hcnlcIiBjbGFzcz1cInNtYWxsLWZvbnRzIG1iLTJcIj4ke3Nob3cuc3VtbWFyeX08L2FydGljbGU+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic21hbGwtZm9udHNcIj48c3Ryb25nPkdlbnJlcyA6IDwvc3Ryb25nPiR7c2hvdy5nZW5yZXN9PC9zcGFuPjxicj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzbWFsbC1mb250c1wiPjxzdHJvbmc+QXZlcmFnZSBSdW4gVGltZSA6IDwvc3Ryb25nPiR7c2hvdy5hdmVyYWdlUnVudGltZX08L3NwYW4+PGJyPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNtYWxsLWZvbnRzXCI+PHN0cm9uZz5FbmRlZCA6IDwvc3Ryb25nPiR7c2hvdy5lbmRlZH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNtYWxsLWZvbnRzXCI+PHN0cm9uZz5MYW5ndWFnZSA6IDwvc3Ryb25nPiR7c2hvdy5sYW5ndWFnZX08L3NwYW4+PGJyPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNtYWxsLWZvbnRzXCI+PHN0cm9uZz5UeXBlIDogPC9zdHJvbmc+JHtzaG93LnR5cGV9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgcC1tZC0yIG10LW1kLTBcIiBpZD1cInBvcHVwLWNtdC1zZWNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02IGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXIgbXQtMlwiPlxuICAgICAgICAgIDxoMyBjbGFzcz1cInAtMVwiPjxzdHJvbmcgaWQ9XCJjb21tZW50LXRpdGxlXCI+TGF0ZXN0IENvbW1lbnRzKCk8L3N0cm9uZz48L2gzPlxuICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtdW5zdHlsZWQgbWItMVwiIGlkPVwiY29tbWVudHNcIj5cbiAgICAgICAgICBcbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvcm0gY2xhc3M9XCJjb2wtbWQtNiBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIG10LTJcIj5cbiAgICAgICAgICA8aDMgY2xhc3M9XCJwLTFcIiBpZD1cImZvcm0tdGl0bGVcIj48c3Ryb25nPkFkZCBhIGNvbW1lbnQ8L3N0cm9uZz48L2gzPlxuICAgICAgICAgIDxpbnB1dCBpZD1cInVzZXJuYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiIGNsYXNzPVwibWItMiBmb3JtLWNvbnRyb2wgdy01MCBweC0yIHB5LTFcIiByZXF1aXJlZD5cbiAgICAgICAgICA8aW5wdXQgaWQ9XCJ1c2VyY210XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgY29tbWVudFwiIGNsYXNzPVwibWItMiBmb3JtLWNvbnRyb2wgdy01MCBweC0yIHB5LTFcIiByZXF1aXJlZD5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkYXRhPVwiJHtpZH1cIiBjbGFzcz1cImJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuIHB4LTIgcHktMSBmdy1ib2xkXCIgaWQ9XCJhZGQtY210LWJ0blwiPkFkZCBjb21tZW50PC9idXR0b24+XG4gICAgICAgIDxmb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG5cbiAgcGFyZW50RWxlbWVudC5hcHBlbmQoZGl2LCBvdmVybGF5KTtcbiAgYWRkRXZlbnRMaXN0ZW5lclRvQ2xvc2VCdG5zKCk7XG4gIGFkZEV2ZW50TGlzdGVuZXJUb0NvbW1lbnRGb3JtKCk7XG4gIGF3YWl0IGFwcGVuZENvbW1lbnRzVG9Qb3B1cChpZCk7XG4gIGF3YWl0IGNvbW1lbnRDb3VudGVyKCk7XG59O1xuXG5jb25zdCBhZGRFdmVudExpc3RlbmVyVG9DbXRCdG5zID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjbXRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNtdC1idG4nKTtcbiAgY210QnRucy5mb3JFYWNoKChjbXRCdG4pID0+IHtcbiAgICBjbXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZ2VuZXJhdGVQb3B1cENvbW1lbnRCb3goZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhJykpO1xuICAgICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGFkZEV2ZW50TGlzdGVuZXJUb0NtdEJ0bnMgYXMgZGVmYXVsdCB9OyIsImNvbnN0IGNvbW1lbnRDb3VudGVyID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50cycpO1xuICBjb25zdCBjaGlsZENvdW50ID0gdWwuY2hpbGRFbGVtZW50Q291bnQ7XG4gIGNvbnN0IGNvbW1lbnRUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50LXRpdGxlJyk7XG4gIGNvbW1lbnRUaXRsZS50ZXh0Q29udGVudCA9IGBMYXRlc3QgQ29tbWVudHMgKCAke2NoaWxkQ291bnR9IClgO1xuICByZXR1cm4gY2hpbGRDb3VudDtcbn07XG5leHBvcnQgeyBjb21tZW50Q291bnRlciBhcyBkZWZhdWx0IH07IiwiY29uc3QgYXBwSWQgPSAnR0Rla3BQbjMyVHZsZU9XNE9vWTInO1xuY29uc3QgYmFzZVVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nO1xuXG5jb25zdCBjcmVhdGVBcHBJZCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChiYXNlVXJsLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gIH0pO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICByZXR1cm4gZGF0YTtcbn07XG5jcmVhdGVBcHBJZCgpO1xuZXhwb3J0IHsgYXBwSWQsIGJhc2VVcmwgfTsiLCJjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzJyk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICBsZXQgc2hvd3MgPSBbXTtcbiAgc2hvd3MgPSBhd2FpdCBnZXREYXRhKCk7XG4gIHJldHVybiBzaG93cztcbn07XG5hd2FpdCBmZXRjaERhdGEoKTtcbmV4cG9ydCB7IGdldERhdGEsIGZldGNoRGF0YSB9OyIsImltcG9ydCB7IGJhc2VVcmwsIGFwcElkIH0gZnJvbSAnLi9kYXRhLmpzJztcblxuY29uc3QgcG9zdExpa2VzVG9BcGkgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgY29uc3QgcmVxdWVzdEJvZHkgPSB7XG4gICAgaXRlbV9pZDogZXZlbnQudGFyZ2V0LmlkLFxuICAgIGxpa2U6IDAsXG4gIH07XG4gIGNvbnN0IHJlcXVlc3QgPSB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkpLFxuICB9O1xuICBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfSR7YXBwSWR9L2xpa2VzYCwgcmVxdWVzdCk7XG59O1xuXG5jb25zdCBmaW5kUmlnaHRFbGVtZW50ID0gYXN5bmMgKGRhdGFzLCBpZCkgPT4ge1xuICBjb25zdCBmb3VuZExpa2UgPSBhd2FpdCBkYXRhcy5maW5kKChkYXRhKSA9PiBkYXRhLml0ZW1faWQgPT09IGlkKTtcbiAgaWYgKGZvdW5kTGlrZSkgcmV0dXJuIGZvdW5kTGlrZS5saWtlcztcbiAgcmV0dXJuIDA7XG59O1xuXG5jb25zdCBnZXRMaWtlc0Zyb21BcGkgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0ke2FwcElkfS9saWtlc2ApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmNvbnN0IGFkZEV2ZW50TGlzdGVuZXJUb0xpa2VCdG5zID0gKCkgPT4ge1xuICBjb25zdCBsaWtlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlLWJ0bicpO1xuICBsaWtlQnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICAgICAgY29uc3QgbGlrZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUudGFyZ2V0LmlkKTtcbiAgICAgIGxpa2VCdG4uc3R5bGUuYW5pbWF0aW9uID0gJ2FuaW1hdGUgLjhzIHN0ZXBzKDI4KSAxJztcbiAgICAgIGxpa2VCdG4uc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gJ3JpZ2h0JztcbiAgICAgIGF3YWl0IHBvc3RMaWtlc1RvQXBpKGUpO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldExpa2VzRnJvbUFwaSgpO1xuICAgICAgY29uc3QgZm91bmRMaWtlID0gYXdhaXQgZmluZFJpZ2h0RWxlbWVudChkYXRhLCBlLnRhcmdldC5pZCk7XG4gICAgICBjb25zdCBsaWtlQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbGlrZS1jb3VudC0ke2UudGFyZ2V0LmlkfWApO1xuICAgICAgbGlrZUNvdW50LnRleHRDb250ZW50ID0gYCR7Zm91bmRMaWtlfSBsaWtlc2A7XG4gICAgICBsaWtlQnRuLnN0eWxlLmFuaW1hdGlvbiA9ICdub25lJztcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBsaWtlc0NhY2hlID0ge307XG5cbmNvbnN0IGZldGNoTGlrZXNDb3VudHMgPSBhc3luYyAoKSA9PiB7XG4gIGlmIChPYmplY3Qua2V5cyhsaWtlc0NhY2hlKS5sZW5ndGggPT09IDApIHtcbiAgICBjb25zdCBsaWtlc0Zyb21BcGkgPSBhd2FpdCBnZXRMaWtlc0Zyb21BcGkoKTtcblxuICAgIGxpa2VzRnJvbUFwaS5tYXAoKGxpa2UpID0+IHtcbiAgICAgIGxpa2VzQ2FjaGVbbGlrZS5pdGVtX2lkXSA9IGxpa2UubGlrZXM7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgYXBwZW5kTGlrZXNUb0RvbSA9IChpZCkgPT4gbGlrZXNDYWNoZVtpZF0gfHwgMDtcbmV4cG9ydCB7IGFkZEV2ZW50TGlzdGVuZXJUb0xpa2VCdG5zLCBhcHBlbmRMaWtlc1RvRG9tLCBmZXRjaExpa2VzQ291bnRzIH07IiwiY29uc3QgY291bnRTaG93cyA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RzLWNvbnRhaW5lcicpO1xuICBjb25zdCBjaGlsZENvdW50ID0gY29udGFpbmVyLmNoaWxkRWxlbWVudENvdW50O1xuICByZXR1cm4gY2hpbGRDb3VudDtcbn07XG5cbmNvbnN0IHNob3dDb3VudCA9IGFzeW5jIChnZW5yZSwgY291bnQpID0+IHtcbiAgY29uc3QgYWxsU2hvd3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsLXNob3dzJyk7XG4gIGFsbFNob3dzLnRleHRDb250ZW50ID0gYCR7Z2VucmV9ICggJHtjb3VudH0gKWA7XG59O1xuXG5leHBvcnQgeyBjb3VudFNob3dzLCBzaG93Q291bnQgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=