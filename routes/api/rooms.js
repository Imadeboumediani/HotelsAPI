const express = require('express');
const router = express.Router();

const Room = require('../../models/roomMod');
const Hotel = require('../../models/hotelsMod');

// get all rooms from DB
router.get('/getallrooms', async (req, res) => {
    try {
        const allrooms = await Room.find(); 
        res.status(200).json(allrooms);
       } catch (error) {
        res.send({error: err.message})
    }
})

// get all rooms of an Hotel
router.get('/getallroomsbyhotel/:hotel', (req, res, next) => {
    Room.find({hotel: req.params.hotel}, req.body)
        .then( room => {
            res.send(room);
        });
})

// add a new room in a hotel
router.post('/addroom', (req, res, next) => {
    Room.create(req.body)
    .then( room => {
        res.send(room);
    }).catch(next);
});

//update a room in DB
router.put('/updateRooms/:id', (req, res, next) => {
    Room.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
        Room.findOne({_id: req.params.id})
        .then( room => {
            res.send(room);
        });
    });
});

//delete a room form DB
router.delete('/deleteRooms/:id', (req, res, next) => {
    Room.findByIdAndRemove({_id: req.params.id})
    .then( room => {
        res.send(room);
    });
});

module.exports = router;