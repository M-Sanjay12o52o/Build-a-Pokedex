import { State } from "./state.js";

export function cleanInput(input: string): string[] {
  return input.trim().split(/\s+/).filter(Boolean);
}

export function startREPL(state: State) {
  const rl = state.readline;
  rl.prompt();

  rl.on("line", async (input) => {
    const cleanInputResult = cleanInput(input);

    if (cleanInputResult.length == 0) {
      rl.prompt();
      return;
    }

    const commands = state.commands;
    const commandName = cleanInputResult[0].toLocaleLowerCase();
    const command = commands[commandName];

    if (!command) {
      console.log(
        `Unknown command: "${commandName}". Type "help" for a list of commands.`
      );
      rl.prompt();
      return;
    }

    try {
      await command.callback(state);
    } catch (error) {
      console.log(error);
    }

    // rl.prompt();
  });
}
