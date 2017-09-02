/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  var r = x
  while(r*r > x){
  	debugger
    r = parseInt((r+x/r)/2)
  }
  return r
};