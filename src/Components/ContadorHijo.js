import React, { memo, useMemo } from "react";

const ContadorHijo = ({ contador, sumar, restar }) => {
  const superNum = useMemo(() => {
    let superN = 0;
    for (let i = 0; i < 1000000000; i++) {
      superN++;
    }

    return superN;
  }, []);
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
      <h3>{superNum}</h3>
    </section>
  );
};

export default memo(ContadorHijo);
