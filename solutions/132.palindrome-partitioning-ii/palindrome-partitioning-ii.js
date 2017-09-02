/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
  var n = s.length
  var cut = []

  for(var i = 0;i <= n;i++){
    cut[i] = i-1
  }
  for(var i = 0;i < n;i++){
    for(var j = 0; i - j >= 0 && i+j < n && s[i-j] == s[i+j];j++){
      cut[i+j+1] = Math.min(cut[i+j+1],1 + cut[i-j])
    }
    for(var j = 1;i-j+1 >=0 && i+j < n && s[i-j+1] == s[i+j];j++){
      cut[i+j+1] = Math.min(cut[i+j+1],1+cut[i-j+1])
    }
  }
  return cut[n]
};