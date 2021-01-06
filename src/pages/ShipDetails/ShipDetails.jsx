import React, { Component } from 'react';
import { getDetails } from '../../services/api-calls'

class ShipDetails extends Component {

    state = {  
        // url
    }

    // async componentDidMount() {
    //     const classDetails = await getDetails(this.state.url)
    //     this.setState({ classDetails })
    //   }

    render() { 
        return ( 
            <>
            <h1>Ship Details</h1>
            {console.log("hhh")}
            </>
         );
    }
}
 
export default ShipDetails;