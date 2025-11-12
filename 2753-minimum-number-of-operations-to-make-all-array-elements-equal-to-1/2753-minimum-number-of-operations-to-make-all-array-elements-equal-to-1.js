/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const n = nums.length;

    let ones = nums.filter(num => num === 1).length;
    if (ones > 0) return n - ones;

    
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

    let minLen = Infinity;

    for (let i = 0; i < n; i++) {
        let g = nums[i];
        for (let j = i + 1; j < n; j++) {
            g = gcd(g, nums[j]);
            if (g === 1) {
                minLen = Math.min(minLen, j - i + 1);
                break;
            }
        }
    }

    if (minLen === Infinity) return -1;

    return (minLen - 1) + (n - 1);
};
