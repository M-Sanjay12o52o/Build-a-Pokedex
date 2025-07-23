import { startREPL } from "./repl.js";
import { initState } from "./state.js";

async function main() {
  const stateObj = initState();

  startREPL(stateObj);
}

main();
