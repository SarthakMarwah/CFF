"use client";

import { motion } from "framer-motion";
import { Store, Utensils, FileText, Sparkles } from "lucide-react";

const services = [
    {
        icon: Store,
        title: "Corporate Kiosks",
        description: "On-site food solutions tailored to your office layout and employee needs.",
    },
    {
        icon: Utensils,
        title: "Catering Services",
        description: "From daily lunches to special executive meetings, we handle it all.",
    },
    {
        icon: FileText,
        title: "Custom Menus",
        description: "Diverse culinary options designed to keep your workforce healthy and happy.",
    },
    {
        icon: Sparkles,
        title: "Event Experiences",
        description: "Transform your corporate events with our unique food and fun setups.",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-cff-sand/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-cff-terracotta font-semibold uppercase tracking-wider text-sm mb-2 block">
                        What We Do
                    </span>
                    <h2 className="text-4xl font-bold text-cff-brown">Our Services</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all group border border-cff-brown/5"
                        >
                            <div className="w-14 h-14 bg-cff-cream rounded-xl flex items-center justify-center mb-6 text-cff-terracotta group-hover:bg-cff-terracotta group-hover:text-white transition-colors duration-300">
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-cff-brown mb-3">
                                {service.title}
                            </h3>
                            <p className="text-cff-brown/70 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
