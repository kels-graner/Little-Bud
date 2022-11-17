import React from "react";
import Headers from "./Headers.jsx";
import { Link, withRouter } from 'react-router-dom';

const AddPlant = () => {
  const handleClick = (event) => {
    // console.log(event)
    const value = event.target.previousElementSibling.value;
    const valNoSpaces = value.replace(/\s+/g, '');
    const uri = `/api/${valNoSpaces}`;
    const details = { method: 'POST' }
    fetch(uri, details)
      .then(response => {
        if (response !== 200) {
          console.log('Looks like there was a problem. Please try again.');
          return;
        } else {
          console.log(response.json);
          return;
        }
      })
      // window.location.reload();
  }

  return (
    <div className="addPlant">
    <Headers />
    <Link to="/" className="backLink">
      <button type="button" className="backButton">
        Back to My Plants...
      </button>
    </Link>
      <div className="addHeader">
        <h3>Wow! Would ya look at the leaves on that one!</h3>
      </div>
      <form>
        <input id="inputInfo" type="text" placeholder="Type common name here..."/>
        <input id="addPlantButton" type="submit" value="Add new plant" onClick={handleClick} />
      </form>
    </div>
  )
}

export default withRouter(AddPlant);