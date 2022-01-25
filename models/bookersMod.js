const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const City = require('./citiesMod');

// Schema d'un Booker
const BookerSchema = new Schema({
  // Nom
  lastname: {
    type: String,
    required: true
  },
  // Prénom
  firstname: {
    type: String,
    required: true
  },
  // Sexe
  sexe: {
    type: String,
    required: false,
    default: ""
  },
   // Age
   age: {
    type: Number,
    required: false,
    default: ""
  },
  // Adresse mail
  email: {
    type: String,
    required: true
  },
  // photo de profil
  picture: {
    type: String,
    required: false,
    default: "default-avatar.png"
  },
  // Ville
  city: {
    type:Schema.Types.ObjectId,
    ref :'City'
  },

  // Numéro de téléphone
  phonenumber: {
    type: String,
    required: true,
    default: ""
  },
},);
 const Booker = mongoose.model('Booker', BookerSchema);

module.exports = Booker;