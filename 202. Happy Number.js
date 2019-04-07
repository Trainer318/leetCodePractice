/*
TestCase:
19
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const set = new Set();
  
    const gen = _n => {
        let tem = 0;
        for (const number of _n) {
          tem += number ** 2;
        }
        if (tem === 1) return true;
        if (set.has(tem)) return false;
        set.add(tem);
        return gen(tem.toString());
    }

    return gen(n.toString());
};