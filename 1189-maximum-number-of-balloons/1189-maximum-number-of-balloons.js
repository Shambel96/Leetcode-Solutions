/**
 * @param {string} text
 * @return {number}
 */ 
var maxNumberOfBalloons = function(text) {
    const c = {};
    for (const ch of text) c[ch] = (c[ch] || 0) + 1;
    return Math.min(c['b']||0, c['a']||0, (c['l']||0)>>1, (c['o']||0)>>1, c['n']||0);
};