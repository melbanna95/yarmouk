import React, { useEffect, useState } from "react";
import logo from "../assets/yarmook_logo-1.jpeg"; // put the logo here
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Load saved language from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("yarmouk-language");
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ar")) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  // Set document direction based on language
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";

    // Save to localStorage
    localStorage.setItem("yarmouk-language", newLang);

    i18n.changeLanguage(newLang);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        gap: "2rem",
        justifyContent: "space-between",
        flexDirection: i18n.language === "ar" ? "row-reverse" : "row",
        position: "relative",
      }}>
      <img className="logo" src={logo} alt="Alyarmouk Logo" />
      <div
        style={{ display: "flex", alignItems: "center", gap: "2rem", flex: 1 }}>
        <nav
          className={`nav-menu ${isMobileMenuOpen ? "nav-menu-open" : ""}`}
          style={{
            display: "flex",
            flex: 8,
            justifyContent: "space-evenly",
            gap: "2rem",
          }}>
          <a
            href="#about"
            style={{ fontWeight: "bold", fontSize: "1.2rem" }}
            onClick={closeMobileMenu}>
            {t("about")}
          </a>

          <a
            href="#products"
            style={{ fontWeight: "bold", fontSize: "1.2rem" }}
            onClick={closeMobileMenu}>
            {t("products")}
          </a>
          <a
            href="#sectors"
            style={{ fontWeight: "bold", fontSize: "1.2rem" }}
            onClick={closeMobileMenu}>
            {t("sectors")}
          </a>
          <a
            href="#contact"
            style={{ fontWeight: "bold", fontSize: "1.2rem" }}
            onClick={closeMobileMenu}>
            {t("contact")}
          </a>
        </nav>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "1rem",
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

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          style={{
            display: "none",
            flexDirection: "column",
            justifyContent: "space-around",
            width: "2rem",
            height: "2rem",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 0,
            zIndex: 10,
          }}>
          <span
            className={`hamburger-line ${isMobileMenuOpen ? "open" : ""}`}
            style={{
              width: "2rem",
              height: "0.25rem",
              backgroundColor: "#000",
              borderRadius: "10px",
              transition: "all 0.3s linear",
              transformOrigin: "1px",
            }}></span>
          <span
            className={`hamburger-line ${isMobileMenuOpen ? "open" : ""}`}
            style={{
              width: "2rem",
              height: "0.25rem",
              backgroundColor: "#000",
              borderRadius: "10px",
              transition: "all 0.3s linear",
              transformOrigin: "1px",
            }}></span>
          <span
            className={`hamburger-line ${isMobileMenuOpen ? "open" : ""}`}
            style={{
              width: "2rem",
              height: "0.25rem",
              backgroundColor: "#000",
              borderRadius: "10px",
              transition: "all 0.3s linear",
              transformOrigin: "1px",
            }}></span>
        </button>
      </div>
    </header>
  );
}
