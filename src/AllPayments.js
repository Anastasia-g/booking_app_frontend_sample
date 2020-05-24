import React,{ Component } from "react"
import Table from 'react-bootstrap/Table'

class AllPayments extends Component{
    state = {
        data: [],
      }
      constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
      }
    
      fetchPayments() {
        console.log("fetching payments");
        const url =
          //'https://en.wikipedia.org/w/api.php?action=opensearch&search=Russia&format=json&origin=*'
          'http://localhost:8080/api/v1/payments'
    
        fetch(url)
          .then(result => result.json())
          .then(result => {
            console.log(result);
            this.setState({
              data: result,
            })
          })
      }
      // Code is invoked after the component is mounted/inserted into the DOM tree.
      componentDidMount() {
        this.fetchPayments();
      }
      handleClick(id) {
        console.log("deleting " + id)
    
        fetch('http://localhost:8080/api/v1/payments/' + id, {
          method: 'DELETE'
    
    
        }).then(() => { console.log("calling fetch"); this.fetchPayments() });
    
      }
      handleClickEdit(id) {
        console.log("editing " + id)
    
        this.props.history.push('payments/edit');
        //.then(() => {console.log("calling fetch"); this.fetchGuides()});
    
      }
      render() {
        console.log("rendering");
        const { data } = this.state
        //console.log(data);
    
    
        const result = data.map((payment, index) => {
          //console.log("entry name " + guide.name);
          //console.log("index " + index);
          //console.log("entry id " + guide.id);
          
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
                  <td>{payment.inquiryId}</td>
                  <td>{payment.payment}</td>
                  <td>{payment.paymentDate}</td>
                  <td>{payment.id}</td>
                  <td><button onClick={() => { this.handleClick(payment.id) }}>Delete</button></td>
                  <td><button onClick={() => {  this.props.history.push('payments/edit/'+payment.id) }}>Edit</button></td>
                </tr>
    
          )
        })
    
        //return <div className="jumbotron"> <table><tbody>{result}</tbody></table></div>
        //return <Container>{result}</Container>
        return(        
    
        <Table responsive striped bordered hover>
          <thead>
           <tr>
             
             <th>Inquiry ID</th>
             <th>Payment</th>
             <th>Payment date</th>
             <th>Payment ID</th>
             <th>#</th>
             <th>#</th>
           </tr>
         </thead> 
         <tbody>{result}</tbody>
        </Table>)
    
      }
}
export default AllPayments