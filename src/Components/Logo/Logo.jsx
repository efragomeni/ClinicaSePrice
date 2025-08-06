import React from "react";
import logoClaro from "../../assets/img/logoClaro.png";
import logoOscuro from "../../assets/img/logoOscuro.png";
import "./logo.css";

export const Logo = (props) => {
  const { tema } = props;

  if (tema === "claro") {
    return (
      <div>
        <img className="logo" src={logoClaro} alt="Logo" />
      </div>
    );
  } else {
    return (
      <div>
        <img className="logo" src={logoOscuro} alt="Logo" />
      </div>
    );
  }
};
