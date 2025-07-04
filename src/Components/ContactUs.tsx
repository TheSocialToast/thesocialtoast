import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const ContactSection = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');

        .contact-section {
          background-color: #F2E9DD;
          padding: 80px 0;
        }

        .contact-heading {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 0.5rem;
        }

        .contact-subtext {
          font-size: 1.1rem;
          text-align: center;
          color: #555;
          margin-bottom: 2.5rem;
        }

        .contact-form {
          background-color: #ffffff;
          padding: 2.5rem;
          border-radius: 16px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
        }

        .form-label {
          font-weight: 600;
        }

        .form-control {
          border-radius: 8px;
          padding: 0.75rem 1rem;
          font-size: 1rem;
        }

        .contact-btn {
          background-color: #ffd700;
          color: #000;
          border: none;
          padding: 0.75rem 2rem;
          font-weight: 600;
          font-size: 1rem;
          border-radius: 8px;
          transition: all 0.3s ease-in-out;
        }

        .contact-btn:hover {
          background-color: #ffcc00;
        }

        .social-icons {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
          gap: 2rem;
        }

        .social-icon {
          font-size: 2rem;
          color: #000;
          transition: color 0.2s, transform 0.2s;
        }

        .social-icon:hover {
          color: #ffb800;
          transform: scale(1.1);
        }

        .contact-phone {
          text-align: center;
          margin-top: 1.5rem;
        }

        .contact-phone a {
          color: #ffb800;
          font-weight: 600;
          text-decoration: none;
        }

        .contact-phone a:hover {
          text-decoration: underline;
          color: #ffd700;
        }

        @media (max-width: 768px) {
          .contact-heading {
            font-size: 2rem;
          }

          .contact-subtext {
            font-size: 1rem;
          }
        }
      `}</style>

      <section className="contact-section">
        <Container>
          <h2 className="contact-heading">Let's Talk Toast.</h2>
          <p className="contact-subtext">Have a project in mind? Drop us a line and let’s make something crispy together.</p>
          <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8}>
              <div className="contact-form">
                <Form>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Your Name" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="you@example.com" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Let us know how we can help" />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Your message here..." />
                  </Form.Group>
                  <div className="text-center">
                    <Button className="contact-btn" type="submit">
                      Send Message
                    </Button>
                  </div>
                </Form>

                {/* Social Icons */}
                <div className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.instagram.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                </div>

                {/* Phone Contact */}
                <div className="contact-phone">
                  <p>
                    Prefer talking? Call us at{" "}
                    <a href="tel:+919646010300">+91 96460 10300</a>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactSection;
