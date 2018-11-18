/*
TestCase:
"Hello"
*/

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    let ouputString = [];
    for ( eachChar of str) {
        let asciiCode = eachChar.charCodeAt();
        if (asciiCode<= 90 && asciiCode >= 65) asciiCode += 32;
        eachChar = String.fromCharCode(asciiCode);
        ouputString += eachChar;
    }
    return ouputString;
};