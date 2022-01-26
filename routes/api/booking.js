const express = require('express');
const router = express.Router();

const Booking = require('../../models/bookingMod');


//get all booking
router.get('/getallbooking', (req, res,next) => {
    Booking.find()
    //Affichage de notre user booker hotel et room pendant la requete
    .populate('user')
    .populate('allbookers')
    .populate('hotel')
    .populate('room')   
    .exec( (err, bookings) => {
        if(err) { res.send({error: err.message}) }
        else { res.send(bookings) }
    });
})

// get a Booking by Name
router.get('/getBooking/:id', (req, res, next) => {
    Booking.findOne({_id: req.params.id})
    //Affichage de notre user booker hotel et room pendant la requete
    .populate('user')
    .populate('allbookers')
    .populate('hotel')
    .populate('room') 
    .exec( (err, bookings) => {
        if(err) { res.send({error: err.message}) }
        else { res.send(bookings) }
    });
});


// add a new Booking to DB
router.post('/setBooking', (req, res, next) => {
    Booking.create(req.body)
    .then( bookings => {
        res.send(bookings);
    }).catch(next);
});

//update a Booking in DB
router.put('/updateBooking/:id', (req, res, next) => {
    Booking.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
        Booking.findOne({_id: req.params.id})
        .then( bookings => {
            res.send(bookings);
        });
    });
});

//delete a Booking form DB
router.delete('/deleteBooking/:id', (req, res, next) => {
    Booking.findByIdAndRemove({_id: req.params.id})
    .then( bookings => {
        res.send(bookings);
    });
});

module.exports = router;