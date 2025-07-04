import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import AccordionSection from "./Accordion";

const AboutSection: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Google Font */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');`}
      </style>

      <style>{`
        .about-section {
          background-color: #ffffff;
          padding: 5rem 0;
        }

        .about-card {
          background: white;
          padding: 3rem 3rem 0 3rem; /* No bottom padding */
          border-radius: 60px 60px 0 0; /* Rounded only at top */
          box-shadow:
            -20px -20px 60px rgba(104, 104, 104, 0.06),
             20px -20px 60px rgba(104, 104, 104, 0.06); /* No bottom shadow */
          border: none;
          margin-bottom: 0; /* Prevent spacing below */
        }

        .about-heading {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #222;
        }

        .about-text {
          font-size: 1.15rem;
          color: #444;
          line-height: 1.75;
          padding-bottom: 2rem; /* Optional for inner spacing */
        }

        @media (max-width: 991px) {
          .about-card {
            padding: 2rem 2rem 0 2rem;
            border-radius: 40px 40px 0 0;
          }

          .about-heading {
            font-size: 2rem;
          }

          .about-text {
            font-size: 1.05rem;
          }
        }

        @media (max-width: 576px) {
          .about-heading {
            font-size: 1.75rem;
            text-align: center;
          }

          .about-text {
            text-align: center;
            font-size: 1rem;
          }
        }
      `}</style>

      <section className="about-section">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={10} lg={10} xl={10}>
              <div className="about-card" data-aos="fade-up">
                <h2 className="about-heading">About Us</h2>
                <p className="about-text">
                  We’re The Social Toast — your friendly digital marketing crew
                  serving up fresh ideas, bold strategies, and content that pops
                  off the screen. Born out of a love for creativity and a
                  refusal to settle for bland, we craft campaigns that rise,
                  visuals that sizzle, and digital presences that actually
                  convert. 
                  <br />
                  Our secret recipe? A generous spread of strategy, a
                  sprinkle of wit, and everything toasted to perfection. Whether
                  you’re launching something new or reviving something stale, we
                  bring the toast—and make sure it’s served hot.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <AccordionSection></AccordionSection>

    </>
  );
};

export default AboutSection;
