import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class RequestPayment extends Component {
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
        console.log("payment");
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
        console.log('payment request data = ' + data);
        if (data && data.name) {

            var textForTheMail = "Dear " + data.name + ", \n"
                + "\n Please pay the deposit using this link: " + 'http://localhost:3000/pay/' + data.id
                + "\n _________________________________"
                + "\n Tour details: \n Tourist: " + data.name + " " + data.surname + ". \n" + " Tour lasts: " + data.days + " days. \n" + " Tour starts: " + data.date.substr(0,10) + ". \n" + " How many persons: "
                + data.persons + ". \n" + " Additional information: " + data.message +
                "\n \n If you have any questions, feel free to contact us by replying to this email." +
                "\n -----" +
                "\n Best Regards," + " \n Simien Mountains National Park team";
            console.log(textForTheMail);
            return (//<p> {data.name}</p>

                <Form onSubmit={this.handleSubmit}>

                    <h5>Send a bill for the tourist: {data.name} {data.surname}</h5>
                    <br />
                    <Form.Group controlId="formPaymentRequest">
                        <Form.Label>Tourist's e-mail:</Form.Label>
                        <Form.Control size="sm" type="email" defaultValue={data.email} />

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

export default RequestPayment