"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Franchise() {
    return (
        <section id="careers" className="py-24 bg-cff-dark relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-cff-pattern opacity-[0.02] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                        Grow <span className="text-cff-yellow">With Us</span>
                    </h2>
                    <p className="text-white/60 text-lg uppercase tracking-widest font-bold max-w-2xl mx-auto">
                        Careers and Franchise Opportunities
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 md:gap-20">

                    {/* Left: Careers */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-black p-8 md:p-12 rounded-[2rem] border-t-4 border-white/20"
                    >
                        <h3 className="text-3xl font-black text-white uppercase tracking-wide mb-2">Join The Team</h3>
                        <p className="text-white/50 text-sm mb-8">Build your future with a fast-growing, premium QSR network.</p>

                        <div className="space-y-4 mb-10">
                            <h4 className="text-cff-yellow font-bold uppercase tracking-wider text-sm mb-4">Open Roles</h4>
                            <div className="flex flex-wrap gap-3">
                                <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white text-xs font-bold uppercase tracking-wider">Kiosk Managers</span>
                                <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white text-xs font-bold uppercase tracking-wider">QSR Staff</span>
                                <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white text-xs font-bold uppercase tracking-wider">Culinary Experts</span>
                            </div>
                        </div>

                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-white/50 uppercase tracking-wider mb-2">Mobile Number <span className="text-cff-yellow">*</span></label>
                                    <Input type="tel" placeholder="+91 XXXXX XXXXX" className="bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-xl font-medium" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-white/50 uppercase tracking-wider mb-2">Email Address <span className="text-cff-yellow">*</span></label>
                                    <Input type="email" placeholder="your@email.com" className="bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-xl font-medium" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-white/50 uppercase tracking-wider mb-2">Upload Resume</label>
                                <div className="border border-dashed border-white/20 rounded-xl p-6 text-center cursor-pointer hover:border-cff-yellow/50 transition-colors bg-white/5">
                                    <span className="text-white/70 text-sm">Click to browse or drag file here</span>
                                </div>
                            </div>
                            <Button className="w-full mt-4 bg-white text-black hover:bg-cff-yellow hover:text-black font-bold py-6 rounded-full uppercase tracking-wider">
                                Apply Now
                            </Button>
                        </form>
                    </motion.div>

                    {/* Right: Franchise */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-cff-yellow p-8 md:p-12 rounded-[2rem] shadow-[0_0_50px_rgba(255,195,0,0.15)] relative overflow-hidden"
                    >
                        {/* watermark */}
                        <div className="absolute -bottom-10 -right-10 text-[150px] font-black text-black/5 pointer-events-none transform -rotate-12 leading-none">CFF</div>

                        <div className="relative z-10">
                            <h3 className="text-3xl font-black text-black uppercase tracking-wide mb-2">Franchise Inquiry</h3>
                            <p className="text-black/60 text-sm mb-8 font-medium">Partner with a proven model built on operational excellence.</p>

                            <form className="space-y-5">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-black/60 uppercase tracking-wider mb-2">Name</label>
                                        <Input type="text" placeholder="John Doe" className="bg-white/60 border-black/10 text-black placeholder:text-black/30 rounded-xl focus-visible:ring-black" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-black/60 uppercase tracking-wider mb-2">Location</label>
                                        <Input type="text" placeholder="City" className="bg-white/60 border-black/10 text-black placeholder:text-black/30 rounded-xl focus-visible:ring-black" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-black/60 uppercase tracking-wider mb-2">Phone <span className="text-red-600">*</span></label>
                                        <Input type="tel" placeholder="+91 XXXXX XXXXX" className="bg-white/60 border-black/10 text-black placeholder:text-black/30 rounded-xl focus-visible:ring-black" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-black/60 uppercase tracking-wider mb-2">Email <span className="text-red-600">*</span></label>
                                        <Input type="email" placeholder="you@email.com" className="bg-white/60 border-black/10 text-black placeholder:text-black/30 rounded-xl focus-visible:ring-black" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-black/60 uppercase tracking-wider mb-2">Investment Capacity</label>
                                    <select className="flex h-10 w-full items-center justify-between rounded-xl border border-black/10 bg-white/60 px-3 py-2 text-sm ring-offset-background placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black">
                                        <option value="">Select Range</option>
                                        <option value="range1">₹10L - ₹25L</option>
                                        <option value="range2">₹25L - ₹50L</option>
                                        <option value="range3">₹50L+</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-black/60 uppercase tracking-wider mb-2">F&B Experience</label>
                                    <Textarea placeholder="Tell us briefly about your background..." className="bg-white/60 border-black/10 text-black placeholder:text-black/30 rounded-xl resize-none h-24 focus-visible:ring-black" />
                                </div>

                                <Button className="w-full mt-2 bg-black text-cff-yellow hover:bg-black/90 font-bold py-6 rounded-full uppercase tracking-wider">
                                    Submit Inquiry
                                </Button>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
