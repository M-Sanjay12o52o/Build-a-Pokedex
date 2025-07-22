import { PokeAPI } from "./pokeapi.js";
const api = new PokeAPI();
export async function commandMappd(state) {
    if (state.prevLocationsURL == "") {
        console.log("you're on the first page");
        return state.readline.prompt();
    }
    const currentURL = state.prevLocationsURL;
    const fetchLocationsResult = await api.fetchLocations(currentURL);
    const locations = fetchLocationsResult.results;
    for (const location of locations) {
        console.log(location.name);
    }
    state.prevLocationsURL = currentURL;
    state.prevLocationsURL = "";
    state.readline.prompt();
}
