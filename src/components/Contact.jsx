import React from "react";
import banner from "../assets/banner-img-6-scaled.jpg";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section
      id="contact"
      className="section"
      style={{
        background: `url(${banner}) center/cover`,
        color: "#fff",
        position: "relative",
      }}>
      <div
        style={{
          position: "relative",
          zIndex: 2,
          background: "rgba(0,0,0,.55)",
          padding: "4rem 1rem",
          textAlign: "center",
        }}>
        <h2 style={{ color: "#fff" }}>{t("contact")}</h2>
        <p>{t("mitNama")}</p>
        <a
          href="https://wa.me/201044302239"
          className="btn"
          style={{ fontSize: "1.2rem" }}
          target="_blank"
          rel="noopener noreferrer">
          {t("whatsapp")}
        </a>
      </div>
    </section>
  );
}
