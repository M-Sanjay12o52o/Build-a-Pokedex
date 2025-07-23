import { Cache } from "./pokecache.js";
export class PokeAPI {
    static baseUrl = "https://pokeapi.co/api/v2";
    cache = new Cache(5000);
    constructor() { }
    async fetchLocations(pageURL) {
        const fullUrl = pageURL ? pageURL : `${PokeAPI.baseUrl}/location-area`;
        const cached = this.cache.get(fullUrl);
        if (cached)
            return cached;
        const result = await fetch(fullUrl);
        const data = await result.json();
        this.cache.add(fullUrl, data);
        return data;
    }
    async fetchLocation(locationName) {
        const fullUrl = PokeAPI.baseUrl + "/location/" + `${locationName}`;
        const cached = this.cache.get(fullUrl);
        if (cached) {
            return cached;
        }
        const result = await fetch(fullUrl);
        const data = await result.json();
        return data;
    }
}
