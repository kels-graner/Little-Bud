const express = require('express');

const plantController = require('../controllers/plantController');

const apiController = require('../controllers/apiController')

const router = express.Router();

router.post('/:name', //send to /api/common name
  apiController.getNewPlant,
  plantController.addPlant,
  (req, res) => res.status(200).json(res.locals.newPlant));

router.delete('/:name',
  plantController.deletePlant,
  (req, res) => res.status(200).json(res.locals.deletedPlant));

router.patch('/:name',
  plantController.updatePlant,
  (req, res) => (req, res) => res.status(200).json(res.locals.updatedPlant));

router.get('/', //send to /api
  plantController.getAllPlants,
  (req, res) => res.status(200).json(res.locals.foundPlants));


module.exports = router;