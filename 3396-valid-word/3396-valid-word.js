/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    if (word.length < 3) return false;

    // Check only letters and digits
    if (!/^[a-zA-Z0-9]+$/.test(word)) return false;

    const vowels = 'aeiouAEIOU';
    let hasVowel = false;
    let hasConsonant = false;

    for (let ch of word) {
        if (/[a-zA-Z]/.test(ch)) { // Only consider letters for vowel/consonant check
            if (vowels.includes(ch)) {
                hasVowel = true;
            } else {
                hasConsonant = true;
            }
        }
    }

    return hasVowel && hasConsonant;
};
