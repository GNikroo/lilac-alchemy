import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import styles from "../styles/NotFound.module.css";
import appStyles from "../App.module.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container
      id="notfound"
      className={`${styles.Section} ${appStyles.Section}`}
    >
      <Card className={`${styles.NotFound} m-auto border-0 text-center`}>
        <Row className="d-flex align-items-center">
          <Col className={styles.Title}>404</Col>
        </Row>
        <Row className="pb-3">
          <Col className={styles.Subtitle}>this page does not exist!</Col>
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
