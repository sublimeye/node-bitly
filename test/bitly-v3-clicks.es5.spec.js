'use strict';

var Bitly = require('./../lib/bitly.js');

var bitly = new Bitly('7936f7aaa43f116baf6a0748d356841cf192eeb8');

var tests = {
  'Get clicks for single short url with promise': function(test) {
    bitly.clicks('http://bit.ly/9lCnZ9').then(function(result) {
      test.deepEqual(result.status_code, 200);
      test.done();
    }, function(error) {
      test.ifError(error);
      test.done();
    });
  },

  'Get clicks for single hash with callback': function(test) {

    bitly.clicks('6uBruH', function(error, result) {
      test.ifError(error);
      test.deepEqual(result.status_code, 200);
      test.done();
    });
  },

  'Get clicks for single hash with promise': function(test) {

    bitly.clicks('6uBruH').then(function(result) {
      test.deepEqual(result.status_code, 200);
      test.done();
    }, function(error) {
      test.ifError(error);
      test.done();
    });
  },

  'Get clicks for mixed url and hash with callback': function(test) {

    bitly.clicks(['http://bit.ly/9lCnZ9', '6uBruH'], function(error, result) {
      test.ifError(error);
      test.deepEqual(result.status_code, 200);
      test.done();
    });
  },

  'Get clicks for mixed url and hash with promise': function(test) {

    bitly.clicks(['http://bit.ly/9lCnZ9', '6uBruH']).then(function(result) {
      test.deepEqual(result.status_code, 200);
      test.done();
    }, function(error) {
      test.ifError(error);
      test.done();
    });
  },

  'Get clicks by minute for single short url with callback': function(test) {

    bitly.clicksByMinute('http://bit.ly/9lCnZ9', function(error, result) {
      test.ifError(error);
      test.deepEqual(result.status_code, 200);
      test.done();
    });
  },

  'Get clicks by minute for single short url with promise': function(test) {

    bitly.clicksByMinute('http://bit.ly/9lCnZ9').then(function(result) {
      test.deepEqual(result.status_code, 200);
      test.done();
    }, function(error) {
      test.ifError(error);
      test.done();
    });
  },

  'Get clicks by minute for single hash with callback': function(test) {

    bitly.clicksByMinute('6uBruH', function(error, result) {
      test.ifError(error);
      test.deepEqual(result.status_code, 200);
      test.done();
    });
  },

  'Get clicks by minute for single hash with promise': function(test) {

    bitly.clicksByMinute('6uBruH').then(function(result) {
      test.deepEqual(result.status_code, 200);
      test.done();
    }, function(error) {
      test.ifError(error);
      test.done();
    });
  },

  'Get clicks by minute for mixed url and hash with callback': function(test) {

    bitly.clicksByMinute(['http://bit.ly/9lCnZ9', '6uBruH'], function(error, result) {
      test.ifError(error);
      test.deepEqual(result.status_code, 200);
      test.done();
    });
  },

  'Get clicks by minute for mixed url and hash with promise': function(test) {

    bitly.clicksByMinute(['http://bit.ly/9lCnZ9', '6uBruH']).then(function(result) {
      test.deepEqual(result.status_code, 200);
      test.done();
    }, function(error) {
      test.ifError(error);
      test.done();
    });
  },

  'Get clicks by day for single short url with callback': function(test) {

    bitly.clicksByDay('http://bit.ly/9lCnZ9', function(error, result) {
      test.ifError(error);
      test.deepEqual(result.status_code, 200);
      test.done();
    });
  },

  'Get clicks by day for single short url with promise': function(test) {

    bitly.clicksByDay('http://bit.ly/9lCnZ9').then(function(result) {
      test.deepEqual(result.status_code, 200);
      test.done();
    }, function(error) {
      test.ifError(error);
      test.done();
    });
  },

  'Get clicks by day for single hash with callback': function(test) {

    bitly.clicksByDay('6uBruH', function(error, result) {
      test.ifError(error);
      test.deepEqual(result.status_code, 200);
      test.done();
    });
  },

  'Get clicks by day for single hash with promise': function(test) {

    bitly.clicksByDay('6uBruH').then(function(result) {
      test.deepEqual(result.status_code, 200);
      test.done();
    }, function(error) {
      test.ifError(error);
      test.done();
    });
  },

  'Get clicks by day for mixed url and hash with callback': function(test) {

    bitly.clicksByDay(['http://bit.ly/9lCnZ9', '6uBruH'], function(error, result) {
      test.ifError(error);
      test.deepEqual(result.status_code, 200);
      test.done();
    });
  },

  'Get clicks by day for mixed url and hash with promise': function(test) {

    bitly.clicksByDay(['http://bit.ly/9lCnZ9', '6uBruH']).then(function(result) {
      test.deepEqual(result.status_code, 200);
      test.done();
    }, function(error) {
      test.ifError(error);
      test.done();
    });
  }
};

module.exports = tests;