import React from "react";
import logo from "../assets/yarmook_logo-1.jpeg"; // put the logo here

export default function Header() {
  return (
    <header style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
      <img className="logo" src={logo} alt="Alyarmouk Logo" />
      <nav style={{ flex: 1, display: "flex", justifyContent: "space-evenly" }}>
        <a href="#about" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
          About
        </a>
        <a href="#products" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
          Products
        </a>
        <a href="#sectors" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
          Sectors
        </a>
        <a href="#contact" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
          Contact
        </a>
      </nav>
    </header>
  );
}
