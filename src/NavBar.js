import React, { Component } from 'react';
import { Button, Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { isAuthenticated, login, logout } = this.props;

    return <Navbar color="light" expand="md">
      <Navbar.Brand tag={Link} to="/">Home</Navbar.Brand>

      {isAuthenticated ? <span>
        <Navbar.Brand href="/guides">All guides</Navbar.Brand>
        <Navbar.Brand href="/tour-inquiries">Tour inquiries</Navbar.Brand> 
        {/* <Navbar.Brand href="/paymentRequests">Payment requests</Navbar.Brand>
          <Navbar.Brand href="/payments">Payments</Navbar.Brand> */}
          </span>: <span/>}



      <Navbar.Toggle onClick={this.toggle} />
      <Navbar.Collapse >
        <Nav className="ml-auto">


          {!isAuthenticated ?
            <NavItem>
              <Button color="secondary" onClick={login}>Login</Button>
            </NavItem> :
            <NavItem>
              <Button color="secondary" onClick={logout}>Logout</Button>
            </NavItem>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>;
  }
}

export default NavBar;