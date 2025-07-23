// This will encapsulate all of our cachine logic.
import { clearInterval } from "timers";

export type CacheEntry<T> = {
  createdAt: number;
  val: T; // this represents the object we're caching
};

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;

  #interval: number = 0;

  add<T>(key: string, val: T) {
    const entry: CacheEntry<T> = {
      createdAt: Date.now(),
      val: val,
    };
    this.#cache.set(key, entry);
  }

  get<T>(key: string): CacheEntry<T> | undefined {
    const entry = this.#cache.get(key);
    if (!entry) return undefined;
    return entry as CacheEntry<T>;
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
    if (this.#interval <= 0) return;
    if (this.#reapIntervalId) return;

    this.#reapIntervalId = setInterval(() => {
      this.#reap();
    }, this.#interval);
  }

  constructor(num: number) {
    this.#interval = num;

    this.#startReapLoop();
  }

  stopReapLoop() {
    clearInterval(this.#reapIntervalId);
    this.#reapIntervalId = undefined;
  }
}
