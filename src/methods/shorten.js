'use strict';

/**
 *
 * @param Bitly
 * @returns {Function}
 */
export function shorten (Bitly) {

  /**
   * @param {string} longUrl
   * @param {Function=} callback
   */
  return (longUrl, callback) => {
    return Bitly.doRequest({
      access_token: Bitly.accessToken,
      format: Bitly.format,
      longUrl: longUrl
    }, 'shorten', callback);
  }
}