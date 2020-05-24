import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom';
import {  Form, Button } from 'react-bootstrap';

class EditGuide extends Component {
    state = {
        data: [],
      
    }
    constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async fetchGetGuideById() {

    //console.log("fetching the guide");
    const response = await this.props.api.getGuideById(this.props.match.params.id);
    const jayson = await response.json();
    console.log(jayson);
    //const url = response;
      //'https://en.wikipedia.org/w/api.php?action=opensearch&search=Russia&format=json&origin=*'
      //'http://localhost:8080/api/v1/guides'

  
        this.setState({
          data:jayson,
      
         frenchChecked : jayson.french,
         englishChecked : jayson.english});
  }

/*   async fetchEditGuide() {
    console.log("fetching the guide");
    const updatedGuideData = await this.props.api.updateGuide(this.props.match.params);
    const jayson = await updatedGuideData.json();
    console.log(jayson);
    //const url = response;
      //'https://en.wikipedia.org/w/api.php?action=opensearch&search=Russia&format=json&origin=*'
      //'http://localhost:8080/api/v1/guides'

  
        this.setState({
          data:jayson});

  } */



  async handleSubmit(event) {
    event.preventDefault();
   
    
    console.log( event.target.french);
  
    const body = JSON.stringify({ "name": event.target.name.value, "nickname":event.target.nickname.value, 
    "password": event.target.password.value,
    //, "english": event.target.english.value === "on" ? true : false,
    "english": this.state.englishChecked,
    "french": this.state.frenchChecked,
    "email": event.target.email.value, 
    "phone": event.target.phone.value
  });
  const guideId = Number(this.props.match.params.id);
  
;    const updatedGuideData = await this.props.api.updateGuide(body, guideId);
    const jayson = await updatedGuideData.json();
    //console.log(jayson);
    this.setState({
      data:jayson});
       this.props.history.push('/');
    }

  componentDidMount() {

    this.fetchGetGuideById();
}
  render() {
    const { data } = this.state;
    console.log("value of english " + this.state.englishChecked);
    if (data){
    return (

      <div>
      {this.props.navbar}
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
        <Form.Label>Enter your e-mail (required):</Form.Label>
        <Form.Control size = "sm" name="email" type="email"  defaultValue={data.email}/>
        <Form.Label>Enter your phone number (required):</Form.Label>
        <Form.Control size = "sm" name="phone" defaultValue={data.phone}/>
        <Form.Group controlId="formBasicCheckbox">
        <Form.Check  type="checkbox" name="english" label="Yes, I speak English" defaultChecked={this.state.englishChecked} 
        onClick={() => this.setState({englishChecked: !this.state.englishChecked})} />
        
        <Form.Check onClick={() => this.setState({frenchChecked: !this.state.frenchChecked})} type="checkbox" name="french" label="Oui, je parle Français"  defaultChecked={this.state.frenchChecked}/>
        </Form.Group> 
        <Button variant="primary" type="submit">SAVE CHANGES</Button>
        </Form.Group>
        </Form>  </div>
    );
    }return <p> Loading... </p>
  }

        
}

export default withRouter(EditGuide)