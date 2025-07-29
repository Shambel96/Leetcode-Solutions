/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let resolvedCount = 0;
        const total = functions.length;

        if (total === 0) {
            // If there are no functions, resolve immediately with an empty array
            return resolve([]);
        }

        functions.forEach((fn, index) => {
            try {
                fn()
                    .then((value) => {
                        results[index] = value;
                        resolvedCount++;
                        if (resolvedCount === total) {
                            resolve(results);
                        }
                    })
                    .catch((err) => {
                        reject(err); // reject immediately on first error
                    });
            } catch (err) {
                reject(err);
            }
        });
    });
};
