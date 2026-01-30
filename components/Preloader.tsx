'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [isOffline, setIsOffline] = useState(false);
    const [text, setText] = useState("SYSTEM LOADING");

    useEffect(() => {
        // Handle Offline Status
        const handleOnline = () => {
            setIsOffline(false);
            setText("SYSTEM LOADING");
        };
        const handleOffline = () => {
            setIsOffline(true);
            setText("CONNECTION LOST // OFFLINE");
        };

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        // Check initial state
        if (typeof navigator !== 'undefined' && !navigator.onLine) {
            handleOffline();
        }

        // Handle Loading Logic
        const minTime = 2500; // Minimum branding time
        const startTime = Date.now();

        const handleLoad = () => {
            const elapsed = Date.now() - startTime;
            const remaining = Math.max(0, minTime - elapsed);

            setTimeout(() => {
                if (!isOffline) {
                    setIsLoading(false);
                }
            }, remaining);
        };

        // If page is already loaded
        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
            window.removeEventListener('load', handleLoad);
        };
    }, [isOffline]);

    return (
        <AnimatePresence mode="wait">
            {(isLoading || isOffline) && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-zinc-950"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                >
                    <div className="relative flex flex-col items-center gap-8">
                        {/* Logo Animation Container */}
                        <div className="relative w-32 h-32 md:w-40 md:h-40">
                            <svg
                                viewBox="0 0 100 100"
                                className={isOffline ? "text-red-500" : "text-white"}
                                fill="currentColor"
                            >
                                {/* Left Leg - With Sharp Cut */}
                                <motion.path
                                    d="M20,10 L45,90 L32,90 L7,10 Z"
                                    fill="currentColor"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{
                                        pathLength: 1,
                                        opacity: 1,
                                        transition: { duration: 1, ease: "easeInOut" }
                                    }}
                                />

                                {/* Right Leg - With Sharp Cut (Symmetrical Gap) */}
                                <motion.path
                                    d="M80,10 L55,90 L68,90 L93,10 Z"
                                    fill="currentColor"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{
                                        pathLength: 1,
                                        opacity: 1,
                                        transition: { duration: 1, ease: "easeInOut", delay: 0.2 }
                                    }}
                                />

                                {/* The "Cut" Element - A diagonal slice or detail through the V if wanted, 
                                    but sticking to specific separated geometric legs creates the 'cut' effect naturally at the bottom vertex.
                                    Let's add a subtle center float piece for 'high tech' feel if simpler isn't enough,
                                    but usually the 'cut' refers to the vertex not merging.
                                */}
                            </svg>
                        </div>

                        {/* Text Reveal */}
                        <motion.div
                            className="overflow-hidden flex flex-col items-center gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 1, duration: 0.5 } }}
                        >
                            <span className={`text-[10px] font-mono tracking-[0.4em] uppercase ${isOffline ? "text-red-500 animate-pulse" : "text-zinc-500"}`}>
                                {text}
                            </span>

                            {/* Loading Bar for Slow Connections */}
                            {!isOffline && (
                                <motion.div
                                    className="h-[1px] bg-emerald-500 mt-2"
                                    initial={{ width: 0 }}
                                    animate={{ width: 100 }}
                                    transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
                                />
                            )}
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
