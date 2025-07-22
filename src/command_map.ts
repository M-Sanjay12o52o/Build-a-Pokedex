import { PokeAPI } from "./pokeapi.js";
import { State } from "./state.js";

type Location = {
  name: string;
  url: string;
};

const api = new PokeAPI();

// - Question

// TODOS

// - [x] make the subsequent call to return the next two locations

// Using the state helped here

export async function commandMap(state: State) {
  const currentURL = state.nextLocationsURL;
  const fetchLocationsResult = await api.fetchLocations(state.nextLocationsURL);
  const locations: Location[] = fetchLocationsResult.results;

  for (const location of locations) {
    console.log(location.name);

    // Update the prevLocationURL with what ever the url that was used to fetch locations here
    state.prevLocationsURL = currentURL;

    state.nextLocationsURL = fetchLocationsResult.next;
  }
  state.readline.prompt();
}
