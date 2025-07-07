var FindSumPairs = function(nums1, nums2) {
    this.nums1 = nums1;
    this.nums2 = nums2;
    this.freqMap = new Map();

    for (let num of nums2) {
        this.freqMap.set(num, (this.freqMap.get(num) || 0) + 1);
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function(index, val) {
    const oldVal = this.nums2[index];
    const newVal = oldVal + val;

    // Update frequency map
    this.freqMap.set(oldVal, this.freqMap.get(oldVal) - 1);
    if (this.freqMap.get(oldVal) === 0) {
        this.freqMap.delete(oldVal);
    }

    this.nums2[index] = newVal;
    this.freqMap.set(newVal, (this.freqMap.get(newVal) || 0) + 1);
};

/** 
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function(tot) {
    let count = 0;

    for (let i = 0; i < this.nums1.length; i++) {
        let complement = tot - this.nums1[i];
        count += this.freqMap.get(complement) || 0;
    }

    return count;
};
