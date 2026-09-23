import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ProblemSection from "./components/ProblemSection.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import ProcessSection from "./components/ProcessSection.jsx";
import TechStackSection from "./components/TechStackSection.jsx";
import UseCaseSection from "./components/UseCaseSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";
import MissionVisionSection from "./components/MissionVisionSection.jsx";

const COMPANY_NAME = "Trewik";

export default function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <MissionVisionSection />
            <ProblemSection />
            <ServicesSection />
            <ProcessSection />
            <TechStackSection />
            <UseCaseSection />
            <ContactSection />
            <Footer companyName={COMPANY_NAME} />
        </>
    );
}