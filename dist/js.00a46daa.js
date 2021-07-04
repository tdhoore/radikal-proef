// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel/src/builtins/bundle-url.js"}],"css/index.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\assets\\img\\heart.svg":[["heart.31dfddf3.svg","assets/img/heart.svg"],"assets/img/heart.svg"],"./..\\assets\\img\\heart-full.svg":[["heart-full.e063c649.svg","assets/img/heart-full.svg"],"assets/img/heart-full.svg"],"./..\\assets\\img\\BasketWhite.svg":[["BasketWhite.2477fac6.svg","assets/img/BasketWhite.svg"],"assets/img/BasketWhite.svg"],"./..\\assets\\img\\star.svg":[["star.312c017b.svg","assets/img/star.svg"],"assets/img/star.svg"],"./..\\assets\\img\\starFull.svg":[["starFull.5993236b.svg","assets/img/starFull.svg"],"assets/img/starFull.svg"],"_css_loader":"../node_modules/parcel/src/builtins/css-loader.js"}],"js/classes/HamburgerNav.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HamburgerNav =
/*#__PURE__*/
function () {
  function HamburgerNav() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      navSelector: "",
      navOpenBtn: "",
      navCloseBtn: ""
    };

    _classCallCheck(this, HamburgerNav);

    this.navSelector = params.navSelector;
    this.navElem = null;
    this.navOpenBtnSelector = params.navOpenBtn;
    this.navOpenBtn = null;
    this.navCloseBtnSelector = params.navOpenBtn;
    this.navCloseBtn = null;
    this.links = [];
  }

  _createClass(HamburgerNav, [{
    key: "init",
    value: function init() {
      var _this = this;

      //set elements
      this.navElem = document.querySelector(this.navSelector);
      this.navOpenBtn = document.querySelector(this.navOpenBtnSelector);
      this.navCloseBtn = document.querySelector(this.navCloseBtnSelector); //check if exist

      if (this.navElem && this.navOpenBtn && this.navCloseBtn) {
        //check if same openBtn
        if (this.navOpenBtn === this.navCloseBtn) {
          this.navOpenBtn.removeEventListener("click", function (e) {
            return _this.handleToggleNav(e);
          });
          this.navOpenBtn.addEventListener("click", function (e) {
            return _this.handleToggleNav(e);
          });
        } else {
          //add event listeners
          this.navOpenBtn.addEventListener("click", function (e) {
            return _this.handleToggleNav(e);
          });
          this.navOpenBtn.addEventListener("click", function (e) {
            return _this.handleOpenNav(e);
          });
          this.navOpenBtn.removeEventListener("click", function (e) {
            return _this.handleToggleNav(e);
          });
          this.navCloseBtn.addEventListener("click", function (e) {
            return _this.handleCloseNav(e);
          });
        } //find all links


        this.links = this.navElem.querySelectorAll("a"); //addlisteners to listen for #links

        this.links.forEach(function (link) {
          if (link.href.includes("#")) {
            link.removeEventListener("click", function (e) {
              return _this.handleClickHash(e);
            });
            link.addEventListener("click", function (e) {
              return _this.handleClickHash(e);
            });
          }
        });
      }
    }
  }, {
    key: "handleClickHash",
    value: function handleClickHash(e) {
      //close the current nav
      this.closeNav();
    }
  }, {
    key: "handleToggleNav",
    value: function handleToggleNav(e) {
      e.preventDefault();
      this.navElem.classList.toggle("open");
      this.navOpenBtn.classList.toggle("open");
    }
  }, {
    key: "handleOpenNav",
    value: function handleOpenNav(e) {
      e.preventDefault();
      this.navElem.classList.add("open");
    }
  }, {
    key: "handleCloseNav",
    value: function handleCloseNav(e) {
      e.preventDefault();
      this.navElem.classList.remove("open");
    }
  }, {
    key: "closeNav",
    value: function closeNav() {
      this.navElem.classList.remove("open");
      this.navOpenBtn.classList.remove("open");
    }
  }]);

  return HamburgerNav;
}();

