// your token from BotFather
var token = '5045748920:AAFCw7PmcZYJi5C0k9qTlGY9ZsjSjzNNbOA'; 
var Bot = require('node-telegram-bot-api'),
    bot = new Bot(token, { polling: true });
bot.onText(/^\/echo$/, (msg, match) => {
    bot.sendMessage(msg.chat.id, 'You said ' + match[1])
});
bot.onText(/^\/place_order/, function (msg, match) {
    var option = {
        "parse_mode": "Markdown",
        "reply_markup": {
            "one_time_keyboard": true,
            "keyboard": [[{
                text: "Set location",
                request_location: true
            }], ["Cancel"]]
        }
    };
    bot.sendMessage(msg.chat.id, "Where you want to get a drugs?", option).then(() => {
        console.log('ok');
    })

});