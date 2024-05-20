'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AnimatedComponent = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    gsap.to(elementRef.current, { rotation: 360, duration: 2 });
  }, []);

  return <div ref={elementRef}>Hello GSAP!</div>;
};

export default AnimatedComponent;
