/*
TestCase:
1
22
*/

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const selfDividingNumbersList = [];
    for (i = left; i <= right; i++) {
        let numberNeedTestString = i.toString();
        let selfDividingNumberFlsg = true;
        let digitList = [];
        for (let numberNeedTestChar of numberNeedTestString) {
            let digit = new Number(numberNeedTestChar)
            if (digit === 0 || i%digit != 0) {
                selfDividingNumberFlsg = false;
                break;
            }
        }
        if (selfDividingNumberFlsg === true) selfDividingNumbersList.push(i);
    }
    return selfDividingNumbersList;
};