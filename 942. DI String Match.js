/*
TestCase:
"IDID"
*/

/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    const output = [];
    low = 0;
    hight = S.length;
    for (let s of S) {
        if (s==='I') output.push(low++);
        else if (s==='D') output.push(hight--);
    }
    output.push(low);
    return output;
};
    