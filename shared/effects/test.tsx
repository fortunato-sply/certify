"use client";

import { useTransform, motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Image } from '@nextui-org/react';
import { useEffect, useRef, useState } from 'react';

interface Image3DProps {
    src: string;
}

export const Test = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end start"] });

    const rotate = useTransform(scrollYProgress, [0, 1], ["90deg", "180deg"])
    const transformPerspective = useTransform(scrollYProgress, [0, 1], ["200px", "0px"])

    useMotionValueEvent(scrollYProgress, "change", (latest) => { console.log(latest) })

    return (
        <motion.div
            ref={targetRef}
            style={{ transformPerspective }}
            className="mx-auto size-48 bg-indigo-500 testee"
        />
    );
};