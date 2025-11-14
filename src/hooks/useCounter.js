import { useState, useEffect, useRef } from 'react';

export function useCounter(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && count === 0) {
          let startTime = Date.now();
          
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Extract numeric value if it's a string like "1.3K"
            let numTarget = typeof target === 'string' 
              ? parseFloat(target.replace(/[K+]/g, '')) * (target.includes('K') ? 1000 : 1)
              : target;
            
            const current = Math.floor(progress * numTarget);
            setCount(current);
            
            if (progress < 1) {
              animationFrameRef.current = requestAnimationFrame(animate);
            }
          };
          
          animationFrameRef.current = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [target, duration]);

  return { count, counterRef };
}
