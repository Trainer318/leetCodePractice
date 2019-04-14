/*
TestCase:
"00110"
*/

/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let pre = 0, cur = 1, count = 0;

    for (let i = 1; i < s.length; i++) { 
        if (s.charAt(i - 1) === s.charAt(i)) cur++; 
        else { 
            pre = cur; 
            cur = 1;     
        }
        if (pre >= cur) count++;
    }
    return count;   
};