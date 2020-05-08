import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class guidedTours extends Component {
    state = {
        data: [],
    }
    constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
   
    }

  componentDidMount() {
   
}
  render() {
    const { data } = this.state;
    if (data){
    return (
     /*  <form onSubmit={this.handleSubmit}>
        <h1>Guided Tours</h1>
        <h4>If you want a guided tour in the Simien Mountains including professional guide and 4wd transportation, use the contact form below:</h4>
        <label htmlFor="name">Your name (required):</label>
        <input id="name" name="name" type="text" />
        <label htmlFor="mail">Your e-mail (required):</label>
        <input id="mail" name="mail" type="text" />
        <label>
          Message:
          <textarea id="message" name="message" type="text"/>
        </label>
      

        <button>SEND</button>
      </form> */
      
    <Form controlId="bookingForm">
    <Form.Group controlId="formBasicBooking">
    <h2>Guided Tours</h2>
    <h6>If you want a guided tour in the Simien Mountains including professional guide and 4wd transportation, use the contact form below:</h6>
    <br/>
    <Form.Label>Your name (required):</Form.Label>
    <Form.Control size = "sm" value="name" placeholder="Enter your name" />
    <Form.Label>Your e-mail (required):</Form.Label>
    <Form.Control size = "sm" type="email" value="email" placeholder="Enter your e-mail" />
    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}

  </Form.Group>
  <Form.Group controlId="bookingForm.ControlSelectDays">
  <Form.Label>How many days do you want to trek?</Form.Label>
    <Form.Control size = "sm" value="days" as="select">
      <option>1 day</option>
      <option>2 days</option>
      <option>3 days</option>
      <option>4 days</option>
      <option>5 days</option>
      <option>6 days</option>
      <option>7 days</option>
      <option>8 days</option>
      <option>9 days</option>
      <option>10 days</option>
      <option>11 days</option>
      <option>12 days</option>
      <option>13 days</option>
      <option>14 days</option>
      <option>15 days</option>
    </Form.Control>
    </Form.Group>
    <Form.Group controlId="bookingForm.ControlSelectPersons">
  <Form.Label>How many persons are in your group?</Form.Label>
    <Form.Control size = "sm" value="persons" as="select">
      <option>1 person</option>
      <option>2 persons</option>
      <option>3 persons</option>
      <option>4 persons</option>
      <option>5 persons</option>
      <option>6 persons</option>
      <option>7 persons</option>
      <option>8 persons</option>
      <option>9 persons</option>
      <option>10 persons</option>
      <option>11 persons</option>
      <option>12 persons</option>
      <option>13 persons</option>
      <option>14 persons</option>
      <option>15 persons</option>
    </Form.Control>
    </Form.Group>
    <Form.Group controlId="formBasicBookingDate">
    <Form.Label>Date you want to start the tour:</Form.Label>
    <Form.Control size = "sm" type="date" value="date" placeholder="Enter the start date" />
    </Form.Group>
    <Form.Group controlId="bookingForm.ControlTextareaMessage">
    <Form.Label>Your message:</Form.Label>
    <Form.Control size = "sm" value="message"  as="textarea" rows="3" />
  </Form.Group>
  
  <Button variant="primary" type="submit" onClick={this.handleSubmit}>
    SEND
  </Button>
</Form>
    );
    }return <p> Loading... </p>
  }

        
}

export default guidedTours