/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {
    const n = mat.length;

    // it helps us to rotate matrix 90 degrees
    function rotate(matrix) {
        const newMat = Array.from({ length: n }, () => Array(n).fill(0));

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                newMat[j][n - 1 - i] = matrix[i][j];
            }
        }
        return newMat;
    }

    // it helps us to compare matrices
    function isEqual(a, b) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (a[i][j] !== b[i][j]) return false;
            }
        }
        return true;
    }

    // we try all 4 rotations
    for (let k = 0; k < 4; k++) {
        if (isEqual(mat, target)) return true;
        mat = rotate(mat);
    }

    return false;
};