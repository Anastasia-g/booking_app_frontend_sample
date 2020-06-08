import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';


class Success extends Component {

    render() {
        return(
        <Alert variant="success">
        <p className="mb-0">Thank you for your message. Our tour guides will reply you as soon as possible. 
            Have a nice day!</p></Alert>)
        
         
    }
    
}

export default Success