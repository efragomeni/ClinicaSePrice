import React from "react";
import "./barraNav.css";
import { Logo } from "../Logo/Logo";
import { Boton } from "../../Components/Boton/Boton";
import { useNavigate } from "react-router-dom";

export const BarraNav = ({ estilo }) => {
  const navigate = useNavigate();
  if (estilo == "paciente-1") {
    return (
      <div className="containerBarraNav">
        <div className="containerLogo">
          <button onClick={navigate("./Autogestion")}>
            <Logo tema="oscuro"></Logo>
          </button>
        </div>
        <div className="containerUsers">
          <button>
            <img src="..\src\assets\icons\users.png" alt="" />
          </button>
          <p>BARTOLO SIMS</p>
        </div>
      </div>
    );
  }
  if (estilo == "paciente-2") {
    return (
      <div className="containerBarraNav">
        <div className="containerLogo">
          <button onClick={() => navigate("/Autogestion")}>
            <Logo tema="oscuro"></Logo>
          </button>
        </div>
        <div className="container-iconos">
          <div className="icono-barra">
            <button
              onClick={() => {
                navigate("/Turno1");
              }}
            >
              <img src="..\src\assets\icons\turnos.png" alt="" />
              <p>Turnos</p>
            </button>
          </div>
          <div className="icono-barra">
            <button>
              <img src="..\src\assets\icons\tramites.png" alt="" />
              <p>Mis tramites</p>
            </button>
          </div>
          <div className="icono-barra">
            <button>
              <img src="..\src\assets\icons\estudios.png" alt="" />
              <p>Mis estudios</p>
            </button>
          </div>
          <div className="icono-barra">
            <button>
              <img src="..\src\assets\icons\cartilla.png" alt="" />
              <p>Cartilla</p>
            </button>
          </div>
        </div>
        <div className="containerUsers">
          <button>
            <img src="..\src\assets\icons\users.png" alt="" />
          </button>
          <p>BARTOLO SIMS</p>
        </div>
      </div>
    );
  }
  if (estilo == "empleado-1") {
    return (
      <div className="containerBarraNav">
        <div className="containerLogo">
          <button onClick={() => navigate("/Gestion")}>
            <Logo tema="oscuro"></Logo>
          </button>
        </div>
        <div className="containerUsers">
          <button>
            <img src="..\src\assets\icons\users.png" alt="" />
          </button>
          <p>Leg. N°: 1001</p>
        </div>
      </div>
    );
  }
  if (estilo == "empleado-2") {
    return (
      <div className="containerBarraNav">
        <div className="containerLogo">
          <button onClick={() => navigate("/Gestion")}>
            <Logo tema="oscuro"></Logo>
          </button>
        </div>
        <div className="container-iconos">
          <div className="icono-barra">
            <button
              onClick={() => {
                navigate("/Turno2");
              }}
            >
              <img src="..\src\assets\icons\turnos.png" alt="" />
              <p>Turnos</p>
            </button>
          </div>
          <div className="icono-barra">
            <button
              onClick={() => {
                navigate("/Medicos");
              }}
            >
              <img src="..\src\assets\icons\medicos.png" alt="" />
              <p>Medicos</p>
            </button>
          </div>
          <div className="icono-barra">
            <button>
              <img src="..\src\assets\icons\estudios.png" alt="" />
              <p>Laboratorio</p>
            </button>
          </div>
          <div className="icono-barra">
            <button>
              <img src="..\src\assets\icons\cartilla.png" alt="" />
              <p>Cartilla</p>
            </button>
          </div>
        </div>
        <div className="containerUsers">
          <button>
            <img src="..\src\assets\icons\users.png" alt="" />
          </button>
          <p>Leg. N°: 1001</p>
        </div>
      </div>
    );
  }
  return (
    <div className="containerBarraNav">
      <div className="containerLogo">
        <Logo tema="oscuro"></Logo>
      </div>
      <div className="">Institucional</div>
      <div className="">Pacientes</div>
      <div className="">Especialidades</div>
      <div className="contenedor_boton">
        <Boton
          estilo="claro"
          texto="MI PORTAL AUTOGESTION"
          onClick={() => {
            navigate("./LoginPacientes");
          }}
        />
      </div>
      {/* <div className="">
        <Boton estilo="oscuro" texto="TURNOS" onClick />
      </div> */}
    </div>
  );
};
