/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
	var q = new Array(n)
	var count = 0
	var result = []
	DFS(n,0)
	return result.map(qToBoard)

	//DFS
	function DFS(n,i){
		if(i == n){
			count++
			debugger
			result.push(q.slice())
		}else{
			for(var j = 0; j < n; j++){
				debugger
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
			if(q[k] == j || Math.abs(k - i) == Math.abs(q[k]-j)){
				return 0
			}
		}
		return 1
	}

	//位置转换为棋盘
	function qToBoard(ary){
		var res = new Array(ary.length).fill('')
		for(var i in ary){
			for(var j = 0;j < ary.length;j++){
				if(j == ary[i]){
					res[i] += 'Q'
				}else{
					res[i] += '.'
				}
			}
		}
		return res
	}    
};