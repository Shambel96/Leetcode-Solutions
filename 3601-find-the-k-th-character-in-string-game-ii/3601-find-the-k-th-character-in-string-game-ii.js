/**
 * @param {number} k
 * @param {number[]} operations
 * @return {character}
 */
var kthCharacter = function(k, operations) {
 function nextChar(c) {
    return c === 'z' ? 'a' : String.fromCharCode(c.charCodeAt(0) + 1);
  }

  function dfs(opIndex, k) {
    if (opIndex < 0) return 'a'; // initial string is "a"

    const prevLength = lengths[opIndex];
    const op = operations[opIndex];

    if (op === 0) {
      const half = prevLength;
      if (k <= half) {
        return dfs(opIndex - 1, k);
      } else {
        return dfs(opIndex - 1, k - half);
      }
    } else if (op === 1) {
      const half = prevLength;
      if (k <= half) {
        return dfs(opIndex - 1, k);
      } else {
        const ch = dfs(opIndex - 1, k - half);
        return nextChar(ch);
      }
    }
  }

  // Precompute the lengths after each operation
  const lengths = [1]; // Initial string length is 1

  for (let i = 0; i < operations.length; i++) {
    const last = lengths[lengths.length - 1];
    if (last >= k) {
      lengths.push(k); // No need to grow past k
    } else {
      lengths.push(Math.min(2 * last, k));
    }
  }

  return dfs(operations.length - 1, k);
}