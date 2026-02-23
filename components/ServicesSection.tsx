"use client";

import { motion } from "framer-motion";
import { ArrowRight, Hammer, HardHat, Factory, Layout } from "lucide-react";

export default function ServicesSection() {
    const services = [
        {
            id: "01",
            title: "COMMERCIAL",
            desc: "High-yield commercial development for Fortune 500 headquarters and multi-use retail spaces.",
            imagePath: "bg-surface-light", // Assuming image backgrounds later, using colors for now
            icon: <BuildingIcon />,
        },
        {
            id: "02",
            title: "INDUSTRIAL",
            desc: "Heavy-duty manufacturing facilities designed for optimal logistics and workflow scaling.",
            imagePath: "bg-neutral-900",
            icon: <Factory size={32} strokeWidth={1} />,
        },
        {
            id: "03",
            title: "CIVIL INFRAS",
            desc: "Public sector infrastructure bridging cities, managing water, and enabling mass transit.",
            imagePath: "bg-surface",
            icon: <HardHat size={32} strokeWidth={1} />,
        },
        {
            id: "04",
            title: "URBAN RENEWAL",
            desc: "Transforming obsolete spaces into modern technological hubs with sustainable footprints.",
            imagePath: "bg-neutral-800",
            icon: <Layout size={32} strokeWidth={1} />,
        }
    ];

    return (
        <section id="services" className="relative bg-white py-16 overflow-hidden border-t border-black/5">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <div>
                        <h2 className="text-brand font-heading text-xl tracking-[0.3em] mb-4 flex items-center gap-3">
                            <span className="w-12 h-[1px] bg-brand" />
                            CAPABILITIES
                        </h2>
                        <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl text-black tracking-widest max-w-xl leading-[0.9]">
                            WE FORGE<br /> THE FUTURE.
                        </h3>
                    </div>
                    <p className="text-neutral-600 font-sans max-w-xs text-balance leading-relaxed text-xs">
                        Our multi-disciplinary teams execute complex structural mandates under intense timelines with absolute precision.
                    </p>
                </div>

                {/* Sharp Asymmetrical Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/10 p-[1px]">
                    {services.map((svc, i) => (
                        <motion.div
                            key={svc.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-10%" }}
                            variants={{
                                hidden: { opacity: 0, scale: 0.95 },
                                visible: {
                                    opacity: 1,
                                    scale: 1,
                                    transition: {
                                        delay: i * 0.1,
                                        duration: 0.6,
                                        ease: "easeOut"
                                    }
                                }
                            }}
                            className={`group relative overflow-hidden min-h-[240px] md:h-[280px] lg:h-[320px] flex flex-col justify-between p-5 md:p-6 bg-neutral-50 hover:bg-black group transition-all duration-500 shadow-sm`}
                        >
                            {/* Background Reveal on Hover */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none ${svc.imagePath} mix-blend-multiply`} />

                            <div className="relative z-10 flex justify-between items-start text-black group-hover:text-white">
                                <span className="font-heading text-2xl text-neutral-300 group-hover:text-white/20 transition-colors duration-500">
                                    {svc.id}
                                </span>
                                <div className="p-2 border border-black/5 rotate-[-10deg] text-neutral-400 group-hover:border-white/10 group-hover:text-white transition-colors">
                                    {svc.icon}
                                </div>
                            </div>

                            <div className="relative z-10 flex flex-col gap-2 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                <h4 className="font-heading text-xl sm:text-2xl tracking-wider text-black group-hover:text-white">
                                    {svc.title}
                                </h4>
                                <p className="text-neutral-600 font-sans text-[10px] max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 group-hover:text-white/80">
                                    {svc.desc}
                                </p>
                                <div className="mt-2 flex items-center gap-2 text-brand font-heading tracking-widest text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 cursor-pointer w-fit group-hover:text-brand">
                                    EXPLORE <ArrowRight size={12} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Custom simple building icon
function BuildingIcon() {
    return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square">
            <path d="M4 22V2h8v20" />
            <path d="M12 22V8h8v14" />
            <path d="M2 22h20" />
            <rect x="6" y="6" width="4" height="4" />
            <rect x="6" y="14" width="4" height="4" />
            <rect x="14" y="12" width="4" height="4" />
        </svg>
    );
}
