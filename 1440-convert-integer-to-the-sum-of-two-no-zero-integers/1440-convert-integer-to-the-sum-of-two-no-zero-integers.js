/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
    for (let A = 1; A < n; A++) {
        const B = n - A;
        if (!A.toString().includes("0") && !B.toString().includes("0")) {
            return [A, B];
        }
    }
    return [];
};