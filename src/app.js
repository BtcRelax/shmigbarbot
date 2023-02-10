const { Telegraf } = require('telegraf')
require('dotenv').config()
var token = process.env.BOT_TOKEN; 
const bot = new Telegraf(token)
bot.start((ctx) => {
    console.log(ctx.from);
    bot.telegram.sendMessage(
       ctx.chat.id,
       "Ты шо за хуй?",
        {
          reply_markup: JSON.stringify({
            "keyboard": [
              [
                "Я мусор",
                "Я торчёк"
              ]
            ],
            "resize_keyboard": true,
            "one_time_keyboard": true
          }),
        }
    );
})

bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))


bot.hears('🔍 Search', ctx => ctx.reply('Yay!'))
bot.hears('📢 Ads', ctx => ctx.reply('Free hugs. Call now!'))

bot.action(/.+/, (ctx) => {
  return ctx.answerCbQuery(`Oh, ${ctx.match[0]}! Great choice`)
})

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
