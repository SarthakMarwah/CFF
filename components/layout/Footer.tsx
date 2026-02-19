import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer id="footer" className="bg-cff-brown text-white pt-20 pb-10">
            <div className="container mx-auto px-6">

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <span className="font-bold text-3xl tracking-tight text-cff-cream">CFF</span>
                            <span className="block text-xs uppercase tracking-widest text-cff-terracotta mt-1">
                                Corporate Food & Fun
                            </span>
                        </Link>
                        <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                            Redefining corporate dining with warmth, flavor, and connection.
                            Your partner in creating happier, more productive workplaces.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-white/60 hover:text-cff-terracotta transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-white/60 hover:text-cff-terracotta transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-white/60 hover:text-cff-terracotta transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-cff-cream">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-white/70">
                            <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="#brands" className="hover:text-white transition-colors">Our Brands</Link></li>
                            <li><Link href="#franchise" className="hover:text-white transition-colors">Franchise</Link></li>
                            <li><Link href="#gallery" className="hover:text-white transition-colors">Media Gallery</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Brands */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-cff-cream">Our Brands</h4>
                        <ul className="space-y-4 text-sm text-white/70">
                            <li><Link href="#" className="hover:text-cff-terracotta transition-colors">Adda - Social Kiosks</Link></li>
                            <li><Link href="#" className="hover:text-cff-sage transition-colors">Crave - Premium Café</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-cff-cream">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-white/70">
                            <li className="flex gap-3">
                                <Mail size={18} className="text-cff-terracotta" />
                                <span>hello@corporatefoodfun.com</span>
                            </li>
                            <li className="flex gap-3">
                                <Phone size={18} className="text-cff-terracotta" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex gap-3">
                                <MapPin size={18} className="text-cff-terracotta shrink-0" />
                                <span>123, Business Park, Cyber City, Gurgaon, India.</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
                    <p>© 2025 Corporate Food & Fun. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
