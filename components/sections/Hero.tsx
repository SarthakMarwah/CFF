"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-cff-beige pt-20">
            {/* Background Texture Overlay (Optional) */}
            <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')] pointer-events-none" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10 w-full">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6 max-w-xl"
                >
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight text-cff-brown">
                        Corporate Food Experiences, <span className="italic text-cff-terracotta">Reimagined.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-cff-brown/80 max-w-md">
                        Delivering Flavor, Fun & Connection at Every Workplace.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button size="lg" className="bg-cff-terracotta hover:bg-cff-terracotta/90 text-white px-8 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                            Explore Brands
                        </Button>
                        <Button size="lg" variant="outline" className="border-cff-brown text-cff-brown hover:bg-cff-brown/5 rounded-full px-8">
                            Franchise With Us
                        </Button>
                    </div>
                </motion.div>

                {/* Right Image Collage */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center"
                >
                    {/* Main Large Image */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="absolute z-20 w-[60%] h-[70%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-3"
                    >
                        <div className="w-full h-full bg-cff-cream flex items-center justify-center text-cff-brown/50 text-2xl font-bold">
                            Corporate Kiosk
                        </div>
                    </motion.div>

                    {/* Top Right Floating Image */}
                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                        className="absolute top-0 right-0 w-[40%] h-[40%] rounded-2xl overflow-hidden shadow-xl border-4 border-white transform rotate-3 z-10"
                    >
                        <div className="w-full h-full bg-cff-sage flex items-center justify-center text-white/50 text-xl font-bold">
                            Coffee Station
                        </div>
                    </motion.div>

                    {/* Bottom Left Floating Image */}
                    <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 0.5 }}
                        className="absolute bottom-0 left-4 w-[45%] h-[40%] rounded-2xl overflow-hidden shadow-xl border-4 border-white transform -rotate-2 z-30"
                    >
                        <div className="w-full h-full bg-cff-terracotta flex items-center justify-center text-white/50 text-xl font-bold">
                            Buffet Setup
                        </div>
                    </motion.div>
                </motion.div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-cff-brown/50"
            >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
            </motion.div>
        </section>
    );
}
