import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Header