/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  for(var i = 0,len = s.length;i < len; i++){
    if(s.lastIndexOf(s[i]) == i && s.indexOf(s[i]) == i){
      return i
      break
    }
  }
  return -1
};