"use client";

import { motion } from "framer-motion";

const stats = [
    { label: "Years in Industry", value: "12+" },
    { label: "Corporate Clients", value: "150+" },
    { label: "Active Locations", value: "60+" },
    { label: "Franchise Partners", value: "25+" },
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-white/50 backdrop-blur-sm relative overflow-hidden">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                {/* Left Text */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-cff-terracotta font-semibold uppercase tracking-wider text-sm mb-2 block">
                        Who We Are
                    </span>
                    <h2 className="text-4xl font-bold text-cff-brown mb-6">
                        Building Connections Through Food
                    </h2>
                    <p className="text-lg text-cff-brown/70 leading-relaxed mb-6">
                        Corporate Food & Fun (CFF) has been transforming office dining since 2012.
                        We believe that good food is the fuel for great ideas. From quick coffee breaks
                        to full-scale catering events, we bring warmth, flavor, and professionalism to
                        every corporate environment.
                    </p>
                    <p className="text-lg text-cff-brown/70 leading-relaxed">
                        Now expanding our horizon with premium brands like <span className="text-cff-terracotta font-medium">Adda</span> and <span className="text-cff-sage font-medium">Crave</span>,
                        we are setting new standards in the corporate food service industry.
                    </p>
                </motion.div>

                {/* Right Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="bg-cff-cream p-8 rounded-2xl shadow-sm hover:shadow-md transition-all text-center group"
                        >
                            <h3 className="text-4xl font-bold text-cff-terracotta mb-2 group-hover:scale-110 transition-transform">
                                {stat.value}
                            </h3>
                            <p className="text-cff-brown/80 font-medium text-sm md:text-base">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
