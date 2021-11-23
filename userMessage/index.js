require('dotenv').config()
const axios = require("axios");
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
        message.react('<:KKomrade:751464244561838100>');
    }
    if (!message.author.bot && message.content.toLowerCase().includes("bad bot")) {
        message.react('<:pepeLaugh:751459148981338163>');
    }
}

const cat =  async function(message) {
    if (!message.author.bot && message.content.toLowerCase().includes("!cat")) {
        let res = await axios.get("https://aws.random.cat/meow");
        message.react('<:pngclipartemojidiscordsmileyshru:911673348516347914>');
	    message.reply(res.data.file);
    }
}

module.exports = {
    whoAsked,
    dota,
    league,
    reactToLUMIA,
    reactGoodOrBad,
    dis,
    cat
}