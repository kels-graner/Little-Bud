import React, { useState } from 'react';
import Headers from './components/Headers.jsx';
import Plants from './components/Plants.jsx';
import AddPlant from './components/AddPlant.jsx';

import './stylesheets/styles.scss';

function App() {
  //add functionality here

  return (
    <div>
      <Headers />
      <AddPlant />
      <Plants />
    </div>
  )
}

export default App;