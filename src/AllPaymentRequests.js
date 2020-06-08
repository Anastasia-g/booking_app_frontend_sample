import React, { Component } from 'react'
import { Form, Button, Table } from 'react-bootstrap'
import { withRouter, Link } from 'react-router-dom'


class AllPaymentRequests extends Component {


state = {
    data: [],
  }
  constructor() {
    super();
   // this.handleClick = this.handleClick.bind(this);
  }

  async fetchPaymentRequests() {
    console.log("fetching payment requests");
    // const url =
    //   //'https://en.wikipedia.org/w/api.php?action=opensearch&search=Russia&format=json&origin=*'
    //   'http://localhost:8080/api/v1/tourInquiries'

    // fetch(url)
    //   .then(result => result.json())
    //   .then(result => {
    //     console.log(result);
    //     this.setState({
    //       data: result,
    //     })
    //   })

    const response = await this.props.api.getAllPaymentRequests();
    const jayson = await response.json();
    console.log(jayson);

    this.setState({
      data: jayson
    });
  }
  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    this.fetchPaymentRequests();
  }
//   handleClick(id) {
//     console.log("deleting " + id)

//     fetch('http://localhost:8080/api/v1/paymentRequests/' + id, {
//       method: 'DELETE'


//     }).then(() => { console.log("calling fetch"); this.fetchPaymentRequests() });

//   }
//   handleClickEdit(id) {
//     console.log("editing " + id)

//     this.props.history.push('paymentRequests/edit');
//     //.then(() => {console.log("calling fetch"); this.fetchGuides()});

//   }
  render() {
    console.log("rendering");
    const { data } = this.state
    //console.log(data);


    const result = data.map((paymentRequest, index) => {
      //console.log("entry name " + guide.name);
      //console.log("index " + index);
      //console.log("entry id " + guide.id);
      const requestPaymentUrl = "/paymentRequests/" + paymentRequest.id;
      /*       return (<tr key={index} >
              <td><Link to={tourInquiriyUrl}>{tourInquiry.name} {tourInquiry.surname}</Link>
              </td>
              <td>
                <button onClick={() => { this.handleClick(tourInquiry.id) }}>Delete</button>
                <button onClick={() => {  this.props.history.push('tourInquiries/edit/'+tourInquiry.id) }}>Edit</button>
              </td>
            </tr>) */

      return (

        <tr key={index}>
          <td><Link to={requestPaymentUrl}>{paymentRequest.inquiryId}</Link></td>
          <td>{paymentRequest.mailText}</td>
          <td>{paymentRequest.requestDate}</td>
          <td>{paymentRequest.clientMail}</td>
          
        
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

            <th>Inquiry ID</th>
            <th>Mail text</th>
            <th>Requerst date</th>
            <th>Client's mail</th>
  
          </tr>
        </thead>
        <tbody>{result}</tbody>
      </Table>
      </div>)
  }
}

export default withRouter(AllPaymentRequests)

