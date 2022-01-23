const mongoose = require("mongoose");
const Schema = mongoose.Schema;


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
    type: String,
    required: false,
    default: ""
  },

  // Numéro de téléphone
  phonenumber: {
    type: String,
    required: true,
    default: ""
  },
}, {collection: "Bookers"});  // Nom de la collection dans la BDD (laisser vide pour nouvelle collection)

module.exports = Booker = mongoose.model(
  "Bookers",          // Id modèle (si nouvelle collection, ce sera son nom)
  BookerSchema,       // Nom du schema (ci dessus)
  "Bookers"           // Nom de la collection dans la BDD (laisser vide pour nouvelle collection)
);