import { Boton } from "../../Components/Boton/Boton";
import "./Turno2.css";
import { useNavigate } from "react-router-dom";
import { BarraNav } from "../../Components/BarraNavegacion/BarraNav";

export const Turno2 = () => {
  const navigate = useNavigate();
  return (
    <>
      <BarraNav estilo="empleado-2"></BarraNav>
      <div className="container-turno2">
        <div className="container-container-turno2">
          <div className="contenedorInput">
            <input type="text" placeholder="Apellido o DNI" />
            <button onClick={() => navigate("/Turno3")}>🔎</button>
          </div>
          <Boton estilo="oscuro" texto="Agregar nuevo paciente"></Boton>
        </div>
      </div>
    </>
  );
};
