/*
TestCase:
[7,1,5,3,6,4]
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxPrice = 0;
    let minPrice = Number.MAX_VALUE;
    for(const price of prices) {
        minPrice = Math.min(minPrice, price);
        maxPrice = Math.max(maxPrice, price - minPrice);
    }
    return maxPrice;
};