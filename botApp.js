const { clientId, channelId, roleId, guildId, token } = require('./config.json');
let currentChannel;

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
    //currentChannel = client.channels.cache.get(channelId);
    client.user.setActivity('Who asked ?');
});

client.login(token);