import './App.css';
import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import ShipList from "../ShipList/ShipList";


class App extends Component {
  state = {  };
  render() { 
    return ( 
      <div>
        <h1>Aliiive</h1>
        <ShipList />
      </div>
     );
  }
}
 
export default App;
