"use client";

import { motion } from "framer-motion";

const menuCategories = [
    { name: "Indian", desc: "Paranthas, Curries, Biryani", emoji: "🍛" },
    { name: "Chinese", desc: "Noodles, Manchurian, Dimsums", emoji: "🥡" },
    { name: "Thai", desc: "Curries, Pad Thai, Soups", emoji: "🍲" },
    { name: "Italian", desc: "Pizza, Pasta, Risotto", emoji: "🍕" },
    { name: "Wellness", desc: "Fresh Salads, Protein Bowls", emoji: "🥗" },
];

export default function Menu() {
    return (
        <section id="menu" className="py-24 bg-cff-dark relative border-t border-cff-yellow/10">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                        Service & <span className="text-cff-yellow">Menu</span>
                    </h2>
                    <p className="text-white/60 text-lg uppercase tracking-widest font-bold max-w-2xl mx-auto">
                        Catering to every corporate culinary need
                    </p>
                </div>

                {/* Services Section */}
                <div className="grid md:grid-cols-3 gap-6 mb-20">
                    <div className="bg-black border border-white/5 p-8 rounded-3xl text-center hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-16 h-16 mx-auto bg-cff-yellow rounded-full flex items-center justify-center text-3xl mb-6 shadow-[0_0_15px_rgba(255,195,0,0.3)]">🏢</div>
                        <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-3">Corporate Tuck Shops</h3>
                        <p className="text-white/50 text-sm">Efficient, 24/7 dedicated kiosks managing daily corporate refreshment needs.</p>
                    </div>
                    <div className="bg-black border border-white/5 p-8 rounded-3xl text-center hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-16 h-16 mx-auto bg-cff-gold rounded-full flex items-center justify-center text-3xl mb-6 shadow-[0_0_15px_rgba(212,175,55,0.3)]">🏪</div>
                        <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-3">Retail QSR</h3>
                        <p className="text-white/50 text-sm">High-quality Quick Service Restaurants built for scale and consistency.</p>
                    </div>
                    <div className="bg-black border border-white/5 p-8 rounded-3xl text-center hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-3xl mb-6 shadow-[0_0_15px_rgba(255,255,255,0.2)]">🎪</div>
                        <h3 className="text-xl font-bold text-black uppercase tracking-wide mb-3">Indoor/Outdoor Events</h3>
                        <p className="text-white/50 text-sm">Premium catering operations handling large scale corporate events and fests.</p>
                    </div>
                </div>

                {/* Menu Categories Heading */}
                <h3 className="text-3xl font-black text-center text-white uppercase tracking-wider mb-12">
                    Culinary <span className="text-cff-gold border-b-4 border-cff-yellow pb-1">Excellence</span>
                </h3>

                {/* Menu Circular Grid */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {menuCategories.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center group cursor-pointer"
                        >
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-black border-4 border-cff-yellow/20 flex flex-col items-center justify-center group-hover:border-cff-yellow group-hover:scale-105 transition-all shadow-xl relative overflow-hidden mb-4">
                                {/* Yellow background highlight on hover */}
                                <div className="absolute inset-0 bg-cff-yellow translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>

                                <span className="text-5xl relative z-10">{item.emoji}</span>
                                <span className="text-white font-bold uppercase tracking-wider mt-2 relative z-10 group-hover:text-black transition-colors">{item.name}</span>
                            </div>
                            <span className="text-white/50 text-xs font-bold uppercase tracking-widest text-center max-w-[150px]">{item.desc}</span>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
