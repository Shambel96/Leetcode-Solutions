/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
   const freq = {};

  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  const lucky = Object.keys(freq)
    .map(Number)
    .filter(num => freq[num] === num);


  return lucky.length > 0 ? Math.max(...lucky) : -1;
}