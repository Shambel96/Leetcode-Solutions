/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    // Schedule fn to run after t ms
    const timeoutId = setTimeout(() => {
        fn(...args);
    }, t);

    // Return cancel function
    return function cancelFn() {
        clearTimeout(timeoutId);
    };
};
