/*
TestCase:
[2,7,11,15]
9
*/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let low = 0;
    let up =  numbers.length - 1;
    while (low < up) {
        const sum = numbers[low] + numbers[up];
        if (sum === target) return [low + 1, up + 1];
        else {
            if (sum < target) ++low;
            if (sum > target) --up;
        }
    }
};