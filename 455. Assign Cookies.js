/*
TestCase:
[1,2,3]
[1,1]
*/

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    sortLam = (a, b) => a - b;
    g.sort(sortLam);
    s.sort(sortLam);
  
    let output = 0;

    for (let i = 0; i < g.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if (s[j] >= g[i]) {
                ++output;
                s.splice(j, 1);
                break;
            }
        }
    }
    return output;
};