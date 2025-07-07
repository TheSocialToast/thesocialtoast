// src/components/PuzzleAnimation.tsx
import React, { useMemo } from 'react';

const PuzzleAnimation: React.FC = () => {
  // Generate puzzle pieces with random properties
  const puzzlePieces = useMemo(() => {
    const colors = ['#f57c00', '#00bcd4', '#ec407a', '#ffeb3b', '#8e24aa'];
    const shapes = [
      "polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)",
      "polygon(0% 20%, 20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%)",
      "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
      "polygon(0% 0%, 100% 0%, 100% 100%, 80% 80%, 60% 100%, 40% 80%, 20% 100%, 0% 100%)",
      "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
    ];
    
    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      left: `${Math.random() * 90}%`,
      delay: Math.random() * 6,
      duration: 4 + Math.random() * 4,
      size: 40 + Math.random() * 40,
      rotation: Math.random() * 360
    }));
  }, []);

  return (
    <div style={styles.wrapper}>
      <style>
        {`
          @keyframes fall {
            0% {
              transform: translateY(-100px) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            70% {
              transform: translateY(80vh) rotate(180deg);
            }
            100% {
              opacity: 0;
              transform: translateY(100vh) rotate(360deg);
            }
          }

          .puzzle-piece {
            position: absolute;
            opacity: 0;
            animation: fall linear infinite;
            box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
            filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.7));
            transition: transform 0.2s;
          }

          .puzzle-piece:hover {
            transform: scale(1.1) !important;
            z-index: 10;
            animation-play-state: paused;
          }

          @media (max-width: 768px) {
            .puzzle-piece {
              animation-duration: 6s !important;
            }
          }
        `}
      </style>

      {puzzlePieces.map((piece) => (
        <div 
          key={piece.id}
          className="puzzle-piece"
          style={{
            clipPath: piece.shape,
            backgroundColor: piece.color,
            left: piece.left,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            transform: `rotate(${piece.rotation}deg)`
          }}
        />
      ))}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    position: 'relative',
    width: '100%',
    height: '80vh',
    maxHeight: '600px',
    minHeight: '300px',
    backgroundColor: '#2c1a4a',
    background: 'linear-gradient(135deg, #1a0b2e, #3d2678)',
    overflow: 'hidden',
    margin: 'auto',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
  },
};

export default PuzzleAnimation;