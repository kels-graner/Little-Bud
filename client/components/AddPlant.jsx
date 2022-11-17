import React from "react";

const AddPlant = () => {
  const handleClick = (event) => {
    // console.log(event)
    const value = event.target.previousElementSibling.value;
    const valNoSpaces = value.replace(/\s+/g, '');
    const uri = `/api/${valNoSpaces}`;
    const details = { method: 'GET' }
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
  }

  return (
    <div className="addPlant">
      <div className="addHeader">
        <h3>Ohhhhhh baby! Is that a new plant??</h3>
      </div>
      <form>
        <input id="inputInfo" type="text" />
        <input id="addPlantButton" type="submit" value="Add new plant" onClick={handleClick} />
      </form>
    </div>
  )
}

export default AddPlant;