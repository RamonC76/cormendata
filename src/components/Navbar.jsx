import { useState } from "react";
import { useTranslation } from "react-i18next";

const NAV_LINKS = [
    { href: "#services", key: "services" },
    { href: "#process", key: "process" },
    { href: "#contact", key: "contact" },
];

const LANGUAGES = [
    { code: "es", label: "ES" },
    { code: "en", label: "EN" },
    { code: "fr", label: "FR" },
];

export default function Navbar() {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function closeMenu() {
        setIsMenuOpen(false);
    }

    function handleBrandClick(event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        closeMenu();
    }

    function changeLanguage(code) {
        i18n.changeLanguage(code);
    }

    return (
        <header className="navbar">
            <div className="navbar__inner container">
                <a href="#" className="navbar__brand" onClick={handleBrandClick}>
                    <img
                        src={`${import.meta.env.BASE_URL}brand/logo-horizontal-dark.svg`}
                        alt="Trewik"
                        className="navbar__logo"
                    />
                </a>

                <nav className={`navbar__links ${isMenuOpen ? "navbar__links--open" : ""}`}>
                    {NAV_LINKS.map((link) => (
                        <a key={link.href} href={link.href} className="navbar__link" onClick={closeMenu}>
                            {t(`nav.${link.key}`)}
                        </a>
                    ))}
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