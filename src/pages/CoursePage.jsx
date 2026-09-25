import { useParams, Navigate } from "react-router-dom";
import courses from "../data/courses.js";

const WHATSAPP_NUMBER = "525560651350"; // 55 6065 1350 en formato internacional para wa.me

export default function CoursePage() {
    const { slug } = useParams();
    const course = courses[slug];

    if (!course) {
        return <Navigate to="/" replace />;
    }

    const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        `Hola, me interesa el curso de ${course.title}.`
    )}`;

    return (
        <main className="course-page">
            <div className="container course-page__inner">
                <p className="course-page__eyebrow">Cursos</p>
                <h1 className="course-page__title">{course.title}</h1>
                <p className="course-page__summary">{course.summary}</p>

                <div className="course-page__levels">
                    {course.levels.map((level) => (
                        <div className="course-page__level" key={level.name}>
                            <h3>{level.name}</h3>
                            <p>{level.description}</p>
                        </div>
                    ))}
                </div>

                <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="course-page__cta"
                >
                    Informes por WhatsApp · 55 6065 1350
                </a>
            </div>
        </main>
    );
}
