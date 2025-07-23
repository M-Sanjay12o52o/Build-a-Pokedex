export async function commandInspect(state, name) {
    const pokemonName = name.toLowerCase();
    // Let's think through this problem one step at a time.
    // Where is the situation at this point in the function
    // We have the state with pokedex object - which might be empty or might have the pokemon's that were caught by the user
    // And then we have the name of the pokemon that the user want's to inspect
    // We need to make of these two things from here on.
    // These two things cannot be false. We are assuming they are moving forward on this file.
    // We are handling the case where there the pokemon that the user is trying to inspect doesn't exist in the user's pokedex
    // THIS WORKS FINE
    if (!(pokemonName in state.pokedex)) {
        console.log("you have not caught that pokemon");
        return state.readline.prompt();
    }
    // The assigment says that we don't have to make another request as the information is already store in the state when the pokemon was cauguth.
    // THIS IS TRUE.
    const pokemon = state.pokedex[pokemonName];
    //console.log("pokemon: ", pokemon);
    console.log("pokemon.base_experience: ", pokemon.base_experience);
    console.log("name: ", pokemon.name);
    state.readline.prompt();
    // - Issues
    // - [ ] Even though the pokemon is caught i am getting un caught error
    /*
    name, height, weight, stats and type(s) of the Pokemon.
    */
    console.log("\nName: ", pokemon.name);
    console.log("Height: ", pokemon.height);
    console.log("Weight: ", pokemon.weight);
    // console.log("Stats: ", pokemon.stats);
    console.log("Stats:");
    for (const stat of pokemon.stats) {
        console.log(`  -${stat.stat.name}: ${stat.base_stat}`);
    }
    // console.log("Types: ", pokemon.types);
    console.log("Types:");
    for (const type of pokemon.types) {
        console.log(`  - ${type.type.name}`);
    }
    state.readline.prompt();
}
