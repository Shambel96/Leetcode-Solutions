/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    // Call fn immediately
    fn(...args);

    // Schedule repeated calls every t ms
    const intervalId = setInterval(() => {
        fn(...args);
    }, t);

    // Return cancel function to stop the interval
    return function cancelFn() {
        clearInterval(intervalId);
    };
};
