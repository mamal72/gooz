const DEFAULT_OPTIONS = {
  features: ['addEventListener', 'SVGElement', 'CanvasRenderingContext2D', 'localStorage'],
  globalObject: window,
  redirect: false,
  timeout: 3000,
  uri: 'http://outdatedbrowser.com'
};

/**
 * Main Gooz class
 */
export default class Gooz {
  constructor(props) {
    const options = Object.assign({}, DEFAULT_OPTIONS, props);
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
  isGooz() {
    return this._options.features.some(feature => !(feature in window));
  }


  /**
   * Gooz the browser to redirect uri if it's goozed up
   */
  goozate() {
    if (this.isGooz()) {
      this.redirect();
    }
  }


  /**
   * Redirect the browser to the right uri in order to tell him about this goozed up status
   * @param {Object} redirect props { timeout, uri }
   * @return {Gooz} our Gooz instance
   */
  redirect(props = { timeout: this._options.timeout, uri: this._options.uri }) {
    const { globalObject } = this._options;
    const { timeout, uri } = props;
    setTimeout(() => {
      globalObject.location = uri;
    }, timeout);
    return this;
  }

}
