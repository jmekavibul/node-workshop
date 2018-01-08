function upperCase(string) {
    return string.toUpperCase();
  }
  function quotes(str) {
    return ('"' + str + '"')
  }
  
  function multiplier(str, x) {
    ret = ''
    while (x > 0) {
      ret += str
      x--;
    }
    return ret
  }
  
  
  module.exports.upperCase = upperCase
  module.exports.quotes = quotes
  module.exports.multiplier = multiplier