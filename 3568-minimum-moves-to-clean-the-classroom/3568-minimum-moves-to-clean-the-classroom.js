/**
 * @param {character[][]} classroom
 * @param {number} energy
 * @return {number}
 */
function minMoves(classroom, energy) {
    const m = classroom.length, n = classroom[0].length;
    const N = m * n;
    const dR = [1, -1, 0, 0], dC = [0, 0, 1, -1];

    const cellType = new Int8Array(N);   // 0 = normal/S/'.', 1 = 'X', 2 = 'R'
    const litterBit = new Int8Array(N).fill(-1);
    let start = -1, L = 0;

    for (let r = 0; r < m; r++) {
        const row = classroom[r];
        for (let c = 0; c < n; c++) {
            const p = r * n + c;
            const ch = row[c];
            if (ch === 'X') cellType[p] = 1;
            else if (ch === 'R') cellType[p] = 2;
            if (ch === 'S') start = p;
            else if (ch === 'L') litterBit[p] = L++;
        }
    }
    if (L === 0) return 0;
    const full = (1 << L) - 1;

    // Precompute valid (non-obstacle) neighbors ONCE — no bounds/obstacle checks in the hot loop
    const neighbors = new Array(N);
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            const p = r * n + c;
            if (cellType[p] === 1) { neighbors[p] = []; continue; }
            const list = [];
            for (let d = 0; d < 4; d++) {
                const nr = r + dR[d], nc = c + dC[d];
                if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;
                const np = nr * n + nc;
                if (cellType[np] !== 1) list.push(np);
            }
            neighbors[p] = list;
        }
    }

    // Flatten state (p, e, mask) -> single integer
    const eSpan = energy + 1;
    const maskSpan = 1 << L;
    const strideE = maskSpan;
    const strideP = eSpan * maskSpan;

    const visited = new Uint8Array(N * eSpan * maskSpan);

    const startMask = litterBit[start] >= 0 ? (1 << litterBit[start]) : 0;
    if (startMask === full) return 0;

    const startState = start * strideP + energy * strideE + startMask;
    visited[startState] = 1;

    let current = [startState];
    let moves = 0;

    while (current.length) {
        const next = [];
        for (let qi = 0; qi < current.length; qi++) {
            const state = current[qi];

            const mask = state % maskSpan;
            const rem = (state - mask) / maskSpan;   // p * eSpan + e
            const e = rem % eSpan;
            if (e === 0) continue;
            const p = (rem - e) / eSpan;

            const nbrs = neighbors[p];
            for (let i = 0; i < nbrs.length; i++) {
                const np = nbrs[i];
                const ne = cellType[np] === 2 ? energy : e - 1;

                const lb = litterBit[np];
                const nmask = lb >= 0 ? (mask | (1 << lb)) : mask;

                const nstate = np * strideP + ne * strideE + nmask;
                if (visited[nstate]) continue;
                visited[nstate] = 1;

                if (nmask === full) return moves + 1;
                next.push(nstate);
            }
        }
        current = next;
        moves++;
    }

    return -1;
}