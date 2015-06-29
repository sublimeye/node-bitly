'use strict';

import q from 'q';
import url from 'url'
import Request from 'request';

import * as methods from './methods';

class Bitly {
  /**
   * Constructor for the Bitly class
   * @param {string} accessToken Oauth access token
   * @param {string=} customDomain Domain for URL shortening, defaults to bitly.com
   * @param {string=} format Format for the return value, defaults to json
   */
  constructor (accessToken, customDomain = 'bitly.com', format = 'json') {

    this.apiUrl =  'api-ssl.bitly.com';
    this.apiVersion = 'v3';

    this.format = format;
    this.accessToken = accessToken;
    this.domain = customDomain;

    this.urlCheckRegexp = new RegExp();
    this.urlCheckRegexp.compile('^[A-Za-z]+://[A-Za-z0-9-_]+\\.[A-Za-z0-9-_%&\\?\/.=]+$');

    this.clicks = methods.clicks(this);
    this.expand = methods.expand(this);
    this.shorten = methods.shorten(this);
  }

  /**
   * Generates a url for Bitly requests
   * @param query
   * @param method
   * @returns {string}
   */
  generateQueryUrl (query, method) {

    return url.parse(
      url.format({
        protocol: 'https',
        hostname: this.apiUrl,
        pathname: '/' + this.apiVersion + '/' + method,
        query: query
      })
    );
  }

  urlCheck (urlToCheck) {
    return this.urlCheckRegexp.test(urlToCheck);
  }

  sortUrlAndHashes (items, query) {
    let shortUrl = [];
    let hash = [];
    let i = 0, j = items.length;
    for(; i < j; i++) {
      if (this.urlCheck(items[i])) {
        shortUrl.push(items[i]);
      } else {
        hash.push(items[i]);
      }
    }
    if (shortUrl.length > 0) query.shortUrl = shortUrl;
    if (hash.length > 0) query.hash = hash;
  }

  /**
   * Function to execute the request to the Bitly URl
   * @param query
   * @param method
   * @param callback
   * @returns {*|promise}
   */
  doRequest(query, method, callback) {

    let deferred;

    if (!callback) deferred = q.defer();

    Request(
      this.generateQueryUrl(query, method),
      {json: this.format === 'json'},
      (error, clientResponse, body) => {
        if (error) {
          return callback ? callback(error) : deferred.reject(error);
        }

        if (body.status_code !== 200) {
          error = new Error(body.status_txt);
          error.code = body.status_code;

          return callback ? callback(error) : deferred.reject(body);
        }

        return callback ? callback(null, body) : deferred.resolve(body);
      });
    return deferred && deferred.promise;
  }
}

export default Bitly;