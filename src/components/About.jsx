import React from "react";

export default function About() {
  return (
    <section id="about" className="section">
      <h2>About Alyarmouk</h2>
      <p>
        Founded in Mit-Name, Qalyubia,{" "}
        <strong>Alyarmouk Engineering Industries</strong> is a 100 % Egyptian
        company dedicated to elevating local manufacturing to world-class
        standards. We craft welding tongs, connectors, and accessories that
        combine premium raw materials with the latest production
        techniques—delivering products that rival any import on performance and
        price.
      </p>
      <div className="grid" style={{ marginTop: "2rem", textAlign: "center" }}>
        <div>
          <h3>Mission</h3>
          <p>
            Provide innovative industrial solutions that strengthen the national
            economy and restore confidence in Egyptian-made goods.
          </p>
        </div>
        <div>
          <h3>Vision</h3>
          <p>
            To be the pioneer local brand synonymous with reliability, quality,
            and credibility across the Middle East and Africa.
          </p>
        </div>
      </div>
    </section>
  );
}
