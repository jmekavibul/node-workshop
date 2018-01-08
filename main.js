var flags = require('flags')
var jokeHandler = require('./jokeHandler.js')
var util = require('./util.js')

flags.defineString('jokeType')
flags.defineBoolean('upperCase')
flags.defineBoolean('quotes')
flags.defineInteger('numberOfJokes')

flags.parse()

var jokeType=flags.get('jokeType')
var printout = ''

if (jokeType == 'knockknock') {
    printout = jokeHandler.knockers
}
else if (jokeType == 'oneliner') {
    printout = jokeHandler.getRandomJoke
}

else if (jokeType == 'onelinerwithtag') {
    printout = jokeHandler.getRandomJokeWithTag('stupid')
}
  
if (flags.get('upperCase') == true) {
    printout = util.upperCase(printout)
}

if (flags.get('quotes') == true ) {
    printout = util.quotes(printout)
}

if (flags.get('numberOfJokes') != null) {
    printout = util.multiplier(printout, flags.get('numberOfJokes'))
}
  
  console.log(printout)