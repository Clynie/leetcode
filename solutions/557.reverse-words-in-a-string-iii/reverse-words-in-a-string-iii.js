/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var arr = s.split(' ')
	for(i in arr){
		arr[i] = arr[i].split('').reverse().join('')
	}
	return arr.join(' ')
};