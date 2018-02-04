import React from 'react';
import ReactDOM from 'react-dom'
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import NavItem from 'react-bootstrap/lib/NavItem';
import Button from 'react-bootstrap/lib/Button';

var Header = (props) => (

  <Navbar fixedTop collapseOnSelect className="navbar">
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Fit-Stop</a>
      </Navbar.Brand>
    </Navbar.Header>
      <Nav pullRight>
        {props.showButtons && props.loggedIn && (
          <NavItem eventKey={1} onClick={props.logOut}>Log Out</NavItem>
        )}
        {props.showButtons && !props.loggedIn && (
          <NavItem eventKey={2} onClick={props.goToLogin}>Log In</NavItem>
        )}
        {!props.loggedIn && props.showButtons && (
          <NavItem eventKey={3} onClick={props.goToSignUp}>Sign Up</NavItem>
        )}
        <NavItem><span className='username'>{props.username}</span></NavItem>
      </Nav>
  </Navbar>

);

export default Header;
