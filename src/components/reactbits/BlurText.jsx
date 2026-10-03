import { useRef, useEffect, useState } from 'react';

// React Bits - BlurText component (adapted to JSX)
// Text that reveals by transitioning from blurred to sharp
const BlurText = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words', // 'words' or 'letters'
  direction = 'top', // 'top' or 'bottom'
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = 'cubic-bezier(.215,.61,.355,1)',
  onAnimationComplete,
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const defaultFrom = animationFrom || {
    filter: 'blur(10px)',
    opacity: 0,
    transform: direction === 'top' ? 'translate3d(0,-30px,0)' : 'translate3d(0,30px,0)',
  };

  const defaultTo = animationTo || {
    filter: 'blur(0px)',
    opacity: 1,
    transform: 'translate3d(0,0,0)',
  };

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

  const elements =
    animateBy === 'words'
      ? text.split(' ').map((w, i) => ({ text: w, key: i }))
      : text.split('').map((c, i) => ({ text: c === ' ' ? '\u00A0' : c, key: i }));

  return (
    <p ref={ref} className={className} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: animateBy === 'words' ? '0.3em' : '0' }}>
      {elements.map((el, i) => (
        <span
          key={el.key}
          style={{
            display: 'inline-block',
            transition: `all 0.5s ${easing} ${i * delay}ms`,
            willChange: 'transform, filter, opacity',
            ...(isVisible ? defaultTo : defaultFrom),
          }}
          onTransitionEnd={() => {
            if (onAnimationComplete && i === elements.length - 1) {
              onAnimationComplete();
            }
          }}
        >
          {el.text}
        </span>
      ))}
    </p>
  );
};

export default BlurText;
