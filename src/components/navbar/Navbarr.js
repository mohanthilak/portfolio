import React from "react";
import "./navbar.css";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function Navbarr() {
  return (
    <div>
      <Navbar expand="lg" className="navbar-border">
        <Container>
          <Navbar.Brand href="#home">MOHAN THILAK</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="https://drive.google.com/file/d/1Rg0-xDiWxMzk0_STBhHBNvT_7bOi5Eah/view?usp=sharing">
                RESUME
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
