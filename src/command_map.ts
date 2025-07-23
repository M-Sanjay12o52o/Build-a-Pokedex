import { PokeAPI } from "./pokeapi.js";
import { State } from "./state.js";

type Location = {
  name: string;
  url: string;
};

const api = new PokeAPI();

export async function commandMap(state: State) {
  const fetchLocationsResult = await api.fetchLocations(state.nextLocationsURL);
  const locations: Location[] = fetchLocationsResult.results;

  state.prevLocationsURL = fetchLocationsResult.previous;
  state.nextLocationsURL = fetchLocationsResult.next;

  for (const location of locations) {
    console.log(location.name);
  }

  state.readline.prompt();
}
