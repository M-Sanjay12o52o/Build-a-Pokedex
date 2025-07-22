/*
{
    "count": 1070,
    "next": "https://pokeapi.co/api/v2/location?offset=40&limit=20",
    "previous": "https://pokeapi.co/api/v2/location?offset=0&limit=20",
    "results": [
        {
            "name": "ruin-maniac-cave",
            "url": "https://pokeapi.co/api/v2/location/22/"
        },
*/
/*
Example Usage:

import { PokeAPI } from './path-to-pokeapi';

const api = new PokeAPI();

const locations = await api.fetchLocations();
const viridian = await api.fetchLocation("viridian-city");
*/
export class PokeAPI {
    static baseUrl = "https://pokeapi.co/api/v2";
    constructor() { }
    async fetchLocations(pageURL) {
        const fullUrl = pageURL ? pageURL : `${PokeAPI.baseUrl}/location`;
        const result = await fetch(fullUrl);
        const data = await result.json();
        // this returns us the right data
        /*
        {
          count: 1070,
          next: 'https://pokeapi.co/api/v2/location?offset=40&limit=20',
          previous: 'https://pokeapi.co/api/v2/location?offset=0&limit=20',
          results: [
          {
            name: 'ruin-maniac-cave',
            url: 'https://pokeapi.co/api/v2/location/22/'
          },
          19 more of these..
        },
        */
        return data;
    }
    // - [ ] Verify whether the type if right ?
    // - [ ] What am i supposed to fetch in this fetchLocation
    // - [ ] What is the right full api url to use here
    async fetchLocation(locationName) {
        // baseUrl + locationName -> doesn't really work because it's the an api url
        // So this is the right api url then
        // `https://pokeapi.co/api/v2/location/ruin-maniac-cave`; // this gets us the locations different kind of information
        const fullUrl = PokeAPI.baseUrl + "/location/" + `${locationName}`;
        const result = await fetch(fullUrl);
        const data = await result.json();
        return data;
    }
}
/*
```json
{
    "areas": [
        {
            "name": "ruin-maniac-cave-0-9-different-unown-caught",
            "url": "https://pokeapi.co/api/v2/location-area/115/"
        },
        {
            "name": "ruin-maniac-cave-10-25-different-unown-caught",
            "url": "https://pokeapi.co/api/v2/location-area/116/"
        }
    ],
    "game_indices": [
        {
            "game_index": 66,
            "generation": {
                "name": "generation-iv",
                "url": "https://pokeapi.co/api/v2/generation/4/"
            }
        }
    ],
    "id": 22,
    "name": "ruin-maniac-cave",
    "names": [
        {
            "language": {
                "name": "fr",
                "url": "https://pokeapi.co/api/v2/language/5/"
            },
            "name": "Grotte Ruinem."
        },
        {
            "language": {
                "name": "en",
                "url": "https://pokeapi.co/api/v2/language/9/"
            },
            "name": "Ruin Maniac Cave"
        }
    ],
    "region": {
        "name": "sinnoh",
        "url": "https://pokeapi.co/api/v2/region/4/"
    }
}
```
*/
