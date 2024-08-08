import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import styles from "../styles/Products.module.css";

function Products() {
  const productList = [
    {
      title: "Lavender and Calendula Salve",
      subtitle: "soothing and restorative",
    },
    {
      title: "Lavender and Calendula Salve",
      subtitle: "soothing and restorative",
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
        Handmade in small batches, each of Lilac Alchemy's salves accelerates
        crafted with care to ensure the highest quality and efficacy. Natural
        variances may occur, adding to the unique charm and authenticity of our
        artisanal product. <em>Also available in vegan options.</em>
      </h3>
      <Row>
        {productList.map((product, index) => (
          <Col key={index} md={4} className={`${styles.Card} mb-4`}>
            <Card>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Subtitle className={styles.Subtitle}>
                  {product.subtitle}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
