import { useTranslation } from "react-i18next";
import "../styles/TechStackSection.css";

const CATEGORIES = [
    { key: "backend", items: [".NET", "APIs", "ASP", "Java"] },
    { key: "frontend", items: ["React", "Angular", "HTML", "CSS", "JavaScript"] },
    { key: "cloud", items: ["Azure", "AWS", "OCI"] },
    { key: "databases", items: ["Oracle", "PostgreSQL", "SQL Server"] },
    { key: "aiAnalytics", items: ["LLMs", "Strategy", "Power BI", "Python", "Data Science"] },
];

export default function TechStackSection() {
    const { t } = useTranslation();

    return (
        <section className="tech-stack" id="tech-stack">
            <div className="container">
                <span className="tech-stack__eyebrow">{t("techStack.eyebrow")}</span>
                <h2 className="tech-stack__title">{t("techStack.title")}</h2>

                <div className="tech-stack__grid">
                    {CATEGORIES.map((category) => (
                        <div key={category.key} className="tech-stack__card">
                            <h3 className="tech-stack__card-title">
                                {t(`techStack.categories.${category.key}`)}
                            </h3>
                            <div className="tech-stack__pills">
                                {category.items.map((item) => (
                                    <span key={item} className="tech-stack__pill">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}