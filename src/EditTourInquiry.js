import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { Form, Button } from 'react-bootstrap';

//import {Container, Row, Cow} from 'react-bootstrap';

class EditTourInquiry extends Component {
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

                    <h3>Edit tour inquiry:</h3>
                    <br />

                    <Form.Label>Name:</Form.Label>
                    <Form.Control size="sm" name="name" defaultValue={data.name} />
                    <Form.Label>Surname:</Form.Label>
                    <Form.Control size="sm" name="surname" defaultValue={data.surname} />
                    <Form.Label>Tourist's e-mail:</Form.Label>
                    <Form.Control size="sm" type="email" defaultValue={data.email} />


                    <Form.Label>How many days do you want to trek?</Form.Label>
                    <Form.Control size="sm" name="days" defaultValue={data.days} />

                    <Form.Label>How many persons are in your group?</Form.Label>
                    <Form.Control size="sm" name="persons" defaultValue={data.persons} />

                    <Form.Label>Date you want to start the tour:</Form.Label>
                    <Form.Control size="sm" name="date" placeholder="Enter the start date" defaultValue={data.date} />

                    <Form.Label>Your message:</Form.Label>
                    <Form.Control size="sm" name="message" as="textarea" rows="3" defaultValue={data.message} />
                    <Button variant="primary" type="submit">Edit tour details</Button>
                </Form>
            );


        }

        return <p> Loading... </p>
    }

}

export default withRouter(EditTourInquiry)