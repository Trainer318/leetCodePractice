/*
TestCase:
[1,0,1,1,0,1]
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    if (nums.length <= 1) {
        if (nums[0] === 1) return 1;
        else return 0;
    }
    else {
        let count = 0;
        let countCurrent = 0;
        onConsecutive = false;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                if (!onConsecutive) {
                    onConsecutive = true;
                    countCurrent = 1;
                } else {
                    ++countCurrent; 
                }
                if ( countCurrent > count) count = countCurrent;
            }else {
                if (onConsecutive) {
                    onConsecutive = false;
                }
            }
        }
        return count;
    }
    
};