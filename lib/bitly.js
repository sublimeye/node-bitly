'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _q = require('q');

var _q2 = _interopRequireDefault(_q);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _methods = require('./methods');

var methods = _interopRequireWildcard(_methods);

var Bitly = (function () {
  /**
   * Constructor for the Bitly class
   * @param {string} accessToken Oauth access token
   * @param {string=} customDomain Domain for URL shortening, defaults to bitly.com
   * @param {string=} format Format for the return value, defaults to json
   */

  function Bitly(accessToken) {
    var customDomain = arguments[1] === undefined ? 'bitly.com' : arguments[1];
    var format = arguments[2] === undefined ? 'json' : arguments[2];

    _classCallCheck(this, Bitly);

    this.apiUrl = 'api-ssl.bitly.com';
    this.apiVersion = 'v3';

    this.format = format;
    this.accessToken = accessToken;
    this.domain = customDomain;

    this.urlCheckRegexp = new RegExp();
    this.urlCheckRegexp.compile('^[A-Za-z]+://[A-Za-z0-9-_]+\\.[A-Za-z0-9-_%&\\?/.=]+$');

    this.clicks = methods.clicks(this);
    this.expand = methods.expand(this);
    this.shorten = methods.shorten(this);
  }

  _createClass(Bitly, [{
    key: 'generateQueryUrl',

    /**
     * Generates a url for Bitly requests
     * @param query
     * @param method
     * @returns {string}
     */
    value: function generateQueryUrl(query, method) {

      return _url2['default'].parse(_url2['default'].format({
        protocol: 'https',
        hostname: this.apiUrl,
        pathname: '/' + this.apiVersion + '/' + method,
        query: query
      }));
    }
  }, {
    key: 'urlCheck',
    value: function urlCheck(urlToCheck) {
      return this.urlCheckRegexp.test(urlToCheck);
    }
  }, {
    key: 'sortUrlAndHashes',
    value: function sortUrlAndHashes(items, query) {
      var shortUrl = [];
      var hash = [];
      var i = 0,
          j = items.length;
      for (; i < j; i++) {
        if (this.urlCheck(items[i])) {
          shortUrl.push(items[i]);
        } else {
          hash.push(items[i]);
        }
      }
      if (shortUrl.length > 0) query.shortUrl = shortUrl;
      if (hash.length > 0) query.hash = hash;
    }
  }, {
    key: 'doRequest',

    /**
     * Function to execute the request to the Bitly URl
     * @param query
     * @param method
     * @param callback
     * @returns {*|promise}
     */
    value: function doRequest(query, method, callback) {

      var deferred = undefined;

      if (!callback) deferred = _q2['default'].defer();

      (0, _request2['default'])(this.generateQueryUrl(query, method), { json: this.format === 'json' }, function (error, clientResponse, body) {
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
  }]);

  return Bitly;
})();

exports['default'] = Bitly;
module.exports = exports['default'];
//# sourceMappingURL=bitly.js.map