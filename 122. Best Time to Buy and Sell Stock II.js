/*
TestCase:
[7,1,5,3,6,4]
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    return prices.reduce((res, v, i, arr) => {
        return v > arr[i - 1] ? res + v - arr[i - 1] : res;
    }, 0);
};
    