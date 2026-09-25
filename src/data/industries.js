// Edita libremente los textos — son un punto de partida.
// La clave (slug) debe coincidir con la ruta usada en el Navbar
// (/industrias/<slug>) y con el archivo de traducciones.

const industries = {
    banca: {
        title: "Banca",
        summary:
            "Integración de sistemas bancarios, automatización de procesos y análisis de datos para decisiones más rápidas y seguras.",
        points: [
            "Integración entre plataformas core, CRM y canales digitales",
            "Automatización de procesos operativos y de cumplimiento",
            "Dashboards de riesgo y desempeño en tiempo real",
        ],
    },
    educacion: {
        title: "Educación",
        summary:
            "Plataformas de gestión escolar, automatización administrativa y analítica de desempeño académico.",
        points: [
            "Sistemas de administración escolar y control de inscripciones",
            "Automatización de reportes de desempeño académico",
            "Portales para padres, alumnos y personal docente",
        ],
    },
    finanzas: {
        title: "Finanzas",
        summary:
            "Modelos de datos financieros, reporteo automatizado y dashboards para toma de decisiones.",
        points: [
            "Modelado y consolidación de información financiera",
            "Automatización de reportes periódicos",
            "Dashboards ejecutivos con indicadores clave",
        ],
    },
    retail: {
        title: "Retail",
        summary:
            "Integración de punto de venta, inventarios y análisis de comportamiento de clientes.",
        points: [
            "Integración de sistemas de punto de venta e inventario",
            "Análisis de comportamiento de compra",
            "Automatización de reabastecimiento y reportes de ventas",
        ],
    },
    seguros: {
        title: "Seguros",
        summary:
            "Automatización de pólizas, siniestros y análisis de riesgo basado en datos.",
        points: [
            "Automatización de emisión y renovación de pólizas",
            "Flujos de gestión de siniestros",
            "Modelos de análisis de riesgo y detección de fraude",
        ],
    },
    "real-estate": {
        title: "Bienes Raíces",
        summary:
            "Gestión de portafolios inmobiliarios, automatización de procesos comerciales y análisis de mercado.",
        points: [
            "Gestión centralizada de portafolios e inventario de propiedades",
            "Automatización de procesos de venta y renta",
            "Análisis de mercado y proyección de precios",
        ],
    },
};

export default industries;
