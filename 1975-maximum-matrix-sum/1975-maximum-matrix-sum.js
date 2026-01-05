/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
    let sum = 0;
    let minAbs = Infinity;
    let negativeCount = 0;

    for (let row of matrix) {
        for (let val of row) {
            if (val < 0) negativeCount++;
            let absVal = Math.abs(val);
            sum += absVal;
            minAbs = Math.min(minAbs, absVal);
        }
    }

    if (negativeCount % 2 === 1) {
        sum -= 2 * minAbs;
    }

    return sum;
};
