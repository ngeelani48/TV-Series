"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktv_series"] = self["webpackChunktv_series"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/logo3.png */ \"./src/images/logo3.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".header-container {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  margin-bottom: 30px;\\r\\n}\\r\\n\\r\\n.nav {\\r\\n  display: flex;\\r\\n  list-style: none;\\r\\n  gap: 20px;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-size: 80%;\\r\\n  width: 40px;\\r\\n  height: 40px;\\r\\n  border-radius: 50%;\\r\\n  background-repeat: no-repeat;\\r\\n  background-position: center;\\r\\n  border: 2px solid #060d37;\\r\\n}\\r\\n\\r\\n.movie-container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.moviesItem {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.likes-name {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  width: 200px;\\r\\n}\\r\\n\\r\\n.likes-count {\\r\\n  width: 225px;\\r\\n  text-align: right;\\r\\n  margin-top: 5px;\\r\\n}\\r\\n\\r\\n.likes-count.transition {\\r\\n  font-size: 25px;\\r\\n  font-weight: 600;\\r\\n  color: green;\\r\\n  transition: all 0.8s ease-in-out;\\r\\n}\\r\\n\\r\\n.comment-btn {\\r\\n  width: 80%;\\r\\n  border: 2px solid #060d37;\\r\\n  padding: 5px 0 5px 0;\\r\\n  background-color: inherit;\\r\\n  cursor: pointer;\\r\\n  box-shadow: 2px 2px 4px 0;\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 768px) {\\r\\n  .movie-container {\\r\\n    display: grid;\\r\\n    grid-template-columns: auto auto auto auto;\\r\\n    grid-template-rows: auto auto;\\r\\n  }\\r\\n\\r\\n  .likes-name {\\r\\n    display: flex;\\r\\n    width: 65%;\\r\\n  }\\r\\n}\\r\\n\\r\\n/* PopUp styling */\\r\\n\\r\\n.comment-popup {\\r\\n  background: #fff;\\r\\n  display: none;\\r\\n  position: fixed;\\r\\n\\r\\n  /* z-index: 9999; */\\r\\n  top: 0;\\r\\n  bottom: 0;\\r\\n  right: 0;\\r\\n  left: 0;\\r\\n  overflow: auto;\\r\\n}\\r\\n\\r\\nh2 {\\r\\n  margin-left: 0;\\r\\n  padding-top: 30px;\\r\\n}\\r\\n\\r\\n.tv-title {\\r\\n  font-size: 150%;\\r\\n  padding: 20px 0;\\r\\n}\\r\\n\\r\\n.comment-popup .tv-title {\\r\\n  text-align: center;\\r\\n  width: 100%;\\r\\n  margin: 10px 0;\\r\\n}\\r\\n\\r\\n.comment-popup table {\\r\\n  width: 50%;\\r\\n  margin: 0 auto;\\r\\n  justify-content: center;\\r\\n  margin-left: 30%;\\r\\n}\\r\\n\\r\\n.popup-img {\\r\\n  display: block;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.comments {\\r\\n  margin-left: 90px;\\r\\n  list-style-type: none;\\r\\n}\\r\\n\\r\\n.close-popup {\\r\\n  display: block;\\r\\n  width: 100%;\\r\\n  cursor: pointer;\\r\\n  font-size: 18px;\\r\\n  font-weight: 900;\\r\\n  padding: 2% 0;\\r\\n  margin-left: 95%;\\r\\n  position: fixed;\\r\\n}\\r\\n\\r\\n.comment-title {\\r\\n  margin-left: 10%;\\r\\n}\\r\\n\\r\\n.comment-form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 25px;\\r\\n  margin-bottom: 20px;\\r\\n  margin-left: 130px;\\r\\n}\\r\\n\\r\\n.comment-form input,\\r\\n.comment-form button {\\r\\n  width: 300px;\\r\\n  border: 2px solid #000;\\r\\n  height: 35px;\\r\\n  padding-left: 10px;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.comment-form button {\\r\\n  box-shadow: 2px 2px 4px 0;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.comment-form textarea {\\r\\n  width: 400px;\\r\\n  height: 155px;\\r\\n  border: 2px solid #000;\\r\\n  outline: none;\\r\\n  padding: 5px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tv-series/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://tv-series/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://tv-series/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://tv-series/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://tv-series/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://tv-series/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://tv-series/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://tv-series/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://tv-series/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://tv-series/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://tv-series/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_load_movies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load-movies.js */ \"./src/modules/load-movies.js\");\n\r\n\r\n\r\n(0,_modules_load_movies_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://tv-series/./src/index.js?");

/***/ }),

