(self.webpackChunkwebpack_demo = self.webpackChunkwebpack_demo || []).push([['main'], {

  /***/ './node_modules/css-loader/dist/cjs.js!./src/index.css':
  /*! *************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \************************************************************ */
  /***/ ((module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ default: () => (__WEBPACK_DEFAULT_EXPORT__),
      /* harmony export */ });
    /* harmony import */ const _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ './node_modules/css-loader/dist/runtime/sourceMaps.js');
    /* harmony import */ const _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js');
    /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /* #__PURE__ */__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
    // Imports

    const ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
    ___CSS_LOADER_EXPORT___.push([module.id, '@import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);']);
    // Module
    ___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
}

#popUp {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: bisque;
  width: 80vw;
  z-index: 10;
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

#summary p,
.small-fonts {
  font-size: 13px;
  margin: 0;
}

#comments {
  max-height: 32vh;
  overflow: auto;
}

#comments::-webkit-scrollbar {
  display: none;
}
`, '', {
      version: 3, sources: ['webpack://./src/index.css'], names: [], mappings: 'AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,+BAA+B;AACjC;;AAEA;EACE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,wBAAwB;EACxB,WAAW;EACX,WAAW;AACb;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,mBAAmB;AACrB;;AAEA;;EAEE,eAAe;EACf,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,aAAa;AACf', sourcesContent: ["@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Lato', sans-serif;\r\n}\r\n\r\n#popUp {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: bisque;\r\n  width: 80vw;\r\n  z-index: 10;\r\n}\r\n\r\n.close-btn {\r\n  font-size: 30px;\r\n  font-weight: 800;\r\n  background: none;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  padding-right: 20px;\r\n}\r\n\r\n#summary p,\r\n.small-fonts {\r\n  font-size: 13px;\r\n  margin: 0;\r\n}\r\n\r\n#comments {\r\n  max-height: 32vh;\r\n  overflow: auto;\r\n}\r\n\r\n#comments::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n"], sourceRoot: '',
    }]);
    // Exports
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);
    /***/ }),

  /***/ './node_modules/css-loader/dist/runtime/api.js':
  /*! *****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \**************************************************** */
  /***/ ((module) => {
    /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
    module.exports = function (cssWithMappingToString) {
      const list = [];

      // return the list of modules as css string
      list.toString = function toString() {
        return this.map((item) => {
          let content = '';
          const needLayer = typeof item[5] !== 'undefined';
          if (item[4]) {
            content += '@supports ('.concat(item[4], ') {');
          }
          if (item[2]) {
            content += '@media '.concat(item[2], ' {');
          }
          if (needLayer) {
            content += '@layer'.concat(item[5].length > 0 ? ' '.concat(item[5]) : '', ' {');
          }
          content += cssWithMappingToString(item);
          if (needLayer) {
            content += '}';
          }
          if (item[2]) {
            content += '}';
          }
          if (item[4]) {
            content += '}';
          }
          return content;
        }).join('');
      };

      // import a list of modules into the list
      list.i = function i(modules, media, dedupe, supports, layer) {
        if (typeof modules === 'string') {
          modules = [[null, modules, undefined]];
        }
        const alreadyImportedModules = {};
        if (dedupe) {
          for (let k = 0; k < this.length; k++) {
            const id = this[k][0];
            if (id != null) {
              alreadyImportedModules[id] = true;
            }
          }
        }
        for (let _k = 0; _k < modules.length; _k++) {
          const item = [].concat(modules[_k]);
          if (dedupe && alreadyImportedModules[item[0]]) {
            continue;
          }
          if (typeof layer !== 'undefined') {
            if (typeof item[5] === 'undefined') {
              item[5] = layer;
            } else {
              item[1] = '@layer'.concat(item[5].length > 0 ? ' '.concat(item[5]) : '', ' {').concat(item[1], '}');
              item[5] = layer;
            }
          }
          if (media) {
            if (!item[2]) {
              item[2] = media;
            } else {
              item[1] = '@media '.concat(item[2], ' {').concat(item[1], '}');
              item[2] = media;
            }
          }
          if (supports) {
            if (!item[4]) {
              item[4] = ''.concat(supports);
            } else {
              item[1] = '@supports ('.concat(item[4], ') {').concat(item[1], '}');
              item[4] = supports;
            }
          }
          list.push(item);
        }
      };
      return list;
    };
    /***/ }),

  /***/ './node_modules/css-loader/dist/runtime/sourceMaps.js':
  /*! ************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*********************************************************** */
  /***/ ((module) => {
    module.exports = function (item) {
      const content = item[1];
      const cssMapping = item[3];
      if (!cssMapping) {
        return content;
      }
      if (typeof btoa === 'function') {
        const base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
        const data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(base64);
        const sourceMapping = '/*# '.concat(data, ' */');
        return [content].concat([sourceMapping]).join('\n');
      }
      return [content].join('\n');
    };
    /***/ }),

  /***/ './src/index.css':
  /*! ***********************!*\
  !*** ./src/index.css ***!
  \********************** */
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ default: () => (__WEBPACK_DEFAULT_EXPORT__),
      /* harmony export */ });
    /* harmony import */ const _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js');
    /* harmony import */ const _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ const _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ './node_modules/style-loader/dist/runtime/styleDomAPI.js');
    /* harmony import */ const _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /* #__PURE__ */__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ const _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ './node_modules/style-loader/dist/runtime/insertBySelector.js');
    /* harmony import */ const _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /* #__PURE__ */__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */ const _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js');
    /* harmony import */ const _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /* #__PURE__ */__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */ const _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ './node_modules/style-loader/dist/runtime/insertStyleElement.js');
    /* harmony import */ const _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /* #__PURE__ */__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */ const _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ './node_modules/style-loader/dist/runtime/styleTagTransform.js');
    /* harmony import */ const _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /* #__PURE__ */__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */ const _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ './node_modules/css-loader/dist/cjs.js!./src/index.css');

    const options = {};

    options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
    options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

    options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, 'head');

    options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
    options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

    const update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__.default, options);

    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);
    /***/ }),

  /***/ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js':
  /*! ****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*************************************************************************** */
  /***/ ((module) => {
    const stylesInDOM = [];
    function getIndexByIdentifier(identifier) {
      let result = -1;
      for (let i = 0; i < stylesInDOM.length; i++) {
        if (stylesInDOM[i].identifier === identifier) {
          result = i;
          break;
        }
      }
      return result;
    }
    function modulesToDom(list, options) {
      const idCountMap = {};
      const identifiers = [];
      for (let i = 0; i < list.length; i++) {
        const item = list[i];
        const id = options.base ? item[0] + options.base : item[0];
        const count = idCountMap[id] || 0;
        const identifier = ''.concat(id, ' ').concat(count);
        idCountMap[id] = count + 1;
        const indexByIdentifier = getIndexByIdentifier(identifier);
        const obj = {
          css: item[1],
          media: item[2],
          sourceMap: item[3],
          supports: item[4],
          layer: item[5],
        };
        if (indexByIdentifier !== -1) {
          stylesInDOM[indexByIdentifier].references++;
          stylesInDOM[indexByIdentifier].updater(obj);
        } else {
          const updater = addElementStyle(obj, options);
          options.byIndex = i;
          stylesInDOM.splice(i, 0, {
            identifier,
            updater,
            references: 1,
          });
        }
        identifiers.push(identifier);
      }
      return identifiers;
    }
    function addElementStyle(obj, options) {
      const api = options.domAPI(options);
      api.update(obj);
      const updater = function updater(newObj) {
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
      let lastIdentifiers = modulesToDom(list, options);
      return function update(newList) {
        newList = newList || [];
        for (let i = 0; i < lastIdentifiers.length; i++) {
          const identifier = lastIdentifiers[i];
          const index = getIndexByIdentifier(identifier);
          stylesInDOM[index].references--;
        }
        const newLastIdentifiers = modulesToDom(newList, options);
        for (let _i = 0; _i < lastIdentifiers.length; _i++) {
          const _identifier = lastIdentifiers[_i];
          const _index = getIndexByIdentifier(_identifier);
          if (stylesInDOM[_index].references === 0) {
            stylesInDOM[_index].updater();
            stylesInDOM.splice(_index, 1);
          }
        }
        lastIdentifiers = newLastIdentifiers;
      };
    };
    /***/ }),

  /***/ './node_modules/style-loader/dist/runtime/insertBySelector.js':
  /*! ********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \******************************************************************* */
  /***/ ((module) => {
    const memo = {};

    /* istanbul ignore next  */
    function getTarget(target) {
      if (typeof memo[target] === 'undefined') {
        let styleTarget = document.querySelector(target);

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
      const target = getTarget(insert);
      if (!target) {
        throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
      }
      target.appendChild(style);
    }
    module.exports = insertBySelector;
    /***/ }),

  /***/ './node_modules/style-loader/dist/runtime/insertStyleElement.js':
  /*! **********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \********************************************************************* */
  /***/ ((module) => {
    /* istanbul ignore next  */
    function insertStyleElement(options) {
      const element = document.createElement('style');
      options.setAttributes(element, options.attributes);
      options.insert(element, options.options);
      return element;
    }
    module.exports = insertStyleElement;
    /***/ }),

  /***/ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js':
  /*! **********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \********************************************************************************* */
  /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
    /* istanbul ignore next  */
    function setAttributesWithoutAttributes(styleElement) {
      const nonce = true ? __webpack_require__.nc : 0;
      if (nonce) {
        styleElement.setAttribute('nonce', nonce);
      }
    }
    module.exports = setAttributesWithoutAttributes;
    /***/ }),

  /***/ './node_modules/style-loader/dist/runtime/styleDomAPI.js':
  /*! ***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \************************************************************** */
  /***/ ((module) => {
    /* istanbul ignore next  */
    function apply(styleElement, options, obj) {
      let css = '';
      if (obj.supports) {
        css += '@supports ('.concat(obj.supports, ') {');
      }
      if (obj.media) {
        css += '@media '.concat(obj.media, ' {');
      }
      const needLayer = typeof obj.layer !== 'undefined';
      if (needLayer) {
        css += '@layer'.concat(obj.layer.length > 0 ? ' '.concat(obj.layer) : '', ' {');
      }
      css += obj.css;
      if (needLayer) {
        css += '}';
      }
      if (obj.media) {
        css += '}';
      }
      if (obj.supports) {
        css += '}';
      }
      const { sourceMap } = obj;
      if (sourceMap && typeof btoa !== 'undefined') {
        css += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), ' */');
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
      if (typeof document === 'undefined') {
        return {
          update: function update() {},
          remove: function remove() {},
        };
      }
      const styleElement = options.insertStyleElement(options);
      return {
        update: function update(obj) {
          apply(styleElement, options, obj);
        },
        remove: function remove() {
          removeStyleElement(styleElement);
        },
      };
    }
    module.exports = domAPI;
    /***/ }),

  /***/ './node_modules/style-loader/dist/runtime/styleTagTransform.js':
  /*! *********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \******************************************************************** */
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

  /***/ './src/index.js':
  /*! **********************!*\
  !*** ./src/index.js ***!
  \********************* */
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ const _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ './src/index.css');
    /* harmony import */ const _modules_comment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/comment.js */ './src/modules/comment.js');

    const convertApiDataToHtml = (data) => {
      const htmlString = data.map((show) => `
          <div class="col d-flex flex-column w-25 m-md-5">
            <img src="${show.image.original}" alt="${show.name}" class="h-75"/>
            <div class="d-flex w-100">
              <h5>${show.name}</h5>
              <div class="d-flex">
                <i class="fa-regular fa-heart" style="color: #ff0000;"></i>
                <span></span>
              </div>
            </div>
            <button class="btn btn-outline-success cmt-btn" data="${show.id}">Comments</button>
            <button class="btn btn-outline-success res-btn">Reservations</button>
          </div>
      `).join('');
      return htmlString;
    };

    const displayAllMovies = async () => {
      const data = await (0, _modules_comment_js__WEBPACK_IMPORTED_MODULE_1__.getData)();
      data.length = 40;

      const shows = convertApiDataToHtml(data);
      const ul = document.getElementById('lists-container');

      ul.innerHTML = shows;
      (0, _modules_comment_js__WEBPACK_IMPORTED_MODULE_1__.addEventListenerToCmtBtns)();
    };
    displayAllMovies();
    /***/ }),

  /***/ './src/modules/comment.js':
  /*! ********************************!*\
  !*** ./src/modules/comment.js ***!
  \******************************* */
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ addEventListenerToCmtBtns: () => (/* binding */ addEventListenerToCmtBtns),
      /* harmony export */ getData: () => (/* reexport safe */ _getDatafromApi_js__WEBPACK_IMPORTED_MODULE_0__.default),
      /* harmony export */ });
    /* harmony import */ var _getDatafromApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDatafromApi.js */ './src/modules/getDatafromApi.js');
    /* harmony import */ const _commentCount_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentCount.js */ './src/modules/commentCount.js');

    const parentElement = document.getElementById('parent-container');
    const appId = '9FCYozFTWHToQfPAhtFa';
    const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

    const findShowById = async (id) => {
      const datas = await (0, _getDatafromApi_js__WEBPACK_IMPORTED_MODULE_0__.default)();
      const show = await datas.find((data) => data.id === Number(id));
      return show;
    };

    const addEventListenerToCloseBtns = () => {
      const closeBtns = document.querySelectorAll('.close-btn');
      closeBtns.forEach((closeBtn) => {
        closeBtn.addEventListener('click', () => {
          const popUp = document.getElementById('popUp');
          parentElement.removeChild(popUp);
        });
      });
    };

    const limitSentences = (pTag, limit) => {
      const sentenceRegex = /[.!?,;]+/g;
      const sentences = pTag.textContent.trim().split(sentenceRegex);

      if (sentences.length > limit) {
        const truncatedSentences = sentences.slice(0, limit);
        const truncatedText = `${truncatedSentences.join(' ')}...`;
        pTag.textContent = truncatedText;
      }
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
      await fetch(`${baseUrl}/${appId}/comments`, request);
    };

    const getCommentsFromApi = async (id) => {
      const response = await fetch(`${baseUrl}/${appId}/comments?item_id=${id}`);
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
    // console.log(commentCounter());
    const generatePopupCommentBox = async (id) => {
      const show = await findShowById(id);
      const div = document.createElement('div');

      div.id = 'popUp';
      div.className = 'px-3 py-2';
      div.innerHTML = `
    <div class="row">
      <div class="col-md-3 d-flex justify-content-center align-items-center">
        <img src="${show.image.original}" alt="${show.name}" class="w-75 h-75"/>
      </div>
      <div class="col-md-9">
        <div class="d-flex justify-content-between">
          <h1>${show.name}</h1>
          <button class="close-btn">&times;</button>
        </div>
        <div class="d-flex justify-content-md-around">
          <span class="small-fonts"><strong>Rating :</strong> ${show.rating.average}</span>
          <span class="small-fonts"><a href="https://www.imdb.com/title/${show.externals.imdb}/"><strong>IMDB :</strong> ${show.externals.imdb}</a></span>
        </div>
        <article id="summary" class="small-fonts"><span class="fs-5 fw-bold">Overview :</span><br>${show.summary}</article>
        <div class="row">
          <div class="col-md-6">
            <span class="small-fonts"><strong>Genres : </strong>${show.genres}</span><br>
            <span class="small-fonts"><strong>Average Run Time : </strong>${show.averageRuntime}</span><br>
            <span class="small-fonts"><strong>Ended : </strong>${show.ended}</span>
          </div>
          <div class="col-md-6">
            <span class="small-fonts"><strong>Language : </strong>${show.language}</span><br>
            <span class="small-fonts"><strong>Type : </strong>${show.type}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center m-md-2">
      <div class="col-md-6 d-flex flex-column align-items-center">
        <h2 class="fs-5" id="comment-title">Latest Comments()</h2>
        <ul class="list-unstyled mb-1" id="comments">
        
        </ul>
      </div>
      <form class="col-md-6 d-flex flex-column align-items-center">
        <h3 class="fs-5">Add a comment</h3>
        <input id="username" type="text" placeholder="Your name" class="mb-md-1 form-control w-50 px-2 py-1" required>
        <input id="usercmt" type="text" placeholder="Your comment" class="mb-md-1 form-control w-50 px-2 py-1" required>
        <button type="submit" data="${id}" class="btn-outline-success btn px-2 py-1" id="add-cmt-btn">Add comment</button>
      <form>
    <div>
  `;

      parentElement.append(div);
      addEventListenerToCloseBtns();
      addEventListenerToCommentForm();
      limitSentences(document.querySelector('#summary p'), 8);
      await appendCommentsToPopup(id);
      await (0, _commentCount_js__WEBPACK_IMPORTED_MODULE_1__.default)();
    };

    const addEventListenerToCmtBtns = async () => {
      const cmtBtns = document.querySelectorAll('.cmt-btn');
      cmtBtns.forEach((cmtBtn) => {
        cmtBtn.addEventListener('click', (e) => {
          generatePopupCommentBox(e.target.getAttribute('data'));
        });
      });
    };
    /***/ }),

  /***/ './src/modules/commentCount.js':
  /*! *************************************!*\
  !*** ./src/modules/commentCount.js ***!
  \************************************ */
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ default: () => (/* binding */ commentCounter),
      /* harmony export */ });
    const commentCounter = async () => {
      const ul = document.getElementById('comments');
      const childCount = ul.childElementCount;
      const commentTitle = document.getElementById('comment-title');
      commentTitle.textContent = `Latest Comments (${childCount})`;
      return childCount;
    };
    /***/ }),

  /***/ './src/modules/getDatafromApi.js':
  /*! ***************************************!*\
  !*** ./src/modules/getDatafromApi.js ***!
  \************************************** */
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ default: () => (/* binding */ getData),
      /* harmony export */ });
    const getData = async () => {
      const response = await fetch('https://api.tvmaze.com/shows');
      const data = await response.json();
      return data;
    };
    /***/ }),

},
/** *** */ (__webpack_require__) => { // webpackRuntimeModules
/** *** */ const __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId));
  /** *** */ const __webpack_exports__ = (__webpack_exec__('./src/index.js'));
/** *** */ },
]);
// # sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0g7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9jb21tZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL2NvbW1lbnRDb3VudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9nZXREYXRhZnJvbUFwaS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiNwb3BVcCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5jbG9zZS1idG4ge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbiNzdW1tYXJ5IHAsXHJcbi5zbWFsbC1mb250cyB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2NvbW1lbnRzIHtcclxuICBtYXgtaGVpZ2h0OiAzMnZoO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4jY29tbWVudHM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyx3QkFBd0I7RUFDeEIsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0byZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuI3BvcFVwIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxyXFxuICB3aWR0aDogODB2dztcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtYnRuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNzdW1tYXJ5IHAsXFxyXFxuLnNtYWxsLWZvbnRzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnRzIHtcXHJcXG4gIG1heC1oZWlnaHQ6IDMydmg7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnRzOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgeyBhZGRFdmVudExpc3RlbmVyVG9DbXRCdG5zLCBnZXREYXRhIH0gZnJvbSAnLi9tb2R1bGVzL2NvbW1lbnQuanMnO1xuXG5jb25zdCBjb252ZXJ0QXBpRGF0YVRvSHRtbCA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IGh0bWxTdHJpbmcgPSBkYXRhLm1hcCgoc2hvdykgPT4gYFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgZC1mbGV4IGZsZXgtY29sdW1uIHctMjUgbS1tZC01XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7c2hvdy5pbWFnZS5vcmlnaW5hbH1cIiBhbHQ9XCIke3Nob3cubmFtZX1cIiBjbGFzcz1cImgtNzVcIi8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IHctMTAwXCI+XG4gICAgICAgICAgICAgIDxoNT4ke3Nob3cubmFtZX08L2g1PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLWhlYXJ0XCIgc3R5bGU9XCJjb2xvcjogI2ZmMDAwMDtcIj48L2k+XG4gICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIGNtdC1idG5cIiBkYXRhPVwiJHtzaG93LmlkfVwiPkNvbW1lbnRzPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgcmVzLWJ0blwiPlJlc2VydmF0aW9uczwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgYCkuam9pbignJyk7XG4gIHJldHVybiBodG1sU3RyaW5nO1xufTtcblxuY29uc3QgZGlzcGxheUFsbE1vdmllcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERhdGEoKTtcbiAgZGF0YS5sZW5ndGggPSA0MDtcblxuICBjb25zdCBzaG93cyA9IGNvbnZlcnRBcGlEYXRhVG9IdG1sKGRhdGEpO1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0cy1jb250YWluZXInKTtcblxuICB1bC5pbm5lckhUTUwgPSBzaG93cztcbiAgYWRkRXZlbnRMaXN0ZW5lclRvQ210QnRucygpO1xufTtcbmRpc3BsYXlBbGxNb3ZpZXMoKTtcbiIsImltcG9ydCBnZXREYXRhIGZyb20gJy4vZ2V0RGF0YWZyb21BcGkuanMnO1xuaW1wb3J0IGNvbW1lbnRDb3VudGVyIGZyb20gJy4vY29tbWVudENvdW50LmpzJztcblxuY29uc3QgcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXJlbnQtY29udGFpbmVyJyk7XG5jb25zdCBhcHBJZCA9ICc5RkNZb3pGVFdIVG9RZlBBaHRGYSc7XG5jb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyc7XG5cbmNvbnN0IGZpbmRTaG93QnlJZCA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCBkYXRhcyA9IGF3YWl0IGdldERhdGEoKTtcbiAgY29uc3Qgc2hvdyA9IGF3YWl0IGRhdGFzLmZpbmQoKGRhdGEpID0+IGRhdGEuaWQgPT09IE51bWJlcihpZCkpO1xuICByZXR1cm4gc2hvdztcbn07XG5cbmNvbnN0IGFkZEV2ZW50TGlzdGVuZXJUb0Nsb3NlQnRucyA9ICgpID0+IHtcbiAgY29uc3QgY2xvc2VCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsb3NlLWJ0bicpO1xuICBjbG9zZUJ0bnMuZm9yRWFjaCgoY2xvc2VCdG4pID0+IHtcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHBvcFVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcFVwJyk7XG4gICAgICBwYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHBvcFVwKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBsaW1pdFNlbnRlbmNlcyA9IChwVGFnLCBsaW1pdCkgPT4ge1xuICBjb25zdCBzZW50ZW5jZVJlZ2V4ID0gL1suIT8sO10rL2c7XG4gIGNvbnN0IHNlbnRlbmNlcyA9IHBUYWcudGV4dENvbnRlbnQudHJpbSgpLnNwbGl0KHNlbnRlbmNlUmVnZXgpO1xuXG4gIGlmIChzZW50ZW5jZXMubGVuZ3RoID4gbGltaXQpIHtcbiAgICBjb25zdCB0cnVuY2F0ZWRTZW50ZW5jZXMgPSBzZW50ZW5jZXMuc2xpY2UoMCwgbGltaXQpO1xuICAgIGNvbnN0IHRydW5jYXRlZFRleHQgPSBgJHt0cnVuY2F0ZWRTZW50ZW5jZXMuam9pbignICcpfS4uLmA7XG4gICAgcFRhZy50ZXh0Q29udGVudCA9IHRydW5jYXRlZFRleHQ7XG4gIH1cbn07XG5cbmNvbnN0IHBvc3RDb21tZW50VG9BcGkgPSBhc3luYyAoZXZlbnQsIG5hbWVJbnB1dCwgY29tbWVudElucHV0KSA9PiB7XG4gIGNvbnN0IHJlcXVlc3RCb2R5ID0ge1xuICAgIGl0ZW1faWQ6IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEnKSxcbiAgICB1c2VybmFtZTogbmFtZUlucHV0LnZhbHVlLFxuICAgIGNvbW1lbnQ6IGNvbW1lbnRJbnB1dC52YWx1ZSxcbiAgfTtcbiAgY29uc3QgcmVxdWVzdCA9IHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSksXG4gIH07XG4gIGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9LyR7YXBwSWR9L2NvbW1lbnRzYCwgcmVxdWVzdCk7XG59O1xuXG5jb25zdCBnZXRDb21tZW50c0Zyb21BcGkgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS8ke2FwcElkfS9jb21tZW50cz9pdGVtX2lkPSR7aWR9YCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuY29uc3QgY2hhbmdlQXBpRGF0YVRvSHRtbCA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IGh0bWxTdHJpbmcgPSBkYXRhXG4gICAgLm1hcCgoZWxlbWVudCkgPT4gYFxuICAgIDxsaT5cbiAgICAgICR7ZWxlbWVudC5jcmVhdGlvbl9kYXRlfSA8c3Ryb25nIGNsYXNzPVwicHgtMVwiPiR7ZWxlbWVudC51c2VybmFtZX06PC9zdHJvbmc+ICR7ZWxlbWVudC5jb21tZW50fVxuICAgIDwvbGk+XG4gIGApLmpvaW4oJycpO1xuICByZXR1cm4gaHRtbFN0cmluZztcbn07XG5cbmNvbnN0IHNvcnRDb21tZW50c0Zyb21MYXRlc3QgPSAoY29tbWVudHMpID0+IHtcbiAgY29uc3QgbGF0ZXN0Q29tbWVudHMgPSBjb21tZW50cy5yZXZlcnNlKCk7XG4gIHJldHVybiBsYXRlc3RDb21tZW50cztcbn07XG5cbmNvbnN0IGFwcGVuZENvbW1lbnRzVG9Qb3B1cCA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50cycpO1xuICB1bC5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBnZXRDb21tZW50c0Zyb21BcGkoaWQpO1xuXG4gIGlmIChPYmplY3Qua2V5cyhjb21tZW50cylbMF0gPT09ICdlcnJvcicpIHtcbiAgICB1bC5pbm5lckhUTUwgPSAnTm8gY29tbWVudHMgeWV0JztcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsYXRlc3RDb21tZW50cyA9IHNvcnRDb21tZW50c0Zyb21MYXRlc3QoY29tbWVudHMpO1xuICAgIGNvbnN0IGxpID0gY2hhbmdlQXBpRGF0YVRvSHRtbChsYXRlc3RDb21tZW50cyk7XG4gICAgdWwuaW5uZXJIVE1MID0gbGk7XG4gIH1cbn07XG5cbmNvbnN0IHVwZGF0ZUNvbW1lbnRzID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnRzJyk7XG4gIGNvbnN0IGNvbW1lbnRUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50LXRpdGxlJyk7XG4gIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgZ2V0Q29tbWVudHNGcm9tQXBpKGlkKTtcbiAgY29uc3QgbGF0ZXN0Q29tbWVudHMgPSBzb3J0Q29tbWVudHNGcm9tTGF0ZXN0KGNvbW1lbnRzKTtcbiAgY29uc3QgbGkgPSBhd2FpdCBjaGFuZ2VBcGlEYXRhVG9IdG1sKGxhdGVzdENvbW1lbnRzKTtcbiAgdWwuaW5uZXJIVE1MID0gbGk7XG4gIGNvbW1lbnRUaXRsZS50ZXh0Q29udGVudCA9IGBDb21tZW50cyAoJHtjb21tZW50cy5sZW5ndGh9KWA7XG59O1xuXG5jb25zdCBhZGRFdmVudExpc3RlbmVyVG9Db21tZW50Rm9ybSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgY29uc3QgYWRkQ210QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1jbXQtYnRuJyk7XG4gIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VybmFtZScpO1xuICBjb25zdCBjb21tZW50SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcmNtdCcpO1xuXG4gIGFkZENtdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgaWYgKG5hbWVJbnB1dC52YWx1ZSA9PT0gJycgfHwgY29tbWVudElucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYXdhaXQgcG9zdENvbW1lbnRUb0FwaShlLCBuYW1lSW5wdXQsIGNvbW1lbnRJbnB1dCk7XG4gICAgdXBkYXRlQ29tbWVudHMoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhJykpO1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgfSk7XG59O1xuLy8gY29uc29sZS5sb2coY29tbWVudENvdW50ZXIoKSk7XG5jb25zdCBnZW5lcmF0ZVBvcHVwQ29tbWVudEJveCA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCBzaG93ID0gYXdhaXQgZmluZFNob3dCeUlkKGlkKTtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgZGl2LmlkID0gJ3BvcFVwJztcbiAgZGl2LmNsYXNzTmFtZSA9ICdweC0zIHB5LTInO1xuICBkaXYuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGltZyBzcmM9XCIke3Nob3cuaW1hZ2Uub3JpZ2luYWx9XCIgYWx0PVwiJHtzaG93Lm5hbWV9XCIgY2xhc3M9XCJ3LTc1IGgtNzVcIi8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgPGgxPiR7c2hvdy5uYW1lfTwvaDE+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNsb3NlLWJ0blwiPiZ0aW1lczs8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LW1kLWFyb3VuZFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwic21hbGwtZm9udHNcIj48c3Ryb25nPlJhdGluZyA6PC9zdHJvbmc+ICR7c2hvdy5yYXRpbmcuYXZlcmFnZX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJzbWFsbC1mb250c1wiPjxhIGhyZWY9XCJodHRwczovL3d3dy5pbWRiLmNvbS90aXRsZS8ke3Nob3cuZXh0ZXJuYWxzLmltZGJ9L1wiPjxzdHJvbmc+SU1EQiA6PC9zdHJvbmc+ICR7c2hvdy5leHRlcm5hbHMuaW1kYn08L2E+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGFydGljbGUgaWQ9XCJzdW1tYXJ5XCIgY2xhc3M9XCJzbWFsbC1mb250c1wiPjxzcGFuIGNsYXNzPVwiZnMtNSBmdy1ib2xkXCI+T3ZlcnZpZXcgOjwvc3Bhbj48YnI+JHtzaG93LnN1bW1hcnl9PC9hcnRpY2xlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNtYWxsLWZvbnRzXCI+PHN0cm9uZz5HZW5yZXMgOiA8L3N0cm9uZz4ke3Nob3cuZ2VucmVzfTwvc3Bhbj48YnI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNtYWxsLWZvbnRzXCI+PHN0cm9uZz5BdmVyYWdlIFJ1biBUaW1lIDogPC9zdHJvbmc+JHtzaG93LmF2ZXJhZ2VSdW50aW1lfTwvc3Bhbj48YnI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNtYWxsLWZvbnRzXCI+PHN0cm9uZz5FbmRlZCA6IDwvc3Ryb25nPiR7c2hvdy5lbmRlZH08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNtYWxsLWZvbnRzXCI+PHN0cm9uZz5MYW5ndWFnZSA6IDwvc3Ryb25nPiR7c2hvdy5sYW5ndWFnZX08L3NwYW4+PGJyPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzbWFsbC1mb250c1wiPjxzdHJvbmc+VHlwZSA6IDwvc3Ryb25nPiR7c2hvdy50eXBlfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgbS1tZC0yXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8aDIgY2xhc3M9XCJmcy01XCIgaWQ9XCJjb21tZW50LXRpdGxlXCI+TGF0ZXN0IENvbW1lbnRzKCk8L2gyPlxuICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LXVuc3R5bGVkIG1iLTFcIiBpZD1cImNvbW1lbnRzXCI+XG4gICAgICAgIFxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9ybSBjbGFzcz1cImNvbC1tZC02IGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGgzIGNsYXNzPVwiZnMtNVwiPkFkZCBhIGNvbW1lbnQ8L2gzPlxuICAgICAgICA8aW5wdXQgaWQ9XCJ1c2VybmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIiBjbGFzcz1cIm1iLW1kLTEgZm9ybS1jb250cm9sIHctNTAgcHgtMiBweS0xXCIgcmVxdWlyZWQ+XG4gICAgICAgIDxpbnB1dCBpZD1cInVzZXJjbXRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWW91ciBjb21tZW50XCIgY2xhc3M9XCJtYi1tZC0xIGZvcm0tY29udHJvbCB3LTUwIHB4LTIgcHktMVwiIHJlcXVpcmVkPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkYXRhPVwiJHtpZH1cIiBjbGFzcz1cImJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuIHB4LTIgcHktMVwiIGlkPVwiYWRkLWNtdC1idG5cIj5BZGQgY29tbWVudDwvYnV0dG9uPlxuICAgICAgPGZvcm0+XG4gICAgPGRpdj5cbiAgYDtcblxuICBwYXJlbnRFbGVtZW50LmFwcGVuZChkaXYpO1xuICBhZGRFdmVudExpc3RlbmVyVG9DbG9zZUJ0bnMoKTtcbiAgYWRkRXZlbnRMaXN0ZW5lclRvQ29tbWVudEZvcm0oKTtcbiAgbGltaXRTZW50ZW5jZXMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1bW1hcnkgcCcpLCA4KTtcbiAgYXdhaXQgYXBwZW5kQ29tbWVudHNUb1BvcHVwKGlkKTtcbiAgYXdhaXQgY29tbWVudENvdW50ZXIoKTtcbn07XG5cbmNvbnN0IGFkZEV2ZW50TGlzdGVuZXJUb0NtdEJ0bnMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGNtdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY210LWJ0bicpO1xuICBjbXRCdG5zLmZvckVhY2goKGNtdEJ0bikgPT4ge1xuICAgIGNtdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBnZW5lcmF0ZVBvcHVwQ29tbWVudEJveChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEnKSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgYWRkRXZlbnRMaXN0ZW5lclRvQ210QnRucywgZ2V0RGF0YSB9OyIsImNvbnN0IGNvbW1lbnRDb3VudGVyID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50cycpO1xuICBjb25zdCBjaGlsZENvdW50ID0gdWwuY2hpbGRFbGVtZW50Q291bnQ7XG4gIGNvbnN0IGNvbW1lbnRUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50LXRpdGxlJyk7XG4gIGNvbW1lbnRUaXRsZS50ZXh0Q29udGVudCA9IGBMYXRlc3QgQ29tbWVudHMgKCR7Y2hpbGRDb3VudH0pYDtcbiAgcmV0dXJuIGNoaWxkQ291bnQ7XG59O1xuZXhwb3J0IHsgY29tbWVudENvdW50ZXIgYXMgZGVmYXVsdCB9OyIsImNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MnKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuZXhwb3J0IHsgZ2V0RGF0YSBhcyBkZWZhdWx0IH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9