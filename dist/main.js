/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200;400;600&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* stylelint-disable csstree/validator */\\r\\n\\r\\n* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar {\\r\\n  width: 0.6rem;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar-track {\\r\\n  background: rgba(16, 37, 53, 1);\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar-thumb {\\r\\n  background: rgba(33, 74, 107, 0.5);\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar-thumb:hover {\\r\\n  background: rgba(25, 27, 29, 1);\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: rgba(16, 37, 53, 1);\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  height: 100vh;\\r\\n  color: rgba(255, 255, 255, 0.8);\\r\\n  font-family: \\\"IBM Plex Mono\\\", monospace;\\r\\n  font-weight: 400;\\r\\n}\\r\\n\\r\\n.flex {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.main-section {\\r\\n  width: 50%;\\r\\n  flex-direction: column;\\r\\n  gap: 1rem;\\r\\n  max-height: 80%;\\r\\n}\\r\\n\\r\\n.edit-delete {\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\n.my-tasks {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: flex-start;\\r\\n  width: 100%;\\r\\n  padding: 1.5rem;\\r\\n  background-color: rgba(33, 74, 107, 0.5);\\r\\n  border-radius: 0.5rem;\\r\\n  box-shadow: rgba(6, 24, 44, 0.4) 0 0 0 2px, rgba(6, 24, 44, 0.65) 0 4px 6px -1px, rgba(255, 255, 255, 0.08) 0 1px 0 inset;\\r\\n}\\r\\n\\r\\n.input-items {\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  gap: 1rem;\\r\\n  padding: 1rem;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.edit-input {\\r\\n  display: none;\\r\\n  border: none;\\r\\n  width: 95%;\\r\\n  height: 1rem;\\r\\n  font-size: 1rem;\\r\\n  border-radius: 0.5rem;\\r\\n  background-color: rgba(33, 74, 107, 0.2);\\r\\n  color: rgba(255, 255, 255, 0.7);\\r\\n  padding: 1rem;\\r\\n  font-family: \\\"IBM Plex Mono\\\", monospace;\\r\\n  font-weight: 600;\\r\\n  box-shadow: rgba(6, 24, 44, 0.4) 0 0 0 2px, rgba(6, 24, 44, 0.65) 0 4px 6px -1px, rgba(255, 255, 255, 0.08) 0 1px 0 inset;\\r\\n}\\r\\n\\r\\n.list-item {\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 1.5rem 1rem;\\r\\n  width: 100%;\\r\\n  border-radius: 0.5rem;\\r\\n  background-color: rgba(33, 74, 107, 0.4);\\r\\n}\\r\\n\\r\\n.task-description {\\r\\n  font-size: 1.3rem;\\r\\n}\\r\\n\\r\\n.created-at {\\r\\n  font-size: 0.65rem;\\r\\n}\\r\\n\\r\\n.active {\\r\\n  text-decoration-line: line-through;\\r\\n}\\r\\n\\r\\n.task-main {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: flex-start;\\r\\n  gap: 0.5rem;\\r\\n  width: 80%;\\r\\n}\\r\\n\\r\\n.list-header {\\r\\n  font-size: 1.5rem;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n.clear {\\r\\n  width: 100%;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.clear-list {\\r\\n  border: none;\\r\\n  cursor: pointer;\\r\\n  color: rgba(255, 255, 255, 0.8);\\r\\n  font-size: 1.2rem;\\r\\n  font-weight: 600;\\r\\n  background-color: rgba(33, 74, 107, 0.7);\\r\\n  transition: 0.4s;\\r\\n  padding: 1.2rem;\\r\\n  border-radius: 0.5rem;\\r\\n}\\r\\n\\r\\n.clear-list:hover {\\r\\n  background-color: rgba(255, 255, 255, 0.7);\\r\\n  color: rgba(16, 37, 53, 0.9);\\r\\n}\\r\\n\\r\\n.task-column {\\r\\n  flex-direction: column;\\r\\n  align-items: start;\\r\\n  gap: 0.5rem;\\r\\n}\\r\\n\\r\\n.text-field {\\r\\n  border: none;\\r\\n  width: 95%;\\r\\n  height: 2rem;\\r\\n  font-size: 1.5rem;\\r\\n  border-radius: 0.5rem;\\r\\n  background-color: rgba(33, 74, 107, 0.2);\\r\\n  color: rgba(255, 255, 255, 0.7);\\r\\n  padding: 2rem 1rem;\\r\\n  font-family: \\\"IBM Plex Mono\\\", monospace;\\r\\n  font-weight: 600;\\r\\n  box-shadow: rgba(6, 24, 44, 0.4) 0 0 0 2px, rgba(6, 24, 44, 0.65) 0 4px 6px -1px, rgba(255, 255, 255, 0.08) 0 1px 0 inset;\\r\\n}\\r\\n\\r\\n::placeholder {\\r\\n  color: rgba(255, 255, 255, 0.4);\\r\\n}\\r\\n\\r\\n.text-field:focus {\\r\\n  outline: none;\\r\\n  background-color: rgba(33, 74, 107, 0.7);\\r\\n}\\r\\n\\r\\n.fa-circle-plus {\\r\\n  color: rgba(99, 128, 151, 0.5);\\r\\n  font-size: 2rem;\\r\\n  box-shadow: rgba(6, 24, 44, 0.4) 0 0 0 2px, rgba(6, 24, 44, 0.65) 0 4px 6px -1px, rgba(255, 255, 255, 0.08) 0 1px 0 inset;\\r\\n  border-radius: 50%;\\r\\n  cursor: pointer;\\r\\n  transition: 0.5s;\\r\\n}\\r\\n\\r\\n.fa-circle-plus:hover {\\r\\n  color: rgba(255, 255, 255, 0.6);\\r\\n}\\r\\n\\r\\n.fa-trash,\\r\\n.fa-file-pen {\\r\\n  color: rgba(99, 128, 151, 0.5);\\r\\n  font-size: 1.5rem;\\r\\n  cursor: pointer;\\r\\n  transition: 0.5s;\\r\\n}\\r\\n\\r\\n.fa-trash:hover {\\r\\n  color: rgba(248, 11, 11, 0.9);\\r\\n}\\r\\n\\r\\n.fa-file-pen:hover {\\r\\n  color: rgba(11, 248, 43, 0.9);\\r\\n}\\r\\n\\r\\n.todolist {\\r\\n  padding: 1.5rem 0;\\r\\n  flex-direction: column;\\r\\n  width: 100%;\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\ninput[type=\\\"checkbox\\\"] {\\r\\n  height: 1.5rem;\\r\\n  width: 1.5rem;\\r\\n  border: none;\\r\\n  accent-color: #e8ecf0;\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 600px) {\\r\\n  .main-section {\\r\\n    width: 95%;\\r\\n  }\\r\\n\\r\\n  .list-item {\\r\\n    padding: 1rem;\\r\\n  }\\r\\n\\r\\n  .my-tasks {\\r\\n    padding: 1rem;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-setup/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-setup/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_todoClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/todoClass.js */ \"./src/modules/todoClass.js\");\n\n\n\nconst AddKey = document.querySelector('.fa-circle-plus');\n\n// render all the the tasks when the page fully loads\ndocument.addEventListener('DOMContentLoaded', () => {\n  _modules_todoClass_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render();\n});\n// add a task when the enter button is pressed\n_modules_todoClass_js__WEBPACK_IMPORTED_MODULE_1__.input.addEventListener('keypress', (e) => {\n  if (e.key === 'Enter') {\n    _modules_todoClass_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"new\"]();\n    _modules_todoClass_js__WEBPACK_IMPORTED_MODULE_1__.listContainer.innerHTML = '';\n    _modules_todoClass_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render();\n    _modules_todoClass_js__WEBPACK_IMPORTED_MODULE_1__.input.value = '';\n  }\n});\n// add a task when the add button is clicked\nAddKey.addEventListener('click', () => {\n  _modules_todoClass_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"new\"]();\n  _modules_todoClass_js__WEBPACK_IMPORTED_MODULE_1__.listContainer.innerHTML = '';\n  _modules_todoClass_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render();\n  _modules_todoClass_js__WEBPACK_IMPORTED_MODULE_1__.input.value = '';\n});\n\n// future update\n// document.addEventListener('click', (event) => {\n//   if (event.target.classList.contains('to-do')) {\n//     event.target.parentElement.classList.add('backyellow');\n//     Todolist.edit();\n//   }\n// });\n\nconst clearButton = document.querySelector('.clear-list');\n// clear all tasks that are marked complete\nclearButton.addEventListener('click', () => {\n  _modules_todoClass_js__WEBPACK_IMPORTED_MODULE_1__.listContainer.innerHTML = '';\n  _modules_todoClass_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clear();\n  _modules_todoClass_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render();\n});\n\n//# sourceURL=webpack://webpack-setup/./src/index.js?");

/***/ }),

/***/ "./src/modules/todoClass.js":
/*!**********************************!*\
  !*** ./src/modules/todoClass.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDoList),\n/* harmony export */   \"fromStorage\": () => (/* binding */ fromStorage),\n/* harmony export */   \"input\": () => (/* binding */ input),\n/* harmony export */   \"listContainer\": () => (/* binding */ listContainer)\n/* harmony export */ });\n/* eslint-disable max-len */\nconst fromStorage = JSON.parse(localStorage.getItem('listStorage')) || [];\nconst input = document.querySelector('.text-field');\nconst listContainer = document.querySelector('.todolist');\n\nclass ToDoList {\n  constructor(id, description, complete, createdAt, updatedAt) {\n    this.id = id;\n    this.description = description;\n    this.complete = complete;\n    this.createdAt = createdAt;\n    this.updatedAt = updatedAt;\n  }\n\n  static render = () => {\n    fromStorage.forEach((task) => {\n      const taskCard = document.createElement('li');\n      taskCard.id = task.id;\n      taskCard.classList.add('list-item');\n      taskCard.innerHTML = `<div class=\"task-main\"><div class=\"task-column flex\"><input type=checkbox class=\"check-box\"><input class=\"edit-input\" type=\"text\" placeholder=\"Edit Task✒️...\" required><p class=\"task-description\">${task.description}</p><p class=\"created-at\">created: ${task.createdAt}</p><p class=\"created-at\">updated: ${task.updatedAt ? task.updatedAt : 'never'}</p></div></div><div class=\"edit-delete flex\"><i class=\"fa-solid fa-file-pen edit-btn\"></i><i class=\"fa-solid fa-trash delete-btn\"></i></div>`;\n      listContainer.appendChild(taskCard);\n    });\n\n    const checkBox = document.querySelectorAll('.check-box');\n    const taskDescription = document.querySelectorAll('.task-description');\n\n    checkBox.forEach((box, id) => {\n      box.addEventListener('change', () => {\n        if (box.checked === true) {\n          fromStorage[id].complete = true;\n          taskDescription[id].classList.add('active');\n        } else {\n          fromStorage[id].complete = false;\n          taskDescription[id].classList.remove('active');\n        }\n        localStorage.setItem('listStorage', JSON.stringify(fromStorage));\n      });\n    });\n\n    const deleteBtn = document.querySelectorAll('.delete-btn');\n\n    deleteBtn.forEach((del, id) => {\n      del.addEventListener('click', () => {\n        ToDoList.delete(id);\n      });\n    });\n\n    const editBtn = document.querySelectorAll('.edit-btn');\n    const editInput = document.querySelectorAll('.edit-input');\n\n    editBtn.forEach((edit, id) => {\n      edit.addEventListener('click', () => {\n        ToDoList.edit(id);\n      });\n    });\n\n    editInput.forEach((input, id) => {\n      input.addEventListener('blur', () => {\n        ToDoList.saveEdit(id, input.value);\n      });\n    });\n  }\n\n  static new = () => {\n    const date = new Date().toString().slice(4, 21);\n    const newToDo = new ToDoList(Date.now(), input.value, false, date, null);\n\n    if (input.value !== '') {\n      fromStorage.push(newToDo);\n      localStorage.setItem('listStorage', JSON.stringify(fromStorage));\n    }\n  }\n\n  static delete = (index) => {\n    if (index !== -1) fromStorage.splice(index, 1);\n    localStorage.setItem('listStorage', JSON.stringify(fromStorage));\n    listContainer.innerHTML = '';\n    ToDoList.render();\n  }\n\n  static clear = () => {\n    const isTaskDone = fromStorage.filter((task) => task.complete);\n    isTaskDone.forEach((todo) => {\n      const index = fromStorage.findIndex((isDone) => isDone.id === todo.id);\n      fromStorage.splice(index, 1);\n    });\n    localStorage.setItem('listStorage', JSON.stringify(fromStorage));\n  }\n\n  static edit = (index) => {\n    const taskDescription = document.querySelectorAll('.task-description')[index];\n    const editInput = document.querySelectorAll('.edit-input')[index];\n    taskDescription.style.display = 'none';\n    editInput.style.display = 'block';\n    editInput.focus();\n  }\n\n  static saveEdit = (index, newDescription) => {\n    fromStorage[index].description = newDescription;\n    fromStorage[index].updatedAt = new Date().toString().slice(4, 21);\n    localStorage.setItem('listStorage', JSON.stringify(fromStorage));\n    listContainer.innerHTML = '';\n    ToDoList.render();\n  }\n}\n\n//# sourceURL=webpack://webpack-setup/./src/modules/todoClass.js?");

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;