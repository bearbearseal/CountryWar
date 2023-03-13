/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./css/button.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/button.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".SwitchButton {\n    background-color: #606060;\n    height : 20px;\n    width : 20px;\n    position : absolute;\n    right : 0px;\n    top : 0px;\n    text-align : center; \n}\n\n.SwitchButton:hover {\n    cursor : pointer;\n    background-color: #909090;\n}", "",{"version":3,"sources":["webpack://./css/button.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,WAAW;IACX,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;AAC7B","sourcesContent":[".SwitchButton {\n    background-color: #606060;\n    height : 20px;\n    width : 20px;\n    position : absolute;\n    right : 0px;\n    top : 0px;\n    text-align : center; \n}\n\n.SwitchButton:hover {\n    cursor : pointer;\n    background-color: #909090;\n}"],"sourceRoot":""}]);
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

/***/ "./css/button.css":
/*!************************!*\
  !*** ./css/button.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./button.css */ "./node_modules/css-loader/dist/cjs.js!./css/button.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ }),

/***/ "./src/Country.ts":
/*!************************!*\
  !*** ./src/Country.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Country": () => (/* binding */ Country),
/* harmony export */   "countryHeight": () => (/* binding */ countryHeight),
/* harmony export */   "countryWidth": () => (/* binding */ countryWidth)
/* harmony export */ });
/* harmony import */ var _DomesticPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomesticPanel */ "./src/DomesticPanel.ts");
/* harmony import */ var _MilitaryPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MilitaryPanel */ "./src/MilitaryPanel.ts");
/* harmony import */ var _css_button_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/button.css */ "./css/button.css");
var countryWidth = 240;
var countryHeight = 180;



var ChangeButton = /** @class */ (function () {
    function ChangeButton() {
    }
    Object.defineProperty(ChangeButton.prototype, "positionStyle", {
        set: function (newValue) {
            this.element.style.position = newValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChangeButton.prototype, "left", {
        set: function (newValue) {
            this.element.style.left = newValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChangeButton.prototype, "top", {
        set: function (newValue) {
            this.element.style.top = newValue;
        },
        enumerable: false,
        configurable: true
    });
    return ChangeButton;
}());
var Country = /** @class */ (function () {
    function Country(id) {
        this.subPanels = [];
        this.element = document.createElement('div');
        this.element.style.position = 'absolute';
        this.element.style.width = countryWidth + 'px';
        this.element.style.height = countryHeight + 'px';
        this.element.innerHTML = '<B>' + id + '</B>';
        document.body.appendChild(this.element);
        var tempPanel = document.createElement('div');
        new _DomesticPanel__WEBPACK_IMPORTED_MODULE_0__.DomesticPanel(tempPanel);
        this.subPanels.push(tempPanel);
        this.element.append(tempPanel);
        tempPanel = document.createElement('div');
        new _MilitaryPanel__WEBPACK_IMPORTED_MODULE_1__.MilitaryPanel(tempPanel);
        this.subPanels.push(tempPanel);
        this.element.append(tempPanel);
        this.switch_subPanel(this.subPanels);
        var button = this.create_switch_button(this);
        this.element.append(button);
    }
    Country.prototype.create_switch_button = function (master) {
        var button = document.createElement('div');
        button.className += "SwitchButton";
        button.innerHTML = ">";
        button.addEventListener('click', function (ev) {
            master.switch_subPanel(master.subPanels);
        });
        return button;
    };
    Country.prototype.switch_subPanel = function (subPanels) {
        var activeIndex = subPanels.length;
        for (var i = 0; i < subPanels.length; ++i) {
            if (subPanels[i].style.display == 'block') {
                activeIndex = i;
            }
            subPanels[i].style.display = 'none';
        }
        if (activeIndex + 1 >= subPanels.length) {
            subPanels[0].style.display = 'block';
        }
        else {
            subPanels[activeIndex + 1].style.display = 'block';
        }
    };
    Country.prototype.set_color = function (color) {
        this.element.style.backgroundColor = color;
    };
    Country.prototype.set_location = function (x, y) {
        this.element.style.left = x.toString() + 'px';
        this.element.style.top = y.toString() + 'px';
    };
    Country.prototype.update_domestic = function () {
        this.element.innerHTML;
    };
    Object.defineProperty(Country.prototype, "innerHTML", {
        set: function (content) {
            this.element.innerHTML = content;
        },
        enumerable: false,
        configurable: true
    });
    return Country;
}());



/***/ }),

/***/ "./src/DomesticPanel.ts":
/*!******************************!*\
  !*** ./src/DomesticPanel.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DomesticPanel": () => (/* binding */ DomesticPanel)
/* harmony export */ });
var DomesticPanel = /** @class */ (function () {
    function DomesticPanel(master) {
        this.init_random_attributes();
        var table = document.createElement('table');
        master.append(table);
        var populationRow = table.insertRow();
        var popTag = populationRow.insertCell();
        popTag.innerHTML = 'Population';
        this.poplCell = populationRow.insertCell();
        this.poplCell.innerHTML = this.population + ' ';
        var agriRow = table.insertRow();
        var agriTag = agriRow.insertCell();
        agriTag.innerHTML = 'Agriculture';
        this.agriCell = agriRow.insertCell();
        this.agriCell.innerHTML = this.agriculture + ' ';
        var commRow = table.insertRow();
        var commTag = commRow.insertCell();
        commTag.innerHTML = 'Commerce';
        this.commCell = commRow.insertCell();
        this.commCell.innerHTML = this.commerce + ' ';
        var indRow = table.insertRow();
        var indTag = indRow.insertCell();
        indTag.innerHTML = 'Industry';
        this.indtCell = indRow.insertCell();
        this.indtCell.innerHTML = this.industry + ' ';
        var mineRow = table.insertRow();
        var mineTag = mineRow.insertCell();
        mineTag.innerHTML = 'Mine';
        this.mineCell = mineRow.insertCell();
        this.mineCell.innerHTML = this.mine + ' ';
        var secRow = table.insertRow();
        var secTag = secRow.insertCell();
        secTag.innerHTML = 'Security';
        this.secrCell = secRow.insertCell();
        this.secrCell.innerHTML = this.security + ' ';
    }
    DomesticPanel.prototype.init_random_attributes = function () {
        this.agriculture = Math.floor(Math.random() * 100) + 40;
        this.commerce = Math.floor(Math.random() * 100) + 40;
        this.industry = Math.floor(Math.random() * 100) + 40;
        this.mine = Math.floor(Math.random() * 100) + 40;
        this.population = Math.floor(Math.random() * 300) + 400;
        this.security = Math.ceil(Math.random() * 21) + 40;
    };
    DomesticPanel.prototype.increase_agriculture = function () {
        this.agriculture += (20 + Math.floor(Math.random() * 11));
        this.agriCell.innerHTML = this.agriculture + ' ';
    };
    DomesticPanel.prototype.increase_commerce = function () {
        this.commerce += (20 + Math.floor(Math.random() * 11));
        this.commCell.innerHTML = this.commerce + ' ';
    };
    DomesticPanel.prototype.increase_industry = function () {
        this.industry += (20 + Math.floor(Math.random() * 11));
        this.indtCell.innerHTML = this.industry + ' ';
    };
    DomesticPanel.prototype.increase_mine = function () {
        this.mine += (20 + Math.floor(Math.random() * 11));
        this.mineCell.innerHTML = this.mine + ' ';
    };
    DomesticPanel.prototype.tick_population = function () {
        this.population += Math.ceil(this.population / 50 * this.security / 100);
        var economy = this.agriculture + this.commerce + this.industry + this.mine;
        if (economy > this.population) {
            this.population += (economy - this.population) / 10 * this.security / 100;
        }
        this.poplCell.innerHTML = this.population + ' ';
    };
    DomesticPanel.prototype.tick_economy = function () {
        var economy = this.agriculture + this.commerce + this.industry + this.mine;
        if (economy < this.population) {
            this.agriculture += Math.floor(Math.random() * 1.5);
            this.commerce += Math.floor(Math.random() * 1.5);
            this.industry += Math.floor(Math.random() * 1.5);
            this.mine += Math.floor(Math.random() * 1.5);
            this.agriCell.innerHTML = this.agriculture + ' ';
            this.commCell.innerHTML = this.commerce + ' ';
            this.indtCell.innerHTML = this.industry + ' ';
            this.mineCell.innerHTML = this.mine + ' ';
        }
    };
    DomesticPanel.prototype.tick_security = function (foodSurplus, materialSurplus) {
        var lower = foodSurplus < materialSurplus ? foodSurplus : materialSurplus;
        this.security += Math.floor(Math.random() * lower * 1.1);
    };
    DomesticPanel.prototype.tick_income = function () {
        var income = this.population;
        if (this.population * 2 >= this.commerce) {
            income += this.commerce;
        }
        else {
            var effectivePopulation = Math.floor(this.population);
            income += effectivePopulation;
            income += (this.commerce - effectivePopulation) / 2;
        }
        return income;
    };
    DomesticPanel.prototype.tick_food = function () {
        return this.agriculture - Math.ceil(this.population / 5);
    };
    DomesticPanel.prototype.tick_material = function () {
        return this.industry - Math.ceil(this.population / 5);
    };
    DomesticPanel.prototype.tick_mine = function () {
        return this.mine;
    };
    return DomesticPanel;
}());



