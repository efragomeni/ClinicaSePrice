import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

import { Boton } from "../../Components/Boton/Boton";

export const Login = () => {
  const navigate = useNavigate();
  const [verPassword, setVerPassword] = useState(false);
  const manejarLogin = () => {
    // Acá validar usuario/contraseña .... ponele
    navigate("/Autogestion");
  };

  const toggleVerPassword = () => {
    setVerPassword(!verPassword);
  };
  return (
    <div className="container-login">
      <div className="subcontainer-login">
        <div className="container-inputs">
          <div className="inputs">
            <label htmlFor="">Usuario</label>
            <input type="text" placeholder="DNI" />
          </div>
          <div className="inputs">
            <label htmlFor="">Contraseña</label>
            <div className="password-container">
              <input
                placeholder="Contraseña"
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
        </div>

        <Boton texto="INGRESAR" estilo="claro" onClick={manejarLogin}></Boton>
        <p>
          ¿Te olvidaste tu contraseña?, <a href="">hace click acá</a>
        </p>
      </div>
    </div>
  );
};
