import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
export function getCommands() {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Welcome message and list of commands",
            callback: commandHelp,
        },
    };
}
