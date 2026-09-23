import { useState } from "react";
import { useTranslation } from "react-i18next";
import { apiUrl } from "../config/api.js";

const CONTACT_EMAIL = "trewik.mexico@gmail.com";
const WHATSAPP_NUMBER = "525560651350";

const INITIAL_FORM_STATE = { name: "", email: "", company: "", message: "" };

export default function ContactSection() {
    const { t } = useTranslation();
    const [formValues, setFormValues] = useState(INITIAL_FORM_STATE);
    const [submissionStatus, setSubmissionStatus] = useState("idle");

    function handleChange(event) {
        const { name, value } = event.target;
        setFormValues((previous) => ({ ...previous, [name]: value }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setSubmissionStatus("sending");

        try {
            const response = await fetch(apiUrl("/api/contact"), {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formValues),
            });

            if (!response.ok) throw new Error("Contact request failed");

            setSubmissionStatus("sent");
            setFormValues(INITIAL_FORM_STATE);
        } catch (error) {
            setSubmissionStatus("error");
        }
    }

    return (
        <section id="contact" className="contact-section">
            <div className="contact-section__glow" aria-hidden="true" />

            <div className="container contact-section__inner">
                <div className="contact-section__copy">
                    <h2 className="contact-section__title">{t("contact.title")}</h2>
                    <p className="contact-section__subtitle">{t("contact.subtitle")}</p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <FormField
                        label={t("contact.nameLabel")}
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                        placeholder={t("contact.namePlaceholder")}
                        required
                    />

                    <div className="contact-form__row">
                        <FormField
                            label={t("contact.emailLabel")}
                            name="email"
                            type="email"
                            value={formValues.email}
                            onChange={handleChange}
                            placeholder={t("contact.emailPlaceholder")}
                            required
                        />
                        <FormField
                            label={t("contact.companyLabel")}
                            name="company"
                            value={formValues.company}
                            onChange={handleChange}
                            placeholder={t("contact.companyPlaceholder")}
                        />
                    </div>

                    <div className="contact-form__field">
                        <label htmlFor="message">{t("contact.messageLabel")}</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formValues.message}
                            onChange={handleChange}
                            placeholder={t("contact.messagePlaceholder")}
                            rows={3}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="button button--primary contact-form__submit"
                        disabled={submissionStatus === "sending"}
                    >
                        {submissionStatus === "sending" ? t("contact.sending") : t("contact.submit")}
                    </button>

                    {submissionStatus === "sent" && (
                        <p className="contact-form__status contact-form__status--success">
                            {t("contact.successMessage")}
                        </p>
                    )}
                    {submissionStatus === "error" && (
                        <p className="contact-form__status contact-form__status--error">
                            {t("contact.errorMessage")}
                        </p>
                    )}

                    <div className="contact-form__divider">
                        <span />
                        <span className="contact-form__divider-text">{t("contact.dividerOr")}</span>
                        <span />
                    </div>



                    <a href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noreferrer"
                    className="button button--whatsapp"
                    >
                    <WhatsAppIcon />
                    {t("contact.whatsappButton")}
                </a>

                <p className="contact-form__alt-contact">
                    {t("contact.altContactPrefix")}{" "}
                    <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </p>
            </form>
        </div>
    </section >
  );
}

function FormField({ label, name, type = "text", value, onChange, placeholder, required }) {
    return (
        <div className="contact-form__field">
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
            />
        </div>
    );
}

function WhatsAppIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#22c55e">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2z" />
        </svg>
    );
}