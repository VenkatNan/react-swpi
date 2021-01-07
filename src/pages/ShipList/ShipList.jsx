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
                (shipName) => (
                    <div key={shipName.index}>
                        <Link
                            to={{
                                pathname: '/ship',
                                state: { shipName }
                            }}
                        >
                        {shipName.name}
                        </Link>
                    </div>
                )
            )}
            </h4>
            </>
        );
    }
}
 
export default ShipList;