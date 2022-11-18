import React from "react";

const PlantCard = ({ info }) => {
  //add functions here
  const handleDelete = (event) => {
    const id = event.target.id;
    const idNoSpaces = id.replace(/\s+/g, '-');
    const uri = `/api/${idNoSpaces}`;
    const details = { method: 'DELETE' };
    fetch(uri, details)
      .then(response => {
        if (response !== 200) {
          console.log('There was a problem trying to delete this plant. Please try again.');
          return;
        } else {
          console.log(response.json);
          return;
        }
      })
    window.location.reload();
  }

  const handleWater = (event) => {
    const id = event.target.id;
    const idNoSpaces = id.replace(/\s+/g, '-');
    const uri = `/api/${idNoSpaces}`;
    const details = { method: 'PATCH' };
    fetch(uri, details)
      .then(response => {
        if (response !== 200) {
          console.log('There was a problem trying to update this plant. Please try again.');
          return;
        } else {
          console.log(response.json);
          return;
        }
      })
    window.location.reload();
  }

  const {
    common_name,
    latin_name,
    category,
    origin,
    climate,
    ideal_light,
    tolerated_light,
    water_needs,
    last_watered,
  } = info;

  return (
    //commong[0] gives you name
    <div className="plantCard">
      <div className="cardHeader">
        <h3 className="plantName">{common_name}</h3>
      </div>
      <button className="wateredButton" id={common_name} onClick={handleWater} type="button">Just Watered</button>
      <ul className="plantListOfInfo">
        <li className="plantListItem"><span className="label">Latin Name:</span> {latin_name}</li>
        <li className="plantListItem"><span className="label">Category:</span> {category}</li>
        <li className="plantListItem"><span className="label">Origin:</span> {origin}</li>
        <li className="plantListItem"><span className="label">Climate:</span> {climate}</li>
        <li className="plantListItem"><span className="label">Ideal Light:</span> {ideal_light}</li>
        <li className="plantListItem"><span className="label">Tolerated Light:</span> {tolerated_light}</li>
        <li className="plantListItem"><span className="label">Water Needs:</span> {water_needs}</li>
        <li className="plantListItem"><span className="label lastWater">Last Watered:</span> {Math.floor((Date.now() - last_watered) / 86400000)} days ago</li>
      </ul>
      <button className="deleteButton" id={common_name} onClick={handleDelete} type="button">Delete Plant</button>
    </div>
  )
}

export default PlantCard;