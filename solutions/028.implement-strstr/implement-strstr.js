/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!needle) {
        return 0
    }
    if (!haystack || haystack.length < needle.length) {
        return -1
    }
    var i = 0
    var j = 0
    var T = getNext(needle)
    while(i < haystack.length && j < needle.length) {
        if(j == -1 || haystack[i] == needle[j]) {
            i++
            j++
        }else {
            j = T[j]
        }
    }
    if(j == needle.length){
        return i - j
    } 
    return -1
};

function getNext(str) {
    var next = [-1]
    var k = -1
    var j = 0
    while(j < str.length - 1) {
        if(k == -1 || str[j] == str[k]){
            k++
            j++
            next[j] = k
        }else {
            k = next[k]
        }
    }
    return next
};


