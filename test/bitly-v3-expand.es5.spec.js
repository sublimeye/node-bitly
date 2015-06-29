'use strict';

var Bitly = require('./../lib/bitly.js');

var bitly = new Bitly('7936f7aaa43f116baf6a0748d356841cf192eeb8');

var tests = {
  'Expand for single short url': function(test) {
    bitly.expand('http://bit.ly/9lCnZ9').then(function(result) {
      test.deepEqual(result.status_code, 200);
      test.done();
    }, function(error) {
      test.ifError(error);
      test.done();
    });
  },

  'Expand for single hash': function(test) {
    bitly.expand('6uBruH').then(function(result) {
      test.deepEqual(result.status_code, 200);
      test.done();
    }, function(error) {
      test.ifError(error);
      test.done();
    });
  },

  'Expand for mixed url and hash': function(test) {
    bitly.expand(['http://bit.ly/9lCnZ9', '6uBruH']).then(function(result) {
      test.deepEqual(result.status_code, 200);
      test.done();
    }, function(error) {
      test.ifError(error);
      test.done();
    });
  }
};

module.exports = tests;