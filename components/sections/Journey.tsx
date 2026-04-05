"use client";

import { motion } from "framer-motion";

export default function Journey() {
    return (
        <section id="journey" className="py-24 bg-black relative">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                        Journey <span className="text-cff-yellow">So Far</span>
                    </h2>
                    <p className="text-cff-gold text-lg md:text-xl font-medium max-w-2xl mx-auto uppercase tracking-wider">
                        From Operational Excellence to Culinary Innovation
                    </p>
                </div>

                {/* Timeline UI */}
                <div className="relative border-l-4 border-cff-yellow/20 ml-6 md:ml-0 md:border-l-0 md:flex md:flex-col md:items-center">
                    {/* Central Line for Desktop */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-cff-yellow/20 -translate-x-1/2"></div>

                    {/* Timeline Item 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative pl-8 md:pl-0 md:w-1/2 md:-ml-[50%] mb-12 pr-6 md:text-right md:pr-12 group"
                    >
                        {/* Circle */}
                        <div className="absolute left-[-11px] md:left-auto md:right-[-10px] top-1 w-5 h-5 rounded-full bg-cff-yellow border-4 border-black group-hover:scale-125 transition-transform z-10"></div>
                        <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-2">Early Foundations</h3>
                        <p className="text-white/60 leading-relaxed">
                            A strong foundation in operational excellence and leadership across major industries including Automotive, Glass, Real Estate, and FMCG.
                        </p>
                    </motion.div>

                    {/* Timeline Item 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative pl-8 md:pl-0 md:w-1/2 md:-mr-[50%] md:ml-auto mb-12 md:pl-12 group"
                    >
                        {/* Circle */}
                        <div className="absolute left-[-11px] md:left-[-10px] top-1 w-5 h-5 rounded-full bg-cff-gold border-4 border-black group-hover:scale-125 transition-transform z-10"></div>
                        <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-2">Strategic Shift</h3>
                        <p className="text-white/60 leading-relaxed">
                            Leveraging deep leadership expertise to transition into Food & Beverage and QSR specialization, recognizing the gap in premium corporate dining.
                        </p>
                    </motion.div>

                    {/* Timeline Item 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative pl-8 md:pl-0 md:w-1/2 md:-ml-[50%] pr-6 md:text-right md:pr-12 group"
                    >
                        {/* Circle */}
                        <div className="absolute left-[-11px] md:left-auto md:right-[-10px] top-1 w-5 h-5 rounded-full bg-white border-4 border-black group-hover:scale-125 transition-transform z-10"></div>
                        <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-2">Since 2015</h3>
                        <p className="text-white/60 leading-relaxed">
                            Continuously scaling our operations, establishing CFF as the trusted provider for complete corporate culinary experiences.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
