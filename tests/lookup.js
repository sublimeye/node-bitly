var Bitly = require(__dirname + '/../bitly');

console.log('Running test: Lookup');

var bitly = new Bitly('<YOUR USERNAME>', '<YOUR API KEY>');

bitly.lookup(['http://tanepiper.com', 'http://node.js'], function(result) {
  console.log(result);
});

