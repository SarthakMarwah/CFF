"use client";

import { motion } from "framer-motion";
import { Truck, MapPin, Boxes, Link as LinkIcon } from "lucide-react";

export default function Network() {
    return (
        <section id="network" className="py-24 bg-black relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                        Strategic <span className="text-cff-yellow">Presence</span>
                    </h2>
                    <p className="text-cff-gold text-lg md:text-xl font-medium max-w-2xl mx-auto uppercase tracking-wider">
                        A Robust Infrastructure Built for Scale
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Map Infographic Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] md:h-[500px] bg-cff-dark rounded-[2.5rem] border border-white/5 overflow-hidden flex items-center justify-center p-8 group"
                    >
                        {/* Map base */}
                        <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/India_map_en.svg')] bg-contain bg-center bg-no-repeat filter invert"></div>

                        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center">
                            {/* Gurgaon Hub Node */}
                            <div className="relative">
                                {/* Pulse Effect */}
                                <div className="absolute inset-0 bg-cff-yellow rounded-full animate-ping opacity-30"></div>
                                <div className="w-8 h-8 rounded-full bg-cff-yellow flex items-center justify-center relative z-10">
                                    <div className="w-3 h-3 rounded-full bg-black"></div>
                                </div>

                                {/* Label */}
                                <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-black border border-cff-yellow px-4 py-2 rounded-full whitespace-nowrap shadow-lg">
                                    <div className="text-cff-yellow font-black uppercase text-sm tracking-wider">Gurgaon Base</div>
                                    <div className="text-white/60 text-xs mt-1">Headquarters & Central Kitchen</div>
                                </div>
                            </div>
                        </div>

                        {/* Connecting Lines Overlay (Decorative) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
                            <line x1="50%" y1="50%" x2="20%" y2="30%" stroke="url(#paint0_linear)" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />
                            <line x1="50%" y1="50%" x2="80%" y2="40%" stroke="url(#paint0_linear)" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />
                            <line x1="50%" y1="50%" x2="30%" y2="80%" stroke="url(#paint0_linear)" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />
                            <defs>
                                <linearGradient id="paint0_linear" x1="0" y1="0" x2="1" y2="1">
                                    <stop stopColor="#FFC300" />
                                    <stop offset="1" stopColor="transparent" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </motion.div>

                    {/* Right: Infrastructure Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-cff-dark border border-white/5 p-6 rounded-2xl flex gap-6 items-start hover:border-cff-yellow/50 transition-colors">
                            <div className="w-14 h-14 rounded-full bg-black border-2 border-cff-yellow text-cff-yellow flex items-center justify-center shrink-0">
                                <Truck size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-2">Logistics-First Model</h3>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    Built on a foundation of operational excellence, our logistics-first approach ensures uninterrupted supply.
                                </p>
                            </div>
                        </div>

                        <div className="bg-cff-dark border border-white/5 p-6 rounded-2xl flex gap-6 items-start hover:border-cff-yellow/50 transition-colors">
                            <div className="w-14 h-14 rounded-full bg-black border-2 border-cff-yellow text-cff-yellow flex items-center justify-center shrink-0">
                                <Boxes size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-2">Internal Logistics Support</h3>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    Dedicated internal fleets and supply chain management system to minimize dependency and reduce turnaround times.
                                </p>
                            </div>
                        </div>

                        <div className="bg-cff-dark border border-white/5 p-6 rounded-2xl flex gap-6 items-start hover:border-cff-gold/50 transition-colors relative overflow-hidden">
                            {/* Accent line */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-cff-gold"></div>
                            <div className="w-14 h-14 rounded-full bg-cff-gold text-black flex items-center justify-center shrink-0">
                                <LinkIcon size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-2">Delhivery Partnership</h3>
                                <p className="text-white/80 text-sm leading-relaxed">
                                    Strategic alliance with <span className="font-bold text-cff-gold">Delhivery</span> to scale our reach seamlessly across locations, ensuring premium fresh deliveries on time.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
