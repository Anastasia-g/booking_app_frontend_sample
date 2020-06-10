import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { Form, Button } from 'react-bootstrap';

//import {Container, Row, Cow} from 'react-bootstrap';

class EditTourInquiry extends Component {
    state = {
        data: [],
    }
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      async fetchGetTourInquiryById() {

        const response = await this.props.api.getTourInquiryById(this.props.match.params.id);
        const jayson = await response.json();
        console.log(jayson);
    
    
        this.setState({
          data: jayson
        });
      }
      async handleSubmit(event) {
        event.preventDefault();
    
        const body = JSON.stringify({
          "name": event.target.name.value, "surname": event.target.surname.value,
          "email": event.target.email.value,
    
          "days": event.target.days.value,
          "persons": event.target.persons.value,
          "date": event.target.date.value,
          "message": event.target.message.value
        });
        const tourInquiryId = Number(this.props.match.params.id);
    
        const updateTourInquiryData = await this.props.api.updateTourInquiry(body,tourInquiryId );
        const jayson = await updateTourInquiryData.json();
        //console.log(jayson);
        this.setState({
          data: jayson
        });
        this.props.history.push('/');
      }
    
    componentDidMount() {
       
       this.fetchGetTourInquiryById(); 
    }

    render() {



        const { data } = this.state;
        if (data) {
            console.log('single tour inquiry data = ' + JSON.stringify(data));
            return (//<p> {data.name}</p>
                <div>
                {this.props.navbar}
                <Form onSubmit={this.handleSubmit}>

                    <h3>Edit tour inquiry:</h3>
                    <br />

                    <Form.Label>Name:</Form.Label>
                    <Form.Control size="sm" name="name" defaultValue={data.name} />
                    <Form.Label>Surname:</Form.Label>
                    <Form.Control size="sm" name="surname" defaultValue={data.surname} />
                    <Form.Label>Tourist's e-mail:</Form.Label>
                    <Form.Control size="sm" type="email" name= "email" defaultValue={data.email} />


                    <Form.Label>How many days do you want to trek?</Form.Label>
                    <Form.Control size="sm" name="days" defaultValue={data.days} />

                    <Form.Label>How many persons are in your group?</Form.Label>
                    <Form.Control size="sm" name="persons" defaultValue={data.persons} />

                    <Form.Label>Date you want to start the tour:</Form.Label>
                    <Form.Control size="sm" name="date" placeholder="Enter the start date" defaultValue={data.date} />

                    <Form.Label>Your message:</Form.Label>
                    <Form.Control size="sm" name="message" as="textarea" rows="3" defaultValue={data.message} />
                    <Button variant="primary" type="submit">Edit tour details</Button>
                </Form></div>
            );


        }


        return <p> Loading... </p>
    }

}

export default withRouter(EditTourInquiry)