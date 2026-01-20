import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import ShowcaseSection from "./sections/ShowcaseSection";
import TechStack from "./sections/TechStack";

export default function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <ShowcaseSection />
            <TechStack />
            <Experience />
            <Contact />
        </>

    )
}