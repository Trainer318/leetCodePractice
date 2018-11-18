/*
TestCase:
"aA"
"aAAbbbb"
*/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var count = 0;
    for (var j of J) {
        for (var s of S) {
            if (s == j) count++;
        }
    }

    return count;
};