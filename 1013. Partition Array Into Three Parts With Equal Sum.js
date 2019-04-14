/*
TestCase:
[0,2,1,-6,6,-7,9,1,2,0,1]
*/

/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
    const sum = A.reduce((a, b) => a + b)/3;
    let partSum = 0;
    let count = 0;
    for (const element of A) {
        partSum += element;
        if (partSum == sum) {
            ++count;
            partSum = 0;
        }
    }
    if (count === 3) return true;
    return false;
};