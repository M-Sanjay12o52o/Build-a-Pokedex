import * as readline from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";
export function initState() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });
    const commands = getCommands();
    const api = new PokeAPI();
    const nextLocationsURL = "";
    const prevLocationsURL = "";
    return {
        readline: rl,
        commands,
        api,
        nextLocationsURL,
        prevLocationsURL,
        pokedex: {},
    };
}
