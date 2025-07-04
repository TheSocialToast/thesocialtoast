import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const accordionItems = [
  {
    title: "Fresh Ideas",
    color: "#ffe14c",
    content:
      "We serve bold, scroll-stopping ideas straight out of the creative oven. Each one’s designed to grab attention and leave a lasting impression.",
  },
  {
    title: "Sizzling Strategy",
    color: "#ffe566",
    content:
      "Our secret recipe blends marketing insight with strategic crunch — turning bland brands into irresistible bites of brilliance.",
  },
  {
    title: "Crisp Visuals",
    color: "#ffe97f",
    content:
      "From logo to launch, we cook up visuals that pop. Expect tasty design systems and buttery-smooth aesthetics across platforms.",
  },
  {
    title: "Toasty Content",
    color: "#ffee99",
    content:
      "Our content doesn’t just sit there — it toasts engagement, spreads fast, and brings real ROI. Every word is served hot.",
  },
  {
    title: "Hot Results",
    color: "#fff2b2",
    content:
      "From startups to scale-ups, our campaigns rise fast and deliver crunch. Because we don’t just toast ideas — we make them stick.",
  },
];

const AccordionSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleIndex = (index: number) => {
    if (isMobile) {
      setActiveIndex(activeIndex === index ? null : index);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
      {/* Playfair Display Font */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap');`}
      </style>

      <section
        style={{
          background: "#ffffff",
          padding: "60px 0",
          textAlign: "center",
        }}
      >
        <Container>
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              width: "100%",
              height: isMobile ? "auto" : "250px",
              cursor: "pointer",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              transition: "all 0.3s ease-in-out",
            }}
          >
            {accordionItems.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  onClick={() => toggleIndex(index)}
                  onMouseEnter={() => !isMobile && setActiveIndex(index)}
                  onMouseLeave={() => !isMobile && setActiveIndex(null)}
                  style={{
                    flex: isActive ? 4 : 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: item.color,
                    color: "#1e1e1e",
                    fontWeight: 300,
                    fontSize: "1.5rem",
                    padding: isActive ? "20px" : "0",
                    writingMode:
                      isMobile || isActive ? "initial" : "vertical-rl",
                    textOrientation: "mixed",
                    textAlign: isActive ? "left" : "center",
                    minWidth: "50px",
                    minHeight: isMobile ? "80px" : "auto",
                    transition: "all 0.3s ease",
                    fontFamily:
                      isActive || isMobile
                        ? "'Playfair Display', serif"
                        : "'Playfair Display', serif",
                  }}
                >
                  {isActive ? (
                    <div>
                      <h2
                        style={{
                          margin: "0",
                          fontSize: isMobile ? "1.5rem" : "2rem",
                          fontWeight: 600,
                          fontFamily: "'Playfair Display', serif",
                        }}
                      >
                        {item.title}
                      </h2>
                      <p
                        style={{
                          fontSize: "1rem",
                          marginTop: "10px",
                          transition: "opacity 0.2s linear",
                        }}
                      >
                        {item.content}
                      </p>
                    </div>
                  ) : (
                    <div
                      style={{
                        transform: isMobile ? "none" : "rotate(180deg)",
                        fontWeight: 600,
                        fontFamily: "'Playfair Display', serif",
                      }}
                    >
                      {item.title}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
};

export default AccordionSection;
