import React, { Component } from 'react';
import { Button,  Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from  'react-bootstrap';
import { Link } from 'react-router-dom';



class Header extends Component {
  render() {
    console.log("calling render from header");
    return (
      
      <Navbar color="dark" light expand="md">
      <Navbar.Brand tag={Link} to="/">Home</Navbar.Brand>
      <Navbar.Brand href="/guides">All guides</Navbar.Brand>
      <Navbar.Brand href="/tourInquiries">Tour inquiries</Navbar.Brand>
      <Navbar.Brand href="/payments">Payments</Navbar.Brand>
      </Navbar>
 
    )
  }
}

export default Header