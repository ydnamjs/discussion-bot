import {SlashCommandBuilder} from "discord.js";

export const HelloWorldCommandData = new SlashCommandBuilder()
	.setName("hello-world")
	.setDescription("says hello to you");
