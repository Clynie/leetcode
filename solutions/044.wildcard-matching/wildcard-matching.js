/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  var match = new Array(s.length + 1).fill(1).map(it => new Array(p.length + 1).fill(false))
  match[s.length][p.length] = true
  for(var i = p.length - 1;i >= 0; i--){
    if(p[i] != '*'){
      break
    }else {
      match[s.length][i] = true
    }
  }
  for(var i =s.length - 1;i >= 0;i--) {
    for(var j = p.length - 1;j >= 0;j--){
      if(s[i] == p[j] || p[j] == '?') {
        match[i][j] = match[i+1][j+1]
      }else if(p[j] == '*') {
        match[i][j] = match[i+1][j] || match[i][j+1]
      }else {
        match[i][j] = false
      }
    }
  }
  return match[0][0]
};