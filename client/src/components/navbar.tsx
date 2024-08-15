import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  ListGroup,
} from "react-bootstrap";
function MyNavbar() {
  const[isHovered,SetIsHovered] = useState(false);

  const mouseEnter = () =>{
    SetIsHovered(true);
  }
  const mouseLeave = () =>{
    SetIsHovered(false);
  }

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
        <div style={{ position: 'relative', display: 'inline-block',textSizeAdjust:"inherit", alignItems:"center" }}>
          <h6
            style={{ cursor: 'pointer'}}
            className="mb-0 text-primary"
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            Sản phẩm  <span style={{ marginLeft: '5px' }}>&#x25BC;</span>
          </h6>
          {isHovered && (
            <ListGroup
              style={{
                position: 'absolute',
                top: '100%',
                left: '0',
                zIndex: 1,
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              }}
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
              defaultActiveKey="#link1"
            >
              <ListGroup.Item href="#" action>Dji mini</ListGroup.Item>
              <ListGroup.Item href="#" action>Dji mavic</ListGroup.Item>
              <ListGroup.Item href="#" action>Dji Air</ListGroup.Item>
              <ListGroup.Item href="#" action>Phụ kiện</ListGroup.Item>
            </ListGroup>
          )}
        </div>

        {/* Middle section: Search bar */}
        <div className="flex-grow-1 mx-4" style={{ maxWidth: "50%" }}>
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="form-control"
            style={{ width: "100%", maxWidth: "100%" }}
          />
        </div>

        {/* Right section: Login and Signup buttons */}
        <div className="d-flex flex-shrink-0">
          <Button variant="outline-primary" className="me-2 py-2 px-4">
            Đăng Nhập
          </Button>
          <Button variant="outline-secondary" className="py-2 px-4">
            Đăng Ký
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
