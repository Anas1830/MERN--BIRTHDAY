import React from 'react'

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
   
        <Navbar bg="primary" expand="lg" variant="dark">
          <Container >
            <Navbar.Brand >
                <Link to="/">Birthday Scheduling App</Link>
                
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className='m-auto'>
                <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                
              </Form>
                </Nav>
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="/mynotes">
                    <Link to="/mynotes">
                    Dashboard
                    </Link>
                    </Nav.Link>
                
               
              </Nav>
              
            </Navbar.Collapse>
          </Container>
        </Navbar>
      
    
    
   
  )
}

export default Header
