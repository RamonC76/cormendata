import Hero from "../components/Hero.jsx";
import MissionVisionSection from "../components/MissionVisionSection.jsx";
import ProblemSection from "../components/ProblemSection.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import ProcessSection from "../components/ProcessSection.jsx";
import TechStackSection from "../components/TechStackSection.jsx";
import UseCaseSection from "../components/UseCaseSection.jsx";
import ContactSection from "../components/ContactSection.jsx";

export default function HomePage() {
    return (
        <>
            <Hero />
            <MissionVisionSection />
            <ProblemSection />
            <ServicesSection />
            <ProcessSection />
            <TechStackSection />
            <UseCaseSection />
            <ContactSection />
        </>
    );
}
