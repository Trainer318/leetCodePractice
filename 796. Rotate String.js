/*
TestCase:
"abcde"
"cdeab"
*/

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {

    if (A.length !== B.length) {
        return false;
    }

    if (A === B) {
        return true;
    }
    return (A + A).indexOf(B) !== -1;
};