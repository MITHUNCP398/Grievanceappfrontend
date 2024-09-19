import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'


function Navbars() {
  return (
    <Navbar bg="secondary custom-nav" data-bs-theme="dark">
    <Container>
      <Nav className="me-auto" >
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About Us</Nav.Link>
        <Nav.Link href="/submit-grievance">Grievance</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Navbars