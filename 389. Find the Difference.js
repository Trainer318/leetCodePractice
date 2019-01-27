/*
TestCase:
"abcd"
"abcde"
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const con = s.concat(t);
    let output = 0;
    for (let char of con) {
        output ^= char.charCodeAt(0);
    }
    return String.fromCharCode(output);
};