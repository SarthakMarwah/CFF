"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Brands", href: "#brands" },
    { name: "Franchise", href: "#franchise" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#footer" },
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
                    ? "bg-cff-beige/95 backdrop-blur-md shadow-sm py-3"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex flex-col group">
                    <span className={cn("font-bold text-2xl tracking-tight text-cff-brown transition-transform duration-300", scrolled ? "scale-90 origin-left" : "")}>
                        CFF
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-cff-terracotta hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mt-1">
                        Corporate Food & Fun
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-cff-brown hover:text-cff-terracotta text-sm font-medium transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button variant="default" size="sm" className="ml-4 rounded-full px-6 shadow-md hover:shadow-lg transition-all">
                        Get in Touch
                    </Button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-cff-brown p-2"
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
                        className="absolute top-full left-0 right-0 bg-cff-beige shadow-lg border-t border-cff-brown/10 p-6 md:hidden flex flex-col gap-4"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-cff-brown text-lg font-medium py-3 border-b border-cff-brown/5 text-center"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button className="w-full mt-4 py-6 text-lg">Get in Touch</Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
