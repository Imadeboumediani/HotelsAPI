const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creation room Schema et model
const RoomSchema = new Schema({
    hotel: {
        type: String
    },
    number: {
        type: String,
        required: [true, 'Room number est obligatoire']
    },
    type: {
        type: String,
        required: [true, 'Specifiez room type svp !']
    },
    price: {
        type: Number,
        required: [true, 'Specifiez prix par nuit svp !']
    },
    maxGuests: {
        type: Number,
        required: [true, 'Specifiez nombre de personne svp !']
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

const Room = mongoose.model('Room', RoomSchema);

module.exports = Room;