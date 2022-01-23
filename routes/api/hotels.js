const express = require('express');
const router = express.Router();

const Hotel = require('../../models/hotelsMod');


//get all Hotels
router.get('/getallHotels', async (req, res) => {
    try {
        const allHotels = await Hotel.find().populate('rooms'); 
        res.status(200).json(allHotels);
       } catch (error) {
        res.status(404).json({message :error.message})
    }
})

// get a Hotel by Name
router.get('/gethotel/:name', (req, res, next) => {
    Hotel.findOne({name: req.params.name})
    .populate('rooms')
    .exec( (err, hotels) => {
        if(err) { res.send({error: err.message}) }
        else { res.send(hotels) }
    });
});


// add a new hotel to db
router.post('/hotels', (req, res, next) => {
    Hotel.create(req.body)
    .then( hotel => {
        res.send(hotel);
    }).catch(next);
});

//update a hotel in db
router.put('/hotels/:id', (req, res, next) => {
    Hotel.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
        Hotel.findOne({_id: req.params.id})
        .then( hotel => {
            res.send(hotel);
        });
    });
});

//delete a hotel form db
router.delete('/hotels/:id', (req, res, next) => {
    Hotel.findByIdAndRemove({_id: req.params.id})
    .then( hotel => {
        res.send(hotel);
    });
});

module.exports = router;