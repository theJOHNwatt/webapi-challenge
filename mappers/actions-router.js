const express = require('express');
const router = express.Router();
const Model = require('../data/helpers/actionModel.js')


router.get('/', (req, res) => {
    Model.get(req.db)
    .then(mappers => {
        res.status(200).json(mappers);
    })
    .catch(err => {
        res.status(500).json({message:'Could not retrieve data'});
    });
})

router.get('/:id', (req, res) => {
    Model.get(req.params.id)
    .then(mappers => {
        res.status(200).json(mappers);
    })
    .catch(err => {
        res.status(500).json({message:'Could not retrieve data'});
    });
})

module.exports = router;