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



// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes

app.use("/api/users", users);
app.use('/api',hotels );
app.use('/api',rooms );
app.use('/api',cities );
app.use('/api',bookers );
app.use('/api',booking );



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));