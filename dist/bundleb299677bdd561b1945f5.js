/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/features.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/features.scss ***!
  \***************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".features {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  margin: 0 12rem;\n}\n.features__img {\n  width: 100%;\n}\n.features__feature {\n  align-self: center;\n  justify-self: center;\n  width: 70%;\n  font-size: 1.5rem;\n}\n.features__icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(224, 105, 202, 0.5490196078);\n  height: 5.5rem;\n  width: 5.5rem;\n  border-radius: 50%;\n  margin-bottom: 2rem;\n}\n.features svg {\n  height: 2.5rem;\n  width: 2.5rem;\n  fill: var(--color-primary);\n}\n.features__header {\n  font-size: 2rem;\n  margin-bottom: 1rem;\n}\n\n.lazy-img {\n  filter: blur(20px);\n}", "",{"version":3,"sources":["webpack://./src/styles/features.scss"],"names":[],"mappings":"AAMA;EACI,aAAA;EACA,8BAAA;EACA,SAAA;EACA,eAAA;AALJ;AAOI;EACI,WAAA;AALR;AAQI;EACI,kBAAA;EACA,oBAAA;EACA,UAAA;EACA,iBAAA;AANR;AASI;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mDA1BgB;EA2BhB,cAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;AAPR;AAUI;EACI,cAAA;EACA,aAAA;EACA,0BAAA;AARR;AAWI;EACI,eAAA;EACA,mBAAA;AATR;;AAaA;EACI,kBAAA;AAVJ","sourcesContent":["$primary-color: #e069cb;\r\n$primary-color-opacity: #e069ca8c;\r\n$primary-color-darker: #bb4aa6;\r\n$primary-gradient: linear-gradient(to top left, $primary-color-darker, $primary-color);\r\n$transition: all 0.3s;\r\n\r\n.features {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 4rem;\r\n    margin: 0 12rem;\r\n\r\n    &__img {\r\n        width: 100%;\r\n    }\r\n\r\n    &__feature {\r\n        align-self: center;\r\n        justify-self: center;\r\n        width: 70%;\r\n        font-size: 1.5rem;\r\n    }\r\n\r\n    &__icon {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        background-color: $primary-color-opacity;\r\n        height: 5.5rem;\r\n        width: 5.5rem;\r\n        border-radius: 50%;\r\n        margin-bottom: 2rem;\r\n    }\r\n\r\n    svg {\r\n        height: 2.5rem;\r\n        width: 2.5rem;\r\n        fill: var(--color-primary);\r\n    }\r\n\r\n    &__header {\r\n        font-size: 2rem;\r\n        margin-bottom: 1rem;\r\n    }\r\n}\r\n\r\n.lazy-img {\r\n    filter: blur(20px);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/footer.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/footer.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".footer {\n  padding: 10rem 3rem;\n  background-color: #37383d;\n}\n.footer__nav {\n  list-style: none;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 5rem;\n}\n.footer__item {\n  margin-right: 4rem;\n}\n.footer__link {\n  font-size: 1.6rem;\n  color: #eee;\n  text-decoration: none;\n}\n.footer__logo {\n  height: 8rem;\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 5rem;\n}\n.footer__copyright {\n  font-size: 1.4rem;\n  color: #aaa;\n  text-align: center;\n}\n.footer__github-link {\n  font-size: 1.4rem;\n}", "",{"version":3,"sources":["webpack://./src/styles/footer.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;EACA,yBAAA;AACJ;AACI;EACI,gBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AACR;AAEI;EACI,kBAAA;AAAR;AAGI;EACI,iBAAA;EACA,WAAA;EACA,qBAAA;AADR;AAII;EACI,YAAA;EACA,cAAA;EACA,cAAA;EACA,mBAAA;AAFR;AAKI;EACI,iBAAA;EACA,WAAA;EACA,kBAAA;AAHR;AAMI;EACI,iBAAA;AAJR","sourcesContent":[".footer {\r\n    padding: 10rem 3rem;\r\n    background-color: #37383d;\r\n\r\n    &__nav {\r\n        list-style: none;\r\n        display: flex;\r\n        justify-content: center;\r\n        margin-bottom: 5rem;\r\n    }\r\n\r\n    &__item {\r\n        margin-right: 4rem;\r\n    }\r\n\r\n    &__link {\r\n        font-size: 1.6rem;\r\n        color: #eee;\r\n        text-decoration: none;\r\n    }\r\n\r\n    &__logo {\r\n        height: 8rem;\r\n        display: block;\r\n        margin: 0 auto;\r\n        margin-bottom: 5rem;\r\n    }\r\n\r\n    &__copyright {\r\n        font-size: 1.4rem;\r\n        color: #aaa;\r\n        text-align: center;\r\n    }\r\n\r\n    &__github-link {\r\n        font-size: 1.4rem;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/header.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/header.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 9rem;\n  width: 100%;\n  padding: 0 6rem;\n  z-index: 1;\n}\n.nav__logo {\n  height: 4.5rem;\n  transition: all 0.3s;\n}\n.nav__links {\n  display: flex;\n  align-items: center;\n  list-style: none;\n}\n.nav__item {\n  margin-left: 4rem;\n}\n.nav__link:link, .nav__link:visited {\n  display: block;\n  font-size: 1.7rem;\n  font-weight: 400;\n  color: inherit;\n  text-decoration: none;\n  transition: all 0.3s;\n}\n.nav__link--btn:link, .nav__link--btn:visited {\n  padding: 0.8rem 2.5rem;\n  border-radius: 3rem;\n  background-color: #e069cb;\n  color: #222;\n}\n.nav__link--btn:hover, .nav__link--btn:active {\n  color: inherit;\n  background-color: #bb4aa6;\n  color: #333;\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n  padding: 0 3rem;\n}\n.header__title {\n  flex: 1;\n  display: grid;\n  max-width: 115rem;\n  grid-template-columns: 3fr 2fr;\n  row-gap: 3rem;\n  align-content: center;\n  justify-content: center;\n  align-items: start;\n  justify-items: start;\n}\n.header__img {\n  width: 100%;\n  grid-column: 2/3;\n  grid-row: 1/span 4;\n  transform: translateY(-6rem);\n}\n\n.sticky {\n  position: fixed;\n  background-color: rgba(255, 255, 255, 0.95);\n}\n\nh1 {\n  font-size: 5.5rem;\n  line-height: 1.35;\n}\n\nh4 {\n  font-size: 2.4rem;\n  font-weight: 500;\n}\n\n.highlight {\n  position: relative;\n}\n\n.highlight::after {\n  display: block;\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n  opacity: 0.7;\n  transform: scale(1.07, 1.05) skewX(-15deg);\n  background-image: linear-gradient(to top left, #bb4aa6, #e069cb);\n}", "",{"version":3,"sources":["webpack://./src/styles/header.scss"],"names":[],"mappings":"AAKA;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,eAAA;EACA,UAAA;AAJJ;AAMI;EACI,cAAA;EACA,oBAbK;AASb;AAOI;EACI,aAAA;EACA,mBAAA;EACA,gBAAA;AALR;AAQI;EACI,iBAAA;AANR;AASI;EAEI,cAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;EACA,qBAAA;EACA,oBAjCK;AAyBb;AAWI;EAEI,sBAAA;EACA,mBAAA;EACA,yBA3CQ;EA4CR,WAAA;AAVR;AAaI;EAEI,cAAA;EACA,yBAjDe;EAkDf,WAAA;AAZR;;AAgBA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,aAAA;EACA,eAAA;AAbJ;AAeI;EACI,OAAA;EACA,aAAA;EACA,iBAAA;EACA,8BAAA;EACA,aAAA;EACA,qBAAA;EACA,uBAAA;EACA,kBAAA;EACA,oBAAA;AAbR;AAgBI;EACI,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,4BAAA;AAdR;;AAkBA;EACI,eAAA;EACA,2CAAA;AAfJ;;AAkBA;EACI,iBAAA;EACA,iBAAA;AAfJ;;AAkBA;EACI,iBAAA;EACA,gBAAA;AAfJ;;AAkBA;EACI,kBAAA;AAfJ;;AAkBA;EACI,cAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,0CAAA;EACA,gEA9Ge;AA+FnB","sourcesContent":["$primary-color: #e069cb;\r\n$primary-color-darker: #bb4aa6;\r\n$primary-gradient: linear-gradient(to top left, $primary-color-darker, $primary-color);\r\n$transition: all 0.3s;\r\n\r\n.nav {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: 9rem;\r\n    width: 100%;\r\n    padding: 0 6rem;\r\n    z-index: 1;\r\n\r\n    &__logo {\r\n        height: 4.5rem;\r\n        transition: $transition;\r\n    }\r\n\r\n    &__links {\r\n        display: flex;\r\n        align-items: center;\r\n        list-style: none;\r\n    }\r\n\r\n    &__item {\r\n        margin-left: 4rem;\r\n    }\r\n\r\n    &__link:link,\r\n    &__link:visited {\r\n        display: block;\r\n        font-size: 1.7rem;\r\n        font-weight: 400;\r\n        color: inherit;\r\n        text-decoration: none;\r\n        transition: $transition;\r\n    }\r\n\r\n    &__link--btn:link,\r\n    &__link--btn:visited {\r\n        padding: 0.8rem 2.5rem;\r\n        border-radius: 3rem;\r\n        background-color: $primary-color;\r\n        color: #222;\r\n    }\r\n\r\n    &__link--btn:hover,\r\n    &__link--btn:active {\r\n        color: inherit;\r\n        background-color: $primary-color-darker;\r\n        color: #333;\r\n    }\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    height: 100vh;\r\n    padding: 0 3rem;\r\n\r\n    &__title {\r\n        flex: 1;\r\n        display: grid;\r\n        max-width: 115rem;\r\n        grid-template-columns: 3fr 2fr;\r\n        row-gap: 3rem;\r\n        align-content: center;\r\n        justify-content: center;\r\n        align-items: start;\r\n        justify-items: start;\r\n    }\r\n\r\n    &__img {\r\n        width: 100%;\r\n        grid-column: 2 / 3;\r\n        grid-row: 1 / span 4;\r\n        transform: translateY(-6rem);\r\n    }\r\n}\r\n\r\n.sticky {\r\n    position: fixed;\r\n    background-color: rgb(255, 255, 255, 0.95);\r\n}\r\n\r\nh1 {\r\n    font-size: 5.5rem;\r\n    line-height: 1.35;\r\n}\r\n\r\nh4 {\r\n    font-size: 2.4rem;\r\n    font-weight: 500;\r\n}\r\n\r\n.highlight {\r\n    position: relative;\r\n}\r\n\r\n.highlight::after {\r\n    display: block;\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    z-index: -1;\r\n    opacity: 0.7;\r\n    transform: scale(1.07, 1.05) skewX(-15deg);\r\n    background-image: $primary-gradient;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  font-size: 62.5%;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 300;\n  color: #444;\n  line-height: 1.9;\n  background-color: #f3f3f3;\n}\n\n.section {\n  padding: 15rem 3rem;\n  border-top: 1px solid #ddd;\n  transition: transform 1s, opacity 1s;\n}\n.section__title {\n  max-width: 80rem;\n  margin: 0 auto 8rem auto;\n}\n.section__header {\n  font-size: 1.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: #e069cb;\n  margin-bottom: 1rem;\n}\n.section__description {\n  font-size: 4rem;\n  line-height: 1.3;\n  font-weight: 500;\n}\n\n.section--hidden {\n  opacity: 0;\n  transform: translateY(8rem);\n}\n\n.btn {\n  display: inline-block;\n  background-color: #e069cb;\n  font-size: 1.6rem;\n  font-family: inherit;\n  font-weight: 500;\n  border: none;\n  padding: 1.25rem 4.5rem;\n  border-radius: 10rem;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n\n.btn:hover {\n  background-color: #bb4aa6;\n}\n\n.btn--text {\n  display: inline-block;\n  background: none;\n  font-size: 1.7rem;\n  font-family: inherit;\n  font-weight: 500;\n  color: #e069cb;\n  border: none;\n  border-bottom: 1px solid currentColor;\n  padding-bottom: 2px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n\np {\n  color: #666;\n}\n\nbutton:focus {\n  outline: none;\n}\n\nimg {\n  transition: filter 0.5s;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAIA;EACI,SAAA;EACA,UAAA;EACA,mBAAA;AAHJ;;AAMA;EACI,gBAAA;EACA,sBAAA;AAHJ;;AAMA;EACI,kCAAA;EACA,gBAAA;EACA,WAAA;EACA,gBAAA;EACA,yBAAA;AAHJ;;AAMA;EACI,mBAAA;EACA,0BAAA;EAEA,oCAAA;AAJJ;AAMI;EACI,gBAAA;EACA,wBAAA;AAJR;AAOI;EACI,iBAAA;EACA,gBAAA;EACA,yBAAA;EACA,cAtCQ;EAuCR,mBAAA;AALR;AAQI;EACI,eAAA;EACA,gBAAA;EACA,gBAAA;AANR;;AAUA;EACI,UAAA;EACA,2BAAA;AAPJ;;AAUA;EACI,qBAAA;EACA,yBAxDY;EAyDZ,iBAAA;EACA,oBAAA;EACA,gBAAA;EACA,YAAA;EACA,uBAAA;EACA,oBAAA;EACA,eAAA;EACA,oBA9DS;AAuDb;;AAUA;EACI,yBAnEmB;AA4DvB;;AAUA;EACI,qBAAA;EACA,gBAAA;EACA,iBAAA;EACA,oBAAA;EACA,gBAAA;EACA,cA7EY;EA8EZ,YAAA;EACA,qCAAA;EACA,mBAAA;EACA,eAAA;EACA,oBAhFS;AAyEb;;AAUA;EACI,WAAA;AAPJ;;AAUA;EACI,aAAA;AAPJ;;AAUA;EACI,uBAAA;AAPJ","sourcesContent":["$primary-color: #e069cb;\r\n$primary-color-darker: #bb4aa6;\r\n$transition: all 0.3s;\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: inherit;\r\n}\r\n\r\nhtml {\r\n    font-size: 62.5%;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: 300;\r\n    color: #444;\r\n    line-height: 1.9;\r\n    background-color: #f3f3f3;\r\n}\r\n\r\n.section {\r\n    padding: 15rem 3rem;\r\n    border-top: 1px solid #ddd;\r\n\r\n    transition: transform 1s, opacity 1s;\r\n\r\n    &__title {\r\n        max-width: 80rem;\r\n        margin: 0 auto 8rem auto;\r\n    }\r\n\r\n    &__header {\r\n        font-size: 1.8rem;\r\n        font-weight: 600;\r\n        text-transform: uppercase;\r\n        color: $primary-color;\r\n        margin-bottom: 1rem;\r\n    }\r\n\r\n    &__description {\r\n        font-size: 4rem;\r\n        line-height: 1.3;\r\n        font-weight: 500;\r\n    }\r\n}\r\n\r\n.section--hidden {\r\n    opacity: 0;\r\n    transform: translateY(8rem);\r\n}\r\n\r\n.btn {\r\n    display: inline-block;\r\n    background-color: $primary-color;\r\n    font-size: 1.6rem;\r\n    font-family: inherit;\r\n    font-weight: 500;\r\n    border: none;\r\n    padding: 1.25rem 4.5rem;\r\n    border-radius: 10rem;\r\n    cursor: pointer;\r\n    transition: $transition;\r\n}\r\n\r\n.btn:hover {\r\n    background-color: $primary-color-darker;\r\n}\r\n\r\n.btn--text {\r\n    display: inline-block;\r\n    background: none;\r\n    font-size: 1.7rem;\r\n    font-family: inherit;\r\n    font-weight: 500;\r\n    color: $primary-color;\r\n    border: none;\r\n    border-bottom: 1px solid currentColor;\r\n    padding-bottom: 2px;\r\n    cursor: pointer;\r\n    transition: $transition;\r\n}\r\n\r\np {\r\n    color: #666;\r\n}\r\n\r\nbutton:focus {\r\n    outline: none;\r\n}\r\n\r\nimg {\r\n    transition: filter 0.5s;\r\n}\r\n\r\n// .lazy-img {\r\n//     filter: blur(20px);\r\n// }\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/modal.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/modal.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  max-width: 60rem;\n  background-color: #f3f3f3;\n  padding: 5rem 6rem;\n  box-shadow: 0 4rem 6rem rgba(0, 0, 0, 0.3);\n  z-index: 1000;\n  transition: all 0.5s;\n}\n.modal__header {\n  font-size: 3.25rem;\n  margin-bottom: 4.5rem;\n  line-height: 1.5;\n}\n.modal__form {\n  margin: 0 3rem;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  align-items: center;\n  gap: 2.5rem;\n}\n.modal__form label {\n  font-size: 1.7rem;\n  font-weight: 500;\n}\n.modal__form input {\n  font-size: 1.7rem;\n  padding: 1rem 1.5rem;\n  border: 1px solid #ddd;\n  border-radius: 0.5rem;\n}\n.modal__form button {\n  grid-column: 1/span 2;\n  justify-self: center;\n  margin-top: 1rem;\n}\n.modal .btn--close-modal {\n  font-family: inherit;\n  color: inherit;\n  position: absolute;\n  top: 0.5rem;\n  right: 2rem;\n  font-size: 4rem;\n  cursor: pointer;\n  border: none;\n  background: none;\n}\n\n.hidden {\n  visibility: hidden;\n  opacity: 0;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(4px);\n  z-index: 100;\n  transition: all 0.5s;\n}", "",{"version":3,"sources":["webpack://./src/styles/modal.scss"],"names":[],"mappings":"AAAA;EACI,eAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,gBAAA;EACA,yBAAA;EACA,kBAAA;EACA,0CAAA;EACA,aAAA;EACA,oBAAA;AACJ;AACI;EACI,kBAAA;EACA,qBAAA;EACA,gBAAA;AACR;AAEI;EACI,cAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,WAAA;AAAR;AAEQ;EACI,iBAAA;EACA,gBAAA;AAAZ;AAGQ;EACI,iBAAA;EACA,oBAAA;EACA,sBAAA;EACA,qBAAA;AADZ;AAIQ;EACI,qBAAA;EACA,oBAAA;EACA,gBAAA;AAFZ;AAMI;EACI,oBAAA;EACA,cAAA;EACA,kBAAA;EACA,WAAA;EACA,WAAA;EACA,eAAA;EACA,eAAA;EACA,YAAA;EACA,gBAAA;AAJR;;AAQA;EACI,kBAAA;EACA,UAAA;AALJ;;AAQA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,oCAAA;EACA,0BAAA;EACA,YAAA;EACA,oBAAA;AALJ","sourcesContent":[".modal {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    max-width: 60rem;\r\n    background-color: #f3f3f3;\r\n    padding: 5rem 6rem;\r\n    box-shadow: 0 4rem 6rem rgba(0, 0, 0, 0.3);\r\n    z-index: 1000;\r\n    transition: all 0.5s;\r\n\r\n    &__header {\r\n        font-size: 3.25rem;\r\n        margin-bottom: 4.5rem;\r\n        line-height: 1.5;\r\n    }\r\n\r\n    &__form {\r\n        margin: 0 3rem;\r\n        display: grid;\r\n        grid-template-columns: 1fr 2fr;\r\n        align-items: center;\r\n        gap: 2.5rem;\r\n\r\n        label {\r\n            font-size: 1.7rem;\r\n            font-weight: 500;\r\n        }\r\n\r\n        input {\r\n            font-size: 1.7rem;\r\n            padding: 1rem 1.5rem;\r\n            border: 1px solid #ddd;\r\n            border-radius: 0.5rem;\r\n        }\r\n\r\n        button {\r\n            grid-column: 1 / span 2;\r\n            justify-self: center;\r\n            margin-top: 1rem;\r\n        }\r\n    }\r\n\r\n    .btn--close-modal {\r\n        font-family: inherit;\r\n        color: inherit;\r\n        position: absolute;\r\n        top: 0.5rem;\r\n        right: 2rem;\r\n        font-size: 4rem;\r\n        cursor: pointer;\r\n        border: none;\r\n        background: none;\r\n    }\r\n}\r\n\r\n.hidden {\r\n    visibility: hidden;\r\n    opacity: 0;\r\n}\r\n\r\n.overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    backdrop-filter: blur(4px);\r\n    z-index: 100;\r\n    transition: all 0.5s;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/operations.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/operations.scss ***!
  \*****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".operations {\n  max-width: 100rem;\n  margin: 12rem auto 0 auto;\n  background-color: #fff;\n}\n.operations__tab-container {\n  display: flex;\n  justify-content: center;\n}\n.operations__tab {\n  margin-right: 2.5rem;\n  transform: translateY(-50%);\n}\n.operations__tab--1 {\n  background-color: #2af5ff;\n}\n.operations__tab--1:hover {\n  background-color: #21b2b9;\n}\n.operations__tab--3 {\n  background-color: #28c2ff;\n}\n.operations__tab--3:hover {\n  background-color: #1f8cb8;\n}\n.operations__tab--active {\n  transform: translateY(-66%);\n}\n.operations span {\n  margin-right: 1rem;\n  font-weight: 600;\n  display: inline-block;\n}\n.operations__content {\n  display: none;\n  font-size: 1.7rem;\n  padding: 2.5rem 7rem 6.5rem 7rem;\n}\n.operations__content--active {\n  display: grid;\n  grid-template-columns: 7rem 1fr;\n  column-gap: 3rem;\n  row-gap: 0.5rem;\n}\n.operations p {\n  grid-column: 2;\n}\n.operations__header {\n  font-size: 2.25rem;\n  font-weight: 500;\n  align-self: center;\n}\n.operations__icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 7rem;\n  width: 7rem;\n  border-radius: 50%;\n}\n.operations__icon--1 {\n  background-color: rgba(42, 244, 255, 0.5764705882);\n}\n.operations__icon svg {\n  fill: #21b2b9;\n}\n.operations__icon--2 {\n  background-color: rgba(224, 105, 202, 0.5490196078);\n}\n.operations__icon svg {\n  fill: #bb4aa6;\n}\n.operations__icon--3 {\n  background-color: rgba(40, 194, 255, 0.5490196078);\n}\n.operations__icon svg {\n  fill: #1f8cb8;\n}\n.operations svg {\n  height: 2.75rem;\n  width: 2.75rem;\n}", "",{"version":3,"sources":["webpack://./src/styles/operations.scss"],"names":[],"mappings":"AAYA;EACI,iBAAA;EACA,yBAAA;EAEA,sBAAA;AAZJ;AAcI;EACI,aAAA;EACA,uBAAA;AAZR;AAeI;EACI,oBAAA;EACA,2BAAA;AAbR;AAeQ;EACI,yBAzBM;AAYlB;AAeY;EACI,yBA3BS;AAczB;AAiBQ;EACI,yBA9BK;AAejB;AAiBY;EACI,yBAhCQ;AAiBxB;AAmBQ;EACI,2BAAA;AAjBZ;AAqBI;EACI,kBAAA;EACA,gBAAA;EACA,qBAAA;AAnBR;AAsBI;EACI,aAAA;EAEA,iBAAA;EACA,gCAAA;AArBR;AAuBQ;EACI,aAAA;EACA,+BAAA;EACA,gBAAA;EACA,eAAA;AArBZ;AAyBI;EACI,cAAA;AAvBR;AA0BI;EACI,kBAAA;EACA,gBAAA;EACA,kBAAA;AAxBR;AA2BI;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;AAzBR;AA2BQ;EACI,kDAlFc;AAyD1B;AA4BQ;EACI,aAvFa;AA6DzB;AA6BQ;EACI,mDA7FY;AAkExB;AA8BQ;EACI,aAlGW;AAsEvB;AA+BQ;EACI,kDA/Fa;AAkEzB;AAgCQ;EACI,aApGY;AAsExB;AAkCI;EACI,eAAA;EACA,cAAA;AAhCR","sourcesContent":["$primary-color: #e069cb;\r\n$primary-color-darker: #bb4aa6;\r\n$primary-color-opacity: #e069ca8c;\r\n$secondary-color: #2af5ff;\r\n$secondary-color-darker: #21b2b9;\r\n$secondary-color-opacity: #2af4ff93;\r\n$tertiary-color: #28c2ff;\r\n$tertiary-color-darker: #1f8cb8;\r\n$tertiary-color-opacity: #28c2ff8c;\r\n\r\n$transition: all 0.3s;\r\n\r\n.operations {\r\n    max-width: 100rem;\r\n    margin: 12rem auto 0 auto;\r\n\r\n    background-color: #fff;\r\n\r\n    &__tab-container {\r\n        display: flex;\r\n        justify-content: center;\r\n    }\r\n\r\n    &__tab {\r\n        margin-right: 2.5rem;\r\n        transform: translateY(-50%);\r\n\r\n        &--1 {\r\n            background-color: $secondary-color;\r\n\r\n            &:hover {\r\n                background-color: $secondary-color-darker;\r\n            }\r\n        }\r\n\r\n        &--3 {\r\n            background-color: $tertiary-color;\r\n\r\n            &:hover {\r\n                background-color: $tertiary-color-darker;\r\n            }\r\n        }\r\n\r\n        &--active {\r\n            transform: translateY(-66%);\r\n        }\r\n    }\r\n\r\n    span {\r\n        margin-right: 1rem;\r\n        font-weight: 600;\r\n        display: inline-block;\r\n    }\r\n\r\n    &__content {\r\n        display: none;\r\n\r\n        font-size: 1.7rem;\r\n        padding: 2.5rem 7rem 6.5rem 7rem;\r\n\r\n        &--active {\r\n            display: grid;\r\n            grid-template-columns: 7rem 1fr;\r\n            column-gap: 3rem;\r\n            row-gap: 0.5rem;\r\n        }\r\n    }\r\n\r\n    p {\r\n        grid-column: 2;\r\n    }\r\n\r\n    &__header {\r\n        font-size: 2.25rem;\r\n        font-weight: 500;\r\n        align-self: center;\r\n    }\r\n\r\n    &__icon {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        height: 7rem;\r\n        width: 7rem;\r\n        border-radius: 50%;\r\n\r\n        &--1 {\r\n            background-color: $secondary-color-opacity;\r\n        }\r\n\r\n        svg {\r\n            fill: $secondary-color-darker;\r\n        }\r\n\r\n        &--2 {\r\n            background-color: $primary-color-opacity;\r\n        }\r\n\r\n        svg {\r\n            fill: $primary-color-darker;\r\n        }\r\n\r\n        &--3 {\r\n            background-color: $tertiary-color-opacity;\r\n        }\r\n\r\n        svg {\r\n            fill: $tertiary-color-darker;\r\n        }\r\n    }\r\n\r\n    svg {\r\n        height: 2.75rem;\r\n        width: 2.75rem;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/signup.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/signup.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".section--sign-up {\n  background-color: #37383d;\n  border-top: none;\n  border-bottom: 1px solid #444;\n  text-align: center;\n  padding: 10rem 3rem;\n}\n.section--sign-up .section__header {\n  font-size: 2.5rem;\n  color: #fff;\n  text-align: center;\n}\n.section--sign-up .section__title {\n  margin-bottom: 6rem;\n}\n.section--sign-up .btn {\n  font-size: 1.9rem;\n  padding: 2rem 5rem;\n}", "",{"version":3,"sources":["webpack://./src/styles/signup.scss"],"names":[],"mappings":"AAAA;EACI,yBAAA;EACA,gBAAA;EACA,6BAAA;EACA,kBAAA;EACA,mBAAA;AACJ;AACI;EACI,iBAAA;EACA,WAAA;EACA,kBAAA;AACR;AAEI;EACI,mBAAA;AAAR;AAGI;EACI,iBAAA;EACA,kBAAA;AADR","sourcesContent":[".section--sign-up {\r\n    background-color: #37383d;\r\n    border-top: none;\r\n    border-bottom: 1px solid #444;\r\n    text-align: center;\r\n    padding: 10rem 3rem;\r\n\r\n    .section__header {\r\n        font-size: 2.5rem;\r\n        color: #fff;\r\n        text-align: center;\r\n    }\r\n\r\n    .section__title {\r\n        margin-bottom: 6rem;\r\n    }\r\n\r\n    .btn {\r\n        font-size: 1.9rem;\r\n        padding: 2rem 5rem;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/slider.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/slider.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n.slider {\n  position: relative;\n  max-width: 100rem;\n  height: 50rem;\n  margin: 0 auto;\n  overflow: hidden;\n}\n.slider .slide {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 50rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 1s;\n}\n.slider .slide .testimonial {\n  width: 65%;\n  position: relative;\n}\n.slider .slide .testimonial::before {\n  content: \"“\";\n  position: absolute;\n  top: -5.7rem;\n  left: -6.8rem;\n  line-height: 1;\n  font-size: 20rem;\n  font-family: inherit;\n  color: #e069cb;\n  z-index: -1;\n}\n.slider .slide .testimonial__header {\n  font-size: 2.25rem;\n  font-weight: 500;\n  margin-bottom: 1.5rem;\n}\n.slider .slide .testimonial__text {\n  font-size: 1.7rem;\n  margin-bottom: 3.5rem;\n  color: #666;\n}\n.slider .slide .testimonial__author {\n  margin-left: 3rem;\n  font-style: normal;\n  display: grid;\n  grid-template-columns: 6.5rem 1fr;\n  column-gap: 2rem;\n}\n.slider .slide .testimonial__photo {\n  grid-row: 1/span 2;\n  height: 100%;\n  width: 6.5rem;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.slider .slide .testimonial__name {\n  font-size: 1.7rem;\n  font-weight: 500;\n  align-self: end;\n  margin: 0;\n}\n.slider .slide .testimonial__location {\n  font-size: 1.5rem;\n}\n.slider__btn {\n  position: absolute;\n  top: 50%;\n  z-index: 1;\n  border: none;\n  background: rgba(255, 255, 255, 0.7);\n  font-family: inherit;\n  color: #333;\n  border-radius: 50%;\n  height: 5.5rem;\n  width: 5.5rem;\n  font-size: 3.25rem;\n  cursor: pointer;\n}\n.slider__btn--left {\n  left: 6%;\n  transform: translate(-50%, -45%);\n}\n.slider__btn--right {\n  right: 6%;\n  transform: translate(50%, -45%);\n}\n.slider .dots {\n  display: flex;\n  position: absolute;\n  bottom: 5%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.slider .dots__dot {\n  border: none;\n  background-color: #bebebe;\n  opacity: 0.7;\n  height: 1rem;\n  width: 1rem;\n  border-radius: 50%;\n  margin-right: 1.75rem;\n  cursor: pointer;\n  transition: all 0.5s;\n}\n.slider .dots__dot:last-child {\n  margin: 0;\n}\n.slider .dots__dot--active {\n  background-color: #888;\n  opacity: 1;\n}\n\n.section__title--testimonials {\n  margin-bottom: 4rem;\n}", "",{"version":3,"sources":["webpack://./src/styles/slider.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAEhB;EACI,kBAAA;EACA,iBAAA;EACA,aAAA;EACA,cAAA;EACA,gBAAA;AAAJ;AAEI;EACI,kBAAA;EACA,MAAA;EACA,WAAA;EACA,aAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,wBAAA;AAFR;AAIQ;EACI,UAAA;EACA,kBAAA;AAFZ;AAIY;EACI,YAAA;EACA,kBAAA;EACA,YAAA;EACA,aAAA;EACA,cAAA;EACA,gBAAA;EACA,oBAAA;EACA,cAjCA;EAkCA,WAAA;AAFhB;AAKY;EACI,kBAAA;EACA,gBAAA;EACA,qBAAA;AAHhB;AAMY;EACI,iBAAA;EACA,qBAAA;EACA,WAAA;AAJhB;AAOY;EACI,iBAAA;EACA,kBAAA;EAEA,aAAA;EACA,iCAAA;EACA,gBAAA;AANhB;AASY;EACI,kBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,iBAAA;AAPhB;AAUY;EACI,iBAAA;EACA,gBAAA;EACA,eAAA;EACA,SAAA;AARhB;AAWY;EACI,iBAAA;AAThB;AAcI;EACI,kBAAA;EACA,QAAA;EACA,UAAA;EACA,YAAA;EACA,oCAAA;EACA,oBAAA;EACA,WAAA;EACA,kBAAA;EACA,cAAA;EACA,aAAA;EACA,kBAAA;EACA,eAAA;AAZR;AAcQ;EACI,QAAA;EACA,gCAAA;AAZZ;AAeQ;EACI,SAAA;EACA,+BAAA;AAbZ;AAiBI;EACI,aAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,2BAAA;AAfR;AAiBQ;EACI,YAAA;EACA,yBAAA;EACA,YAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,oBAAA;AAfZ;AAiBY;EACI,SAAA;AAfhB;AAkBY;EACI,sBAAA;EACA,UAAA;AAhBhB;;AAsBA;EACI,mBAAA;AAnBJ","sourcesContent":["$primary-color: #e069cb;\r\n\r\n.slider {\r\n    position: relative;\r\n    max-width: 100rem;\r\n    height: 50rem;\r\n    margin: 0 auto;\r\n    overflow: hidden;\r\n\r\n    .slide {\r\n        position: absolute;\r\n        top: 0;\r\n        width: 100%;\r\n        height: 50rem;\r\n\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n\r\n        transition: transform 1s;\r\n\r\n        .testimonial {\r\n            width: 65%;\r\n            position: relative;\r\n\r\n            &::before {\r\n                content: '\\201C';\r\n                position: absolute;\r\n                top: -5.7rem;\r\n                left: -6.8rem;\r\n                line-height: 1;\r\n                font-size: 20rem;\r\n                font-family: inherit;\r\n                color: $primary-color;\r\n                z-index: -1;\r\n            }\r\n\r\n            &__header {\r\n                font-size: 2.25rem;\r\n                font-weight: 500;\r\n                margin-bottom: 1.5rem;\r\n            }\r\n\r\n            &__text {\r\n                font-size: 1.7rem;\r\n                margin-bottom: 3.5rem;\r\n                color: #666;\r\n            }\r\n\r\n            &__author {\r\n                margin-left: 3rem;\r\n                font-style: normal;\r\n\r\n                display: grid;\r\n                grid-template-columns: 6.5rem 1fr;\r\n                column-gap: 2rem;\r\n            }\r\n\r\n            &__photo {\r\n                grid-row: 1 / span 2;\r\n                height: 100%;\r\n                width: 6.5rem;\r\n                border-radius: 50%;\r\n                object-fit: cover;\r\n            }\r\n\r\n            &__name {\r\n                font-size: 1.7rem;\r\n                font-weight: 500;\r\n                align-self: end;\r\n                margin: 0;\r\n            }\r\n\r\n            &__location {\r\n                font-size: 1.5rem;\r\n            }\r\n        }\r\n    }\r\n\r\n    &__btn {\r\n        position: absolute;\r\n        top: 50%;\r\n        z-index: 1;\r\n        border: none;\r\n        background: rgba(255, 255, 255, 0.7);\r\n        font-family: inherit;\r\n        color: #333;\r\n        border-radius: 50%;\r\n        height: 5.5rem;\r\n        width: 5.5rem;\r\n        font-size: 3.25rem;\r\n        cursor: pointer;\r\n\r\n        &--left {\r\n            left: 6%;\r\n            transform: translate(-50%, -45%);\r\n        }\r\n\r\n        &--right {\r\n            right: 6%;\r\n            transform: translate(50%, -45%);\r\n        }\r\n    }\r\n\r\n    .dots {\r\n        display: flex;\r\n        position: absolute;\r\n        bottom: 5%;\r\n        left: 50%;\r\n        transform: translateX(-50%);\r\n\r\n        &__dot {\r\n            border: none;\r\n            background-color: #bebebe;\r\n            opacity: 0.7;\r\n            height: 1rem;\r\n            width: 1rem;\r\n            border-radius: 50%;\r\n            margin-right: 1.75rem;\r\n            cursor: pointer;\r\n            transition: all 0.5s;\r\n\r\n            &:last-child {\r\n                margin: 0;\r\n            }\r\n\r\n            &--active {\r\n                background-color: #888;\r\n                opacity: 1;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n.section__title--testimonials {\r\n    margin-bottom: 4rem;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/assets/account_app.jpg":
/*!************************************!*\
  !*** ./src/assets/account_app.jpg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("assets/account_app.jpg");

/***/ }),

/***/ "./src/assets/contactless.jpg":
/*!************************************!*\
  !*** ./src/assets/contactless.jpg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("assets/contactless.jpg");

/***/ }),

/***/ "./src/assets/hero.png":
/*!*****************************!*\
  !*** ./src/assets/hero.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("assets/hero.png");

/***/ }),

