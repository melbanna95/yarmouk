import React from "react";
import benzoImg from "../assets/benzo.jpeg";
import pervectinoImg from "../assets/pervectino.jpeg";
import ylockImg from "../assets/ylock.jpeg";

const products = [
  {
    name: "Benzo 800X",
    img: benzoImg,
    desc: "Heavy-duty welding tong, 800 A, copper jaw, reinforced handle. Ideal for construction & steelwork.",
    link: "https://wa.me/201044302239?text=Quote%20for%20Benzo%20800X",
  },
  {
    name: "Pervectino 800X",
    img: pervectinoImg,
    desc: "Precision welding tong, 800 A, ergonomic heat-resistant handle. Perfect for automotive & light fabrication.",
    link: "https://wa.me/201044302239?text=Quote%20for%20Pervectino%20800X",
  },
  {
    name: "Y-Lock 50×70",
    img: ylockImg,
    desc: "Universal brass welding plug, 50×70 mm, hex grip, lock-tight screw. Compatible with all major holders.",
    link: "https://wa.me/201044302239?text=Quote%20for%20Y-Lock%2050x70",
  },
];

export default function Products() {
  return (
    <section id="products" className="section">
      <h2>Our Products</h2>
      <div className="grid">
        {products.map((p) => (
          <div className="card" key={p.name}>
            <img className="product" src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <a
              href={p.link}
              className="btn"
              target="_blank"
              rel="noopener noreferrer">
              Order via WhatsApp
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
