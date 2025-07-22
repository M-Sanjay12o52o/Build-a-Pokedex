import { startREPL } from "./repl.js";
import { initState } from "./state.js";
// - [x] Update `main.ts` to initialize a `State` object using the new function, and pass it into your REPL loop. The `REPL` loop should now use the state's `readline` interface and commands registry
async function main() {
    const stateObj = initState();
    startREPL(stateObj);
}
main();
