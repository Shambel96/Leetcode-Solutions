/**
 * @param {number[][]} queries
 * @return {number}
 */
var minOperations = function(queries) {

  // Prefix sum of steps up to n: F(n) = sum_{x=1..n} steps(x)
  function prefixSteps(n) {
    if (n <= 0) return 0n;
    n = BigInt(n);

    let res = 0n;
    let k = 1n;
    let start = 1n;         // start = 4^(k-1)
    while (start <= n) {
      let end = 4n * start - 1n; // end = 4^k - 1
      if (end > n) end = n;
      const count = end - start + 1n;
      res += count * k;
      start *= 4n;          // next block
      k += 1n;
    }
    return res;
  }

  let totalOps = 0n;
  for (const [l, r] of queries) {
    const sumSteps = prefixSteps(r) - prefixSteps(l - 1);
    // minimal operations = ceil(sumSteps / 2)
    totalOps += (sumSteps + 1n) / 2n;
  }

  // Return a Number for typical constraints; change to totalOps.toString() if you need arbitrary precision output.
  return Number(totalOps);
};
