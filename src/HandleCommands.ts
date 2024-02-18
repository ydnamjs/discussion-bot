import {CommandInteraction, Interaction} from "discord.js";
import {COMMAND_NAME as helloWorldCommandName, helloWorldCommandRun} from "./HelloWorldCommand";

const COMMAND_MAP = new Map<string, (interaction: CommandInteraction) => void>([
	[helloWorldCommandName, helloWorldCommandRun],
]);

export async function handleCommands(interaction: Interaction) {
	if (!interaction.isChatInputCommand()) return;

	const commandExecution = COMMAND_MAP.get(interaction.commandName);

	if (commandExecution) {
		commandExecution(interaction);
	}
}
