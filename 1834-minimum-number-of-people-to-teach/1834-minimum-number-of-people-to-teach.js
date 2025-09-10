/**
 * @param {number} n
 * @param {number[][]} languages
 * @param {number[][]} friendships
 * @return {number}
 */

var minimumTeachings = function(n, languages, friendships) {
    // Convert each user's languages to a Set for fast lookup
    let langSet = languages.map(l => new Set(l));

    // Step 1: Find problematic friendships (cannot communicate)
    let problemUsers = new Set();
    for (let [u, v] of friendships) {
        if (![...langSet[u - 1]].some(lang => langSet[v - 1].has(lang))) {
            problemUsers.add(u - 1);
            problemUsers.add(v - 1);
        }
    }

    // Step 2: For each language, count how many users need to learn it
    let minTeach = Infinity;
    for (let lang = 1; lang <= n; lang++) {
        let teachCount = 0;
        for (let user of problemUsers) {
            if (!langSet[user].has(lang)) {
                teachCount++;
            }
        }
        minTeach = Math.min(minTeach, teachCount);
    }

    return minTeach;
};
