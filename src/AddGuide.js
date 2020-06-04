import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

class AddGuide extends Component {
  state = {
    
    
  }
  constructor() {
 
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    console.log(event.target);



    //fetch('http://localhost:8080/api/v1/guides/', {

    const body = JSON.stringify({
      "name": event.target.name.value, "nickname": event.target.nickname.value,
      "password": event.target.password.value,
      //, "english": event.target.english.value === "on" ? true : false,
      "english": this.state.englishChecked,
      "french": this.state.frenchChecked,
      "email": event.target.email.value,
      "phone": event.target.phone.value
    });

    // }).then(() => this.props.history.push('/'));
    const newGuide = await this.props.api.createGuide(body);
    //const jayson = await newGuide.json();
    //console.log(jayson);

    this.props.history.push('/');
  }

componentDidMount(){
  
  this.setState({
  

   frenchChecked : false,
   englishChecked : false});

}

  render() { 
    return (
     
      <div>
        {this.props.navbar}
        <Form onSubmit={this.handleSubmit}>

          <h3>Register as a guide:</h3>
          <br />
          <Form.Group controlid="formAddGuide">
            <Form.Label>Enter your name (required):</Form.Label>
            <Form.Control size="sm" name="name" placeholder="Enter your name" />
            <Form.Label>Enter your nickname (required):</Form.Label>
            <Form.Control size="sm" name="nickname" placeholder="Enter your nickname" />
            <Form.Label>Create your password (required):</Form.Label>
            <Form.Control size="sm" name="password" placeholder="Enter your password" />
            <Form.Label>Enter your e-mail (required):</Form.Label>
            <Form.Control size="sm" type="email" name="email" />
            <Form.Label>Enter your phone nimber (required):</Form.Label>
            <Form.Control size="sm" name="phone" />
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" name="english" label="Yes, I speak English" defaultChecked={this.state.englishChecked}
                onClick={() => this.setState({ englishChecked: !this.state.englishChecked })} />
              <Form.Check type="checkbox" name="french" label="Oui, je parle Français" defaultChecked={this.state.frenchChecked} onClick={() => this.setState({ frenchChecked: !this.state.frenchChecked })} />
            </Form.Group>
            <Button variant="primary" type="submit">OK</Button>
          </Form.Group>
        </Form>
      </div>

    );
  }


}

export default withRouter(AddGuide)