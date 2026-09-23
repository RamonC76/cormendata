import { useTranslation } from "react-i18next";
import "../styles/MissionVisionSection.css";

export default function MissionVisionSection() {
    const { t } = useTranslation();

    return (
        <section className="mission-vision" id="mission-vision">
            <div className="container mission-vision__grid">
                <div className="mission-vision__card">
                    <span className="mission-vision__label">{t("missionVision.missionLabel")}</span>
                    <p className="mission-vision__text">{t("missionVision.missionText")}</p>
                </div>

                <div className="mission-vision__card">
                    <span className="mission-vision__label">{t("missionVision.visionLabel")}</span>
                    <p className="mission-vision__text">{t("missionVision.visionText")}</p>
                </div>
            </div>
        </section>
    );
}