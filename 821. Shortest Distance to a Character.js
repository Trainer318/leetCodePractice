/*
TestCase:
"loveleetcode"
"e"
*/

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    let charMark = Number.MIN_SAFE_INTEGER;
    let output = [];
    
    for (let i = 0; i < S.length; i++) {
        if (S[i] === C) charMark = i;
        output[i] = i - charMark;
    }
    
    charMark = Number.MAX_SAFE_INTEGER;
    for (let i= S.length - 1; i >= 0; i--){
        if (S[i] === C) charMark = i;
        if (charMark - i < output[i]) output[i] = charMark - i;
    }
    return output;
};