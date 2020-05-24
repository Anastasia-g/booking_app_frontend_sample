import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class AddTourInquiry extends Component {
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
   
    fetch('http://localhost:8080/api/v1/tourInquiries/', {
      method: 'POST',
      body:  JSON.stringify({"name": event.target.name.value,"surname": event.target.surname.value, "email":event.target.email.value, 
      "days": event.target.days.value, "persons": event.target.persons.value,
      "date": event.target.date.value, "message": event.target.message.value}),
      headers: {
          'Content-Type': 'application/json'
      }
    }).then(() => this.props.history.push('/Inquiries'));
  }



  render() {
    const { data } = this.state;
    if (data){
    return (
     
      
    <Form onSubmit={this.handleSubmit}> 
    <Form.Group controlid="formBooking">
    <h2>Guided Tours</h2>
    <h6>If you want a guided tour in the Simien Mountains including professional guide and 4wd transportation, use the contact form below:</h6>
    <br/>
    <Form.Label>Your name (required):</Form.Label>
    <Form.Control size = "sm" name="name" placeholder="Enter your name" />
    <Form.Label>Your surname (required):</Form.Label>
    <Form.Control size = "sm" name="surname" placeholder="Enter your surname" />
    <Form.Label>Your e-mail (required):</Form.Label>
    <Form.Control size = "sm" type="email" name="email" placeholder="Enter your e-mail" />
    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}

  </Form.Group>
  <Form.Group controlId="bookingForm.ControlSelectDays">
  <Form.Label>How many days do you want to trek?</Form.Label>
    <Form.Control size = "sm" name="days" as="select">
    <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
      <option>11</option>
      <option>12</option>
      <option>13</option>
      <option>14</option>
      <option>15</option>
    </Form.Control>
    </Form.Group>
    <Form.Group controlId="bookingForm.ControlSelectPersons">
  <Form.Label>How many persons are in your group?</Form.Label>
    <Form.Control size = "sm" name="persons" as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
      <option>11</option>
      <option>12</option>
      <option>13</option>
      <option>14</option>
      <option>15</option>
    </Form.Control>
    </Form.Group>
    <Form.Group controlId="formBasicBookingDate">
    <Form.Label>Date you want to start the tour:</Form.Label>
    <Form.Control size = "sm" type="date" name="date" placeholder="Enter the start date" />
    </Form.Group>
    <Form.Group controlId="bookingForm.ControlTextareaMessage">
    <Form.Label>Your message:</Form.Label>
    <Form.Control size = "sm" name="message"  as="textarea" rows="3" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    SEND
  </Button>
</Form>
    );
    }return <p> Loading... </p>
  }

        
}

export default AddTourInquiry