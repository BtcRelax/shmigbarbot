require('dotenv').config();
var db = require('./db');
var axios = require('axios');
// your token from BotFather
var token = process.env.BOT_TOKEN;
var kuna_api_url = process.env.KUNA_API_URL;

var Bot = require('node-telegram-bot-api'),
    bot = new Bot(token, {
        polling: true
    });

bot.onText(/^\/echo(.+)$/, function (msg, match) {
    bot.sendMessage(msg.chat.id, 'You said ' + match[1])
});

/// Command \place_order
bot.onText(/^\/place_order/, function (msg, match) {
    bot.sendMessage(msg.chat.id, "What drugs your want?").then(() => {
        bot.onText(/^(.+)$/, function (msg, match) {
            var text = match[1];
            var option = {
                "parse_mode": "Markdown",
                "reply_markup": {
                    "one_time_keyboard": true,
                    "keyboard": [
                        [{
                            text: "Set location",
                            request_location: true
                        }]
                    ]
                }
            };
            bot.sendMessage(msg.chat.id, "Where you want to get a drugs?", option).then(() => {
                bot.once("location", function (msg) {
                    bot.sendMessage(msg.chat.id, "We will deliver your order to " + [msg.location.longitude, msg.location.latitude].join(";"));
                });
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
});

/// Get balance and return result
bot.onText(/^\/get_balance/, function (msg, match) {            
    var config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `http://${kuna_api_url}/api/kuna/getbalance`,
        headers: {}
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            bot.sendMessage(msg.chat.id, JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });

});

/// Command of activation given code 
bot.onText(/^\/activate_kunacode(.+)$/, function (msg, match) {            
    var kunacode = match[1];

    var data = JSON.stringify({
        "code": kunacode
      });
    
      var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `http://${kuna_api_url}/api/kuna/kunacodeactivate`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        bot.sendMessage(msg.chat.id, "Successfuly catched: " + JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
        bot.sendMessage(msg.chat_id, "Fucking shit while activating|:" + error);
      });      
});

///  Get logs from database
bot.onText(/^\/get_logs$/, (msg, match) => {
    db.getLogs(res).then(() => {
        console.log(res);
    });
});

/// Clear logs from database
bot.onText(/^\/clear_logs$/, (msg, match) => {
    db.clearLogs(res).then(() => {
        console.log(res);
    });
});