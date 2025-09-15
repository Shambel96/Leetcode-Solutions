/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    let words = text.split(" ");
    let brokenSet = new Set(brokenLetters);
    
    let count = 0;
    for (let word of words) {
        let valid = true;
        for (let ch of word) {
            if (brokenSet.has(ch)) {
                valid = false;
                break;
            }
        }
        if (valid) count++;
    }
    
    return count;
};
