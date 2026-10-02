// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { discord_token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Log in to Discord with your client's token
client.login(discord_token);
