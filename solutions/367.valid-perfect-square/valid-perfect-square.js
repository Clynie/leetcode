/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = num => {
    let low = 1, high = num;
    while (low <= high) {
        const mid = low + Math.floor((high-low)/2);
        if (mid * mid === num) {
            return true;
        } else if (mid * mid < num) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    
    return false;
};