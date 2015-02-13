var assert = require('../assert');

exports.run = () => {
  var html = document.body.innerHTML;
  assert(!!html.match(/burrito/), 'found burrito');
  assert(!!html.match(/tacos/), 'found tacos');
  assert(!!html.match(/tostada/), 'found tostada');
  assert(!html.match(/hush puppies/), 'did not find hush puppies');
  assert(html.indexOf('burrito') < html.indexOf('tacos'), 'burrito first');
  assert(html.indexOf('tacos') < html.indexOf('tostada'), 'tacos second');
};


