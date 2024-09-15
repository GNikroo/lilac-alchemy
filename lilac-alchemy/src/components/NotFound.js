import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import styles from "../styles/NotFound.module.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container>
      <Card className={`${styles.NotFound} mt-5 border-0 text-center`}>
        <Row className="d-flex align-items-center">
          <Col>404</Col>
        </Row>
        <Row className="pb-3">
          <Col>this page does not exist!</Col>
        </Row>
        <Row className="p-3">
          <Link to="/" className={`${styles.Link} text-decoration-none`}>
            go home <span className={styles.Line}>&rarr;</span>
          </Link>
        </Row>
      </Card>
    </Container>
  );
};

export default NotFound;
