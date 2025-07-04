import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import bannerImage from "../assets/Banner.png"; // Adjust path if needed

const HeroSection: React.FC = () => {
  return (
    <>
      {/* Google Font */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');`}
      </style>

      {/* Embedded Styles */}
      <style>{`
        .hero-section {
          background: url(${bannerImage}) no-repeat center center/cover;
          min-height: 65vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          color: #fff;
          text-align: center;
          padding: 3rem 1rem;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.55);
          z-index: 0;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
          margin: auto;
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          font-weight: 700;
          line-height: 1.3;
        }

        .hero-text {
          font-size: 1.25rem;
          color: #e0e0e0;
          margin: 1.5rem 0 2rem;
        }

        .button-row {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .hero-btn {
          padding: 0.75rem 2rem;
          font-size: 1.1rem;
          border-radius: 0.75rem;
          border: 2px solid #fff;
          color: #fff;
          background-color: transparent;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .hero-btn:hover {
          background-color: #fbb31c;
          color: #000;
          border-color: #fbb31c;
          transform: translateY(-2px);
        }

        .hero-btn.dark {
          background-color: #fff;
          color: #000;
        }

        .hero-btn.dark:hover {
          background-color: #000;
          color: #fff;
          border-color: #fff;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.2rem;
          }

          .hero-text {
            font-size: 1rem;
          }

          .hero-btn {
            font-size: 1rem;
            padding: 0.6rem 1.5rem;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row>
            <Col className="hero-content">
              <h1 className="hero-title">We Butter Brands.</h1>
              <h1 className="hero-title">Then We Toast Them.</h1>
              <p className="hero-text">
                Bite-sized marketing magic for bold businesses.
              </p>
              <div className="button-row">
                <Button
                  as="a"
                  href="mailto:thesocialtoast.org@gmail.com?subject=Let's%20Get%20Toasting"
                  className="hero-btn"
                >
                  Let’s Get Toasting 🍞
                </Button>
                <Button
                  as="a"
                  href="https://calendly.com/yourname/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-btn dark"
                >
                  Book a Jam Sesh
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HeroSection;
