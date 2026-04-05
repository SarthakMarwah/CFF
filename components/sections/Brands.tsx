"use client";

import { motion } from "framer-motion";
import { Check, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Brands() {
    return (
        <section id="brands" className="py-24 bg-black relative">
            {/* Background pattern stripe */}
            <div className="absolute top-1/2 left-0 right-0 h-96 -translate-y-1/2 bg-cff-pattern opacity-[0.03] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                        Our Core <span className="text-cff-yellow">Brands</span>
                    </h2>
                    <p className="text-cff-gold text-lg font-medium uppercase tracking-widest max-w-2xl mx-auto">
                        Two Distinct Experiences. One Standard of Excellence.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">

                    {/* Brand 1: CFF Adda */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-cff-dark rounded-[2.5rem] p-8 md:p-12 border-2 border-white/5 hover:border-cff-yellow/50 transition-colors duration-500 relative group overflow-hidden"
                    >
                        {/* Hover glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-cff-yellow/10 transition-colors duration-500"></div>

                        <div className="flex items-center gap-6 mb-8 relative z-10">
                            <div className="w-20 h-20 rounded-xl bg-white flex items-center justify-center shadow-lg border border-white/10 relative overflow-hidden p-2">
                                <Image src="/adda_logo.png" alt="Adda Logo" fill className="object-contain p-2" />
                            </div>
                            <div>
                                <h3 className="text-4xl font-black text-white uppercase tracking-wide">CFF Adda</h3>
                                <p className="text-cff-yellow font-bold uppercase tracking-widest text-sm mt-1">Eat. Work. Crave</p>
                            </div>
                        </div>

                        <div className="space-y-6 relative z-10">
                            <p className="text-white/80 text-lg leading-relaxed mb-8 border-l-4 border-white pl-4">
                                The energetic, budget-friendly QSR designed for community and high-volume corporate setups.
                            </p>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-4 text-white/70 font-medium">
                                    <CheckCircle2 className="text-cff-yellow shrink-0" size={24} />
                                    <span>High-throughput Budget QSR</span>
                                </li>
                                <li className="flex items-center gap-4 text-white/70 font-medium">
                                    <CheckCircle2 className="text-cff-yellow shrink-0" size={24} />
                                    <span>Community Catering & Events</span>
                                </li>
                                <li className="flex items-center gap-4 text-white/70 font-medium">
                                    <CheckCircle2 className="text-cff-yellow shrink-0" size={24} />
                                    <span>Bhandaras & Specialized Catering</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Brand 2: CFF CRAVE */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-cff-dark rounded-[2.5rem] p-8 md:p-12 border-2 border-white/5 hover:border-cff-gold/80 transition-colors duration-500 relative group overflow-hidden"
                    >
                        {/* Hover glow */}
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 group-hover:bg-cff-gold/15 transition-colors duration-500"></div>

                        <div className="flex items-center gap-6 mb-8 relative z-10">
                            <div className="w-20 h-20 rounded-xl bg-black flex items-center justify-center shadow-lg border-2 border-cff-gold relative overflow-hidden p-2">
                                <Image src="/crave_logo.png" alt="Crave Logo" fill className="object-contain p-2" />
                            </div>
                            <div>
                                <h3 className="text-4xl font-black text-white uppercase tracking-wide">CFF Crave</h3>
                                <p className="text-cff-gold font-bold uppercase tracking-widest text-sm mt-1">Love Every Bite</p>
                            </div>
                        </div>

                        <div className="space-y-6 relative z-10">
                            <p className="text-white/80 text-lg leading-relaxed mb-8 border-l-4 border-cff-gold pl-4">
                                The premium corporate QSR bringing gourmet meals and an elevated cafe experience to the office.
                            </p>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-4 text-white/70 font-medium">
                                    <CheckCircle2 className="text-cff-gold shrink-0" size={24} />
                                    <span>Premium Corporate Ambience</span>
                                </li>
                                <li className="flex items-center gap-4 text-white/70 font-medium">
                                    <CheckCircle2 className="text-cff-gold shrink-0" size={24} />
                                    <span>Gourmet Office Dining</span>
                                </li>
                                <li className="flex items-center gap-4 text-white/70 font-medium">
                                    <CheckCircle2 className="text-cff-gold shrink-0" size={24} />
                                    <span>Executive Lunches & Meetings</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
