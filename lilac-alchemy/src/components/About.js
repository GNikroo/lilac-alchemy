import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/About.module.css";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container className="my-5 px-4 text-center">
      <Row className="mt-4">
        <h2>About Lilac Alchemy</h2>
        <Col>
          <p>
            At Lilac Alchemy, I am passionate about creating natural, homemade
            salves that promote wellness and healing. My journey started after
            years of working in the medical field and born from a love of
            nature. Through these salves, I share my knowledge and experiences
            with those who seek natural care and protection from harsh
            pharmaceuticals.
          </p>
        </Col>
      </Row>
      <Row className="mt-3">
        <h4>
          shop our Lilac Alchemy collection at{" "}
          <a href="https://www.etsy.com/se-en/shop/LilacAlchemybyGreco?ref=shop-header-name&listing_id=1759318992&from_page=listing">
            Etsy
          </a>
        </h4>
      </Row>
      <Row className="mt-5">
        <Col className={styles.Disclaimer}>
          <h6>Disclaimer</h6>
          <p>
            Please note that products offered by Lilac Alchemy are not
            FDA-approved and are not intended to diagnose, treat, cure, or
            prevent any disease. These products are handcrafted using natural
            ingredients and should be used as part of your personal care
            routine, not as a substitute for medical treatment.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
