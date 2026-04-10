"use client";

import { motion } from "framer-motion";

const menuCategories = [
    { name: "Indian", desc: "Paranthas, Curries, Biryani", emoji: "🍛" },
    { name: "Chinese", desc: "Noodles, Manchurian, Dimsums", emoji: "🥡" },
    { name: "Thai", desc: "Curries, Pad Thai, Soups", emoji: "🍲" },
    { name: "Italian", desc: "Pizza, Pasta, Risotto", emoji: "🍕" },
    { name: "Wellness", desc: "Fresh Salads, Protein Bowls", emoji: "🥗" },
];

const flavoursOfIndia = [
    {
        state: "Delhi",
        dish: "Chole Bhature",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12 md:w-14 md:h-14">
                {/* Bowl of chole */}
                <ellipse cx="32" cy="38" rx="20" ry="10" fill="#D4AF37" />
                <ellipse cx="32" cy="36" rx="20" ry="10" fill="#B8860B" />
                <ellipse cx="32" cy="34" rx="18" ry="8" fill="#CD853F" />
                <circle cx="26" cy="33" r="3" fill="#8B4513" opacity="0.7" />
                <circle cx="34" cy="32" r="2.5" fill="#8B4513" opacity="0.7" />
                <circle cx="30" cy="35" r="2" fill="#8B4513" opacity="0.6" />
                {/* Bhatura */}
                <ellipse cx="48" cy="28" rx="10" ry="12" fill="#F5DEB3" transform="rotate(-15 48 28)" />
                <ellipse cx="48" cy="28" rx="8" ry="10" fill="#FAEBD7" transform="rotate(-15 48 28)" />
                <circle cx="46" cy="26" r="1" fill="#D2B48C" opacity="0.5" />
                <circle cx="50" cy="30" r="0.8" fill="#D2B48C" opacity="0.5" />
            </svg>
        ),
    },
    {
        state: "Maharashtra",
        dish: "Vada Pav",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12 md:w-14 md:h-14">
                {/* Top bun */}
                <path d="M14 30 Q32 10 50 30" fill="#F5DEB3" />
                <path d="M16 30 Q32 14 48 30" fill="#FAEBD7" />
                {/* Vada */}
                <circle cx="32" cy="32" r="10" fill="#DAA520" />
                <circle cx="32" cy="32" r="7" fill="#B8860B" />
                {/* Bottom bun */}
                <rect x="14" y="32" width="36" height="8" rx="4" fill="#F5DEB3" />
                {/* Green chutney line */}
                <rect x="16" y="30" width="32" height="2" rx="1" fill="#228B22" opacity="0.7" />
            </svg>
        ),
    },
    {
        state: "Gujarat",
        dish: "Dhokla & Jalebi",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12 md:w-14 md:h-14">
                {/* Dhokla squares */}
                <rect x="8" y="24" width="24" height="20" rx="3" fill="#F0E68C" />
                <rect x="10" y="26" width="20" height="16" rx="2" fill="#FFD700" />
                {/* Mustard seed dots */}
                <circle cx="15" cy="30" r="1" fill="#8B4513" />
                <circle cx="20" cy="33" r="1" fill="#8B4513" />
                <circle cx="25" cy="29" r="1" fill="#8B4513" />
                {/* Jalebi swirl */}
                <circle cx="44" cy="32" r="10" stroke="#FF8C00" strokeWidth="3" fill="none" />
                <circle cx="44" cy="32" r="5" stroke="#FF8C00" strokeWidth="3" fill="none" />
                <circle cx="44" cy="32" r="1.5" fill="#FF8C00" />
            </svg>
        ),
    },
    {
        state: "Rajasthan",
        dish: "Kachori",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12 md:w-14 md:h-14">
                {/* Kachori - puffed round */}
                <ellipse cx="32" cy="34" rx="18" ry="14" fill="#DAA520" />
                <ellipse cx="32" cy="32" rx="18" ry="14" fill="#F5DEB3" />
                <ellipse cx="32" cy="32" rx="14" ry="10" fill="#FAEBD7" />
                {/* Crispy texture dots */}
                <circle cx="26" cy="30" r="1.5" fill="#D2B48C" opacity="0.5" />
                <circle cx="32" cy="28" r="1.5" fill="#D2B48C" opacity="0.5" />
                <circle cx="38" cy="31" r="1.5" fill="#D2B48C" opacity="0.5" />
                <circle cx="30" cy="34" r="1.2" fill="#D2B48C" opacity="0.4" />
                <circle cx="35" cy="35" r="1.2" fill="#D2B48C" opacity="0.4" />
                {/* Puff highlight */}
                <ellipse cx="28" cy="28" rx="4" ry="3" fill="white" opacity="0.2" />
            </svg>
        ),
    },
    {
        state: "Tamil Nadu",
        dish: "Dosa & Idli",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12 md:w-14 md:h-14">
                {/* Dosa - rolled triangle shape */}
                <path d="M6 44 L30 16 L34 44 Z" fill="#F5DEB3" />
                <path d="M8 43 L30 18 L33 43 Z" fill="#FAEBD7" />
                {/* Crispy edge */}
                <path d="M6 44 L34 44" stroke="#D2B48C" strokeWidth="1" />
                {/* Idli - round steamed */}
                <ellipse cx="48" cy="30" rx="10" ry="8" fill="#F5F5F5" />
                <ellipse cx="48" cy="28" rx="10" ry="8" fill="white" />
                {/* Subtle idli shadow/dip */}
                <ellipse cx="48" cy="28" rx="5" ry="3" fill="#F0F0F0" />
                {/* Chutney bowl */}
                <ellipse cx="48" cy="44" rx="7" ry="4" fill="#228B22" opacity="0.6" />
                <ellipse cx="48" cy="43" rx="6" ry="3" fill="#32CD32" opacity="0.5" />
            </svg>
        ),
    },
    {
        state: "Bihar",
        dish: "Litti Chokha",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12 md:w-14 md:h-14">
                {/* Litti - roasted ball */}
                <circle cx="24" cy="30" r="12" fill="#D2B48C" />
                <circle cx="24" cy="28" r="12" fill="#DEB887" />
                {/* Roasted marks */}
                <path d="M16 26 Q20 22 24 26" stroke="#8B4513" strokeWidth="1" opacity="0.4" fill="none" />
                <path d="M22 32 Q26 28 30 32" stroke="#8B4513" strokeWidth="1" opacity="0.4" fill="none" />
                <circle cx="20" cy="24" r="1" fill="#8B4513" opacity="0.3" />
                {/* Chokha mash */}
                <ellipse cx="44" cy="36" rx="12" ry="8" fill="#CD853F" />
                <ellipse cx="44" cy="34" rx="12" ry="8" fill="#DEB887" />
                <circle cx="40" cy="33" r="1.5" fill="#228B22" opacity="0.4" />
                <circle cx="46" cy="32" r="1" fill="#FF6347" opacity="0.4" />
            </svg>
        ),
    },
    {
        state: "West Bengal",
        dish: "Rasgulla",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12 md:w-14 md:h-14">
                {/* Bowl */}
                <ellipse cx="32" cy="42" rx="22" ry="8" fill="#D4AF37" />
                <ellipse cx="32" cy="40" rx="22" ry="8" fill="#B8860B" />
                {/* Syrup */}
                <ellipse cx="32" cy="36" rx="18" ry="6" fill="#FFF8DC" opacity="0.6" />
                {/* Rasgullas */}
                <circle cx="24" cy="32" r="6" fill="#FFFAF0" />
                <circle cx="24" cy="32" r="5" fill="white" />
                <circle cx="36" cy="30" r="6" fill="#FFFAF0" />
                <circle cx="36" cy="30" r="5" fill="white" />
                <circle cx="30" cy="36" r="5" fill="#FFFAF0" />
                <circle cx="30" cy="36" r="4" fill="white" />
                {/* Shine highlights */}
                <circle cx="22" cy="30" r="1.5" fill="white" opacity="0.8" />
                <circle cx="34" cy="28" r="1.5" fill="white" opacity="0.8" />
            </svg>
        ),
    },
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
                        <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-3">Indoor/Outdoor Events</h3>
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

                {/* Flavours of India Heading */}
                <h3 className="text-3xl font-black text-center text-white uppercase tracking-wider mb-12 mt-20">
                    Flavours of <span className="text-cff-gold border-b-4 border-cff-yellow pb-1">India</span>
                </h3>

                {/* Flavours of India Circular Grid */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {flavoursOfIndia.map((item, index) => (
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

                                <span className="relative z-10">{item.icon}</span>
                                <span className="text-white font-bold uppercase tracking-wider mt-1 text-xs md:text-sm relative z-10 group-hover:text-black transition-colors">{item.state}</span>
                            </div>
                            <span className="text-white/50 text-xs font-bold uppercase tracking-widest text-center max-w-[150px]">{item.dish}</span>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
