"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Custom animated counter hook
function useCounter(end: number, duration: number = 2) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            let startTime: number | null = null;
            const step = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

                // Easing function (easeOutExpo)
                const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

                setCount(Math.floor(easeOut * end));

                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    setCount(end);
                }
            };
            window.requestAnimationFrame(step);
        }
    }, [isInView, end, duration]);

    return { count, ref };
}

export default function StatsAboutSection() {
    const stats = [
        { label: "MEGA PROJECTS COMPLETED", value: 140, suffix: "+" },
        { label: "YEARS OF EXCELLENCE", value: 35, suffix: "" },
        { label: "BILLION IN CONTRACTS", value: 4, suffix: "B+" },
        { label: "ZERO-INCIDENT SITES", value: 100, suffix: "%" },
    ];

    return (
        <section id="about" className="relative bg-white py-16 border-y border-black/5 overflow-hidden">
            {/* Background Graphic refined for white bg */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <line x1="0" y1="0" x2="100" y2="100" stroke="black" strokeWidth="0.5" />
                    <line x1="100" y1="0" x2="0" y2="100" stroke="black" strokeWidth="0.5" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* About Text */}
                    <div className="flex flex-col gap-6">
                        <h2 className="text-brand font-heading text-lg tracking-widest flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-brand" />
                            THE SYNDICATE
                        </h2>
                        <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl text-black tracking-widest leading-[0.9] font-black uppercase">
                            WE DON'T JUST BUILD.<br />WE ENGINEER REALITY.
                        </h3>
                        <p className="font-sans text-neutral-700 leading-relaxed text-sm text-balance mt-2 font-medium">
                            REFORGE is a master-builder syndicate executing the most complex, high-stakes infrastructure projects on the grid. We bring merciless efficiency, military-grade logistics, and uncompromising safety standards to every site.
                        </p>
                        <button className="mt-6 font-heading tracking-widest text-xs px-6 py-3 bg-black text-white hover:bg-brand transition-colors duration-300 skew-x-[-10deg] w-fit font-bold">
                            <div className="skew-x-[10deg]">READ OUR MANIFESTO</div>
                        </button>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-px bg-black/10 p-px">
                        {stats.map((stat, i) => {
                            const { count, ref } = useCounter(stat.value, 2.5);
                            return (
                                <div key={i} ref={ref} className="bg-neutral-50/50 p-6 sm:p-7 md:p-8 flex flex-col justify-center items-start group hover:bg-neutral-100 transition-colors duration-500 border border-black/[0.03]">
                                    <div className="font-heading text-3xl sm:text-4xl md:text-5xl text-brand transition-colors duration-300 tracking-wider font-black">
                                        {count}{stat.suffix}
                                    </div>
                                    <div className="mt-2 font-sans text-[9px] md:text-[10px] tracking-[0.2em] text-neutral-800 font-bold uppercase transition-colors">
                                        {stat.label}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
