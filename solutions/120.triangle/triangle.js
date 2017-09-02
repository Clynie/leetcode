/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  var len = triangle.length
  var minlen = triangle[len - 1]
  for(var i = len - 2; i >= 0; i--) {
    debugger
    for(var j = 0; j <= i;j++) {
      minlen[j] = Math.min(minlen[j],minlen[j+1]) + triangle[i][j]
    }
  }
  return minlen[0]
};