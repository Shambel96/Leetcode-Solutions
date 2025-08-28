/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var sortMatrix = function(grid) {
    let n = grid.length;
    let diagonals = new Map();

    // Step 1: Collect diagonals
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let key = i - j;
            if (!diagonals.has(key)) diagonals.set(key, []);
            diagonals.get(key).push(grid[i][j]);
        }
    }

    // Step 2: Sort diagonals
    for (let [key, arr] of diagonals) {
        if (key >= 0) {
            arr.sort((a, b) => b - a); // descending
        } else {
            arr.sort((a, b) => a - b); // ascending
        }
        diagonals.set(key, arr);
    }

    // Step 3: Reconstruct grid
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let key = i - j;
            grid[i][j] = diagonals.get(key).shift();
        }
    }

    return grid;
};
