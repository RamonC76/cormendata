import { useState } from "react";
import { useTranslation } from "react-i18next";
import { apiUrl } from "../config/api.js";

export default function UseCaseSection() {
    const { t } = useTranslation();

    return (
        <section className="use-case-section">
            <div className="container use-case-section__inner">
                <div className="use-case-section__intro">
                    <span className="eyebrow use-case-section__eyebrow">{t("useCase.eyebrow")}</span>
                    <h2 className="section-heading">{t("useCase.heading")}</h2>
                </div>

                <div className="use-case-grid">
                    <ChatDemo />
                    <CaseStudyDetails />
                </div>
            </div>
        </section>
    );
}

function ChatDemo() {
    const { t } = useTranslation();
    const [messages, setMessages] = useState([{ role: "model", text: t("useCase.initialMessage") }]);
    const [input, setInput] = useState("");
    const [status, setStatus] = useState("idle"); // idle | sending | error

    async function handleSubmit(event) {
        event.preventDefault();

        const userMessage = input.trim();
        if (!userMessage || status === "sending") return;

        const history = messages.map(({ role, text }) => ({ role, text }));

        setMessages((previous) => [...previous, { role: "user", text: userMessage }]);
        setInput("");
        setStatus("sending");

        try {
            const response = await fetch(apiUrl("/api/consulting/chat"), {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMessage, history }),
            });

            if (!response.ok) throw new Error("Chat request failed");

            const data = await response.json();
            setMessages((previous) => [
                ...previous,
                { role: "model", text: data.reply ?? t("useCase.fallbackReply") },
            ]);
            setStatus("idle");
        } catch (error) {
            setMessages((previous) => [
                ...previous,
                { role: "model", text: t("useCase.errorReply") },
            ]);
            setStatus("error");
        }
    }

    return (
        <div className="chat-demo">
            <div className="chat-demo__header">
                <span className="chat-demo__status-dot" />
                <span>{t("useCase.chatHeaderLabel")}</span>
            </div>

            <div className="chat-demo__body">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`chat-bubble chat-bubble--${message.role === "user" ? "user" : "assistant"}`}
                    >
                        {message.text}
                    </div>
                ))}
                {status === "sending" && (
                    <div className="chat-bubble chat-bubble--assistant chat-bubble--pending">
                        {t("useCase.pendingLabel")}
                    </div>
                )}
            </div>

            <form className="chat-demo__form" onSubmit={handleSubmit}>
                <label htmlFor="chat-demo-input" className="chat-demo__input-label">
                    {t("useCase.inputLabel")}
                </label>
                <div className="chat-demo__input-row">
                    <input
                        id="chat-demo-input"
                        type="text"
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                        placeholder={t("useCase.inputPlaceholder")}
                        disabled={status === "sending"}
                    />
                    <button type="submit" disabled={status === "sending" || !input.trim()}>
                        {t("useCase.sendButton")}
                    </button>
                </div>
            </form>

            <p className="chat-demo__caption">{t("useCase.caption")}</p>
        </div>
    );
}

function CaseStudyDetails() {
    const { t } = useTranslation();

    return (
        <div className="case-study">
            <CaseStudyCard
                label={t("useCase.caseStudy.challengeLabel")}
                text={t("useCase.caseStudy.challengeText")}
                accent="orange"
            />
            <CaseStudyCard
                label={t("useCase.caseStudy.solutionLabel")}
                text={t("useCase.caseStudy.solutionText")}
                accent="teal"
            />
            <CaseStudyCard
                label={t("useCase.caseStudy.resultLabel")}
                text={t("useCase.caseStudy.resultText")}
                accent="navy"
            />
        </div>
    );
}

function CaseStudyCard({ label, text, accent }) {
    return (
        <div className="case-study-card">
            <span className={`case-study-card__label case-study-card__label--${accent}`}>{label}</span>
            <p className="case-study-card__text">{text}</p>
        </div>
    );
}