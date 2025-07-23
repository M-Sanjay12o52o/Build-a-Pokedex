// This will encapsulate all of our cachine logic.
import { clearInterval } from "timers";
export class Cache {
    #cache = new Map();
    #reapIntervalId = undefined;
    #interval = 0;
    add(key, val) {
        const entry = {
            createdAt: Date.now(),
            val: val,
        };
        this.#cache.set(key, entry);
    }
    get(key) {
        const entry = this.#cache.get(key);
        if (!entry)
            return undefined;
        return entry;
    }
    #reap() {
        for (const [key, entry] of this.#cache.entries()) {
            const cutoff = Date.now() - this.#interval;
            if (entry.createdAt < cutoff) {
                this.#cache.delete(key);
            }
        }
    }
    #startReapLoop() {
        if (this.#interval <= 0)
            return;
        if (this.#reapIntervalId)
            return;
        this.#reapIntervalId = setInterval(() => {
            this.#reap();
        }, this.#interval);
    }
    constructor(num) {
        this.#interval = num;
        this.#startReapLoop();
    }
    stopReapLoop() {
        clearInterval(this.#reapIntervalId);
        this.#reapIntervalId = undefined;
    }
    // FOR TESTING
    dumpCacheForTest() {
        return this.#cache;
    }
    addFakeEntryForTest(key, entry) {
        this.#cache.set(key, entry);
    }
}
