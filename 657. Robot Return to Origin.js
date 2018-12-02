/*
TestCase:
"UD"
*/

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let i = 0,j = 0;
    for (move of moves) {
        switch (move){
            case "U":
                i++;
                break;
            case "D":
                i--;
                break;
            case "L":
                j--;
                break;
            case "R":
                j++;
                break;
            default:
                break;
        }
    }
    return (i == 0 && j == 0) ? true : false;
};