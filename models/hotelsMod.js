const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Room = require('./roomMod');

// create hotel Schema and model
const HotelSchema = new Schema({
    name: {
        type: String,
        required: [true, 'nom Hotel est obligatoire']
    },
    stars: {
        type: Number
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    rooms: [{
        type: Schema.Types.ObjectId,
        ref: 'Room',
    }]
});

const Hotel = mongoose.model('Hotel', HotelSchema);

module.exports = Hotel;