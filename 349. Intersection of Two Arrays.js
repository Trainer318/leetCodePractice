/*
TestCase:
[1,2,2,1]
[2,2]
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let s = new Set();
    for (const i of nums1) {
        for (const j of nums2) {
            if (i===j) s.add(i)
        }
    }
    return [...s];
};