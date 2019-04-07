/*
TestCase:
"leetcode"
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const map = {};
    for (const char of s) {
        map[char] = map[char] || 0;
        map[char]++;
    }
    for (const char of s) {
        if (char in map && map[char] === 1) {
            return s.indexOf(char);
        }
    }
    return -1;
};