/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var flowerGame = function(n, m) {
 const n_even = Math.floor(n / 2);
    const n_odd = Math.floor((n + 1) / 2);
    const m_even = Math.floor(m / 2);
    const m_odd = Math.floor((m + 1) / 2);
    
    return n_even * m_odd + n_odd * m_even;   
};