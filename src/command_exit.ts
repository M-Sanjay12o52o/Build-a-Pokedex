import { State } from "./state.js";

export async function commandExit(state: State) {
  console.log("Closing the Pokedex... Goodbye!");
  // - [x] Update the `exit` command handler to `.close()` the `readline` interface before exiting the program
  state.readline.close();
  process.exit(0);
}
