/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/script/event/nav-mobile.js
var hamburgerMenu = function hamburgerMenu() {
  // hamburger menu

  var menu = document.querySelector(".hamburger-menu");
  var navigasi = document.querySelector("nav");
  menu.addEventListener("click", function () {
    navigasi.classList.toggle("d-none");
  });

  // exit
  var exit = document.querySelector(".icon-exit");
  exit.addEventListener("click", function () {
    navigasi.classList.toggle("d-none");
  });
};
/* harmony default export */ const nav_mobile = (hamburgerMenu);
;// CONCATENATED MODULE: ./src/script/component/address.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var AddressFooter = /*#__PURE__*/function (_HTMLElement) {
  _inherits(AddressFooter, _HTMLElement);
  var _super = _createSuper(AddressFooter);
  function AddressFooter() {
    _classCallCheck(this, AddressFooter);
    return _super.apply(this, arguments);
  }
  _createClass(AddressFooter, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "\n        <div class=\"address\">\n        <!-- awal tombol footer mobile section -->\n        <a href=\"#\" class=\"btn-address-mobile\">\n            Book A Trial Class Now\n        </a>\n        <!-- akhir tombol footer mobile section -->\n        <h1>\n            500 Terry Francine Street\n            <br>San Francisco, CA 94158\n            <br>Email: info@mysite.com\n        </h1>\n        <p>Tel: 123-456-7890   |    Fax: 123-456-7890</p>\n\n        <a href=\"#\" class=\"btn-address-dekstop\">\n            Book A Trial Class Now\n        </a>\n    </div>\n        ";
    }
  }]);
  return AddressFooter;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define("address-footer", AddressFooter);
