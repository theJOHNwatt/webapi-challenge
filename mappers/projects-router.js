const express = require('express');
const router = express.Router();
const Model = require('../data/helpers/projectModel.js')


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

router.post('/', (req, res) => {
    Model.insert(req.body)
      .then(mappers => {
        res.status(201).json(mappers);
      })
      .catch(err => {
        
        res.status(500).json({
          message: 'Error adding the project',
        });
      });
  });

  router.put('/:id', (req, res) => {
    Model.update(req.params.id, req.body)
      .then(mappers => {
          res.status(200).json(mappers);
      })
      .catch(err => {
        res.status(500).json({
          message: 'Error updating the project',
        });
      });
  });

  router.delete('/:id', (req, res) => {
    Model.remove(req.params.id)
      .then(count => {
        if (count > 0) {
          res.status(200).json(count);
        } else {
          res.status(404).json({ message: 'The project could not be found' });
        }
      })
      .catch(err => {
        res.status(500).json({
          message: 'Error removing the project',
        });
      });
  });





module.exports = router;
