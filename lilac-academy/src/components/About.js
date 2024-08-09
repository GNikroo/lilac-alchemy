import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/About.module.css";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Row>
        <h2>About Us</h2>
        <Col>
          <p>
            Lilac Alchemy is passionate about creating natural, homemade salves
            that promote wellness and healing. My journey started after years of
            working in the medical field and born from a love of nature. Through
            these salves, I share my knowledge and experiences with those who
            seek natural care and protection from harsh pharmaceuticals.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className={styles.Disclaimer}>
          <h6 className="mt-4">Disclaimer</h6>
          <p>
            Please note that the products offered by Lilac Alchemy are not
            FDA-approved and are not intended to diagnose, treat, cure, or
            prevent any disease. These products are handcrafted using natural
            ingredients and should be used as part of your personal care
            routine, not as a substitute for medical treatment. We strongly
            recommend consulting with a healthcare professional before using any
            new products, especially if you have a pre-existing medical
            condition or are taking other medications.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
