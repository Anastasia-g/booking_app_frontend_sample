import React, { Component } from 'react';
import {  Form, Button } from 'react-bootstrap';

class EditGuide extends Component {
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
    fetch('http://localhost:8080/api/v1/guides/'+ this.props.match.params.id, {
        method: 'PUT',
        
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

  componentDidMount() {
    const url =
        //'https://en.wikipedia.org/w/api.php?action=opensearch&search=Russia&format=json&origin=*'
        'http://localhost:8080/api/v1/guides/' + this.props.match.params.id

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
    if (data){
    return (
        <Form onSubmit={this.handleSubmit}> 
        
        <h3>Edit your profile:</h3>
        <br/>
        <Form.Group controlId="formAddGuide">
        <Form.Label>Name:</Form.Label>
        <Form.Control size = "sm" name="name"  defaultValue={data.name} />
        <Form.Label>Nickname:</Form.Label>
        <Form.Control size = "sm" name="nickname" defaultValue={data.nickname} />
        <Form.Label>Enter your password:</Form.Label>
        <Form.Control size = "sm" name="password" defaultValue="" />
        <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" name="english" label="Yes, I speak English" defaultChecked={data.english} />
        <Form.Check type="checkbox" name="french" label="Oui, je parle Français"  defaultChecked={data.french}/>
        </Form.Group> 
        <Button variant="primary" type="submit">SAVE CHANGES</Button>
        </Form.Group>
        </Form>  
    );
    }return <p> Loading... </p>
  }

        
}

export default EditGuide