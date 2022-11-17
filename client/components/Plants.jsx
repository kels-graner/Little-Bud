import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PlantCard from './PlantCard.jsx';
import Headers from './Headers.jsx';

class Plants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedPlants: false,
      plants: []
    };
  }

  componentDidMount() {
    fetch('/api/')
      .then(plants => plants.json())
      .then((parsedPlants) => {
        return this.setState({
          plants: parsedPlants,
          fetchedPlants: true
        })
      })
      .catch(err => console.log('Plants.componentDidMount: get plants: ERROR: ', err));
  }

  render() {

    const { plants } = this.state;

    const plantElems = plants.map((plant, i) => {
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
      <Link to={'/addPlant'}>
        <button
          type="button"
          className="linkButton">Add New Plants</button>
      </Link>
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
}

export default Plants;
