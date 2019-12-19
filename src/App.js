import React from 'react';
import Customerlist from './components/Customerlist';
import Traininglist from './components/Traininglist';
import './App.css';

import Navigator from './components/Navigator';
import { BrowserRouter, Switch, Route, Link, } from 'react-router-dom';

function App() {

  
  return (
   
    <div className="App">
      <BrowserRouter>
      <div>
        <Navigator/>

        <Switch>
          <Route exact path="/customer" component={Customerlist}/>
          <Route exact path="/training" component={Traininglist}/>
         
          <Route render={() => <h1>Page not found</h1>}/>
        </Switch>
      </div>
      
      </BrowserRouter>
 
    </div>
  
  );
}

export default App;
