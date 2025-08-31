/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  const rows = Array.from({ length: 9 }, () => new Set());
  const cols = Array.from({ length: 9 }, () => new Set());
  const boxes = Array.from({ length: 9 }, () => new Set());
  const empties = [];

  const boxId = (r, c) => Math.floor(r / 3) * 3 + Math.floor(c / 3);

  // Initialize sets and collect empty cells
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const v = board[r][c];
      if (v === ".") {
        empties.push([r, c]);
      } else {
        const b = boxId(r, c);
        // If the initial board is invalid, you could early-return here
        rows[r].add(v);
        cols[c].add(v);
        boxes[b].add(v);
      }
    }
  }

  // Backtracking
  const dfs = (k) => {
    if (k === empties.length) return true; // solved

    const [r, c] = empties[k];
    const b = boxId(r, c);

    for (let d = 1; d <= 9; d++) {
      const ch = String(d);
      if (!rows[r].has(ch) && !cols[c].has(ch) && !boxes[b].has(ch)) {
        board[r][c] = ch;
        rows[r].add(ch); cols[c].add(ch); boxes[b].add(ch);

        if (dfs(k + 1)) return true;

        // backtrack
        board[r][c] = ".";
        rows[r].delete(ch); cols[c].delete(ch); boxes[b].delete(ch);
      }
    }
    return false;
  };

  dfs(0);
};
