import React, { useEffect } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import styles from "../styles/Products.module.css";
import { Link } from "react-router-dom";
import img1 from "../assets/coconut.jpg";
import img2 from "../assets/beeswax.jpg";

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
      <div className="clearfix">
        <img
          src={img1}
          className="col-md-6 float-md-end mb-3 ms-md-3"
          style={{ height: 250, width: 250 }}
          alt="coconut oil"
        />
        <h4>Coconut oil</h4>
        <p>
          A versatile natural remedy that may offer several skin benefits,
          including deep hydration, anti-inflammatory effects, and antibacterial
          properties.
        </p>
        <ul>
          <li>vegan</li>
          <li>antibacterial</li>
          <li>anti-inflammatory</li>
          <li>soothes dry skin</li>
          <li>promotes wound healing</li>
        </ul>
      </div>

      <div className="clearfix">
        <img
          src={img2}
          className="col-md-6 float-md-start mb-3 ms-md-3"
          style={{ height: 250, width: 250 }}
          alt="beeswax"
        />
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
      </div>
      <Row className="justify-content-center">
        {productList.map((product, index) => (
          <Col key={index} md={4} className={`${styles.Col} mb-4`}>
            <Link to={`/product/${encodeURIComponent(product.title)}`}>
              <Card className={`${styles.Card} border-left-0 border-right-0`}>
                <Card.Body className="text-center align-content-center">
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
