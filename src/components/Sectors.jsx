import React from "react";

const sectors = [
  {
    icon: "🔧",
    title: "Construction",
    text: "Structural beams, rebar, steel plates",
  },
  {
    icon: "🚗",
    title: "Automotive",
    text: "Body panels, chassis, engine mounts",
  },
  {
    icon: "🏭",
    title: "Fabrication",
    text: "Machine frames, fixtures, enclosures",
  },
  {
    icon: "⚡",
    title: "Energy",
    text: "Oil & gas pipelines, wind towers, solar frames",
  },
];

export default function Sectors() {
  return (
    <section
      id="sectors"
      className="section"
      style={{ background: "var(--light)" }}>
      <h2>Sectors We Serve</h2>
      <div className="grid">
        {sectors.map((s) => (
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
