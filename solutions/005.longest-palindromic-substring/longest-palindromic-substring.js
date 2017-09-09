/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s === "") {
    return "";
  }
  if (s.length === 1) {
    return s;
  }
  debugger
  var min_start = 0;
  var max_len = 1;
  for (let i = 0; i < s.length;) {
    if (s.length - i <= max_len / 2) {
      break;
    }
    var j = i,
      k = i;
    while (k < s.length - 1 && s[k + 1] === s[k]) {
      k++; //去掉重复的
    }
    i = k + 1;
    while (k < s.length - 1 && j > 0 && s[k + 1] === s[j - 1]) {
      k++;
      j--;
    }
    var new_len = k - j + 1;
    if (new_len > max_len) {
      min_start = j;
      max_len = new_len;
    }
  }
  return s.substr(min_start, max_len)
};