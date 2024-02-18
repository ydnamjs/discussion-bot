import {REST, Routes} from "discord.js";
import {BOT_TOKEN, CLIENT_ID, GUILD_ID} from "../config";

const COMMAND_LIST: object[] = [];

import {HelloWorldCommandData} from "./HelloWorldCommand";
COMMAND_LIST.push(HelloWorldCommandData.toJSON());

main();

async function main() {
	const rest = new REST().setToken(BOT_TOKEN);

	try {
		console.log("Registering commands...");

		console.log(COMMAND_LIST);

		await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {body: COMMAND_LIST});

		console.log(`Successfully registered commands!`);
	} catch (error) {
		console.error(error);
		process.exit();
	}
}
