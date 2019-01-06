/*
TestCase:
[[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let r = grid.length;
    let c = grid[0].length;
    let isLand = 0;
    let isLandDown = 0;
    let isLandRight = 0

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
                if (grid[i][j] === 1) {
                    isLand++;
                    if ((i < r - 1) && (grid[i+1][j] === 1)) {
                        isLandDown++;
                    }
                    if ((j < c - 1) && (grid[i][j+1] === 1)) {
                        isLandRight++;
                    }
                } 
            }
        }
    return isLand * 4 - isLandDown * 2 - isLandRight * 2;
};