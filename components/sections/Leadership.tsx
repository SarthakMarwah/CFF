"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Target, TrendingUp } from "lucide-react";

export default function Leadership() {
    return (
        <section id="leadership" className="py-24 bg-cff-dark border-t border-white/5 relative overflow-hidden">
            {/* Background Element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cff-yellow/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                        Leadership & <span className="text-cff-gold">Advisory Board</span>
                    </h2>
                    <p className="text-white/60 text-lg md:text-xl font-medium max-w-2xl mx-auto tracking-wide uppercase">
                        Visionary Leadership Grounded in Operational Excellence
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-black border border-cff-gold/30 rounded-[2rem] p-1 shadow-[0_0_40px_rgba(212,175,55,0.05)] relative group"
                    >
                        <div className="border border-cff-gold/10 rounded-[1.8rem] p-8 md:p-12 relative overflow-hidden h-[500px] flex items-end">
                            {/* Inner gold glow */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>

                            {/* Placeholder for Rakesh Marwah Photo */}
                            <div className="absolute inset-0 bg-white/5 flex items-center justify-center text-white/10 uppercase tracking-widest font-black text-2xl">
                                [Director Portrait]
                            </div>

                            <div className="relative z-20">
                                <h3 className="text-4xl font-black text-white uppercase tracking-wide">Rakesh <span className="text-cff-gold">Marwah</span></h3>
                                <div className="inline-block bg-cff-yellow text-black font-bold uppercase text-xs px-4 py-1 mt-3 rounded-full tracking-widest">
                                    Director
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Key Philosophy Points */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div className="flex gap-6 items-start">
                            <div className="w-16 h-16 rounded-full bg-cff-yellow text-black flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(255,195,0,0.3)]">
                                <ShieldCheck size={28} strokeWidth={2.5} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white uppercase tracking-wide mb-2">Commitment & Compliance</h4>
                                <p className="text-white/60 leading-relaxed">
                                    Adhering to the highest standards of food safety, corporate compliance, and unwavering dedication to delivering quality experiences.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start">
                            <div className="w-16 h-16 rounded-full bg-cff-gold text-black flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                                <Target size={28} strokeWidth={2.5} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white uppercase tracking-wide mb-2">Client Understanding</h4>
                                <p className="text-white/60 leading-relaxed">
                                    Deeply embedded operational understanding of corporate needs, ensuring that our F&B solutions align perfectly with workplace culture.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start">
                            <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                <TrendingUp size={28} strokeWidth={2.5} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white uppercase tracking-wide mb-2">Balanced Growth Mindset</h4>
                                <p className="text-white/60 leading-relaxed">
                                    Driving scalable QSR and culinary models built on strong logistical support and sustainable growth principles.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