/***/ }),

/***/ "./src/MilitaryPanel.ts":
/*!******************************!*\
  !*** ./src/MilitaryPanel.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MilitaryPanel": () => (/* binding */ MilitaryPanel)
/* harmony export */ });
var MilitaryPanel = /** @class */ (function () {
    function MilitaryPanel(master) {
        this.gunSoldier = 0;
        this.rocketSoldier = 0;
        this.mortarSoldier = 0;
        this.helicopter = 0;
        this.apc = 0;
        this.tank = 0;
        this.heavyTank = 0;
        this.bunker = 0;
        this.machineGun = 0;
        this.heavyGun = 0;
        this.antiAir = 0;
        this.panel = document.createElement('div');
        master.append(this.panel);
        var table = document.createElement('table');
        this.panel.append(table);
        var gunSoldierRow = table.insertRow();
        var rocketSoldierRow = table.insertRow();
        var mortarSoldierRow = table.insertRow();
        var helicopterRow = table.insertRow();
        var apcRow = table.insertRow();
        var tankRow = table.insertRow();
        var heavyTankRow = table.insertRow();
        var bunkerRow = table.insertRow();
        var machineGunRow = table.insertRow();
        var heavyGunRow = table.insertRow();
        var antiAirRow = table.insertRow();
        var gunSoldierTag = gunSoldierRow.insertCell();
        var rocketSoldierTag = rocketSoldierRow.insertCell();
        var mortarSoldierTag = mortarSoldierRow.insertCell();
        var helicopterTag = helicopterRow.insertCell();
        var apcTag = apcRow.insertCell();
        var tankTag = tankRow.insertCell();
        var heavyTankTag = heavyTankRow.insertCell();
        var bunkerTag = bunkerRow.insertCell();
        var machineGunTag = machineGunRow.insertCell();
        var heavyGunTag = heavyGunRow.insertCell();
        var antiAirTag = antiAirRow.insertCell();
        gunSoldierTag.innerHTML = 'Gun Soldier';
        rocketSoldierTag.innerHTML = 'Rocket Soldier';
        mortarSoldierTag.innerHTML = 'Mortar Soldier';
        helicopterTag.innerHTML = 'Helicopter';
        apcTag.innerHTML = 'APC';
        tankTag.innerHTML = 'Tank';
        heavyTankTag.innerHTML = 'Heavy Tank';
        bunkerTag.innerHTML = 'Bunker';
        machineGunTag.innerHTML = 'Machine Gun';
        heavyGunTag.innerHTML = 'Heavy Gun';
        antiAirTag.innerHTML = 'Anti-Air Gun';
        this.gunSoldierCell = gunSoldierRow.insertCell();
        this.rocketSoldierCell = rocketSoldierRow.insertCell();
        this.mortarSoldierCell = mortarSoldierRow.insertCell();
        this.helicopterCell = helicopterRow.insertCell();
        this.apcCell = apcRow.insertCell();
        this.tankCell = tankRow.insertCell();
        this.heavyTankCell = heavyTankRow.insertCell();
        this.bunkerCell = bunkerRow.insertCell();
        this.machineGunCell = machineGunRow.insertCell();
        this.heavyGunCell = heavyGunRow.insertCell();
        this.antiAirCell = antiAirRow.insertCell();
        this.gunSoldierCell.innerHTML = String(this.gunSoldier);
        this.rocketSoldierCell.innerHTML = String(this.rocketSoldier);
        this.mortarSoldierCell.innerHTML = String(this.mortarSoldier);
        this.helicopterCell.innerHTML = String(this.helicopter);
        this.apcCell.innerHTML = String(this.apc);
        this.tankCell.innerHTML = String(this.tank);
        this.heavyTankCell.innerHTML = String(this.heavyTank);
        this.bunkerCell.innerHTML = String(this.bunker);
        this.machineGunCell.innerHTML = String(this.machineGun);
        this.heavyGunCell.innerHTML = String(this.heavyGun);
        this.antiAirCell.innerHTML = String(this.antiAir);
    }
    MilitaryPanel.prototype.add_gunSolder = function (addition) {
        this.gunSoldier += addition;
        this.gunSoldierCell.innerHTML = String(this.gunSoldier);
    };
    MilitaryPanel.prototype.add_rocketSolder = function (addition) {
        this.rocketSoldier += addition;
        this.rocketSoldierCell.innerHTML = String(this.rocketSoldier);
    };
    MilitaryPanel.prototype.add_mortarSolder = function (addition) {
        this.mortarSoldier += addition;
        this.mortarSoldierCell.innerHTML = String(this.mortarSoldier);
    };
    MilitaryPanel.prototype.add_helicopter = function (addition) {
        this.helicopter += addition;
        this.helicopterCell.innerHTML = String(this.helicopter);
    };
    MilitaryPanel.prototype.add_apc = function (addition) {
        this.apc += addition;
        this.apcCell.innerHTML = String(this.apc);
    };
    MilitaryPanel.prototype.add_tank = function (addition) {
        this.tank += addition;
        this.tankCell.innerHTML = String(this.tank);
    };
    MilitaryPanel.prototype.add_heavyTank = function (addition) {
        this.heavyTank += addition;
        this.heavyTankCell.innerHTML = String(this.heavyTank);
    };
    MilitaryPanel.prototype.add_bunker = function (addition) {
        this.bunker += addition;
        this.bunkerCell.innerHTML = String(this.bunker);
    };
    MilitaryPanel.prototype.add_machineGun = function (addition) {
        this.machineGun += addition;
        this.machineGunCell.innerHTML = String(this.machineGun);
    };
    MilitaryPanel.prototype.add_heavyGun = function (addition) {
        this.heavyGun += addition;
        this.heavyGunCell.innerHTML = String(this.heavyGun);
    };
    MilitaryPanel.prototype.add_antiAir = function (addition) {
        this.antiAir += addition;
        this.antiAirCell.innerHTML = String(this.antiAir);
    };
    return MilitaryPanel;
}());



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
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Country__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Country */ "./src/Country.ts");



