/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = new Array(n);
    
    if (n === 1 || n === 2) {
        return (n);
    }
    else {
        dp[0] = 1;
        dp[1] = 2;
    }
    
    for (let i = 2; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return (dp[n - 1]);
};