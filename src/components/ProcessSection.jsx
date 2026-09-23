import { useTranslation } from "react-i18next";
import { processSteps } from "../data/processSteps.js";

export default function ProcessSection() {
    const { t } = useTranslation();

    return (
        <section id="process" className="process-section">
            <div className="container process-section__inner">
                <div className="process-section__intro">
                    <span className="eyebrow process-section__eyebrow">{t("process.eyebrow")}</span>
                    <h2 className="section-heading">{t("process.heading")}</h2>
                </div>

                <ol className="process-steps">
                    {processSteps.map((step) => (
                        <li
                            key={step.id}
                            className={`process-step${step.highlighted ? " process-step--highlighted" : ""}`}
                        >
                            <span className="process-step__number">{step.number}</span>
                            <h3 className="process-step__title">{t(`process.steps.${step.id}.title`)}</h3>
                            <p className="process-step__description">{t(`process.steps.${step.id}.description`)}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}