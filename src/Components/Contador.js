import { useState, useCallback } from "react";
import ContadorHijo from "./ContadorHijo";

const Contador = () => {
  const [contador, setContador] = useState(0);
  const [input, setInput] = useState("");
  const sumar = useCallback(() => {
    setContador(contador + 1);
  }, [contador]);
  const restar = useCallback(() => {
    setContador(contador - 1);
  }, [contador]);

  // const sumar = () => setContador(contador + 1);
  // const restar = () => setContador(contador - 1);

  const handleInput = (e) => setInput(e.target.value);

  return (
    <section
      className="contador"
      style={{ border: " thin solid #000", margin: "1rem", padding: "1rem" }}
    >
      <h2>Contador</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{contador}</h3>
      <input type="text" onChange={handleInput} value={input} />
      <ContadorHijo contador={contador} sumar={sumar} restar={restar} />
    </section>
  );
};

export default Contador;
