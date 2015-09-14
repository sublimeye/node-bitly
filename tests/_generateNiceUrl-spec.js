'use strict';

var expect = require('chai').expect;

var Bitly = require('../');
var config = require('./config.json');

var url = require('url');

describe('Bitly Module', function () {

  describe('_generateNiceURL method', function () {

    var bitly;
    var query;
    var method;

    beforeEach(function () {
      bitly = new Bitly(config.apiToken);

      query = {
        format: bitly.config.format,
        longUrl: 'http://example.com/foobar',
        domain: bitly.config.domain
      };

      method = 'shorten';
    });

    it('should create a URL object that of the passed parameters', function () {
      expect(bitly._generateNiceUrl(query, method)).to.have.property('protocol').and.to.equal('https:');
      expect(bitly._generateNiceUrl(query, method)).to.have.property('hostname').and.to.equal('api-ssl.bitly.com');
      expect(bitly._generateNiceUrl(query, method)).to.have.property('query')
        .and.to.equal('format=json&longUrl=http%3A%2F%2Fexample.com%2Ffoobar&domain=bit.ly&access_token=eb1b99efe83c7d029e7600a6b38e32d1c9c2c6d9');
    });

    it('should create a parseable URL for passing to the bitly API', function () {
      expect(url.format(bitly._generateNiceUrl(query, method)))
        .to.equal('https://api-ssl.bitly.com/v3/shorten?format=json&longUrl=http%3A%2F%2Fexample.com%2Ffoobar&domain=bit.ly&access_token=eb1b99efe83c7d029e7600a6b38e32d1c9c2c6d9')
    });
  });
});