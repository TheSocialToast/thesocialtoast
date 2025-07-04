import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  BiPaint,
  BiChat,
  BiBullseye,
  BiCodeAlt,
  BiMailSend,
  BiBrain
} from 'react-icons/bi';

const services = [
  {
    icon: <BiPaint size={28} />,
    title: 'Logo Design & Branding',
    description: 'Naming, tone, and brand identity — your first impression matters.',
  },
  {
    icon: <BiChat size={28} />,
    title: 'Social Media Marketing',
    description: 'Content, visuals, and strategy that spread like wildfire.',
  },
  {
    icon: <BiBullseye size={28} />,
    title: 'Paid Ads & Performance',
    description: 'Launch ads that pop off the feed and perform.',
  },
  {
    icon: <BiCodeAlt size={28} />,
    title: 'Website Design',
    description: 'Clean, creative, and conversion-ready websites that convert.',
  },
  {
    icon: <BiMailSend size={28} />,
    title: 'Email & WhatsApp Marketing',
    description: 'Messages that feel personal — and get clicks.',
  },
  {
    icon: <BiBrain size={28} />,
    title: 'AI-driven Marketing',
    description: 'Smart tools that keep your brand ahead.',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <>
      {/* Playfair Display Font */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');`}
      </style>

      {/* Component Styles */}
      <style>{`
        .services-heading {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .services-subtext {
          color: #555;
          font-size: 1.1rem;
          margin-bottom: 3rem;
        }

        .icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: radial-gradient(circle at top left, #FFD84D, #FFC107);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #000;
          margin-bottom: 1rem;
        }

        .service-card {
          border: 1px solid #eee;
          border-radius: 12px;
          padding: 1.5rem;
          transition: all 0.3s ease;
          background: #fff;
          height: 100%;
        }

        .service-card:hover {
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.05);
          transform: translateY(-4px);
        }

        @media (max-width: 992px) {
          .services-heading {
            font-size: 2rem;
          }

          .services-subtext {
            font-size: 1rem;
          }
        }

        @media (max-width: 768px) {
          .services-heading {
            font-size: 1.75rem;
          }

          .icon-box {
            width: 42px;
            height: 42px;
            font-size: 1rem;
          }

          .service-card {
            padding: 1.25rem;
          }
        }

        @media (max-width: 576px) {
          .services-heading {
            font-size: 1.5rem;
            text-align: center;
          }

          .services-subtext {
            text-align: center;
            font-size: 0.95rem;
          }

          .icon-box {
            margin: 0 auto 1rem;
          }

          .service-card {
            text-align: center;
          }
        }
      `}</style>

      <Container className="py-5">
        <Row className="justify-content-center text-center mb-4">
          <Col lg={8}>
            <h2 className="services-heading">Marketing, But Make It Crispy.</h2>
            <p className="services-subtext">
              We're not a full-service agency — just enough to get you noticed and remembered.
            </p>
          </Col>
        </Row>

        <Row xs={1} sm={2} md={3} className="g-4">
          {services.map((service, index) => (
            <Col key={index}>
              <Card className="service-card h-100">
                <div className="icon-box">{service.icon}</div>
                <h5 className="fw-bold">{service.title}</h5>
                <p className="text-muted">{service.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ServicesSection;
