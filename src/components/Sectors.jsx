import React from "react";
import { useTranslation } from "react-i18next";

const sectors = (t) => {
  return [
    {
      icon: "🔧",
      title: t("construction"),
      text: t("constructionText"),
    },
    {
      icon: "🚗",
      title: t("automotive"),
      text: t("automotiveText"),
    },
    {
      icon: "🏭",
      title: t("fabrication"),
      text: t("fabricationText"),
    },
    {
      icon: "⚡",
      title: t("energy"),
      text: t("energyText"),
    },
  ];
};

export default function Sectors() {
  const { t } = useTranslation();
  return (
    <section
      id="sectors"
      className="section"
      style={{ background: "var(--light)" }}>
      <h2>Sectors We Serve</h2>
      <div className="grid">
        {sectors(t).map((s) => (
          <div key={s.title}>
            <h3>
              {s.icon} {s.title}
            </h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
