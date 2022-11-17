import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Plants from './components/Plants.jsx';
import AddPlant from './components/AddPlant.jsx';

import './stylesheets/styles.scss';

function App() {
  //add functionality here

  return (
    <div className='router'>
      <main>
        <Switch>
          <Route
            exact
            path='/'
            component={Plants}
            />
            <Route
              exact
              path='/addPlant'
              component={AddPlant}
              />        
            </Switch>
      </main>
      {/* <Headers />
      <AddPlant />
      <Plants /> */}
    </div>
  )
}

export default App;