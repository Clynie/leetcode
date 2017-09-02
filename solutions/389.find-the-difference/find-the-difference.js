/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var sSum = 0
	var tSum = 0
	for(var i = 0;i<s.length;i++){
		sSum += s.charCodeAt(i)
	}
	for(var i = 0;i<t.length;i++){
		tSum += t.charCodeAt(i)
	}
	return String.fromCharCode(tSum-sSum)
};