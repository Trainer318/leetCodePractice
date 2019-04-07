/*
TestCase:
[3,0,1]
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length + 1;
    const complateArray = Array.from(Array(n).keys());
    let output = 0;
    for (const char of nums.concat(complateArray)) {
        output ^= char;
    }
    return output;
};