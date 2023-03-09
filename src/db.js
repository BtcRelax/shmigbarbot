require('dotenv').config();
var mongoose = require("mongoose");
var Message = require('./models/message');
var TgUser = require('./models/user');

var uristring = process.env.MONGODB_URI;

mongoose.connect(uristring, function (err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
        console.log('Succeeded connected to: ' + uristring);
    }
})

module.exports = { 
    getLogs(cb) {
        Message.find({}).exec(function (err, result) {
            cb(result);
        })
    },

    clearLogs(cb) {
        Message.remove({}, cb);
    },

    addLog(user, message, cb) {
        dbmsg = new Message({
            user: user,
            message: message,
            timestamp: new Date().toISOString()
        }).save(cb);
    }
}