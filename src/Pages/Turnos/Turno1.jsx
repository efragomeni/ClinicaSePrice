import { useState, useEffect } from "react";
import "./turno1.css";
import { BarraNav } from "../../Components/BarraNavegacion/BarraNav";
import { Modal } from "../../Components/Modal/Modal";
import { Boton } from "../../Components/Boton/Boton";
import { useNavigate, useLocation } from "react-router-dom";

const UserIcon = () => (
  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const CalendarIcon = () => (
  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const FileTextIcon = () => (
  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

export const Turno1 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const vieneDeReprogramacion = location.state?.from === "reprogramacion";
  const [showModal, setShowModal] = useState(false);
  const [patientsData, setPatientsData] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleConfirm = () => {
    alert("Confirmado!");
    setShowModal(false);
  };

  useEffect(() => {
    // Simular carga de datos desde JSON
    const loadData = async () => {
      try {
        const response = await fetch("./src/data/patients.json");
        const data = await response.json();
        setPatientsData(data);
        setSelectedPatient(data.patients[0]); // Seleccionar primer paciente por defecto
      } catch (error) {
        console.error("Error loading patient data:", error);
        // Datos de fallback en caso de error
        const fallbackData = {
          patients: [
            {
              id: 1,
              name: "BARTOLO SIMS",
              dni: "12.951.384",
              convenio: "-",
              plan: "-",
              nroAfiliado: "-",
              appointments: [
                {
                  id: 1,
                  fecha: "10/06/2025",
                  especialidad: "Dermatología",
                  profesional: "Dr. García",
                  motivo: "CONSULTA",
                },
              ],
            },
          ],
        };
        setPatientsData(fallbackData);
        setSelectedPatient(fallbackData.patients[0]);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleCancelAppointment = (appointment) => {
    navigate("/Reprogramaciones", { state: { appointment } });


  };



  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-content">
          <div className="spinner"></div>
          <p>Cargando datos del paciente...</p>
        </div>
      </div>
    );
  }

  if (!patientsData || !selectedPatient) {
    return (
      <div className="loading-container">
        <p>No se pudieron cargar los datos del paciente</p>
      </div>
    );
  }

  return (
    <>
      <BarraNav estilo="paciente-2"></BarraNav>
      <div className="main-container">
        <div className="content-wrapper">
          {/* Header */}
          <div className="header-card">
            <div className="header-title">
              <UserIcon />
              <h1>Sistema de Turnos Médicos</h1>
            </div>

            
          </div>

          {/* Información del Paciente */}
          <div className="card">
            <div className="card-header">
              <div className="card-title">
                <FileTextIcon />
                Información del Paciente
              </div>
            </div>
            <div className="card-content">
              <div className="table-container">
                <table className="table">
                  <thead className="table-header">
                    <tr>
                      <th>Paciente</th>
                      <th>DNI</th>
                      <th>Convenio</th>
                      <th>Plan</th>
                      <th>Nro Afiliado</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table-row">
                      <td className="table-cell font-medium">
                        {selectedPatient.name}
                      </td>
                      <td className="table-cell">{selectedPatient.dni}</td>
                      <td className="table-cell">{selectedPatient.convenio}</td>
                      <td className="table-cell">{selectedPatient.plan}</td>
                      <td className="table-cell">
                        {selectedPatient.nroAfiliado}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Próximos Turnos */}
          <div className="card">
            <div className="card-header">
              <div className="card-title">
                <CalendarIcon />
                Próximos turnos
              </div>
            </div>
            <div className="card-content">
              {vieneDeReprogramacion ? (
                <div className="empty-state">
                  <CalendarIcon />
                  <p>No hay turnos programados para este paciente</p>
                </div>
              ) : selectedPatient.appointments.length > 0 ? (
                <div className="table-container">
                  <table className="table">
                    <thead className="table-header">
                      <tr>
                        <th>Fecha</th>
                        <th>Especialidad / Profesional</th>
                        <th className="th-motivos">Motivo</th>
                        <th className="th-acciones">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedPatient.appointments.map((appointment) => (
                        <tr key={appointment.id} className="table-row">
                          <td className="table-cell font-medium">
                            {appointment.fecha}
                          </td>
                          <td className="table-cell">
                            <div className="specialty-info">
                              <div className="specialty-name">
                                {appointment.especialidad}
                              </div>
                              <div className="professional-name">
                                {appointment.profesional}
                              </div>
                            </div>
                          </td>
                          <td className="table-cell td-motivos">
                            <span className="motivo-badge">
                              {appointment.motivo}
                            </span>
                          </td>
                          <td className="table-cell td-acciones">
                            <button
                              className="btn btn-outline btn-sm"
                              onClick={() =>
                                handleCancelAppointment(appointment)
                              }
                            >
                              CANCELAR / REPROGRAMAR
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="empty-state">
                  <CalendarIcon />
                  <p>No hay turnos programados para este paciente</p>
                </div>
              )}
            </div>
          </div>

          {/* Botón Solicitar Nuevo Turno */}
          <div className="main-action">
            <Boton
              texto="SOLICITAR NUEVO TURNO"
              estilo="oscuro"
              onClick={() => setShowModal(true)}
            >
              Mostrar Modal
            </Boton>
            <Modal
              estilo="tomaTurno"
              isOpen={showModal}
              onClose={() => setShowModal(false)}
              onConfirm={handleConfirm}
            />
          </div>
        </div>
      </div>
    </>
  );
};
