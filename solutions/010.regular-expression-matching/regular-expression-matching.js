/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  var m = s.length
  var n = p.length
  var dp = new Array(m+1).fill(0).map(it => [])

  dp[0][0] = true

  for(let i = 1;i <= m;i++){
    dp[i][0] = false
  }

  for(let j = 1;j <= n;j++){
    dp[0][j] = j>1 && '*' == p[j-1] && dp[0][j-2]
  }
  debugger
  for(let i=1;i <= m;i++){
    for(let j = 1;j <= n;j++){
      if(p[j-1] != '*'){
        dp[i][j] = dp[i-1][j-1] && (s[i-1] == p[j-1] || '.' == p[j-1])
      }else{
        dp[i][j] = dp[i][j-2] || (s[i-1] == p[j-2] || '.' == p[j-2]) && dp[i-1][j]
      }
    }
  }

  return dp[m][n]
};