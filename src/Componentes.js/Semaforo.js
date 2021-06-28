import React, { useState } from "react";
import "./styles.css";

const Semaforo = () => {
  const [color, setColor] = useState({
    colorrojo: "rojo ",
    coloramarillo: "verde",
    colorverde: "amarillo",
  });

  const cambiarcolora = () => {
    setColor((prevState) => {
      return {
        ...prevState,
        colorrojo: "rojoa",
        coloramarillo: "amarillo",
        colorverde: "verde",
      };
    });
  };
  const cambiarcolorb = () => {
    setColor((prevState) => {
      return {
        ...prevState,
        coloramarillo: "amarilloa",
        colorrojo: "rojo",
        colorverde: "verde",
      };
    });
  };
  const cambiarcolorc = () => {
    setColor((prevState) => {
      return {
        ...prevState,
        colorverde: "verdea",
        coloramarillo: "amarillo",
        colorrojo: "rojo",
      };
    });
  };

  return (

    <div class="container">
      <ul>
        <li>
          <button onClick={cambiarcolora} className={color.colorrojo}>

          </button>
        </li>
        <li>
          <button onClick={cambiarcolorb} className={color.coloramarillo}>

          </button>
        </li>
        <li>
          <button onClick={cambiarcolorc} className={color.colorverde}>

          </button>
        </li>
      </ul>
    </div>
  );
};

export default Semaforo;
