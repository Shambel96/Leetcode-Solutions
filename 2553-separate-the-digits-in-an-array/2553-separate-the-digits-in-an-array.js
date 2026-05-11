/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
return nums.flatMap(num => String(num).split('').map(Number));    
};