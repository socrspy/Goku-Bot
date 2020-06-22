const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {

    let reddit = [
        "puppy",
    ]

    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];


    randomPuppy(subreddit).then(async url => {
            await message.channel.send({
                files: [{
                    attachment: url,
                    name: 'puppy.png'
                }]
            })
    }).catch(err => console.error(err));

};

module.exports.help = {
    name: 'puppy',
    aliases: ['puppy']
}