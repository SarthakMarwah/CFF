"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Brands() {
    return (
        <section id="brands" className="py-24 bg-cff-beige relative">
            <div className="container mx-auto px-6">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-cff-brown mb-4"
                    >
                        Our Brands
                    </motion.h2>
                    <p className="text-cff-brown/70 max-w-2xl mx-auto text-lg">
                        Discover our specialized food concepts designed to elevate the corporate experience.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 md:gap-12">

                    {/* Adda Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer bg-cff-terracotta"
                    >
                        {/* Background Image Placeholder */}
                        <div className="absolute inset-0 bg-cff-terracotta transition-colors duration-500 group-hover:bg-cff-terracotta/90 mix-blend-multiply">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        </div>

                        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full z-10">
                            <h3 className="text-6xl font-bold text-white mb-2 font-serif italic tracking-tighter">Adda</h3>
                            <p className="text-xl text-white/90 font-medium mb-4">A Place to Unwind & Connect</p>

                            <div className="flex gap-3 mb-6 text-sm text-white/80">
                                <span className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">• Social Kiosks</span>
                                <span className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">• Beverages</span>
                                <span className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">• Quick Bites</span>
                            </div>

                            <Button className="bg-white/90 text-cff-terracotta hover:bg-white rounded-lg px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all w-full md:w-auto">
                                Discover Adda
                            </Button>
                        </div>
                    </motion.div>

                    {/* Crave Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                        className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer bg-cff-sage"
                    >
                        {/* Background Image Placeholder */}
                        <div className="absolute inset-0 bg-cff-sage transition-colors duration-500 group-hover:bg-cff-sage/90 mix-blend-multiply">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        </div>

                        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full z-10">
                            <h3 className="text-6xl font-bold text-white mb-2 font-serif">Crave</h3>
                            <p className="text-xl text-white/90 font-medium mb-4 italic">Savor the Moment</p>

                            <div className="flex gap-3 mb-6 text-sm text-white/80">
                                <span className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">• Premium Cafe</span>
                                <span className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">• Gourmet Meals</span>
                                <span className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">• Coffee</span>
                            </div>

                            <Button className="bg-white/90 text-cff-sage hover:bg-white rounded-lg px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all w-full md:w-auto">
                                Discover Crave
                            </Button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
