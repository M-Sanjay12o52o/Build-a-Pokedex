import * as readline from "readline";
export function cleanInput(input) {
    return input.trim().split(/\s+/).filter(Boolean);
}
export function startREPL() {
    // console.log("Hello from startREPL");
    // - [x] Creat an interface for reading input.
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });
    // - [x] Use the interface's `.prompt()` method to display the prompt.
    rl.prompt();
    // - [x] Use the interface's `.on("line", callback)` method to listen for input.
    // The callback should:
    rl.on("line", (input) => {
        // - [x] 1. Use your `cleanInput` function to parse the input into an array of words
        const cleanInputResult = cleanInput(input);
        // - [x] 2. If the input is empty, call `.prompt()` to give the user back control to type another commmand and exit the callback
        if (cleanInputResult.length == 0) {
            rl.prompt();
            return;
        }
        // - [x] 3. Otherwise, print the first word back to the user in this format: `Your command was: <first word>`
        const words = input.split(" ");
        const firstWord = words[0];
        // console.log(`Your command was: `, firstWord.toLowerCase());
        console.log(`\nYour command was: ${firstWord.toLowerCase()}`);
        // - [x]  4. Call `.prompt()` to give the user back control to type another command
        rl.prompt();
        // console.log(`Received: ${input}`);
    });
}
