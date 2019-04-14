/*
TestCase:
"USA"
*/

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if(word.charCodeAt(0) >=97 && word.charCodeAt(0) <= 122) {
        return word.split``.every(x=>/[a-z]/.test(x));
        for (const c of word) {
            if (word.charCodeAt(0) < 97 || word.charCodeAt(0) > 122) return false;
        }
        return true;
    }else{
       const temS = word.slice(1);
       return temS.split``.every(x=>/[a-z]/.test(x)) || temS.split``.every(x=>/[A-Z]/.test(x));         
    }
};