/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
  // If n is already of the form 2^k - 1 (all bits = 1), we’ll still cover it
  let result = 1;
  while (result - 1 < n) {
    result <<= 1;    // multiply by 2
  }
  return result - 1;
};