/***/ "./src/assets/icon.png":
/*!*****************************!*\
  !*** ./src/assets/icon.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("assets/icon.png");

/***/ }),

/***/ "./src/assets/icon_white.png":
/*!***********************************!*\
  !*** ./src/assets/icon_white.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("assets/icon_white.png");

/***/ }),

/***/ "./src/assets/icons.svg":
/*!******************************!*\
  !*** ./src/assets/icons.svg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("assets/icons.svg");

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("assets/logo.png");

/***/ }),

/***/ "./src/assets/low_res_01.jpg":
/*!***********************************!*\
  !*** ./src/assets/low_res_01.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("assets/low_res_01.jpg");

/***/ }),

/***/ "./src/assets/low_res_02.jpg":
/*!***********************************!*\
  !*** ./src/assets/low_res_02.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("assets/low_res_02.jpg");

/***/ }),

/***/ "./src/assets/low_res_03.jpg":
/*!***********************************!*\
  !*** ./src/assets/low_res_03.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("assets/low_res_03.jpg");

/***/ }),

/***/ "./src/assets/online_payment.jpg":
/*!***************************************!*\
  !*** ./src/assets/online_payment.jpg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("assets/online_payment.jpg");

/***/ }),

/***/ "./src/assets/user-1.jpg":
/*!*******************************!*\
  !*** ./src/assets/user-1.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("assets/user-1.jpg");

/***/ }),

