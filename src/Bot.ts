import {Client, Events, GatewayIntentBits} from "discord.js";
import {BOT_TOKEN} from "../config";

function main() {
	const bot = new Client({intents: [GatewayIntentBits.Guilds]});

	bot.once(Events.ClientReady, (readyClient) => {
		console.log(`Ready! Logged in as ${readyClient.user.tag}`);
	});

	bot.login(BOT_TOKEN);
}

main();
