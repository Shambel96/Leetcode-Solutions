/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  const map = new Map();
  let maxLength = 0;

  // Count frequencies
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // Check for harmonious pairs
  for (let [key, value] of map) {
    if (map.has(key + 1)) {
      const length = value + map.get(key + 1);
      maxLength = Math.max(maxLength, length);
    }
  }

  return maxLength;
};
