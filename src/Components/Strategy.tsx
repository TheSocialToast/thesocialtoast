// src/components/StrategySection.tsx
import React, { useEffect, useRef } from "react";
import marketingAnimation from "../assets/ani.webm"; // << your local image

const StrategySection: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  // Scroll animation handler
  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current) return;

      const element = textRef.current;
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Trigger animation when element enters viewport
      if (elementTop < windowHeight * 0.85) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section style={styles.container}>
      <div style={styles.content}>
        {/* Text Column */}
        <div ref={textRef} style={styles.textColumn} className="text-content">
          <h2 style={styles.heading}>Our Marketing Strategy </h2>
          <p style={styles.paragraph}>
            We blend timeless storytelling with modern trends, crafting
            campaigns that honor brand identity while embracing fresh,
            scroll-stopping ideas. Our team dives deep into cultural insights
            and platform behavior to create content that resonates — not just
            reaches.
          </p>
          <p style={styles.paragraph}>
            Every post, caption, and concept goes through rigorous testing,
            feedback, and fine-tuning — ensuring every message lands with
            clarity and impact. We believe marketing should spark emotion, start
            conversations, and leave a lasting impression long after the scroll.
          </p>
          <div style={styles.divider} />
        </div>

        {/* Animation Column */}
        <div style={styles.animationColumn}>
          <div style={styles.animationContainer}>
            {/* Replace with your WebP animation */}
            <video
              src={marketingAnimation}
              autoPlay
              muted
              playsInline
              style={styles.animationImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Glassmorphism base styles
const glassBase: React.CSSProperties = {
  background: "rgba(255, 240, 200, 0.35)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  boxShadow: "0 8px 32px rgba(186, 135, 15, 0.25)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
};

// Component styles
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    ...glassBase,
    width: "100%",
    margin: "5vw 0",
    padding: "4vw 0",
    overflow: "hidden",
    position: "relative",
    borderRadius: "0",
  },

  content: {
    display: "flex",
    flexDirection: "row",
    gap: "4vw",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1400px",
    width: "90%",
    margin: "0 auto",
    padding: "0 4vw",
  },

  textColumn: {
    flex: 1,
    minWidth: "300px",
    opacity: "0",
    transform: "translateY(30px)",
    transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
    padding: "2vw",
  },

  animationColumn: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "40vw",
    maxHeight: "500px",
  },

  animationContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  animationImage: {
    width: "100%",
    height: "auto",
    maxWidth: "600px",
    maxHeight: "400px",
    objectFit: "contain",
  },

  heading: {
    fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
    fontWeight: 700,
    color: "#5a3e0b",
    marginBottom: "2.5vh",
    fontFamily: '"Playfair Display", serif',
    letterSpacing: "0.5px",
  },

  paragraph: {
    fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
    lineHeight: "1.85",
    color: "#4a4a4a",
    marginBottom: "2.2vh",
    fontFamily: '"Lato", sans-serif',
  },

  divider: {
    height: "5px",
    width: "100px",
    background: "linear-gradient(90deg, #f9a825, transparent)",
    margin: "3.5vh 0 2.5vh",
  },
};

// Responsive styles
const responsiveStyles = `
  @media (max-width: 1200px) {
    .content {
      padding: 0 20px !important;
      max-width: 100% !important;
    }
  }

  @media (max-width: 992px) {
    .content {
      flex-direction: column;
      gap: 40px;
    }
    
    .text-content {
      width: 100% !important;
      max-width: 700px !important;
      margin: 0 auto;
    }
    
    .animation-column {
      min-height: 350px !important;
      width: 100% !important;
    }
  }

  @media (max-width: 768px) {
    .text-content {
      padding: 15px !important;
    }
    
    .heading {
      font-size: 2rem !important;
    }
  }
  
  @media (max-width: 480px) {
    .container {
      padding: 20px 0 !important;
      margin: 40px 0 !important;
    }
    
    .heading {
      font-size: 1.8rem !important;
    }
    
    .paragraph {
      font-size: 1rem !important;
    }
    
    .content {
      padding: 0 15px !important;
      gap: 30px;
    }
    
    .animation-column {
      min-height: 250px !important;
    }
  }
`;

// Add responsive styles to the document
const styleSheet = document.createElement("style");
styleSheet.innerText = responsiveStyles;
document.head.appendChild(styleSheet);

export default StrategySection;
