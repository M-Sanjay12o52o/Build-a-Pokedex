// - [ ] Update the `help` command handler to use the commands registry via the `State` object

import { State } from "./state.js";

export function commandHelp(state: State) {
  console.log("Welcome to the Pokedex!");
  console.log("\nAvailable commands:\n");

  for (const commandName in state.commands) {
    const command = state.commands[commandName];
    console.log(`${command.name}: ${command.description}`);
  }
}
