import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_mapb.js";
import { commandCatch } from "./commandCatch.js";
import { explore } from "./explore.js";
import { commandInspect } from "./commandInspect.js";
import { commandPokedex } from "./commandPokedex.js";
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
        catch: {
            name: "catch",
            description: "Takes the name of a Pokemon as an agrument and adds htem to the user's Pokedex",
            callback: async (state, name) => {
                await commandCatch(state, name);
            },
        },
        inspect: {
            name: "inspect",
            description: "This takes the name of a Pokemon and prints the name, weight, stats and type(s) of the Pokemon. If it's caught",
            callback: async (state, name) => {
                await commandInspect(state, name);
            },
        },
        pokedex: {
            name: "pokedex",
            description: "Lists all the names of the Pokemon the user has caught",
            callback: async (state, name) => {
                await commandPokedex(state);
            },
        },
    };
}
