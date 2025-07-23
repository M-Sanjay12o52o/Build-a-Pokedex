import { expect, test } from "vitest";
import { Cache } from "./pokecache.js";
test.concurrent.each([
    {
        key: "https://pokeapi.co/api/v2/location-area",
        val: "testdata",
        interval: 500, // 1/2 second
    },
    {
        key: "https://pokeapi.co/api/v2/location-area?offset=20",
        val: "moretestdata",
        interval: 1000, // 1 second
    },
])("Test Caching $interval ms", async ({ key, val, interval }) => {
    const cache = new Cache(interval);
    cache.add(key, val);
    const cached = cache.get(key);
    expect(cached?.val).toBe(val);
    await new Promise((resolve) => setTimeout(resolve, interval + 100));
    const reaped = cache.get(key);
    expect(reaped).toBe(undefined);
    cache.stopReapLoop();
});
test("Expect undefined after expiry", async () => {
    const interval = 300;
    const cache = new Cache(interval);
    const key = "unique-key";
    const val = "some data";
    cache.add(key, val);
    expect(cache.get(key)?.val).toBe(val);
    await new Promise((r) => setTimeout(r, interval + 100));
    expect(cache.get(key)).toBe(undefined);
    cache.stopReapLoop();
});
