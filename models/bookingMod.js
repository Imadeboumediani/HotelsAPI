const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Room = require('./roomMod');
const Hotel = require('./hotelsMod');
const User = require('./usersMod');
const Booker = require('./bookersMod');



// create booking Schema and model
const BookingSchema = new Schema({
    hotel: {
        type: Schema.Types.ObjectId,
        ref: 'Hotel',
    },
    room: {
        type: Schema.Types.ObjectId,
        ref: 'Room',
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    checkin: {
        type: Date,
        required: [true, 'Checkin date est obligatoire'],
    },
    checkout: {
        type: Date,
        required: [true, 'Checkout date est obligatoire']
    },
    guests: {
        type: Number,
        required: [true, 'Number of guests est obligatoire']
    },
    nights: {
        type: Number,
        required: [true, 'Number of nights est obligatoire']
    },
    adults: {
        type: Number
    },
    children: {
        type: Number,
        default: 0
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    allbookers: [{
        type: Schema.Types.ObjectId,
        ref: 'Booker',
    }],
});

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;
