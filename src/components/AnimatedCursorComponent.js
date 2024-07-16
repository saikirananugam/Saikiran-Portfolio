import React, { useEffect, useState } from 'react';
import AnimatedCursor from 'react-animated-cursor';

const AnimatedCursorComponent = ({ children }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isDesktop && (
        <AnimatedCursor
          innerSize={10}
          outerSize={42}
          color='168, 85, 247'
          outerAlpha={0.2}
          innerScale={1.2}
          outerScale={1.5}
          outerStyle={{
            border: '2px solid gray',
            backgroundColor: 'transparent'
          }}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
        />
      )}
      {children}
    </>
  );
};

export default AnimatedCursorComponent;
