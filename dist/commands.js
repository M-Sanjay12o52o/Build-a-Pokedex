import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_mapb.js";
import { explore } from "./explore.js";
export function getCommands() {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: async (state) => {
                await commandExit(state);
            },
        },
        help: {
            name: "help",
            description: "Welcome message and list of commands",
            callback: async (state) => {
                await commandHelp(state);
            },
        },
        map: {
            name: "map",
            description: "Displays the names of 20 location areas in the Pokemon world.",
            callback: async (state) => {
                await commandMap(state);
            },
        },
        mapb: {
            name: "mapb",
            description: "Displays the names of 20 location areas in the Pokemon world that was returned previously using the map",
            callback: async (state) => {
                await commandMapb(state);
            },
        },
        explore: {
            name: "explore",
            description: "Takes the name of a location area and get Pokemon's in that location.",
            callback: async (state, args) => {
                if (!args || args.length === 0) {
                    console.log("Please provide a location name.");
                    return;
                }
                await explore(state, args[0]);
            },
        },
    };
}
