import React from "react";
import "./Button.css";

export const Button = ({ texto, color, funcion }) => {
  return (
    <button onClick={funcion} className="boton" style={{ background: color }}>
      {texto}
    </button>
  );
};
