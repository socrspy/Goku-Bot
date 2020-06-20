const Discord = require('discord.js');
const bot = new Discord.Client();
const superagent = require("superagent")
const PREFIX = "!";


bot.on('ready', () =>{
    console.log('goku is online');
});

require("./functions")(bot);

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.afk = new Map();

module.exports.bot = bot;

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.cache.find(channel => channel.name === "welcome-pendejo");
    if(!channel) return;

    channel.send(`Welcome pendejo, ${member}, please read the rules man! Much appreciated aye.`)

});

bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX.length).split(" ");
    
    switch(args[0]){
        case 'serverlink':
        message.channel.send('https://discord.gg/d2Fjj2M')
        break;

    

    }

    

    if (message.content.includes('kanker')) {

        message.delete();
        message.author.send('Sorry dit woord is blacklisted op deze server! Beetje rustig he papi!')


    }
    
    if (message.content.includes('!dog')) {
        (async() => {
            let msg = await message.channel.send("Whistles dog...")
            })

        (async() => {
            let {body} = await superagent
            })
        .get('https://dog.ceo/api/breeds/image/random')
        //console.log(body.file)
        if(!{body}) return message.channel.send ("Your dog didn't make it in time! Try again")
        
        let dEmbed = new Discord.RichEmbed()
        .setImage(body.message)
        .setFooter('Dog Bot')

        message.channel.send({embed: dEmbed})

        msg.delete();

    }

})





bot.login(process.env.token);