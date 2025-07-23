import { PokeAPI } from "./pokeapi.js";
import { State } from "./state.js";

const api = new PokeAPI();

export const attemptCatch = (baseExperience: number): boolean => {
  const roll = Math.random(); // 0 to 1
  const difficulty = baseExperience / 600;
  const chance = 1 - difficulty;
  return roll < chance;
};

export async function commandCatch(state: State, name: string) {
  console.log(`Throwing a Pokeball at ${name}...`);

  try {
    const pokemon = await api.fetchPokemon(name);

    // - [ ] Give the user a chance to catch the Pokemon using the `Math.random()` static method
    // - [ ] Use the pokemon's "base experience" to determine the chance of catching it. The higher the base experience, the harder it should be to catch.

    // Questions
    // 1. This is asking us to use Math.random to decide whether catch attempt was successful or not. At the same time they are also asking us to use the pokemon.base_experience with it.
    // How to do this ?
    // Does Math.random take something like this to decide the result ?

    const caught = attemptCatch(pokemon.base_experience);

    if (!caught) {
      console.log(`${name} escaped!`);
      return state.readline.prompt();
    }

    console.log("caught: ", caught);

    // - [ ] Once the Pokemon is caught, add it to the user's Pokedex. The user's "pokedex" should just be a `Record<string, Pokemon>` (a map of Pokemon by name) stored in the `State` object.
    if (caught) {
      if (state.pokedex[name]) {
        console.log(`${name} is already in your Pokedex.`);
      } else {
        state.pokedex[name] = pokemon;
        console.log(`${name} was caught and added to your Pokedex!`);
        return state.readline.prompt();
      }
    }

    return pokemon;
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(`Error throwing ball at '${name}':`, err.message || err);
    }
  }

  state.readline.prompt();
}
