
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const room = require('./roomModel');
const hotel = require('./hotelModel');
const user = require('./userModel');

// create booking Schema and model
const BookingSchema = new Schema({
    hotel: {
        type: String
    },
    checkin: {
        type: Date,
        required: [true, 'Checkin date est obligatoire']
    },
    checkout: {
        type: Date,
        required: [true, 'Checkout date est obligatoire']
    },
    amount: {
        type: Number,
        required: [true, 'Total amount est obligatoire']
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
    }
});

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;
