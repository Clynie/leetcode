/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	debugger
    var n = s.length,res = 0
    var map = {}
    for(var i=0,j=0;j<n;j++){
    	if(map[s[j]] !== undefined){
    		i = Math.max(map[s[j]]+1,i)
    	}
    	res = Math.max(res,j-i+1)
    	map[s[j]] = j
    }
    return res
};