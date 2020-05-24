import React, { Component } from 'react'
import { Link, withRouter} from 'react-router-dom'
import Table from 'react-bootstrap/Table'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'

class AllGuides extends Component {
  state = {
    data: [],
  }
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  async fetchGuides() {
    console.log("fetching guides");

    const response = await this.props.api.getAllGuides();
    const jayson = await response.json();
    console.log(jayson);
    //const url = response;
      //'https://en.wikipedia.org/w/api.php?action=opensearch&search=Russia&format=json&origin=*'
      //'http://localhost:8080/api/v1/guides'

  
        this.setState({
          data:jayson});
      
  }
  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    this.fetchGuides();
  }
  handleClick(id) {
    console.log("deleting " + id)

    fetch('http://localhost:8080/api/v1/guides/' + id, {
      method: 'DELETE'


    }).then(() => { console.log("calling fetch"); this.fetchGuides() });

  }
  handleClickEdit(id) {
    console.log("editing " + id)

    this.props.history.push('guides/edit');
    //.then(() => {console.log("calling fetch"); this.fetchGuides()});

  }
  render() {
    console.log("rendering");
    const { data } = this.state
    //console.log(data);


    const result = data.map((guide, index) => {
      //console.log("entry name " + guide.name);
      //console.log("index " + index);
      //console.log("entry id " + guide.id);
      const guideUrl = "/guides/" + guide.id;
      /*       return(
              <Row>
                <Col xs={3} key={index}><Link to={guideUrl}>{guide.name}</Link></Col>
                <Col xs={3} >{guide.email}</Col>
                <Col xs={2} >{guide.phone}</Col>
      
                 <Col xs={1}> <button onClick={() => { this.handleClick(guide.id) }}>Delete</button></Col>
                <Col xs={1}><button onClick={() => {  this.props.history.push('guides/edit/'+guide.id) }}>Edit</button></Col>
              </Row>
             ) */
             
      return (

            <tr key={index}>          
              <td><Link to={guideUrl}>{guide.name}</Link></td>
              <td>{guide.email}</td>
              <td>{guide.phone}</td>
              <td><button onClick={() => { this.handleClick(guide.id) }}>Delete</button></td>
              <td><button onClick={() => {  this.props.history.push('guides/edit/'+guide.id) }}>Edit</button></td>
            </tr>

      )
    })

    //return <div className="jumbotron"> <table><tbody>{result}</tbody></table></div>
    //return <Container>{result}</Container>
    return(  
      <div>     
      {this.props.navbar}
    <Table responsive striped bordered hover>
      <thead>
       <tr>
         
         <th>Name</th>
         <th>E-mail</th>
         <th>Phone number</th>
         <th>#</th>
         <th>#</th>
       </tr>
     </thead> 
     <tbody>{result}</tbody>
    </Table>
    </div> )

  }
}

export default withRouter(AllGuides)