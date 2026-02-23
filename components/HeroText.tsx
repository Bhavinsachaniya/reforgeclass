"use client";

import { motion, Variants, useScroll, useTransform } from "framer-motion";

export default function HeroText() {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.5 },
        },
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 50, damping: 10 }
        },
    };

    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const yTransform = useTransform(scrollY, [0, 500], [0, -100]);

    return (
        <div className="absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center z-30 pointer-events-none">
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                style={{ opacity, y: yTransform }}
                className="max-w-4xl px-6 flex flex-col items-center text-center"
            >
                <motion.div
                    variants={item}
                    className="mb-6 px-3 py-1 border border-black/5 bg-neutral-50/50 backdrop-blur-sm text-neutral-400 font-sans text-[9px] tracking-[0.2em] uppercase inline-block font-bold"
                >
                    INTRODUCING
                </motion.div>

                <motion.h1
                    variants={item}
                    className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none tracking-tight uppercase text-black font-black mb-4"
                >
                    PLATINUM <br className="md:hidden" /> CONSTRUCT
                </motion.h1>

                <motion.p
                    variants={item}
                    className="max-w-md text-neutral-600 font-sans text-xs sm:text-sm md:text-base leading-relaxed text-balance"
                >
                    The next generation of cinematic web experiences. Immersive, <br className="hidden md:block" />
                    responsive, and breathtakingly smooth.
                </motion.p>

                <motion.div
                    variants={item}
                    className="mt-8 pointer-events-auto"
                >
                    <motion.button
                        whileHover={{ scale: 1.02, backgroundColor: "#111111" }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative bg-black text-white px-8 py-3.5 font-heading text-lg tracking-widest flex items-center gap-2.5 transition-colors duration-300 cursor-pointer select-none touch-manipulation"
                    >
                        DISCOVER NOW
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" className="group-hover:translate-x-1 transition-transform">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </motion.button>
                </motion.div>

                {/* Floating scroll indicator refined */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    style={{ opacity }}
                    className="fixed bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-black/20 font-heading tracking-[0.3em] text-[10px]"
                >
                    <span>SCROLL TO BUILD</span>
                    <motion.div
                        animate={{ height: [20, 60, 20] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-[1px] bg-brand"
                    />
                </motion.div>
            </motion.div>

            <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
        </div>
    );
}
