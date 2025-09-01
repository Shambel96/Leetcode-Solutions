/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    let orVal = 0;
    for (let num of nums) {
        orVal |= num; // take OR of all numbers
    }
    return orVal * (1 << (nums.length - 1));
};
