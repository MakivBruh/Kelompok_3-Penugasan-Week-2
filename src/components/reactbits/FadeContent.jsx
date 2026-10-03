import { useRef, useEffect, useState } from 'react';

// React Bits - FadeContent component (adapted to JSX)
// Content that fades in when scrolled into view
const FadeContent = ({
  children,
  blur = false,
  duration = 1000,
  easing = 'ease-out',
  threshold = 0.1,
  initialOpacity = 0,
  direction = 'up', // 'up', 'down', 'left', 'right'
  distance = 50,
  className = '',
  style = {},
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
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  const getTransform = (visible) => {
    if (visible) return 'translate3d(0,0,0)';
    switch (direction) {
      case 'up': return `translate3d(0,${distance}px,0)`;
      case 'down': return `translate3d(0,-${distance}px,0)`;
      case 'left': return `translate3d(${distance}px,0,0)`;
      case 'right': return `translate3d(-${distance}px,0,0)`;
      default: return `translate3d(0,${distance}px,0)`;
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: isVisible ? 1 : initialOpacity,
        transform: getTransform(isVisible),
        filter: blur ? (isVisible ? 'blur(0px)' : 'blur(10px)') : 'none',
        transition: `opacity ${duration}ms ${easing}, transform ${duration}ms ${easing}, filter ${duration}ms ${easing}`,
        willChange: 'opacity, transform, filter',
      }}
    >
      {children}
    </div>
  );
};

export default FadeContent;
