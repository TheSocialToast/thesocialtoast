import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import logo from '../assets/Logo.png'; // Replace with your logo path

const Navigation: React.FC = () => {
  return (
    <>
      {/* Inline CSS */}
      <style>{`
        .custom-navbar {
          background-color: #ffffff;
          padding: 1rem 0;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .navbar-brand img {
          height: 120px;
          object-fit: contain;
        }
      `}</style>

      <Navbar className="custom-navbar" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
