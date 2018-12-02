/*
TestCase:
[0,1,0]
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    let mountainIndex = 0;
    while (A[mountainIndex] < A[mountainIndex+1]) mountainIndex++;
    return mountainIndex;
};
    