/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
    
    // Step 1: extract vowels
    let vowelChars = [];
    for (let ch of s) {
        if (vowels.has(ch)) vowelChars.push(ch);
    }
    
    // Step 2: sort vowels by ASCII value
    vowelChars.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    
    // Step 3: rebuild the string
    let result = "";
    let idx = 0;
    for (let ch of s) {
        if (vowels.has(ch)) {
            result += vowelChars[idx++];
        } else {
            result += ch;
        }
    }
    
    return result;
};
