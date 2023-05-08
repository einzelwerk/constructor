/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/scripts/modules/burgerMenu.js
function toggleMenu() {
  var menu = document.querySelector(".menu");
  var btn = document.querySelector(".header__burger");
  document.addEventListener('click', function (e) {
    if (btn.contains(e.target)) {
      menu.classList.toggle('menu_active');
      if (document.body.style.overflow) {
        document.body.style.overflow = 'hidden';
        return;
      }
      document.body.style.overflow = null;
      return;
    }
    if (!menu.classList.contains('menu_active')) return;
    menu.classList.remove('menu_active');
    document.body.style.overflow = null;
  });
}
;// CONCATENATED MODULE: ./src/scripts/vendor/select/SingleSelect.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _initializeStructure = /*#__PURE__*/new WeakSet();
var _initializeOriginStructure = /*#__PURE__*/new WeakSet();
var SingleSelect = /*#__PURE__*/function () {
  function SingleSelect(selectElement) {
    var _this = this;
    _classCallCheck(this, SingleSelect);
    _classPrivateMethodInitSpec(this, _initializeOriginStructure);
    _classPrivateMethodInitSpec(this, _initializeStructure);
    this.originSelect = selectElement;
    this.select = null;
    this.customSelect = null;
    this.selectHead = null;
    this.selectBody = null;
    this.optionsCollection = [];
    this.currentHeadOption = null;
    _classPrivateMethodGet(this, _initializeStructure, _initializeStructure2).call(this);
    document.addEventListener('click', this.toggleSelect.bind(this));
    this.optionsCollection.forEach(function (option) {
      option.addEventListener('click', _this.changeOption.bind(_this, option));
    });
  }
  _createClass(SingleSelect, [{
    key: "toggleSelect",
    value: function toggleSelect(event) {
      if (!this.selectHead.contains(event.target)) {
        this.customSelect.classList.toggle('is-open', false);
        return;
      }
      this.customSelect.classList.toggle('is-open');
    }
  }, {
    key: "changeOption",
    value: function changeOption(currentOption) {
      if (this.selectHead.contains(currentOption)) return;
      this.optionsCollection.forEach(function (option) {
        option.classList.toggle('is-selected', option === currentOption);
      });
      var newHeadOption = currentOption.cloneNode(true);
      newHeadOption.classList.remove('select__option_body');
      newHeadOption.classList.add('select__option_head');
      if (this.currentHeadOption) {
        this.currentHeadOption.replaceWith(newHeadOption);
      } else {
        this.selectHead.append(newHeadOption);
      }
      this.currentHeadOption = newHeadOption;
      var selectedOption = _toConsumableArray(this.select.options).find(function (option) {
        return option.dataset.id === currentOption.dataset.id;
      }) || this.optionsCollection[0];
      selectedOption.selected = true;
    }
  }]);
  return SingleSelect;
}();
function _initializeStructure2() {
  var _this2 = this;
  this.customSelect = document.createElement('div');
  this.customSelect.className = this.originSelect.className;
  this.selectHead = document.createElement('div');
  this.selectHead.classList.add('select__head');
  this.selectBody = document.createElement('div');
  this.selectBody.classList.add('select__body');
  this.customSelect.append(this.selectHead);
  this.customSelect.append(this.selectBody);
  this.optionsCollection = _toConsumableArray(this.originSelect.children).filter(function (option) {
    return option.dataset.value;
  }).map(function (option, idx) {
    var newOption = option.cloneNode(true);
    newOption.classList.add('select__option', 'select__option_body');
    newOption.dataset.id = idx + 1;
    _this2.selectBody.append(newOption);
    return newOption;
  });
  _classPrivateMethodGet(this, _initializeOriginStructure, _initializeOriginStructure2).call(this);
  var placehlderOption = _toConsumableArray(this.originSelect.children).find(function (opt) {
    return !opt.dataset.value;
  }) || this.optionsCollection[0];
  this.changeOption(placehlderOption);
  this.originSelect.replaceWith(this.customSelect);
}
function _initializeOriginStructure2() {
  var select = document.createElement('select');
  select.classList.add('visually-hidden');
  this.optionsCollection.forEach(function (rawOption) {
    var option = document.createElement('option');
    option.textContent = rawOption.textContent;
    option.dataset.id = rawOption.dataset.id;
    option.setAttribute('value', rawOption.dataset.value);
    select.append(option);
  });
  this.select = select;
  this.customSelect.prepend(select);
}
;// CONCATENATED MODULE: ./src/scripts/vendor/select/Select.js
function Select_typeof(obj) { "@babel/helpers - typeof"; return Select_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Select_typeof(obj); }
function Select_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Select_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Select_toPropertyKey(descriptor.key), descriptor); } }
function Select_createClass(Constructor, protoProps, staticProps) { if (protoProps) Select_defineProperties(Constructor.prototype, protoProps); if (staticProps) Select_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function Select_toPropertyKey(arg) { var key = Select_toPrimitive(arg, "string"); return Select_typeof(key) === "symbol" ? key : String(key); }
function Select_toPrimitive(input, hint) { if (Select_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Select_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Select = /*#__PURE__*/function () {
  function Select(selector) {
    Select_classCallCheck(this, Select);
    this.selects = document.querySelectorAll(selector);
    this.selectInstances = [];
    this.init();
  }
  Select_createClass(Select, [{
    key: "init",
    value: function init() {
      var _this = this;
      this.selects.forEach(function (select) {
        _this.selectInstances.push(new SingleSelect(select));
      });
    }
  }]);
  return Select;
}();
;// CONCATENATED MODULE: ./src/scripts/components/header-1.js


new Select('.header-1 .select');
toggleMenu();
/******/ })()
;