const express = require('express');
const router = express.Router();

const Hotel = require('../../models/hotelsMod');


//get all Hotels
router.get('/getallHotels', async (req, res) => {

        Hotel.find()
        .populate('rooms')
        .populate('city') 
        .exec( (err, hotels) => {
            if(err) { res.send({error: err.message}) }
            else { res.send(hotels) }
        });
})

// get a Hotel by Name
router.get('/gethotel/:name', (req, res, next) => {
    Hotel.findOne({name: req.params.name})
    .populate('rooms')
    .populate('city')
    .exec( (err, hotels) => {
        if(err) { res.send({error: err.message}) }
        else { res.send(hotels) }
    });
});


// add a new hotel to DB
router.post('/sethotel', (req, res, next) => {
    Hotel.create(req.body)
    .then( hotel => {
        res.send(hotel);
    }).catch(next);
});

//update a hotel in db
router.put('/updatehotel/:id', (req, res, next) => {
    Hotel.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
        Hotel.findOne({_id: req.params.id})
        .then( hotel => {
            res.send(hotel);
        });
    });
});

//delete a hotel form DB
router.delete('/deletehotel/:id', (req, res, next) => {
    Hotel.findByIdAndRemove({_id: req.params.id})
    .then( hotel => {
        res.send(hotel);
    });
});

module.exports = router;