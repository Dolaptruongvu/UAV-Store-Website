import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="shadow-lg py-2 mb-4">
      <Container className="d-flex justify-content-between align-items-center">
        {/* Logo on the left */}
        <Navbar.Brand href="/" className="flex-shrink-0">
          <img
            src="/logo.jpg"
            alt="Home"
            className="h-7"
            style={{ maxWidth: "70px" }}
          />
        </Navbar.Brand>

        {/* Middle section: Search bar */}
        <div className="flex-grow-1 mx-4" style={{ maxWidth: "50%" }}>
          <input
            type="text"
            placeholder="Search"
            className="form-control"
            style={{ width: "100%", maxWidth: "100%" }}
          />
        </div>

        {/* Right section: Login and Signup buttons */}
        <div className="d-flex flex-shrink-0">
          <Button variant="outline-primary" className="me-2 py-2 px-4">
            Login
          </Button>
          <Button variant="outline-secondary" className="py-2 px-4">
            Signup
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
