/*
TestCase:
2
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // Fibonacciで解決行けそう
    let first = 1;
    if (n === 1) return 1;
    let second = 2;
    if (n === 2) return 2;
    let third = 0;
    for (let i = 3;i <= n; i++) {
        third = second + first;
        first = second;
        second = third;
    }
    return third;
};