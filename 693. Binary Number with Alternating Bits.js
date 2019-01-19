/*
TestCase:
5
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let twoBitNumber = n.toString(2);
    for (let i = 0; i < twoBitNumber.length - 1; i++) {
        if (twoBitNumber[i]===twoBitNumber[i+1]) return false;
    }
    return true;
};