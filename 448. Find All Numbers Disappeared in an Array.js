/*
TestCase:
[4,3,2,7,8,2,3,1]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let arr = Array.from({length: nums.length}, (init,index) => index + 1);
    return arr.filter(element=>nums.indexOf(element)===-1);
};