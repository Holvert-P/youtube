import React, { memo } from "react";

const ContadorHijo = ({ contador, sumar, restar }) => {
  console.log("hijo contador se renderiza");
  return (
    <section
      style={{ border: " thin solid #000", margin: "1rem", padding: "1rem" }}
    >
      <h2>Contador Hijo</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{contador}</h3>
    </section>
  );
};

export default memo(ContadorHijo);
