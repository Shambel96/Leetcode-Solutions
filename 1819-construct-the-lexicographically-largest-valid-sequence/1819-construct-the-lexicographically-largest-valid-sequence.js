/**
 * @param {number} n
 * @return {number[]}
 */
var constructDistancedSequence = function(n) {
    const length = 2 * n - 1;
    const result = new Array(length).fill(0);
    const used = new Array(n + 1).fill(false);

    function backtrack(index) {
        if (index === length) return true;

        if (result[index] !== 0) return backtrack(index + 1);

        for (let num = n; num >= 1; num--) {
            if (used[num]) continue;

            if (num === 1) {
                result[index] = 1;
                used[1] = true;

                if (backtrack(index + 1)) return true;

                result[index] = 0;
                used[1] = false;
            } else {
                let j = index + num;

                if (j < length && result[index] === 0 && result[j] === 0) {
                    result[index] = result[j] = num;
                    used[num] = true;

                    if (backtrack(index + 1)) return true;

                    result[index] = result[j] = 0;
                    used[num] = false;
                }
            }
        }

        return false;
    }

    backtrack(0);
    return result;
};
