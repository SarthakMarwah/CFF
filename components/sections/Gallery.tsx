"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Placeholder data - ideally these would be images
const items = [
    { id: 1, category: "Adda", title: "Adda Kiosk Setup", color: "bg-cff-terracotta" },
    { id: 2, category: "Crave", title: "Premium Coffee", color: "bg-cff-sage" },
    { id: 3, category: "Events", title: "Corporate Buffet", color: "bg-cff-brown" },
    { id: 4, category: "Adda", title: "Lunch Crowd", color: "bg-cff-terracotta/80" },
    { id: 5, category: "Crave", title: "Gourmet Snacks", color: "bg-cff-sage/80" },
];

const tabs = ["All", "Adda", "Crave", "Events"];

export default function Gallery() {
    const [activeTab, setActiveTab] = useState("All");
    const [currentIndex, setCurrentIndex] = useState(0);

    const filteredItems = activeTab === "All"
        ? items
        : items.filter(item => item.category === activeTab);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    };

    return (
        <section id="gallery" className="py-24 bg-cff-beige">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-cff-brown mb-8">Our Gallery</h2>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => { setActiveTab(tab); setCurrentIndex(0); }}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === tab
                                    ? "bg-cff-brown text-white shadow-lg"
                                    : "bg-white text-cff-brown hover:bg-cff-brown/10"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Carousel */}
                <div className="relative max-w-4xl mx-auto aspect-video bg-white rounded-3xl overflow-hidden shadow-2xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className={`absolute inset-0 flex items-center justify-center text-white text-3xl font-bold ${filteredItems[currentIndex]?.color || 'bg-gray-200'}`}
                        >
                            {filteredItems[currentIndex]?.title || "No Images"}
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
                        <Button
                            size="icon"
                            variant="secondary"
                            onClick={prevSlide}
                            className="pointer-events-auto rounded-full w-12 h-12 bg-white/20 backdrop-blur-md hover:bg-white/40 text-black border-none"
                        >
                            <ChevronLeft size={24} />
                        </Button>
                        <Button
                            size="icon"
                            variant="secondary"
                            onClick={nextSlide}
                            className="pointer-events-auto rounded-full w-12 h-12 bg-white/20 backdrop-blur-md hover:bg-white/40 text-black border-none"
                        >
                            <ChevronRight size={24} />
                        </Button>
                    </div>

                    {/* Dots */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                        {filteredItems.map((_, idx) => (
                            <div
                                key={idx}
                                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-white w-6' : 'bg-white/50'}`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
