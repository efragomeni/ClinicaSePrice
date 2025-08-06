import "./medicos.css";
import { BarraNav } from "../../Components/BarraNavegacion/BarraNav";
import { useNavigate } from "react-router-dom";
import { Boton } from "../../Components/Boton/Boton";

export const Medicos = () => {
  const navigate = useNavigate();

  return (
    <div>
      <BarraNav estilo="empleado-2"></BarraNav>
      <div className="container-medico">
        <div className="container-container-medico">
          <div className="contenedorInput">
            <input type="text" placeholder="Apellido / Nro Legajo" />
            <button onClick={() => navigate("/Medicos2")}>🔎</button>
          </div>
          <div className="contenedorInput">
            <input type="text" placeholder="Especialidad" />
            <button onClick={() => navigate("/Medicos2")}>🔎</button>
          </div>
        </div>
        <Boton estilo="oscuro" texto="Agregar nuevo medico"></Boton>
      </div>
    </div>
  );
};
