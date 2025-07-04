import React from 'react';

const StripSection: React.FC = () => {
  return (
    <>
      <style>{`
        .strip-wrapper {
          overflow: hidden;
          background: linear-gradient(90deg, #ffe14c, #ffe566, #ffe97f, #ffee99, #fff2b2);
          padding: 1rem 0;
          white-space: nowrap;
        }

        .strip-track {
          display: inline-flex;
          animation: scroll-loop 25s linear infinite;
        }

        .strip-text {
          display: inline-block;
          margin-right: 3rem;
          font-weight: 600;
          font-size: 1.1rem;
          letter-spacing: 0.05em;
          color: #000;
        }

        @keyframes scroll-loop {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .strip-text {
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="strip-wrapper">
        <div className="strip-track">
          {/* Duplicated at least 3x for seamless flow */}
          {Array.from({ length: 3 }).map((_, i) => (
            <React.Fragment key={i}>
              <span className="strip-text">Branding that pops</span>
              <span className="strip-text">Social strategy that performs</span>
              <span className="strip-text">Ads that convert</span>
              <span className="strip-text">Marketing with flavor</span>
              <span className="strip-text">Smart + Creative</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default StripSection;