var countryList;
for (var i = 0; i < 30; ++i) {
    var aCountry = new _Country__WEBPACK_IMPORTED_MODULE_0__.Country('Province' + i);
    aCountry.set_color('grey');
    aCountry.set_location(20 + (i % 6) * (40 + _Country__WEBPACK_IMPORTED_MODULE_0__.countryWidth), 20 + Math.floor(i / 6) * (40 + _Country__WEBPACK_IMPORTED_MODULE_0__.countryHeight));
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxFQUFFLEdBQUMsbURBQWEsQ0FBQyxDQUFDLENBQUM7Q0FDaEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJzZXJ2ZXIvLi9jc3MvYnV0dG9uLmNzcyIsIndlYnBhY2s6Ly93ZWJzZXJ2ZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnNlcnZlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnNlcnZlci8uL2Nzcy9idXR0b24uY3NzPzUzODIiLCJ3ZWJwYWNrOi8vd2Vic2VydmVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnNlcnZlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2Vic2VydmVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnNlcnZlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJzZXJ2ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJzZXJ2ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJzZXJ2ZXIvLi9zcmMvQ291bnRyeS50cyIsIndlYnBhY2s6Ly93ZWJzZXJ2ZXIvLi9zcmMvRG9tZXN0aWNQYW5lbC50cyIsIndlYnBhY2s6Ly93ZWJzZXJ2ZXIvLi9zcmMvTWlsaXRhcnlQYW5lbC50cyIsIndlYnBhY2s6Ly93ZWJzZXJ2ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2Vic2VydmVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnNlcnZlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2Vic2VydmVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2Vic2VydmVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2Vic2VydmVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJzZXJ2ZXIvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuU3dpdGNoQnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwNjA2MDtcXG4gICAgaGVpZ2h0IDogMjBweDtcXG4gICAgd2lkdGggOiAyMHB4O1xcbiAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xcbiAgICByaWdodCA6IDBweDtcXG4gICAgdG9wIDogMHB4O1xcbiAgICB0ZXh0LWFsaWduIDogY2VudGVyOyBcXG59XFxuXFxuLlN3aXRjaEJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvciA6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MDkwOTA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2Nzcy9idXR0b24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuU3dpdGNoQnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwNjA2MDtcXG4gICAgaGVpZ2h0IDogMjBweDtcXG4gICAgd2lkdGggOiAyMHB4O1xcbiAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xcbiAgICByaWdodCA6IDBweDtcXG4gICAgdG9wIDogMHB4O1xcbiAgICB0ZXh0LWFsaWduIDogY2VudGVyOyBcXG59XFxuXFxuLlN3aXRjaEJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvciA6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MDkwOTA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J1dHRvbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J1dHRvbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IGNvdW50cnlXaWR0aDogbnVtYmVyID0gMjQwO1xuZXhwb3J0IGNvbnN0IGNvdW50cnlIZWlnaHQ6IG51bWJlciA9IDE4MDtcblxuaW1wb3J0IHsgRG9tZXN0aWNQYW5lbCB9IGZyb20gXCIuL0RvbWVzdGljUGFuZWxcIlxuaW1wb3J0IHsgTWlsaXRhcnlQYW5lbCB9IGZyb20gXCIuL01pbGl0YXJ5UGFuZWxcIjtcbmltcG9ydCBcIi4uL2Nzcy9idXR0b24uY3NzXCJcblxuY2xhc3MgQ2hhbmdlQnV0dG9uIHtcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50O1xuXG4gICAgc2V0IHBvc2l0aW9uU3R5bGUobmV3VmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSBuZXdWYWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgbGVmdChuZXdWYWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5sZWZ0ID0gbmV3VmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IHRvcChuZXdWYWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50b3AgPSBuZXdWYWx1ZTtcbiAgICB9XG5cblxufVxuXG5leHBvcnQgY2xhc3MgQ291bnRyeSB7XG4gICAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIHN1YlBhbmVsczogQXJyYXk8SFRNTERpdkVsZW1lbnQ+ID0gW107XG4gICAgcHJpdmF0ZSBzd2l0Y2hCdXR0b246IEhUTUxEaXZFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoaWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLndpZHRoID0gY291bnRyeVdpZHRoICsgJ3B4JztcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmhlaWdodCA9IGNvdW50cnlIZWlnaHQgKyAncHgnO1xuICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gJzxCPicgKyBpZCArICc8L0I+JztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuXG4gICAgICAgIGxldCB0ZW1wUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3IERvbWVzdGljUGFuZWwodGVtcFBhbmVsKTtcbiAgICAgICAgdGhpcy5zdWJQYW5lbHMucHVzaCh0ZW1wUGFuZWwpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKHRlbXBQYW5lbCk7XG5cbiAgICAgICAgdGVtcFBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ldyBNaWxpdGFyeVBhbmVsKHRlbXBQYW5lbCk7XG4gICAgICAgIHRoaXMuc3ViUGFuZWxzLnB1c2godGVtcFBhbmVsKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZCh0ZW1wUGFuZWwpO1xuXG4gICAgICAgIHRoaXMuc3dpdGNoX3N1YlBhbmVsKHRoaXMuc3ViUGFuZWxzKTtcblxuICAgICAgICBsZXQgYnV0dG9uID0gdGhpcy5jcmVhdGVfc3dpdGNoX2J1dHRvbih0aGlzKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZChidXR0b24pO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlX3N3aXRjaF9idXR0b24obWFzdGVyIDogQ291bnRyeSk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidXR0b24uY2xhc3NOYW1lICs9IFwiU3dpdGNoQnV0dG9uXCI7XG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIj5cIjtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXY6IE1vdXNlRXZlbnQpe1xuICAgICAgICAgICAgbWFzdGVyLnN3aXRjaF9zdWJQYW5lbChtYXN0ZXIuc3ViUGFuZWxzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3dpdGNoX3N1YlBhbmVsKHN1YlBhbmVscyA6IEFycmF5PEhUTUxEaXZFbGVtZW50Pik6IHZvaWQge1xuICAgICAgICBsZXQgYWN0aXZlSW5kZXggPSBzdWJQYW5lbHMubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBzdWJQYW5lbHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChzdWJQYW5lbHNbaV0uc3R5bGUuZGlzcGxheSA9PSAnYmxvY2snKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlSW5kZXggPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3ViUGFuZWxzW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGl2ZUluZGV4ICsgMSA+PSBzdWJQYW5lbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzdWJQYW5lbHNbMF0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdWJQYW5lbHNbYWN0aXZlSW5kZXggKyAxXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRfY29sb3IoY29sb3I6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgfVxuXG4gICAgcHVibGljIHNldF9sb2NhdGlvbih4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9IHgudG9TdHJpbmcoKSArICdweCc7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50b3AgPSB5LnRvU3RyaW5nKCkgKyAncHgnO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVfZG9tZXN0aWMoKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTDtcbiAgICB9XG5cbiAgICBzZXQgaW5uZXJIVE1MKGNvbnRlbnQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICB9XG5cbn1cblxuIiwiZXhwb3J0IGNsYXNzIERvbWVzdGljUGFuZWwge1xuICAgIHByaXZhdGUgYWdyaWN1bHR1cmUgOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBhZ3JpQ2VsbCA6IEhUTUxUYWJsZUNlbGxFbGVtZW50O1xuICAgIHByaXZhdGUgY29tbWVyY2UgOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBjb21tQ2VsbCA6IEhUTUxUYWJsZUNlbGxFbGVtZW50O1xuICAgIHByaXZhdGUgaW5kdXN0cnkgOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBpbmR0Q2VsbCA6IEhUTUxUYWJsZUNlbGxFbGVtZW50O1xuICAgIHByaXZhdGUgbWluZSA6IG51bWJlcjtcbiAgICBwcml2YXRlIG1pbmVDZWxsIDogSFRNTFRhYmxlQ2VsbEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBwb3B1bGF0aW9uOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBwb3BsQ2VsbCA6IEhUTUxUYWJsZUNlbGxFbGVtZW50O1xuICAgIHByaXZhdGUgc2VjdXJpdHkgOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBzZWNyQ2VsbCA6IEhUTUxUYWJsZUNlbGxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IobWFzdGVyIDogSFRNTERpdkVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5pbml0X3JhbmRvbV9hdHRyaWJ1dGVzKCk7XG4gICAgICAgIHZhciB0YWJsZSA6IEhUTUxUYWJsZUVsZW1lbnQgPSA8SFRNTFRhYmxlRWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICAgICAgICBtYXN0ZXIuYXBwZW5kKHRhYmxlKTtcblxuICAgICAgICB2YXIgcG9wdWxhdGlvblJvdyA9IHRhYmxlLmluc2VydFJvdygpO1xuICAgICAgICB2YXIgcG9wVGFnID0gcG9wdWxhdGlvblJvdy5pbnNlcnRDZWxsKCk7XG4gICAgICAgIHBvcFRhZy5pbm5lckhUTUwgPSAnUG9wdWxhdGlvbic7XG4gICAgICAgIHRoaXMucG9wbENlbGwgPSBwb3B1bGF0aW9uUm93Lmluc2VydENlbGwoKTtcbiAgICAgICAgdGhpcy5wb3BsQ2VsbC5pbm5lckhUTUwgPSB0aGlzLnBvcHVsYXRpb24gKyAnICc7XG5cbiAgICAgICAgdmFyIGFncmlSb3cgPSB0YWJsZS5pbnNlcnRSb3coKTtcbiAgICAgICAgdmFyIGFncmlUYWcgPSBhZ3JpUm93Lmluc2VydENlbGwoKTtcbiAgICAgICAgYWdyaVRhZy5pbm5lckhUTUwgPSAnQWdyaWN1bHR1cmUnO1xuICAgICAgICB0aGlzLmFncmlDZWxsID0gYWdyaVJvdy5pbnNlcnRDZWxsKCk7XG4gICAgICAgIHRoaXMuYWdyaUNlbGwuaW5uZXJIVE1MID0gdGhpcy5hZ3JpY3VsdHVyZSArICcgJztcblxuICAgICAgICB2YXIgY29tbVJvdyA9IHRhYmxlLmluc2VydFJvdygpO1xuICAgICAgICB2YXIgY29tbVRhZyA9IGNvbW1Sb3cuaW5zZXJ0Q2VsbCgpO1xuICAgICAgICBjb21tVGFnLmlubmVySFRNTCA9ICdDb21tZXJjZSc7XG4gICAgICAgIHRoaXMuY29tbUNlbGwgPSBjb21tUm93Lmluc2VydENlbGwoKTtcbiAgICAgICAgdGhpcy5jb21tQ2VsbC5pbm5lckhUTUwgPSB0aGlzLmNvbW1lcmNlICsgJyAnO1xuXG4gICAgICAgIHZhciBpbmRSb3cgPSB0YWJsZS5pbnNlcnRSb3coKTtcbiAgICAgICAgdmFyIGluZFRhZyA9IGluZFJvdy5pbnNlcnRDZWxsKCk7XG4gICAgICAgIGluZFRhZy5pbm5lckhUTUwgPSAnSW5kdXN0cnknO1xuICAgICAgICB0aGlzLmluZHRDZWxsID0gaW5kUm93Lmluc2VydENlbGwoKTtcbiAgICAgICAgdGhpcy5pbmR0Q2VsbC5pbm5lckhUTUwgPSB0aGlzLmluZHVzdHJ5ICsgJyAnO1xuXG4gICAgICAgIHZhciBtaW5lUm93ID0gdGFibGUuaW5zZXJ0Um93KCk7XG4gICAgICAgIHZhciBtaW5lVGFnID0gbWluZVJvdy5pbnNlcnRDZWxsKCk7XG4gICAgICAgIG1pbmVUYWcuaW5uZXJIVE1MID0gJ01pbmUnO1xuICAgICAgICB0aGlzLm1pbmVDZWxsID0gbWluZVJvdy5pbnNlcnRDZWxsKCk7XG4gICAgICAgIHRoaXMubWluZUNlbGwuaW5uZXJIVE1MID0gdGhpcy5taW5lICsgJyAnO1xuXG4gICAgICAgIHZhciBzZWNSb3cgPSB0YWJsZS5pbnNlcnRSb3coKTtcbiAgICAgICAgdmFyIHNlY1RhZyA9IHNlY1Jvdy5pbnNlcnRDZWxsKCk7XG4gICAgICAgIHNlY1RhZy5pbm5lckhUTUwgPSAnU2VjdXJpdHknO1xuICAgICAgICB0aGlzLnNlY3JDZWxsID0gc2VjUm93Lmluc2VydENlbGwoKTtcbiAgICAgICAgdGhpcy5zZWNyQ2VsbC5pbm5lckhUTUwgPSB0aGlzLnNlY3VyaXR5ICsgJyAnO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdF9yYW5kb21fYXR0cmlidXRlcygpIDogdm9pZCB7XG4gICAgICAgIHRoaXMuYWdyaWN1bHR1cmUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTAwKSArIDQwO1xuICAgICAgICB0aGlzLmNvbW1lcmNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwMCkgKyA0MDtcbiAgICAgICAgdGhpcy5pbmR1c3RyeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMDApICsgNDA7XG4gICAgICAgIHRoaXMubWluZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMDApICsgNDA7XG4gICAgICAgIHRoaXMucG9wdWxhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSozMDApICsgNDAwO1xuICAgICAgICB0aGlzLnNlY3VyaXR5ID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqMjEpICsgNDA7XG4gICAgfVxuXG4gICAgcHVibGljIGluY3JlYXNlX2FncmljdWx0dXJlKCkgOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZ3JpY3VsdHVyZSArPSAoMjAgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTEpKTtcbiAgICAgICAgdGhpcy5hZ3JpQ2VsbC5pbm5lckhUTUwgPSB0aGlzLmFncmljdWx0dXJlICsgJyAnO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbmNyZWFzZV9jb21tZXJjZSgpIDogdm9pZCB7XG4gICAgICAgIHRoaXMuY29tbWVyY2UgKz0gKDIwICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjExKSk7XG4gICAgICAgIHRoaXMuY29tbUNlbGwuaW5uZXJIVE1MID0gdGhpcy5jb21tZXJjZSArICcgJztcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5jcmVhc2VfaW5kdXN0cnkoKSA6IHZvaWQge1xuICAgICAgICB0aGlzLmluZHVzdHJ5ICs9ICgyMCArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMSkpO1xuICAgICAgICB0aGlzLmluZHRDZWxsLmlubmVySFRNTCA9IHRoaXMuaW5kdXN0cnkgKyAnICc7XG4gICAgfVxuXG4gICAgcHVibGljIGluY3JlYXNlX21pbmUoKSA6IHZvaWQge1xuICAgICAgICB0aGlzLm1pbmUgKz0gKDIwICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjExKSk7XG4gICAgICAgIHRoaXMubWluZUNlbGwuaW5uZXJIVE1MID0gdGhpcy5taW5lICsgJyAnO1xuICAgIH1cblxuICAgIHB1YmxpYyB0aWNrX3BvcHVsYXRpb24oKSA6IHZvaWQge1xuICAgICAgICB0aGlzLnBvcHVsYXRpb24gKz0gTWF0aC5jZWlsKHRoaXMucG9wdWxhdGlvbi81MCp0aGlzLnNlY3VyaXR5LzEwMCk7XG4gICAgICAgIGxldCBlY29ub215ID0gdGhpcy5hZ3JpY3VsdHVyZSArIHRoaXMuY29tbWVyY2UgKyB0aGlzLmluZHVzdHJ5ICsgdGhpcy5taW5lO1xuICAgICAgICBpZihlY29ub215ID4gdGhpcy5wb3B1bGF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRpb24gKz0gKGVjb25vbXkgLSB0aGlzLnBvcHVsYXRpb24pLzEwKnRoaXMuc2VjdXJpdHkvMTAwXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb3BsQ2VsbC5pbm5lckhUTUwgPSB0aGlzLnBvcHVsYXRpb24gKyAnICc7XG4gICAgfVxuXG4gICAgcHVibGljIHRpY2tfZWNvbm9teSgpIDogdm9pZCB7XG4gICAgICAgIGxldCBlY29ub215ID0gdGhpcy5hZ3JpY3VsdHVyZSArIHRoaXMuY29tbWVyY2UgKyB0aGlzLmluZHVzdHJ5ICsgdGhpcy5taW5lO1xuICAgICAgICBpZihlY29ub215IDwgdGhpcy5wb3B1bGF0aW9uKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmFncmljdWx0dXJlICs9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxLjUpO1xuICAgICAgICAgICAgdGhpcy5jb21tZXJjZSArPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMS41KTtcbiAgICAgICAgICAgIHRoaXMuaW5kdXN0cnkgKz0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEuNSk7XG4gICAgICAgICAgICB0aGlzLm1pbmUgKz0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEuNSk7XG4gICAgICAgICAgICB0aGlzLmFncmlDZWxsLmlubmVySFRNTCA9IHRoaXMuYWdyaWN1bHR1cmUgKyAnICc7XG4gICAgICAgICAgICB0aGlzLmNvbW1DZWxsLmlubmVySFRNTCA9IHRoaXMuY29tbWVyY2UgKyAnICc7XG4gICAgICAgICAgICB0aGlzLmluZHRDZWxsLmlubmVySFRNTCA9IHRoaXMuaW5kdXN0cnkgKyAnICc7XG4gICAgICAgICAgICB0aGlzLm1pbmVDZWxsLmlubmVySFRNTCA9IHRoaXMubWluZSArICcgJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0aWNrX3NlY3VyaXR5KGZvb2RTdXJwbHVzIDogbnVtYmVyLCBtYXRlcmlhbFN1cnBsdXMgOiBudW1iZXIpIDogdm9pZCB7XG4gICAgICAgIGxldCBsb3dlciA9IGZvb2RTdXJwbHVzIDwgbWF0ZXJpYWxTdXJwbHVzID8gZm9vZFN1cnBsdXMgOiBtYXRlcmlhbFN1cnBsdXM7XG4gICAgICAgIHRoaXMuc2VjdXJpdHkgKz0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmxvd2VyKjEuMSk7XG4gICAgfVxuXG4gICAgcHVibGljIHRpY2tfaW5jb21lKCkgOiBudW1iZXIge1xuICAgICAgICBsZXQgaW5jb21lID0gdGhpcy5wb3B1bGF0aW9uO1xuICAgICAgICBpZih0aGlzLnBvcHVsYXRpb24qMiA+PSB0aGlzLmNvbW1lcmNlKSB7XG4gICAgICAgICAgICBpbmNvbWUgKz0gdGhpcy5jb21tZXJjZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBlZmZlY3RpdmVQb3B1bGF0aW9uID0gTWF0aC5mbG9vcih0aGlzLnBvcHVsYXRpb24pXG4gICAgICAgICAgICBpbmNvbWUgKz0gZWZmZWN0aXZlUG9wdWxhdGlvbjtcbiAgICAgICAgICAgIGluY29tZSArPSAodGhpcy5jb21tZXJjZSAtIGVmZmVjdGl2ZVBvcHVsYXRpb24pLzI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluY29tZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdGlja19mb29kKCkgOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5hZ3JpY3VsdHVyZSAtIE1hdGguY2VpbCh0aGlzLnBvcHVsYXRpb24vNSk7XG4gICAgfVxuXG4gICAgcHVibGljIHRpY2tfbWF0ZXJpYWwoKSA6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmluZHVzdHJ5IC0gTWF0aC5jZWlsKHRoaXMucG9wdWxhdGlvbi81KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdGlja19taW5lKCkgOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5taW5lO1xuICAgIH1cbn1cblxuIiwiZXhwb3J0IGNsYXNzIE1pbGl0YXJ5UGFuZWwge1xuICAgIHByaXZhdGUgcGFuZWw6IEhUTUxEaXZFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBndW5Tb2xkaWVyOiBudW1iZXI9MDtcbiAgICBwcml2YXRlIHJvY2tldFNvbGRpZXI6IG51bWJlcj0wO1xuICAgIHByaXZhdGUgbW9ydGFyU29sZGllcjogbnVtYmVyPTA7XG4gICAgcHJpdmF0ZSBoZWxpY29wdGVyOiBudW1iZXI9MDtcbiAgICBwcml2YXRlIGFwYzogbnVtYmVyPTA7XG4gICAgcHJpdmF0ZSB0YW5rOiBudW1iZXI9MDtcbiAgICBwcml2YXRlIGhlYXZ5VGFuazogbnVtYmVyPTA7XG5cbiAgICBwcml2YXRlIGd1blNvbGRpZXJDZWxsOiBIVE1MVGFibGVDZWxsRWxlbWVudDtcbiAgICBwcml2YXRlIHJvY2tldFNvbGRpZXJDZWxsOiBIVE1MVGFibGVDZWxsRWxlbWVudDtcbiAgICBwcml2YXRlIG1vcnRhclNvbGRpZXJDZWxsOiBIVE1MVGFibGVDZWxsRWxlbWVudDtcbiAgICBwcml2YXRlIGhlbGljb3B0ZXJDZWxsOiBIVE1MVGFibGVDZWxsRWxlbWVudDtcbiAgICBwcml2YXRlIGFwY0NlbGw6IEhUTUxUYWJsZUNlbGxFbGVtZW50O1xuICAgIHByaXZhdGUgdGFua0NlbGw6IEhUTUxUYWJsZUNlbGxFbGVtZW50O1xuICAgIHByaXZhdGUgaGVhdnlUYW5rQ2VsbDogSFRNTFRhYmxlQ2VsbEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIGJ1bmtlcjogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIG1hY2hpbmVHdW46IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBoZWF2eUd1bjogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGFudGlBaXI6IG51bWJlciA9IDA7XG5cbiAgICBwcml2YXRlIGJ1bmtlckNlbGw6IEhUTUxUYWJsZUNlbGxFbGVtZW50O1xuICAgIHByaXZhdGUgbWFjaGluZUd1bkNlbGw6IEhUTUxUYWJsZUNlbGxFbGVtZW50O1xuICAgIHByaXZhdGUgaGVhdnlHdW5DZWxsOiBIVE1MVGFibGVDZWxsRWxlbWVudDtcbiAgICBwcml2YXRlIGFudGlBaXJDZWxsOiBIVE1MVGFibGVDZWxsRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKG1hc3RlcjogSFRNTERpdkVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5wYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtYXN0ZXIuYXBwZW5kKHRoaXMucGFuZWwpO1xuICAgICAgICB2YXIgdGFibGU6IEhUTUxUYWJsZUVsZW1lbnQgPSA8SFRNTFRhYmxlRWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICAgICAgICB0aGlzLnBhbmVsLmFwcGVuZCh0YWJsZSk7XG5cbiAgICAgICAgdmFyIGd1blNvbGRpZXJSb3cgPSB0YWJsZS5pbnNlcnRSb3coKTtcbiAgICAgICAgdmFyIHJvY2tldFNvbGRpZXJSb3cgPSB0YWJsZS5pbnNlcnRSb3coKTtcbiAgICAgICAgdmFyIG1vcnRhclNvbGRpZXJSb3cgPSB0YWJsZS5pbnNlcnRSb3coKTtcbiAgICAgICAgdmFyIGhlbGljb3B0ZXJSb3cgPSB0YWJsZS5pbnNlcnRSb3coKTtcbiAgICAgICAgdmFyIGFwY1JvdyA9IHRhYmxlLmluc2VydFJvdygpO1xuICAgICAgICB2YXIgdGFua1JvdyA9IHRhYmxlLmluc2VydFJvdygpO1xuICAgICAgICB2YXIgaGVhdnlUYW5rUm93ID0gdGFibGUuaW5zZXJ0Um93KCk7XG4gICAgICAgIHZhciBidW5rZXJSb3cgPSB0YWJsZS5pbnNlcnRSb3coKTtcbiAgICAgICAgdmFyIG1hY2hpbmVHdW5Sb3cgPSB0YWJsZS5pbnNlcnRSb3coKTtcbiAgICAgICAgdmFyIGhlYXZ5R3VuUm93ID0gdGFibGUuaW5zZXJ0Um93KCk7XG4gICAgICAgIHZhciBhbnRpQWlyUm93ID0gdGFibGUuaW5zZXJ0Um93KCk7XG5cbiAgICAgICAgdmFyIGd1blNvbGRpZXJUYWcgPSBndW5Tb2xkaWVyUm93Lmluc2VydENlbGwoKTtcbiAgICAgICAgdmFyIHJvY2tldFNvbGRpZXJUYWcgPSByb2NrZXRTb2xkaWVyUm93Lmluc2VydENlbGwoKTtcbiAgICAgICAgdmFyIG1vcnRhclNvbGRpZXJUYWcgPSBtb3J0YXJTb2xkaWVyUm93Lmluc2VydENlbGwoKTtcbiAgICAgICAgdmFyIGhlbGljb3B0ZXJUYWcgPSBoZWxpY29wdGVyUm93Lmluc2VydENlbGwoKTtcbiAgICAgICAgdmFyIGFwY1RhZyA9IGFwY1Jvdy5pbnNlcnRDZWxsKCk7XG4gICAgICAgIHZhciB0YW5rVGFnID0gdGFua1Jvdy5pbnNlcnRDZWxsKCk7XG4gICAgICAgIHZhciBoZWF2eVRhbmtUYWcgPSBoZWF2eVRhbmtSb3cuaW5zZXJ0Q2VsbCgpO1xuICAgICAgICB2YXIgYnVua2VyVGFnID0gYnVua2VyUm93Lmluc2VydENlbGwoKTtcbiAgICAgICAgdmFyIG1hY2hpbmVHdW5UYWcgPSBtYWNoaW5lR3VuUm93Lmluc2VydENlbGwoKTtcbiAgICAgICAgdmFyIGhlYXZ5R3VuVGFnID0gaGVhdnlHdW5Sb3cuaW5zZXJ0Q2VsbCgpO1xuICAgICAgICB2YXIgYW50aUFpclRhZyA9IGFudGlBaXJSb3cuaW5zZXJ0Q2VsbCgpO1xuXG4gICAgICAgIGd1blNvbGRpZXJUYWcuaW5uZXJIVE1MID0gJ0d1biBTb2xkaWVyJztcbiAgICAgICAgcm9ja2V0U29sZGllclRhZy5pbm5lckhUTUwgPSAnUm9ja2V0IFNvbGRpZXInO1xuICAgICAgICBtb3J0YXJTb2xkaWVyVGFnLmlubmVySFRNTCA9ICdNb3J0YXIgU29sZGllcic7XG4gICAgICAgIGhlbGljb3B0ZXJUYWcuaW5uZXJIVE1MID0gJ0hlbGljb3B0ZXInO1xuICAgICAgICBhcGNUYWcuaW5uZXJIVE1MID0gJ0FQQyc7XG4gICAgICAgIHRhbmtUYWcuaW5uZXJIVE1MID0gJ1RhbmsnO1xuICAgICAgICBoZWF2eVRhbmtUYWcuaW5uZXJIVE1MID0gJ0hlYXZ5IFRhbmsnO1xuICAgICAgICBidW5rZXJUYWcuaW5uZXJIVE1MID0gJ0J1bmtlcic7XG4gICAgICAgIG1hY2hpbmVHdW5UYWcuaW5uZXJIVE1MID0gJ01hY2hpbmUgR3VuJztcbiAgICAgICAgaGVhdnlHdW5UYWcuaW5uZXJIVE1MID0gJ0hlYXZ5IEd1bic7XG4gICAgICAgIGFudGlBaXJUYWcuaW5uZXJIVE1MID0gJ0FudGktQWlyIEd1bic7XG5cbiAgICAgICAgdGhpcy5ndW5Tb2xkaWVyQ2VsbCA9IGd1blNvbGRpZXJSb3cuaW5zZXJ0Q2VsbCgpO1xuICAgICAgICB0aGlzLnJvY2tldFNvbGRpZXJDZWxsID0gcm9ja2V0U29sZGllclJvdy5pbnNlcnRDZWxsKCk7XG4gICAgICAgIHRoaXMubW9ydGFyU29sZGllckNlbGwgPSBtb3J0YXJTb2xkaWVyUm93Lmluc2VydENlbGwoKTtcbiAgICAgICAgdGhpcy5oZWxpY29wdGVyQ2VsbCA9IGhlbGljb3B0ZXJSb3cuaW5zZXJ0Q2VsbCgpO1xuICAgICAgICB0aGlzLmFwY0NlbGwgPSBhcGNSb3cuaW5zZXJ0Q2VsbCgpO1xuICAgICAgICB0aGlzLnRhbmtDZWxsID0gdGFua1Jvdy5pbnNlcnRDZWxsKCk7XG4gICAgICAgIHRoaXMuaGVhdnlUYW5rQ2VsbCA9IGhlYXZ5VGFua1Jvdy5pbnNlcnRDZWxsKCk7XG4gICAgICAgIHRoaXMuYnVua2VyQ2VsbCA9IGJ1bmtlclJvdy5pbnNlcnRDZWxsKCk7XG4gICAgICAgIHRoaXMubWFjaGluZUd1bkNlbGwgPSBtYWNoaW5lR3VuUm93Lmluc2VydENlbGwoKTtcbiAgICAgICAgdGhpcy5oZWF2eUd1bkNlbGwgPSBoZWF2eUd1blJvdy5pbnNlcnRDZWxsKCk7XG4gICAgICAgIHRoaXMuYW50aUFpckNlbGwgPSBhbnRpQWlyUm93Lmluc2VydENlbGwoKTtcblxuICAgICAgICB0aGlzLmd1blNvbGRpZXJDZWxsLmlubmVySFRNTCA9IFN0cmluZyh0aGlzLmd1blNvbGRpZXIpO1xuICAgICAgICB0aGlzLnJvY2tldFNvbGRpZXJDZWxsLmlubmVySFRNTCA9IFN0cmluZyh0aGlzLnJvY2tldFNvbGRpZXIpO1xuICAgICAgICB0aGlzLm1vcnRhclNvbGRpZXJDZWxsLmlubmVySFRNTCA9IFN0cmluZyh0aGlzLm1vcnRhclNvbGRpZXIpO1xuICAgICAgICB0aGlzLmhlbGljb3B0ZXJDZWxsLmlubmVySFRNTCA9IFN0cmluZyh0aGlzLmhlbGljb3B0ZXIpO1xuICAgICAgICB0aGlzLmFwY0NlbGwuaW5uZXJIVE1MID0gU3RyaW5nKHRoaXMuYXBjKTtcbiAgICAgICAgdGhpcy50YW5rQ2VsbC5pbm5lckhUTUwgPSBTdHJpbmcodGhpcy50YW5rKTtcbiAgICAgICAgdGhpcy5oZWF2eVRhbmtDZWxsLmlubmVySFRNTCA9IFN0cmluZyh0aGlzLmhlYXZ5VGFuayk7XG4gICAgICAgIHRoaXMuYnVua2VyQ2VsbC5pbm5lckhUTUwgPSBTdHJpbmcodGhpcy5idW5rZXIpO1xuICAgICAgICB0aGlzLm1hY2hpbmVHdW5DZWxsLmlubmVySFRNTCA9IFN0cmluZyh0aGlzLm1hY2hpbmVHdW4pO1xuICAgICAgICB0aGlzLmhlYXZ5R3VuQ2VsbC5pbm5lckhUTUwgPSBTdHJpbmcodGhpcy5oZWF2eUd1bik7XG4gICAgICAgIHRoaXMuYW50aUFpckNlbGwuaW5uZXJIVE1MID0gU3RyaW5nKHRoaXMuYW50aUFpcik7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZF9ndW5Tb2xkZXIoYWRkaXRpb246IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmd1blNvbGRpZXIgKz0gYWRkaXRpb247XG4gICAgICAgIHRoaXMuZ3VuU29sZGllckNlbGwuaW5uZXJIVE1MID0gU3RyaW5nKHRoaXMuZ3VuU29sZGllcik7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZF9yb2NrZXRTb2xkZXIoYWRkaXRpb246IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnJvY2tldFNvbGRpZXIgKz0gYWRkaXRpb247XG4gICAgICAgIHRoaXMucm9ja2V0U29sZGllckNlbGwuaW5uZXJIVE1MID0gU3RyaW5nKHRoaXMucm9ja2V0U29sZGllcik7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZF9tb3J0YXJTb2xkZXIoYWRkaXRpb246IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLm1vcnRhclNvbGRpZXIgKz0gYWRkaXRpb247XG4gICAgICAgIHRoaXMubW9ydGFyU29sZGllckNlbGwuaW5uZXJIVE1MID0gU3RyaW5nKHRoaXMubW9ydGFyU29sZGllcik7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZF9oZWxpY29wdGVyKGFkZGl0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5oZWxpY29wdGVyICs9IGFkZGl0aW9uO1xuICAgICAgICB0aGlzLmhlbGljb3B0ZXJDZWxsLmlubmVySFRNTCA9IFN0cmluZyh0aGlzLmhlbGljb3B0ZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRfYXBjKGFkZGl0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hcGMgKz0gYWRkaXRpb247XG4gICAgICAgIHRoaXMuYXBjQ2VsbC5pbm5lckhUTUwgPSBTdHJpbmcodGhpcy5hcGMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRfdGFuayhhZGRpdGlvbjogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGFuayArPSBhZGRpdGlvbjtcbiAgICAgICAgdGhpcy50YW5rQ2VsbC5pbm5lckhUTUwgPSBTdHJpbmcodGhpcy50YW5rKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkX2hlYXZ5VGFuayhhZGRpdGlvbjogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaGVhdnlUYW5rICs9IGFkZGl0aW9uO1xuICAgICAgICB0aGlzLmhlYXZ5VGFua0NlbGwuaW5uZXJIVE1MID0gU3RyaW5nKHRoaXMuaGVhdnlUYW5rKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkX2J1bmtlcihhZGRpdGlvbjogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYnVua2VyICs9IGFkZGl0aW9uO1xuICAgICAgICB0aGlzLmJ1bmtlckNlbGwuaW5uZXJIVE1MID0gU3RyaW5nKHRoaXMuYnVua2VyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkX21hY2hpbmVHdW4oYWRkaXRpb246IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLm1hY2hpbmVHdW4gKz0gYWRkaXRpb247XG4gICAgICAgIHRoaXMubWFjaGluZUd1bkNlbGwuaW5uZXJIVE1MID0gU3RyaW5nKHRoaXMubWFjaGluZUd1bik7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZF9oZWF2eUd1bihhZGRpdGlvbjogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaGVhdnlHdW4gKz0gYWRkaXRpb247XG4gICAgICAgIHRoaXMuaGVhdnlHdW5DZWxsLmlubmVySFRNTCA9IFN0cmluZyh0aGlzLmhlYXZ5R3VuKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkX2FudGlBaXIoYWRkaXRpb246IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmFudGlBaXIgKz0gYWRkaXRpb247XG4gICAgICAgIHRoaXMuYW50aUFpckNlbGwuaW5uZXJIVE1MID0gU3RyaW5nKHRoaXMuYW50aUFpcik7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IENvdW50cnkgfSBmcm9tIFwiLi9Db3VudHJ5XCJcbmltcG9ydCB7IGNvdW50cnlIZWlnaHQgfSBmcm9tIFwiLi9Db3VudHJ5XCI7XG5pbXBvcnQgeyBjb3VudHJ5V2lkdGggfSBmcm9tIFwiLi9Db3VudHJ5XCI7XG5cbmxldCBjb3VudHJ5TGlzdCA6IENvdW50cnlbXVxuZm9yKGxldCBpID0gMDsgaSA8IDMwOyArK2kpXG57XG4gICAgbGV0IGFDb3VudHJ5ID0gbmV3IENvdW50cnkoJ1Byb3ZpbmNlJyArIGkpXG4gICAgYUNvdW50cnkuc2V0X2NvbG9yKCdncmV5Jyk7XG4gICAgYUNvdW50cnkuc2V0X2xvY2F0aW9uKDIwICsgKGklNikqKDQwK2NvdW50cnlXaWR0aCksIDIwICsgTWF0aC5mbG9vcihpLzYpKig0MCtjb3VudHJ5SGVpZ2h0KSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=