/*
TestCase:
[1,1,1,2,2,3]
2
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    let output = [];
    for (const num of nums) {
        if (map.has(num)) map.set(num, map.get(num) + 1);
        else map.set(num, 1);
    }
    
    let array = [];
    for(let [key, value] of map) {
        array.push([key, value]);
    }
    
    array.sort((a,b) => {
        return b[1] - a[1];
    });
    while (k > 0) {
        output.push(array.shift()[0]);
        k--;
    }
    return output;
};