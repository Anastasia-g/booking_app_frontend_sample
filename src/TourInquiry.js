import React, { Component } from 'react'
import {  Form, Button } from 'react-bootstrap'

class TourInquiry extends Component {
    state = {
        data: [],
    }
    handleSubmit(event) {
        // event.preventDefault();
       
        
        // console.log(event.target);
        // fetch('http://localhost:8080/api/v1/guides/'+ this.props.match.params.id, {
        //     method: 'PUT',
            
        //     body:  JSON.stringify({"name": event.target.name.value, "nickname":event.target.nickname.value, 
        //     "password": event.target.password.value
        //     , "english": event.target.english.value === "on" ? true : false,
        //     "french": event.target.french.value === "on" ? true : false,
        //     "email": event.target.email.value, "phone": event.target.phone.value
        //   }),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        //   }).then(() => this.props.history.push('/'));
        }
    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {
        const url =
            //'https://en.wikipedia.org/w/api.php?action=opensearch&search=Russia&format=json&origin=*'
            'http://localhost:8080/api/v1/tourInquiries/' + this.props.match.params.id

        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({

                    
                    data: result,
                })
            })
    }

    render() {



        const { data } = this.state;
        if (data) {
            console.log('single tour inquiry data = ' + JSON.stringify(data));
            return (//<p> {data.name}</p>

                <Form onSubmit={this.handleSubmit}> 
        
        <h3>Send a bill for the tourist:</h3>
        <br/>
        <Form.Group controlId="formTourInquiry">
        <Form.Label>Name:</Form.Label>
        <Form.Control size = "sm" name="name"  defaultValue={data.name} />
        <Form.Label>Surname:</Form.Label>
        <Form.Control size = "sm" name="surname" defaultValue={data.surname} />
        <Form.Label>Tourist's e-mail:</Form.Label>
        <Form.Control size = "sm" type="email"  defaultValue={data.email}/>

        <Form.Label>Enter total price:</Form.Label>
        <Form.Control size = "sm" name="totalPrice" placeholder="Enter total price" />
        <Form.Label>Deposit to pay:</Form.Label>
        <Form.Control size = "sm" name="deposit" placeholder="10 percents from total price" />
        <Form.Label>Message for tourist:</Form.Label>
        <Form.Control size = "sm" name="message"  as="textarea" rows="3" />
        <Button variant="primary" type="submit">SEND payment request</Button>
        </Form.Group>
        </Form>  
                );


        }

        return <p> Loading... </p>
    }
}

export default TourInquiry