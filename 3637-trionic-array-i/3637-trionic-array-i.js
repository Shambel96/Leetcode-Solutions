/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isTrionic = function(nums) {
    const n = nums.length;
    if (n < 4) return false;
    let i = 0;
    while (i + 1 < n && nums[i] < nums[i + 1]) {
        i++;
    }
    if (i === 0) return false; 
    let p = i;
    while (i + 1 < n && nums[i] > nums[i + 1]) {
        i++;
    }
    if (i === p) return false; 

    // q = i
    let q = i;
    while (i + 1 < n && nums[i] < nums[i + 1]) {
        i++;
    }
    if (i === q) return false; 
    return i === n - 1;
};
