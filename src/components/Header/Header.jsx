import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Header = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand>Brightwheel Search Engine</Navbar.Brand>
    </Container>
  </Navbar>
);

export default Header;
