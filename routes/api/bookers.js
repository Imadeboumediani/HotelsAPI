const express = require('express');
const router = express.Router();

const Booker = require('../../models/bookersMod');


//get all bookers
router.get('/getallbookers', (req, res,next) => {
    Booker.find()
    .populate('city') 
    .exec( (err, bookers) => {
        if(err) { res.send({error: err.message}) }
        else { res.send(bookers) }
    });
})

// get a Booker by Name
router.get('/getBooker/:lastname', (req, res, next) => {
    Booker.findOne({lastname: req.params.lastname})
    .populate('city')
    .exec( (err, bookers) => {
        if(err) { res.send({error: err.message}) }
        else { res.send(bookers) }
    });
});


// add a new Booker to DB
router.post('/setBooker', (req, res, next) => {
    Booker.create(req.body)
    .then( Booker => {
        res.send(Booker);
    }).catch(next);
});

//update a Booker in DB
router.put('/updateBooker/:id', (req, res, next) => {
    Booker.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
        Booker.findOne({_id: req.params.id})
        .then( Booker => {
            res.send(Booker);
        });
    });
});

//delete a Booker form DB
router.delete('/deleteBooker/:id', (req, res, next) => {
    Booker.findByIdAndRemove({_id: req.params.id})
    .then( Booker => {
        res.send(Booker);
    });
});

module.exports = router;