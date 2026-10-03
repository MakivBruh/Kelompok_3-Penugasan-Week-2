import { cloneElement, isValidElement } from 'react';

// React Bits - GradientText component (adapted to JSX)
// Text with an animated gradient effect
const GradientText = ({
  children,
  className = '',
  colors = ['#006194', '#007bb9', '#00685f', '#89f5e7', '#006194'],
  animationSpeed = 8,
}) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    backgroundSize: '300% 100%',
    animation: `gradient-shift ${animationSpeed}s ease infinite`,
  };
  const textStyle = {
    ...gradientStyle,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };
  const content = isValidElement(children)
    ? cloneElement(children, { textStyle: { ...textStyle, ...children.props.textStyle } })
    : children;

  return (
    <>
      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
      <span
        className={`inline-block ${className}`}
        style={{
          ...gradientStyle,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {content}
      </span>
    </>
  );
};

export default GradientText;
