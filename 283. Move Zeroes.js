/*
TestCase:
[0,1,0,3,12]
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let j  = -1 ; 
    
    for(let i =  0 ; i < nums.length ; i++){
        if(nums[i] !== 0){
            nums[++j] = nums[i] ; 
        }
    }
    
    
    for(j = j + 1 ; j < nums.length ; j++){
        nums[j] = 0 ; 
    }
    return nums;
}