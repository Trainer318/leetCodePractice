/*
TestCase:
3
*/

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let sum = 0;
	while (n/5 >= 1)
	{
		n /= 5;
		sum += Math.floor(n);
	}
	return sum;
};