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
    if (message.channelId === channelId) {
        userMessage.whoAsked(message, lastMessage, client);
        userMessage.dota(message);
        userMessage.league(message);
        userMessage.reactToLUMIA(message);
        userMessage.reactGoodOrBad(message);
        userMessage.dis(message, client);
        userMessage.cat(message);
        lastMessage = message.createdTimestamp;
    }
});

client.login(process.env.BOTTOKEN);