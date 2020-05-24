import React, { Component } from 'react';
import { Button,  Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from  'react-bootstrap';
import { Link } from 'react-router-dom';

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const {isAuthenticated, login, logout} = this.props;

    return <Navbar color="light" light expand="md">
      <Navbar.Brand tag={Link} to="/">Home</Navbar.Brand>
      <Navbar.Brand href="/guides">All guides</Navbar.Brand>
      <Navbar.Brand href="/tourInquiries">Tour inquiries</Navbar.Brand>
      <Navbar.Brand href="/payments">Payments</Navbar.Brand>
      <Navbar.Toggle onClick={this.toggle}/>
      <Navbar.Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
        
         
          { !isAuthenticated ?
            <NavItem>
              <Button color="secondary" outline onClick={login}>Login</Button>
            </NavItem> :
            <NavItem>
              <Button color="secondary" outline onClick={logout}>Logout</Button>
            </NavItem>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>;
  }
}

export default NavBar;