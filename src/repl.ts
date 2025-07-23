import { explore } from "./explore.js";
import { State } from "./state.js";

export function cleanInput(input: string): string[] {
  return input.trim().split(/\s+/).filter(Boolean);
}

export function startREPL(state: State) {
  const rl = state.readline;
  rl.prompt();

  rl.on("line", async (input) => {
    // const cleanInputResult = cleanInput(input);
    const [commandName, ...args] = cleanInput(input);

    if (!commandName) {
      rl.prompt();
      return;
    }

    // if (cleanInputResult.length == 0) {
    //   rl.prompt();
    //   return;
    // }

    const commands = state.commands;
    // const commandName = cleanInputResult[0].toLocaleLowerCase();
    // const command = commands[commandName];
    const command = commands[commandName.toLowerCase()];

    if (!command) {
      console.log(
        `Unknown command: "${commandName}". Type "help" for a list of commands.`
      );
      rl.prompt();
      return;
    }

    try {
      if (command.name === "explore") {
        if (arguments.length === 0) {
          console.log(
            "Please provide a location name, e.g., explore canalave-city-area"
          );
          rl.prompt();
          return;
        }
        await explore(state, args[0]);
        return;
      }
      await command.callback(state);
    } catch (error) {
      console.log(error);
    }
  });
}
