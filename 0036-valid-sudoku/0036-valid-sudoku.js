/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = new Array(9).fill(0).map(() => new Set());
    let cols = new Array(9).fill(0).map(() => new Set());
    let boxes = new Array(9).fill(0).map(() => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let val = board[i][j];

            if (val === ".") continue;  // skip empty cells

            // Row check
            if (rows[i].has(val)) return false;
            rows[i].add(val);

            // Column check
            if (cols[j].has(val)) return false;
            cols[j].add(val);

            // Box check
            let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            if (boxes[boxIndex].has(val)) return false;
            boxes[boxIndex].add(val);
        }
    }

    return true;
};