/***/ "./src/assets/user-2.jpg":
/*!*******************************!*\
  !*** ./src/assets/user-2.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("assets/user-2.jpg");

/***/ }),

/***/ "./src/assets/user-3.jpg":
/*!*******************************!*\
  !*** ./src/assets/user-3.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("assets/user-3.jpg");

/***/ }),

/***/ "./src/styles/features.scss":
/*!**********************************!*\
  !*** ./src/styles/features.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_features_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./features.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/features.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_features_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_features_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_features_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_features_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/footer.scss":
/*!********************************!*\
  !*** ./src/styles/footer.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./footer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/footer.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/header.scss":
/*!********************************!*\
  !*** ./src/styles/header.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./header.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/header.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/modal.scss":
/*!*******************************!*\
  !*** ./src/styles/modal.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modal_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./modal.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/modal.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modal_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modal_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modal_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modal_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/operations.scss":
/*!************************************!*\
  !*** ./src/styles/operations.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_operations_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./operations.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/operations.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_operations_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_operations_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_operations_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_operations_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/signup.scss":
/*!********************************!*\
  !*** ./src/styles/signup.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_signup_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./signup.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/signup.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_signup_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_signup_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_signup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_signup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/slider.scss":
/*!********************************!*\
  !*** ./src/styles/slider.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_slider_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./slider.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/slider.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_slider_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_slider_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_slider_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_slider_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_icons_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/icons.svg */ "./src/assets/icons.svg");
