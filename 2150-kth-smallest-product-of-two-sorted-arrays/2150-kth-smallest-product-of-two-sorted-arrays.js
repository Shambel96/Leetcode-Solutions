/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
function kthSmallestProduct(nums1, nums2, k) {

  function countLessEqual(x) {
    let count = 0;
    for (let a of nums1) {
      if (a === 0) {
        if (x >= 0) count += nums2.length;
      } else if (a > 0) {
       
        let low = 0, high = nums2.length - 1;
        while (low <= high) {
          const mid = Math.floor((low + high) / 2);
          if (a * nums2[mid] <= x) low = mid + 1;
          else high = mid - 1;
        }
        count += low;
      } else { // a < 0
        
        let low = 0, high = nums2.length - 1;
        while (low <= high) {
          const mid = Math.floor((low + high) / 2);
          if (a * nums2[mid] <= x) high = mid - 1;
          else low = mid + 1;
        }
        count += nums2.length - low;
      }
    }
    return count;
  }

  
  let low = -1e10, high = 1e10;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    const count = countLessEqual(mid);
    if (count < k) low = mid + 1;
    else high = mid;
  }

  return low;
}

