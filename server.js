const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const hotels = require("./routes/api/hotels");
const cities = require("./routes/api/cities");
const bookers = require("./routes/api/bookers");
const rooms = require("./routes/api/rooms");
const booking = require("./routes/api/booking");


const app = express();

// utilisation du bodyparser middleware pour body
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());
// config de notre BDD
const db = require("./config/keys").mongoURI;
// connexion à mongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
// utilisation de Passport middleware
app.use(passport.initialize());
// configuration du Passport 
require("./config/passport")(passport);
// tout nos Routes

app.use("/api/users", users);
app.use('/api',hotels );
app.use('/api',rooms );
app.use('/api',cities );
app.use('/api',bookers );
app.use('/api',booking );


//connexion côté serveur
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));