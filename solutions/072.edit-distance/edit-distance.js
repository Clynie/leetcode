/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
	var len1 = word1.length
	var len2 = word2.length
	var dp = new Array(len1+1).fill(0).map((it,i) => [])
	
	for(var i = 0;i <=len1;i++){
		dp[i][0] = i
	}

	for(var i = 0;i<=len2;i++){
		dp[0][i] = i
	}

	for(var i =1;i<=len1;i++){
		for(var j=1;j<=len2;j++){
			var insertion = dp[i][j-1] + 1
			var deletion = dp[i-1][j] + 1
			var replace = dp[i-1][j-1] + (word1[i-1] == word2[j-1] ? 0 : 1)
			dp[i][j] = Math.min(insertion,deletion,replace)
		}
	}

	return dp[len1][len2]
};