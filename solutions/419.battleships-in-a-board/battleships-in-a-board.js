/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    var count = 0
	for(i in board){
		for(j in board[0]){
			if(board[i][j] == 'X'){
				if(i > 0 && board[i-1][j] == 'X') continue;
				if(j > 0 && board[i][j-1] == 'X') continue;
				count ++
			}	
		}
	}
	return count
};