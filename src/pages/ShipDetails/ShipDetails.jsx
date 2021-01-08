import React, { Component } from 'react';
import { getDetails } from '../../services/api-calls'

class ShipDetails extends Component {

    state = {  
        url: this.props.location.state.shipName.url,
        shipDetails:{},
    }

    async componentDidMount() {
        const shipDetails = await getDetails(this.state.url)
        this.setState({shipDetails })
        console.log(shipDetails);
      }

    render() { 
        const {shipDetails}  = this.state; 
        return ( 
            <div >
            {shipDetails.name ?
                <div class="shipDetail">
                <h2>Name: </h2>
                    <p>{ shipDetails.name}</p>
                <h2>Model: </h2>
                    <p>{shipDetails.model}</p>
                </div>
                :
                <>
                <p>Loading Ship Details . . . . . . </p>
                </>
            }
            </div>
         );
    }
}
 
export default ShipDetails;