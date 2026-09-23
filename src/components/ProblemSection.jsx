import { useTranslation } from "react-i18next";
import { problems } from "../data/problems.js";

export default function ProblemSection() {
    const { t } = useTranslation();

    return (
        <section className="problem-section">
            <div className="container problem-section__inner">
                <div className="problem-section__intro">
                    <span className="eyebrow problem-section__eyebrow">{t("problem.eyebrow")}</span>
                    <h2 className="section-heading">{t("problem.heading")}</h2>
                    <p className="section-subtext">{t("problem.subtext")}</p>
                </div>

                <div className="problem-grid">
                    {problems.map((problem) => (
                        <ProblemCard key={problem.id} problem={problem} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProblemCard({ problem }) {
    const { t } = useTranslation();

    return (
        <article className="problem-card">
            <div className={`problem-card__icon problem-card__icon--${problem.accent}`}>
                <ProblemIcon id={problem.id} />
            </div>
            <h3 className="problem-card__title">{t(`problem.items.${problem.id}.title`)}</h3>
            <p className="problem-card__description">{t(`problem.items.${problem.id}.description`)}</p>
        </article>
    );
}

function ProblemIcon({ id }) {
    switch (id) {
        case "scattered-data":
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="12" cy="5" rx="8" ry="3" />
                    <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
                    <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
                </svg>
            );
        case "manual-processes":
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3.5 2" />
                </svg>
            );
        case "disconnected-systems":
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="7" height="7" rx="1.5" />
                    <rect x="14" y="4" width="7" height="7" rx="1.5" />
                    <rect x="3" y="15" width="7" height="5" rx="1.5" />
                    <path d="M10 7.5h4M17.5 11v4" />
                </svg>
            );
        case "no-visibility":
        default:
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 20V10M9 20V6M15 20v-9M21 20V4" />
                </svg>
            );
    }
}