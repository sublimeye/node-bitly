'use strict';

var Bitly = require('./../lib/bitly.js');

var bitly = new Bitly('7936f7aaa43f116baf6a0748d356841cf192eeb8');

var tests = {
  'Creates a Bitly class': function (test) {
    test.equal('7936f7aaa43f116baf6a0748d356841cf192eeb8', bitly.accessToken);
    test.done();
  },

  'Check that a string is a valid URL': function (test) {
    test.ok('http://www.example.com', bitly.urlCheck('http://www.example.com'));
    test.done();
  }
};

module.exports = tests;