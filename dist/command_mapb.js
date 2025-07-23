import { PokeAPI } from "./pokeapi.js";
const api = new PokeAPI();
export async function commandMapb(state) {
    if (state.prevLocationsURL == "") {
        console.log("you're on the first page");
        return state.readline.prompt();
    }
    const fetchLocationsResult = await api.fetchLocations(state.prevLocationsURL);
    const locations = fetchLocationsResult.results;
    for (const location of locations) {
        console.log(location.name);
    }
    state.nextLocationsURL = fetchLocationsResult.next ?? "";
    state.prevLocationsURL = fetchLocationsResult.previous ?? "";
    state.readline.prompt();
}
