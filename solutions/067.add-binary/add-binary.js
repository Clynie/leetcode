/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var i = a.length - 1
  var j = b.length - 1
  var carry = 0
  var r = ''
  while(i >= 0||j >= 0){
    var n1 = a[i] === undefined ? 0 : +a[i]
    i--
    var n2 = b[j] === undefined ? 0 : +b[j]
    j--
    var sum = n1+n2+carry
    carry = sum > 1? 1 : 0
    sum = sum > 1?sum - 2:sum

    r = sum + r
  }
  if(carry){
    r = '1' + r
  }
  return r
};