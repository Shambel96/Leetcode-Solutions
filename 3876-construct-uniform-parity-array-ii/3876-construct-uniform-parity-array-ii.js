/**
 * @param {number[]} nums1
 * @return {boolean}
 */
var uniformArray = function(nums1) {
     let count0 = 0, count1 = 0;
    let min = Infinity, minIsOdd = false;

    for (const x of nums1) {
        const isOdd = (x & 1) !== 0;      // works correctly even for negatives (two's complement)
        isOdd ? count1++ : count0++;
        if (x < min) { min = x; minIsOdd = isOdd; }
    }

    if (count0 === 0 || count1 === 0) return true; // already uniform — direct assignment works
    return minIsOdd; 
};