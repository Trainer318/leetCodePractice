/*
TestCase:
[1,4,3,2]
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    const sortedArray = nums.sort(function (a, b) {
        return a - b;
    });
    let output = 0;
    for (let i = 0; i <= sortedArray.length -2; i+=2) {
        output+=sortedArray[i];
    }
    return output;
};
    