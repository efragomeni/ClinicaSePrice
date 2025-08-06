import React from "react";
// import { Button } from "react";

import "./boton.css";

export const Boton = ({ texto, estilo, onClick }) => {
  return (
    <div>
      <button className={estilo} onClick={onClick}>
        {texto}
      </button>
    </div>
  );
};
