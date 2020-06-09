import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

//import {Container, Row, Cow} from 'react-bootstrap';

class AllTourInquiries extends Component {
  state = {
    data: [],
  }
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  async fetchTourInquiries() {
    console.log("fetching tour inquiries");
    // const url =
    //   //'https://en.wikipedia.org/w/api.php?action=opensearch&search=Russia&format=json&origin=*'
    //   'http://localhost:8080/api/v1/tour-inquiries'

    // fetch(url)
    //   .then(result => result.json())
    //   .then(result => {
    //     console.log(result);
    //     this.setState({
    //       data: result,
    //     })
    //   })

    const response = await this.props.api.getAllTourInquiries();
    const jayson = await response.json();
    console.log(jayson);

    this.setState({
      data: jayson
    });
  }
  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    this.fetchTourInquiries();
  }
  handleClick(id) {
    console.log("deleting " + id)

    fetch('http://localhost:8080/api/v1/tour-inquiries/' + id, {
      method: 'DELETE'


    }).then(() => { console.log("calling fetch"); this.fetchTourInquiries() });

  }
  handleClickEdit(id) {
    console.log("editing " + id)

    this.props.history.push('tour-inquiries/edit');
    //.then(() => {console.log("calling fetch"); this.fetchGuides()});

  }
  render() {
    console.log("rendering");
    const { data } = this.state;
    //const { isAuthenticated, login, logout } = this.props;
    //console.log(data);


    const result = data.map((tourInquiry, index) => {
      //console.log("entry name " + guide.name);
      //console.log("index " + index);
      //console.log("entry id " + guide.id);
      const tourInquiriyUrl = "/tour-inquiries/" + tourInquiry.id;
      /*       return (<tr key={index} >
              <td><Link to={tourInquiriyUrl}>{tourInquiry.name} {tourInquiry.surname}</Link>
              </td>
              <td>
                <button onClick={() => { this.handleClick(tourInquiry.id) }}>Delete</button>
                <button onClick={() => {  this.props.history.push('tour-inquiries/edit/'+tourInquiry.id) }}>Edit</button>
              </td>
            </tr>) */

      return (

        <tr key={index}>
          <td><Link to={tourInquiriyUrl}>{tourInquiry.name} {tourInquiry.surname}</Link></td>
          <td>{tourInquiry.email}</td>

          <td><button onClick={() => { this.handleClick(tourInquiry.id) }}>Delete</button></td>
          <td><button onClick={() => { this.props.history.push('tour-inquiries/edit/' + tourInquiry.id) }}>Edit</button></td>
          <td><button onClick={() => { this.props.history.push('/Payment-requests/' + tourInquiry.id) }}>Request payment</button></td>

        </tr>

      )




    })

    //return <div className="jumbotron"> <table><tbody>{result}</tbody></table></div>
    return (
      <div>     
      {this.props.navbar}
      
      <Table responsive striped bordered hover>
        <thead>
          <tr>

            <th>Name</th>
            <th>E-mail</th>
            <th>#</th>
            <th>#</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>{result}</tbody>
      </Table> 
      
      </div>)
  }
}

export default withRouter(AllTourInquiries)