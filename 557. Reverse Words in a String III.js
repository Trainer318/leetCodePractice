/*
TestCase:
"Let's take LeetCode contest"
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    String.prototype.reverse = function() {
        return this.split('').reverse().join('');
    }
    s = s.split(' ').map(str => str.reverse()).join(' ');
    return s;
};
    