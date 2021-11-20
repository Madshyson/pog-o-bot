require('dotenv').config()
const { channelId } = require('../config.json');

const whoAsked = function (message, lastMessage, client) {
    if (!message.author.bot && (message.createdTimestamp - lastMessage > 1800000) && (Math.floor(Math.random() * 2) === 0)) {
        const channel = client.channels.cache.find(channel => channel.id === channelId);
        channel.send('WH<:OMEGALUL:751459082665197600> ASKED!?');
        lastMessage = message.createdTimestamp;
        return lastMessage;
    }
    lastMessage = message.createdTimestamp;
    return lastMessage;
}

const dota = function (message, lastMessage, client) {
    if (!message.author.bot && message.content.toLowerCase().includes("dota")) {
        const channel = client.channels.cache.find(channel => channel.id === channelId);
        channel.send('DOTA TIME BOYYYS <:PogO:709181281849573418> !');
        lastMessage = message.createdTimestamp;
        return lastMessage;
    }
    lastMessage = message.createdTimestamp;
    return lastMessage;
}

module.exports = {
    whoAsked,
    dota
}