"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Gallery Configuration
 * ---------------------
 * Each item has an `images` array. Replace the placeholder paths
 * with your actual image paths (from /public or external URLs).
 *
 * Example:
 *   images: ["/gallery/thali-1.jpg", "/gallery/thali-2.jpg", "/gallery/thali-3.jpg"]
 *
 * The slideshow auto-cycles every 3 seconds per frame.
 */

interface GalleryItem {
    type: string;
    title: string;
    colSpan: string;
    rowSpan: string;
    images: string[]; // Add 4-5 image paths per frame
}

const galleryItems: GalleryItem[] = [
    {
        type: "Food",
        title: "Premium Indian Thali",
        colSpan: "col-span-1 md:col-span-2",
        rowSpan: "row-span-2",
        images: [
            // Replace with your actual images:
            // "/gallery/thali-1.jpg",
            // "/gallery/thali-2.jpg",
            // "/gallery/thali-3.jpg",
            // "/gallery/thali-4.jpg",
        ],
    },
    {
        type: "Food",
        title: "Gourmet Burgers",
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
        images: [
            // "/gallery/burger-1.jpg",
            // "/gallery/burger-2.jpg",
            // "/gallery/burger-3.jpg",
        ],
    },
    {
        type: "Interior",
        title: "CFF Adda Kiosk",
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
        images: [
            // "/gallery/kiosk-1.jpg",
            // "/gallery/kiosk-2.jpg",
            // "/gallery/kiosk-3.jpg",
            // "/gallery/kiosk-4.jpg",
        ],
    },
    {
        type: "Interior",
        title: "Corporate Cafe Setup",
        colSpan: "col-span-1",
        rowSpan: "row-span-2",
        images: [
            // "/gallery/cafe-1.jpg",
            // "/gallery/cafe-2.jpg",
            // "/gallery/cafe-3.jpg",
            // "/gallery/cafe-4.jpg",
            // "/gallery/cafe-5.jpg",
        ],
    },
    {
        type: "Food",
        title: "Authentic Chinese",
        colSpan: "col-span-1 md:col-span-2",
        rowSpan: "row-span-1",
        images: [
            // "/gallery/chinese-1.jpg",
            // "/gallery/chinese-2.jpg",
            // "/gallery/chinese-3.jpg",
        ],
    },
];

/** Duration in ms between image transitions */
const SLIDE_INTERVAL = 3000;

function GalleryFrame({ item, index }: { item: GalleryItem; index: number }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const hasImages = item.images.length > 0;
    const multipleImages = item.images.length > 1;

    const advance = useCallback(() => {
        if (!multipleImages) return;
        setCurrentIndex((prev) => (prev + 1) % item.images.length);
    }, [multipleImages, item.images.length]);

    useEffect(() => {
        if (!multipleImages) return;
        const timer = setInterval(advance, SLIDE_INTERVAL);
        return () => clearInterval(timer);
    }, [advance, multipleImages]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`${item.colSpan} ${item.rowSpan} relative group rounded-3xl overflow-hidden cursor-pointer bg-cff-dark border border-white/5`}
        >
            {/* Image slideshow layer */}
            {hasImages ? (
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={item.images[currentIndex]}
                            alt={`${item.title} - ${currentIndex + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </motion.div>
                </AnimatePresence>
            ) : (
                /* Placeholder when no images are attached yet */
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white/10">
                    {/* Camera icon placeholder */}
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-xs uppercase tracking-widest font-bold">Add Photos</span>
                    <span className="text-[10px] uppercase tracking-wider opacity-50">4-5 images</span>
                </div>
            )}

            {/* Title watermark (always visible) */}
            <div className="absolute inset-0 flex items-center justify-center text-white/5 font-black text-4xl uppercase overflow-hidden p-4 text-center break-words leading-none pointer-events-none">
                {item.title}
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cff-yellow/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-500"></div>

            {/* Circular Accent Shape */}
            <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-cff-yellow/20 group-hover:bg-cff-yellow/50 group-hover:scale-150 transition-all duration-700 ease-out z-0"></div>

            {/* Slide indicator dots (only when multiple images exist) */}
            {multipleImages && (
                <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-1.5 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? "bg-cff-yellow w-4" : "bg-white/40 hover:bg-white/70"
                                }`}
                            aria-label={`Go to image ${i + 1}`}
                        />
                    ))}
                </div>
            )}

            {/* Item details on hover */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                <span className="text-cff-yellow text-xs font-bold uppercase tracking-widest">{item.type}</span>
                <h3 className="text-white font-bold text-xl uppercase tracking-wide mt-1">{item.title}</h3>
            </div>
        </motion.div>
    );
}

export default function Gallery() {
    return (
        <section id="gallery" className="py-24 bg-black relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                        Culinary & <span className="text-cff-yellow">Spaces</span>
                    </h2>
                    <p className="text-white/60 text-lg uppercase tracking-widest font-bold max-w-2xl mx-auto">
                        A glimpse into our visual aesthetics
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
                    {galleryItems.map((item, index) => (
                        <GalleryFrame key={index} item={item} index={index} />
                    ))}
                </div>

                {/* Circular "Follow Us" Badge */}
                <div className="flex justify-center mt-12">
                    <button className="flex items-center gap-3 text-white uppercase font-bold tracking-widest text-sm hover:text-cff-yellow transition-colors group">
                        <span className="w-12 h-12 rounded-full border-2 border-white/20 group-hover:border-cff-yellow flex items-center justify-center transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                            </svg>
                        </span>
                        Follow us on Instagram
                    </button>
                </div>
            </div>
        </section>
    );
}
