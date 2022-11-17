const Plant = require('../models/plantModels.js');


const plantController = {};

plantController.addPlant = (req, res, next) => {
  // const { common_name, latin_name, sunlight_needs, water_needs } = req.body;
  const { newPlantInfo } = res.locals;

  Plant.create({
    common_name: newPlantInfo.common[0],
    latin_name: newPlantInfo.latin,
    category: newPlantInfo.category,
    origin: newPlantInfo.origin,
    climate: newPlantInfo.climate,
    ideal_light: newPlantInfo.ideallight,
    tolerated_light: newPlantInfo.toleratedlight,
    water_needs: newPlantInfo.watering,
    common_diseases: newPlantInfo.diseases
  },
    (err, newPlant) => {
      if (err) {
        return next({
          log: 'Error in plantController.addPlant',
          status: 400,
          message: { err: 'Error in plantController.addPlant' },
        }
        );
      } else {
        res.locals.newPlant = newPlant;
        return next();
      }
    });
},

  plantController.getAllPlants = (req, res, next) => {
    Plant.find({},
      (err, foundPlants) => {
        // console.log(foundPlants)
        if (err) {
          return next({
            log: 'Error in plantController.getAllPlants',
            status: 400,
            message: { err: 'Error in plantController.getAllPlants' },
          }
          );
        } else {
          res.locals.foundPlants = foundPlants;
          return next();
        }
      });
  },

  plantController.deletePlant = (req, res, next) => {
    const str = req.params.name;
    const strWithSpace = str.replace(/-/g, ' '); 
    Plant.findOneAndDelete({common_name: strWithSpace},
      (err, deletedPlant) => {
        if (err) {
          return next({
            log: 'Error in plantController.deletePlant',
            status: 400,
            message: { err: 'Error in plantController.deletePlant' },
          }
          );
        } else {
          res.locals.deletedPlant = deletedPlant;
          return next();
        }
      });
  },

  

  module.exports = plantController;
