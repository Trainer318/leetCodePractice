/*
TestCase:
"ab-cd"
*/

/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    const isChar = c => c.match(/[a-zA-Z]/g) == c;
    const charArray = [...S].filter(c => isChar(c));
    let output = '';
    let index = charArray.length - 1;
    for (let c of S) 
        output += isChar(c) ? charArray[index--] : c;
    return output;
};