import React, { useEffect, useState } from 'react';
import 'animate.css';

function PageTransition({ children }) {
  const [animation, setAnimation] = useState('animate__fadeIn');

  useEffect(() => {
    setAnimation('animate__fadeIn');
    return () => setAnimation('animate__fadeOut');
  }, []);

  return (
    <div className={`animate__animated ${animation}`}>
      {children}
    </div>
  );
}

export default PageTransition;
