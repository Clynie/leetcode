/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
	var res = 0
	for(var i = 0,n=grid.length;i<n;i++){
		for(var j = 0,m=grid[0].length;j<m;j++){
			if(grid[i][j] == 1){
				if(i==0 || grid[i-1][j] == 0) res++
				if(i==n-1 || grid[i+1][j] == 0) res++
				if(j == 0|| grid[i][j-1] == 0) res++
				if(j==m-1|| grid[i][j+1] == 0) res++
			}
		}
	}
	return res
};