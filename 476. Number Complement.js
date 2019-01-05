/*
TestCase:
5
*/

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let output = '';
    for(let i of num.toString(2)){
        (i === '1') ? output += '0' : output += '1';
    };
    return parseInt(output, 2);
};