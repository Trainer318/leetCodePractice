/*
TestCase:
"a"
"b"
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    magazine = magazine.split('');
    for (let item of ransomNote) {
        const index = magazine.indexOf(item);
        if (index === -1) return false;
        magazine.splice(index, 1);
    }
    return true;   
};