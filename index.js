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
const config = require(`./config.json`)
 const token = config.token;
 const STREAMING = config.token;
client.config = config

client.on('messageCreate', message => {
    if (message.author.bot) return; // تجاهل الرسائل من البوتات

    // التأكد من أن الرسالة تبدأ بالبريفيكس المطلوب، مثلاً '!'
    if (message.content.startsWith('STREAMINGSTREAMING')) {
        // إرسال رد تلقائي
        message.reply(STREAMING);
    }
});

client.on('ready', async () => {

    const rpc = new Discord.RichPresence()
        .setApplicationId('1152760409405788162')
        .setType('STREAMING')
        .setURL(`https://www.twitch.tv/za3em_clombe`)
        .setDetails(`𝚃𝚑𝚎 𝙱𝚎𝚜𝚝 𝙳𝚎𝚟𝚕𝚘𝚙𝚎𝚛 🫠`)
        .setName(`𝐙𝐀𝟑𝐄𝐌 💪👾`)
        .setState(`🥇 ⚙️ 📛 🎮 💲 😡`)

        .setAssetsLargeImage(`https://cdn.discordapp.com/attachments/1239242458630586481/1239591580877324288/freeze-corleone-baton-rouge-1.gif?ex=66437b1f&is=6642299f&hm=8a8b1182f482c6cc9c0749022d8c02d59de0c1d1dbe41b28a4dae6287851e295&`)
        .setAssetsLargeText(`𝐙𝐀𝟑𝐄𝐌 💪👾`)
        .setAssetsSmallImage(`https://cdn.discordapp.com/attachments/1239242458630586481/1239591580877324288/freeze-corleone-baton-rouge-1.gif?ex=66437b1f&is=6642299f&hm=8a8b1182f482c6cc9c0749022d8c02d59de0c1d1dbe41b28a4dae6287851e295&`)
        .setAssetsSmallText(`669`)
        .addButton(`669 🕹`, `https://discord.gg/RVFdkP2j4n`)
        .addButton(`Bot Ai 👾`, `https://discord.com/oauth2/authorize?client_id=1230541589072445482&permissions=0&scope=bot`);

client.user.setActivity(rpc.toJSON());

    console.log(`${client.user.tag} is ready!`);
});

client.on('messageCreate', message => {
    if (message.author.bot) return; // تجاهل الرسائل من البوتات

    // التأكد من أن الرسالة تبدأ بالبريفيكس المطلوب، مثلاً '!'
    if (message.content.startsWith('<@1152760409405788162>')) {
        // إرسال رد تلقائي
        message.reply('مرحبا! اتمنى منك الصبر وعدم تكرار المنشن وانتضار زعيم لرد عليك وشكرا .');
    }
});

client.on('messageCreate', message => {
    if (message.author.bot) return; // تجاهل الرسائل من البوتات

    // التأكد من أن الرسالة تبدأ بالبريفيكس المطلوب، مثلاً '!'
    if (message.content.startsWith('ZA3EM')) {
        // إرسال رد تلقائي
        message.reply('اذا حاب مشاكل ارواح تابي في بريفي');
    }
});

client.on('messageCreate', message => {
    if (message.author.bot) return; // تجاهل الرسائل من البوتات

    // التأكد من أن الرسالة تبدأ بالبريفيكس المطلوب، مثلاً '!'
    if (message.content.startsWith('za3em')) {
        // إرسال رد تلقائي
        message.reply('اذا حاب مشاكل ارواح تابي في بريفي');
    }
});

client.on('messageCreate', message => {
    if (message.author.bot) return; // تجاهل الرسائل من البوتات

    // التأكد من أن الرسالة تبدأ بالبريفيكس المطلوب، مثلاً '!'
    if (message.content.startsWith('زعيم')) {
        // إرسال رد تلقائي
        message.reply('اذا حاب مشاكل ارواح تابي في بريفي');
    }
});
client.on('messageCreate', message => {
    if (message.author.bot) return; // تجاهل الرسائل من البوتات

    // التأكد من أن الرسالة تبدأ بالبريفيكس المطلوب، مثلاً '!'
    if (message.content.startsWith('9WD')) {
        // إرسال رد تلقائي
        message.reply('اذا حاب مشاكل ارواح تابي في بريفي');
    }
});

client.on('messageCreate', message => {
    if (message.author.bot) return; // تجاهل الرسائل من البوتات

    // التأكد من أن الرسالة تبدأ بالبريفيكس المطلوب، مثلاً '!'
    if (message.content.startsWith('9wd')) {
        // إرسال رد تلقائي
        message.reply('اذا حاب مشاكل ارواح تابي في بريفي');
    }
});

client.on('messageCreate', message => {
    if (message.author.bot) return; // تجاهل الرسائل من البوتات

    // التأكد من أن الرسالة تبدأ بالبريفيكس المطلوب، مثلاً '!'
    if (message.content.startsWith('قود')) {
        // إرسال رد تلقائي
        message.reply('اذا حاب مشاكل ارواح تابي في بريفي');
    }
});
//Account Token

client.login(token);