/* harmony import */ var _assets_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/icon.png */ "./src/assets/icon.png");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _assets_hero_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/hero.png */ "./src/assets/hero.png");
/* harmony import */ var _assets_online_payment_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/online_payment.jpg */ "./src/assets/online_payment.jpg");
/* harmony import */ var _assets_low_res_01_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/low_res_01.jpg */ "./src/assets/low_res_01.jpg");
/* harmony import */ var _assets_account_app_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/account_app.jpg */ "./src/assets/account_app.jpg");
/* harmony import */ var _assets_low_res_02_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/low_res_02.jpg */ "./src/assets/low_res_02.jpg");
/* harmony import */ var _assets_contactless_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/contactless.jpg */ "./src/assets/contactless.jpg");
/* harmony import */ var _assets_low_res_03_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/low_res_03.jpg */ "./src/assets/low_res_03.jpg");
/* harmony import */ var _assets_user_1_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/user-1.jpg */ "./src/assets/user-1.jpg");
/* harmony import */ var _assets_user_2_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/user-2.jpg */ "./src/assets/user-2.jpg");
/* harmony import */ var _assets_user_3_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/user-3.jpg */ "./src/assets/user-3.jpg");
/* harmony import */ var _assets_icon_white_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/icon_white.png */ "./src/assets/icon_white.png");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./styles/header.scss */ "./src/styles/header.scss");
/* harmony import */ var _styles_features_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./styles/features.scss */ "./src/styles/features.scss");
/* harmony import */ var _styles_operations_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./styles/operations.scss */ "./src/styles/operations.scss");
/* harmony import */ var _styles_slider_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./styles/slider.scss */ "./src/styles/slider.scss");
/* harmony import */ var _styles_signup_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./styles/signup.scss */ "./src/styles/signup.scss");
/* harmony import */ var _styles_footer_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./styles/footer.scss */ "./src/styles/footer.scss");
/* harmony import */ var _styles_modal_scss__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./styles/modal.scss */ "./src/styles/modal.scss");


