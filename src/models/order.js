const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    user: {
        name: String,
        id: Number
    },
    order: {
        id: String,
        text: String,
        longitude: String,
        latitude: String,
    },
    timestamp: String
});

module.exports = model('Order', schema);