import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';


class Process extends Component {

    render() {
        return(
            <Alert variant="success"><Alert.Heading>Thank you for your payment.</Alert.Heading>
            <p className="mb-0">
            All the guide's contacts will be send to your mail within 24 hours. 
            See you soon in Ethiopia!</p></Alert>)
        
         
    }
    
}

export default Process