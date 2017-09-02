/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function(N) {
	var count = 0
	if(0 == N) return 0
	helper(N,1,new Array(N+1).fill(0))
	return count

	function helper(N,pos,used){
		debugger
		if(pos>N){
			count++
			return
		}
		for(var i = 1;i <= N;i++){
			if(used[i] == 0 && (i % pos == 0 || pos % i == 0)){
				used[i] = 1
				helper(N,pos+1,used)
				used[i] = 0
			}
		}
	}    
};