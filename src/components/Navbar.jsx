import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

const NAV_LINKS = [
    { to: "/#services", key: "services" },
    { to: "/#process", key: "process" },
    {
        key: "industries",
        children: [
            { to: "/industrias/banca", key: "industriesBanca" },
            { to: "/industrias/educacion", key: "industriesEducacion" },
            { to: "/industrias/finanzas", key: "industriesFinanzas" },
            { to: "/industrias/retail", key: "industriesRetail" },
            { to: "/industrias/seguros", key: "industriesSeguros" },
            { to: "/industrias/real-estate", key: "industriesRealEstate" },
        ],
    },
    {
        key: "courses",
        children: [
            { to: "/cursos/excel", key: "coursesExcel" },
            { to: "/cursos/sql", key: "coursesSQL" },
            { to: "/cursos/python", key: "coursesPython" },
            { to: "/cursos/ia-negocios", key: "coursesIA" },
        ],
    },
    { to: "/#contact", key: "contact" },
];

const LANGUAGES = [
    { code: "es", label: "ES" },
    { code: "en", label: "EN" },
    { code: "fr", label: "FR" },
];

export default function Navbar() {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const navRef = useRef(null);

    function closeMenu() {
        setIsMenuOpen(false);
        setOpenDropdown(null);
    }

    function toggleDropdown(key) {
        setOpenDropdown((current) => (current === key ? null : key));
    }

    function handleBrandClick(event) {
        event.preventDefault();
        navigate("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
        closeMenu();
    }

    function changeLanguage(code) {
        i18n.changeLanguage(code);
    }

    // Cierra el desplegable si se hace clic fuera del menú
    useEffect(() => {
        function handleClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setOpenDropdown(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="navbar">
            <div className="navbar__inner container">
                <a href="/" className="navbar__brand" onClick={handleBrandClick}>
                    <img
                        src={`${import.meta.env.BASE_URL}brand/logo-horizontal-dark.svg`}
                        alt="CorMen Data"
                        className="navbar__logo"
                    />
                </a>

                <nav
                    ref={navRef}
                    className={`navbar__links ${isMenuOpen ? "navbar__links--open" : ""}`}
                >
                    {NAV_LINKS.map((link) => {
                        if (link.children) {
                            const isOpen = openDropdown === link.key;
                            return (
                                <div
                                    key={link.key}
                                    className={`navbar__dropdown ${isOpen ? "navbar__dropdown--open" : ""}`}
                                >
                                    <button
                                        type="button"
                                        className="navbar__link navbar__dropdown-toggle"
                                        aria-expanded={isOpen}
                                        onClick={() => toggleDropdown(link.key)}
                                    >
                                        {t(`nav.${link.key}`)}
                                        <span className="navbar__dropdown-caret" aria-hidden="true" />
                                    </button>
                                    <div className="navbar__dropdown-menu">
                                        {link.children.map((child) => (
                                            <Link
                                                key={child.to}
                                                to={child.to}
                                                className="navbar__dropdown-item"
                                                onClick={closeMenu}
                                            >
                                                {t(`nav.${child.key}`)}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <Link
                                key={link.to}
                                to={link.to}
                                className="navbar__link"
                                onClick={closeMenu}
                            >
                                {t(`nav.${link.key}`)}
                            </Link>
                        );
                    })}

                    <div className="navbar__lang">
                        {LANGUAGES.map((lang) => (
                            <button
                                key={lang.code}
                                type="button"
                                className={`navbar__lang-button ${i18n.language === lang.code ? "navbar__lang-button--active" : ""}`}
                                onClick={() => changeLanguage(lang.code)}
                            >
                                {lang.label}
                            </button>
                        ))}
                    </div>
                </nav>

                <button
                    type="button"
                    className="navbar__toggle"
                    aria-expanded={isMenuOpen}
                    aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                    onClick={() => setIsMenuOpen((open) => !open)}
                >
                    <span className="navbar__toggle-bar" />
                    <span className="navbar__toggle-bar" />
                    <span className="navbar__toggle-bar" />
                </button>
            </div>
        </header>
    );
}
