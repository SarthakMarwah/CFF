"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-cff-dark border-t border-white/5 relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Contact Info & Map Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                            Get In <span className="text-cff-yellow">Touch</span>
                        </h2>
                        <p className="text-white/60 mb-10 text-lg uppercase tracking-widest font-bold">
                            Based in Gurgaon, serving excellence everywhere.
                        </p>

                        {/* Custom Map UI */}
                        <div className="w-full h-64 bg-black border border-white/10 rounded-3xl overflow-hidden relative mb-8 group">
                            {/* Map abstract lines */}
                            <div className="absolute inset-0 opacity-30 bg-cff-pattern-bold" style={{ backgroundSize: '50px 50px' }}></div>

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="absolute w-24 h-24 rounded-full bg-cff-yellow/10 animate-ping"></div>
                                <div className="w-12 h-12 bg-cff-yellow rounded-full flex items-center justify-center z-10 shadow-[0_0_20px_rgba(255,195,0,0.5)] transform group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur px-4 py-2 rounded-xl text-xs font-bold text-cff-yellow uppercase border border-white/5">
                                Gurgaon HQ
                            </div>
                        </div>

                        <div className="space-y-4 text-white/80 font-medium">
                            <p className="flex items-center gap-4">
                                <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-cff-yellow border border-white/10">📧</span>
                                connect@corporatefoodfun.com
                            </p>
                            <p className="flex items-center gap-4">
                                <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-cff-yellow border border-white/10">📞</span>
                                +91 8595472014
                            </p>
                            <p className="flex items-center gap-4">
                                <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-cff-yellow border border-white/10">📍</span>
                                Corporate Food Fun HQ, Sector 29, Gurgaon
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-black p-8 md:p-12 rounded-[2rem] border-t-4 border-cff-yellow relative overflow-hidden"
                    >
                        <h3 className="text-2xl font-black text-white uppercase tracking-wide mb-6">Send a Message</h3>

                        <form className="space-y-5 relative z-10">
                            <div>
                                <Input type="text" placeholder="Your Name" className="bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-xl focus-visible:ring-cff-yellow h-12" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <Input type="email" placeholder="Email Address" className="bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-xl focus-visible:ring-cff-yellow h-12" />
                                <Input type="tel" placeholder="Phone Number" className="bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-xl focus-visible:ring-cff-yellow h-12" />
                            </div>
                            <div>
                                <select className="flex h-12 w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm ring-offset-background placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-cff-yellow disabled:cursor-not-allowed disabled:opacity-50 text-white/50">
                                    <option value="" className="text-black">Reason for contact</option>
                                    <option value="catering" className="text-black">Corporate Catering</option>
                                    <option value="events" className="text-black">Event Booking</option>
                                    <option value="feedback" className="text-black">General Inquiry</option>
                                </select>
                            </div>
                            <div>
                                <Textarea placeholder="How can we help you?" className="bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-xl resize-none h-32 focus-visible:ring-cff-yellow" />
                            </div>

                            <Button className="w-full mt-4 bg-cff-yellow text-black hover:bg-cff-gold font-bold py-6 rounded-full uppercase tracking-wider text-sm">
                                Send Message
                            </Button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
