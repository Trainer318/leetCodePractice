/*
TestCase:
[1,2,3]
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    var min = nums[0];
    nums.forEach(item => {
        if( item < min) min = item;
    });
     return nums.reduce((a, b) => { return b + (a - min)}, 0);    
};