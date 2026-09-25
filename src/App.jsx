import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollManager from "./components/ScrollManager.jsx";
import HomePage from "./pages/HomePage.jsx";
import IndustryPage from "./pages/IndustryPage.jsx";
import CoursePage from "./pages/CoursePage.jsx";

const COMPANY_NAME = "CorMen Data";

export default function App() {
    return (
        <>
            <ScrollManager />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/industrias/:slug" element={<IndustryPage />} />
                <Route path="/cursos/:slug" element={<CoursePage />} />
            </Routes>
            <Footer companyName={COMPANY_NAME} />
        </>
    );
}
