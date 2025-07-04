import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');

        .footer {
          background-color: #000;
          color: #fff;
          padding: 60px 0 40px 0;
          text-align: center;
        }

        .footer-heading {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: #fff;
        }

        .footer-icons {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 20px;
        }

        .footer-icon {
          color: #fff;
          font-size: 1.8rem;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .footer-icon:hover {
          color: #ffd700;
          transform: scale(1.15);
        }

        .footer-text {
          font-size: 0.9rem;
          color: #ccc;
        }
      `}</style>

      <footer className="footer">
        <h3 className="footer-heading">Follow Us</h3>
        <div className="footer-icons">
          <a
            href="https://www.linkedin.com/company/the-social-toast/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/the.social.toast"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
        <p className="footer-text">© {new Date().getFullYear()} The Social Toast. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
