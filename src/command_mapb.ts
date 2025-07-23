import { PokeAPI } from "./pokeapi.js";
import { State } from "./state.js";

type Location = {
  name: string;
  url: string;
};

const api = new PokeAPI();

export async function commandMapb(state: State) {
  if (state.prevLocationsURL == "") {
    console.log("you're on the first page");

    return state.readline.prompt();
  }

  const fetchLocationsResult = await api.fetchLocations(state.prevLocationsURL);
  const locations: Location[] = fetchLocationsResult.results;

  for (const location of locations) {
    console.log(location.name);
  }

  state.nextLocationsURL = fetchLocationsResult.next ?? "";
  state.prevLocationsURL = fetchLocationsResult.previous ?? "";

  state.readline.prompt();
}
