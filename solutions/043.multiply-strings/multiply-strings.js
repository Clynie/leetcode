/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  var a = num1.split('')
  var b = num2.split('')
  var len = a.length + b.length
  var size1 = a.length - 1
  var size2 = b.length - 1
  if(a[0]==0||b[0]==0){
    return '0'
  }
  var sum = new Array(len)
  sum.fill(0)
  for(var i = size1;i >= 0;i--){
    for(var j = size2;j >= 0;j--){
      var k = size1 - i + size2 - j
      sum[k] += a[i]*b[j]
      sum[k+1] += (sum[k]-sum[k]%10)/10
      sum[k] %= 10
    }
  }
  if(!sum[sum.length-1]){
     sum.pop()
   }
  return sum.reverse().join("")
};