import React from "react";
import "./reprogramaciones.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Boton } from "../../Components/Boton/Boton";

import { BarraNav } from "../../Components/BarraNavegacion/BarraNav";

export const Reprogramaciones = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { appointment } = location.state || {};

  if (!appointment) {
    return <p>No se encontró información del turno.</p>;
  }
  const handleCancelar = () => {
    alert(`Turno cancelado para ${appointment.fecha}`);
    navigate("/Turno1", { state: { from: "reprogramacion" } }); // volver atrás
  };
  const handleVolver = () => {
    navigate(-1);
  };
  const handleReprogramar = () => {
    alert(`Reprogramar turno de ${appointment.especialidad}`);
    navigate("/SeleccionFechas1");
  };
  return (
    <div className="contenedor-contenedor-reprogramaciones">
      <BarraNav estilo="paciente-2"></BarraNav>
      <div className="contenedor-reprogramaciones">
        <h2>Reprogramar / Cancelar Turno</h2>
        <p>
          <strong>Fecha:</strong> {appointment.fecha}
        </p>
        <p>
          <strong>Especialidad:</strong> {appointment.especialidad}
        </p>
        <p>
          <strong>Profesional:</strong> {appointment.profesional}
        </p>
        <p>
          <strong>Motivo:</strong> {appointment.motivo}
        </p>
        <div className="contenedor-botones">
          <Boton estilo="claro" texto="VOLVER" onClick={handleVolver}></Boton>
          <Boton
            estilo="claro"
            texto="CANCELAR TURNO"
            onClick={handleCancelar}
          ></Boton>
          <Boton
            estilo="oscuro"
            texto="REPROGRAMAR TURNO"
            onClick={handleReprogramar}
          ></Boton>
        </div>
      </div>
    </div>
  );
};
