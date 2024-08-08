import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import styles from "../styles/Products.module.css";
import { Link } from "react-router-dom";

function Products() {
  const productList = [
    {
      title: "Lavender and Calendula Salve",
      subtitle: "soothing",
    },
    {
      title: "Organic Rosemary Salve",
      subtitle: "energizing",
    },
    {
      title: "Lavender and Calendula Salve",
      subtitle: "soothing and restorative",
    },
  ];

  return (
    <Container>
      <h2>Our Products</h2>
      <h3 className={styles.Subheading}>
        Handmade in small batches, each of Lilac Alchemy's salves are crafted
        with care to ensure the highest quality and efficacy.{" "}
        <em>Also available in vegan options.</em>
      </h3>
      <Row>
        {productList.map((product, index) => (
          <Col key={index} md={4} className={`${styles.Card} mb-4`}>
            <Link to={`/product/${encodeURIComponent(product.title)}`}>
              <Card>
                <Card.Body>
                  <Card.Title className={styles.Title}>
                    {product.title}
                  </Card.Title>
                  <Card.Subtitle className={styles.Subtitle}>
                    {product.subtitle}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
