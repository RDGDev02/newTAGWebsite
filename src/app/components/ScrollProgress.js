// components/ScrollProgress.js
"use client"
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const calculateScrollProgress = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;

      const progress = (scrollY / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);
    };

    const handleScroll = () => {
      calculateScrollProgress();
    };

    controls.start({ width: `${scrollProgress}%` });

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollProgress, controls]);

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 z-40"
      style={{
        background: 'linear-gradient(90deg, #e54646 0%, #f09502 100%)', // Adjust gradient colors
        width: 0,
      }}
      animate={controls}
    />
  );
};

export default ScrollProgress;
