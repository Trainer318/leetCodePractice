/*
TestCase:
[[1,2],[3,4]]
1
4
*/

/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    const numsR = nums.length;
    const numsC = nums[0].length;
    if ((numsR * numsC) !== (r * c)) {
        return nums;
    }
    let reshapeR = 0;
    let reshapeC = 0;
    let output = [];
    for (let row = 0;row < numsR; row++) {
        for (let col = 0;col < numsC; col++) {
            if (output[reshapeR] == null) {
                output.push([]);
            }

            output[reshapeR].push(nums[row][col]);
            reshapeC++;

            if (reshapeC == c) {
                reshapeR++;
                reshapeC = 0;
            }
        }
    }
    return output;
};