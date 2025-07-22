import * as readline from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";
// - [x] Export a new function called `initState`.
// - [x] Move the logic that creates the `readline` interface and the `commands` registry into this function. It should return an initialized `State` object.
/*
- [x] Update the State object to contain a PokeAPI object that you'll use to fetch location areas.

- [x] Update the State object to contain nextLocationsURL and prevLocationsURL URLs that you'll need to paginate through location areas.

- [ ] Update the callback functions in the State object to return Promises: callback: (state: State) => Promise<void>;. Update all the callbacks themselves to be async functions (which means they return Promises).

- [ ] Update the entrypoint to treat the repl loop as an async function and properly await the callback functions. Handle potential network errors with a try/catch block.
*/
export function initState() {
    // console.log("Hello from startREPL");
    // - [x] Creat an interface for reading input.
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
    };
}
