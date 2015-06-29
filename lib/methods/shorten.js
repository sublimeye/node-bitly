'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.shorten = shorten;
/**
 *
 * @param Bitly
 * @returns {Function}
 */

function shorten(Bitly) {

  /**
   * @param {string} longUrl
   * @param {Function=} callback
   */
  return function (longUrl, callback) {
    return Bitly.doRequest({
      access_token: Bitly.accessToken,
      format: Bitly.format,
      longUrl: longUrl
    }, 'shorten', callback);
  };
}
//# sourceMappingURL=../methods/shorten.js.map