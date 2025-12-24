/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    let totalApples = apple.reduce((sum, a) => sum + a, 0);

    capacity.sort((a, b) => b - a);

    let used = 0;
    let currentCapacity = 0;

    for (let cap of capacity) {
        currentCapacity += cap;
        used++;
        if (currentCapacity >= totalApples) {
            return used;
        }
    }
};