exports.default = HamburgerNav;
},{}],"js/classes/StarRating.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StarRating =
/*#__PURE__*/
function () {
  function StarRating() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      starsHolderSelector: "",
      clickedAnimClass: ""
    };

    _classCallCheck(this, StarRating);

    this.starsHolderSelector = params.starsHolderSelector;
    this.starsHolder = null;
    this.clickedAnimClass = params.clickedAnimClass;
    this.stars = [];
    this.lastIndex = -1;
    this.activeIndex = -1;
  }

  _createClass(StarRating, [{
    key: "init",
    value: function init() {
      var _this = this;

      //set the elements
      this.starsHolder = document.querySelector(this.starsHolderSelector);

      if (this.starsHolder) {
        //exists zso continue
        this.stars = this.starsHolder.querySelectorAll("input[type=checkbox]");
        this.stars.forEach(function (star, index) {
          star.addEventListener("input", function (e) {
            return _this.handleChange(e, index);
          });
        });
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(e, index) {
      this.updatestars(index);
      this.setAntimation(e.currentTarget);
    }
  }, {
    key: "setAntimation",
    value: function setAntimation(elem) {
      var _this2 = this;

      if (this.clickedAnimClass) {
        elem.parentElement.classList.remove(this.clickedAnimClass);
        setTimeout(function () {
          elem.parentElement.classList.add(_this2.clickedAnimClass);
        }, 50);
      }
    }
  }, {
    key: "updatestars",
    value: function updatestars(index) {
      var _this3 = this;

      this.lastIndex = this.activeIndex;
      this.activeIndex = index;
      this.stars.forEach(function (star, starIndex) {
        if (_this3.lastIndex !== _this3.activeIndex) {
          star.checked = index >= starIndex;
        } else {
          star.checked = false;
          _this3.lastIndex = -1;
          _this3.activeIndex = -1;
        } //reset animation


        star.parentElement.classList.remove(_this3.clickedAnimClass);
      });
    }
  }]);

  return StarRating;
}();

exports.default = StarRating;
},{}],"js/classes/ClearForm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ClearForm =
/*#__PURE__*/
function () {
  function ClearForm() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      formSelector: "",
      clearBtnSelector: "",
      blackList: []
    };

    _classCallCheck(this, ClearForm);

    this.formSelector = params.formSelector;
    this.form = null;
    this.clearBtnSelector = params.clearBtnSelector;
    this.clearBtn = null;
    this.blackList = params.blackList;
  }

  _createClass(ClearForm, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.form = document.querySelector(this.formSelector);
      this.clearBtn = document.querySelector(this.clearBtnSelector);

      if (this.form) {
        this.clearBtn.addEventListener("click", function (e) {
          return _this.handleClickClearBtn(e);
        });
      }
    }
  }, {
    key: "handleClickClearBtn",
    value: function handleClickClearBtn(e) {
      e.preventDefault();
      this.clearForm();
    }
  }, {
    key: "clearForm",
    value: function clearForm() {
      var _this2 = this;

      var inputs = this.form.querySelectorAll("input");

      if (inputs) {
        inputs.forEach(function (input) {
          var present = _this2.blackList.find(function (className) {
            return input.classList.contains(className);
          });

          if (!present) {
            //not blacklisted so go on
            var type = input.getAttribute("type");

            switch (type) {
              case "text":
                _this2.clearText(input);

                break;

              case "checkBox":
                _this2.clearCheckBox(input);

                break;
            }
          }
        });
      }
    }
  }, {
    key: "clearText",
    value: function clearText(input) {
      input.value = "";
    }
  }, {
    key: "clearCheckBox",
    value: function clearCheckBox(input) {
      input.checked = false;
    }
  }]);

  return ClearForm;
}();

exports.default = ClearForm;
},{}],"js/index.js":[function(require,module,exports) {
"use strict";

require("../css/index.scss");

var _HamburgerNav = _interopRequireDefault(require("./classes/HamburgerNav"));

var _StarRating = _interopRequireDefault(require("./classes/StarRating"));

var _ClearForm = _interopRequireDefault(require("./classes/ClearForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var init = function init() {
  var hamBurger = new _HamburgerNav.default({
    navSelector: ".filterHolder",
    navOpenBtn: ".filterbtn",
    navCloseBtn: ".filterbtn"
  });
  hamBurger.init();
  var starRating = new _StarRating.default({
    starsHolderSelector: ".starRatingHolder",
    clickedAnimClass: "clicked"
  });
  starRating.init();
  var clearFilter = new _ClearForm.default({
    formSelector: ".filterHolder",
    clearBtnSelector: ".clearFilters",
    blackList: []
  });
  clearFilter.init();
};

init();
},{"../css/index.scss":"css/index.scss","./classes/HamburgerNav":"js/classes/HamburgerNav.js","./classes/StarRating":"js/classes/StarRating.js","./classes/ClearForm":"js/classes/ClearForm.js"}],"../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54394" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map