/***/ "./src/modules/addComment.js":
/*!***********************************!*\
  !*** ./src/modules/addComment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComments.js */ \"./src/modules/getComments.js\");\n/* harmony import */ var _displayComments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayComments */ \"./src/modules/displayComments\");\n\r\n\r\n\r\nconst invApiComment = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6jTH3jOos7OpnHxCg6lz/comments/';\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((button, username, text, bookId) => {\r\n  button.addEventListener('click', async (e) => {\r\n    e.preventDefault();\r\n    bookId = bookId.toString();\r\n    const uname = username.value.trim();\r\n    const ucomment = text.value.trim();\r\n    if (uname && ucomment) {\r\n      await fetch(invApiComment, {\r\n        method: 'POST',\r\n        body: JSON.stringify({\r\n          item_id: bookId,\r\n          username: uname,\r\n          comment: ucomment,\r\n        }),\r\n        headers: {\r\n          'Content-type': 'application/json; charset=UTF-8',\r\n        },\r\n      });\r\n    }\r\n    username.value = '';\r\n    text.value = '';\r\n\r\n    // rendercomments after update\r\n    const getcoms = await (0,_getComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(bookId);\r\n    const usercoms = document.querySelector('.comments');\r\n    (0,_displayComments__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(getcoms, usercoms);\r\n  });\r\n});\n\n//# sourceURL=webpack://tv-series/./src/modules/addComment.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"getMovies\": () => (/* binding */ getMovies)\n/* harmony export */ });\nconst movies = [1, 2, 3, 4, 5, 6, 7, 8];\r\nconst baseUrl = 'https://api.tvmaze.com';\r\nconst showsUrl = '/shows/';\r\nconst invApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';\r\nconst appId = '6jTH3jOos7OpnHxCg6lz';\r\nconst addLike = `/apps/${appId}/likes/`;\r\n\r\nconst getData = async (url = '') => {\r\n  const response = await fetch(url, {\r\n    method: 'GET',\r\n    mode: 'cors',\r\n    cache: 'no-cache',\r\n    credentials: 'same-origin',\r\n    redirect: 'follow',\r\n  });\r\n  return response.json();\r\n};\r\n\r\nconst getlikesCount = async (url = '') => {\r\n  const response = await fetch(url, {\r\n    method: 'GET',\r\n    mode: 'cors',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n  });\r\n  return response.json();\r\n};\r\n\r\nconst getMovies = async () => {\r\n  try {\r\n    const movieObj = [];\r\n    for (let x = 0; x < movies.length; x += 1) {\r\n      // const moviesId = baseUrl + showsUrl + movies[x];\r\n      // const data = await getData(moviesId);\r\n      // movieObj.push(getData(moviesId));\r\n      const moviesId = baseUrl + showsUrl + movies[x];\r\n      const promise = getData(moviesId);\r\n      movieObj.push(promise);\r\n    }\r\n    const movieData = await Promise.all(movieObj);\r\n    return { success: true, movieData };\r\n  } catch (error) {\r\n    return { success: false, error };\r\n  }\r\n};\r\n\r\nconst getLikes = async () => {\r\n  try {\r\n    const postLikeUrl = invApi + addLike;\r\n    const data = await getlikesCount(postLikeUrl);\r\n    return { success: true, data };\r\n  } catch (error) {\r\n    return { success: false, error };\r\n  }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://tv-series/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/commentPopup.js":
/*!*************************************!*\
  !*** ./src/modules/commentPopup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addComment.js */ \"./src/modules/addComment.js\");\n/* harmony import */ var _displayComments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayComments */ \"./src/modules/displayComments\");\n/* harmony import */ var _getComments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getComments.js */ \"./src/modules/getComments.js\");\n\r\n\r\n\r\n\r\nconst commentPopup = document.querySelector('.comment-popup');\r\n\r\nconst popup = async (resultOb) => {\r\n  const closeSign = document.createElement('span');\r\n  closeSign.innerHTML = 'X';\r\n  closeSign.classList = 'close-popup';\r\n  commentPopup.appendChild(closeSign);\r\n  commentPopup.innerHTML += `\r\n<img src=\"${resultOb.image.medium}\" class=\"popup-img\">\r\n<h3 class=\"tv-title\">${resultOb.name}</h3>\r\n<table>\r\n  <tr>\r\n    <td>\r\n      <b>Premiered:</b> ${resultOb.premiered}\r\n    </td>\r\n    <td>\r\n      <b>Ended:</b> ${resultOb.ended}\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td>\r\n      <b>Language:</b> ${resultOb.language}\r\n    </td>\r\n    <td>\r\n      <b>Type:</b> ${resultOb.type}\r\n    </td>\r\n  </tr>\r\n</table>\r\n<h3 class=\"comment-title\">\r\n    Comments <span class=\"total-comments\">(0)</span>\r\n    </h3>\r\n    <ul class=\"comments\">\r\n\r\n    </ul>\r\n    <form class=\"comment-form\">\r\n      <h2>Add a comment</h2>\r\n      <input id=\"name\" type=\"text\" name=\"username\" placeholder=\"Your name\" required>\r\n      <textarea id=\"areatext\" placeholder=\"Your insights\" name=\"comment\" required minlength=\"1\"></textarea>\r\n      <button id=\"submit\" type=\"submit\">Submit</button>\r\n    </form>`;\r\n  // display Comments\r\n  const getcoms = await (0,_getComments_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(resultOb.id);\r\n  const usercoms = document.querySelector('.comments');\r\n  (0,_displayComments__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(getcoms, usercoms);\r\n  // add comment\r\n  const comBtn = document.querySelector('#submit');\r\n  const name = document.querySelector('#name');\r\n  const text = document.querySelector('#areatext');\r\n  (0,_addComment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(comBtn, name, text, resultOb.id);\r\n};\r\ncommentPopup.addEventListener('click', (event) => {\r\n  if (event.target.closest('.close-popup')) {\r\n    commentPopup.style.display = 'none';\r\n    commentPopup.innerHTML = '';\r\n  }\r\n});\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popup);\n\n//# sourceURL=webpack://tv-series/./src/modules/commentPopup.js?");

