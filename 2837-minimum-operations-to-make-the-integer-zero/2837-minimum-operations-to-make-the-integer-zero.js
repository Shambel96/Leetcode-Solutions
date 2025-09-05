/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var makeTheIntegerZero = function(num1, num2) {
    for (let k = 1; k <= 60; k++) {
        let S = num1 - k * num2;
        if (S < 0) continue;
        let bits = S.toString(2).split("1").length - 1; // popcount
        if (bits <= k && k <= S) {
            return k;
        }
    }
    return -1;
};
