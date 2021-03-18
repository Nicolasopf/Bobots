const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const prefix = "!";
client.login(config.BOT_TOKEN);

setInterval(() => {
    var channnel = client.channels.cache.get('ID'); // YOU SHOULD PUT THE CHANNEL ID HERE
    channnel.send("MESSAGE HERE"); // PUT YOUR MESSAGE HERE
}, 5000);

client.on("message", function(message) {
    if (!message.content.startsWith(prefix)) return;
    message.reply("Hello cock sucker");
});
