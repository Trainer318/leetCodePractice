/*
TestCase:
[1,2,3,1]
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length==0){
        return 0
    }
    let dp=[]
    dp[0]=nums[0]
    dp[1]=Math.max(nums[0],nums[1])
    for(let i=2;i<nums.length;i++){
        let A=dp[i-2]+nums[i]
        let B=dp[i-1]
        dp[i]=Math.max(A,B)
    }
    return dp[nums.length-1]
};