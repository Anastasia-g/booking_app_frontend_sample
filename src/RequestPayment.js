import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

class RequestPayment extends Component {

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
            "inquiryId": this.props.match.params.id,
            "deposit": event.target.deposit.value,
            "mailText": event.target.message.value,
            "clientMail": event.target.email.value,
            
            "requestDate": new Date()
        });


        const thisRequestPayment = await this.props.api.createPaymentRequest(body);
        const jayson = await thisRequestPayment.json();
        //console.log(jayson);
        this.setState({
            data: jayson
        });
        //this.props.history.push('/');

   

    }

    componentDidMount() {
        this.fetchGetTourInquiryById();
        // console.log("payment");
        // const url ='http://localhost:8080/api/v1/tour-inquiries/' + this.props.match.params.id

        // fetch(url)
        //     .then(result => result.json())
        //     .then(result => {
        //         this.setState({


        //             data: result,
        //         })
        //     })
    }

    render() {



        const { data } = this.state;
        console.log('payment request data = ' + data);
        if (data && data.name) {

            var textForTheMail = "Dear " + data.name + ", \n"
                // eslint-disable-next-line
                + "\n Please pay the deposit using this link: " + 'http://localhost:3000/payments/' + data.id
                + "\n _________________________________"
                // eslint-disable-next-line
                + "\n Tour details: \n Tourist: " + data.name + " " + data.surname + " \n" + " Tour lasts: " + data.days + " days \n" + " Tour starts: " + data.date.substr(0, 10) + " \n" + " How many persons: "
                // eslint-disable-next-line
                + data.persons + " \n" + " Additional information: " + data.message +
                "\n \n If you have any questions, feel free to contact us by replying to this email." +
                "\n -----" +
                // eslint-disable-next-line
                "\n Best Regards," + " \n Simien Mountains National Park team";
            console.log(textForTheMail);
            return (//<p> {data.name}</p>

                <Form onSubmit={this.handleSubmit}>

                    <h5>Send a bill for the tourist: {data.name} {data.surname}</h5>
                    <br />
                    <Form.Group controlId="formPaymentRequest">
                        <Form.Label>Tourist's e-mail:</Form.Label>
                        <Form.Control size="sm" name = "email" type="email" defaultValue={data.email} />

                        <Form.Label>Enter total price:</Form.Label>
                        <Form.Control size="sm" name="totalPrice" placeholder="Enter total price" />
                        <Form.Label>Deposit to pay:</Form.Label>
                        <Form.Control size="sm" name="deposit" placeholder="10 percents from total price" />


                        <Form.Label>Message for tourist:</Form.Label>
                        <Form.Control size="sm" name="message" as="textarea" rows="15" defaultValue={textForTheMail} />
                        <Button variant="primary" type="submit">SEND payment request</Button>
                    </Form.Group>
                </Form>
            );


        }

        return <p> Loading... </p>
    }
}

export default withRouter(RequestPayment)