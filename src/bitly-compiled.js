'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _q = require('q');

var _q2 = _interopRequireDefault(_q);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var Bitly = function Bitly(clientId, clientSecret, accessToken, options) {
  _classCallCheck(this, Bitly);

  this.clientId = clientId;
  this.clientSecret = clientSecret;
  this.accessToken = accessToken;
  this.options = options || {
    format: 'json',
    api_url: 'api-ssl.bit.ly',
    api_version: 'v3',
    domain: 'bit.ly'
  };
};

exports['default'] = Bitly;
module.exports = exports['default'];

//# sourceMappingURL=bitly-compiled.js.map