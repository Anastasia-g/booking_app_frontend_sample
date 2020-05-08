import React, { Component } from 'react';
import {  Form, Button } from 'react-bootstrap';

class AddGuide extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target);
   
    
    
    fetch('http://localhost:8080/api/v1/guides/', {
      method: 'POST',
      body:  JSON.stringify({"name": event.target.name.value, "nickname":event.target.nickname.value, 
      "password": event.target.password.value
      , "english": event.target.english.value === "on" ? true : false,
      "french": event.target.french.value === "on" ? true : false
    }),
      headers: {
          'Content-Type': 'application/json'
      }
    }).then(() => this.props.history.push('/'));
  }

  render() {
    return (
      
        <Form onSubmit={this.handleSubmit}> 
        
        <h3>Register as a guide:</h3>
        <br/>
        <Form.Group controlId="formAddGuide">
        <Form.Label>Enter your name (required):</Form.Label>
        <Form.Control size = "sm" name="name" placeholder="Enter your name" />
        <Form.Label>Enter your nickname (required):</Form.Label>
        <Form.Control size = "sm" name="nickname" placeholder="Enter your nickname" />
        <Form.Label>Create your password (required):</Form.Label>
        <Form.Control size = "sm" name="password" placeholder="Enter your password" />
        <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" name="english" label="Yes, I speak English" />
        <Form.Check type="checkbox" name="french" label="Oui, je parle Français" />
        </Form.Group> 
        <Button variant="primary" type="submit">OK</Button>
        </Form.Group>
        </Form>  
        
      
    );
  }

        
}

export default AddGuide