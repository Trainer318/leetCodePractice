/*
TestCase:
"a1b2"
*/

/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    let output = [];
    dfs = current => {
        if (current.length === S.length) {
            output.push(current);
            return;
        }
         if(S.charAt(current.length) >= '0' && S.charAt(current.length) <= '9') {
            current += S.charAt(current.length);
            dfs(current);
        } else {
            dfs(current + S.charAt(current.length).toLowerCase());
            dfs(current + S.charAt(current.length).toUpperCase());
        }
    }
    dfs('');
    return output;
};