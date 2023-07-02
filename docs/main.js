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
  width: 25vw;
  height: 30vh;
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

.scale-in-center {
  animation: scale-in-center 0.7s cubic-bezier(0.165, 0.84, 0.44, 1) both;
}

.bounce-in-top {
  animation: bounce-in-top 1.5s both;
}

@keyframes bounce-in-top {
  0% {
    -webkit-transform: translateY(-500px);
    transform: translateY(-500px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  38% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 1;
  }

  55% {
    -webkit-transform: translateY(-65px);
    transform: translateY(-65px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  72% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  81% {
    -webkit-transform: translateY(-28px);
    transform: translateY(-28px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  90% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  95% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}

@keyframes scale-in-center {
  0% {
    transform: scale(0);
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
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

  #popUp {
    width: 92vw;
    height: 92vh;
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
    width: 27vw;
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

@media screen and (min-width:1200px) {
  .shows{
    width: 17vw;
    height: 40vh;
  }
}
`, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Lato', sans-serif;\r\n  color: white;\r\n}\r\n\r\nnav {\r\n  z-index: 8;\r\n  box-shadow: 0 0 10px rgb(28, 231, 131);\r\n}\r\n\r\nbody {\r\n  background-color: black;\r\n}\r\n\r\n#Koppai {\r\n  color: rgb(28, 231, 131);\r\n}\r\n\r\n.cmt-img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n#popUp {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 80vw;\r\n  z-index: 10;\r\n  overflow: hidden;\r\n}\r\n\r\n#form-title,\r\n#comment-title {\r\n  font-size: 20px;\r\n}\r\n\r\n#bg-layer {\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.close-btn {\r\n  font-size: 30px;\r\n  font-weight: 800;\r\n  background: none;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  padding-right: 20px;\r\n}\r\n\r\n#logo {\r\n  width: 100%;\r\n}\r\n\r\n#summary p,\r\n.small-fonts {\r\n  font-size: 13px;\r\n  margin: 0;\r\n}\r\n\r\n#all-shows {\r\n  font-size: 20px;\r\n}\r\n\r\n#comments {\r\n  max-height: 32vh;\r\n  overflow: auto;\r\n}\r\n\r\n#comments::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\nnav a {\r\n  width: 15%;\r\n  position: relative;\r\n  right: 2.5vw;\r\n}\r\n\r\n.shows {\r\n  width: 25vw;\r\n  height: 30vh;\r\n  position: relative;\r\n  background-color: rgb(0, 0, 0, 0.5);\r\n}\r\n\r\n.shows .background-image {\r\n  position: absolute;\r\n  background-size: cover;\r\n  opacity: 0.8;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: -5;\r\n}\r\n\r\n.shows:hover img {\r\n  cursor: pointer;\r\n  opacity: 0.8;\r\n}\r\n\r\n.show-titles {\r\n  text-align: center;\r\n  position: absolute;\r\n  top: 0;\r\n  font-size: 20px;\r\n  font-weight: 800;\r\n}\r\n\r\n.show-imgs {\r\n  width: 100%;\r\n  height: 70%;\r\n  object-fit: cover;\r\n}\r\n\r\n#summary {\r\n  height: 130px;\r\n  overflow: auto;\r\n}\r\n\r\n#drop-down {\r\n  width: 15%;\r\n  font-size: 16px;\r\n  padding: 6px;\r\n}\r\n\r\n#summary::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.like-container {\r\n  position: relative;\r\n}\r\n\r\n.heart {\r\n  cursor: pointer;\r\n  background: url(\"assets/likeButton.png\") no-repeat;\r\n  background-position: left;\r\n  background-size: cover;\r\n  height: 75px;\r\n  width: 75px;\r\n  position: absolute;\r\n  bottom: 20%;\r\n  right: -10%;\r\n}\r\n\r\n.likes {\r\n  position: relative;\r\n  left: 50%;\r\n  bottom: 100%;\r\n  width: 100%;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n}\r\n\r\n.btn-outline-success {\r\n  border-color: rgb(28, 231, 131);\r\n  color: rgb(28, 231, 131);\r\n  background-color: rgb(0, 0, 0, 0.5);\r\n}\r\n\r\n.btn-outline-success:hover {\r\n  background-color: rgb(28, 231, 131);\r\n  color: black;\r\n}\r\n\r\n.fa-heart {\r\n  cursor: pointer;\r\n}\r\n\r\n.heart.heart-active {\r\n  animation: animate 0.8s steps(28) 1;\r\n  background-position: right;\r\n}\r\n\r\n@keyframes animate {\r\n  0% {\r\n    background-position: left;\r\n  }\r\n\r\n  100% {\r\n    background-position: right;\r\n  }\r\n}\r\n\r\n#overlay {\r\n  background-color: rgb(0, 0, 0, 0.8);\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  opacity: 1;\r\n  z-index: 5;\r\n}\r\n\r\nselect option:checked {\r\n  background-color: rgb(28, 231, 131);\r\n}\r\n\r\nselect {\r\n  color: white;\r\n}\r\n\r\nselect option:hover {\r\n  background-color: rgb(28, 231, 131);\r\n}\r\n\r\n#popUp .background-image {\r\n  position: absolute;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: -10;\r\n}\r\n\r\n.scale-in-center {\r\n  animation: scale-in-center 0.7s cubic-bezier(0.165, 0.84, 0.44, 1) both;\r\n}\r\n\r\n.bounce-in-top {\r\n  animation: bounce-in-top 1.5s both;\r\n}\r\n\r\n@keyframes bounce-in-top {\r\n  0% {\r\n    -webkit-transform: translateY(-500px);\r\n    transform: translateY(-500px);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n    opacity: 0;\r\n  }\r\n\r\n  38% {\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n    -webkit-animation-timing-function: ease-out;\r\n    animation-timing-function: ease-out;\r\n    opacity: 1;\r\n  }\r\n\r\n  55% {\r\n    -webkit-transform: translateY(-65px);\r\n    transform: translateY(-65px);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n\r\n  72% {\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n    -webkit-animation-timing-function: ease-out;\r\n    animation-timing-function: ease-out;\r\n  }\r\n\r\n  81% {\r\n    -webkit-transform: translateY(-28px);\r\n    transform: translateY(-28px);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n\r\n  90% {\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n    -webkit-animation-timing-function: ease-out;\r\n    animation-timing-function: ease-out;\r\n  }\r\n\r\n  95% {\r\n    -webkit-transform: translateY(-8px);\r\n    transform: translateY(-8px);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n    -webkit-animation-timing-function: ease-out;\r\n    animation-timing-function: ease-out;\r\n  }\r\n}\r\n\r\n@keyframes scale-in-center {\r\n  0% {\r\n    transform: scale(0);\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .shows:hover {\r\n    cursor: pointer;\r\n    border: solid 5px rgb(28, 231, 131, 0.5);\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    transition: 0.2s;\r\n    background-color: rgb(0, 0, 0, 0.7);\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  #logo {\r\n    width: 160%;\r\n    position: relative;\r\n    right: 30%;\r\n  }\r\n\r\n  #popUp {\r\n    width: 92vw;\r\n    height: 92vh;\r\n  }\r\n\r\n  #drop-down {\r\n    position: relative;\r\n    left: 5%;\r\n    width: 30%;\r\n    font-size: 14px;\r\n    padding: 4px;\r\n  }\r\n\r\n  #all-shows {\r\n    font-size: 14px;\r\n    align-self: center;\r\n    position: relative;\r\n    left: 5%;\r\n  }\r\n\r\n  .shows {\r\n    width: 27vw;\r\n    height: 25vh;\r\n  }\r\n\r\n  .show-titles {\r\n    font-size: 12px;\r\n  }\r\n\r\n  .heart {\r\n    height: 50px;\r\n    width: 50px;\r\n    bottom: 10%;\r\n    right: -10px;\r\n  }\r\n\r\n  .likes {\r\n    font-size: 8px;\r\n    left: 20px;\r\n  }\r\n\r\n  .cmt-btn {\r\n    font-size: 12px;\r\n    padding: 20px;\r\n  }\r\n\r\n  .cmt-img {\r\n    display: none;\r\n  }\r\n\r\n  #summary {\r\n    height: 100px;\r\n  }\r\n\r\n  .cmt-show-name {\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n  }\r\n\r\n  #comment-title,\r\n  #form-title {\r\n    font-size: 15px;\r\n  }\r\n\r\n  #comments {\r\n    max-height: 17vh;\r\n  }\r\n}\r\n\r\n@media screen and (min-width:1200px) {\r\n  .shows{\r\n    width: 17vw;\r\n    height: 40vh;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
  const htmlString = data.map((show) => `
          <div class="col d-flex flex-column mx-2 my-4 p-0 shows align-items-center justify-content-end scale-in-center">
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

displayShows('All Shows', allShows.reverse());

const displayShowsByGenre = (genre) => {
  if (genre === 'All Shows') {
    displayShows(genre, allShows);
    return;
  }
  if (genre === 'Choose Genre') {
    return;
  }
  const ShowsByGenre = allShows.filter((show) => show.genres.includes(genre));
  displayShows(genre, ShowsByGenre.reverse());
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
            <div class="col-7">
              <span class="small-fonts"><strong>Genres : </strong>${show.genres}</span><br>
              <span class="small-fonts"><strong>Average Run Time : </strong>${show.averageRuntime}</span><br>
              <span class="small-fonts"><strong>Ended : </strong>${show.ended}</span>
            </div>
            <div class="col-5">
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseUhBQXdDO0FBQ3BGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Ysa0hBQWtIO0FBQ2xILHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFL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QUFDOUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZHVsZXMvY29tbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9jb21tZW50Q291bnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZHVsZXMvZGF0YS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9nZXREYXRhZnJvbUFwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9saWtlLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL3Nob3dDb3VudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiYXNzZXRzL2xpa2VCdXR0b24ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgei1pbmRleDogODtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2IoMjgsIDIzMSwgMTMxKTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiNLb3BwYWkge1xyXG4gIGNvbG9yOiByZ2IoMjgsIDIzMSwgMTMxKTtcclxufVxyXG5cclxuLmNtdC1pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI3BvcFVwIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbiNmb3JtLXRpdGxlLFxyXG4jY29tbWVudC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4jYmctbGF5ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxufVxyXG5cclxuLmNsb3NlLWJ0biB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuI2xvZ28ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jc3VtbWFyeSBwLFxyXG4uc21hbGwtZm9udHMge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiNhbGwtc2hvd3Mge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuI2NvbW1lbnRzIHtcclxuICBtYXgtaGVpZ2h0OiAzMnZoO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4jY29tbWVudHM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5uYXYgYSB7XHJcbiAgd2lkdGg6IDE1JTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcmlnaHQ6IDIuNXZ3O1xyXG59XHJcblxyXG4uc2hvd3Mge1xyXG4gIHdpZHRoOiAyNXZ3O1xyXG4gIGhlaWdodDogMzB2aDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5zaG93cyAuYmFja2dyb3VuZC1pbWFnZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAtNTtcclxufVxyXG5cclxuLnNob3dzOmhvdmVyIGltZyB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLnNob3ctdGl0bGVzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLnNob3ctaW1ncyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA3MCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbiNzdW1tYXJ5IHtcclxuICBoZWlnaHQ6IDEzMHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4jZHJvcC1kb3duIHtcclxuICB3aWR0aDogMTUlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiA2cHg7XHJcbn1cclxuXHJcbiNzdW1tYXJ5Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmxpa2UtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5oZWFydCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGhlaWdodDogNzVweDtcclxuICB3aWR0aDogNzVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAyMCU7XHJcbiAgcmlnaHQ6IC0xMCU7XHJcbn1cclxuXHJcbi5saWtlcyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBib3R0b206IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1zdWNjZXNzIHtcclxuICBib3JkZXItY29sb3I6IHJnYigyOCwgMjMxLCAxMzEpO1xyXG4gIGNvbG9yOiByZ2IoMjgsIDIzMSwgMTMxKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOCwgMjMxLCAxMzEpO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmZhLWhlYXJ0IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5oZWFydC5oZWFydC1hY3RpdmUge1xyXG4gIGFuaW1hdGlvbjogYW5pbWF0ZSAwLjhzIHN0ZXBzKDI4KSAxO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xyXG4gIDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuI292ZXJsYXkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjgpO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHotaW5kZXg6IDU7XHJcbn1cclxuXHJcbnNlbGVjdCBvcHRpb246Y2hlY2tlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI4LCAyMzEsIDEzMSk7XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5zZWxlY3Qgb3B0aW9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjgsIDIzMSwgMTMxKTtcclxufVxyXG5cclxuI3BvcFVwIC5iYWNrZ3JvdW5kLWltYWdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAtMTA7XHJcbn1cclxuXHJcbi5zY2FsZS1pbi1jZW50ZXIge1xyXG4gIGFuaW1hdGlvbjogc2NhbGUtaW4tY2VudGVyIDAuN3MgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBib3RoO1xyXG59XHJcblxyXG4uYm91bmNlLWluLXRvcCB7XHJcbiAgYW5pbWF0aW9uOiBib3VuY2UtaW4tdG9wIDEuNXMgYm90aDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBib3VuY2UtaW4tdG9wIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAwcHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MDBweCk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIDM4JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICA1NSUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTY1cHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02NXB4KTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgfVxyXG5cclxuICA3MiUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgfVxyXG5cclxuICA4MSUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI4cHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yOHB4KTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgfVxyXG5cclxuICA5MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgfVxyXG5cclxuICA5NSUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2NhbGUtaW4tY2VudGVyIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5zaG93czpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IHNvbGlkIDVweCByZ2IoMjgsIDIzMSwgMTMxLCAwLjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNyk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICNsb2dvIHtcclxuICAgIHdpZHRoOiAxNjAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcmlnaHQ6IDMwJTtcclxuICB9XHJcblxyXG4gICNwb3BVcCB7XHJcbiAgICB3aWR0aDogOTJ2dztcclxuICAgIGhlaWdodDogOTJ2aDtcclxuICB9XHJcblxyXG4gICNkcm9wLWRvd24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNSU7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gIH1cclxuXHJcbiAgI2FsbC1zaG93cyB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1JTtcclxuICB9XHJcblxyXG4gIC5zaG93cyB7XHJcbiAgICB3aWR0aDogMjd2dztcclxuICAgIGhlaWdodDogMjV2aDtcclxuICB9XHJcblxyXG4gIC5zaG93LXRpdGxlcyB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICAuaGVhcnQge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBib3R0b206IDEwJTtcclxuICAgIHJpZ2h0OiAtMTBweDtcclxuICB9XHJcblxyXG4gIC5saWtlcyB7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuY210LWJ0biB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNtdC1pbWcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gICNzdW1tYXJ5IHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgfVxyXG5cclxuICAuY210LXNob3ctbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbiAgI2NvbW1lbnQtdGl0bGUsXHJcbiAgI2Zvcm0tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgI2NvbW1lbnRzIHtcclxuICAgIG1heC1oZWlnaHQ6IDE3dmg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyMDBweCkge1xyXG4gIC5zaG93c3tcclxuICAgIHdpZHRoOiAxN3Z3O1xyXG4gICAgaGVpZ2h0OiA0MHZoO1xyXG4gIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QiwrQkFBK0I7RUFDL0IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtC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RUFDRTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtJQUNWLGVBQWU7SUFDZixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGNBQWM7SUFDZCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTs7SUFFRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgei1pbmRleDogODtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYigyOCwgMjMxLCAxMzEpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jS29wcGFpIHtcXHJcXG4gIGNvbG9yOiByZ2IoMjgsIDIzMSwgMTMxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNtdC1pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNwb3BVcCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgd2lkdGg6IDgwdnc7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbiNmb3JtLXRpdGxlLFxcclxcbiNjb21tZW50LXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2JnLWxheWVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWJ0biB7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nbyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3N1bW1hcnkgcCxcXHJcXG4uc21hbGwtZm9udHMge1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jYWxsLXNob3dzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnRzIHtcXHJcXG4gIG1heC1oZWlnaHQ6IDMydmg7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnRzOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgYSB7XFxyXFxuICB3aWR0aDogMTUlO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcmlnaHQ6IDIuNXZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvd3Mge1xcclxcbiAgd2lkdGg6IDI1dnc7XFxyXFxuICBoZWlnaHQ6IDMwdmg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3dzIC5iYWNrZ3JvdW5kLWltYWdlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBvcGFjaXR5OiAwLjg7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB6LWluZGV4OiAtNTtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3dzOmhvdmVyIGltZyB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBvcGFjaXR5OiAwLjg7XFxyXFxufVxcclxcblxcclxcbi5zaG93LXRpdGxlcyB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1pbWdzIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA3MCU7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3N1bW1hcnkge1xcclxcbiAgaGVpZ2h0OiAxMzBweDtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jZHJvcC1kb3duIHtcXHJcXG4gIHdpZHRoOiAxNSU7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBwYWRkaW5nOiA2cHg7XFxyXFxufVxcclxcblxcclxcbiNzdW1tYXJ5Ojotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZS1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhcnQge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFxcXCJhc3NldHMvbGlrZUJ1dHRvbi5wbmdcXFwiKSBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGhlaWdodDogNzVweDtcXHJcXG4gIHdpZHRoOiA3NXB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAyMCU7XFxyXFxuICByaWdodDogLTEwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIGJvdHRvbTogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3Mge1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjgsIDIzMSwgMTMxKTtcXHJcXG4gIGNvbG9yOiByZ2IoMjgsIDIzMSwgMTMxKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLW91dGxpbmUtc3VjY2Vzczpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjgsIDIzMSwgMTMxKTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWhlYXJ0IHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYXJ0LmhlYXJ0LWFjdGl2ZSB7XFxyXFxuICBhbmltYXRpb246IGFuaW1hdGUgMC44cyBzdGVwcygyOCkgMTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xcclxcbiAgMCUge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4jb3ZlcmxheSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC44KTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIHotaW5kZXg6IDU7XFxyXFxufVxcclxcblxcclxcbnNlbGVjdCBvcHRpb246Y2hlY2tlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjgsIDIzMSwgMTMxKTtcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0IHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0IG9wdGlvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjgsIDIzMSwgMTMxKTtcXHJcXG59XFxyXFxuXFxyXFxuI3BvcFVwIC5iYWNrZ3JvdW5kLWltYWdlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgei1pbmRleDogLTEwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NhbGUtaW4tY2VudGVyIHtcXHJcXG4gIGFuaW1hdGlvbjogc2NhbGUtaW4tY2VudGVyIDAuN3MgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG4uYm91bmNlLWluLXRvcCB7XFxyXFxuICBhbmltYXRpb246IGJvdW5jZS1pbi10b3AgMS41cyBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGJvdW5jZS1pbi10b3Age1xcclxcbiAgMCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAwcHgpO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwMHB4KTtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcclxcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgMzglIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXHJcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA1NSUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjVweCk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjVweCk7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXHJcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDcyJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxyXFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcclxcbiAgfVxcclxcblxcclxcbiAgODElIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI4cHgpO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI4cHgpO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxyXFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICA5MCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcclxcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDk1JSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCk7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXHJcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcclxcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzY2FsZS1pbi1jZW50ZXIge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAuc2hvd3M6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogc29saWQgNXB4IHJnYigyOCwgMjMxLCAxMzEsIDAuNSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgI2xvZ28ge1xcclxcbiAgICB3aWR0aDogMTYwJTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICByaWdodDogMzAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3BvcFVwIHtcXHJcXG4gICAgd2lkdGg6IDkydnc7XFxyXFxuICAgIGhlaWdodDogOTJ2aDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNkcm9wLWRvd24ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGxlZnQ6IDUlO1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIHBhZGRpbmc6IDRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNhbGwtc2hvd3Mge1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBsZWZ0OiA1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zaG93cyB7XFxyXFxuICAgIHdpZHRoOiAyN3Z3O1xcclxcbiAgICBoZWlnaHQ6IDI1dmg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2hvdy10aXRsZXMge1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhcnQge1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBib3R0b206IDEwJTtcXHJcXG4gICAgcmlnaHQ6IC0xMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxpa2VzIHtcXHJcXG4gICAgZm9udC1zaXplOiA4cHg7XFxyXFxuICAgIGxlZnQ6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY210LWJ0biB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jbXQtaW1nIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNzdW1tYXJ5IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jbXQtc2hvdy1uYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2NvbW1lbnQtdGl0bGUsXFxyXFxuICAjZm9ybS10aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjb21tZW50cyB7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDE3dmg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTIwMHB4KSB7XFxyXFxuICAuc2hvd3N7XFxyXFxuICAgIHdpZHRoOiAxN3Z3O1xcclxcbiAgICBoZWlnaHQ6IDQwdmg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgbG9nb0ltYWdlIGZyb20gJy4vYXNzZXRzL3Npcmlib3gtcmVtb3ZlYmctcHJldmlldy5wbmcnO1xuaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSAnLi9tb2R1bGVzL2dldERhdGFmcm9tQXBpLmpzJztcbmltcG9ydCBhZGRFdmVudExpc3RlbmVyVG9DbXRCdG5zIGZyb20gJy4vbW9kdWxlcy9jb21tZW50LmpzJztcbmltcG9ydCB7IGFkZEV2ZW50TGlzdGVuZXJUb0xpa2VCdG5zLCBhcHBlbmRMaWtlc1RvRG9tLCBmZXRjaExpa2VzQ291bnRzIH0gZnJvbSAnLi9tb2R1bGVzL2xpa2UuanMnO1xuaW1wb3J0IHsgY291bnRTaG93cywgc2hvd0NvdW50IH0gZnJvbSAnLi9tb2R1bGVzL3Nob3dDb3VudC5qcyc7XG5cbmNvbnN0IGxvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nbycpO1xubG9nby5zcmMgPSBsb2dvSW1hZ2U7XG5cbmNvbnN0IGNvbnZlcnRBcGlEYXRhVG9IdG1sID0gKGRhdGEpID0+IHtcbiAgY29uc3QgaHRtbFN0cmluZyA9IGRhdGEubWFwKChzaG93KSA9PiBgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBkLWZsZXggZmxleC1jb2x1bW4gbXgtMiBteS00IHAtMCBzaG93cyBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWVuZCBzY2FsZS1pbi1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYWNrZ3JvdW5kLWltYWdlXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtzaG93LmltYWdlLm9yaWdpbmFsfSk7XCI+PC9kaXY+XG4gICAgICAgICAgICA8aDEgY2xhc3M9XCJtLTAgc2hvdy10aXRsZXMgdGV4dC13aGl0ZSBwLTJcIj4ke3Nob3cubmFtZX08L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbGlrZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFydCBsaWtlLWJ0blwiIGlkPVwiJHtzaG93LmlkfVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaWtlc1wiIGlkPVwibGlrZS1jb3VudC0ke3Nob3cuaWR9XCI+JHthcHBlbmRMaWtlc1RvRG9tKHNob3cuaWQpfSBsaWtlczwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIGNtdC1idG4gZnctYm9sZCB3LTc1IGFsaWduLXNlbGYtY2VudGVyIHB4LTIgcHktMSBwLW1kLTEgbWItM1wiIGRhdGE9XCIke3Nob3cuaWR9XCI+Q29tbWVudHM8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIGApLmpvaW4oJycpO1xuICByZXR1cm4gaHRtbFN0cmluZztcbn07XG5cbmNvbnN0IGFsbFNob3dzID0gYXdhaXQgZmV0Y2hEYXRhKCk7XG5cbmNvbnN0IGRpc3BsYXlTaG93cyA9IGFzeW5jIChnZW5yZSwgc2hvd3MpID0+IHtcbiAgYXdhaXQgZmV0Y2hMaWtlc0NvdW50cygpO1xuXG4gIGNvbnN0IGh0bWxTdHJpbmcgPSBjb252ZXJ0QXBpRGF0YVRvSHRtbChzaG93cyk7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RzLWNvbnRhaW5lcicpO1xuICB1bC5pbm5lckhUTUwgPSBodG1sU3RyaW5nO1xuICBhZGRFdmVudExpc3RlbmVyVG9MaWtlQnRucygpO1xuICBhZGRFdmVudExpc3RlbmVyVG9DbXRCdG5zKCk7XG4gIGNvbnN0IG51bWJlck9mU2hvd3MgPSBjb3VudFNob3dzKCk7XG4gIHNob3dDb3VudChnZW5yZSwgbnVtYmVyT2ZTaG93cyk7XG59O1xuXG5kaXNwbGF5U2hvd3MoJ0FsbCBTaG93cycsIGFsbFNob3dzLnJldmVyc2UoKSk7XG5cbmNvbnN0IGRpc3BsYXlTaG93c0J5R2VucmUgPSAoZ2VucmUpID0+IHtcbiAgaWYgKGdlbnJlID09PSAnQWxsIFNob3dzJykge1xuICAgIGRpc3BsYXlTaG93cyhnZW5yZSwgYWxsU2hvd3MpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoZ2VucmUgPT09ICdDaG9vc2UgR2VucmUnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IFNob3dzQnlHZW5yZSA9IGFsbFNob3dzLmZpbHRlcigoc2hvdykgPT4gc2hvdy5nZW5yZXMuaW5jbHVkZXMoZ2VucmUpKTtcbiAgZGlzcGxheVNob3dzKGdlbnJlLCBTaG93c0J5R2VucmUucmV2ZXJzZSgpKTtcbn07XG5cbmNvbnN0IGNob29zZUdlbnJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3AtZG93bicpO1xuY2hvb3NlR2VucmUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgZGlzcGxheVNob3dzQnlHZW5yZShlLnRhcmdldC52YWx1ZSk7XG59KTsiLCJpbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi9nZXREYXRhZnJvbUFwaS5qcyc7XG5pbXBvcnQgY29tbWVudENvdW50ZXIgZnJvbSAnLi9jb21tZW50Q291bnQuanMnO1xuaW1wb3J0IHsgYXBwSWQgfSBmcm9tICcuL2RhdGEuanMnO1xuXG5jb25zdCBwYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcmVudC1jb250YWluZXInKTtcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5jb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyc7XG5cbmNvbnN0IGZpbmRTaG93QnlJZCA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCBkYXRhcyA9IGF3YWl0IGdldERhdGEoKTtcbiAgY29uc3Qgc2hvdyA9IGF3YWl0IGRhdGFzLmZpbmQoKGRhdGEpID0+IGRhdGEuaWQgPT09IE51bWJlcihpZCkpO1xuICByZXR1cm4gc2hvdztcbn07XG5cbmNvbnN0IGFkZEV2ZW50TGlzdGVuZXJUb0Nsb3NlQnRucyA9ICgpID0+IHtcbiAgY29uc3QgY2xvc2VCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsb3NlLWJ0bicpO1xuICBjbG9zZUJ0bnMuZm9yRWFjaCgoY2xvc2VCdG4pID0+IHtcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHBvcFVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcFVwJyk7XG4gICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKTtcbiAgICAgIHBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQocG9wVXApO1xuICAgICAgcGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChvdmVybGF5KTtcbiAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgcG9zdENvbW1lbnRUb0FwaSA9IGFzeW5jIChldmVudCwgbmFtZUlucHV0LCBjb21tZW50SW5wdXQpID0+IHtcbiAgY29uc3QgcmVxdWVzdEJvZHkgPSB7XG4gICAgaXRlbV9pZDogZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YScpLFxuICAgIHVzZXJuYW1lOiBuYW1lSW5wdXQudmFsdWUsXG4gICAgY29tbWVudDogY29tbWVudElucHV0LnZhbHVlLFxuICB9O1xuICBjb25zdCByZXF1ZXN0ID0ge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5KSxcbiAgfTtcbiAgYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vJHthcHBJZH0vY29tbWVudHNgLCByZXF1ZXN0KTtcbn07XG5cbmNvbnN0IGdldENvbW1lbnRzRnJvbUFwaSA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9LyR7YXBwSWR9L2NvbW1lbnRzP2l0ZW1faWQ9JHtpZH1gKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5jb25zdCBjaGFuZ2VBcGlEYXRhVG9IdG1sID0gKGRhdGEpID0+IHtcbiAgY29uc3QgaHRtbFN0cmluZyA9IGRhdGFcbiAgICAubWFwKChlbGVtZW50KSA9PiBgXG4gICAgPGxpPlxuICAgICAgJHtlbGVtZW50LmNyZWF0aW9uX2RhdGV9IDxzdHJvbmcgY2xhc3M9XCJweC0xXCI+JHtlbGVtZW50LnVzZXJuYW1lfTo8L3N0cm9uZz4gJHtlbGVtZW50LmNvbW1lbnR9XG4gICAgPC9saT5cbiAgYCkuam9pbignJyk7XG4gIHJldHVybiBodG1sU3RyaW5nO1xufTtcblxuY29uc3Qgc29ydENvbW1lbnRzRnJvbUxhdGVzdCA9IChjb21tZW50cykgPT4ge1xuICBjb25zdCBsYXRlc3RDb21tZW50cyA9IGNvbW1lbnRzLnJldmVyc2UoKTtcbiAgcmV0dXJuIGxhdGVzdENvbW1lbnRzO1xufTtcblxuY29uc3QgYXBwZW5kQ29tbWVudHNUb1BvcHVwID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnRzJyk7XG4gIHVsLmlubmVySFRNTCA9ICcnO1xuICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGdldENvbW1lbnRzRnJvbUFwaShpZCk7XG5cbiAgaWYgKE9iamVjdC5rZXlzKGNvbW1lbnRzKVswXSA9PT0gJ2Vycm9yJykge1xuICAgIHVsLmlubmVySFRNTCA9ICdObyBjb21tZW50cyB5ZXQnO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGxhdGVzdENvbW1lbnRzID0gc29ydENvbW1lbnRzRnJvbUxhdGVzdChjb21tZW50cyk7XG4gICAgY29uc3QgbGkgPSBjaGFuZ2VBcGlEYXRhVG9IdG1sKGxhdGVzdENvbW1lbnRzKTtcbiAgICB1bC5pbm5lckhUTUwgPSBsaTtcbiAgfVxufTtcblxuY29uc3QgdXBkYXRlQ29tbWVudHMgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudHMnKTtcbiAgY29uc3QgY29tbWVudFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnQtdGl0bGUnKTtcbiAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBnZXRDb21tZW50c0Zyb21BcGkoaWQpO1xuICBjb25zdCBsYXRlc3RDb21tZW50cyA9IHNvcnRDb21tZW50c0Zyb21MYXRlc3QoY29tbWVudHMpO1xuICBjb25zdCBsaSA9IGF3YWl0IGNoYW5nZUFwaURhdGFUb0h0bWwobGF0ZXN0Q29tbWVudHMpO1xuICB1bC5pbm5lckhUTUwgPSBsaTtcbiAgY29tbWVudFRpdGxlLnRleHRDb250ZW50ID0gYENvbW1lbnRzICgke2NvbW1lbnRzLmxlbmd0aH0pYDtcbn07XG5cbmNvbnN0IGFkZEV2ZW50TGlzdGVuZXJUb0NvbW1lbnRGb3JtID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICBjb25zdCBhZGRDbXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWNtdC1idG4nKTtcbiAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJuYW1lJyk7XG4gIGNvbnN0IGNvbW1lbnRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyY210Jyk7XG5cbiAgYWRkQ210QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICBpZiAobmFtZUlucHV0LnZhbHVlID09PSAnJyB8fCBjb21tZW50SW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBhd2FpdCBwb3N0Q29tbWVudFRvQXBpKGUsIG5hbWVJbnB1dCwgY29tbWVudElucHV0KTtcbiAgICB1cGRhdGVDb21tZW50cyhlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEnKSk7XG4gICAgZm9ybS5yZXNldCgpO1xuICB9KTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlUG9wdXBDb21tZW50Qm94ID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHNob3cgPSBhd2FpdCBmaW5kU2hvd0J5SWQoaWQpO1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvdmVybGF5LmlkID0gJ292ZXJsYXknO1xuXG4gIGRpdi5pZCA9ICdwb3BVcCc7XG4gIGRpdi5jbGFzc05hbWUgPSAncm91bmRlZC00JztcbiAgZGl2LmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGlkPVwiYmctbGF5ZXJcIiBjbGFzcz1cInAtbWQtNSBwLTIgaC0xMDBcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBpZD1cInBvcHVwLWRlc2NcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJhY2tncm91bmQtaW1hZ2VcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Nob3cuaW1hZ2Uub3JpZ2luYWx9KTtcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiJHtzaG93LmltYWdlLm9yaWdpbmFsfVwiIGFsdD1cIiR7c2hvdy5uYW1lfVwiIGNsYXNzPVwiY210LWltZ1wiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyIHAtMiBwLW1kLTBcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzcz1cImNtdC1zaG93LW5hbWVcIj4ke3Nob3cubmFtZX08L2gxPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNsb3NlLWJ0biBwLTBcIj4mdGltZXM7PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kIG1iLTIgbS1tZC0wXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNtYWxsLWZvbnRzXCI+PHN0cm9uZz5SYXRpbmcgOjwvc3Ryb25nPiAke3Nob3cucmF0aW5nLmF2ZXJhZ2V9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzbWFsbC1mb250c1wiPjxhIGhyZWY9XCJodHRwczovL3d3dy5pbWRiLmNvbS90aXRsZS8ke3Nob3cuZXh0ZXJuYWxzLmltZGJ9L1wiPjxzdHJvbmc+SU1EQiA6PC9zdHJvbmc+ICR7c2hvdy5leHRlcm5hbHMuaW1kYn08L2E+PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZnMtNiBmdy1ib2xkIHB5LTUgcC1tZC0wXCI+T3ZlcnZpZXcgOjwvc3Bhbj48YnI+XG4gICAgICAgICAgPGFydGljbGUgaWQ9XCJzdW1tYXJ5XCIgY2xhc3M9XCJzbWFsbC1mb250cyBtYi0yXCI+JHtzaG93LnN1bW1hcnl9PC9hcnRpY2xlPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtN1wiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNtYWxsLWZvbnRzXCI+PHN0cm9uZz5HZW5yZXMgOiA8L3N0cm9uZz4ke3Nob3cuZ2VucmVzfTwvc3Bhbj48YnI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic21hbGwtZm9udHNcIj48c3Ryb25nPkF2ZXJhZ2UgUnVuIFRpbWUgOiA8L3N0cm9uZz4ke3Nob3cuYXZlcmFnZVJ1bnRpbWV9PC9zcGFuPjxicj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzbWFsbC1mb250c1wiPjxzdHJvbmc+RW5kZWQgOiA8L3N0cm9uZz4ke3Nob3cuZW5kZWR9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTVcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzbWFsbC1mb250c1wiPjxzdHJvbmc+TGFuZ3VhZ2UgOiA8L3N0cm9uZz4ke3Nob3cubGFuZ3VhZ2V9PC9zcGFuPjxicj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzbWFsbC1mb250c1wiPjxzdHJvbmc+VHlwZSA6IDwvc3Ryb25nPiR7c2hvdy50eXBlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHAtbWQtMiBtdC1tZC0wXCIgaWQ9XCJwb3B1cC1jbXQtc2VjXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNiBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIG10LTJcIj5cbiAgICAgICAgICA8aDMgY2xhc3M9XCJwLTFcIj48c3Ryb25nIGlkPVwiY29tbWVudC10aXRsZVwiPkxhdGVzdCBDb21tZW50cygpPC9zdHJvbmc+PC9oMz5cbiAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LXVuc3R5bGVkIG1iLTFcIiBpZD1cImNvbW1lbnRzXCI+XG4gICAgICAgICAgXG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxmb3JtIGNsYXNzPVwiY29sLW1kLTYgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciBtdC0yXCI+XG4gICAgICAgICAgPGgzIGNsYXNzPVwicC0xXCIgaWQ9XCJmb3JtLXRpdGxlXCI+PHN0cm9uZz5BZGQgYSBjb21tZW50PC9zdHJvbmc+PC9oMz5cbiAgICAgICAgICA8aW5wdXQgaWQ9XCJ1c2VybmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIiBjbGFzcz1cIm1iLTIgZm9ybS1jb250cm9sIHctNTAgcHgtMiBweS0xXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgPGlucHV0IGlkPVwidXNlcmNtdFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJZb3VyIGNvbW1lbnRcIiBjbGFzcz1cIm1iLTIgZm9ybS1jb250cm9sIHctNTAgcHgtMiBweS0xXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGF0YT1cIiR7aWR9XCIgY2xhc3M9XCJidG4tb3V0bGluZS1zdWNjZXNzIGJ0biBweC0yIHB5LTEgZnctYm9sZFwiIGlkPVwiYWRkLWNtdC1idG5cIj5BZGQgY29tbWVudDwvYnV0dG9uPlxuICAgICAgICA8Zm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xuXG4gIHBhcmVudEVsZW1lbnQuYXBwZW5kKGRpdiwgb3ZlcmxheSk7XG4gIGFkZEV2ZW50TGlzdGVuZXJUb0Nsb3NlQnRucygpO1xuICBhZGRFdmVudExpc3RlbmVyVG9Db21tZW50Rm9ybSgpO1xuICBhd2FpdCBhcHBlbmRDb21tZW50c1RvUG9wdXAoaWQpO1xuICBhd2FpdCBjb21tZW50Q291bnRlcigpO1xufTtcblxuY29uc3QgYWRkRXZlbnRMaXN0ZW5lclRvQ210QnRucyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgY210QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbXQtYnRuJyk7XG4gIGNtdEJ0bnMuZm9yRWFjaCgoY210QnRuKSA9PiB7XG4gICAgY210QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGdlbmVyYXRlUG9wdXBDb21tZW50Qm94KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YScpKTtcbiAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBhZGRFdmVudExpc3RlbmVyVG9DbXRCdG5zIGFzIGRlZmF1bHQgfTsiLCJjb25zdCBjb21tZW50Q291bnRlciA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudHMnKTtcbiAgY29uc3QgY2hpbGRDb3VudCA9IHVsLmNoaWxkRWxlbWVudENvdW50O1xuICBjb25zdCBjb21tZW50VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudC10aXRsZScpO1xuICBjb21tZW50VGl0bGUudGV4dENvbnRlbnQgPSBgTGF0ZXN0IENvbW1lbnRzICggJHtjaGlsZENvdW50fSApYDtcbiAgcmV0dXJuIGNoaWxkQ291bnQ7XG59O1xuZXhwb3J0IHsgY29tbWVudENvdW50ZXIgYXMgZGVmYXVsdCB9OyIsImNvbnN0IGFwcElkID0gJ0dEZWtwUG4zMlR2bGVPVzRPb1kyJztcbmNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJztcblxuY29uc3QgY3JlYXRlQXBwSWQgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYmFzZVVybCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICB9KTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuY3JlYXRlQXBwSWQoKTtcbmV4cG9ydCB7IGFwcElkLCBiYXNlVXJsIH07IiwiY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cycpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgbGV0IHNob3dzID0gW107XG4gIHNob3dzID0gYXdhaXQgZ2V0RGF0YSgpO1xuICByZXR1cm4gc2hvd3M7XG59O1xuYXdhaXQgZmV0Y2hEYXRhKCk7XG5leHBvcnQgeyBnZXREYXRhLCBmZXRjaERhdGEgfTsiLCJpbXBvcnQgeyBiYXNlVXJsLCBhcHBJZCB9IGZyb20gJy4vZGF0YS5qcyc7XG5cbmNvbnN0IHBvc3RMaWtlc1RvQXBpID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHJlcXVlc3RCb2R5ID0ge1xuICAgIGl0ZW1faWQ6IGV2ZW50LnRhcmdldC5pZCxcbiAgICBsaWtlOiAwLFxuICB9O1xuICBjb25zdCByZXF1ZXN0ID0ge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5KSxcbiAgfTtcbiAgYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0ke2FwcElkfS9saWtlc2AsIHJlcXVlc3QpO1xufTtcblxuY29uc3QgZmluZFJpZ2h0RWxlbWVudCA9IGFzeW5jIChkYXRhcywgaWQpID0+IHtcbiAgY29uc3QgZm91bmRMaWtlID0gYXdhaXQgZGF0YXMuZmluZCgoZGF0YSkgPT4gZGF0YS5pdGVtX2lkID09PSBpZCk7XG4gIGlmIChmb3VuZExpa2UpIHJldHVybiBmb3VuZExpa2UubGlrZXM7XG4gIHJldHVybiAwO1xufTtcblxuY29uc3QgZ2V0TGlrZXNGcm9tQXBpID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9JHthcHBJZH0vbGlrZXNgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5jb25zdCBhZGRFdmVudExpc3RlbmVyVG9MaWtlQnRucyA9ICgpID0+IHtcbiAgY29uc3QgbGlrZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZS1idG4nKTtcbiAgbGlrZUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICAgIGNvbnN0IGxpa2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlLnRhcmdldC5pZCk7XG4gICAgICBsaWtlQnRuLnN0eWxlLmFuaW1hdGlvbiA9ICdhbmltYXRlIC44cyBzdGVwcygyOCkgMSc7XG4gICAgICBsaWtlQnRuLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICdyaWdodCc7XG4gICAgICBhd2FpdCBwb3N0TGlrZXNUb0FwaShlKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRMaWtlc0Zyb21BcGkoKTtcbiAgICAgIGNvbnN0IGZvdW5kTGlrZSA9IGF3YWl0IGZpbmRSaWdodEVsZW1lbnQoZGF0YSwgZS50YXJnZXQuaWQpO1xuICAgICAgY29uc3QgbGlrZUNvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGxpa2UtY291bnQtJHtlLnRhcmdldC5pZH1gKTtcbiAgICAgIGxpa2VDb3VudC50ZXh0Q29udGVudCA9IGAke2ZvdW5kTGlrZX0gbGlrZXNgO1xuICAgICAgbGlrZUJ0bi5zdHlsZS5hbmltYXRpb24gPSAnbm9uZSc7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgbGlrZXNDYWNoZSA9IHt9O1xuXG5jb25zdCBmZXRjaExpa2VzQ291bnRzID0gYXN5bmMgKCkgPT4ge1xuICBpZiAoT2JqZWN0LmtleXMobGlrZXNDYWNoZSkubGVuZ3RoID09PSAwKSB7XG4gICAgY29uc3QgbGlrZXNGcm9tQXBpID0gYXdhaXQgZ2V0TGlrZXNGcm9tQXBpKCk7XG5cbiAgICBsaWtlc0Zyb21BcGkubWFwKChsaWtlKSA9PiB7XG4gICAgICBsaWtlc0NhY2hlW2xpa2UuaXRlbV9pZF0gPSBsaWtlLmxpa2VzO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG4gIH1cbn07XG5cbmNvbnN0IGFwcGVuZExpa2VzVG9Eb20gPSAoaWQpID0+IGxpa2VzQ2FjaGVbaWRdIHx8IDA7XG5leHBvcnQgeyBhZGRFdmVudExpc3RlbmVyVG9MaWtlQnRucywgYXBwZW5kTGlrZXNUb0RvbSwgZmV0Y2hMaWtlc0NvdW50cyB9OyIsImNvbnN0IGNvdW50U2hvd3MgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0cy1jb250YWluZXInKTtcbiAgY29uc3QgY2hpbGRDb3VudCA9IGNvbnRhaW5lci5jaGlsZEVsZW1lbnRDb3VudDtcbiAgcmV0dXJuIGNoaWxkQ291bnQ7XG59O1xuXG5jb25zdCBzaG93Q291bnQgPSBhc3luYyAoZ2VucmUsIGNvdW50KSA9PiB7XG4gIGNvbnN0IGFsbFNob3dzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbC1zaG93cycpO1xuICBhbGxTaG93cy50ZXh0Q29udGVudCA9IGAke2dlbnJlfSAoICR7Y291bnR9IClgO1xufTtcblxuZXhwb3J0IHsgY291bnRTaG93cywgc2hvd0NvdW50IH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9