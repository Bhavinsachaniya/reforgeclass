import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-black/5 pt-20 pb-10 text-neutral-500">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                {/* BRAND COLUMN */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-2 group cursor-pointer w-fit">
                        <span className="font-heading text-3xl tracking-widest text-black uppercase">REFORGE</span>
                    </div>
                    <p className="text-sm leading-relaxed max-w-xs text-balance">
                        Building the future of industrial and commercial infrastructure with uncompromising precision and scale.
                    </p>
                </div>

                {/* NAVIGATION LINKS */}
                <div className="flex flex-col gap-4">
                    <h4 className="font-heading text-black text-xl tracking-wider mb-2">QUICK LINKS</h4>
                    <Link href="#services" className="hover:text-black hover:translate-x-1 transition-all w-fit">Services</Link>
                    <Link href="#projects" className="hover:text-black hover:translate-x-1 transition-all w-fit">Projects</Link>
                    <Link href="#about" className="hover:text-black hover:translate-x-1 transition-all w-fit">About Us</Link>
                    <Link href="#careers" className="hover:text-black hover:translate-x-1 transition-all w-fit">Careers</Link>
                </div>

                {/* CONTACT INFO */}
                <div className="flex flex-col gap-4">
                    <h4 className="font-heading text-black text-xl tracking-wider mb-2">CONTACT</h4>
                    <div className="flex items-start gap-3">
                        <MapPin size={18} className="text-black shrink-0 mt-1" />
                        <span className="text-sm leading-snug">100 Industrial Parkway<br />Sector 7, Metro City 4001</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone size={18} className="text-black shrink-0" />
                        <span className="text-sm">+1 (800) 555-BUILD</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Mail size={18} className="text-black shrink-0" />
                        <span className="text-sm">proposals@reforge.com</span>
                    </div>
                </div>

                {/* NEWSLETTER */}
                <div className="flex flex-col gap-4">
                    <h4 className="font-heading text-black text-xl tracking-wider mb-2">INTELLIGENCE</h4>
                    <p className="text-sm">Subscribe to our newsletter for insights on engineering at scale.</p>
                    <div className="flex mt-2 shadow-sm">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="bg-neutral-50 border border-black/5 px-4 py-3 text-sm text-black focus:outline-none focus:border-black transition-colors w-full rounded-none"
                        />
                        <button className="bg-black text-white px-4 hover:bg-neutral-800 transition-colors flex items-center justify-center">
                            <ArrowUpRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 border-t border-black/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-wider">
                <p>© 2026 REFORGE CONSTRUCTION CORP. ALL RIGHTS RESERVED.</p>
                <div className="flex gap-6">
                    <Link href="#" className="hover:text-black transition-colors">PRIVACY POLICY</Link>
                    <Link href="#" className="hover:text-black transition-colors">TERMS OF SERVICE</Link>
                </div>
            </div>
        </footer>
    );
}
