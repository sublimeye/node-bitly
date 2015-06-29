'use strict';

var Bitly = require('./../lib/bitly.js');

var bitly = new Bitly('7936f7aaa43f116baf6a0748d356841cf192eeb8');

var tests = {
  'Shortens a URL': function(test) {
    bitly.shorten('https://github.com/tanepiper/node-bitly').then(function(result) {
      test.deepEqual(result.status_code, 200);
      test.done();
    }, function(error) {
      test.ifError(error);
      test.done();
    });
  },
  'Returns an error for an invalid shorted': function (test) {
    bitly.shorten('this is not a url').then(function(result) {
      test.deepEqual(result.status_code, 200);
      test.done();
    }, function(error) {
      test.throws(error);
      test.done();
    });
  }
};

module.exports = tests;