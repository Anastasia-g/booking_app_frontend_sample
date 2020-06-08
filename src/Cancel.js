import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';


class Cancel extends Component {

    render() {
        return(
            <Alert variant="danger" >
            <p className="mb-0">
        Something went wrong. The payment hasn't done. Please try again. 
            </p></Alert> )
        
         
    }
    
}

export default Cancel