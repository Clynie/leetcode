/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
	var n = board.length
	if(n == 0) return
	var m = board[0].length
	
	for(var i = 0; i < n;i++) {
		dfs(board,i,0,n,m)
		if(m>1){
			dfs(board,i,m-1,n,m)
		}
	}
	for(var j = 0;j < m; j++) {
		dfs(board,0,j,n,m)
		if(n > 1){
			dfs(board,n-1,j,n,m)
		}
	}
	for(var i = 0;i<n;i++) {
		for(var j = 0; j < m;j++) {
			if(board[i][j] == 'O') board[i][j] = 'X'
		}
	}
	for(var i = 0;i<n;i++) {
		for(var j = 0; j < m;j++) {
			if(board[i][j] == '1') board[i][j] = 'O'
		}
	}
	
}

function dfs(board,i,j,n,m) {
	debugger
	if(board[i][j] == 'O') {
		board[i][j] = '1'
		if(i > 1)  dfs(board,i-1,j,n,m)
		if(j > 1)  dfs(board,i,j-1,n,m)
		if(i+1 < n)  dfs(board,i+1,j,n,m)
		if(j+1 < m)  dfs(board,i,j+1,n,m)
	}
}