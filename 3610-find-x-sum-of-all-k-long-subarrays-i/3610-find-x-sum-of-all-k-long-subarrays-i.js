/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function(nums, k, x) {
    const n = nums.length;
    const ans = [];
    const freq = new Map();

    // helper: calculate x-sum of current window
    function getXSum() {
        const entries = Array.from(freq.entries());
        entries.sort((a, b) => {
            // sort by frequency desc, then value desc
            if (b[1] !== a[1]) return b[1] - a[1];
            return b[0] - a[0];
        });
        
        // pick top x and compute sum = num * freq
        let sum = 0;
        let count = 0;
        for (let [num, f] of entries) {
            sum += num * f;
            count++;
            if (count === x) break;
        }
        return sum;
    }

    // initialize first window
    for (let i = 0; i < k; i++) {
        freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
    }
    ans.push(getXSum());

    // slide window
    for (let i = k; i < n; i++) {
        // remove leftmost
        let left = nums[i - k];
        freq.set(left, freq.get(left) - 1);
        if (freq.get(left) === 0) freq.delete(left);

        // add rightmost
        let right = nums[i];
        freq.set(right, (freq.get(right) || 0) + 1);

        ans.push(getXSum());
    }

    return ans;
};
