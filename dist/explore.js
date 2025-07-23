import { PokeAPI } from "./pokeapi.js";
const api = new PokeAPI();
export async function explore(state, locationName) {
    try {
        const fetchLocationsResult = await api.fetchPokemons(locationName);
        const pokemons = fetchLocationsResult.pokemon_encounters;
        for (const pokemon of pokemons) {
            console.log(pokemon.pokemon.name);
        }
    }
    catch (err) {
        if (err instanceof Error) {
            console.log(`Error fetching Pokémon for location '${locationName}':`, err.message || err);
        }
    }
    state.readline.prompt();
}
