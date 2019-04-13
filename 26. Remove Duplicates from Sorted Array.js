/*
TestCase:
[1,1,2]
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    for(var i = 0; i < nums.length; ) {
        if(nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
        } else i++;
    }
    return;
};