import './App.css';
import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import ShipList from "../ShipList/ShipList";
import ShipDetails from "../ShipDetails/ShipDetails";


class App extends Component {
  state = {  };
  render() { 
    return ( 
      <div>
        <h1>Aliiive</h1>
        <a href="/shiplist">Ship List</a>

        <Route exact path='/shiplist' render={() =>  <ShipList/>} />

        <Route exact path='/ship' render={({location})=> 
          <ShipDetails location={location}/>
        }/>
        
      </div>
     );
  }
}
 
export default App;
