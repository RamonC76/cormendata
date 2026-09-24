import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer__inner">
                <div className="footer__columns">
                    <div className="footer__brand-column">
                        <img
                            src={`${import.meta.env.BASE_URL}brand/logo-horizontal-dark.svg`}
                            alt="Trewik"
                            className="footer__logo"
                        />
                        <p className="footer__description">{t("footer.description")}</p>
                    </div>

                    <div className="footer__column">
                        <span className="footer__column-title">{t("footer.contactTitle")}</span>
                        <span className="footer__text">cormendata@gmail.com</span>
                        <span className="footer__text">{t("footer.whatsappLabel")}: +52 55 6065 1350</span>
                        <span className="footer__text">{t("footer.city")}</span>
                    </div>

                    <div className="footer__column">
                        <span className="footer__column-title">{t("footer.linksTitle")}</span>
                        <a href="https://ramonc76.github.io/portafolioweb-frontend/" target="_blank" rel="noreferrer" className="footer__link">
                            {t("footer.portfolioLink")}
                        </a>
                        <a href="https://www.linkedin.com/company/cormendata/" target="_blank" rel="noreferrer" className="footer__link">
                            LinkedIn
                        </a>
                    </div>
                </div>

                <div className="footer__bottom">
                    <span>
                        © {currentYear} CorMen Data. {t("footer.rights")}
                    </span>
                </div>
            </div>
        </footer>
    );
}