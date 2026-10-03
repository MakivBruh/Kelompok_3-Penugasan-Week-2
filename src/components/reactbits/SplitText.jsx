import { useRef, useEffect, useState } from 'react';

// React Bits - SplitText component (adapted to JSX)
// Splits text into words/characters for staggered entrance animations
const SplitText = ({
  text = '',
  className = '',
  delay = 100,
  animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
  animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
  easing = 'cubic-bezier(.215,.61,.355,1)',
  threshold = 0.1,
  rootMargin = '-50px',
  textAlign = 'center',
  onLetterAnimationComplete,
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const words = text.split(' ');
  let letterIndex = 0;

  return (
    <span
      ref={ref}
      className={className}
      style={{ display: 'inline-block', textAlign, overflow: 'hidden' }}
    >
      {words.map((word, wIdx) => (
        <span key={wIdx} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {word.split('').map((char) => {
            const idx = letterIndex++;
            return (
              <span
                key={idx}
                style={{
                  display: 'inline-block',
                  transition: `all 0.6s ${easing} ${idx * delay}ms`,
                  ...(isVisible ? animationTo : animationFrom),
                }}
                onTransitionEnd={() => {
                  if (onLetterAnimationComplete && idx === text.replace(/ /g, '').length - 1) {
                    onLetterAnimationComplete();
                  }
                }}
              >
                {char}
              </span>
            );
          })}
          {wIdx < words.length - 1 && <span style={{ display: 'inline-block' }}>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
};

export default SplitText;
