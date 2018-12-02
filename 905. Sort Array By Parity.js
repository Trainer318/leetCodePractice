/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let start = 0;
    let end = A.length - 1;
    while (start < end) {
        if (A[start]%2 > A[end]%2) {
            let tmp = A[end];
            A[end] = A[start];
            A[start] = tmp;
        } 
        if (A[start]%2 == 0) start++;
        if (A[end]%2 == 1) end--;
    }
    return A;
};