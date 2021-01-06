import React, { Component } from 'react';
import { getShipList } from '../../services/api-calls'
import {Link} from "react-router-dom";

class ShipList extends Component {
    state = { 
        results:[]
     }

     async componentDidMount() {
        const shipData = await getShipList()
        this.setState({ results: shipData.results })
      }

    render() { 
        return (  
            <>
            <h4>
            {this.state.results.map(
                (shipName,idx) => (
                    <div key={idx}>
                        {shipName.name}
                    </div>
                )
            )}
            </h4>
            </>
        );
    }
}
 
export default ShipList;