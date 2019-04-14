/*
TestCase:
3
3
[[2,2],[3,3]]
*/

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    let minWidth = n;
    let minHigh = m;
    for (let o of ops) {
        minWidth = Math.min(minWidth, o[1]);
        minHigh = Math.min(minHigh, o[0]);
    }
    return minWidth * minHigh;
};