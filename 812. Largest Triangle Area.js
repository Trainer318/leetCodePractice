/*
TestCase:
[[0,0],[0,1],[1,0],[0,2],[2,0]]
*/

/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    const area = (p1, p2, p3) => {
        return 0.5 * Math.abs(
            p1[0]*p2[1] +
            p2[0]*p3[1] +
            p3[0]*p1[1] -
            p2[0]*p1[1] -
            p3[0]*p2[1] -
            p1[0]*p3[1]
        );
    };
    let res = 0;
    for (let p1 of points)
        for (let p2 of points)
            for (let p3 of points)
                res = Math.max(res, area(p1, p2, p3));
    return res;
    
};