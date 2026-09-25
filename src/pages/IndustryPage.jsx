import { useParams, Link, Navigate } from "react-router-dom";
import industries from "../data/industries.js";

const WHATSAPP_NUMBER = "525560651350"; // 55 6065 1350 en formato internacional para wa.me

export default function IndustryPage() {
    const { slug } = useParams();
    const industry = industries[slug];

    if (!industry) {
        return <Navigate to="/" replace />;
    }

    const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        `Hola, me interesa saber más sobre las soluciones de CorMen Data para ${industry.title}.`
    )}`;

    return (
        <main className="industry-page">
            <div className="container industry-page__inner">
                <p className="industry-page__eyebrow">Industrias</p>
                <h1 className="industry-page__title">{industry.title}</h1>
                <p className="industry-page__summary">{industry.summary}</p>

                <ul className="industry-page__points">
                    {industry.points.map((point) => (
                        <li key={point}>{point}</li>
                    ))}
                </ul>

                <div className="industry-page__actions">
                    <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="industry-page__cta"
                    >
                        Hablar por WhatsApp
                    </a>
                    <Link to="/#contact" className="industry-page__secondary">
                        Ver formulario de contacto
                    </Link>
                </div>
            </div>
        </main>
    );
}
