var knock = require('knock-knock-jokes')
var oneLine = require('one-liner-joke')

var knockers = knock()
var getRandomJoke =   oneLine.getRandomJoke().body;
function getRandomJokeWithTag(tag) {
  return oneLine.getRandomJokeWithTag(tag).body
}


module.exports.knockers = knockers
module.exports.getRandomJoke = getRandomJoke
module.exports.getRandomJokeWithTag = getRandomJokeWithTag