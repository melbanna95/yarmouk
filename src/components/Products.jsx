import React from "react";
import benzoImg from "../assets/benzo.jpeg";
import pervectinoImg from "../assets/pervectino.jpeg";
import ylockImg from "../assets/ylock.jpeg";
import { useTranslation } from "react-i18next";
const products = (t) => {
  return [
    {
      name: t("benzoName"),
      img: benzoImg,
      desc: t("benzoDesc"),
      link: "https://wa.me/201044302239?text=Quote%20for%20Benzo%20800X",
    },
    {
      name: t("pervectinoName"),
      img: pervectinoImg,
      desc: t("pervectinoDesc"),
      link: "https://wa.me/201044302239?text=Quote%20for%20Pervectino%20800X",
    },
    {
      name: t("ylockName"),
      img: ylockImg,
      desc: t("ylockDesc"),
      link: "https://wa.me/201044302239?text=Quote%20for%20Y-Lock%2050x70",
    },
  ];
};

export default function Products() {
  const { t, i18n } = useTranslation();
  return (
    <section
      id="products"
      className="section"
      style={{ textAlign: i18n.language === "ar" ? "right" : "left" }}>
      <h2>{t("products")}</h2>
      <div className="grid">
        {products(t).map((p) => (
          <div className="card" key={p.name}>
            <img className="product" src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <a
              href={p.link}
              className="btn"
              target="_blank"
              rel="noopener noreferrer">
              {t("orderViaWhatsapp")}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
