import { useState } from "react";
import "./LoginEm.css";
import { useNavigate } from "react-router-dom";

import { Boton } from "../../Components/Boton/Boton";

export const LoginEm = () => {
  const navigate = useNavigate();
  const [verPassword, setVerPassword] = useState(false);
  const manejarLogin = () => {
    // Acá validar usuario/contraseña .... ponele
    navigate("/Gestion");
  };

  const toggleVerPassword = () => {
    setVerPassword(!verPassword);
  };
  return (
    <div className="container-container-login">
      <div className="container-login-emp">
        <div className="inputs">
          <label htmlFor="">Usuario</label>
          <input type="text" placeholder="Legajo nro" />
        </div>
        <div className="inputs">
          <label htmlFor="">Contraseña</label>
          <div className="password-container">
            <input
              placeholder="*****"
              type={verPassword ? "text" : "password"}
            />
            <button
              type="button"
              className="ver-password-btn"
              onClick={toggleVerPassword}
            >
              {verPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>
        <Boton texto="INGRESAR" estilo="claro" onClick={manejarLogin}></Boton>
        <p>
          ¿Te olvidaste tu contraseña?, <a href="">hace click acá</a>
        </p>
      </div>
    </div>
  );
};
