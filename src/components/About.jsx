import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t, i18n } = useTranslation();
  return (
    <section
      id="about"
      className="section"
      style={{ textAlign: i18n.language === "ar" ? "right" : "left" }}>
      <h2>{t("about")}</h2>
      <p>
        <strong style={{ color: "var(--red)" }}>{t("alyarmouk")}</strong>
        <br />
        <span dangerouslySetInnerHTML={{ __html: t("aboutText") }} />
      </p>
      <div className="grid" style={{ marginTop: "2rem", textAlign: "center" }}>
        <div>
          <h3>{t("mission")}</h3>
          <p>{t("missionText")}</p>
        </div>
        <div>
          <h3>{t("vision")}</h3>
          <p>{t("visionText")}</p>
        </div>
      </div>
    </section>
  );
}