//Files
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















//Styles








var modal = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');
var btnCloseModal = document.querySelector('.btn--close-modal');
var btnsOpenModal = document.querySelectorAll('.btn--show-modal');
var btnScrollTo = document.querySelector('.btn-scroll-to');
var firstSection = document.querySelector('#section--1');
var tabsContainer = document.querySelector('.operations__tab-container');
var tabs = document.querySelectorAll('.operations__tab');
var tabsContent = document.querySelectorAll('.operations__content');
var nav = document.querySelector('.nav');
var section1 = document.getElementById('section--1');
var openModal = function openModal(e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
var closeModal = function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(function (btn) {
  return btn.addEventListener('click', openModal);
});
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
btnScrollTo.addEventListener('click', function () {
  // const s1coords = firstSection.getBoundingClientRect();
  // window.scrollTo({
  //     left: s1coords.left + window.pageXOffset,
  //     top: s1coords.top + window.pageYOffset,
  //     behavior: 'smooth',
  // });

  firstSection.scrollIntoView({
    behavior: 'smooth'
  });
});

// document.querySelectorAll('.nav__link').forEach(function (el) {
//     el.addEventListener('click', function (e) {
//         e.preventDefault();
//         const id = this.getAttribute('href');
//         console.log(id);
//         document.querySelector(id).scrollIntoView({
//             behavior: 'smooth',
//         });
//     });
// });

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    var id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
  }
});

