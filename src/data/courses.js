// Igual que industries.js: edita libremente y agrega más cursos
// cuando estén listos (recuerda también añadirlos al Navbar).

const courses = {
    excel: {
        title: "Excel & Google Sheets",
        summary: "Domina las hojas de cálculo para tu trabajo o negocio.",
        levels: [
            {
                name: "Básico",
                description:
                    "Fórmulas esenciales, formato y organización de datos.",
            },
            {
                name: "Intermedio",
                description:
                    "Tablas dinámicas, funciones lógicas y validación de datos.",
            },
            {
                name: "Avanzado",
                description:
                    "Automatización, Power Query y análisis de datos avanzado.",
            },
        ],
    },
    sql: {
        title: "SQL / Bases de Datos",
        summary: "Aprende a consultar, organizar y modelar información en bases de datos relacionales.",
        levels: [
            {
                name: "Básico",
                description:
                    "Consultas SELECT, filtros, ordenamiento y fundamentos de tablas relacionales.",
            },
            {
                name: "Intermedio",
                description:
                    "JOINs, subconsultas, funciones de agregación y diseño básico de esquemas.",
            },
            {
                name: "Avanzado",
                description:
                    "Optimización de consultas, procedimientos almacenados y modelado de bases de datos para producción.",
            },
        ],
    },
    python: {
        title: "Python para Análisis de Datos",
        summary: "Usa Python para limpiar, analizar y automatizar el trabajo con datos.",
        levels: [
            {
                name: "Básico",
                description:
                    "Sintaxis de Python, estructuras de datos y manipulación con pandas.",
            },
            {
                name: "Intermedio",
                description:
                    "Limpieza y transformación de datos, visualización con matplotlib y seaborn.",
            },
            {
                name: "Avanzado",
                description:
                    "Automatización de reportes, integración con APIs y flujos de análisis reproducibles.",
            },
        ],
    },
    "ia-negocios": {
        title: "IA Aplicada a Negocios",
        summary: "Aplica inteligencia artificial de forma práctica a procesos y decisiones de negocio.",
        levels: [
            {
                name: "Básico",
                description:
                    "Fundamentos de inteligencia artificial y casos de uso prácticos para procesos de negocio.",
            },
            {
                name: "Intermedio",
                description:
                    "Herramientas de IA generativa para automatizar tareas y apoyar la toma de decisiones.",
            },
            {
                name: "Avanzado",
                description:
                    "Diseño de flujos de automatización con IA integrados a los sistemas y datos de la empresa.",
            },
        ],
    },
};

export default courses;
