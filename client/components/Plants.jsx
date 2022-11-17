import React, { Component } from "react";
import PlantCard from './PlantCard.jsx';

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
      <section className="myPlants">
        <header className="myPlantsHeader">
          <h2>My Plants</h2>
        </header>
        <div className="plantContainer">
          {plantElems}
        </div>
      </section>
    );
  }
}

export default Plants;
