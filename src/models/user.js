const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    user: {
        name: String,
        id: Number
    },
    timestamp: String
});

module.exports = model('TgUsers', schema);