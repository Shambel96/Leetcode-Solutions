/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const triangle = [];

  for (let i = 0; i < numRows; i++) {
    const row = [1]; // every row starts with 1

    // Fill in the values between the first and last 1
    for (let j = 1; j < i; j++) {
      const prevRow = triangle[i - 1];
      row[j] = prevRow[j - 1] + prevRow[j];
    }

    if (i > 0) row.push(1); // every row (except first) ends with 1

    triangle.push(row);
  }

  return triangle;
}