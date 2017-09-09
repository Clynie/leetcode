/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
	var arrPaths = paths.map(it => it.split(' '))
	var map = {}
	arrPaths.forEach(arr => {
		for(var i = 1;i < arr.length;i++){
			[fileName,content] = arr[i].split(/[\(\)]/)
			if(map[content] !== undefined){
				map[content].push(arr[0]+'/'+fileName)
			}else{
				map[content] = [arr[0]+'/'+fileName]
			}
		}
	})

	var res = []
	for(var key in map){
		if(map[key].length > 1){
			res.push(map[key])
		}
	}
	return res
};