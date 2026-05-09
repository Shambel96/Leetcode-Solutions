
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var rotateGrid = function(grid, k) {
    const m = grid.length, n = grid[0].length;
    const numLayers = Math.min(m, n) / 2;

    for (let layer = 0; layer < numLayers; layer++) {
     
        const elements = [];
        const top = layer, bottom = m - 1 - layer;
        const left = layer, right = n - 1 - layer;

        // Top row: left → right
        for (let c = left; c <= right; c++)       elements.push(grid[top][c]);
        // Right col: top+1 → bottom
        for (let r = top + 1; r <= bottom; r++)   elements.push(grid[r][right]);
        // Bottom row: right-1 → left
        for (let c = right - 1; c >= left; c--)   elements.push(grid[bottom][c]);
        // Left col: bottom-1 → top+1
        for (let r = bottom - 1; r >= top + 1; r--) elements.push(grid[r][left]);

        // ── 2. Rotate left by k (counter-clockwise shift) ─────────────────
        const len = elements.length;
        const shift = k % len;
        const rotated = [...elements.slice(shift), ...elements.slice(0, shift)];

        // ── 3. Write back in the same CW traversal order ──────────────────
        let i = 0;
        for (let c = left; c <= right; c++)         grid[top][c]    = rotated[i++];
        for (let r = top + 1; r <= bottom; r++)     grid[r][right]  = rotated[i++];
        for (let c = right - 1; c >= left; c--)     grid[bottom][c] = rotated[i++];
        for (let r = bottom - 1; r >= top + 1; r--) grid[r][left]   = rotated[i++];
    }

    return grid;
};