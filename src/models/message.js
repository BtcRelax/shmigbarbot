const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    user: {
        name: String,
        id: Number
    },
    message: {
        chat_id: String,
        id: String,
        text: String
    },
    timestamp: String
});

module.exports = model('Messages', schema);