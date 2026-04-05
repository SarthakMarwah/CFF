"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-black pt-20 border-b-4 border-cff-yellow w-full">
            {/* Bold Diagonal Background Pattern (Left Side Only) */}
            <div className="absolute top-0 left-0 bottom-0 w-[80px] md:w-[150px] xl:w-[220px] bg-cff-pattern-bold opacity-100 pointer-events-none shadow-[20px_0_50px_rgba(0,0,0,0.9)] z-0" />
            <div className="absolute top-0 left-[80px] md:left-[150px] xl:left-[220px] bottom-0 w-32 bg-gradient-to-r from-black/90 to-transparent z-0 pointer-events-none" />

            <div className="w-full flex flex-col xl:flex-row gap-12 xl:gap-16 items-center z-10 pt-12 pb-20 pr-6 xl:pr-12 pl-[110px] md:pl-[190px] xl:pl-[280px]">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8 max-w-2xl w-full xl:w-1/2"
                >
                    <div className="space-y-2">
                        <h1 className="text-5xl md:text-7xl font-black leading-tight text-white uppercase tracking-tighter">
                            Corporate Food Fun: <br />
                            <span className="text-cff-yellow">Eat. Work. Crave.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-md font-medium border-l-4 border-cff-gold pl-4 mt-6">
                            Powering Corporate Dining & QSR Experiences Since 2015.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-5 pt-6">
                        <Button size="lg" className="bg-cff-yellow text-black hover:bg-cff-gold font-bold px-8 py-6 rounded-full shadow-[0_0_20px_rgba(255,195,0,0.4)] hover:shadow-[0_0_30px_rgba(255,195,0,0.6)] transition-all uppercase tracking-wide text-sm">
                            Explore Our Brands
                        </Button>
                        <Button size="lg" variant="outline" className="border-2 border-cff-yellow text-cff-yellow hover:bg-cff-yellow hover:text-black font-bold px-8 py-6 rounded-full uppercase tracking-wide text-sm transition-all bg-transparent">
                            Partner With Us
                        </Button>
                    </div>

                    {/* Services Highlights - Circular Badges */}
                    <div className="pt-8 flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 bg-white/5 border border-cff-yellow/30 px-4 py-2 rounded-full">
                            <div className="w-2 h-2 rounded-full bg-cff-yellow"></div>
                            <span className="text-sm font-bold text-white uppercase tracking-wider">Corporate Dining</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/5 border border-cff-yellow/30 px-4 py-2 rounded-full">
                            <div className="w-2 h-2 rounded-full bg-cff-yellow"></div>
                            <span className="text-sm font-bold text-white uppercase tracking-wider">QSR</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/5 border border-cff-yellow/30 px-4 py-2 rounded-full">
                            <div className="w-2 h-2 rounded-full bg-cff-yellow"></div>
                            <span className="text-sm font-bold text-white uppercase tracking-wider">Events</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Cards Showcase */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative lg:h-[600px] w-full flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    {/* Brands Card 1: CRAVE */}
                    <div className="w-full sm:w-[280px] h-[380px] rounded-[2rem] bg-cff-dark border border-cff-yellow/30 overflow-hidden shadow-2xl relative group transform hover:-translate-y-2 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
                        <div className="absolute bottom-6 left-6 z-20">
                            <h3 className="text-3xl font-black text-white uppercase tracking-wider">Crave</h3>
                            <p className="text-cff-yellow font-bold text-sm mt-1 uppercase tracking-widest">Love Every Bite</p>
                        </div>

                        <div className="absolute inset-0 w-full h-full flex items-center justify-center z-0 opacity-40 group-hover:opacity-100 transition-opacity duration-300 p-8">
                            <Image src="/crave_logo.png" alt="Crave Logo" fill className="object-contain object-center absolute inset-0 m-auto p-12" />
                        </div>
                    </div>

                    {/* Brands Card 2: ADDA */}
                    <div className="w-full sm:w-[280px] h-[380px] rounded-[2rem] bg-cff-dark border border-cff-yellow/30 overflow-hidden shadow-2xl relative group transform sm:translate-y-12 hover:translate-y-8 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
                        <div className="absolute bottom-6 left-6 z-20">
                            <h3 className="text-3xl font-black text-white uppercase tracking-wider">Adda</h3>
                            <p className="text-cff-yellow font-bold text-sm mt-1 uppercase tracking-widest">Eat. Work. Crave</p>
                        </div>

                        <div className="absolute inset-0 w-full h-full flex items-center justify-center z-0 opacity-40 group-hover:opacity-100 transition-opacity duration-300 p-8">
                            <Image src="/adda_logo.png" alt="Adda Logo" fill className="object-contain object-center absolute inset-0 m-auto p-12" />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Circular Bottom Shape */}
            <div className="absolute -bottom-[50px] left-1/2 -translate-x-1/2 w-[150%] h-[100px] bg-black rounded-[100%] z-20 border-t-4 border-cff-yellow hidden sm:block"></div>
        </section>
    );
}
