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
    <Container className="text-center">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2>Our Collection</h2>
          <p className={styles.Subheading}>
            Handmade in small batches, each of Lilac Alchemy's salves are
            crafted with care to ensure the highest quality and efficacy. We use
            avocado oil and shea butter as our base for all salves. These
            powerful natural ingredients offer numerous benefits in skincare
            products.
          </p>
          <p>
            Avocado oil, rich in omega-3 fatty acids and vitamins A, D, and E,
            deeply nourishes and moisturizes the skin, helping to relieve
            inflammation, treat acne, and promote wound healing.
          </p>
          <p>
            Shea butter, known for its high concentrations of fatty acids and
            vitamins, provides intense hydration and anti-inflammatory
            properties. Its emollient qualities create a protective barrier that
            locks in moisture, while its potential anti-aging effects may
            improve skin texture and reduce wrinkles.
          </p>
          <p>
            To provide thickening and structure to our base, choose between{" "}
            <em>coconut oil</em> and <em>beeswax</em> emollients.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8}>
          <h3 className="text-center text-decoration-underline">
            Added Emollients
          </h3>
        </Col>
      </Row>
      <Row className="align-items-center justify-content-center mb-2">
        <h4 className={styles.HeadingFour}>Coconut Oil</h4>
        <Col
          xs={12}
          md={5}
          lg={4}
          className="order-md-1 text-center mb-4 mb-md-0"
        >
          <img
            src={img1}
            className="rounded-3"
            style={{
              height: "100%",
              width: "100%",
              maxWidth: 225,
              maxHeight: 225,
            }}
            alt="coconut oil"
          />
        </Col>
        <Col
          xs={12}
          md={5}
          lg={4}
          className="order-md-2 text-center text-md-start"
        >
          <p>
            A versatile natural remedy that may offer several skin benefits,
            including deep hydration, anti-inflammatory effects, and
            antibacterial properties.
          </p>
          <ul className="text-start">
            <li>vegan</li>
            <li>antibacterial</li>
            <li>anti-inflammatory</li>
            <li>soothes dry skin</li>
            <li>promotes wound healing</li>
          </ul>
        </Col>
      </Row>
      <Row className="align-items-center justify-content-center mb-2">
        <h4 className={styles.HeadingFour}>Beeswax</h4>
        <Col
          xs={12}
          md={5}
          lg={4}
          className="order-md-2 text-center mb-4 mb-md-0"
        >
          <img
            src={img2}
            className="rounded-3"
            style={{
              height: "100%",
              width: "100%",
              maxWidth: 225,
              maxHeight: 225,
            }}
            alt="beeswax"
          />
        </Col>
        <Col
          xs={12}
          md={5}
          lg={4}
          className="order-md-1 text-center text-md-end"
        >
          <p>
            A natural wax produced by bees widely used in skincare for its
            ability to attract and retain moisture, creating a protective
            barrier on the skin.
          </p>
          <ul className="text-start">
            <li>antibacterial</li>
            <li>anti-inflammatory</li>
            <li>promotes skin regeneration</li>
            <li>supports skin barrier function</li>
            <li>soothes conditions like psoriasis, eczema, and diaper rash</li>
          </ul>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8}>
          <h3 className="text-center text-decoration-underline">Products</h3>
        </Col>
      </Row>
      <Row className="pt-2 justify-content-center">
        {productList.map((product, index) => (
          <Col
            key={index}
            xs={10}
            sm={6}
            md={4}
            lg={3}
            className={`${styles.Col} mb-4`}
          >
            <Link to={`/collection/${encodeURIComponent(product.title)}`}>
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
