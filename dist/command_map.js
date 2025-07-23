import { PokeAPI } from "./pokeapi.js";
const api = new PokeAPI();
export async function commandMap(state) {
    const fetchLocationsResult = await api.fetchLocations(state.nextLocationsURL);
    const locations = fetchLocationsResult.results;
    state.prevLocationsURL = fetchLocationsResult.previous;
    state.nextLocationsURL = fetchLocationsResult.next;
    for (const location of locations) {
        console.log(location.name);
    }
    state.readline.prompt();
}
