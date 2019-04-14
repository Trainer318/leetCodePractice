/*
TestCase:
[1,1]
[2,2]
*/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    let sumLam = (a, b) => a + b; 
    const sumA = A.reduce(sumLam);
    const sumB = B.reduce(sumLam);
    const step = Math.abs((sumA - sumB) / 2);
  
    for (let item of B) {
      const num = sumA > sumB ? item + step : item - step;
      if (A.indexOf(num) > -1) {
        return [num, item];
      }
    }
  return [];
};