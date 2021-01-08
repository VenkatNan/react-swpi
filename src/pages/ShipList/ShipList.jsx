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
            <div class='listItems'>
          
            {this.state.results.map(
                (shipName) => (
                    <div key={shipName.index}>
                        <Link
                            to={{
                                pathname: '/ship',
                                state: { shipName }
                            }}
                        >
                        <button class='listName'>{shipName.name}</button>
                        </Link>
                    </div>
                )
            )}
            </div>
        );
    }
}
 
export default ShipList;