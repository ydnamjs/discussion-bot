import {CommandInteraction, SlashCommandBuilder} from "discord.js";

export const COMMAND_NAME = "hello-world";

export const HelloWorldCommandData = new SlashCommandBuilder()
	.setName(COMMAND_NAME)
	.setDescription("says hello to you");

export async function helloWorldCommandRun(interaction: CommandInteraction) {
	interaction.reply("Hello World!");
}
