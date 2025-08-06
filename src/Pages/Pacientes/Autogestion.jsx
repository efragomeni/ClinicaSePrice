import { useNavigate } from "react-router-dom";

import { BarraNav } from "../../Components/BarraNavegacion/BarraNav";
import "./autogestion.css";


export const Autogestion = () => {
  const navigate = useNavigate();
  return (
    <div>
      <BarraNav estilo="paciente-1"></BarraNav>
      <div className="container-cards-autogestion">
        <div className="cards-autogestion">
          <button onClick={()=>{navigate("/Turno1")}}>
            <img src="..\src\assets\icons\turnos.png" alt="" />
            <p>Turnos</p>
          </button>
        </div>
        <div className="cards-autogestion">
          <button  onClick={()=>{navigate("/tramites")}}>
            <img src="..\src\assets\icons\tramites.png" alt="" />
            <p>Mis tramites</p>
          </button>
        </div>
        <div className="cards-autogestion">
          <button  onClick={()=>{navigate("/estudios")}}>
            <img src="..\src\assets\icons\estudios.png" alt="" />
            <p>Mis estudios</p>
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
