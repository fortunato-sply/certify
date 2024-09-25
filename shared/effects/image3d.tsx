"use client";

import { useTransform, motion, useScroll } from 'framer-motion';
import { Image } from '@nextui-org/react';
import { useEffect, useRef, useState } from 'react';

interface Image3DProps {
    src: string;
}

export const Image3D = ({ src }: Image3DProps) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end start"] });

  const perspective = useTransform(scrollYProgress, [0, 1], [200, 1000])
  const transformPerspective = useTransform(scrollYProgress, [0, 1], [200, 0])

  return (
    <motion.div
      ref={targetRef}
      className="mt-24 w-full">
        <Image 
          className="w-full"
          src={src}
        />
    </motion.div>
  );
};