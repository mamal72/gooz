'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_OPTIONS = {
  features: ['addEventListener', 'SVGElement', 'CanvasRenderingContext2D', 'localStorage'],
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
    var options = arguments.length <= 0 || arguments[0] === undefined ? DEFAULT_OPTIONS : arguments[0];

    _classCallCheck(this, Gooz);

    if (!options.globalObject) {
      throw new TypeError('No window object detected! :O Am I in a browser?!');
    }
    this._options = options;
    if (options.redirect) {
      this.redirect();
    }
  }

  /**
   * Check if the browser is gooz or goozoo
   * @return {Boolean} goozooish status
   */


  _createClass(Gooz, [{
    key: 'isGooz',
    value: function isGooz() {
      return this._options.features.some(function (feature) {
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
