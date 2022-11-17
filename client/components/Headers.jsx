import React from "react";

const Headers = () => {

//add functions here
  return (
    <article className="headers">
      <div className="logodiv">
      <h1>Little Bud</h1>
      <h2>A simple tool for keeping your<br />plant babies <span>happy</span> and <span>healthy</span></h2>
      </div>
      <img className="logo" src={'./images/plant.png'} alt="potted plant logo" />
    </article>
  )
}

export default Headers;