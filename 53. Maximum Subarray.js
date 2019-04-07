/*
TestCase:
[-2,1,-3,4,-1,2,1,-5,4]
9
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var prev = 0;
    var max = -Number.MAX_VALUE;

    for (const num of nums) {
        prev = Math.max(prev + num, num);
        max = Math.max(max, prev);
    }
    return max;
};