import React, { useEffect } from "react";
import logo from "../assets/yarmook_logo-1.jpeg"; // put the logo here
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();

  // Load saved language from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("yarmouk-language");
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ar")) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";

    // Save to localStorage
    localStorage.setItem("yarmouk-language", newLang);

    i18n.changeLanguage(newLang);
  };

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        gap: "2rem",
        justifyContent: "space-between",
        flexDirection: i18n.language === "ar" ? "row-reverse" : "row",
      }}>
      <img className="logo" src={logo} alt="Alyarmouk Logo" />
      <div
        style={{ display: "flex", alignItems: "center", gap: "2rem", flex: 1 }}>
        <nav
          style={{
            display: "flex",
            flex: 8,
            justifyContent: "space-evenly",
            gap: "2rem",
          }}>
          <a href="#about" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
            {t("about")}
          </a>

          <a
            href="#products"
            style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
            {t("products")}
          </a>
          <a href="#sectors" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
            {t("sectors")}
          </a>
          <a href="#contact" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
            {t("contact")}
          </a>
        </nav>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}>
        <button
          onClick={toggleLanguage}
          style={{
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            fontWeight: "bold",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}>
          {i18n.language === "en" ? "العربية" : "English"}
        </button>
      </div>
    </header>
  );
}
