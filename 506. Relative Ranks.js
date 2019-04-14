/*
TestCase:
[5,4,3,2,1]
*/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    const map = {}
    const sorted = nums.slice().sort((a,b) => b-a);
    sorted.forEach((num, index) => {
        map[num] = `${index + 1}`;
        if (index === 0) {
          map[num] = "Gold Medal";
        }
        if (index === 1) {
          map[num] = "Silver Medal";
        }
        if (index === 2) {
           map[num] = "Bronze Medal";
        }
    });
    return nums.map(num => map[num]);
};