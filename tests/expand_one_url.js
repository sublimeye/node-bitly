var Bitly = require(__dirname + '/../bitly');

console.log('Running test: Expand Url');

var bitly = new Bitly('<YOUR USERNAME>', '<YOUR API KEY>');

bitly.expand(['http://bit.ly/9lCnZ9'], function(result) {
  console.dir(result);
});

