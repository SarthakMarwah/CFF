import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer id="footer" className="bg-cff-dark text-white pt-20 pb-10 border-t border-cff-yellow/20 relative overflow-hidden">
            {/* Subtle Diagonal Pattern Background */}
            <div className="absolute inset-0 bg-cff-pattern opacity-[0.05] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block relative w-32 h-16">
                            <Image src="/cff_logo.png" alt="CFF Logo" fill className="object-contain object-left" />
                        </Link>
                        <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                            Powering Corporate Dining & QSR Experiences Since 2015.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/corporatefoodandfun" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center text-white/60 hover:text-cff-yellow hover:border-cff-yellow transition-all"><Facebook size={18} /></a>
                            <a href="https://www.instagram.com/cffindia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center text-white/60 hover:text-cff-yellow hover:border-cff-yellow transition-all"><Instagram size={18} /></a>
                            <a href="https://www.linkedin.com/company/25049502/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center text-white/60 hover:text-cff-yellow hover:border-cff-yellow transition-all"><Linkedin size={18} /></a>
                            <a href="https://www.youtube.com/@cff_India" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center text-white/60 hover:text-cff-yellow hover:border-cff-yellow transition-all"><Youtube size={18} /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-cff-yellow uppercase tracking-wider">Explore</h4>
                        <ul className="space-y-4 text-sm text-white/70 uppercase text-xs font-bold tracking-wider">
                            <li><Link href="#journey" className="hover:text-cff-gold transition-colors">Journey</Link></li>
                            <li><Link href="#leadership" className="hover:text-cff-gold transition-colors">Leadership</Link></li>
                            <li><Link href="#menu" className="hover:text-cff-gold transition-colors">Menu/Services</Link></li>
                            <li><Link href="#careers" className="hover:text-cff-gold transition-colors">Careers</Link></li>
                            <li><Link href="#gallery" className="hover:text-cff-gold transition-colors">Gallery</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Brands */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-cff-yellow uppercase tracking-wider">Our Brands</h4>
                        <ul className="space-y-4 text-sm text-white/70 font-bold uppercase">
                            <li><Link href="#brands" className="hover:text-cff-gold transition-colors border-l-2 border-transparent hover:border-cff-yellow pl-2">CFF Adda</Link></li>
                            <li><Link href="#brands" className="hover:text-cff-gold transition-colors border-l-2 border-transparent hover:border-cff-yellow pl-2">CFF Crave</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-cff-yellow uppercase tracking-wider">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-white/70">
                            <li className="flex gap-3 items-center">
                                <div className="w-8 h-8 rounded-full bg-cff-yellow/10 flex items-center justify-center text-cff-yellow">
                                    <Mail size={16} />
                                </div>
                                <span className="font-medium">contact@corporatefoodfun.com</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <div className="w-8 h-8 rounded-full bg-cff-yellow/10 flex items-center justify-center text-cff-yellow">
                                    <Phone size={16} />
                                </div>
                                <span className="font-medium">+91 85954 72014</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <div className="w-8 h-8 rounded-full bg-cff-yellow/10 flex items-center justify-center text-cff-yellow shrink-0">
                                    <MapPin size={16} />
                                </div>
                                <span className="font-medium">Proudly Gurgaon-Based</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-white/40 uppercase tracking-widest">
                    <p>© {new Date().getFullYear()} Corporate Food & Fun. Managed by Sarman Ventures Pvt Ltd.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-cff-yellow">Privacy</Link>
                        <Link href="#" className="hover:text-cff-yellow">Terms</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
