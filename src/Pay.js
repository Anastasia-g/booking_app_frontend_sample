import React, { Component } from 'react'
import {  Form, Button } from 'react-bootstrap'


class Pay extends Component {
    state = {
        data: [],
    }
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
         event.preventDefault();
       
        
         console.log(event.target);
         fetch('http://localhost:8080/api/v1/payments', {
             method: 'POST',
            
             body:  JSON.stringify({"inquiryId": this.props.match.params.id, 
             "payment":event.target.deposit.value, 
             "paymentDate": new Date()

           }),
             headers: {
                'Content-Type': 'application/json'
             }
           }).then(res => res.text()).then(txt => window.location.replace(txt)); /* window.location.replace("http://google.com")*/
        }
    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {
        const url =
            //'https://en.wikipedia.org/w/api.php?action=opensearch&search=Russia&format=json&origin=*'
            'http://localhost:8080/api/v1/payments/' + this.props.match.params.id

        
    }

    render() {



        const { data } = this.state;
        if (data) {
            console.log('pay data = ' + JSON.stringify(data));
            return (//<p> {data.name}</p>

        <Form onSubmit={this.handleSubmit}> 
        
        <h3>Hello, please pay this deposit to book your tour:</h3>
        <br/>
        <Form.Group controlId="formTourInquiry">
        <Form.Label>Deposit, EUR:</Form.Label>
        <Form.Control size = "sm" type ="number" name="deposit"  defaultValue={data.deposit} />
        
        <Button variant="primary" type="submit">Pay</Button>
        </Form.Group>
        </Form>  
        
                );


        }

        return <p> Loading... </p>
    }
}

export default Pay