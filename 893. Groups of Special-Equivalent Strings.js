/*
TestCase:
["a","b","c","a","c","c"]
*/

/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function(A) {
    let setA = new Set(
        A.map((word) => [...word].reduce((counter, c, i) => {
                                    counter[c.charCodeAt(0) - 'a'.charCodeAt(0) + (26 * (i % 2))]++;
                                    return counter;
                                }, (new Array(52)).fill(0)).join('-')
        )
    );
    return setA.size;
};