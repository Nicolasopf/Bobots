const Discord = require("discord.js");
const config = require("./config.json");
const cron = require('cron');

const client = new Discord.Client();

const prefix = "!";

//client.on("ready", () => {
//    var channel = client.channels.find(channel => channel.name === 'general');
//    setInterval(() => {
//	channel.send("DIEGO ES UNA FLOR EN OTOÑO, ESTÁ MAS MUERTO QUE VIVO")
//    }, 5000);
//});

client.on("message", function(message) {
    if (message.author.bot) return;
    setInterval(() => {
	message.reply("DIEGO ES UNA FLOR EN OTOÑO, ESTÁ MAS MUERTO QUE VIVO")
    }, 5000);
    if (!message.content.startsWith(prefix)) return;
    message.reply("holi");
});

client.login(config.BOT_TOKEN);
