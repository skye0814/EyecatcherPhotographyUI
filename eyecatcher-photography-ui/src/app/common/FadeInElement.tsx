import React, { useEffect, useRef, useState } from 'react';
import '../styles/fadeinelement.css';

function FadeInElement({children} : any) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const elementPosition = elementRef.current.getBoundingClientRect();
        if (elementPosition.top < window.innerHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fade-in-element ${isVisible ? 'visible' : ''}`}
      ref={elementRef}
    >
        {children}
    </div>
  );
}

export default FadeInElement;