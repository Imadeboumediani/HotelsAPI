const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Room = require('./roomMod');
const City = require('./citiesMod');

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
    }],
    city :{
        type:Schema.Types.ObjectId,
        ref :'City'
    },
});

const Hotel = mongoose.model('Hotel', HotelSchema);

module.exports = Hotel;