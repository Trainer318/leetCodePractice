/*
TestCase:
[4,2,5,7]
*/

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    for (let i = 0, j = 1; i < A.length; i += 2) {
        if (A[i] % 2 == 1){
            while (A[j]%2 == 1) j += 2;
            let tmpValue = A[j];
            A[j] = A[i];
            A[i] = tmpValue;
        }
    }
    return A;
};
        
        
    