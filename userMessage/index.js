require('dotenv').config()
const { channelId } = require('../config.json');

const whoAsked = function (message, lastMessage, client) {
    if (!message.author.bot && (message.createdTimestamp - lastMessage > 1800000) && (Math.floor(Math.random() * 2) === 0)) {
        const channel = client.channels.cache.find(channel => channel.id === channelId);
        channel.send('WH<:OMEGALUL:751459082665197600> ASKED!?');
    }
}

const dota = function (message, lastMessage, client) {
    if (!message.author.bot && message.content.toLowerCase().includes("dota")) {
        message.react('<:PogO:709181281849573418>');
    }
}

const league = function (message, lastMessage, client) {
    if (!message.author.bot && message.content.toLowerCase().includes("league") && message.content.toLowerCase().includes("legends")) {
        message.react('<:OMEGALUL:751459082665197600>');
    }
}

const reactToGnocchi = function (message, lastMessage, client) {
    if (!message.author.bot && message.author.id === '189322097191813126' && (Math.floor(Math.random() * 5) === 0)) {
        message.react('<:WhatChamp:821399722224779286>');
    }
}

module.exports = {
    whoAsked,
    dota,
    league,
    reactToGnocchi
}