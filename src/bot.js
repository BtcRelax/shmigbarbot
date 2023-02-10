require('dotenv').config();
const db = require('./db');
// your token from BotFather
const token = process.env.BOT_TOKEN; 
const Bot = require('node-telegram-bot-api'),
    bot = new Bot(token, { polling: true });
    bot.onText(/^\/echo(.+)$/, function (msg, match) {
        bot.sendMessage(msg.chat.id, 'You said ' + match[1])
    });

    bot.onText(/^\/place_order/, function (msg, match) {
        bot.sendMessage(msg.chat.id, "What drugs your want?").then(() => {
            bot.onText(/^(.+)$/, function (msg, match) {
                var text = match[1];
                var option = {
                    "parse_mode": "Markdown",
                    "reply_markup": {
                        "one_time_keyboard": true,
                        "keyboard": [[{
                            text: "Set location",
                            request_location: true
                        }]]
                    }
                };
                bot.sendMessage(msg.chat.id, "Where you want to get a drugs?", option).then(() => {
                    bot.once("location",(msg)=>{
                        bot.sendMessage(msg.chat.id, "We will deliver your order to " + [msg.location.longitude,msg.location.latitude].join(";"));
                })
                // db.addLog({
                //     name: msg.from.first_name,
                //     id: msg.from.id
                // }, {
                //     chat_id: msg.chat.id, 
                //     id: msg.message_id,
                //     text: match[1]
                // })
            });                     
        });
    });
         

/*     bot.onText(/^\/get_logs$/, (msg, match) => {
        db.getLogs(res).then(() => {
            console.log(res);
        });
    });
    bot.onText(/^\/clear_logs$/, (msg, match) => {
        db.clearLogs(res).then(() => {
            console.log(res);
        });
    }); */