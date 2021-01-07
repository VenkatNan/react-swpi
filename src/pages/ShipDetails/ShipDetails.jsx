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
            <>
            <h1>Ship Details</h1>
            {shipDetails.name ?
                <>
                <h2>{shipDetails.name}</h2>
                <h2>{shipDetails.model}</h2>
                </>
                :
                <>
                <p>Loading Ship Details . . . . . . </p>
                </>
            }
            </>
         );
    }
}
 
export default ShipDetails;