'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time or wait for resources
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2200); // 2.2 seconds total animation

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                >
                    <div className="relative flex flex-col items-center">
                        {/* Logo Animation Container */}
                        <div className="relative w-24 h-24 md:w-32 md:h-32">
                            <svg
                                viewBox="0 0 100 100"
                                className="w-full h-full text-white"
                                fill="currentColor"
                            >
                                {/* Abstract V Logo Construction */}
                                <motion.path
                                    d="M20,20 L50,90 L80,20"
                                    fill="transparent"
                                    stroke="currentColor"
                                    strokeWidth="12"
                                    strokeLinecap="butt"
                                    strokeLinejoin="miter"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{
                                        pathLength: 1,
                                        opacity: 1,
                                        transition: {
                                            duration: 1.5,
                                            ease: "easeInOut",
                                            delay: 0.2
                                        }
                                    }}
                                />
                                {/* Optional: Solid Fill Animation if desired, but stroke looks technical/architectural */}
                            </svg>
                        </div>

                        {/* Text Reveal */}
                        <motion.div
                            className="absolute -bottom-12 overflow-hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 1.2, duration: 0.5 } }}
                        >
                            <span className="text-xs font-mono tracking-[0.5em] text-zinc-500 uppercase">
                                System Loading
                            </span>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
