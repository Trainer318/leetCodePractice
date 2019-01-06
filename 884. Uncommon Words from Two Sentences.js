/*
TestCase:
"this apple is sweet"
"this apple is sour"
*/

/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    let wordCount = new Map();
    let arrayA = A.split(' ');
    let arrayB = B.split(' ');
    let output = [];
    for (let a of arrayA) {
        wordCount.set(a, wordCount.has(a) ? (wordCount.get(a) + 1) : 1)
    }
    for (let b of arrayB) {
        wordCount.set(b, wordCount.has(b) ? (wordCount.get(b) + 1) : 1)
    }
    for (let [key, value] of wordCount) {
        if (value === 1) output.push(key);
    }
    return output;
};