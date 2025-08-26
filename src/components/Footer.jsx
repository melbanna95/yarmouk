import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      &copy; {new Date().getFullYear()} {t("alyarmouk")}. {t("madeWithLove")}
    </footer>
  );
}
