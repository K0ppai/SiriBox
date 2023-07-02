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

.scale-in-center {
	animation: scale-in-center 0.7s cubic-bezier(0.165, 0.840, 0.440, 1.000) both;
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
  
  #popUp{
    width:92vw;
    height:92vh;
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
`, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Lato', sans-serif;\r\n  color: white;\r\n}\r\n\r\nnav {\r\n  z-index: 8;\r\n  box-shadow: 0 0 10px rgb(28, 231, 131);\r\n}\r\n\r\nbody {\r\n  background-color: black;\r\n}\r\n\r\n#Koppai {\r\n  color: rgb(28, 231, 131);\r\n}\r\n\r\n.cmt-img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n#popUp {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 80vw;\r\n  z-index: 10;\r\n  overflow: hidden;\r\n}\r\n\r\n#form-title,\r\n#comment-title {\r\n  font-size: 20px;\r\n}\r\n\r\n#bg-layer {\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.close-btn {\r\n  font-size: 30px;\r\n  font-weight: 800;\r\n  background: none;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  padding-right: 20px;\r\n}\r\n\r\n#logo {\r\n  width: 100%;\r\n}\r\n\r\n#summary p,\r\n.small-fonts {\r\n  font-size: 13px;\r\n  margin: 0;\r\n}\r\n\r\n#all-shows {\r\n  font-size: 20px;\r\n}\r\n\r\n#comments {\r\n  max-height: 32vh;\r\n  overflow: auto;\r\n}\r\n\r\n#comments::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\nnav a {\r\n  width: 15%;\r\n  position: relative;\r\n  right: 2.5vw;\r\n}\r\n\r\n.shows {\r\n  width: 16vw;\r\n  height: 45vh;\r\n  position: relative;\r\n  background-color: rgb(0, 0, 0, 0.5);\r\n}\r\n\r\n.shows .background-image {\r\n  position: absolute;\r\n  background-size: cover;\r\n  opacity: 0.8;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: -5;\r\n}\r\n\r\n.shows:hover img {\r\n  cursor: pointer;\r\n  opacity: 0.8;\r\n}\r\n\r\n.show-titles {\r\n  text-align: center;\r\n  position: absolute;\r\n  top: 0;\r\n  font-size: 20px;\r\n  font-weight: 800;\r\n}\r\n\r\n.show-imgs {\r\n  width: 100%;\r\n  height: 70%;\r\n  object-fit: cover;\r\n}\r\n\r\n#summary {\r\n  height: 130px;\r\n  overflow: auto;\r\n}\r\n\r\n#drop-down {\r\n  width: 15%;\r\n  font-size: 16px;\r\n  padding: 6px;\r\n}\r\n\r\n#summary::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.like-container {\r\n  position: relative;\r\n}\r\n\r\n.heart {\r\n  cursor: pointer;\r\n  background: url(\"assets/likeButton.png\") no-repeat;\r\n  background-position: left;\r\n  background-size: cover;\r\n  height: 75px;\r\n  width: 75px;\r\n  position: absolute;\r\n  bottom: 20%;\r\n  right: -10%;\r\n}\r\n\r\n.likes {\r\n  position: relative;\r\n  left: 50%;\r\n  bottom: 100%;\r\n  width: 100%;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n}\r\n\r\n.btn-outline-success {\r\n  border-color: rgb(28, 231, 131);\r\n  color: rgb(28, 231, 131);\r\n  background-color: rgb(0, 0, 0, 0.5);\r\n}\r\n\r\n.btn-outline-success:hover {\r\n  background-color: rgb(28, 231, 131);\r\n  color: black;\r\n}\r\n\r\n.fa-heart {\r\n  cursor: pointer;\r\n}\r\n\r\n.heart.heart-active {\r\n  animation: animate 0.8s steps(28) 1;\r\n  background-position: right;\r\n}\r\n\r\n@keyframes animate {\r\n  0% {\r\n    background-position: left;\r\n  }\r\n\r\n  100% {\r\n    background-position: right;\r\n  }\r\n}\r\n\r\n#overlay {\r\n  background-color: rgb(0, 0, 0, 0.8);\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  opacity: 1;\r\n  z-index: 5;\r\n}\r\n\r\nselect option:checked {\r\n  background-color: rgb(28, 231, 131);\r\n}\r\n\r\nselect {\r\n  color: white;\r\n}\r\n\r\nselect option:hover {\r\n  background-color: rgb(28, 231, 131);\r\n}\r\n\r\n#popUp .background-image {\r\n  position: absolute;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: -10;\r\n}\r\n\r\n.scale-in-center {\r\n\tanimation: scale-in-center 0.7s cubic-bezier(0.165, 0.840, 0.440, 1.000) both;\r\n}\r\n.bounce-in-top {\r\n\t        animation: bounce-in-top 1.5s both;\r\n}\r\n\r\n@keyframes bounce-in-top {\r\n  0% {\r\n    -webkit-transform: translateY(-500px);\r\n            transform: translateY(-500px);\r\n    -webkit-animation-timing-function: ease-in;\r\n            animation-timing-function: ease-in;\r\n    opacity: 0;\r\n  }\r\n  38% {\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n    -webkit-animation-timing-function: ease-out;\r\n            animation-timing-function: ease-out;\r\n    opacity: 1;\r\n  }\r\n  55% {\r\n    -webkit-transform: translateY(-65px);\r\n            transform: translateY(-65px);\r\n    -webkit-animation-timing-function: ease-in;\r\n            animation-timing-function: ease-in;\r\n  }\r\n  72% {\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n    -webkit-animation-timing-function: ease-out;\r\n            animation-timing-function: ease-out;\r\n  }\r\n  81% {\r\n    -webkit-transform: translateY(-28px);\r\n            transform: translateY(-28px);\r\n    -webkit-animation-timing-function: ease-in;\r\n            animation-timing-function: ease-in;\r\n  }\r\n  90% {\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n    -webkit-animation-timing-function: ease-out;\r\n            animation-timing-function: ease-out;\r\n  }\r\n  95% {\r\n    -webkit-transform: translateY(-8px);\r\n            transform: translateY(-8px);\r\n    -webkit-animation-timing-function: ease-in;\r\n            animation-timing-function: ease-in;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n    -webkit-animation-timing-function: ease-out;\r\n            animation-timing-function: ease-out;\r\n  }\r\n}\r\n\r\n @keyframes scale-in-center {\r\n  0% {\r\n    transform: scale(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n@media screen and (min-width: 768px) {\r\n  .shows:hover {\r\n    cursor: pointer;\r\n    border: solid 5px rgb(28, 231, 131, 0.5);\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    transition: 0.2s;\r\n    background-color: rgb(0, 0, 0, 0.7);\r\n  }\r\n  \r\n}\r\n\r\n\r\n@media screen and (max-width: 768px) {\r\n  #logo {\r\n    width: 160%;\r\n    position: relative;\r\n    right: 30%;\r\n  }\r\n  \r\n  #popUp{\r\n    width:92vw;\r\n    height:92vh;\r\n  }\r\n\r\n  #drop-down {\r\n    position: relative;\r\n    left: 5%;\r\n    width: 30%;\r\n    font-size: 14px;\r\n    padding: 4px;\r\n  }\r\n\r\n  #all-shows {\r\n    font-size: 14px;\r\n    align-self: center;\r\n    position: relative;\r\n    left: 5%;\r\n  }\r\n\r\n  .shows {\r\n    width: 40vw;\r\n    height: 25vh;\r\n  }\r\n\r\n  .show-titles {\r\n    font-size: 12px;\r\n  }\r\n\r\n  .heart {\r\n    height: 50px;\r\n    width: 50px;\r\n    bottom: 10%;\r\n    right: -10px;\r\n  }\r\n\r\n  .likes {\r\n    font-size: 8px;\r\n    left: 20px;\r\n  }\r\n\r\n  .cmt-btn {\r\n    font-size: 12px;\r\n    padding: 20px;\r\n  }\r\n\r\n  .cmt-img {\r\n    display: none;\r\n  }\r\n\r\n  #summary {\r\n    height: 100px;\r\n  }\r\n\r\n  .cmt-show-name {\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n  }\r\n\r\n  #comment-title,\r\n  #form-title {\r\n    font-size: 15px;\r\n  }\r\n\r\n  #comments {\r\n    max-height: 17vh;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseUhBQXdDO0FBQ3BGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Ysa0hBQWtIO0FBQ2xILHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxTQUFTLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFV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dEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELFlBQVk7QUFDOUQ7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvQ0FBb0M7QUFDbkQsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1gyQzs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQyxnQkFBZ0I7QUFDbEU7QUFDQTtBQUNBLGlCQUFpQiw2Q0FBTyxDQUFDLEVBQUUsMkNBQUssQ0FBQztBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLDZDQUFPLENBQUMsRUFBRSwyQ0FBSyxDQUFDO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxZQUFZO0FBQzFFLGlDQUFpQyxXQUFXO0FBQzVDO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLE9BQU8sSUFBSSxPQUFPO0FBQzlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL2NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZHVsZXMvY29tbWVudENvdW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL2RhdGEuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZHVsZXMvZ2V0RGF0YWZyb21BcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZHVsZXMvbGlrZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9zaG93Q291bnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImFzc2V0cy9saWtlQnV0dG9uLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0byZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5uYXYge1xyXG4gIHotaW5kZXg6IDg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiKDI4LCAyMzEsIDEzMSk7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4jS29wcGFpIHtcclxuICBjb2xvcjogcmdiKDI4LCAyMzEsIDEzMSk7XHJcbn1cclxuXHJcbi5jbXQtaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiNwb3BVcCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB3aWR0aDogODB2dztcclxuICB6LWluZGV4OiAxMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4jZm9ybS10aXRsZSxcclxuI2NvbW1lbnQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuI2JnLWxheWVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbn1cclxuXHJcbi5jbG9zZS1idG4ge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbiNsb2dvIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI3N1bW1hcnkgcCxcclxuLnNtYWxsLWZvbnRzIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jYWxsLXNob3dzIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbiNjb21tZW50cyB7XHJcbiAgbWF4LWhlaWdodDogMzJ2aDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuI2NvbW1lbnRzOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxubmF2IGEge1xyXG4gIHdpZHRoOiAxNSU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHJpZ2h0OiAyLjV2dztcclxufVxyXG5cclxuLnNob3dzIHtcclxuICB3aWR0aDogMTZ2dztcclxuICBoZWlnaHQ6IDQ1dmg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uc2hvd3MgLmJhY2tncm91bmQtaW1hZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogLTU7XHJcbn1cclxuXHJcbi5zaG93czpob3ZlciBpbWcge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5zaG93LXRpdGxlcyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5zaG93LWltZ3Mge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNzAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4jc3VtbWFyeSB7XHJcbiAgaGVpZ2h0OiAxMzBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuI2Ryb3AtZG93biB7XHJcbiAgd2lkdGg6IDE1JTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZzogNnB4O1xyXG59XHJcblxyXG4jc3VtbWFyeTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5saWtlLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaGVhcnQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBoZWlnaHQ6IDc1cHg7XHJcbiAgd2lkdGg6IDc1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMjAlO1xyXG4gIHJpZ2h0OiAtMTAlO1xyXG59XHJcblxyXG4ubGlrZXMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgYm90dG9tOiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtc3VjY2VzcyB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjgsIDIzMSwgMTMxKTtcclxuICBjb2xvcjogcmdiKDI4LCAyMzEsIDEzMSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1zdWNjZXNzOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjgsIDIzMSwgMTMxKTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5mYS1oZWFydCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaGVhcnQuaGVhcnQtYWN0aXZlIHtcclxuICBhbmltYXRpb246IGFuaW1hdGUgMC44cyBzdGVwcygyOCkgMTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltYXRlIHtcclxuICAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcclxuICB9XHJcbn1cclxuXHJcbiNvdmVybGF5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC44KTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgb3BhY2l0eTogMTtcclxuICB6LWluZGV4OiA1O1xyXG59XHJcblxyXG5zZWxlY3Qgb3B0aW9uOmNoZWNrZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOCwgMjMxLCAxMzEpO1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuc2VsZWN0IG9wdGlvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI4LCAyMzEsIDEzMSk7XHJcbn1cclxuXHJcbiNwb3BVcCAuYmFja2dyb3VuZC1pbWFnZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogLTEwO1xyXG59XHJcblxyXG4uc2NhbGUtaW4tY2VudGVyIHtcclxuXHRhbmltYXRpb246IHNjYWxlLWluLWNlbnRlciAwLjdzIGN1YmljLWJlemllcigwLjE2NSwgMC44NDAsIDAuNDQwLCAxLjAwMCkgYm90aDtcclxufVxyXG4uYm91bmNlLWluLXRvcCB7XHJcblx0ICAgICAgICBhbmltYXRpb246IGJvdW5jZS1pbi10b3AgMS41cyBib3RoO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJvdW5jZS1pbi10b3Age1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MDBweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAwcHgpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMzglIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIDU1JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjVweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjVweCk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgfVxyXG4gIDcyJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgfVxyXG4gIDgxJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjhweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjhweCk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgfVxyXG4gIDkwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgfVxyXG4gIDk1JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcbn1cclxuXHJcbiBAa2V5ZnJhbWVzIHNjYWxlLWluLWNlbnRlciB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5zaG93czpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IHNvbGlkIDVweCByZ2IoMjgsIDIzMSwgMTMxLCAwLjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNyk7XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAjbG9nbyB7XHJcbiAgICB3aWR0aDogMTYwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHJpZ2h0OiAzMCU7XHJcbiAgfVxyXG4gIFxyXG4gICNwb3BVcHtcclxuICAgIHdpZHRoOjkydnc7XHJcbiAgICBoZWlnaHQ6OTJ2aDtcclxuICB9XHJcblxyXG4gICNkcm9wLWRvd24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNSU7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gIH1cclxuXHJcbiAgI2FsbC1zaG93cyB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1JTtcclxuICB9XHJcblxyXG4gIC5zaG93cyB7XHJcbiAgICB3aWR0aDogNDB2dztcclxuICAgIGhlaWdodDogMjV2aDtcclxuICB9XHJcblxyXG4gIC5zaG93LXRpdGxlcyB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICAuaGVhcnQge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBib3R0b206IDEwJTtcclxuICAgIHJpZ2h0OiAtMTBweDtcclxuICB9XHJcblxyXG4gIC5saWtlcyB7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuY210LWJ0biB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNtdC1pbWcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gICNzdW1tYXJ5IHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgfVxyXG5cclxuICAuY210LXNob3ctbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbiAgI2NvbW1lbnQtdGl0bGUsXHJcbiAgI2Zvcm0tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgI2NvbW1lbnRzIHtcclxuICAgIG1heC1oZWlnaHQ6IDE3dmg7XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLCtCQUErQjtFQUMvQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOztFQUVFLGVBQWU7RUFDZixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFD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SUFDVixlQUFlO0lBQ2YsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsUUFBUTtFQUNWOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7O0lBRUUsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG8mZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICB6LWluZGV4OiA4O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiKDI4LCAyMzEsIDEzMSk7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbiNLb3BwYWkge1xcclxcbiAgY29sb3I6IHJnYigyOCwgMjMxLCAxMzEpO1xcclxcbn1cXHJcXG5cXHJcXG4uY210LWltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3BvcFVwIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICB3aWR0aDogODB2dztcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvcm0tdGl0bGUsXFxyXFxuI2NvbW1lbnQtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jYmctbGF5ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtYnRuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNsb2dvIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VtbWFyeSBwLFxcclxcbi5zbWFsbC1mb250cyB7XFxyXFxuICBmb250LXNpemU6IDEzcHg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbiNhbGwtc2hvd3Mge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudHMge1xcclxcbiAgbWF4LWhlaWdodDogMzJ2aDtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudHM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbm5hdiBhIHtcXHJcXG4gIHdpZHRoOiAxNSU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICByaWdodDogMi41dnc7XFxyXFxufVxcclxcblxcclxcbi5zaG93cyB7XFxyXFxuICB3aWR0aDogMTZ2dztcXHJcXG4gIGhlaWdodDogNDV2aDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvd3MgLmJhY2tncm91bmQtaW1hZ2Uge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIG9wYWNpdHk6IDAuODtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IC01O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvd3M6aG92ZXIgaW1nIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3ctdGl0bGVzIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxufVxcclxcblxcclxcbi5zaG93LWltZ3Mge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDcwJTtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VtbWFyeSB7XFxyXFxuICBoZWlnaHQ6IDEzMHB4O1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNkcm9wLWRvd24ge1xcclxcbiAgd2lkdGg6IDE1JTtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIHBhZGRpbmc6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuI3N1bW1hcnk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5saWtlLWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5oZWFydCB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcImFzc2V0cy9saWtlQnV0dG9uLnBuZ1xcXCIpIG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgaGVpZ2h0OiA3NXB4O1xcclxcbiAgd2lkdGg6IDc1cHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDIwJTtcXHJcXG4gIHJpZ2h0OiAtMTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgYm90dG9tOiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLW91dGxpbmUtc3VjY2VzcyB7XFxyXFxuICBib3JkZXItY29sb3I6IHJnYigyOCwgMjMxLCAxMzEpO1xcclxcbiAgY29sb3I6IHJnYigyOCwgMjMxLCAxMzEpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbi5idG4tb3V0bGluZS1zdWNjZXNzOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOCwgMjMxLCAxMzEpO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtaGVhcnQge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhcnQuaGVhcnQtYWN0aXZlIHtcXHJcXG4gIGFuaW1hdGlvbjogYW5pbWF0ZSAwLjhzIHN0ZXBzKDI4KSAxO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYW5pbWF0ZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbiNvdmVybGF5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjgpO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgei1pbmRleDogNTtcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0IG9wdGlvbjpjaGVja2VkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOCwgMjMxLCAxMzEpO1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3Qge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3Qgb3B0aW9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOCwgMjMxLCAxMzEpO1xcclxcbn1cXHJcXG5cXHJcXG4jcG9wVXAgLmJhY2tncm91bmQtaW1hZ2Uge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB6LWluZGV4OiAtMTA7XFxyXFxufVxcclxcblxcclxcbi5zY2FsZS1pbi1jZW50ZXIge1xcclxcblxcdGFuaW1hdGlvbjogc2NhbGUtaW4tY2VudGVyIDAuN3MgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0MCwgMC40NDAsIDEuMDAwKSBib3RoO1xcclxcbn1cXHJcXG4uYm91bmNlLWluLXRvcCB7XFxyXFxuXFx0ICAgICAgICBhbmltYXRpb246IGJvdW5jZS1pbi10b3AgMS41cyBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGJvdW5jZS1pbi10b3Age1xcclxcbiAgMCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAwcHgpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAwcHgpO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG4gIDM4JSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXHJcXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG4gIDU1JSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02NXB4KTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTY1cHgpO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXHJcXG4gIH1cXHJcXG4gIDcyJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXHJcXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXHJcXG4gIH1cXHJcXG4gIDgxJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yOHB4KTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI4cHgpO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXHJcXG4gIH1cXHJcXG4gIDkwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXHJcXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXHJcXG4gIH1cXHJcXG4gIDk1JSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KTtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4gQGtleWZyYW1lcyBzY2FsZS1pbi1jZW50ZXIge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAuc2hvd3M6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogc29saWQgNXB4IHJnYigyOCwgMjMxLCAxMzEsIDAuNSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjcpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAjbG9nbyB7XFxyXFxuICAgIHdpZHRoOiAxNjAlO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHJpZ2h0OiAzMCU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNwb3BVcHtcXHJcXG4gICAgd2lkdGg6OTJ2dztcXHJcXG4gICAgaGVpZ2h0Ojkydmg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjZHJvcC1kb3duIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBsZWZ0OiA1JTtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBwYWRkaW5nOiA0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjYWxsLXNob3dzIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbGVmdDogNSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2hvd3Mge1xcclxcbiAgICB3aWR0aDogNDB2dztcXHJcXG4gICAgaGVpZ2h0OiAyNXZoO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNob3ctdGl0bGVzIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYXJ0IHtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgYm90dG9tOiAxMCU7XFxyXFxuICAgIHJpZ2h0OiAtMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5saWtlcyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogOHB4O1xcclxcbiAgICBsZWZ0OiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNtdC1idG4ge1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY210LWltZyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjc3VtbWFyeSB7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY210LXNob3ctbmFtZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjb21tZW50LXRpdGxlLFxcclxcbiAgI2Zvcm0tdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjY29tbWVudHMge1xcclxcbiAgICBtYXgtaGVpZ2h0OiAxN3ZoO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IGxvZ29JbWFnZSBmcm9tICcuL2Fzc2V0cy9zaXJpYm94LXJlbW92ZWJnLXByZXZpZXcucG5nJztcbmltcG9ydCB7IGZldGNoRGF0YSB9IGZyb20gJy4vbW9kdWxlcy9nZXREYXRhZnJvbUFwaS5qcyc7XG5pbXBvcnQgYWRkRXZlbnRMaXN0ZW5lclRvQ210QnRucyBmcm9tICcuL21vZHVsZXMvY29tbWVudC5qcyc7XG5pbXBvcnQgeyBhZGRFdmVudExpc3RlbmVyVG9MaWtlQnRucywgYXBwZW5kTGlrZXNUb0RvbSwgZmV0Y2hMaWtlc0NvdW50cyB9IGZyb20gJy4vbW9kdWxlcy9saWtlLmpzJztcbmltcG9ydCB7IGNvdW50U2hvd3MsIHNob3dDb3VudCB9IGZyb20gJy4vbW9kdWxlcy9zaG93Q291bnQuanMnO1xuXG5jb25zdCBsb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ28nKTtcbmxvZ28uc3JjID0gbG9nb0ltYWdlO1xuXG5jb25zdCBjb252ZXJ0QXBpRGF0YVRvSHRtbCA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IGh0bWxTdHJpbmcgPSBkYXRhLm1hcCgoc2hvdykgPT4gYFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgZC1mbGV4IGZsZXgtY29sdW1uIG14LTIgbXktNCBwLTAgc2hvd3MgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1lbmQgc2NhbGUtaW4tY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmFja2dyb3VuZC1pbWFnZVwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7c2hvdy5pbWFnZS5vcmlnaW5hbH0pO1wiPjwvZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzPVwibS0wIHNob3ctdGl0bGVzIHRleHQtd2hpdGUgcC0yXCI+JHtzaG93Lm5hbWV9PC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGxpa2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhcnQgbGlrZS1idG5cIiBpZD1cIiR7c2hvdy5pZH1cIj48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGlrZXNcIiBpZD1cImxpa2UtY291bnQtJHtzaG93LmlkfVwiPiR7YXBwZW5kTGlrZXNUb0RvbShzaG93LmlkKX0gbGlrZXM8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBjbXQtYnRuIGZ3LWJvbGQgdy03NSBhbGlnbi1zZWxmLWNlbnRlciBweC0yIHB5LTEgcC1tZC0xIG1iLTNcIiBkYXRhPVwiJHtzaG93LmlkfVwiPkNvbW1lbnRzPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICBgKS5qb2luKCcnKTtcbiAgcmV0dXJuIGh0bWxTdHJpbmc7XG59O1xuXG5jb25zdCBhbGxTaG93cyA9IGF3YWl0IGZldGNoRGF0YSgpO1xuXG5jb25zdCBkaXNwbGF5U2hvd3MgPSBhc3luYyAoZ2VucmUsIHNob3dzKSA9PiB7XG4gIGF3YWl0IGZldGNoTGlrZXNDb3VudHMoKTtcblxuICBjb25zdCBodG1sU3RyaW5nID0gY29udmVydEFwaURhdGFUb0h0bWwoc2hvd3MpO1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0cy1jb250YWluZXInKTtcbiAgdWwuaW5uZXJIVE1MID0gaHRtbFN0cmluZztcbiAgYWRkRXZlbnRMaXN0ZW5lclRvTGlrZUJ0bnMoKTtcbiAgYWRkRXZlbnRMaXN0ZW5lclRvQ210QnRucygpO1xuICBjb25zdCBudW1iZXJPZlNob3dzID0gY291bnRTaG93cygpO1xuICBzaG93Q291bnQoZ2VucmUsIG51bWJlck9mU2hvd3MpO1xufTtcblxuZGlzcGxheVNob3dzKCdBbGwgU2hvd3MnLCBhbGxTaG93cy5yZXZlcnNlKCkpO1xuXG5jb25zdCBkaXNwbGF5U2hvd3NCeUdlbnJlID0gKGdlbnJlKSA9PiB7XG4gIGlmIChnZW5yZSA9PT0gJ0FsbCBTaG93cycpIHtcbiAgICBkaXNwbGF5U2hvd3MoZ2VucmUsIGFsbFNob3dzKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGdlbnJlID09PSAnQ2hvb3NlIEdlbnJlJykge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBTaG93c0J5R2VucmUgPSBhbGxTaG93cy5maWx0ZXIoKHNob3cpID0+IHNob3cuZ2VucmVzLmluY2x1ZGVzKGdlbnJlKSk7XG4gIGRpc3BsYXlTaG93cyhnZW5yZSwgU2hvd3NCeUdlbnJlLnJldmVyc2UoKSk7XG59O1xuXG5jb25zdCBjaG9vc2VHZW5yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9wLWRvd24nKTtcbmNob29zZUdlbnJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gIGRpc3BsYXlTaG93c0J5R2VucmUoZS50YXJnZXQudmFsdWUpO1xufSk7IiwiaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4vZ2V0RGF0YWZyb21BcGkuanMnO1xuaW1wb3J0IGNvbW1lbnRDb3VudGVyIGZyb20gJy4vY29tbWVudENvdW50LmpzJztcbmltcG9ydCB7IGFwcElkIH0gZnJvbSAnLi9kYXRhLmpzJztcblxuY29uc3QgcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXJlbnQtY29udGFpbmVyJyk7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuY29uc3QgYmFzZVVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nO1xuXG5jb25zdCBmaW5kU2hvd0J5SWQgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgZGF0YXMgPSBhd2FpdCBnZXREYXRhKCk7XG4gIGNvbnN0IHNob3cgPSBhd2FpdCBkYXRhcy5maW5kKChkYXRhKSA9PiBkYXRhLmlkID09PSBOdW1iZXIoaWQpKTtcbiAgcmV0dXJuIHNob3c7XG59O1xuXG5jb25zdCBhZGRFdmVudExpc3RlbmVyVG9DbG9zZUJ0bnMgPSAoKSA9PiB7XG4gIGNvbnN0IGNsb3NlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbG9zZS1idG4nKTtcbiAgY2xvc2VCdG5zLmZvckVhY2goKGNsb3NlQnRuKSA9PiB7XG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBwb3BVcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3BVcCcpO1xuICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5Jyk7XG4gICAgICBwYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHBvcFVwKTtcbiAgICAgIHBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQob3ZlcmxheSk7XG4gICAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IHBvc3RDb21tZW50VG9BcGkgPSBhc3luYyAoZXZlbnQsIG5hbWVJbnB1dCwgY29tbWVudElucHV0KSA9PiB7XG4gIGNvbnN0IHJlcXVlc3RCb2R5ID0ge1xuICAgIGl0ZW1faWQ6IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEnKSxcbiAgICB1c2VybmFtZTogbmFtZUlucHV0LnZhbHVlLFxuICAgIGNvbW1lbnQ6IGNvbW1lbnRJbnB1dC52YWx1ZSxcbiAgfTtcbiAgY29uc3QgcmVxdWVzdCA9IHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSksXG4gIH07XG4gIGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9LyR7YXBwSWR9L2NvbW1lbnRzYCwgcmVxdWVzdCk7XG59O1xuXG5jb25zdCBnZXRDb21tZW50c0Zyb21BcGkgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS8ke2FwcElkfS9jb21tZW50cz9pdGVtX2lkPSR7aWR9YCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuY29uc3QgY2hhbmdlQXBpRGF0YVRvSHRtbCA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IGh0bWxTdHJpbmcgPSBkYXRhXG4gICAgLm1hcCgoZWxlbWVudCkgPT4gYFxuICAgIDxsaT5cbiAgICAgICR7ZWxlbWVudC5jcmVhdGlvbl9kYXRlfSA8c3Ryb25nIGNsYXNzPVwicHgtMVwiPiR7ZWxlbWVudC51c2VybmFtZX06PC9zdHJvbmc+ICR7ZWxlbWVudC5jb21tZW50fVxuICAgIDwvbGk+XG4gIGApLmpvaW4oJycpO1xuICByZXR1cm4gaHRtbFN0cmluZztcbn07XG5cbmNvbnN0IHNvcnRDb21tZW50c0Zyb21MYXRlc3QgPSAoY29tbWVudHMpID0+IHtcbiAgY29uc3QgbGF0ZXN0Q29tbWVudHMgPSBjb21tZW50cy5yZXZlcnNlKCk7XG4gIHJldHVybiBsYXRlc3RDb21tZW50cztcbn07XG5cbmNvbnN0IGFwcGVuZENvbW1lbnRzVG9Qb3B1cCA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50cycpO1xuICB1bC5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBnZXRDb21tZW50c0Zyb21BcGkoaWQpO1xuXG4gIGlmIChPYmplY3Qua2V5cyhjb21tZW50cylbMF0gPT09ICdlcnJvcicpIHtcbiAgICB1bC5pbm5lckhUTUwgPSAnTm8gY29tbWVudHMgeWV0JztcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsYXRlc3RDb21tZW50cyA9IHNvcnRDb21tZW50c0Zyb21MYXRlc3QoY29tbWVudHMpO1xuICAgIGNvbnN0IGxpID0gY2hhbmdlQXBpRGF0YVRvSHRtbChsYXRlc3RDb21tZW50cyk7XG4gICAgdWwuaW5uZXJIVE1MID0gbGk7XG4gIH1cbn07XG5cbmNvbnN0IHVwZGF0ZUNvbW1lbnRzID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnRzJyk7XG4gIGNvbnN0IGNvbW1lbnRUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50LXRpdGxlJyk7XG4gIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgZ2V0Q29tbWVudHNGcm9tQXBpKGlkKTtcbiAgY29uc3QgbGF0ZXN0Q29tbWVudHMgPSBzb3J0Q29tbWVudHNGcm9tTGF0ZXN0KGNvbW1lbnRzKTtcbiAgY29uc3QgbGkgPSBhd2FpdCBjaGFuZ2VBcGlEYXRhVG9IdG1sKGxhdGVzdENvbW1lbnRzKTtcbiAgdWwuaW5uZXJIVE1MID0gbGk7XG4gIGNvbW1lbnRUaXRsZS50ZXh0Q29udGVudCA9IGBDb21tZW50cyAoJHtjb21tZW50cy5sZW5ndGh9KWA7XG59O1xuXG5jb25zdCBhZGRFdmVudExpc3RlbmVyVG9Db21tZW50Rm9ybSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgY29uc3QgYWRkQ210QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1jbXQtYnRuJyk7XG4gIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VybmFtZScpO1xuICBjb25zdCBjb21tZW50SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcmNtdCcpO1xuXG4gIGFkZENtdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgaWYgKG5hbWVJbnB1dC52YWx1ZSA9PT0gJycgfHwgY29tbWVudElucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYXdhaXQgcG9zdENvbW1lbnRUb0FwaShlLCBuYW1lSW5wdXQsIGNvbW1lbnRJbnB1dCk7XG4gICAgdXBkYXRlQ29tbWVudHMoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhJykpO1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgfSk7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVBvcHVwQ29tbWVudEJveCA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCBzaG93ID0gYXdhaXQgZmluZFNob3dCeUlkKGlkKTtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb3ZlcmxheS5pZCA9ICdvdmVybGF5JztcblxuICBkaXYuaWQgPSAncG9wVXAnO1xuICBkaXYuY2xhc3NOYW1lID0gJ3JvdW5kZWQtNCc7XG4gIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBpZD1cImJnLWxheWVyXCIgY2xhc3M9XCJwLW1kLTUgcC0yIGgtMTAwXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCIgaWQ9XCJwb3B1cC1kZXNjXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJiYWNrZ3JvdW5kLWltYWdlXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtzaG93LmltYWdlLm9yaWdpbmFsfSk7XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIiR7c2hvdy5pbWFnZS5vcmlnaW5hbH1cIiBhbHQ9XCIke3Nob3cubmFtZX1cIiBjbGFzcz1cImNtdC1pbWdcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBwLTIgcC1tZC0wXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3M9XCJjbXQtc2hvdy1uYW1lXCI+JHtzaG93Lm5hbWV9PC9oMT5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjbG9zZS1idG4gcC0wXCI+JnRpbWVzOzwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWFyb3VuZCBtYi0yIG0tbWQtMFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzbWFsbC1mb250c1wiPjxzdHJvbmc+UmF0aW5nIDo8L3N0cm9uZz4gJHtzaG93LnJhdGluZy5hdmVyYWdlfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic21hbGwtZm9udHNcIj48YSBocmVmPVwiaHR0cHM6Ly93d3cuaW1kYi5jb20vdGl0bGUvJHtzaG93LmV4dGVybmFscy5pbWRifS9cIj48c3Ryb25nPklNREIgOjwvc3Ryb25nPiAke3Nob3cuZXh0ZXJuYWxzLmltZGJ9PC9hPjwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImZzLTYgZnctYm9sZCBweS01IHAtbWQtMFwiPk92ZXJ2aWV3IDo8L3NwYW4+PGJyPlxuICAgICAgICAgIDxhcnRpY2xlIGlkPVwic3VtbWFyeVwiIGNsYXNzPVwic21hbGwtZm9udHMgbWItMlwiPiR7c2hvdy5zdW1tYXJ5fTwvYXJ0aWNsZT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTdcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzbWFsbC1mb250c1wiPjxzdHJvbmc+R2VucmVzIDogPC9zdHJvbmc+JHtzaG93LmdlbnJlc308L3NwYW4+PGJyPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNtYWxsLWZvbnRzXCI+PHN0cm9uZz5BdmVyYWdlIFJ1biBUaW1lIDogPC9zdHJvbmc+JHtzaG93LmF2ZXJhZ2VSdW50aW1lfTwvc3Bhbj48YnI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic21hbGwtZm9udHNcIj48c3Ryb25nPkVuZGVkIDogPC9zdHJvbmc+JHtzaG93LmVuZGVkfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC01XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic21hbGwtZm9udHNcIj48c3Ryb25nPkxhbmd1YWdlIDogPC9zdHJvbmc+JHtzaG93Lmxhbmd1YWdlfTwvc3Bhbj48YnI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic21hbGwtZm9udHNcIj48c3Ryb25nPlR5cGUgOiA8L3N0cm9uZz4ke3Nob3cudHlwZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBwLW1kLTIgbXQtbWQtMFwiIGlkPVwicG9wdXAtY210LXNlY1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciBtdC0yXCI+XG4gICAgICAgICAgPGgzIGNsYXNzPVwicC0xXCI+PHN0cm9uZyBpZD1cImNvbW1lbnQtdGl0bGVcIj5MYXRlc3QgQ29tbWVudHMoKTwvc3Ryb25nPjwvaDM+XG4gICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC11bnN0eWxlZCBtYi0xXCIgaWQ9XCJjb21tZW50c1wiPlxuICAgICAgICAgIFxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Zm9ybSBjbGFzcz1cImNvbC1tZC02IGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXIgbXQtMlwiPlxuICAgICAgICAgIDxoMyBjbGFzcz1cInAtMVwiIGlkPVwiZm9ybS10aXRsZVwiPjxzdHJvbmc+QWRkIGEgY29tbWVudDwvc3Ryb25nPjwvaDM+XG4gICAgICAgICAgPGlucHV0IGlkPVwidXNlcm5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgY2xhc3M9XCJtYi0yIGZvcm0tY29udHJvbCB3LTUwIHB4LTIgcHktMVwiIHJlcXVpcmVkPlxuICAgICAgICAgIDxpbnB1dCBpZD1cInVzZXJjbXRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWW91ciBjb21tZW50XCIgY2xhc3M9XCJtYi0yIGZvcm0tY29udHJvbCB3LTUwIHB4LTIgcHktMVwiIHJlcXVpcmVkPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGRhdGE9XCIke2lkfVwiIGNsYXNzPVwiYnRuLW91dGxpbmUtc3VjY2VzcyBidG4gcHgtMiBweS0xIGZ3LWJvbGRcIiBpZD1cImFkZC1jbXQtYnRuXCI+QWRkIGNvbW1lbnQ8L2J1dHRvbj5cbiAgICAgICAgPGZvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYDtcblxuICBwYXJlbnRFbGVtZW50LmFwcGVuZChkaXYsIG92ZXJsYXkpO1xuICBhZGRFdmVudExpc3RlbmVyVG9DbG9zZUJ0bnMoKTtcbiAgYWRkRXZlbnRMaXN0ZW5lclRvQ29tbWVudEZvcm0oKTtcbiAgYXdhaXQgYXBwZW5kQ29tbWVudHNUb1BvcHVwKGlkKTtcbiAgYXdhaXQgY29tbWVudENvdW50ZXIoKTtcbn07XG5cbmNvbnN0IGFkZEV2ZW50TGlzdGVuZXJUb0NtdEJ0bnMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGNtdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY210LWJ0bicpO1xuICBjbXRCdG5zLmZvckVhY2goKGNtdEJ0bikgPT4ge1xuICAgIGNtdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBnZW5lcmF0ZVBvcHVwQ29tbWVudEJveChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEnKSk7XG4gICAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgYWRkRXZlbnRMaXN0ZW5lclRvQ210QnRucyBhcyBkZWZhdWx0IH07IiwiY29uc3QgY29tbWVudENvdW50ZXIgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnRzJyk7XG4gIGNvbnN0IGNoaWxkQ291bnQgPSB1bC5jaGlsZEVsZW1lbnRDb3VudDtcbiAgY29uc3QgY29tbWVudFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnQtdGl0bGUnKTtcbiAgY29tbWVudFRpdGxlLnRleHRDb250ZW50ID0gYExhdGVzdCBDb21tZW50cyAoICR7Y2hpbGRDb3VudH0gKWA7XG4gIHJldHVybiBjaGlsZENvdW50O1xufTtcbmV4cG9ydCB7IGNvbW1lbnRDb3VudGVyIGFzIGRlZmF1bHQgfTsiLCJjb25zdCBhcHBJZCA9ICdHRGVrcFBuMzJUdmxlT1c0T29ZMic7XG5jb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyc7XG5cbmNvbnN0IGNyZWF0ZUFwcElkID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGJhc2VVcmwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgfSk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gIHJldHVybiBkYXRhO1xufTtcbmNyZWF0ZUFwcElkKCk7XG5leHBvcnQgeyBhcHBJZCwgYmFzZVVybCB9OyIsImNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MnKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5jb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gIGxldCBzaG93cyA9IFtdO1xuICBzaG93cyA9IGF3YWl0IGdldERhdGEoKTtcbiAgcmV0dXJuIHNob3dzO1xufTtcbmF3YWl0IGZldGNoRGF0YSgpO1xuZXhwb3J0IHsgZ2V0RGF0YSwgZmV0Y2hEYXRhIH07IiwiaW1wb3J0IHsgYmFzZVVybCwgYXBwSWQgfSBmcm9tICcuL2RhdGEuanMnO1xuXG5jb25zdCBwb3N0TGlrZXNUb0FwaSA9IGFzeW5jIChldmVudCkgPT4ge1xuICBjb25zdCByZXF1ZXN0Qm9keSA9IHtcbiAgICBpdGVtX2lkOiBldmVudC50YXJnZXQuaWQsXG4gICAgbGlrZTogMCxcbiAgfTtcbiAgY29uc3QgcmVxdWVzdCA9IHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSksXG4gIH07XG4gIGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9JHthcHBJZH0vbGlrZXNgLCByZXF1ZXN0KTtcbn07XG5cbmNvbnN0IGZpbmRSaWdodEVsZW1lbnQgPSBhc3luYyAoZGF0YXMsIGlkKSA9PiB7XG4gIGNvbnN0IGZvdW5kTGlrZSA9IGF3YWl0IGRhdGFzLmZpbmQoKGRhdGEpID0+IGRhdGEuaXRlbV9pZCA9PT0gaWQpO1xuICBpZiAoZm91bmRMaWtlKSByZXR1cm4gZm91bmRMaWtlLmxpa2VzO1xuICByZXR1cm4gMDtcbn07XG5cbmNvbnN0IGdldExpa2VzRnJvbUFwaSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfSR7YXBwSWR9L2xpa2VzYCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuY29uc3QgYWRkRXZlbnRMaXN0ZW5lclRvTGlrZUJ0bnMgPSAoKSA9PiB7XG4gIGNvbnN0IGxpa2VCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpa2UtYnRuJyk7XG4gIGxpa2VCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgICBjb25zdCBsaWtlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZS50YXJnZXQuaWQpO1xuICAgICAgbGlrZUJ0bi5zdHlsZS5hbmltYXRpb24gPSAnYW5pbWF0ZSAuOHMgc3RlcHMoMjgpIDEnO1xuICAgICAgbGlrZUJ0bi5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSAncmlnaHQnO1xuICAgICAgYXdhaXQgcG9zdExpa2VzVG9BcGkoZSk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0TGlrZXNGcm9tQXBpKCk7XG4gICAgICBjb25zdCBmb3VuZExpa2UgPSBhd2FpdCBmaW5kUmlnaHRFbGVtZW50KGRhdGEsIGUudGFyZ2V0LmlkKTtcbiAgICAgIGNvbnN0IGxpa2VDb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBsaWtlLWNvdW50LSR7ZS50YXJnZXQuaWR9YCk7XG4gICAgICBsaWtlQ291bnQudGV4dENvbnRlbnQgPSBgJHtmb3VuZExpa2V9IGxpa2VzYDtcbiAgICAgIGxpa2VCdG4uc3R5bGUuYW5pbWF0aW9uID0gJ25vbmUnO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGxpa2VzQ2FjaGUgPSB7fTtcblxuY29uc3QgZmV0Y2hMaWtlc0NvdW50cyA9IGFzeW5jICgpID0+IHtcbiAgaWYgKE9iamVjdC5rZXlzKGxpa2VzQ2FjaGUpLmxlbmd0aCA9PT0gMCkge1xuICAgIGNvbnN0IGxpa2VzRnJvbUFwaSA9IGF3YWl0IGdldExpa2VzRnJvbUFwaSgpO1xuXG4gICAgbGlrZXNGcm9tQXBpLm1hcCgobGlrZSkgPT4ge1xuICAgICAgbGlrZXNDYWNoZVtsaWtlLml0ZW1faWRdID0gbGlrZS5saWtlcztcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCBhcHBlbmRMaWtlc1RvRG9tID0gKGlkKSA9PiBsaWtlc0NhY2hlW2lkXSB8fCAwO1xuZXhwb3J0IHsgYWRkRXZlbnRMaXN0ZW5lclRvTGlrZUJ0bnMsIGFwcGVuZExpa2VzVG9Eb20sIGZldGNoTGlrZXNDb3VudHMgfTsiLCJjb25zdCBjb3VudFNob3dzID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdHMtY29udGFpbmVyJyk7XG4gIGNvbnN0IGNoaWxkQ291bnQgPSBjb250YWluZXIuY2hpbGRFbGVtZW50Q291bnQ7XG4gIHJldHVybiBjaGlsZENvdW50O1xufTtcblxuY29uc3Qgc2hvd0NvdW50ID0gYXN5bmMgKGdlbnJlLCBjb3VudCkgPT4ge1xuICBjb25zdCBhbGxTaG93cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGwtc2hvd3MnKTtcbiAgYWxsU2hvd3MudGV4dENvbnRlbnQgPSBgJHtnZW5yZX0gKCAke2NvdW50fSApYDtcbn07XG5cbmV4cG9ydCB7IGNvdW50U2hvd3MsIHNob3dDb3VudCB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==