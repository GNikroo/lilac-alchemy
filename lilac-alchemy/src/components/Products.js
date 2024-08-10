import React, { useEffect } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import styles from "../styles/Products.module.css";
import { Link } from "react-router-dom";

function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const productList = [
    {
      title: "Lavender and Calendula",
      subtitle: "soothing",
    },
    {
      title: "Organic Rosemary",
      subtitle: "energizing",
    },
  ];

  return (
    <Container>
      <h2>Our Products</h2>
      <p className={styles.Subheading}>
        Handmade in small batches, each of Lilac Alchemy's salves are crafted
        with care to ensure the highest quality and efficacy.
      </p>
      <p>
        Choose between <em>coconut oil</em> and <em>shea butter</em> as your
        base.
      </p>
      <h4>Coconut oil</h4>
      <div>
        A versatile natural remedy that may offer several skin benefits,
        including deep hydration, anti-inflammatory effects, and antibacterial
        properties.
        <ul>
          <li>vegan</li>
          <li>antibacterial</li>
          <li>anti-inflammatory</li>
          <li>soothes dry skin</li>
          <li>promotes wound healing</li>
        </ul>
      </div>
      <h4>Beeswax</h4>
      <div>
        A natural wax produced by bees widely used in skincare for its ability
        to attract and retain moisture, creating a protective barrier on the
        skin.
        <ul>
          <li>antibacterial</li>
          <li>anti-inflammatory</li>
          <li>promotes skin regeneration</li>
          <li>supports skin barrier function</li>
          <li>soothes conditions like psoriasis, eczema, and diaper rash</li>
        </ul>
      </div>
      <Row className="justify-content-center">
        {productList.map((product, index) => (
          <Col key={index} md={4} className={`${styles.Card} mb-4`}>
            <Link to={`/product/${encodeURIComponent(product.title)}`}>
              <Card>
                <Card.Body className="text-center">
                  <Card.Title className={styles.Title}>
                    {product.title}
                  </Card.Title>
                  <Card.Subtitle className={`${styles.Subtitle}`}>
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
