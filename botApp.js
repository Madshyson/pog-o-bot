const { clientId, channelId, roleId, guildId } = require('./config.json');
let currentChannel;
let lastMessage = 0;

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const chooseResponse = function (message, author) {
    //handle response
}

client.on('ready', () => {
    console.log('Coucou !');
    const channel = client.channels.cache.find(channel => channel.id === channelId);
    channel.send('PogO it\'s me !');
    client.user.setActivity('Who asked ?');
});

client.on('messageCreate', message => {
    if(message.author.bot) {
    } else if ((message.createdTimestamp - lastMessage > 1800000) && (Math.floor(Math.random() * 2) === 0)) {
        const channel = client.channels.cache.find(channel => channel.id === channelId);
        channel.send('WH<:OMEGALUL:751459082665197600> ASKED!?');
        lastMessage = message.createdTimestamp;
    } else {
        lastMessage = message.createdTimestamp;
    }
});

client.login(process.env.BOTTOKEN);