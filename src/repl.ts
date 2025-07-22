import { State } from "./state.js";

export function cleanInput(input: string): string[] {
  return input.trim().split(/\s+/).filter(Boolean);
}

export function startREPL(state: State) {
  const rl = state.readline;

  // console.log("Hello from startREPL");
  // - [x] Creat an interface for reading input.
  // const rl = readline.createInterface({
  //   input: process.stdin,
  //   output: process.stdout,
  //   prompt: "Pokedex > ",
  // });

  // - [x] Use the interface's `.prompt()` method to display the prompt.
  rl.prompt();

  // - [x] Use the interface's `.on("line", callback)` method to listen for input.
  // The callback should:
  rl.on("line", async (input) => {
    // - [x] 1. Use your `cleanInput` function to parse the input into an array of words
    const cleanInputResult = cleanInput(input);

    // - [x] 2. If the input is empty, call `.prompt()` to give the user back control to type another commmand and exit the callback
    if (cleanInputResult.length == 0) {
      rl.prompt();
      return;
    }

    // - [x] 3. Otherwise, print the first word back to the user in this format: `Your command was: <first word>`
    // const commands = getCommands();
    const commands = state.commands;
    const commandName = cleanInputResult[0].toLocaleLowerCase();
    const command = commands[commandName];
    // console.log(`Your command was: `, command.toLowerCase());

    // L5.1 - [x] Remove the logic that prints the first (the command back to the user)
    // console.log(`\nYour command was: ${firstWord.toLowerCase()}`);

    if (!command) {
      // console.log(`Unknown command: ${commandName}`);
      console.log(
        `Unknown command: "${commandName}". Type "help" for a list of commands.`
      );
      rl.prompt();
      return;
    }

    try {
      // command.callback(commands);
      command.callback(state);
    } catch (error) {
      console.log(error);
    }

    // - [x]  4. Call `.prompt()` to give the user back control to type another command
    // rl.prompt();
    // console.log(`Received: ${input}`);
    rl.prompt();
  });
}
