export class PokeAPI {
    static baseUrl = "https://pokeapi.co/api/v2";
    constructor() { }
    async fetchLocations(pageURL) {
        const fullUrl = pageURL ? pageURL : `${PokeAPI.baseUrl}/location-area`;
        const result = await fetch(fullUrl);
        const data = await result.json();
        return data;
    }
    async fetchLocation(locationName) {
        const fullUrl = PokeAPI.baseUrl + "/location/" + `${locationName}`;
        const result = await fetch(fullUrl);
        const data = await result.json();
        return data;
    }
}
