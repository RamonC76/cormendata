import { useTranslation } from "react-i18next";
import { services } from "../data/services.js";

export default function ServicesSection() {
    const { t } = useTranslation();

    return (
        <section id="services" className="services-section">
            <div className="container services-section__inner">
                <div className="services-section__intro">
                    <span className="eyebrow services-section__eyebrow">{t("services.eyebrow")}</span>
                    <h2 className="section-heading">{t("services.heading")}</h2>
                    <p className="section-subtext">{t("services.subtext")}</p>
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ service }) {
    const { t } = useTranslation();

    return (
        <article className="service-card">
            <div className="service-card__icon">
                <ServiceIcon id={service.id} />
            </div>
            <h3 className="service-card__title">{t(`services.items.${service.id}.title`)}</h3>
            <p className="service-card__description">{t(`services.items.${service.id}.description`)}</p>
        </article>
    );
}

function ServiceIcon({ id }) {
    switch (id) {
        case "software-development":
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="8 6 3 12 8 18" />
                    <polyline points="16 6 21 12 16 18" />
                    <line x1="13.5" y1="4" x2="10.5" y2="20" />
                </svg>
            );
        case "applied-ai":
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="8" width="16" height="12" rx="2" />
                    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
                    <circle cx="9" cy="14" r="1.2" fill="var(--color-teal)" stroke="none" />
                    <circle cx="15" cy="14" r="1.2" fill="var(--color-teal)" stroke="none" />
                </svg>
            );
        case "data-analytics":
        default:
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" y1="20" x2="4" y2="12" />
                    <line x1="12" y1="20" x2="12" y2="5" />
                    <line x1="20" y1="20" x2="20" y2="9" />
                </svg>
            );
    }
}