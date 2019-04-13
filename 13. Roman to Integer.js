/*
TestCase:
"III"
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const len = s.length;
    const hash = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let lastChar = hash[s.charAt(0)];
    let output = 0;
    
    for (let i = 0; i< len; i++) {
        const currentChar = hash[s.charAt(i)];
        if (lastChar < currentChar) {
            output  = output - (lastChar * 2) + currentChar;
        } else {
            output += currentChar;
        }
        lastChar = currentChar;
    }
    return output;
};