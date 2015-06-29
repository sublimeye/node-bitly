'use strict';

export function expand (Bitly) {
  /**
   * Expand a URL, hash or mixed array
   * @param {string|Array} items
   * @param callback
   * @returns {*|promise}
   */
  return (items, callback) => {
    var query = {
      access_token: Bitly.accessToken,
      format: Bitly.format
    };

    if (typeof items === 'string') {
      var type = (Bitly.urlCheck(items)) ? 'shortUrl' : 'hash';
      query[type] = items;
    } else {
      Bitly.sortUrlAndHashes(items, query);
    }

    return Bitly.doRequest(query, 'expand', callback);
  }
}