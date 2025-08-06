import { BarraNav } from "../../Components/BarraNavegacion/BarraNav";
import { Boton } from "../../Components/Boton/Boton";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import "./medicos2.css";

export const Medicos2 = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCobertura, setSelectedCobertura] = useState("Todos");
  const [showModal, setShowModal] = useState(false);
  const [selectedTurno, setSelectedTurno] = useState(null);
  const [actionType, setActionType] = useState("");

  useEffect(() => {
    // Simular carga de datos desde JSON
    const loadData = async () => {
      try {
        // En un proyecto real, esto sería: const response = await fetch('/data/turnos.json')
        const response = await fetch("/data/turnos_medico.json");
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error("Error loading data:", error);
        // Datos de fallback para la demo
        setData({
          medico: {
            nombre: "Enrique Seprok",
            dni: "8.951.384",
            matricula: "9001",
            especialidad: "Clinica",
          },
          turnos: [
            {
              id: 1,
              fecha: "10/06/2025",
              hora: "10:00",
              paciente: {
                nombre: "María González",
                dni: "35.123.456",
                telefono: "11-5555-1234",
              },
              servicio: "Consulta General",
              codigo: "CG001",
              precio: 15000,
              duracion: "30 min",
              cobertura: {
                tipo: "Obra Social",
                nombre: "OSDE",
                plan: "210",
                copago: 3000,
              },
              estado: "confirmado",
            },
            {
              id: 2,
              fecha: "10/06/2025",
              hora: "10:45",
              paciente: {
                nombre: "Carlos Rodríguez",
                dni: "28.987.654",
                telefono: "11-5555-5678",
              },
              servicio: "Control Post-Operatorio",
              codigo: "CPO007",
              precio: 14000,
              duracion: "25 min",
              cobertura: {
                tipo: "Particular",
                nombre: null,
                plan: null,
                copago: 14000,
              },
              estado: "confirmado",
            },
            {
              id: 3,
              fecha: "10/06/2025",
              hora: "11:15",
              paciente: {
                nombre: "Ana Martínez",
                dni: "42.456.789",
                telefono: "11-5555-9012",
              },
              servicio: "Electrocardiograma",
              codigo: "ECG003",
              precio: 8000,
              duracion: "15 min",
              cobertura: {
                tipo: "Prepaga",
                nombre: "Swiss Medical",
                plan: "SMG20",
                copago: 2000,
              },
              estado: "confirmado",
            },
            {
              id: 4,
              fecha: "10/06/2025",
              hora: "11:50",
              paciente: {
                nombre: "Roberto Silva",
                dni: "31.654.321",
                telefono: "11-5555-3456",
              },
              servicio: "Consulta de Seguimiento",
              codigo: "CS002",
              precio: 12000,
              duracion: "20 min",
              cobertura: {
                tipo: "Obra Social",
                nombre: "IOMA",
                plan: "Básico",
                copago: 2500,
              },
              estado: "confirmado",
            },
          ],
        });
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Cargando turnos...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="error-container">
        <p>Error al cargar los datos</p>
      </div>
    );
  }

  const coberturaTypes = [
    "Todos",
    ...new Set(data.turnos.map((item) => item.cobertura.tipo)),
  ];

  const filteredTurnos =
    selectedCobertura === "Todos"
      ? data.turnos
      : data.turnos.filter((item) => item.cobertura.tipo === selectedCobertura);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAction = (turno, action) => {
    setSelectedTurno(turno);
    setActionType(action);
    setShowModal(true);
  };

  const handleConfirmAction = () => {
    console.log(`${actionType} turno:`, selectedTurno);

    setShowModal(false);
    setSelectedTurno(null);
    if (actionType === "Reprogramar") {
      navigate("/SeleccionFechas2");
    } else if (actionType === "Cancelar") {
      alert("Turno cancelado exitosamente.");
      navigate("/Medicos");
    }
    setActionType("");
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTurno(null);
    setActionType("");
  };

  const getCoberturaDisplay = (cobertura) => {
    if (cobertura.tipo === "Particular") {
      return (
        <div className="cobertura-info">
          <span className="cobertura-tipo particular">Particular</span>
          <span className="cobertura-monto">
            {formatPrice(cobertura.copago)}
          </span>
        </div>
      );
    }

    return (
      <div className="cobertura-info">
        <span
          className={`cobertura-tipo ${cobertura.tipo
            .toLowerCase()
            .replace(" ", "-")}`}
        >
          {cobertura.tipo}
        </span>
        <span className="cobertura-nombre">{cobertura.nombre}</span>
        <span className="cobertura-plan">{cobertura.plan}</span>
        <span className="cobertura-copago">
          Copago: {formatPrice(cobertura.copago)}
        </span>
      </div>
    );
  };

  return (
    <>
      <BarraNav estilo="empleado-2"></BarraNav>
      <div className="turnos-container">
        {/* Header con información del médico */}
        <div className="doctor-info">
          <div className="info-row">
            <div className="info-item">
              <span className="info-label">Médico</span>
              <span className="info-value">{data.medico.nombre}</span>
            </div>
            <div className="info-item">
              <span className="info-label">DNI</span>
              <span className="info-value">{data.medico.dni}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Matrícula Nro</span>
              <span className="info-value">{data.medico.matricula}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Especialidad</span>
              <span className="info-value">{data.medico.especialidad}</span>
            </div>
          </div>
        </div>

        {/* Título y controles */}
        <div className="section-header">
          <h2 className="section-title">Próximos Turnos</h2>
          <div className="controls">
            <select
              className="cobertura-filter"
              value={selectedCobertura}
              onChange={(e) => setSelectedCobertura(e.target.value)}
            >
              {coberturaTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Tabla de turnos */}
        <div className="table-container">
          <table className="turnos-table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Paciente</th>
                <th>Servicio</th>
                <th>Cobertura</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredTurnos.map((turno) => (
                <tr key={turno.id}>
                  <td className="fecha-cell">{turno.fecha}</td>
                  <td className="hora-cell">{turno.hora}</td>
                  <td className="paciente-cell">
                    <div className="paciente-info">
                      <span className="paciente-nombre">
                        {turno.paciente.nombre}
                      </span>
                      <span className="paciente-dni">
                        DNI: {turno.paciente.dni}
                      </span>
                    </div>
                  </td>
                  <td className="servicio-cell">
                    <div className="servicio-info">
                      <span className="servicio-nombre">{turno.servicio}</span>
                      <span className="servicio-codigo">{turno.codigo}</span>
                      <span className="servicio-duracion">
                        {turno.duracion}
                      </span>
                    </div>
                  </td>
                  <td className="cobertura-cell">
                    {getCoberturaDisplay(turno.cobertura)}
                  </td>
                  <td className="acciones-cell">
                    <div className="action-buttons">
                      <button
                        className="action-btn reprogramar"
                        onClick={() => handleAction(turno, "Reprogramar")}
                        title="Reprogramar turno"
                      >
                        Reprogramar
                      </button>
                      <button
                        className="action-btn cancelar"
                        onClick={() => handleAction(turno, "Cancelar")}
                        title="Cancelar turno"
                      >
                        Cancelar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer con estadísticas */}
        <div className="table-footer">
          <div className="stats">
            <span className="stat-item">
              Total de turnos: <strong>{filteredTurnos.length}</strong>
            </span>
            <span className="stat-item">
              Ingresos estimados:{" "}
              <strong>
                {formatPrice(
                  filteredTurnos.reduce(
                    (sum, turno) => sum + turno.cobertura.copago,
                    0
                  )
                )}
              </strong>
            </span>
          </div>
        </div>

        {/* Botones de navegación */}
        <div className="navigation-buttons">
          <Boton estilo="claro" texto="Datos personales"></Boton>
          <Boton
            estilo="oscuro"
            texto="Honorarios"
            onClick={() => {
              navigate("/Medicos_honorarios");
            }}
          ></Boton>
        </div>

        {/* Modal de confirmación */}
        {showModal && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>{actionType} Turno</h3>
                <button className="modal-close" onClick={handleCloseModal}>
                  ×
                </button>
              </div>
              <div className="modal-body">
                <p>
                  ¿Está seguro que desea {actionType.toLowerCase()} el turno de{" "}
                  <strong>{selectedTurno?.paciente.nombre}</strong>?
                </p>
                <div className="turno-details">
                  <p>
                    <strong>Fecha:</strong> {selectedTurno?.fecha}
                  </p>
                  <p>
                    <strong>Hora:</strong> {selectedTurno?.hora}
                  </p>
                  <p>
                    <strong>Servicio:</strong> {selectedTurno?.servicio}
                  </p>
                </div>
              </div>
              <div className="modal-footer">
                <button className="modal-btn cancel" onClick={handleCloseModal}>
                  Cancelar
                </button>
                <button
                  className={`modal-btn confirm ${actionType.toLowerCase()}`}
                  onClick={handleConfirmAction}
                >
                  {actionType}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
