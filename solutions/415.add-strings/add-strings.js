/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  var a = num1.split('')
  var b = num2.split('')
  var len = a.length>b.length?a.length+1:b.length+1
  var sum = new Array(len).fill(0)
  var ta,tb
  for(var k=len-1,i=a.length-1,j=b.length-1;k>0;k--,i--,j--){
    debugger
    ta = a[i] === undefined ? 0 : +a[i]
    tb = b[j] === undefined ? 0 : +b[j]
    t = ta + tb + sum[k]
    sum[k] = t % 10
    sum[k-1] += (t - sum[k]) / 10
  }
  while (sum[0] === 0) {
    sum.shift()
  }
  if (sum.length == 0) {
    sum = [0]
  }
  return sum.join('')
};