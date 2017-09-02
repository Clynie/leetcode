/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
	var q = new Array(n)
	var count = 0
	DFS(n,0)
	return count

	//DFS
	function DFS(n,i){
		debugger
		if(i == n){
			count++
		}else{
			debugger
			for(var j = 0; j < n; j++){
				if(isValid(i,j)){
					q[i] = j
					DFS(n,i+1)
				}
			}
		}
	}

	//检查第i行的第j列上是否可以摆放皇后
	function isValid(i,j) {
		//从1到 i - 1 行已经放置了皇后
		for(var k = 0; k < i; k++) {
			debugger
			if(q[k] == j || Math.abs(k - i) == Math.abs(q[k]-j)){
				return 0
			}
		}
		return 1
	}    
};