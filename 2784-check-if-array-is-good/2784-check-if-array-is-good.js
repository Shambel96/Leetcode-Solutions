/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    const n = nums.length - 1;
    return JSON.stringify(nums.slice().sort((a, b) => a - b)) === 
           JSON.stringify([...Array(n).keys()].map(i => i + 1).concat(n));
};