/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
var maxValue = function(events, k) {
    events.sort((a, b) => a[0] - b[0]); 

    const n = events.length;
    const memo = new Map();

    // Binary search: find the next event that starts after current ends
    const findNext = (end) => {
        let left = 0, right = n;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (events[mid][0] > end) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    };

    const dp = (i, count) => {
        if (i === n || count === 0) return 0;

        const key = `${i},${count}`;
        if (memo.has(key)) return memo.get(key);

        // Option 1: skip the current event
        let result = dp(i + 1, count);

        // Option 2: take the current event
        const [start, end, value] = events[i];
        const nextIndex = findNext(end);
        result = Math.max(result, value + dp(nextIndex, count - 1));

        memo.set(key, result);
        return result;
    };

    return dp(0, k);
};
