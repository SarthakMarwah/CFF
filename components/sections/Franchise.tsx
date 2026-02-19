"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

const benefits = [
    "Proven Business Model",
    "Comprehensive Training",
    "Marketing Support",
    "High ROI Potential",
];

export default function Franchise() {
    return (
        <section id="franchise" className="py-24 bg-cff-terracotta relative overflow-hidden">
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')] pointer-events-none mix-blend-overlay" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    <div className="lg:w-1/2 text-white">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        >
                            Partner With CFF <br />
                            <span className="text-cff-cream italic">Build a Successful Food Business.</span>
                        </motion.h2>
                        <p className="text-white/90 text-lg mb-8 max-w-xl">
                            Join our growing network of franchise partners. We provide everything you need to start, run, and grow your own corporate food service business.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle2 className="text-cff-cream" size={24} />
                                    <span className="font-medium text-white">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="lg:w-1/3 bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-center"
                    >
                        <h3 className="text-2xl font-bold text-white mb-2">Ready to Start?</h3>
                        <p className="text-white/80 mb-6">Take the first step towards your entrepreneurial journey.</p>
                        <Button size="lg" className="w-full bg-cff-cream text-cff-terracotta hover:bg-white font-bold text-lg py-6 gap-2">
                            Apply For Franchise <ArrowRight size={20} />
                        </Button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