/* harmony default export */ const address = ((/* unused pure expression or super */ null && (AddressFooter)));
;// CONCATENATED MODULE: ./src/script/component/arrownav.js
function arrownav_typeof(o) { "@babel/helpers - typeof"; return arrownav_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, arrownav_typeof(o); }
function arrownav_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function arrownav_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, arrownav_toPropertyKey(descriptor.key), descriptor); } }
function arrownav_createClass(Constructor, protoProps, staticProps) { if (protoProps) arrownav_defineProperties(Constructor.prototype, protoProps); if (staticProps) arrownav_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function arrownav_toPropertyKey(t) { var i = arrownav_toPrimitive(t, "string"); return "symbol" == arrownav_typeof(i) ? i : String(i); }
function arrownav_toPrimitive(t, r) { if ("object" != arrownav_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != arrownav_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function arrownav_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) arrownav_setPrototypeOf(subClass, superClass); }
function arrownav_createSuper(Derived) { var hasNativeReflectConstruct = arrownav_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = arrownav_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = arrownav_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return arrownav_possibleConstructorReturn(this, result); }; }
function arrownav_possibleConstructorReturn(self, call) { if (call && (arrownav_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return arrownav_assertThisInitialized(self); }
function arrownav_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function arrownav_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; arrownav_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !arrownav_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return arrownav_construct(Class, arguments, arrownav_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return arrownav_setPrototypeOf(Wrapper, Class); }; return arrownav_wrapNativeSuper(Class); }
function arrownav_construct(Parent, args, Class) { if (arrownav_isNativeReflectConstruct()) { arrownav_construct = Reflect.construct.bind(); } else { arrownav_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) arrownav_setPrototypeOf(instance, Class.prototype); return instance; }; } return arrownav_construct.apply(null, arguments); }
function arrownav_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function arrownav_isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function arrownav_setPrototypeOf(o, p) { arrownav_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return arrownav_setPrototypeOf(o, p); }
function arrownav_getPrototypeOf(o) { arrownav_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return arrownav_getPrototypeOf(o); }
var ArrowNav = /*#__PURE__*/function (_HTMLElement) {
  arrownav_inherits(ArrowNav, _HTMLElement);
  var _super = arrownav_createSuper(ArrowNav);
  function ArrowNav() {
    arrownav_classCallCheck(this, ArrowNav);
    return _super.apply(this, arguments);
  }
  arrownav_createClass(ArrowNav, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "\n        <div class=\"arrow-nav\">\n            <a href=\"#home\">\n                <i class=\"fa-solid fa-chevron-up\"></i>\n            </a>\n        </div>\n        ";
    }
  }]);
  return ArrowNav;
}( /*#__PURE__*/arrownav_wrapNativeSuper(HTMLElement));
customElements.define("arrow-nav", ArrowNav);
/* harmony default export */ const arrownav = ((/* unused pure expression or super */ null && (ArrowNav)));
;// CONCATENATED MODULE: ./src/script/component/asidenav.js
function asidenav_typeof(o) { "@babel/helpers - typeof"; return asidenav_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, asidenav_typeof(o); }
function asidenav_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function asidenav_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, asidenav_toPropertyKey(descriptor.key), descriptor); } }
function asidenav_createClass(Constructor, protoProps, staticProps) { if (protoProps) asidenav_defineProperties(Constructor.prototype, protoProps); if (staticProps) asidenav_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function asidenav_toPropertyKey(t) { var i = asidenav_toPrimitive(t, "string"); return "symbol" == asidenav_typeof(i) ? i : String(i); }
function asidenav_toPrimitive(t, r) { if ("object" != asidenav_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != asidenav_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asidenav_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) asidenav_setPrototypeOf(subClass, superClass); }
function asidenav_createSuper(Derived) { var hasNativeReflectConstruct = asidenav_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = asidenav_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = asidenav_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return asidenav_possibleConstructorReturn(this, result); }; }
function asidenav_possibleConstructorReturn(self, call) { if (call && (asidenav_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return asidenav_assertThisInitialized(self); }
function asidenav_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function asidenav_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; asidenav_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !asidenav_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return asidenav_construct(Class, arguments, asidenav_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return asidenav_setPrototypeOf(Wrapper, Class); }; return asidenav_wrapNativeSuper(Class); }
function asidenav_construct(Parent, args, Class) { if (asidenav_isNativeReflectConstruct()) { asidenav_construct = Reflect.construct.bind(); } else { asidenav_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) asidenav_setPrototypeOf(instance, Class.prototype); return instance; }; } return asidenav_construct.apply(null, arguments); }
function asidenav_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function asidenav_isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function asidenav_setPrototypeOf(o, p) { asidenav_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return asidenav_setPrototypeOf(o, p); }
function asidenav_getPrototypeOf(o) { asidenav_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return asidenav_getPrototypeOf(o); }
var AsidenavFooter = /*#__PURE__*/function (_HTMLElement) {
  asidenav_inherits(AsidenavFooter, _HTMLElement);
  var _super = asidenav_createSuper(AsidenavFooter);
  function AsidenavFooter() {
    asidenav_classCallCheck(this, AsidenavFooter);
    return _super.apply(this, arguments);
  }
  asidenav_createClass(AsidenavFooter, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "\n        <aside>\n        <ul>\n            <li>Home</li>\n            <li>About</li>\n            <li>Classes</li>\n            <li>Challanges</li>\n            <li>Plans</li>\n            <li>Contact</li>\n        </ul>\n        <div class=\"socialmedia\">\n            <i class=\"fa-brands fa-youtube\"></i>\n            <i class=\"fa-brands fa-square-instagram\"></i>\n            <i class=\"fa-brands fa-facebook\"></i>\n        </div>\n    </aside>\n        ";
    }
  }]);
  return AsidenavFooter;
}( /*#__PURE__*/asidenav_wrapNativeSuper(HTMLElement));
customElements.define("asidenav-footer", AsidenavFooter);
/* harmony default export */ const asidenav = ((/* unused pure expression or super */ null && (AsidenavFooter)));
;// CONCATENATED MODULE: ./src/script/component/form.js
function form_typeof(o) { "@babel/helpers - typeof"; return form_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, form_typeof(o); }
function form_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function form_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, form_toPropertyKey(descriptor.key), descriptor); } }
function form_createClass(Constructor, protoProps, staticProps) { if (protoProps) form_defineProperties(Constructor.prototype, protoProps); if (staticProps) form_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function form_toPropertyKey(t) { var i = form_toPrimitive(t, "string"); return "symbol" == form_typeof(i) ? i : String(i); }
function form_toPrimitive(t, r) { if ("object" != form_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != form_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function form_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) form_setPrototypeOf(subClass, superClass); }
function form_createSuper(Derived) { var hasNativeReflectConstruct = form_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = form_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = form_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return form_possibleConstructorReturn(this, result); }; }
function form_possibleConstructorReturn(self, call) { if (call && (form_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return form_assertThisInitialized(self); }
function form_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function form_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; form_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !form_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return form_construct(Class, arguments, form_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return form_setPrototypeOf(Wrapper, Class); }; return form_wrapNativeSuper(Class); }
function form_construct(Parent, args, Class) { if (form_isNativeReflectConstruct()) { form_construct = Reflect.construct.bind(); } else { form_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) form_setPrototypeOf(instance, Class.prototype); return instance; }; } return form_construct.apply(null, arguments); }
function form_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function form_isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function form_setPrototypeOf(o, p) { form_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return form_setPrototypeOf(o, p); }
function form_getPrototypeOf(o) { form_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return form_getPrototypeOf(o); }
var FormFooter = /*#__PURE__*/function (_HTMLElement) {
  form_inherits(FormFooter, _HTMLElement);
  var _super = form_createSuper(FormFooter);
  function FormFooter() {
    form_classCallCheck(this, FormFooter);
    return _super.apply(this, arguments);
  }
  form_createClass(FormFooter, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "<div class=\"form\">\n        <h1>Let's Get Moving</h1>\n        <p>Sign Up For Updates</p>\n        <form action=\"\">\n            <div class=\"fullname\">\n                <label for=\"fullname\">Full Name</label>\n                <input type=\"text\" id=\"fullname\">\n            </div>\n\n            <div class=\"information\">\n                <div class=\"email\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"email\" id=\"email\">\n                </div>\n                <div class=\"phone\">\n                    <label for=\"phone\">Phone</label>\n                    <input type=\"text\" id=\"phone\">\n                </div>\n            </div>\n\n            <div class=\"message\">\n                <label for=\"textarea\">\n                    Type your message here...\n                </label>\n                <textarea id=\"textarea\" rows=\"4\"></textarea>\n            </div>\n\n            <div class=\"submit\">\n                <span>Thanks For Submitting!</span>\n                <button type=\"submit\">Submit</button>\n            </div>\n        </form>\n    </div>";
    }
  }]);
  return FormFooter;
}( /*#__PURE__*/form_wrapNativeSuper(HTMLElement));
customElements.define("form-footer", FormFooter);
/* harmony default export */ const component_form = ((/* unused pure expression or super */ null && (FormFooter)));
;// CONCATENATED MODULE: ./src/script/component/landingpage.js
function landingpage_typeof(o) { "@babel/helpers - typeof"; return landingpage_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, landingpage_typeof(o); }
function landingpage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function landingpage_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, landingpage_toPropertyKey(descriptor.key), descriptor); } }
function landingpage_createClass(Constructor, protoProps, staticProps) { if (protoProps) landingpage_defineProperties(Constructor.prototype, protoProps); if (staticProps) landingpage_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function landingpage_toPropertyKey(t) { var i = landingpage_toPrimitive(t, "string"); return "symbol" == landingpage_typeof(i) ? i : String(i); }
function landingpage_toPrimitive(t, r) { if ("object" != landingpage_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != landingpage_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function landingpage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) landingpage_setPrototypeOf(subClass, superClass); }
function landingpage_createSuper(Derived) { var hasNativeReflectConstruct = landingpage_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = landingpage_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = landingpage_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return landingpage_possibleConstructorReturn(this, result); }; }
function landingpage_possibleConstructorReturn(self, call) { if (call && (landingpage_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return landingpage_assertThisInitialized(self); }
function landingpage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function landingpage_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; landingpage_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !landingpage_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return landingpage_construct(Class, arguments, landingpage_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return landingpage_setPrototypeOf(Wrapper, Class); }; return landingpage_wrapNativeSuper(Class); }
function landingpage_construct(Parent, args, Class) { if (landingpage_isNativeReflectConstruct()) { landingpage_construct = Reflect.construct.bind(); } else { landingpage_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) landingpage_setPrototypeOf(instance, Class.prototype); return instance; }; } return landingpage_construct.apply(null, arguments); }
function landingpage_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function landingpage_isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function landingpage_setPrototypeOf(o, p) { landingpage_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return landingpage_setPrototypeOf(o, p); }
function landingpage_getPrototypeOf(o) { landingpage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return landingpage_getPrototypeOf(o); }
var LandingPage = /*#__PURE__*/function (_HTMLElement) {
  landingpage_inherits(LandingPage, _HTMLElement);
  var _super = landingpage_createSuper(LandingPage);
  function LandingPage() {
    landingpage_classCallCheck(this, LandingPage);
    return _super.apply(this, arguments);
  }
  landingpage_createClass(LandingPage, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "\n        <header class=\"landingpage\">\n\n        <p class=\"p-dekstop\">Base Fit- Functional Fitness Studio</p>\n        <h1>Where Fitness <br> Become Your <br> LifeStyle</h1>\n        <!-- paragraf mobile -->\n        <div class=\"p-mobile\">\n            <p>Base Fit- Functional <br>Fitness Studio</p>\n        </div>\n        <!-- akhir paragraf mobile -->\n        <button class=\"btn-landingpage btn\">Book Now</button>\n    </header>\n        ";
    }
  }]);
  return LandingPage;
}( /*#__PURE__*/landingpage_wrapNativeSuper(HTMLElement));
customElements.define("landing-page", LandingPage);
/* harmony default export */ const landingpage = ((/* unused pure expression or super */ null && (LandingPage)));
;// CONCATENATED MODULE: ./src/script/component/messagenav.js
function messagenav_typeof(o) { "@babel/helpers - typeof"; return messagenav_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, messagenav_typeof(o); }
function messagenav_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function messagenav_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, messagenav_toPropertyKey(descriptor.key), descriptor); } }
function messagenav_createClass(Constructor, protoProps, staticProps) { if (protoProps) messagenav_defineProperties(Constructor.prototype, protoProps); if (staticProps) messagenav_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function messagenav_toPropertyKey(t) { var i = messagenav_toPrimitive(t, "string"); return "symbol" == messagenav_typeof(i) ? i : String(i); }
function messagenav_toPrimitive(t, r) { if ("object" != messagenav_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != messagenav_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function messagenav_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) messagenav_setPrototypeOf(subClass, superClass); }
function messagenav_createSuper(Derived) { var hasNativeReflectConstruct = messagenav_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = messagenav_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = messagenav_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return messagenav_possibleConstructorReturn(this, result); }; }
function messagenav_possibleConstructorReturn(self, call) { if (call && (messagenav_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return messagenav_assertThisInitialized(self); }
function messagenav_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function messagenav_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; messagenav_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !messagenav_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return messagenav_construct(Class, arguments, messagenav_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return messagenav_setPrototypeOf(Wrapper, Class); }; return messagenav_wrapNativeSuper(Class); }
function messagenav_construct(Parent, args, Class) { if (messagenav_isNativeReflectConstruct()) { messagenav_construct = Reflect.construct.bind(); } else { messagenav_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) messagenav_setPrototypeOf(instance, Class.prototype); return instance; }; } return messagenav_construct.apply(null, arguments); }
function messagenav_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function messagenav_isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function messagenav_setPrototypeOf(o, p) { messagenav_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return messagenav_setPrototypeOf(o, p); }
function messagenav_getPrototypeOf(o) { messagenav_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return messagenav_getPrototypeOf(o); }
var MessageNav = /*#__PURE__*/function (_HTMLElement) {
  messagenav_inherits(MessageNav, _HTMLElement);
  var _super = messagenav_createSuper(MessageNav);
  function MessageNav() {
    messagenav_classCallCheck(this, MessageNav);
    return _super.apply(this, arguments);
  }
  messagenav_createClass(MessageNav, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "\n        <div class=\"message-nav\">\n            <a href=\"\"><i class=\"fa-solid fa-comment\"></i></a>\n        </div>\n        ";
    }
  }]);
  return MessageNav;
}( /*#__PURE__*/messagenav_wrapNativeSuper(HTMLElement));
customElements.define("message-nav", MessageNav);
/* harmony default export */ const messagenav = ((/* unused pure expression or super */ null && (MessageNav)));
;// CONCATENATED MODULE: ./src/script/component/navtrial.js
function navtrial_typeof(o) { "@babel/helpers - typeof"; return navtrial_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, navtrial_typeof(o); }
function navtrial_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function navtrial_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, navtrial_toPropertyKey(descriptor.key), descriptor); } }
function navtrial_createClass(Constructor, protoProps, staticProps) { if (protoProps) navtrial_defineProperties(Constructor.prototype, protoProps); if (staticProps) navtrial_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function navtrial_toPropertyKey(t) { var i = navtrial_toPrimitive(t, "string"); return "symbol" == navtrial_typeof(i) ? i : String(i); }
function navtrial_toPrimitive(t, r) { if ("object" != navtrial_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != navtrial_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function navtrial_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) navtrial_setPrototypeOf(subClass, superClass); }
function navtrial_createSuper(Derived) { var hasNativeReflectConstruct = navtrial_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = navtrial_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = navtrial_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return navtrial_possibleConstructorReturn(this, result); }; }
function navtrial_possibleConstructorReturn(self, call) { if (call && (navtrial_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return navtrial_assertThisInitialized(self); }
function navtrial_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function navtrial_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; navtrial_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !navtrial_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return navtrial_construct(Class, arguments, navtrial_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return navtrial_setPrototypeOf(Wrapper, Class); }; return navtrial_wrapNativeSuper(Class); }
function navtrial_construct(Parent, args, Class) { if (navtrial_isNativeReflectConstruct()) { navtrial_construct = Reflect.construct.bind(); } else { navtrial_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) navtrial_setPrototypeOf(instance, Class.prototype); return instance; }; } return navtrial_construct.apply(null, arguments); }
function navtrial_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function navtrial_isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function navtrial_setPrototypeOf(o, p) { navtrial_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return navtrial_setPrototypeOf(o, p); }
function navtrial_getPrototypeOf(o) { navtrial_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return navtrial_getPrototypeOf(o); }
var NavTrial = /*#__PURE__*/function (_HTMLElement) {
  navtrial_inherits(NavTrial, _HTMLElement);
  var _super = navtrial_createSuper(NavTrial);
  function NavTrial() {
    navtrial_classCallCheck(this, NavTrial);
    return _super.apply(this, arguments);
  }
  navtrial_createClass(NavTrial, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "\n        <div class=\"nav-trial\">\n        <div class=\"fit-studio\">\n            <a href=\"\">\n                <p><span>Fit</span> / Studio</p>\n            </a>\n        </div>\n        <div class=\"book-trial\">\n            <a href=\"\">\n                <p>Book a trial Class Now</p>\n            </a>\n            <a class=\"hamburger-menu\">\n                <i class=\"fa-solid fa-bars\"></i>\n            </a>\n        </div>\n\n        <!-- awal btn mobile -->\n        <div class=\"btn-mobile\">\n            <button class=\"btn\">Membership</button>\n        </div>\n        <!-- akhir btn mobile -->\n    </div>\n        ";
    }
  }]);
  return NavTrial;
}( /*#__PURE__*/navtrial_wrapNativeSuper(HTMLElement));
customElements.define("nav-trial", NavTrial);
/* harmony default export */ const navtrial = ((/* unused pure expression or super */ null && (NavTrial)));
;// CONCATENATED MODULE: ./src/script/component/section1.js
function section1_typeof(o) { "@babel/helpers - typeof"; return section1_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, section1_typeof(o); }
function section1_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function section1_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, section1_toPropertyKey(descriptor.key), descriptor); } }
function section1_createClass(Constructor, protoProps, staticProps) { if (protoProps) section1_defineProperties(Constructor.prototype, protoProps); if (staticProps) section1_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function section1_toPropertyKey(t) { var i = section1_toPrimitive(t, "string"); return "symbol" == section1_typeof(i) ? i : String(i); }
function section1_toPrimitive(t, r) { if ("object" != section1_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != section1_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function section1_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) section1_setPrototypeOf(subClass, superClass); }
function section1_createSuper(Derived) { var hasNativeReflectConstruct = section1_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = section1_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = section1_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return section1_possibleConstructorReturn(this, result); }; }
function section1_possibleConstructorReturn(self, call) { if (call && (section1_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return section1_assertThisInitialized(self); }
function section1_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function section1_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; section1_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !section1_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return section1_construct(Class, arguments, section1_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return section1_setPrototypeOf(Wrapper, Class); }; return section1_wrapNativeSuper(Class); }
function section1_construct(Parent, args, Class) { if (section1_isNativeReflectConstruct()) { section1_construct = Reflect.construct.bind(); } else { section1_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) section1_setPrototypeOf(instance, Class.prototype); return instance; }; } return section1_construct.apply(null, arguments); }
function section1_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function section1_isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function section1_setPrototypeOf(o, p) { section1_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return section1_setPrototypeOf(o, p); }
function section1_getPrototypeOf(o) { section1_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return section1_getPrototypeOf(o); }
var Section1 = /*#__PURE__*/function (_HTMLElement) {
  section1_inherits(Section1, _HTMLElement);
  var _super = section1_createSuper(Section1);
  function Section1() {
    section1_classCallCheck(this, Section1);
    return _super.apply(this, arguments);
  }
  section1_createClass(Section1, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "\n        <section class=\"sct-1\">\n        <div class=\"img-sct-1\"></div>\n        <article class=\"art-sct-1\">\n            <h1>About Base <br>Fit Studio</h1>\n            <p>\n                I'm a paragraph. Click here to add your own text and edit me. It\u2019s easy. Just click \u201CEdit Text\u201D or double click me to add your own content and make changes to the font. I\u2019m a great place for you to tell a story and let your users know a little more about you.\n            </p>\n            <button class=\"btn\">Read More</button>\n        </article>\n        <!-- awal gambar section1 mobile -->\n        <div class=\"img-sct-1 img-sct1-mobile\"></div>\n        <!-- akhir gambar section1 mobile -->\n        </section>\n        ";
    }
  }]);
  return Section1;
}( /*#__PURE__*/section1_wrapNativeSuper(HTMLElement));
customElements.define("section-1", Section1);
/* harmony default export */ const section1 = ((/* unused pure expression or super */ null && (Section1)));
;// CONCATENATED MODULE: ./src/script/component/section2.js
function section2_typeof(o) { "@babel/helpers - typeof"; return section2_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, section2_typeof(o); }
function section2_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function section2_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, section2_toPropertyKey(descriptor.key), descriptor); } }
function section2_createClass(Constructor, protoProps, staticProps) { if (protoProps) section2_defineProperties(Constructor.prototype, protoProps); if (staticProps) section2_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function section2_toPropertyKey(t) { var i = section2_toPrimitive(t, "string"); return "symbol" == section2_typeof(i) ? i : String(i); }
function section2_toPrimitive(t, r) { if ("object" != section2_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != section2_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function section2_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) section2_setPrototypeOf(subClass, superClass); }
function section2_createSuper(Derived) { var hasNativeReflectConstruct = section2_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = section2_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = section2_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return section2_possibleConstructorReturn(this, result); }; }
function section2_possibleConstructorReturn(self, call) { if (call && (section2_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return section2_assertThisInitialized(self); }
function section2_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function section2_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; section2_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !section2_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return section2_construct(Class, arguments, section2_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return section2_setPrototypeOf(Wrapper, Class); }; return section2_wrapNativeSuper(Class); }
function section2_construct(Parent, args, Class) { if (section2_isNativeReflectConstruct()) { section2_construct = Reflect.construct.bind(); } else { section2_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) section2_setPrototypeOf(instance, Class.prototype); return instance; }; } return section2_construct.apply(null, arguments); }
function section2_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function section2_isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function section2_setPrototypeOf(o, p) { section2_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return section2_setPrototypeOf(o, p); }
function section2_getPrototypeOf(o) { section2_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return section2_getPrototypeOf(o); }
var Section2 = /*#__PURE__*/function (_HTMLElement) {
  section2_inherits(Section2, _HTMLElement);
  var _super = section2_createSuper(Section2);
  function Section2() {
    section2_classCallCheck(this, Section2);
    return _super.apply(this, arguments);
  }
  section2_createClass(Section2, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "\n        <section class=\"sct-2\">\n        <h1>Our Classes</h1>\n        <!-- awal classes 1 -->\n        <div class=\"category-class\">\n            <a href=\"#\"><h3>Base HIIT</h3></a>\n            <div class=\"timebutton-class\">\n                <p>45 min</p>\n                <button class=\"btn-classes\">Book Now</button>\n            </div>\n        </div>\n        <!-- akhir classes 1 -->\n        <!-- awal classes 2 -->\n        <div class=\"category-class middle-class\">\n            <a href=\"#\"><h3>Base Strength</h3></a>\n            <div class=\"timebutton-class\">\n                <p>45 min</p>\n                <button class=\"btn-classes\">Book Now</button>\n            </div>\n        </div>\n        <!-- akhir classes 2 -->\n        <!-- awal classes 3 -->\n        <div class=\"category-class\">\n            <a href=\"#\"><h3>Base Endurance</h3></a>\n            <div class=\"timebutton-class\">\n                <p>45 min</p>\n                <button class=\"btn-classes\">Book Now</button>\n            </div>\n        </div>\n        <!-- akhir classes 3 -->\n    </section>\n        ";
    }
  }]);
  return Section2;
}( /*#__PURE__*/section2_wrapNativeSuper(HTMLElement));
customElements.define("section-2", Section2);
/* harmony default export */ const section2 = ((/* unused pure expression or super */ null && (Section2)));
;// CONCATENATED MODULE: ./src/script/component/section3.js
function section3_typeof(o) { "@babel/helpers - typeof"; return section3_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, section3_typeof(o); }
function section3_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function section3_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, section3_toPropertyKey(descriptor.key), descriptor); } }
function section3_createClass(Constructor, protoProps, staticProps) { if (protoProps) section3_defineProperties(Constructor.prototype, protoProps); if (staticProps) section3_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function section3_toPropertyKey(t) { var i = section3_toPrimitive(t, "string"); return "symbol" == section3_typeof(i) ? i : String(i); }
function section3_toPrimitive(t, r) { if ("object" != section3_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != section3_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function section3_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) section3_setPrototypeOf(subClass, superClass); }
function section3_createSuper(Derived) { var hasNativeReflectConstruct = section3_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = section3_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = section3_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return section3_possibleConstructorReturn(this, result); }; }
function section3_possibleConstructorReturn(self, call) { if (call && (section3_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return section3_assertThisInitialized(self); }
function section3_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function section3_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; section3_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !section3_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return section3_construct(Class, arguments, section3_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return section3_setPrototypeOf(Wrapper, Class); }; return section3_wrapNativeSuper(Class); }
function section3_construct(Parent, args, Class) { if (section3_isNativeReflectConstruct()) { section3_construct = Reflect.construct.bind(); } else { section3_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) section3_setPrototypeOf(instance, Class.prototype); return instance; }; } return section3_construct.apply(null, arguments); }
function section3_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function section3_isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function section3_setPrototypeOf(o, p) { section3_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return section3_setPrototypeOf(o, p); }
function section3_getPrototypeOf(o) { section3_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return section3_getPrototypeOf(o); }
var Section3 = /*#__PURE__*/function (_HTMLElement) {
  section3_inherits(Section3, _HTMLElement);
  var _super = section3_createSuper(Section3);
  function Section3() {
    section3_classCallCheck(this, Section3);
    return _super.apply(this, arguments);
  }
  section3_createClass(Section3, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "\n        <section class=\"sct-3\">\n        <h1>Join Base and Transform Your <br> Body and Mind</h1>\n        <!-- awal sct-1 -->\n        <section class=\"wrap-sct\">\n            <div class=\"img-sct-1\">\n            </div>\n            <article class=\"art-joinnow\">\n                <h3>Community</h3>\n                <p>\n                    I'm a paragraph. Click here to add your own text and edit me. It\u2019s easy. Just click \u201CEdit Text\u201D or double click me to add your own content and make changes to the font. I\u2019m a great place for you to tell a story and let your users know a little more about you.\n                </p>\n            </article>\n        </section>\n        <!-- akhir sct-1 -->\n\n        <!-- awal sct-2 -->\n        <section class=\"wrap-sct\">\n\n            <!-- awal gambar di section 2 mobile -->\n            <div class=\"img-sct-middle img-sct2-mobile\"></div>\n            <!-- akhir gambar di section 2 mobile -->\n\n            <article class=\"art-joinnow\">\n                <h3>Motivation</h3>\n                <p>\n                    I'm a paragraph. Click here to add your own text and edit me. It\u2019s easy. Just click \u201CEdit Text\u201D or double click me to add your own content and make changes to the font. I\u2019m a great place for you to tell a story and let your users know a little more about you.\n                </p>\n            </article>\n            <div class=\"img-sct-middle\">\n        </section>\n        <!-- akhir sct-2 -->\n\n        <!-- awal sct-3 -->\n        <section class=\"wrap-sct\">\n            <div class=\"img-sct-2\">\n            </div>\n            <article class=\"art-joinnow\">\n                <h3>Result</h3>\n                <p>\n                    I'm a paragraph. Click here to add your own text and edit me. It\u2019s easy. Just click \u201CEdit Text\u201D or double click me to add your own content and make changes to the font. I\u2019m a great place for you to tell a story and let your users know a little more about you.\n                </p>\n            </article>\n        </section>\n        <!-- akhir sct-3 -->\n\n    </section>\n        ";
    }
  }]);
  return Section3;
}( /*#__PURE__*/section3_wrapNativeSuper(HTMLElement));
customElements.define("section-3", Section3);
/* harmony default export */ const section3 = ((/* unused pure expression or super */ null && (Section3)));
;// CONCATENATED MODULE: ./src/script/component/section4.js
function section4_typeof(o) { "@babel/helpers - typeof"; return section4_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, section4_typeof(o); }
function section4_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function section4_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, section4_toPropertyKey(descriptor.key), descriptor); } }
function section4_createClass(Constructor, protoProps, staticProps) { if (protoProps) section4_defineProperties(Constructor.prototype, protoProps); if (staticProps) section4_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function section4_toPropertyKey(t) { var i = section4_toPrimitive(t, "string"); return "symbol" == section4_typeof(i) ? i : String(i); }
function section4_toPrimitive(t, r) { if ("object" != section4_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != section4_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function section4_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) section4_setPrototypeOf(subClass, superClass); }
function section4_createSuper(Derived) { var hasNativeReflectConstruct = section4_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = section4_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = section4_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return section4_possibleConstructorReturn(this, result); }; }
function section4_possibleConstructorReturn(self, call) { if (call && (section4_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return section4_assertThisInitialized(self); }
function section4_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function section4_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; section4_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !section4_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return section4_construct(Class, arguments, section4_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return section4_setPrototypeOf(Wrapper, Class); }; return section4_wrapNativeSuper(Class); }
function section4_construct(Parent, args, Class) { if (section4_isNativeReflectConstruct()) { section4_construct = Reflect.construct.bind(); } else { section4_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) section4_setPrototypeOf(instance, Class.prototype); return instance; }; } return section4_construct.apply(null, arguments); }
function section4_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function section4_isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function section4_setPrototypeOf(o, p) { section4_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return section4_setPrototypeOf(o, p); }
function section4_getPrototypeOf(o) { section4_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return section4_getPrototypeOf(o); }
var Section4 = /*#__PURE__*/function (_HTMLElement) {
  section4_inherits(Section4, _HTMLElement);
  var _super = section4_createSuper(Section4);
  function Section4() {
    section4_classCallCheck(this, Section4);
    return _super.apply(this, arguments);
  }
  section4_createClass(Section4, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "\n        <section class=\"sct-4\">\n        <h1>Join us on <br>mobile!</h1>\n        <p>The Spaces by Wix app lets you easily <br>stay in touch and updated with us on the <br>go. Just add your phone number and <br>we\u2019ll text you a link to download the app.</p>\n\n        <form action=\"\">\n            <input type=\"text\" id=\"prefix\" placeholder=\"+1\">\n            <input type=\"text\" id=\"phone-form\" placeholder=\"Phone Number\">\n\n            <button type=\"submit\" class=\"btn\">Send</button>\n        </form>\n\n        <div class=\"img-download\">\n            <a href=\"#\">\n                <div class = \"img-playstore\"></div>\n            </a>\n            <a href=\"#\">\n                <div class = \"img-appstore\"></div>\n            </a>\n        </div>\n\n    </section>\n        ";
    }
  }]);
  return Section4;
}( /*#__PURE__*/section4_wrapNativeSuper(HTMLElement));
customElements.define("section-4", Section4);
/* harmony default export */ const section4 = ((/* unused pure expression or super */ null && (Section4)));
;// CONCATENATED MODULE: ./src/script/component/section5.js
function section5_typeof(o) { "@babel/helpers - typeof"; return section5_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, section5_typeof(o); }
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function section5_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function section5_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, section5_toPropertyKey(descriptor.key), descriptor); } }
function section5_createClass(Constructor, protoProps, staticProps) { if (protoProps) section5_defineProperties(Constructor.prototype, protoProps); if (staticProps) section5_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function section5_toPropertyKey(t) { var i = section5_toPrimitive(t, "string"); return "symbol" == section5_typeof(i) ? i : String(i); }
function section5_toPrimitive(t, r) { if ("object" != section5_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != section5_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function section5_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) section5_setPrototypeOf(subClass, superClass); }
function section5_createSuper(Derived) { var hasNativeReflectConstruct = section5_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = section5_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = section5_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return section5_possibleConstructorReturn(this, result); }; }
function section5_possibleConstructorReturn(self, call) { if (call && (section5_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return section5_assertThisInitialized(self); }
function section5_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function section5_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; section5_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !section5_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return section5_construct(Class, arguments, section5_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return section5_setPrototypeOf(Wrapper, Class); }; return section5_wrapNativeSuper(Class); }
function section5_construct(Parent, args, Class) { if (section5_isNativeReflectConstruct()) { section5_construct = Reflect.construct.bind(); } else { section5_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) section5_setPrototypeOf(instance, Class.prototype); return instance; }; } return section5_construct.apply(null, arguments); }
function section5_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function section5_isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function section5_setPrototypeOf(o, p) { section5_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return section5_setPrototypeOf(o, p); }
function section5_getPrototypeOf(o) { section5_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return section5_getPrototypeOf(o); }
var Section5 = /*#__PURE__*/function (_HTMLElement) {
  section5_inherits(Section5, _HTMLElement);
  var _super = section5_createSuper(Section5);
  function Section5() {
    section5_classCallCheck(this, Section5);
    return _super.apply(this, arguments);
  }
  section5_createClass(Section5, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        <section class=\"sct-5\">\n            <h1>Follow Us @BaseFitStudio</h1>\n            <div class=\"wrap-sct5\">\n                <div class=\"img-sct5 foto-1\">\n                    <div class=\"text\">\n                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates modi quaerat quas </p>\n                    </div>\n                </div>\n                <div class=\"img-sct5 foto-2\">\n                    <div class=\"text\">\n                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates modi quaerat quas </p>\n                    </div>\n                </div>\n                <div class=\"img-sct5 foto-3\">\n                    <div class=\"text\">\n                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates modi quaerat quas </p>\n                    </div>\n                </div>\n                <div class=\"img-sct5 foto-4\">\n                    <div class=\"text\">\n                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates modi quaerat quas </p>\n                    </div>\n                </div>\n                <div class=\"img-sct5 foto-5\">\n                    <div class=\"text\">\n                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates modi quaerat quas </p>\n                    </div>\n                </div>\n            </div>\n        </section>"])));
    }
  }]);
  return Section5;
}( /*#__PURE__*/section5_wrapNativeSuper(HTMLElement));
customElements.define("section-5", Section5);
/* harmony default export */ const section5 = ((/* unused pure expression or super */ null && (Section5)));
;// CONCATENATED MODULE: ./src/script/view/main.js












;// CONCATENATED MODULE: ./src/index.js



nav_mobile();
/******/ })()
;