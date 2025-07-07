/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
    function helper(k, current) {
    if (k === 1) return 'a';

    // Find the largest power of 2 less than or equal to k
    let length = 1;
    while (length * 2 < k) {
      length *= 2;
    }

    // Recurse into the first half
    if (k <= length) {
      return helper(k, current);
    } else {
      // It's in the appended (next) half
      let ch = helper(k - length, current);
      return ch === 'z' ? 'a' : String.fromCharCode(ch.charCodeAt(0) + 1);
    }
  }

  return helper(k, 'a');
}