import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Card,
  Container,
  Row,
  Col
} from "react-bootstrap";

function ProductList() {
    return (
        <Container className="pt-5">
        <Row xs={1} md={4} className="g-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }

export default ProductList;