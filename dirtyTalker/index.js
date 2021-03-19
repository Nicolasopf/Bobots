const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const prefix = "!";
var channnel = {};
var list = {};
//var memberlist = {};
//var randmem = {};
//var memmber = {};

client.on("message", function(message) {
    if (!message.content.startsWith(prefix)) return;
    if (message.content === "!start") { // If user type !start in a channel, the bot will start giving automatic message every 1 minut
	message.reply(typeof(message.channel.id));
	channnel.id = client.channels.cache.get(message.channel.id);
	list.id = client.guilds.cache.get(message.guild.id);
	message.reply(list.id.memberCount);
	list.id.members.cache.forEach(member => {
	    message.reply("<@"+member.id+">")
	    //memmber.id.push(member.id);
	});
	//message.reply(typeof(member.id.user.username));
	//randmem.id = memberlist.id[Math.floor(Math.random() * memberlist.id.length)]
	//message.reply(typeof(randmem.id));
	//console.log(memberlist.id);
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
