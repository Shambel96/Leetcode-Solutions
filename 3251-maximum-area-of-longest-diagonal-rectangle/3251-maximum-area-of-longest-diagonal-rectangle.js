/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
    let maxDiagonal = 0;
    let bestArea = 0;

    for (let [l, w] of dimensions) {
        let diagSq = l * l + w * w;
        let area = l * w;

        if (diagSq > maxDiagonal) {
            maxDiagonal = diagSq;
            bestArea = area;
        } else if (diagSq === maxDiagonal && area > bestArea) {
            bestArea = area;
        }
    }

    return bestArea;
};


