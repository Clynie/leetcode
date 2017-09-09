/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
	var count = 0,oldEnd = 0
	for(var i = 0;i < timeSeries.length;i++){
		debugger
		var newEnd = timeSeries[i]+duration
		if(newEnd > oldEnd){
			count += Math.min(duration,newEnd-oldEnd)
			oldEnd = newEnd
		}
	}
	return count
};