// - [ ] Update the `help` command handler to use the commands registry via the `State` object
export function commandHelp(state) {
    console.log("Welcome to the Pokedex!");
    console.log("\nAvailable commands:\n");
    for (const commandName in state.commands) {
        const command = state.commands[commandName];
        console.log(`${command.name}: ${command.description}`);
    }
}
