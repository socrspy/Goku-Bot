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

    switch(args[0]){
        case 'amongus':
            const amongus = new Discord.MessageEmbed()
                .setTitle("Among Us")
                .setDescription("Er word een Among Us game gehost")
                .setColor("#c70039")
                .addField(args[1])
                .setImage("https://play.google.com/store/apps/details?id=com.innersloth.spacemafia&hl=nl")
                .setFooter(message.author.username)
                .setTimestamp
        message.channel.send(amongus);
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

    if(message.content.startsWith(`${PREFIX}delete`)) {
        const user = message.mentions.users.first();
        // Parse Amount
        const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
        //Check if it the amount for message to delete where declared
        if (!amount) return message.reply('Must specify an amount to delete!').then(msg => msg.delete(15000));
        // Fetch 100 messages (will be filtered and lowered up to max amount requested)
        message.channel.fetchMessages({
          limit: 100,
        }).then((messages) => {
            //I declare the messages like that with amount + 1 to delete the command itself
            messages = messages.array().slice(0, amount + 1);
            //And finally buldDelete deletes the desired amount
            message.channel.bulkDelete(messages).then(messages => console.log(`Bulk deleted ${args[0]} messages`))
              .catch(console.error);
    
    
        })
    }

})







bot.login(process.env.token);