/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
	var res = 0
	if(grid === null){return res}

	for(var i = 0;i < grid.length;i++) {
		for(var j = 0;j < grid[0].length;j++){
			if(grid[i][j] === '1'){
				markSurround(grid,i,j)
				res++
			}
		}
	}
	return res
}

var markSurround = function(grid,x,y) {
	if(x < 0 || x > grid.length - 1|| y < 0|| y > grid[0].length - 1|| grid[x][y] !== '1'){
		return
	}
	grid[x][y] = '0'
	markSurround(grid,x-1,y)
	markSurround(grid,x+1,y)
	markSurround(grid,x,y-1)
	markSurround(grid,x,y+1)
}
