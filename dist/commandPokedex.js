export async function commandPokedex(state) {
    const pokedex = state.pokedex;
    if (Object.keys(pokedex).length == 0) {
        console.log("pokedex is empty, start catching Pokemon's");
    }
    console.log("Your Pokedex:");
    for (const [name, pokemon] of Object.entries(pokedex)) {
        // console.log(`- ${pokemon}`);
        console.log(`- ${name}`);
    }
    state.readline.prompt();
}
