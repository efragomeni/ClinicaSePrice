import "./modal.css";
import { useEffect, useState } from "react";
import { Boton } from "../Boton/Boton";
import { useNavigate } from "react-router-dom";

export const Modal = ({ isOpen, onClose, estilo }) => {
  const navigate = useNavigate();
  const [datos, setDatos] = useState([]);
  const [especialidadSeleccionada, setEspecialidadSeleccionada] = useState("");
  const [medicosDisponibles, setMedicosDisponibles] = useState([]);

  const manejarBuscar = () => {
    if (estilo === "tomaTurnoEmpleado") {
      navigate("/SeleccionFechas2");
    } else {
      navigate("/SeleccionFechas1");
    }
  };
  useEffect(() => {
    fetch("././src/data/turnos.json")
      .then((res) => res.json())
      .then((data) => setDatos(data.turnos))
      .catch((err) => console.error("Error al cargar datos:", err));
  }, []);

  const handleEspecialidadChange = (e) => {
    const especialidad = e.target.value;
    setEspecialidadSeleccionada(especialidad);

    const turno = datos.find((t) => t.especialidad === especialidad);
    setMedicosDisponibles(turno ? turno.medicos : []);
  };
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="modal">
        <h2>Seleccionar turno</h2>
        <div className="selector">
          <label>Especialidad:</label>
          <select
            value={especialidadSeleccionada}
            onChange={handleEspecialidadChange}
          >
            <option value="">-- Seleccionar especialidad --</option>
            {datos.map((turno) => (
              <option key={turno.id} value={turno.especialidad}>
                {turno.especialidad}
              </option>
            ))}
          </select>
        </div>

        {medicosDisponibles.length > 0 && (
          <>
            <div className="selector">
              <label>Médico:</label>
              <select>
                <option value="">-- Seleccionar médico --</option>
                {medicosDisponibles.map((medico, index) => (
                  <option key={index} value={medico.nombre}>
                    {medico.nombre}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}
        <div className="contenedor-botones-modal">
          <Boton estilo="oscuro" texto="BUSCAR" onClick={manejarBuscar}>
            Buscar
          </Boton>
          <Boton estilo="claro" texto="VOLVER" onClick={onClose}></Boton>
        </div>
      </div>
    </div>
  );
};
