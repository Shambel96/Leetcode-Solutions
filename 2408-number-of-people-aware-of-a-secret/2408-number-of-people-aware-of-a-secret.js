/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */

    
var peopleAwareOfSecret = function(n, delay, forget) {
    const MOD = 1e9 + 7;
    let dp = new Array(n + 1).fill(0);
    dp[1] = 1;  // Day 1, one person discovers
    
    for (let day = 1; day <= n; day++) {
        if (dp[day] === 0) continue;
        // This person will share from day+delay to day+forget-1
        for (let shareDay = day + delay; shareDay <= Math.min(n, day + forget - 1); shareDay++) {
            dp[shareDay] = (dp[shareDay] + dp[day]) % MOD;
        }
    }
    
    // Count people who still know the secret on day n
    let result = 0;
    for (let day = n - forget + 1; day <= n; day++) {
        if (day >= 1) result = (result + dp[day]) % MOD;
    }
    
    return result;
};
