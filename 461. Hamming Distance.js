/*
TestCase:
1
4
*/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let count = 0;
    z = x ^ y;
    for (i = 0; i<32 ; ++i) {
        count += (z>>i) & 1;
    }
    return count;
};