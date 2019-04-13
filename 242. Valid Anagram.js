/*
TestCase:
"anagram"
"nagaram"
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const s_sorted = s.split('').sort().join('');
    const t_sorted = t.split('').sort().join('');
    return s_sorted == t_sorted ? true : false;
};