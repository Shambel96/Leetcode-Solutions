/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timeoutId; // holds the reference to the timeout

    return function(...args) {
        // If there's an existing timeout, cancel it
        clearTimeout(timeoutId);

        // Set a new timeout to call fn after t milliseconds
        timeoutId = setTimeout(() => {
            fn(...args);
        }, t);
    };
};
