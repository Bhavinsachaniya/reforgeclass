"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
    return (
        <section id="contact" className="bg-white py-20 border-t border-black/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    <div className="flex flex-col justify-center">
                        <h2 className="text-brand font-heading text-lg tracking-widest mb-4 flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-brand" />
                            INITIATE
                        </h2>
                        <h3 className="font-heading text-4xl sm:text-5xl md:text-7xl text-black tracking-widest leading-[0.85] mb-6 font-black uppercase">
                            TRANSMIT<br /> YOUR PLAN.
                        </h3>
                        <p className="text-neutral-600 font-sans text-sm md:text-base max-w-sm leading-relaxed mt-2">
                            Secure a consultation for your next industrial scale project. Our logistics operations team responds within 24 hours.
                        </p>
                    </div>

                    <div className="relative">
                        <form className="relative bg-neutral-100/50 p-6 sm:p-8 md:p-10 border border-black/10 flex flex-col gap-5 shadow-sm" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-1.5 focus-within:text-brand">
                                    <label className="font-heading tracking-[0.2em] text-neutral-500 text-[10px] font-bold uppercase transition-colors">CALLSIGN / NAME</label>
                                    <input
                                        type="text"
                                        className="bg-white border border-black/10 px-4 py-3 text-black placeholder:text-neutral-400 focus:outline-none focus:border-brand transition-all rounded-none font-sans text-sm focus:shadow-[0_0_15px_rgba(255,77,0,0.05)]"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5 focus-within:text-brand">
                                    <label className="font-heading tracking-[0.2em] text-neutral-500 text-[10px] font-bold uppercase transition-colors">TRANSMISSION FREQUENCY</label>
                                    <input
                                        type="email"
                                        className="bg-white border border-black/10 px-4 py-3 text-black placeholder:text-neutral-400 focus:outline-none focus:border-brand transition-all rounded-none font-sans text-sm focus:shadow-[0_0_15px_rgba(255,77,0,0.05)]"
                                        placeholder="john@company.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1.5 mt-2">
                                <label className="font-heading tracking-[0.2em] text-neutral-500 text-[10px] font-bold uppercase transition-colors">PROJECT SECTOR</label>
                                <div className="relative">
                                    <select className="bg-white border border-black/10 px-4 py-3 text-black focus:outline-none focus:border-brand transition-all rounded-none font-sans text-sm w-full cursor-pointer appearance-none">
                                        <option value="commercial">Commercial High-Rise</option>
                                        <option value="industrial">Industrial Manufacturing</option>
                                        <option value="civil">Civil Infrastructure</option>
                                        <option value="other">Other / Classified</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M1 1l4 4 4-4" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-1.5 mt-2">
                                <label className="font-heading tracking-[0.2em] text-neutral-500 text-[10px] font-bold uppercase transition-colors">DIRECTIVES</label>
                                <textarea
                                    rows={3}
                                    className="bg-white border border-black/10 px-4 py-3 text-black placeholder:text-neutral-400 focus:outline-none focus:border-brand transition-all rounded-none font-sans text-sm resize-none focus:shadow-[0_0_15px_rgba(255,77,0,0.05)]"
                                    placeholder="Outline project scope, timeline, and structural requirements..."
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="mt-4 relative group overflow-hidden bg-black text-white font-heading text-lg tracking-widest py-4 skew-x-[-10deg] w-full border-none transition-all active:scale-[0.98]"
                            >
                                {/* Fixed Background Wipe - removed the skew from the div to prevent edge leakage */}
                                <div className="absolute inset-x-0 inset-y-0 w-[150%] h-full bg-brand -translate-x-full group-hover:translate-x-[-25%] transition-transform duration-500 ease-out origin-left"></div>
                                <div className="skew-x-[10deg] relative z-10 flex items-center justify-center gap-3">
                                    TRANSMIT DATA
                                    <ArrowRightIcon className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}

function ArrowRightIcon({ className }: { className?: string }) {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
            <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
    );
}
