const { clientId, channelId, roleId, guildId, token } = require('./config.json');
let currentChannel;

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    currentChannel = client.channels.cache.get(channelId);
    client.user.setActivity('');
});
