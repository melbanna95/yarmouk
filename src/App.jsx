// src/App.jsx
import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Sectors from "./components/Sectors";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function useSmoothScroll() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((a) =>
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
      })
    );
  }, []);
}

export default function App() {
  useSmoothScroll();

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Products />
      <Sectors />
      <Contact />
      <Footer />
    </>
  );
}
