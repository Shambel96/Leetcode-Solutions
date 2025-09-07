/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  let res = [];
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    res.push(i, -i);
  }
  if (n % 2 === 1) {
    res.push(0);
  }
  return res;
};
