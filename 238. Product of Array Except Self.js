/*
TestCase:
[1,2,3,4]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var output = [];
    var l = nums[0];
    var r = nums[nums.length - 1];
    
    for(var i = 0; i < nums.length ; i++) {
        output[i] = 1;
    }
    
    for(var i = 1; i < nums.length; i++){
        output[i] *= l;
        output[nums.length - 1 - i] *= r;
		
        l *= nums[i];
        r *= nums[nums.length - 1 - i];
    }
    
    return output;
};