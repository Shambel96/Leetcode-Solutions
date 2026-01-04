/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    let totalSum = 0;

    for (let num of nums) {
        let divisors = new Set();

        for (let i = 1; i * i <= num; i++) {
            if (num % i === 0) {
                divisors.add(i);
                divisors.add(num / i);
            }
        }

        if (divisors.size === 4) {
            for (let d of divisors) {
                totalSum += d;
            }
        }
    }

    return totalSum;
};
