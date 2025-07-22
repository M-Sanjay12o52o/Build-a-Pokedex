import type { Interface } from "readline";
import * as readline from "readline";
import { getCommands } from "./commands.js";

export type Commands = Record<string, CLICommand>;

// - [x] This should contain the `readline` interface and the `commands` registry
export type State = {
  readline: Interface;
  commands: Commands;
};

export type CLICommand = {
  name: string;
  description: string;
  // callback: (commands: Record<string, CLICommand>) => void;
  callback: (state: State) => void;
};

// - [x] Export a new function called `initState`.
// - [x] Move the logic that creates the `readline` interface and the `commands` registry into this function. It should return an initialized `State` object.
export function initState(): State {
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
