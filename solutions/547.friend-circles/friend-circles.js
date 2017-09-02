/**
 * @param {number[][]} M
 * @return {number}
 */

var findCircleNum = function(M) {
	var n = M.length,res = n
	var root = new Array(n).fill(0).map((v,i) => i)
	for(var i =0;i < n;i++) {
		for(var j = i+1;j < n;j++) {
			if(M[i][j] == 1){
				var p1 = getRoot(root,i)
				var p2 = getRoot(root,j)
				if(p1 !== p2){
					--res
					root[p2] = p1
				}
			}
		}
	}
	return res
}

function getRoot(root,i){
	while(i != root[i]) {
		root[i] = root[root[i]]
		i = root[i]
	}
	return i
}