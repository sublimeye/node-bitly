'use strict';

var expect = require('chai').expect;

var Bitly = require('../');
var config = require('./config.json');

describe('Bitly Module', function () {

  describe('Default setup', function () {

    var bitly;

    beforeEach(function () {
      bitly = new Bitly(config.apiToken);
    });

    it('should create a Bitly API object', function () {
      expect(bitly).to.have.property('config');
      expect(bitly).to.have.deep.property('config.access_token').and.to.equal(config.apiToken);
      expect(bitly).to.have.deep.property('config.format').and.to.equal('json');
      expect(bitly).to.have.deep.property('config.api_url').and.to.equal('api-ssl.bitly.com');
      expect(bitly).to.have.deep.property('config.api_version').and.to.equal('v3');
      expect(bitly).to.have.deep.property('config.domain').and.to.equal('bit.ly');
    });
  });

  describe('Optional config setup', function () {

    var bitly;

    beforeEach(function () {
      bitly = new Bitly(config.apiToken, {
        format: 'xml',
        api_url: 'api-ssl-v4.bitly.com',
        api_version: 'v4',
        domain: 'example.com'
      });
    });

    it('should create a Bitly API object', function () {
      expect(bitly).to.have.property('config');
      expect(bitly).to.have.deep.property('config.access_token').and.to.equal(config.apiToken);
      expect(bitly).to.have.deep.property('config.format').and.to.equal('xml');
      expect(bitly).to.have.deep.property('config.api_url').and.to.equal('api-ssl-v4.bitly.com');
      expect(bitly).to.have.deep.property('config.api_version').and.to.equal('v4');
      expect(bitly).to.have.deep.property('config.domain').and.to.equal('example.com');
    });
  });
});