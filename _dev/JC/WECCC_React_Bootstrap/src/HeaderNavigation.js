import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import InlineLogin from './InlineLogin';
import NavItem from 'react-bootstrap/lib/NavItem';
import Button from 'react-bootstrap/lib/Button';
import OverlayTrigger from 'react-bootstrap/lib/Button';

export default class HeaderNavigation extends React.Component {
  render() {
    let brand = <a href='#'>Outcome Reports</a>;

    return (

      <Navbar brand={brand} fixedTop toggleNavKey={0} >

        <Nav right >
            <NavItem eventKey={1} href="#">ABOUT</NavItem>
            <NavItem eventKey={2} href="#">CONTACT</NavItem>
            <NavItem eventKey={3} href="#">MY COMMUNITY</NavItem>
            <NavItem eventKey={4} href="#">MY GROUPS</NavItem>     

    <Button bsStyle="dft_nav_btn" > LOGIN</Button>  

    
        </Nav>
        
      </Navbar>

 
    );
  }
}


