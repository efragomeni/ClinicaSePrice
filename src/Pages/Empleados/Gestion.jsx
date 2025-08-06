import { useNavigate } from "react-router-dom";

import { BarraNav } from "../../Components/BarraNavegacion/BarraNav";

import "./gestion.css";

export const Gestion = () => {
  const navigate = useNavigate();
  return (
    <div>
      <BarraNav estilo="empleado-1"></BarraNav>
       <div className="container-cards-autogestion">
        <div className="cards-autogestion">
          <button onClick={()=>{navigate("/Turno2")}}>
            <img src="..\src\assets\icons\turnos.png" alt="" />
            <p>Turnos</p>
          </button>
        </div>
        <div className="cards-autogestion">
          <button  onClick={()=>{navigate("/Medicos")}}>
            <img src="..\src\assets\icons\medicos.png" alt="" />
            <p>Médicos</p>
          </button>
        </div>
        <div className="cards-autogestion">
          <button  onClick={()=>{navigate("/estudios")}}>
            <img src="..\src\assets\icons\estudios.png" alt="" />
            <p>Laboratorio</p>
          </button>
        </div>
        <div className="cards-autogestion">
          <button  onClick={()=>{navigate("/cartilla")}}>
            <img src="..\src\assets\icons\cartilla.png" alt="" />
            <p>Cartilla</p>
          </button>
        </div>
      </div>
    </div>
  );
};
