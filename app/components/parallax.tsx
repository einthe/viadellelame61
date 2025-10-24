'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxBackground({ children }: { children: React.ReactNode }) {
  const targetRef = useRef(null);
  const { scrollY } = useScroll(/* { target: targetRef } */);
  const y = useTransform(scrollY, [0, 6000], [0, -2000]);

  return (
    <div style={{ position: 'relative' }}>
      <motion.div
        ref={targetRef}
        style={{
          position: 'fixed',
          y,
          backgroundImage: "url('/images/space_blur_curves.jpg')",
          backgroundAttachment: 'scroll',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          // backgroundPositionY: bgY,
          minHeight: '500vh',
          width: '100%',
          zIndex: -1,
          willChange: 'transform',
        }}
      >
        {/* {children} */}
      </motion.div>

      <div style={{ position: 'relative', zIndex: 0 }}>
        {children}
      </div>
    </div>
  );
}