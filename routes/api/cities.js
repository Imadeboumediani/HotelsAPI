const express = require('express');
const router = express.Router();

const City = require('../../models/citiesMod');


//get all cities
router.get('/getallcities', async (req, res) => {
    try {
        const allcities = await City.find(); 
        res.status(200).json(allcities);
       } catch (error) {
        res.send({error: err.message})
    }
})

// get a City by Name
router.get('/getCity/:name', (req, res, next) => {
    City.findOne({name: req.params.name})
    .exec( (err, cities) => {
        if(err) { res.send({error: err.message}) }
        else { res.send(cities) }
    });
});


// add a new City to db
router.post('/setCity', (req, res, next) => {
    City.create(req.body)
    .then( City => {
        res.send(City);
    }).catch(next);
});

//update a City in db
router.put('/updateCity/:id', (req, res, next) => {
    City.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
        City.findOne({_id: req.params.id})
        .then( City => {
            res.send(City);
        });
    });
});

//delete a City form db
router.delete('/deleteCity/:id', (req, res, next) => {
    City.findByIdAndRemove({_id: req.params.id})
    .then( City => {
        res.send(City);
    });
});

module.exports = router;