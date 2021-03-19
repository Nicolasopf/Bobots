const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const prefix = "!";
var channnel = {};

client.on("message", function(message) {
    if (!message.content.startsWith(prefix)) return;
    if (message.content === "!start") { // If user type !start in a channel, the bot will start giving automatic message every 1 minute
	message.reply(typeof(message.channel.id));
	channnel.id = client.channels.cache.get(message.channel.id);
	auto_msg();
    }
    else message.reply('Hello cock sucker');
});

function auto_msg() {
    setInterval(() => {
	channnel.id.send('MESSAGE HERE'); // PUT YOUR MESSAGE HERE
    }, 1000);
};


// Start the bot
client.login(config.BOT_TOKEN);
