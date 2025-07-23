import type { Interface } from "readline";
import * as readline from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";

export type Commands = Record<string, CLICommand>;

export type State = {
  readline: Interface;
  commands: Commands;
  api: PokeAPI;
  nextLocationsURL?: string;
  prevLocationsURL?: string;
};

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;
};

export function initState(): State {
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
