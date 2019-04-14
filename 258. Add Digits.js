/*
TestCase:
38
*/

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let sum = 0;
    num.toString().split('').forEach(_n => {
        sum += Number(_n);
        sum = sum >= 10 ? (sum % 10 + 1) : sum;
    });
    return sum;
};