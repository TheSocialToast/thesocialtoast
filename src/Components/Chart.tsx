/** @jsxImportSource react */
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { Container, Row, Col } from "react-bootstrap";

const data = [
  { subject: "Creativity", A: 95, fullMark: 100 },
  { subject: "Strategy", A: 90, fullMark: 100 },
  { subject: "Design", A: 85, fullMark: 100 },
  { subject: "Social Media", A: 80, fullMark: 100 },
  { subject: "Analytics", A: 70, fullMark: 100 },
  { subject: "Advertising", A: 88, fullMark: 100 },
];

const SpiderChartSection = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');

        .chart-section {
          background-color: #F2E9DD;
          padding: 80px 0;
          color: #000;
        }

        .chart-heading {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #000;
          text-align: center;
        }

        .chart-subtext {
          color: #555;
          font-size: 1.1rem;
          text-align: center;
        }

        .chart-container {
          background: #fff;
          border-radius: 16px;
          background-color: #F2E9DD;
          padding: 2rem;
        }

        .radar-label {
          font-size: 12px;
          fill: #000;
        }

        @media (max-width: 767.98px) {
          .chart-section {
            display: none !important;
            visibility: hidden;
            height: 0;
            overflow: hidden;
          }
        }

        @media (max-width: 768px) {
          .chart-heading {
            font-size: 2rem;
          }

          .chart-subtext {
            font-size: 1rem;
          }

          .radar-label {
            font-size: 10px;
          }
        }
      `}</style>

      <section className="chart-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="chart-heading">Our Strengths</h2>
              <p className="chart-subtext">
                At The Social Toast, we blend analytics with artistry, strategy
                with sizzle. Our capabilities span design, campaign performance,
                social innovation, and conversion-centered creativity. Here's
                how we stack up across what matters most.
              </p>
            </Col>
            <Col md={6} className="mb-4 mb-md-0">
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={400}>
                  <RadarChart data={data} outerRadius="80%">
                    <PolarGrid stroke="#ddd" />
                    <PolarAngleAxis
                      dataKey="subject"
                      tick={{ fill: "#000", fontWeight: 600, fontSize: 12 }}
                      tickLine={false}
                    />
                    <PolarRadiusAxis tick={{ fill: "#888" }} />
                    <Radar
                      name="The Social Toast"
                      dataKey="A"
                      stroke="#ffcc00"
                      fill="#ffcc00"
                      fillOpacity={0.5}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SpiderChartSection;
