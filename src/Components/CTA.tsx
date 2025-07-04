import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const CTASection: React.FC = () => {
  return (
    <>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap');`}
      </style>

      <style>{`
        .cta-section {
          background: #c3caca;
          padding: 5rem 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cta-box {
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(30px);
          border-radius: 20px;
          padding: 3rem 2rem;
          text-align: center;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.1);
          color: #fff;
          font-family: 'Inter', sans-serif;
        }

        .cta-box::before {
          content: '';
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(100,150,150,0.35), transparent 60%);
          bottom: -50px;
          right: -50px;
          border-radius: 50%;
          filter: blur(25px);
        }

        .cta-heading {
          font-size: 2.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .cta-text {
          font-size: 1.2rem;
          margin-bottom: 2rem;
        }

        .cta-btn {
          background-color: #ffffff;
          color: #1e1e1e;
          font-weight: 600;
          padding: 0.75rem 2rem;
          border-radius: 999px;
          border: none;
          transition: 0.3s ease;
        }

        .cta-btn:hover {
          background-color: #eeeeee;
        }

        @media (max-width: 768px) {
          .cta-heading {
            font-size: 2rem;
          }

          .cta-text {
            font-size: 1rem;
          }

          .cta-box {
            padding: 2rem 1rem;
          }
        }
      `}</style>

      <section className="cta-section">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8}>
              <div className="cta-box">
                <h2 className="cta-heading">Ready to Stand Out?</h2>
                <p className="cta-text">
                  Join The Social Toast and let your brand sizzle with bold strategy and tasteful design.
                </p>
                <Button className="cta-btn">Get Started</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CTASection;
