/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
	var res = []
	people.sort(function(a,b){
		if(b[0]==a[0]){
			return a[1] - b[1]
		}else{
			return b[0] - a[0]
		}
	})
	for(var p of people){
		res.splice(p[1],0,p)
	}
	return res
};