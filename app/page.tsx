import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Journey from "@/components/sections/Journey";
import Leadership from "@/components/sections/Leadership";
import Brands from "@/components/sections/Brands";
import Menu from "@/components/sections/Menu";
import Network from "@/components/sections/Network";
import Franchise from "@/components/sections/Franchise";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen bg-black">
            <Navbar />
            <Hero />
            <Journey />
            <Leadership />
            <Brands />
            <Menu />
            <Network />
            <Franchise />
            <Gallery />
            <Contact />
            <Footer />
        </main>
    );
}
