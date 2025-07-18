var TimeLimitedCache = function() {
    this.cache = new Map(); // Store: key -> { value, expireTime, timeoutId }
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const now = Date.now();
    const expireTime = now + duration;

    const existing = this.cache.get(key);
    const unexpired = existing && existing.expireTime > now;

    // Clear old timeout if key exists
    if (existing) {
        clearTimeout(existing.timeoutId);
    }

    const timeoutId = setTimeout(() => {
        this.cache.delete(key);
    }, duration);

    this.cache.set(key, { value, expireTime, timeoutId });

    return !!unexpired;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    const entry = this.cache.get(key);
    if (!entry) return -1;

    if (Date.now() < entry.expireTime) {
        return entry.value;
    } else {
        this.cache.delete(key); // Cleanup expired key
        return -1;
    }
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    const now = Date.now();
    let count = 0;

    for (const [key, entry] of this.cache) {
        if (entry.expireTime > now) {
            count++;
        } else {
            this.cache.delete(key); // Clean up expired ones
        }
    }

    return count;
};
