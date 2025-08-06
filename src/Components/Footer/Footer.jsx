import React from "react";
import "./footer.css";
import { Logo } from "../Logo/Logo";

export const Footer = () => {
  return (
    <div className="containerFooter">
      <div className="logoFooter">
        <Logo tema="claro"></Logo>{" "}
      </div>
      <div className="footer-info">
        <div className="footer-column">
          <h4>Contacto</h4>
          <p>Teléfono: (011) 4000-8900</p>
          <p>Email: info@seprice.com.ar</p>
        </div>
        <div className="footer-column">
          <h4>Horarios</h4>
          <p>Lunes a Viernes: 8:00 - 20:00</p>
          <p>Sábados: 8:00 - 14:00</p>
        </div>
        <div className="footer-column-redes">
          <h4>Redes Sociales</h4>
          <p>Facebook | Instagram | Twitter</p>
        </div>
      </div>
    </div>
  );
};
