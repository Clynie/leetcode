/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    var result = new Set(candies).size
	return Math.min(result,candies.length/2)
};