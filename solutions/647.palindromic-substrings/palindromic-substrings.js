/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    var count = 0
	if(s.length == 0 ) return 0
	for(var i = 0;i < s.length;i++){
		checkPalindrome(s,i,i)
		checkPalindrome(s,i,i+1)
	}
	return count

	function checkPalindrome(s,i,j) {
		while(i >= 0 && j< s.length && s[i] === s[j]){
			count++
			i--
			j++
		}
	}
};