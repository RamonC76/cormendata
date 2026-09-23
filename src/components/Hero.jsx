import { useTranslation } from "react-i18next";

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section className="hero">
            <div className="hero__glow hero__glow--teal" aria-hidden="true" />
            <div className="hero__glow hero__glow--orange" aria-hidden="true" />

            <div className="container hero__content">
                <div className="hero__copy">
                    <span className="hero__tag">
                        <span className="hero__tag-dot" />
                        {t("hero.tag")}
                    </span>

                    <h1 className="hero__title">{t("hero.title")}</h1>

                    <p className="hero__subtitle">{t("hero.subtitle")}</p>

                    <div className="hero__actions">
                        <a href="#contact" className="button button--primary">
                            {t("hero.ctaPrimary")}
                        </a>
                        <a href="#services" className="hero__secondary-link">
                            {t("hero.ctaSecondary")}
                        </a>
                    </div>
                </div>

                <div className="hero__visual">
                    <NetworkIllustration />
                </div>
            </div>
        </section>
    );
}

function NetworkIllustration() {
    const { t } = useTranslation();

    return (
        <svg viewBox="0 0 520 440" role="img" aria-label={t("hero.illustrationAlt")}>
            <line x1="150" y1="120" x2="280" y2="220" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
            <line x1="280" y1="220" x2="410" y2="130" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
            <line x1="280" y1="220" x2="240" y2="340" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
            <line x1="240" y1="340" x2="390" y2="330" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
            <line x1="150" y1="120" x2="90" y2="260" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" />
            <line x1="90" y1="260" x2="240" y2="340" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" />
            <line x1="410" y1="130" x2="430" y2="260" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" />
            <line x1="430" y1="260" x2="390" y2="330" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" />

            <circle cx="150" cy="120" r="9" fill="var(--color-teal)" />
            <circle cx="410" cy="130" r="7" fill="var(--color-orange)" />
            <circle cx="280" cy="220" r="13" fill="#ffffff" />
            <circle cx="90" cy="260" r="6" fill="rgba(255,255,255,0.55)" />
            <circle cx="430" cy="260" r="6" fill="rgba(255,255,255,0.55)" />
            <circle cx="240" cy="340" r="8" fill="var(--color-teal)" />
            <circle cx="390" cy="330" r="7" fill="var(--color-orange)" />

            <text x="150" y="95" textAnchor="middle" className="hero__node-label">
                {t("hero.nodeSoftware")}
            </text>
            <text x="410" y="105" textAnchor="middle" className="hero__node-label">
                {t("hero.nodeAI")}
            </text>
            <text x="240" y="378" textAnchor="middle" className="hero__node-label">
                {t("hero.nodeData")}
            </text>
        </svg>
    );
}