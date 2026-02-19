import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Brands from "@/components/sections/Brands";
import Services from "@/components/sections/Services";
import Franchise from "@/components/sections/Franchise";
import Gallery from "@/components/sections/Gallery";
import Footer from "@/components/layout/Footer";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Navbar />
            <Hero />
            <About />
            <Brands />
            <Services />
            <Franchise />
            <Gallery />
            <Footer />
        </main>
    );
}
