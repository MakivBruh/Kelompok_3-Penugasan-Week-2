import { useState, useEffect } from 'react';

// React Bits - RotatingText component (adapted to JSX)
// Text that rotates through a list of words with animation
const RotatingText = ({
  texts = [],
  interval = 3000,
  className = '',
  transitionDuration = 500,
  textStyle = {},
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsExiting(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsExiting(false);
      }, transitionDuration);
    }, interval);
    return () => clearInterval(timer);
  }, [texts.length, interval, transitionDuration]);

  return (
    <span
      className={`inline-block overflow-hidden ${className}`}
      style={{ position: 'relative' }}
    >
      <span
        style={{
          ...textStyle,
          display: 'inline-block',
          transition: `all ${transitionDuration}ms cubic-bezier(.215,.61,.355,1)`,
          transform: isExiting ? 'translateY(-100%)' : 'translateY(0)',
          opacity: isExiting ? 0 : 1,
          filter: isExiting ? 'blur(4px)' : 'blur(0px)',
        }}
      >
        {texts[currentIndex]}
      </span>
    </span>
  );
};

export default RotatingText;
