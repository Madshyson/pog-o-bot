require('dotenv').config()
const { clientId, channelId, roleId, guildId } = require('./config.json');
let currentChannel;
let lastMessage = 0;

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const userMessage = require('./userMessage')

const chooseResponse = function (message, author) {
    //handle response
}

client.on('ready', () => {
    console.log('Coucou !');
    const channel = client.channels.cache.find(channel => channel.id === channelId);
    client.user.setActivity('PogO ?');
});

client.on('messageCreate', message => {
    lastMessage = userMessage.whoAsked(message, lastMessage, client);
    lastMessage = userMessage.dota(message, lastMessage, client);
});

client.login(process.env.BOTTOKEN);