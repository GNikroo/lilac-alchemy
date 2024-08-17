import React, { useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Your message was sent 🎉"))
      .catch((error) => alert(error));
  }

  return (
    <Container>
      <h2 className="d-block text-center">Contact Us</h2>
      <Card className={`${styles.Contact} m-auto border-0`}>
        <Row className="py-1 justify-content-center">
          <Col lg={7}>
            <Card className={`${styles.FormContainer} border-0 mx-auto px-3`}>
              <Form data-netlify="true" name="contact" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <Card.Text>
                  If you have questions or concerns please contact me and I will
                  get back to you as soon as possible!
                </Card.Text>
                <Row className="px-3">
                  <Col md={6} sm={1}>
                    <Form.Group className="relative mb-2">
                      <Form.Label htmlFor="name" className={styles.Label}>
                        Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="name"
                        name="name"
                        autoComplete="given-name"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="relative mb-2">
                      <Form.Label htmlFor="email" className={styles.Label}>
                        Email
                      </Form.Label>
                      <Form.Control
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} sm={1}>
                    <Form.Group className="relative mb-2">
                      <Form.Label htmlFor="message" className={styles.Label}>
                        Message
                      </Form.Label>
                      <Form.Control
                        onChange={(e) => setMessage(e.target.value)}
                        as="textarea"
                        aria-label="With textarea"
                        id="message"
                        name="message"
                        rows={5}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Container className="text-center">
                  <button
                    type="submit"
                    size="lg"
                    className={`${styles.Button} mt-3 btn border-0`}
                  >
                    submit
                  </button>
                </Container>
              </Form>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className={styles.ContactDetails}>
            <h3>Our Contact Details</h3>
            <p>
              <strong>Email:</strong> lilacalchemy2024@gmail.com
            </p>
            <div>
              <h4>
                Shop our Lilac Alchemy collection at{" "}
                <a href="https://www.etsy.com/se-en/shop/LilacAlchemybyGreco?ref=shop-header-name&listing_id=1759318992&from_page=listing">
                  Etsy{" "}
                </a>
              </h4>
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Contact;
