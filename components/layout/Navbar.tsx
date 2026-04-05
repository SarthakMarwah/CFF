"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Journey", href: "#journey" },
    { name: "Leadership", href: "#leadership" },
    { name: "Brands", href: "#brands" },
    { name: "Menu", href: "#menu" },
    { name: "Network", href: "#network" },
    { name: "Careers", href: "#careers" },
    { name: "Gallery", href: "#gallery" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-cff-black/95 backdrop-blur-md shadow-sm py-3 border-b border-white/10"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center group relative z-10 block">
                    <div className={cn("relative transition-all duration-300", scrolled ? "w-20 h-10" : "w-32 h-16")}>
                        <Image src="/cff_logo.png" alt="CFF Logo" fill className="object-contain object-left" />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden xl:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-white hover:text-cff-yellow uppercase text-xs font-bold tracking-wider transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button variant="default" size="sm" className="ml-4 rounded-full px-6 bg-cff-yellow text-cff-black font-bold hover:bg-cff-gold hover:text-black transition-all shadow-[0_0_15px_rgba(255,195,0,0.3)]">
                        Partner With Us
                    </Button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="xl:hidden text-white hover:text-cff-yellow transition-colors p-2 relative z-10"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-cff-dark shadow-2xl border-t border-white/10 p-6 xl:hidden flex flex-col gap-4"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-white hover:text-cff-yellow text-lg font-bold py-3 border-b border-white/5 text-center uppercase tracking-wider"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button className="w-full mt-4 py-6 text-lg rounded-full bg-cff-yellow text-cff-black font-bold hover:bg-cff-gold">
                            Partner With Us
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
