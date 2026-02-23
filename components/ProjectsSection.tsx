"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const projects = [
        {
            title: "TITAN HEADQUARTERS",
            category: "COMMERCIAL STRUCTURE",
            year: "2025",
            // We map the image offset parallax
            parallaxFactor: 150
        },
        {
            title: "AERIS LOGISTICS HUB",
            category: "INDUSTRIAL COMPLEX",
            year: "2024",
            parallaxFactor: -100
        },
        {
            title: "HELIOS DATACENTER",
            category: "INFRASTRUCTURE",
            year: "2026",
            parallaxFactor: 200
        }
    ];

    return (
        <section id="projects" ref={containerRef} className="relative bg-white py-24 border-t border-black/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div>
                        <h2 className="text-brand font-heading text-xl tracking-widest mb-4 flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-brand" />
                            PORTFOLIO
                        </h2>
                        <h3 className="font-heading text-2xl sm:text-3xl md:text-5xl text-black tracking-widest max-lg leading-[0.9]">
                            MONUMENTAL SCALE.
                        </h3>
                    </div>
                    <button className="text-black hover:text-white font-heading tracking-widest text-sm px-5 py-2 border border-black/20 hover:bg-black transition-colors skew-x-[-10deg]">
                        <div className="skew-x-[10deg]">VIEW ALL LOGS</div>
                    </button>
                </div>

                <div className="flex flex-col gap-12 lg:gap-32">
                    {projects.map((proj, i) => {
                        // Parallax effect on the images relative to scroll
                        const y = useTransform(scrollYProgress, [0, 1], [-proj.parallaxFactor, proj.parallaxFactor]);

                        return (
                            <div key={proj.title} className="group flex flex-col gap-6 cursor-pointer">
                                {/* Large Project Image Container */}
                                <div className="relative w-full h-[32vh] md:h-[44vh] overflow-hidden bg-white border border-black/5 rounded-lg shadow-sm">
                                    <motion.div
                                        style={{ y }}
                                        className="absolute inset-0 -top-1/4 -bottom-1/4"
                                    >
                                        {/* Real generated images for all projects */}
                                        <img
                                            src={`/images/projects/project${i + 1}.png`}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 block"
                                            alt={proj.title}
                                        />
                                    </motion.div>

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />

                                    {/* Hover explore prompt */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="bg-black text-white rounded-full p-4 transform scale-50 group-hover:scale-100 transition-transform duration-500 ease-out shadow-2xl">
                                            <ArrowUpRight size={32} />
                                        </div>
                                    </div>
                                </div>

                                {/* Project Metadata */}
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full border-b border-black/10 pb-6 group-hover:border-black/40 transition-colors duration-500">
                                    <div className="flex flex-col gap-2">
                                        <span className="text-neutral-500 font-heading tracking-widest text-[10px] uppercase font-bold">
                                            {proj.category}
                                        </span>
                                        <h4 className="font-heading text-xl sm:text-2xl md:text-3xl text-black transition-colors duration-300">
                                            {proj.title}
                                        </h4>
                                    </div>
                                    <span className="font-heading text-xl sm:text-2xl text-neutral-300 mt-4 md:mt-0 transition-colors duration-300 group-hover:text-black">
                                        {proj.year}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
