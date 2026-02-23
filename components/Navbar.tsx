"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;

        if (latest > 50) setScrolled(true);
        else setScrolled(false);

        // Don't hide navbar if mobile menu is open
        if (mobileMenuOpen) {
            setHidden(false);
            return;
        }

        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    // Block body scroll when menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
            document.body.style.overflow = "hidden";
        } else {
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = "unset";
            if (scrollY) {
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
            }
        }
    }, [mobileMenuOpen]);

    const navLinks = [
        { label: "SERVICES", href: "#services" },
        { label: "PROJECTS", href: "#projects" },
        { label: "ABOUT", href: "#about" },
    ];

    return (
        <motion.header
            variants={{
                visible: { y: 20, opacity: 1 },
                hidden: { y: -100, opacity: 0 },
            }}
            initial="visible"
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed inset-x-0 z-50 flex justify-center ${mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
            style={{ transform: "translateZ(0)" }} // GPU acceleration for smoother mobile rendering
        >
            <div
                className={`pointer-events-auto flex items-center justify-between px-6 py-2 rounded-full border border-black/10 bg-white/80 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500 ${scrolled ? "w-[95%] md:w-[700px]" : "w-[95%] md:w-[850px]"
                    }`}
            >
                {/* LOGO */}
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="font-heading text-2xl tracking-tighter text-black font-black">REFORGE</span>
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="font-sans text-[10px] tracking-[0.2em] font-bold text-neutral-400 hover:text-black transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}

                    <Link
                        href="#contact"
                        className="font-heading tracking-[0.1em] text-sm px-7 py-2.5 bg-brand text-white hover:bg-black transition-all rounded-full shadow-lg shadow-brand/20"
                    >
                        ESTIMATE
                    </Link>
                </nav>
                {/* MOBILE TOGGLE */}
                <button
                    className="md:hidden text-black p-4 -mr-2 relative z-[110] flex items-center justify-center cursor-pointer active:scale-90 transition-transform"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* MOBILE NAV OVERLAY */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 z-[100] bg-black h-[100dvh] w-screen flex flex-col p-8 md:hidden pointer-events-auto touch-none"
                    >
                        {/* High-End Background Branding */}
                        <div className="absolute bottom-10 left-8 text-[12vw] font-heading text-white/[0.03] select-none pointer-events-none font-black uppercase leading-none">
                            REFORGE<br />SYSTEMS
                        </div>

                        <div className="flex justify-between items-center mb-16">
                            <span className="font-heading text-xl tracking-tighter text-white font-black">REFORGE</span>
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-white p-4 -mr-4 hover:bg-white/10 transition-colors cursor-pointer rounded-full"
                                aria-label="Close Menu"
                            >
                                <X size={32} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-6">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.label}
                                    initial={{ opacity: 0, x: -25 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="font-heading text-5xl tracking-[0.1em] text-neutral-400 hover:text-white transition-all uppercase font-black flex items-center gap-5 group py-2"
                                    >
                                        <span className="text-brand text-[10px] font-sans tracking-widest font-bold">0{i + 1}</span>
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-auto mb-10">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Link
                                    href="#contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block w-full text-center py-6 bg-brand text-white font-heading text-2xl tracking-[0.2em] font-black group relative overflow-hidden"
                                >
                                    <div className="relative z-10">INITIATE BUILD</div>
                                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
