const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CitySchema = new Schema({
    name: {
        type: String,
    },
    lat: {
        type: Number,
    },
    lng: {
        type: Number,
    },
    
});

module.exports = City = mongoose.model("cities", CitySchema);