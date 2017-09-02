/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  var sum = 0
  for(var i =0,len = s.length;i < len;i++){
    sum += (s.charCodeAt(i) - 64)*(26**(len-i-1))
  }
  return sum
};