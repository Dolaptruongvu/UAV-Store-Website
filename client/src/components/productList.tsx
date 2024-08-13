import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/v1/products');
        console.log("API Response:", response.data); // Check what this logs
        setProducts(response.data.data); // Access the 'data' field
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <Container className="pt-5">
      <Row xs={1} md={4} className="g-4">
        {products.map((product, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={`/productimg/${product.images[0]}`} alt={product.name} />
              <Card.Body>
                <Card.Title as={'h4'}>{product.name}</Card.Title>
                <Card.Subtitle as={'h5'}>
                  {product.price} USD
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;
