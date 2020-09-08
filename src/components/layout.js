import React from "react"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Logo from '../images/lauraLogoFaded.png';
import '../styles/global.css';
import { Helmet } from "react-helmet"

export default function Layout({ children }) {
  return (
      <div class="page-container">
        <div class="main-content">
         <Helmet>
          <meta charSet="utf-8" />
          <title>Holistic Wellbeing Scotland</title>
        </Helmet>
    <Navbar expand="lg" className="fixed-top">
    <Navbar.Brand href="/">
    <img
        src={Logo}
        width="100"
        height="50"
        className="d-inline-block align-top logo"
        alt="Holistic Wellbeing logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/treatments">Treatments</Nav.Link>
        <NavDropdown title="Events" id="basic-nav-dropdown">
          <NavDropdown.Item href="/events">Pamper Parties</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Corporate" id="basic-nav-dropdown">
          <NavDropdown.Item href="/corporate">Workplace Massage</NavDropdown.Item>
          <NavDropdown.Item href="/filmAndTV">Film and TV</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="About" id="basic-nav-dropdown">
          <NavDropdown.Item href="/about">About Laura</NavDropdown.Item>
          <NavDropdown.Item href="/gallery">Gallery</NavDropdown.Item>
          <NavDropdown.Item href="/testimonials">Testimonials</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button class="search-button" variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
  {children}
  </div>
  <footer>Copyright © 2020 | Holistic Wellbeing Scotland | Website by Lipstick Design</footer>
  </div>
  )
}