/***/ }),

/***/ "./src/modules/displayComments":
/*!*************************************!*\
  !*** ./src/modules/displayComments ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayComments=(getcoms, usercoms) => {\r\n  usercoms.innerHTML = '';\r\n  if (getcoms.length > 0) {\r\n    getcoms.forEach((com) => {\r\n      const link = document.createElement('li');\r\n      link.classList.add('commment-item');\r\n      link.innerHTML = `${com.creation_date} ${com.username} : ${com.comment}`;\r\n      usercoms.appendChild(link);\r\n    });\r\n    const checkCount = document.querySelector('.total-comments');\r\n    checkCount.innerHTML = `(${getcoms.length})`;\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayComments);\n\n//# sourceURL=webpack://tv-series/./src/modules/displayComments?");

/***/ }),

/***/ "./src/modules/getComments.js":
/*!************************************!*\
  !*** ./src/modules/getComments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getcomments = async (bookId) => {\r\n  bookId = bookId.toString();\r\n  const coms = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6jTH3jOos7OpnHxCg6lz/comments?item_id=${bookId}`);\r\n  const res = coms.json();\r\n  return res;\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getcomments);\n\n//# sourceURL=webpack://tv-series/./src/modules/getComments.js?");

/***/ }),

/***/ "./src/modules/load-movies.js":
/*!************************************!*\
  !*** ./src/modules/load-movies.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n/* harmony import */ var _commentPopup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentPopup.js */ \"./src/modules/commentPopup.js\");\n\r\n\r\n\r\nconst commentPopup = document.querySelector('.comment-popup');\r\n\r\nconst buildDivElement = (ldMovies, resultOb, cnt) => {\r\n  const moviesItem = document.createElement('div');\r\n  moviesItem.classList = 'moviesItem';\r\n  moviesItem.innerHTML = `\r\n      <img src=\"${resultOb.image.medium}\" alt=\"\">\r\n      <div class=\"likes-name\">\r\n          <p>${resultOb.name}</p>\r\n          <i class=\"lni lni-heart\"></i>\r\n      </div>\r\n      <p class=\"likes-count\">${cnt} Likes</p>`;\r\n  const btn = document.createElement('button');\r\n  btn.classList = 'comment-btn';\r\n  btn.innerHTML = 'Comments';\r\n  moviesItem.appendChild(btn);\r\n  btn.addEventListener('click', () => {\r\n    commentPopup.style.display = 'grid';\r\n    (0,_commentPopup_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(resultOb);\r\n  });\r\n  ldMovies.appendChild(moviesItem);\r\n};\r\n\r\nconst CreateMovieElement = (lodMovies, resultObj) => {\r\n  const flix = document.querySelector('.flix');\r\n  lodMovies.innerHTML = '';\r\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)().then(() => {\r\n    for (let i = 0; i < resultObj.length; i += 1) {\r\n      buildDivElement(lodMovies, resultObj[i], 0);\r\n    }\r\n    flix.textContent = `Flix(${resultObj.length})`;\r\n  });\r\n};\r\n\r\nconst showMovies = () => {\r\n  const loadMovies = document.querySelector('.movie-container');\r\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getMovies)().then((result) => {\r\n    if (result.success) {\r\n      CreateMovieElement(loadMovies, result.movieData);\r\n    }\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMovies);\n\n//# sourceURL=webpack://tv-series/./src/modules/load-movies.js?");

/***/ }),

/***/ "./src/images/logo3.png":
/*!******************************!*\
  !*** ./src/images/logo3.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"febbffe6d18cae53c650.png\";\n\n//# sourceURL=webpack://tv-series/./src/images/logo3.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);