//Tabbed component

tabsContainer.addEventListener('click', function (e) {
  var clicked = e.target.closest('.operations__tab');
  if (!clicked) return;
  tabs.forEach(function (t) {
    return t.classList.remove('operations__tab--active');
  });
  clicked.classList.add('operations__tab--active');
  tabsContent.forEach(function (c) {
    return c.classList.remove('operations__content--active');
  });
  document.querySelector(".operations__content--".concat(clicked.dataset.tab)).classList.add('operations__content--active');
});

//Menu fade
var handleHover = function handleHover(e) {
  var _this = this;
  if (e.target.classList.contains('nav__link')) {
    var link = e.target;
    var siblings = link.closest('.nav').querySelectorAll('.nav__link');
    var logo = link.closest('.nav').querySelector('img');
    siblings.forEach(function (el) {
      if (el !== link) el.style.opacity = _this;
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//Sticky nav
// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function () {
//     console.log(window.scrollY);

//     if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//     else nav.classList.remove('sticky');
// });

var header = document.querySelector('.header');
var navHeight = nav.getBoundingClientRect().height;
var stickyNav = function stickyNav(entries) {
  var _entries = _slicedToArray(entries, 1),
    entry = _entries[0];
  if (!entry.isIntersecting) nav.classList.add('sticky');else nav.classList.remove('sticky');
};
var headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: "-".concat(navHeight, "px")
});
headerObserver.observe(header);

//Reveal sections
var allSections = document.querySelectorAll('.section');
var revealSection = function revealSection(entries, observer) {
  var _entries2 = _slicedToArray(entries, 1),
    entry = _entries2[0];
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
var sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//Lazy loading images
var imgTargets = document.querySelectorAll('img[data-src]');
var loadImg = function loadImg(entries, observer) {
  var _entries3 = _slicedToArray(entries, 1),
    entry = _entries3[0];
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};
var imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px'
});
imgTargets.forEach(function (img) {
  return imgObserver.observe(img);
});

//Slider
var slider = function slider() {
  var slides = document.querySelectorAll('.slide');
  var btnLeft = document.querySelector('.slider__btn--left');
  var btnRight = document.querySelector('.slider__btn--right');
  var dotContainer = document.querySelector('.dots');
  var curSlide = 0;
  var maxSlide = slides.length;
  var createDots = function createDots() {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML('beforeend', "<button class=\"dots__dot\" data-slide=\"".concat(i, "\"></button>"));
    });
  };
  var activateDot = function activateDot(slide) {
    document.querySelectorAll('.dots__dot').forEach(function (dot) {
      return dot.classList.remove('dots__dot--active');
    });
    document.querySelector(".dots__dot[data-slide=\"".concat(slide, "\"]")).classList.add('dots__dot--active');
  };
  var goToSlide = function goToSlide(slide) {
    slides.forEach(function (s, i) {
      return s.style.transform = "translateX(".concat(100 * (i - slide), "%)");
    });
  };
  var nextSlide = function nextSlide() {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };
  var prevSlide = function prevSlide() {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };
  var init = function init() {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
  document.addEventListener('keydown', function (e) {
    e.key === 'ArrowLeft' && prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      var slide = e.target.dataset.slide;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
})();

/******/ })()
;
//# sourceMappingURL=bundleb299677bdd561b1945f5.js.map