var Gooz =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DEFAULT_FEATURES = ['addEventListener', 'SVGElement', 'CanvasRenderingContext2D', 'localStorage'];
	var DEFAULT_OPTIONS = {
	  globalObject: window,
	  redirect: false,
	  timeout: 3000,
	  uri: 'http://outdatedbrowser.com'
	};

	/**
	 * Main Gooz class
	 */

	var Gooz = function () {
	  function Gooz() {
	    var features = arguments.length <= 0 || arguments[0] === undefined ? DEFAULT_FEATURES : arguments[0];
	    var options = arguments.length <= 1 || arguments[1] === undefined ? DEFAULT_OPTIONS : arguments[1];

	    _classCallCheck(this, Gooz);

	    if (!options.globalObject) {
	      throw new TypeError('No window object detected! :O Am I in a browser?!');
	    }
	    this._features = features;
	    this._options = options;
	  }

	  /**
	   * Check if the browser is gooz or goozoo
	   * @return {Boolean} goozooish status
	   */


	  _createClass(Gooz, [{
	    key: 'isGooz',
	    value: function isGooz() {
	      return this._features.some(function (feature) {
	        return !(feature in window);
	      });
	    }

	    /**
	     * Gooz the browser to redirect uri if it's goozed up
	     */

	  }, {
	    key: 'goozate',
	    value: function goozate() {
	      if (this.isGooz()) {
	        this.redirect();
	      }
	    }

	    /**
	     * Redirect the browser to the right uri in order to tell him about this goozed up status
	     * @param {Object} redirect props { timeout, uri }
	     * @return {Gooz} our Gooz instance
	     */

	  }, {
	    key: 'redirect',
	    value: function redirect() {
	      var props = arguments.length <= 0 || arguments[0] === undefined ? { timeout: this._options.timeout, uri: this._options.uri } : arguments[0];
	      var globalObject = this._options.globalObject;
	      var timeout = props.timeout;
	      var uri = props.uri;

	      setTimeout(function () {
	        globalObject.location = uri;
	      }, timeout);
	      return this;
	    }
	  }]);

	  return Gooz;
	}();

	exports.default = Gooz;
	module.exports = exports['default'];

/***/ }
/******/ ]);