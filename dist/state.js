import * as readline from "readline";
import { getCommands } from "./commands.js";
// - [x] Export a new function called `initState`.
// - [x] Move the logic that creates the `readline` interface and the `commands` registry into this function. It should return an initialized `State` object.
export function initState() {
    // console.log("Hello from startREPL");
    // - [x] Creat an interface for reading input.
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });
    const commands = getCommands();
    return {
        readline: rl,
        commands,
    };
}
