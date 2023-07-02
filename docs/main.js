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
}

.shows::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
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
  width: 20%;
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
  animation-fill-mode: backwards;
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
    background-color: rgba(0, 0, 0, 0.7);
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
    left: 3%;
  }

  .shows {
    width: 25vw;
    height: 20vh;
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

@media screen and (min-width: 1200px) {
  .shows {
    width: 17vw;
    height: 45vh;
  }
}
`, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Lato', sans-serif;\r\n  color: white;\r\n}\r\n\r\nnav {\r\n  z-index: 8;\r\n  box-shadow: 0 0 10px rgb(28, 231, 131);\r\n}\r\n\r\nbody {\r\n  background-color: black;\r\n}\r\n\r\n#Koppai {\r\n  color: rgb(28, 231, 131);\r\n}\r\n\r\n.cmt-img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n#popUp {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 80vw;\r\n  z-index: 10;\r\n  overflow: hidden;\r\n}\r\n\r\n#form-title,\r\n#comment-title {\r\n  font-size: 20px;\r\n}\r\n\r\n#bg-layer {\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.close-btn {\r\n  font-size: 30px;\r\n  font-weight: 800;\r\n  background: none;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  padding-right: 20px;\r\n}\r\n\r\n#logo {\r\n  width: 100%;\r\n}\r\n\r\n#summary p,\r\n.small-fonts {\r\n  font-size: 13px;\r\n  margin: 0;\r\n}\r\n\r\n#all-shows {\r\n  font-size: 20px;\r\n}\r\n\r\n#comments {\r\n  max-height: 32vh;\r\n  overflow: auto;\r\n}\r\n\r\n#comments::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\nnav a {\r\n  width: 15%;\r\n  position: relative;\r\n  right: 2.5vw;\r\n}\r\n\r\n.shows {\r\n  width: 25vw;\r\n  height: 30vh;\r\n  position: relative;\r\n}\r\n\r\n.shows::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  z-index: -1;\r\n}\r\n\r\n.shows .background-image {\r\n  position: absolute;\r\n  background-size: cover;\r\n  opacity: 0.8;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: -5;\r\n}\r\n\r\n.shows:hover img {\r\n  cursor: pointer;\r\n  opacity: 0.8;\r\n}\r\n\r\n.show-titles {\r\n  text-align: center;\r\n  position: absolute;\r\n  top: 0;\r\n  font-size: 20px;\r\n  font-weight: 800;\r\n}\r\n\r\n.show-imgs {\r\n  width: 100%;\r\n  height: 70%;\r\n  object-fit: cover;\r\n}\r\n\r\n#summary {\r\n  height: 130px;\r\n  overflow: auto;\r\n}\r\n\r\n#drop-down {\r\n  width: 20%;\r\n  font-size: 16px;\r\n  padding: 6px;\r\n}\r\n\r\n#summary::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.like-container {\r\n  position: relative;\r\n}\r\n\r\n.heart {\r\n  cursor: pointer;\r\n  background: url(\"assets/likeButton.png\") no-repeat;\r\n  background-position: left;\r\n  background-size: cover;\r\n  height: 75px;\r\n  width: 75px;\r\n  position: absolute;\r\n  bottom: 20%;\r\n  right: -10%;\r\n}\r\n\r\n.likes {\r\n  position: relative;\r\n  left: 50%;\r\n  bottom: 100%;\r\n  width: 100%;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n}\r\n\r\n.btn-outline-success {\r\n  border-color: rgb(28, 231, 131);\r\n  color: rgb(28, 231, 131);\r\n  background-color: rgb(0, 0, 0, 0.5);\r\n}\r\n\r\n.btn-outline-success:hover {\r\n  background-color: rgb(28, 231, 131);\r\n  color: black;\r\n}\r\n\r\n.fa-heart {\r\n  cursor: pointer;\r\n}\r\n\r\n.heart.heart-active {\r\n  animation: animate 0.8s steps(28) 1;\r\n  background-position: right;\r\n}\r\n\r\n@keyframes animate {\r\n  0% {\r\n    background-position: left;\r\n  }\r\n\r\n  100% {\r\n    background-position: right;\r\n  }\r\n}\r\n\r\n#overlay {\r\n  background-color: rgb(0, 0, 0, 0.8);\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  opacity: 1;\r\n  z-index: 5;\r\n}\r\n\r\nselect option:checked {\r\n  background-color: rgb(28, 231, 131);\r\n}\r\n\r\nselect {\r\n  color: white;\r\n}\r\n\r\nselect option:hover {\r\n  background-color: rgb(28, 231, 131);\r\n}\r\n\r\n#popUp .background-image {\r\n  position: absolute;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: -10;\r\n}\r\n\r\n.scale-in-center {\r\n  animation: scale-in-center 0.7s cubic-bezier(0.165, 0.84, 0.44, 1) both;\r\n  animation-fill-mode: backwards;\r\n}\r\n\r\n.bounce-in-top {\r\n  animation: bounce-in-top 1.5s both;\r\n}\r\n\r\n@keyframes bounce-in-top {\r\n  0% {\r\n    -webkit-transform: translateY(-500px);\r\n    transform: translateY(-500px);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n    opacity: 0;\r\n  }\r\n\r\n  38% {\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n    -webkit-animation-timing-function: ease-out;\r\n    animation-timing-function: ease-out;\r\n    opacity: 1;\r\n  }\r\n\r\n  55% {\r\n    -webkit-transform: translateY(-65px);\r\n    transform: translateY(-65px);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n\r\n  72% {\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n    -webkit-animation-timing-function: ease-out;\r\n    animation-timing-function: ease-out;\r\n  }\r\n\r\n  81% {\r\n    -webkit-transform: translateY(-28px);\r\n    transform: translateY(-28px);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n\r\n  90% {\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n    -webkit-animation-timing-function: ease-out;\r\n    animation-timing-function: ease-out;\r\n  }\r\n\r\n  95% {\r\n    -webkit-transform: translateY(-8px);\r\n    transform: translateY(-8px);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n    -webkit-animation-timing-function: ease-out;\r\n    animation-timing-function: ease-out;\r\n  }\r\n}\r\n\r\n@keyframes scale-in-center {\r\n  0% {\r\n    transform: scale(0);\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .shows:hover {\r\n    cursor: pointer;\r\n    border: solid 5px rgb(28, 231, 131, 0.5);\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    transition: 0.2s;\r\n    background-color: rgba(0, 0, 0, 0.7);\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  #logo {\r\n    width: 160%;\r\n    position: relative;\r\n    right: 30%;\r\n  }\r\n\r\n  #popUp {\r\n    width: 92vw;\r\n    height: 92vh;\r\n  }\r\n\r\n  #drop-down {\r\n    position: relative;\r\n    left: 5%;\r\n    width: 30%;\r\n    font-size: 14px;\r\n    padding: 4px;\r\n  }\r\n\r\n  #all-shows {\r\n    font-size: 14px;\r\n    align-self: center;\r\n    position: relative;\r\n    left: 3%;\r\n  }\r\n\r\n  .shows {\r\n    width: 25vw;\r\n    height: 20vh;\r\n  }\r\n\r\n  .show-titles {\r\n    font-size: 12px;\r\n  }\r\n\r\n  .heart {\r\n    height: 50px;\r\n    width: 50px;\r\n    bottom: 10%;\r\n    right: -10px;\r\n  }\r\n\r\n  .likes {\r\n    font-size: 8px;\r\n    left: 20px;\r\n  }\r\n\r\n  .cmt-btn {\r\n    font-size: 12px;\r\n    padding: 20px;\r\n  }\r\n\r\n  .cmt-img {\r\n    display: none;\r\n  }\r\n\r\n  #summary {\r\n    height: 100px;\r\n  }\r\n\r\n  .cmt-show-name {\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n  }\r\n\r\n  #comment-title,\r\n  #form-title {\r\n    font-size: 15px;\r\n  }\r\n\r\n  #comments {\r\n    max-height: 17vh;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n  .shows {\r\n    width: 17vw;\r\n    height: 45vh;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

await displayShows('All Shows', allShows.reverse());

const displayShowsByGenre = (genre) => {
  if (genre === 'All Shows') {
    displayShows(genre, allShows);
    return;
  }
  if (genre === 'Choose Genre' || genre === 'Genre') {
    return;
  }
  const ShowsByGenre = allShows.filter((show) => show.genres.includes(genre));
  displayShows(genre, ShowsByGenre.reverse());
};

const chooseGenre = document.getElementById('drop-down');
chooseGenre.addEventListener('change', (e) => {
  displayShowsByGenre(e.target.value);
});

const selectedOption = document.querySelector('option[selected]');

const updateSelectedOptionText = () => {
  if (window.innerWidth <= 768) {
    selectedOption.innerHTML = 'Genre';
  } else {
    selectedOption.innerHTML = 'Choose Genre';
  }
};

// Initial update when the page loads
updateSelectedOptionText();

// Event listener for window resize to update the text dynamically
window.addEventListener('resize', updateSelectedOptionText);

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
    <div id="bg-layer" class="p-md-5 px-4 py-2 h-100">
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseUhBQXdDO0FBQ3BGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Ysa0hBQWtIO0FBQ2xILHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1DQUFtQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFh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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsWUFBWTtBQUMxRSxpQ0FBaUMsV0FBVztBQUM1QztBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixPQUFPLElBQUksT0FBTztBQUM5QyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9jb21tZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL2NvbW1lbnRDb3VudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9kYXRhLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL2dldERhdGFmcm9tQXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL2xpa2UuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZHVsZXMvc2hvd0NvdW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJhc3NldHMvbGlrZUJ1dHRvbi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxubmF2IHtcclxuICB6LWluZGV4OiA4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYigyOCwgMjMxLCAxMzEpO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuI0tvcHBhaSB7XHJcbiAgY29sb3I6IHJnYigyOCwgMjMxLCAxMzEpO1xyXG59XHJcblxyXG4uY210LWltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jcG9wVXAge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuI2Zvcm0tdGl0bGUsXHJcbiNjb21tZW50LXRpdGxlIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbiNiZy1sYXllciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG59XHJcblxyXG4uY2xvc2UtYnRuIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4jbG9nbyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNzdW1tYXJ5IHAsXHJcbi5zbWFsbC1mb250cyB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2FsbC1zaG93cyB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4jY29tbWVudHMge1xyXG4gIG1heC1oZWlnaHQ6IDMydmg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbiNjb21tZW50czo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbm5hdiBhIHtcclxuICB3aWR0aDogMTUlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICByaWdodDogMi41dnc7XHJcbn1cclxuXHJcbi5zaG93cyB7XHJcbiAgd2lkdGg6IDI1dnc7XHJcbiAgaGVpZ2h0OiAzMHZoO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNob3dzOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4uc2hvd3MgLmJhY2tncm91bmQtaW1hZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogLTU7XHJcbn1cclxuXHJcbi5zaG93czpob3ZlciBpbWcge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5zaG93LXRpdGxlcyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5zaG93LWltZ3Mge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNzAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4jc3VtbWFyeSB7XHJcbiAgaGVpZ2h0OiAxMzBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuI2Ryb3AtZG93biB7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZzogNnB4O1xyXG59XHJcblxyXG4jc3VtbWFyeTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5saWtlLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaGVhcnQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBoZWlnaHQ6IDc1cHg7XHJcbiAgd2lkdGg6IDc1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMjAlO1xyXG4gIHJpZ2h0OiAtMTAlO1xyXG59XHJcblxyXG4ubGlrZXMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgYm90dG9tOiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtc3VjY2VzcyB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjgsIDIzMSwgMTMxKTtcclxuICBjb2xvcjogcmdiKDI4LCAyMzEsIDEzMSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1zdWNjZXNzOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjgsIDIzMSwgMTMxKTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5mYS1oZWFydCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaGVhcnQuaGVhcnQtYWN0aXZlIHtcclxuICBhbmltYXRpb246IGFuaW1hdGUgMC44cyBzdGVwcygyOCkgMTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltYXRlIHtcclxuICAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcclxuICB9XHJcbn1cclxuXHJcbiNvdmVybGF5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC44KTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgb3BhY2l0eTogMTtcclxuICB6LWluZGV4OiA1O1xyXG59XHJcblxyXG5zZWxlY3Qgb3B0aW9uOmNoZWNrZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOCwgMjMxLCAxMzEpO1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuc2VsZWN0IG9wdGlvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI4LCAyMzEsIDEzMSk7XHJcbn1cclxuXHJcbiNwb3BVcCAuYmFja2dyb3VuZC1pbWFnZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogLTEwO1xyXG59XHJcblxyXG4uc2NhbGUtaW4tY2VudGVyIHtcclxuICBhbmltYXRpb246IHNjYWxlLWluLWNlbnRlciAwLjdzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSkgYm90aDtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBiYWNrd2FyZHM7XHJcbn1cclxuXHJcbi5ib3VuY2UtaW4tdG9wIHtcclxuICBhbmltYXRpb246IGJvdW5jZS1pbi10b3AgMS41cyBib3RoO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJvdW5jZS1pbi10b3Age1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MDBweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwMHB4KTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgMzglIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIDU1JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjVweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTY1cHgpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICB9XHJcblxyXG4gIDcyJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcblxyXG4gIDgxJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjhweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI4cHgpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICB9XHJcblxyXG4gIDkwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcblxyXG4gIDk1JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzY2FsZS1pbi1jZW50ZXIge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLnNob3dzOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogc29saWQgNXB4IHJnYigyOCwgMjMxLCAxMzEsIDAuNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICNsb2dvIHtcclxuICAgIHdpZHRoOiAxNjAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcmlnaHQ6IDMwJTtcclxuICB9XHJcblxyXG4gICNwb3BVcCB7XHJcbiAgICB3aWR0aDogOTJ2dztcclxuICAgIGhlaWdodDogOTJ2aDtcclxuICB9XHJcblxyXG4gICNkcm9wLWRvd24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNSU7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gIH1cclxuXHJcbiAgI2FsbC1zaG93cyB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAzJTtcclxuICB9XHJcblxyXG4gIC5zaG93cyB7XHJcbiAgICB3aWR0aDogMjV2dztcclxuICAgIGhlaWdodDogMjB2aDtcclxuICB9XHJcblxyXG4gIC5zaG93LXRpdGxlcyB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICAuaGVhcnQge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBib3R0b206IDEwJTtcclxuICAgIHJpZ2h0OiAtMTBweDtcclxuICB9XHJcblxyXG4gIC5saWtlcyB7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuY210LWJ0biB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNtdC1pbWcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gICNzdW1tYXJ5IHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgfVxyXG5cclxuICAuY210LXNob3ctbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbiAgI2NvbW1lbnQtdGl0bGUsXHJcbiAgI2Zvcm0tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgI2NvbW1lbnRzIHtcclxuICAgIG1heC1oZWlnaHQ6IDE3dmg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAuc2hvd3Mge1xyXG4gICAgd2lkdGg6IDE3dnc7XHJcbiAgICBoZWlnaHQ6IDQ1dmg7XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLCtCQUErQjtFQUMvQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFD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Q0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTs7SUFFRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgei1pbmRleDogODtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYigyOCwgMjMxLCAxMzEpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jS29wcGFpIHtcXHJcXG4gIGNvbG9yOiByZ2IoMjgsIDIzMSwgMTMxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNtdC1pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNwb3BVcCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgd2lkdGg6IDgwdnc7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbiNmb3JtLXRpdGxlLFxcclxcbiNjb21tZW50LXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2JnLWxheWVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWJ0biB7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nbyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3N1bW1hcnkgcCxcXHJcXG4uc21hbGwtZm9udHMge1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jYWxsLXNob3dzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnRzIHtcXHJcXG4gIG1heC1oZWlnaHQ6IDMydmg7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnRzOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgYSB7XFxyXFxuICB3aWR0aDogMTUlO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcmlnaHQ6IDIuNXZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvd3Mge1xcclxcbiAgd2lkdGg6IDI1dnc7XFxyXFxuICBoZWlnaHQ6IDMwdmg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5zaG93czo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxufVxcclxcblxcclxcbi5zaG93cyAuYmFja2dyb3VuZC1pbWFnZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgb3BhY2l0eTogMC44O1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgei1pbmRleDogLTU7XFxyXFxufVxcclxcblxcclxcbi5zaG93czpob3ZlciBpbWcge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgb3BhY2l0eTogMC44O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy10aXRsZXMge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3ctaW1ncyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNzAlO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblxcclxcbiNzdW1tYXJ5IHtcXHJcXG4gIGhlaWdodDogMTMwcHg7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI2Ryb3AtZG93biB7XFxyXFxuICB3aWR0aDogMjAlO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgcGFkZGluZzogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc3VtbWFyeTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYXJ0IHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiYXNzZXRzL2xpa2VCdXR0b24ucG5nXFxcIikgbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBoZWlnaHQ6IDc1cHg7XFxyXFxuICB3aWR0aDogNzVweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMjAlO1xcclxcbiAgcmlnaHQ6IC0xMCU7XFxyXFxufVxcclxcblxcclxcbi5saWtlcyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICBib3R0b206IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5idG4tb3V0bGluZS1zdWNjZXNzIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiKDI4LCAyMzEsIDEzMSk7XFxyXFxuICBjb2xvcjogcmdiKDI4LCAyMzEsIDEzMSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI4LCAyMzEsIDEzMSk7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5mYS1oZWFydCB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFydC5oZWFydC1hY3RpdmUge1xcclxcbiAgYW5pbWF0aW9uOiBhbmltYXRlIDAuOHMgc3RlcHMoMjgpIDE7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBhbmltYXRlIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuI292ZXJsYXkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuOCk7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICB6LWluZGV4OiA1O1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3Qgb3B0aW9uOmNoZWNrZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI4LCAyMzEsIDEzMSk7XFxyXFxufVxcclxcblxcclxcbnNlbGVjdCB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbnNlbGVjdCBvcHRpb246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI4LCAyMzEsIDEzMSk7XFxyXFxufVxcclxcblxcclxcbiNwb3BVcCAuYmFja2dyb3VuZC1pbWFnZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IC0xMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNjYWxlLWluLWNlbnRlciB7XFxyXFxuICBhbmltYXRpb246IHNjYWxlLWluLWNlbnRlciAwLjdzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSkgYm90aDtcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJhY2t3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuLmJvdW5jZS1pbi10b3Age1xcclxcbiAgYW5pbWF0aW9uOiBib3VuY2UtaW4tdG9wIDEuNXMgYm90aDtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBib3VuY2UtaW4tdG9wIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwMHB4KTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MDBweCk7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXHJcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDM4JSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxyXFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcblxcclxcbiAgNTUlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTY1cHgpO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTY1cHgpO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxyXFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICA3MiUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcclxcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDgxJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yOHB4KTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yOHB4KTtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcclxcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcclxcbiAgfVxcclxcblxcclxcbiAgOTAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXHJcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA5NSUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxyXFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXHJcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2NhbGUtaW4tY2VudGVyIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgLnNob3dzOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDVweCByZ2IoMjgsIDIzMSwgMTMxLCAwLjUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAjbG9nbyB7XFxyXFxuICAgIHdpZHRoOiAxNjAlO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHJpZ2h0OiAzMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjcG9wVXAge1xcclxcbiAgICB3aWR0aDogOTJ2dztcXHJcXG4gICAgaGVpZ2h0OiA5MnZoO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2Ryb3AtZG93biB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbGVmdDogNSU7XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgcGFkZGluZzogNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI2FsbC1zaG93cyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGxlZnQ6IDMlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNob3dzIHtcXHJcXG4gICAgd2lkdGg6IDI1dnc7XFxyXFxuICAgIGhlaWdodDogMjB2aDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zaG93LXRpdGxlcyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFydCB7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGJvdHRvbTogMTAlO1xcclxcbiAgICByaWdodDogLTEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGlrZXMge1xcclxcbiAgICBmb250LXNpemU6IDhweDtcXHJcXG4gICAgbGVmdDogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jbXQtYnRuIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNtdC1pbWcge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3N1bW1hcnkge1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNtdC1zaG93LW5hbWUge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjY29tbWVudC10aXRsZSxcXHJcXG4gICNmb3JtLXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI2NvbW1lbnRzIHtcXHJcXG4gICAgbWF4LWhlaWdodDogMTd2aDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxyXFxuICAuc2hvd3Mge1xcclxcbiAgICB3aWR0aDogMTd2dztcXHJcXG4gICAgaGVpZ2h0OiA0NXZoO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IGxvZ29JbWFnZSBmcm9tICcuL2Fzc2V0cy9zaXJpYm94LXJlbW92ZWJnLXByZXZpZXcucG5nJztcbmltcG9ydCB7IGZldGNoRGF0YSB9IGZyb20gJy4vbW9kdWxlcy9nZXREYXRhZnJvbUFwaS5qcyc7XG5pbXBvcnQgYWRkRXZlbnRMaXN0ZW5lclRvQ210QnRucyBmcm9tICcuL21vZHVsZXMvY29tbWVudC5qcyc7XG5pbXBvcnQgeyBhZGRFdmVudExpc3RlbmVyVG9MaWtlQnRucywgYXBwZW5kTGlrZXNUb0RvbSwgZmV0Y2hMaWtlc0NvdW50cyB9IGZyb20gJy4vbW9kdWxlcy9saWtlLmpzJztcbmltcG9ydCB7IGNvdW50U2hvd3MsIHNob3dDb3VudCB9IGZyb20gJy4vbW9kdWxlcy9zaG93Q291bnQuanMnO1xuXG5jb25zdCBsb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ28nKTtcbmxvZ28uc3JjID0gbG9nb0ltYWdlO1xuXG5jb25zdCBjb252ZXJ0QXBpRGF0YVRvSHRtbCA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IGh0bWxTdHJpbmcgPSBkYXRhLm1hcCgoc2hvdykgPT4gYFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgZC1mbGV4IGZsZXgtY29sdW1uIG14LTIgbXktNCBwLTAgc2hvd3MgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1lbmQgc2NhbGUtaW4tY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmFja2dyb3VuZC1pbWFnZVwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7c2hvdy5pbWFnZS5vcmlnaW5hbH0pO1wiPjwvZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzPVwibS0wIHNob3ctdGl0bGVzIHRleHQtd2hpdGUgcC0yXCI+JHtzaG93Lm5hbWV9PC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGxpa2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhcnQgbGlrZS1idG5cIiBpZD1cIiR7c2hvdy5pZH1cIj48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGlrZXNcIiBpZD1cImxpa2UtY291bnQtJHtzaG93LmlkfVwiPiR7YXBwZW5kTGlrZXNUb0RvbShzaG93LmlkKX0gbGlrZXM8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBjbXQtYnRuIGZ3LWJvbGQgdy03NSBhbGlnbi1zZWxmLWNlbnRlciBweC0yIHB5LTEgcC1tZC0xIG1iLTNcIiBkYXRhPVwiJHtzaG93LmlkfVwiPkNvbW1lbnRzPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICBgKS5qb2luKCcnKTtcbiAgcmV0dXJuIGh0bWxTdHJpbmc7XG59O1xuXG5jb25zdCBhbGxTaG93cyA9IGF3YWl0IGZldGNoRGF0YSgpO1xuXG5jb25zdCBkaXNwbGF5U2hvd3MgPSBhc3luYyAoZ2VucmUsIHNob3dzKSA9PiB7XG4gIGF3YWl0IGZldGNoTGlrZXNDb3VudHMoKTtcblxuICBjb25zdCBodG1sU3RyaW5nID0gY29udmVydEFwaURhdGFUb0h0bWwoc2hvd3MpO1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0cy1jb250YWluZXInKTtcbiAgdWwuaW5uZXJIVE1MID0gaHRtbFN0cmluZztcbiAgYWRkRXZlbnRMaXN0ZW5lclRvTGlrZUJ0bnMoKTtcbiAgYWRkRXZlbnRMaXN0ZW5lclRvQ210QnRucygpO1xuICBjb25zdCBudW1iZXJPZlNob3dzID0gY291bnRTaG93cygpO1xuICBzaG93Q291bnQoZ2VucmUsIG51bWJlck9mU2hvd3MpO1xufTtcblxuYXdhaXQgZGlzcGxheVNob3dzKCdBbGwgU2hvd3MnLCBhbGxTaG93cy5yZXZlcnNlKCkpO1xuXG5jb25zdCBkaXNwbGF5U2hvd3NCeUdlbnJlID0gKGdlbnJlKSA9PiB7XG4gIGlmIChnZW5yZSA9PT0gJ0FsbCBTaG93cycpIHtcbiAgICBkaXNwbGF5U2hvd3MoZ2VucmUsIGFsbFNob3dzKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGdlbnJlID09PSAnQ2hvb3NlIEdlbnJlJyB8fCBnZW5yZSA9PT0gJ0dlbnJlJykge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBTaG93c0J5R2VucmUgPSBhbGxTaG93cy5maWx0ZXIoKHNob3cpID0+IHNob3cuZ2VucmVzLmluY2x1ZGVzKGdlbnJlKSk7XG4gIGRpc3BsYXlTaG93cyhnZW5yZSwgU2hvd3NCeUdlbnJlLnJldmVyc2UoKSk7XG59O1xuXG5jb25zdCBjaG9vc2VHZW5yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9wLWRvd24nKTtcbmNob29zZUdlbnJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gIGRpc3BsYXlTaG93c0J5R2VucmUoZS50YXJnZXQudmFsdWUpO1xufSk7XG5cbmNvbnN0IHNlbGVjdGVkT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignb3B0aW9uW3NlbGVjdGVkXScpO1xuXG5jb25zdCB1cGRhdGVTZWxlY3RlZE9wdGlvblRleHQgPSAoKSA9PiB7XG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA3NjgpIHtcbiAgICBzZWxlY3RlZE9wdGlvbi5pbm5lckhUTUwgPSAnR2VucmUnO1xuICB9IGVsc2Uge1xuICAgIHNlbGVjdGVkT3B0aW9uLmlubmVySFRNTCA9ICdDaG9vc2UgR2VucmUnO1xuICB9XG59O1xuXG4vLyBJbml0aWFsIHVwZGF0ZSB3aGVuIHRoZSBwYWdlIGxvYWRzXG51cGRhdGVTZWxlY3RlZE9wdGlvblRleHQoKTtcblxuLy8gRXZlbnQgbGlzdGVuZXIgZm9yIHdpbmRvdyByZXNpemUgdG8gdXBkYXRlIHRoZSB0ZXh0IGR5bmFtaWNhbGx5XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlU2VsZWN0ZWRPcHRpb25UZXh0KTtcbiIsImltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuL2dldERhdGFmcm9tQXBpLmpzJztcbmltcG9ydCBjb21tZW50Q291bnRlciBmcm9tICcuL2NvbW1lbnRDb3VudC5qcyc7XG5pbXBvcnQgeyBhcHBJZCB9IGZyb20gJy4vZGF0YS5qcyc7XG5cbmNvbnN0IHBhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFyZW50LWNvbnRhaW5lcicpO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJztcblxuY29uc3QgZmluZFNob3dCeUlkID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IGRhdGFzID0gYXdhaXQgZ2V0RGF0YSgpO1xuICBjb25zdCBzaG93ID0gYXdhaXQgZGF0YXMuZmluZCgoZGF0YSkgPT4gZGF0YS5pZCA9PT0gTnVtYmVyKGlkKSk7XG4gIHJldHVybiBzaG93O1xufTtcblxuY29uc3QgYWRkRXZlbnRMaXN0ZW5lclRvQ2xvc2VCdG5zID0gKCkgPT4ge1xuICBjb25zdCBjbG9zZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xvc2UtYnRuJyk7XG4gIGNsb3NlQnRucy5mb3JFYWNoKChjbG9zZUJ0bikgPT4ge1xuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgcG9wVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wVXAnKTtcbiAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpO1xuICAgICAgcGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChwb3BVcCk7XG4gICAgICBwYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKG92ZXJsYXkpO1xuICAgICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBwb3N0Q29tbWVudFRvQXBpID0gYXN5bmMgKGV2ZW50LCBuYW1lSW5wdXQsIGNvbW1lbnRJbnB1dCkgPT4ge1xuICBjb25zdCByZXF1ZXN0Qm9keSA9IHtcbiAgICBpdGVtX2lkOiBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhJyksXG4gICAgdXNlcm5hbWU6IG5hbWVJbnB1dC52YWx1ZSxcbiAgICBjb21tZW50OiBjb21tZW50SW5wdXQudmFsdWUsXG4gIH07XG4gIGNvbnN0IHJlcXVlc3QgPSB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkpLFxuICB9O1xuICBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS8ke2FwcElkfS9jb21tZW50c2AsIHJlcXVlc3QpO1xufTtcblxuY29uc3QgZ2V0Q29tbWVudHNGcm9tQXBpID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vJHthcHBJZH0vY29tbWVudHM/aXRlbV9pZD0ke2lkfWApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmNvbnN0IGNoYW5nZUFwaURhdGFUb0h0bWwgPSAoZGF0YSkgPT4ge1xuICBjb25zdCBodG1sU3RyaW5nID0gZGF0YVxuICAgIC5tYXAoKGVsZW1lbnQpID0+IGBcbiAgICA8bGk+XG4gICAgICAke2VsZW1lbnQuY3JlYXRpb25fZGF0ZX0gPHN0cm9uZyBjbGFzcz1cInB4LTFcIj4ke2VsZW1lbnQudXNlcm5hbWV9Ojwvc3Ryb25nPiAke2VsZW1lbnQuY29tbWVudH1cbiAgICA8L2xpPlxuICBgKS5qb2luKCcnKTtcbiAgcmV0dXJuIGh0bWxTdHJpbmc7XG59O1xuXG5jb25zdCBzb3J0Q29tbWVudHNGcm9tTGF0ZXN0ID0gKGNvbW1lbnRzKSA9PiB7XG4gIGNvbnN0IGxhdGVzdENvbW1lbnRzID0gY29tbWVudHMucmV2ZXJzZSgpO1xuICByZXR1cm4gbGF0ZXN0Q29tbWVudHM7XG59O1xuXG5jb25zdCBhcHBlbmRDb21tZW50c1RvUG9wdXAgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudHMnKTtcbiAgdWwuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgZ2V0Q29tbWVudHNGcm9tQXBpKGlkKTtcblxuICBpZiAoT2JqZWN0LmtleXMoY29tbWVudHMpWzBdID09PSAnZXJyb3InKSB7XG4gICAgdWwuaW5uZXJIVE1MID0gJ05vIGNvbW1lbnRzIHlldCc7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbGF0ZXN0Q29tbWVudHMgPSBzb3J0Q29tbWVudHNGcm9tTGF0ZXN0KGNvbW1lbnRzKTtcbiAgICBjb25zdCBsaSA9IGNoYW5nZUFwaURhdGFUb0h0bWwobGF0ZXN0Q29tbWVudHMpO1xuICAgIHVsLmlubmVySFRNTCA9IGxpO1xuICB9XG59O1xuXG5jb25zdCB1cGRhdGVDb21tZW50cyA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50cycpO1xuICBjb25zdCBjb21tZW50VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudC10aXRsZScpO1xuICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGdldENvbW1lbnRzRnJvbUFwaShpZCk7XG4gIGNvbnN0IGxhdGVzdENvbW1lbnRzID0gc29ydENvbW1lbnRzRnJvbUxhdGVzdChjb21tZW50cyk7XG4gIGNvbnN0IGxpID0gYXdhaXQgY2hhbmdlQXBpRGF0YVRvSHRtbChsYXRlc3RDb21tZW50cyk7XG4gIHVsLmlubmVySFRNTCA9IGxpO1xuICBjb21tZW50VGl0bGUudGV4dENvbnRlbnQgPSBgQ29tbWVudHMgKCR7Y29tbWVudHMubGVuZ3RofSlgO1xufTtcblxuY29uc3QgYWRkRXZlbnRMaXN0ZW5lclRvQ29tbWVudEZvcm0gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIGNvbnN0IGFkZENtdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtY210LWJ0bicpO1xuICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcm5hbWUnKTtcbiAgY29uc3QgY29tbWVudElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJjbXQnKTtcblxuICBhZGRDbXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICAgIGlmIChuYW1lSW5wdXQudmFsdWUgPT09ICcnIHx8IGNvbW1lbnRJbnB1dC52YWx1ZSA9PT0gJycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGF3YWl0IHBvc3RDb21tZW50VG9BcGkoZSwgbmFtZUlucHV0LCBjb21tZW50SW5wdXQpO1xuICAgIHVwZGF0ZUNvbW1lbnRzKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YScpKTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gIH0pO1xufTtcblxuY29uc3QgZ2VuZXJhdGVQb3B1cENvbW1lbnRCb3ggPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3Qgc2hvdyA9IGF3YWl0IGZpbmRTaG93QnlJZChpZCk7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG92ZXJsYXkuaWQgPSAnb3ZlcmxheSc7XG5cbiAgZGl2LmlkID0gJ3BvcFVwJztcbiAgZGl2LmNsYXNzTmFtZSA9ICdyb3VuZGVkLTQnO1xuICBkaXYuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgaWQ9XCJiZy1sYXllclwiIGNsYXNzPVwicC1tZC01IHB4LTQgcHktMiBoLTEwMFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIGlkPVwicG9wdXAtZGVzY1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmFja2dyb3VuZC1pbWFnZVwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7c2hvdy5pbWFnZS5vcmlnaW5hbH0pO1wiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTMgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIke3Nob3cuaW1hZ2Uub3JpZ2luYWx9XCIgYWx0PVwiJHtzaG93Lm5hbWV9XCIgY2xhc3M9XCJjbXQtaW1nXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC05XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgcC0yIHAtbWQtMFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzPVwiY210LXNob3ctbmFtZVwiPiR7c2hvdy5uYW1lfTwvaDE+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2xvc2UtYnRuIHAtMFwiPiZ0aW1lczs8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1hcm91bmQgbWItMiBtLW1kLTBcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic21hbGwtZm9udHNcIj48c3Ryb25nPlJhdGluZyA6PC9zdHJvbmc+ICR7c2hvdy5yYXRpbmcuYXZlcmFnZX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNtYWxsLWZvbnRzXCI+PGEgaHJlZj1cImh0dHBzOi8vd3d3LmltZGIuY29tL3RpdGxlLyR7c2hvdy5leHRlcm5hbHMuaW1kYn0vXCI+PHN0cm9uZz5JTURCIDo8L3N0cm9uZz4gJHtzaG93LmV4dGVybmFscy5pbWRifTwvYT48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJmcy02IGZ3LWJvbGQgcHktNSBwLW1kLTBcIj5PdmVydmlldyA6PC9zcGFuPjxicj5cbiAgICAgICAgICA8YXJ0aWNsZSBpZD1cInN1bW1hcnlcIiBjbGFzcz1cInNtYWxsLWZvbnRzIG1iLTJcIj4ke3Nob3cuc3VtbWFyeX08L2FydGljbGU+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC03XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic21hbGwtZm9udHNcIj48c3Ryb25nPkdlbnJlcyA6IDwvc3Ryb25nPiR7c2hvdy5nZW5yZXN9PC9zcGFuPjxicj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzbWFsbC1mb250c1wiPjxzdHJvbmc+QXZlcmFnZSBSdW4gVGltZSA6IDwvc3Ryb25nPiR7c2hvdy5hdmVyYWdlUnVudGltZX08L3NwYW4+PGJyPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNtYWxsLWZvbnRzXCI+PHN0cm9uZz5FbmRlZCA6IDwvc3Ryb25nPiR7c2hvdy5lbmRlZH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNVwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNtYWxsLWZvbnRzXCI+PHN0cm9uZz5MYW5ndWFnZSA6IDwvc3Ryb25nPiR7c2hvdy5sYW5ndWFnZX08L3NwYW4+PGJyPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNtYWxsLWZvbnRzXCI+PHN0cm9uZz5UeXBlIDogPC9zdHJvbmc+JHtzaG93LnR5cGV9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgcC1tZC0yIG10LW1kLTBcIiBpZD1cInBvcHVwLWNtdC1zZWNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02IGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXIgbXQtMlwiPlxuICAgICAgICAgIDxoMyBjbGFzcz1cInAtMVwiPjxzdHJvbmcgaWQ9XCJjb21tZW50LXRpdGxlXCI+TGF0ZXN0IENvbW1lbnRzKCk8L3N0cm9uZz48L2gzPlxuICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtdW5zdHlsZWQgbWItMVwiIGlkPVwiY29tbWVudHNcIj5cbiAgICAgICAgICBcbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvcm0gY2xhc3M9XCJjb2wtbWQtNiBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIG10LTJcIj5cbiAgICAgICAgICA8aDMgY2xhc3M9XCJwLTFcIiBpZD1cImZvcm0tdGl0bGVcIj48c3Ryb25nPkFkZCBhIGNvbW1lbnQ8L3N0cm9uZz48L2gzPlxuICAgICAgICAgIDxpbnB1dCBpZD1cInVzZXJuYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiIGNsYXNzPVwibWItMiBmb3JtLWNvbnRyb2wgdy01MCBweC0yIHB5LTFcIiByZXF1aXJlZD5cbiAgICAgICAgICA8aW5wdXQgaWQ9XCJ1c2VyY210XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgY29tbWVudFwiIGNsYXNzPVwibWItMiBmb3JtLWNvbnRyb2wgdy01MCBweC0yIHB5LTFcIiByZXF1aXJlZD5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkYXRhPVwiJHtpZH1cIiBjbGFzcz1cImJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuIHB4LTIgcHktMSBmdy1ib2xkXCIgaWQ9XCJhZGQtY210LWJ0blwiPkFkZCBjb21tZW50PC9idXR0b24+XG4gICAgICAgIDxmb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG5cbiAgcGFyZW50RWxlbWVudC5hcHBlbmQoZGl2LCBvdmVybGF5KTtcbiAgYWRkRXZlbnRMaXN0ZW5lclRvQ2xvc2VCdG5zKCk7XG4gIGFkZEV2ZW50TGlzdGVuZXJUb0NvbW1lbnRGb3JtKCk7XG4gIGF3YWl0IGFwcGVuZENvbW1lbnRzVG9Qb3B1cChpZCk7XG4gIGF3YWl0IGNvbW1lbnRDb3VudGVyKCk7XG59O1xuXG5jb25zdCBhZGRFdmVudExpc3RlbmVyVG9DbXRCdG5zID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjbXRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNtdC1idG4nKTtcbiAgY210QnRucy5mb3JFYWNoKChjbXRCdG4pID0+IHtcbiAgICBjbXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZ2VuZXJhdGVQb3B1cENvbW1lbnRCb3goZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhJykpO1xuICAgICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGFkZEV2ZW50TGlzdGVuZXJUb0NtdEJ0bnMgYXMgZGVmYXVsdCB9OyIsImNvbnN0IGNvbW1lbnRDb3VudGVyID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50cycpO1xuICBjb25zdCBjaGlsZENvdW50ID0gdWwuY2hpbGRFbGVtZW50Q291bnQ7XG4gIGNvbnN0IGNvbW1lbnRUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50LXRpdGxlJyk7XG4gIGNvbW1lbnRUaXRsZS50ZXh0Q29udGVudCA9IGBMYXRlc3QgQ29tbWVudHMgKCAke2NoaWxkQ291bnR9IClgO1xuICByZXR1cm4gY2hpbGRDb3VudDtcbn07XG5leHBvcnQgeyBjb21tZW50Q291bnRlciBhcyBkZWZhdWx0IH07IiwiY29uc3QgYXBwSWQgPSAnR0Rla3BQbjMyVHZsZU9XNE9vWTInO1xuY29uc3QgYmFzZVVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nO1xuXG5jb25zdCBjcmVhdGVBcHBJZCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChiYXNlVXJsLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gIH0pO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICByZXR1cm4gZGF0YTtcbn07XG5jcmVhdGVBcHBJZCgpO1xuZXhwb3J0IHsgYXBwSWQsIGJhc2VVcmwgfTsiLCJjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzJyk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICBsZXQgc2hvd3MgPSBbXTtcbiAgc2hvd3MgPSBhd2FpdCBnZXREYXRhKCk7XG4gIHJldHVybiBzaG93cztcbn07XG5hd2FpdCBmZXRjaERhdGEoKTtcbmV4cG9ydCB7IGdldERhdGEsIGZldGNoRGF0YSB9OyIsImltcG9ydCB7IGJhc2VVcmwsIGFwcElkIH0gZnJvbSAnLi9kYXRhLmpzJztcblxuY29uc3QgcG9zdExpa2VzVG9BcGkgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgY29uc3QgcmVxdWVzdEJvZHkgPSB7XG4gICAgaXRlbV9pZDogZXZlbnQudGFyZ2V0LmlkLFxuICAgIGxpa2U6IDAsXG4gIH07XG4gIGNvbnN0IHJlcXVlc3QgPSB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkpLFxuICB9O1xuICBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfSR7YXBwSWR9L2xpa2VzYCwgcmVxdWVzdCk7XG59O1xuXG5jb25zdCBmaW5kUmlnaHRFbGVtZW50ID0gYXN5bmMgKGRhdGFzLCBpZCkgPT4ge1xuICBjb25zdCBmb3VuZExpa2UgPSBhd2FpdCBkYXRhcy5maW5kKChkYXRhKSA9PiBkYXRhLml0ZW1faWQgPT09IGlkKTtcbiAgaWYgKGZvdW5kTGlrZSkgcmV0dXJuIGZvdW5kTGlrZS5saWtlcztcbiAgcmV0dXJuIDA7XG59O1xuXG5jb25zdCBnZXRMaWtlc0Zyb21BcGkgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0ke2FwcElkfS9saWtlc2ApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmNvbnN0IGFkZEV2ZW50TGlzdGVuZXJUb0xpa2VCdG5zID0gKCkgPT4ge1xuICBjb25zdCBsaWtlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlLWJ0bicpO1xuICBsaWtlQnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICAgICAgY29uc3QgbGlrZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUudGFyZ2V0LmlkKTtcbiAgICAgIGxpa2VCdG4uc3R5bGUuYW5pbWF0aW9uID0gJ2FuaW1hdGUgLjhzIHN0ZXBzKDI4KSAxJztcbiAgICAgIGxpa2VCdG4uc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gJ3JpZ2h0JztcbiAgICAgIGF3YWl0IHBvc3RMaWtlc1RvQXBpKGUpO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldExpa2VzRnJvbUFwaSgpO1xuICAgICAgY29uc3QgZm91bmRMaWtlID0gYXdhaXQgZmluZFJpZ2h0RWxlbWVudChkYXRhLCBlLnRhcmdldC5pZCk7XG4gICAgICBjb25zdCBsaWtlQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbGlrZS1jb3VudC0ke2UudGFyZ2V0LmlkfWApO1xuICAgICAgbGlrZUNvdW50LnRleHRDb250ZW50ID0gYCR7Zm91bmRMaWtlfSBsaWtlc2A7XG4gICAgICBsaWtlQnRuLnN0eWxlLmFuaW1hdGlvbiA9ICdub25lJztcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBsaWtlc0NhY2hlID0ge307XG5cbmNvbnN0IGZldGNoTGlrZXNDb3VudHMgPSBhc3luYyAoKSA9PiB7XG4gIGlmIChPYmplY3Qua2V5cyhsaWtlc0NhY2hlKS5sZW5ndGggPT09IDApIHtcbiAgICBjb25zdCBsaWtlc0Zyb21BcGkgPSBhd2FpdCBnZXRMaWtlc0Zyb21BcGkoKTtcblxuICAgIGxpa2VzRnJvbUFwaS5tYXAoKGxpa2UpID0+IHtcbiAgICAgIGxpa2VzQ2FjaGVbbGlrZS5pdGVtX2lkXSA9IGxpa2UubGlrZXM7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgYXBwZW5kTGlrZXNUb0RvbSA9IChpZCkgPT4gbGlrZXNDYWNoZVtpZF0gfHwgMDtcbmV4cG9ydCB7IGFkZEV2ZW50TGlzdGVuZXJUb0xpa2VCdG5zLCBhcHBlbmRMaWtlc1RvRG9tLCBmZXRjaExpa2VzQ291bnRzIH07IiwiY29uc3QgY291bnRTaG93cyA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RzLWNvbnRhaW5lcicpO1xuICBjb25zdCBjaGlsZENvdW50ID0gY29udGFpbmVyLmNoaWxkRWxlbWVudENvdW50O1xuICByZXR1cm4gY2hpbGRDb3VudDtcbn07XG5cbmNvbnN0IHNob3dDb3VudCA9IGFzeW5jIChnZW5yZSwgY291bnQpID0+IHtcbiAgY29uc3QgYWxsU2hvd3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsLXNob3dzJyk7XG4gIGFsbFNob3dzLnRleHRDb250ZW50ID0gYCR7Z2VucmV9ICggJHtjb3VudH0gKWA7XG59O1xuXG5leHBvcnQgeyBjb3VudFNob3dzLCBzaG93Q291bnQgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=