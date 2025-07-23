import { commandCatch } from "./commandCatch.js";
import { commandInspect } from "./commandInspect.js";
import { explore } from "./explore.js";
export function cleanInput(input) {
    return input.trim().split(/\s+/).filter(Boolean);
}
export function startREPL(state) {
    const rl = state.readline;
    rl.prompt();
    rl.on("line", async (input) => {
        const [commandName, ...args] = cleanInput(input);
        if (!commandName) {
            rl.prompt();
            return;
        }
        const commands = state.commands;
        const command = commands[commandName.toLowerCase()];
        if (!command) {
            console.log(`Unknown command: "${commandName}". Type "help" for a list of commands.`);
            rl.prompt();
            return;
        }
        try {
            if (command.name === "explore") {
                if (args.length === 0) {
                    console.log("Please provide a location name, e.g., explore canalave-city-area");
                    rl.prompt();
                    return;
                }
                await explore(state, args[0]);
                return;
            }
            if (command.name === "catch") {
                if (args.length === 0) {
                    console.log("Please provide a pokemon name, e.g., catch pikachu");
                    rl.prompt();
                    return;
                }
                await commandCatch(state, args[0]);
                return;
            }
            if (command.name === "inspect") {
                if (args.length === 0) {
                    console.log("Please provide a pokemon name, e.g., inspect pikachu");
                    rl.prompt();
                    return;
                }
                await commandInspect(state, args[0]);
                return;
            }
            await command.callback(state);
        }
        catch (error) {
            console.log(error);
        }
    });
}
