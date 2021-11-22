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

const reactToLUMIA = function (message, lastMessage, client) {
    if (!message.author.bot && message.author.id === '221996422877151232' && (Math.floor(Math.random() * 2) === 0)) {
        message.react('<:AYAYA:751459128370659479>');
    }
}

const dis = function (message, client) {
    const channel = client.channels.cache.find(channel => channel.id === channelId);
    if (message.content.length <= 150 && (Math.floor(Math.random() * 4) === 0)) {
        const wordlist = message.content.toLowerCase().split(" ");
        wordlist.map((word) => {
            if (word.substr(0, 2) === 'di' && word.length >= 5) {
                channel.send(word.substr(2, word.length - 2).toString() + ' <:LULW:751461218991996980>');
            }
        })
    }
}

const reactGoodOrBad = function (message, lastMessage, client) {
    if (!message.author.bot && message.content.toLowerCase().includes("good bot")) {
        message.react('<:PogO:709181281849573418>');
    }
    if (!message.author.bot && message.content.toLowerCase().includes("bad bot")) {
        message.react('<:SillyChamp:774750190413414400>');
    }
}

module.exports = {
    whoAsked,
    dota,
    league,
    reactToGnocchi,
    reactToLUMIA,
    reactGoodOrBad,
    dis,
}