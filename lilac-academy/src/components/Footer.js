import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "../styles/Footer.module.css";

function Footer() {
  const [isExpanded, setIsExpanded] = useState(false);
  const footerRef = useRef(null);
  const currentYear = new Date().getFullYear();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClickOutside = (event) => {
    if (footerRef.current && !footerRef.current.contains(event.target)) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded]);

  return (
    <footer
      ref={footerRef}
      className={`${styles.Footer} ${isExpanded ? styles.expanded : ""}`}
    >
      <Container>
        <Row>
          <Col className="text-center">
            <Button
              variant="link"
              onClick={toggleExpand}
              className={styles.ToggleButton}
            >
              {isExpanded ? "" : "read our disclaimer"}
            </Button>
          </Col>
        </Row>
        {isExpanded && (
          <Row>
            <Col>
              <p className={styles.Disclaimer}>
                Please note that the products offered by Lilac Alchemy are not
                FDA-approved and are not intended to diagnose, treat, cure, or
                prevent any disease. These products are handcrafted using
                natural ingredients and should be used as part of your personal
                care routine, not as a substitute for medical treatment. We
                strongly recommend consulting with a healthcare professional
                before using any new products, especially if you have a
                pre-existing medical condition or are taking other medications.
              </p>
            </Col>
          </Row>
        )}
        <Row>
          <Col className="text-center">
            <p className={styles.Copyright}>
              &copy; {currentYear} Lilac Alchemy. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
