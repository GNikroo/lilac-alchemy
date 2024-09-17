// Contact.js

import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Modal,
} from "react-bootstrap";
import styles from "../styles/Contact.module.css";

function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [validated, setValidated] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Encode function for form data
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    // Prepare form data
    const data = {
      "form-name": "contact",
      ...formData,
    };

    // Submit the form data via fetch
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(data),
    })
      .then(() => {
        // Clear the form
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setValidated(false);

        // Show the modal
        setShowModal(true);
      })
      .catch((error) => {
        // Handle the error
        alert("An error occurred. Please try again later.");
        console.error(error);
      });
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container className="my-5 px-4 text-center">
      <Row className="mt-4">
        <h2>Contact Us</h2>
        <Card className={`${styles.Contact} border-0`}>
          <Row>
            <Col>
              <Card className={`${styles.FormContainer} border-0`}>
                <Form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  noValidate
                  validated={validated}
                  onSubmit={handleSubmit}
                >
                  {/* Netlify Forms Hidden Inputs */}
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" />

                  <Card.Text>
                    If you have questions or concerns, please contact us and we
                    will get back to you as soon as possible!
                  </Card.Text>
                  <Row className="px-3">
                    <Col md={6} sm={12}>
                      <Form.Group controlId="formName" className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                          autoComplete="name"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide your name.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group controlId="formEmail" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                          autoComplete="email"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid email address.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6} sm={12}>
                      <Form.Group controlId="formMessage" className="mb-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          name="message"
                          rows={5}
                          placeholder="Enter your message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter a message.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-center">
                    <button
                      type="submit"
                      className={`${styles.SubmitButton} border-0`}
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              </Card>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <h3>Our Contact Details</h3>
              <p className="text-center">
                <strong className={styles.Label}>Email:</strong>{" "}
                <a href="mailto:lilacalchemy2024@gmail.com">
                  lilacalchemy2024@gmail.com
                </a>
              </p>
            </Col>
          </Row>
        </Card>
      </Row>

      {/* Submission Confirmation Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Thank You!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your message has been sent successfully.</p>
          <p>We will get back to you as soon as possible!</p>
        </Modal.Body>
        <Modal.Footer>
          <button className={styles.CloseButton} onClick={handleCloseModal}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Contact;
