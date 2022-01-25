const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CitySchema = new Schema({
    name: {
        type: String,
        required: [true, 'le nom est obligatoire']
    },
    lat: {
        type: Number,
    },
    lng: {
        type: Number,
    },
    
});

const City = mongoose.model('City', CitySchema);

module.exports = City;