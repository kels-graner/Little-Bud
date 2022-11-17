const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://kelsgraner:littlebud@cluster0.mlhs02z.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'plants'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const PlantSchema = mongoose.Schema({
  common_name: {
    type: String,
    required: true,
  },
  latin_name: {
    type: String
  },
  category: {
    type: String
  },
  origin: {
    type: String
  },
  climate: {
    type: String
  },
  ideal_light: {
    type: String
  },
  tolerated_light: {
    type: String
  },
  water_needs: {
    type: String
  },
  common_diseases: {
    type: String
  }
});


module.exports = mongoose.model('plant', PlantSchema);




// const mongoose = require('mongoose');

// const MONGO_URI = 'mongodb+srv://kelsgraner:KGcodes1@cluster0.hbwof6c.mongodb.net/?retryWrites=true&w=majority';

// mongoose.connect(MONGO_URI, {
//   // options for the connect method to parse the URI
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   // sets the name of the DB that our collections are part of
//   dbName: 'starwars'
// })
//   .then(() => console.log('Connected to Mongo DB.'))
//   .catch(err => console.log(err));

// const Schema = mongoose.Schema;

// // sets a schema for the 'species' collection
// const speciesSchema = new Schema({
//   name: String,
//   classification: String,
//   average_height: String,
//   average_lifespan: String,
//   hair_colors: String,
//   skin_colors: String,
//   eye_colors: String,
//   language: String,
//   homeworld: String,
//   homeworld_id: {
//     // type of ObjectId makes this behave like a foreign key referencing the 'planet' collection
//     type: Schema.Types.ObjectId,
//     ref: 'planet'
//   }
// });

// // creats a model for the 'species' collection that will be part of the export
// const Species = mongoose.model('species', speciesSchema);


// // TODO: create a schema for 'planet' and use it to create the model for it below


// const planetSchema = new Schema({
//   name: String,
//   rotation_period : Number,
//   orbital_period : Number,
//   diameter : Number,
//   climate : String,
//   gravity : String,
//   terrain : String,
//   surface_water : String, 
//   population : Number,
// });

// const Planet = mongoose.model('planet', planetSchema);


// // TODO: create a schema for 'film' and use it to create the model for it below


// const filmSchema = new Schema({
//   title: String,
//   episode_id: Number,
//   opening_crawl: String,
//   director: String,
//   produce: String,
//   release_Date: Date,
// });

// const Film = mongoose.model('film', filmSchema);
// // TODO: create a schema for 'person' and use it to create the model for it below

// const personSchema = new Schema({
//   name: {type: String, required: true},
//   mass: String,
//   hair_color: String,
//   skin_color: String,
//   eye_color: String,
//   birth_year: String,
//   gender: String,
//   species_id: {
//     // type of ObjectId makes this behave like a foreign key referencing the 'species' collection
//     type: Schema.Types.ObjectId,
//     ref: 'species'
//   },
//   homeworold: String,
//   homeworld_id: {
//     // type of ObjectId makes this behave like a foreign key referencing the 'planet' collection
//     type: Schema.Types.ObjectId,
//     ref: 'planet'
//   },
//   height : Number,
//   films : [{title : String, id : { type: Schema.Types.ObjectID, ref: 'film' } }]
// });


// const Person = mongoose.model('person', personSchema);


// // exports all the models in an object to be used in the controller
// module.exports = {
//   Species,
//   Planet,
//   Film,
//   Person
// };
