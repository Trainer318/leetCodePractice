/*
TestCase:
"A"
*/

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    getCharCode = (s) => {
        return s.charCodeAt(0) - 64;
    }
    let sum = 0;
    let len = s.length - 1;
    for (let c of s) {
        sum += getCharCode(c)*(Math.pow(26, len--))
    }
    return sum;
};
    