import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

class Home extends Component {

  render() {
    const {login } = this.props;
    if (this.props.authenticated === null) {
      return <p>Loading...</p>;
    }

    return (
      <div className="app">
        {this.props.navbar}
        <Container fluid>
          { this.props.authenticated ?
            <div>
              <p>Welcome, {this.props.user.name}</p>
              <Button color="secondary">
                <Link className="app-link" to="/guides">Manage Simienpark database</Link>
              </Button>
            </div> :
            <div>
              <p>Please log in to manage Simienpark database.</p>
              <Button color="secondary" onClick={login}>
                Login to Simienpark tours
              </Button>
            </div>
          }
        </Container>
      </div>
    );
  }
}

export default Home;