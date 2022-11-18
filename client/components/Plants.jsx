import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import PlantCard from './PlantCard.jsx';
import Headers from './Headers.jsx';

const Plants = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch('/api/')
      .then(plants => plants.json())
      .then((parsedPlants) => {
       //need return?
        return setState(parsedPlants)
      })
      .catch(err => console.log('Plants.componentDidMount: get plants: ERROR: ', err));
  })

  const plantElems = state.map((plant, i) => {
    return (
      <PlantCard
        key={i}
        info={plant}
      />
    );
  });

  return (
    <section className="mainSection">
      <Headers />
      <div className="newPlantSection">
        <h3>Ohhhhhh baby! Is that a new plant??</h3>
        <Link to={'/addPlant'}>
          <button
            type="button"
            className="linkButton">Add New Plant...</button>
        </Link>
      </div>
      <section className="myPlants">
        <header className="myPlantsHeader">
          <h2>My Plants</h2>
        </header>
        <div className="plantContainer">
          {plantElems}
        </div>
      </section>
    </section>
  );
}

export default Plants;
