import React from "react";
import heroImg from "../assets/hero.jpg"; // replace with real PNG
import heroImgAr from "../assets/heroAR.jpg";
import { useTranslation } from "react-i18next";
export default function Hero() {
  const { i18n } = useTranslation();
  return (
    <img
      className="hero-img"
      src={i18n.language === "ar" ? heroImgAr : heroImg}
      alt="Hero"
    />
  );
}
