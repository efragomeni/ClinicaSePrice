import { useState } from "react";
import "./seleccionFechas1.css";

import { BarraNav } from "../../Components/BarraNavegacion/BarraNav";

import { useNavigate } from "react-router-dom";

export const SeleccionFechas2 = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(10);
  const [currentMonth, setCurrentMonth] = useState("Junio 2025");

  // Horarios diferentes para cada día
  const scheduleByDay = {
    1: ["09:00", "10:30", "14:00", "16:00"],
    2: ["08:00", "11:00", "15:30"],
    3: ["10:00", "12:00", "14:30", "17:00"],
    4: ["09:30", "13:00", "16:30"],
    5: ["08:30", "10:00", "11:30", "15:00", "17:30"],
    6: ["09:00", "14:00"], // Sábado - horarios reducidos
    7: [], // Domingo - cerrado
    8: ["08:00", "09:00", "11:00", "11:45"],
    9: ["10:00", "14:00", "16:00"],
    10: ["08:00", "09:00", "11:00", "11:45"], // Día por defecto del diseño original
    11: ["09:30", "12:30", "15:30"],
    12: ["08:30", "10:30", "13:00", "16:00"],
    13: ["09:00", "14:00"], // Sábado
    14: [], // Domingo
    15: ["08:00", "10:00", "12:00", "14:00", "16:00"],
    16: ["09:00", "11:30", "15:00"],
    17: ["08:30", "13:30", "17:00"],
    18: ["10:00", "12:00", "16:30"],
    19: ["09:00", "11:00", "14:30", "17:30"],
    20: ["08:00", "15:00"], // Sábado
    21: [], // Domingo
    22: ["09:30", "11:30", "14:00", "16:00"],
    23: ["08:00", "10:00", "13:00"],
    24: ["09:00", "12:00", "15:30", "18:00"],
    25: ["10:30", "14:30", "16:30"],
    26: ["08:30", "11:00", "13:30", "17:00"],
    27: ["09:00", "16:00"], // Sábado
    28: [], // Domingo
    29: ["08:00", "10:00", "12:00", "15:00"],
    30: ["09:30", "13:00", "16:30"],
  };

  // Obtener horarios para el día seleccionado
  const getAvailableTimeSlots = () => {
    return scheduleByDay[selectedDate] || [];
  };

  const daysOfWeek = ["L", "M", "M", "J", "V", "S", "D"];

  // Calendar days for June 2025
  const calendarDays = [
    null,
    null,
    null,
    null,
    null,
    null,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    null,
    null,
    null,
    null,
    null,
    null,
  ];

  const handlePrevMonth = () => {
    // Handle previous month logic
  };

  const handleNextMonth = () => {
    // Handle next month logic
  };

  const handleTimeSlotRequest = (time) => {
    console.log(`Solicitando cita para el día ${selectedDate} a las ${time}`);
    navigate("/GestionTerminada", {
      state: { from:"SeleccionFechas2", selectedDate, time },
    });
  };

  const handleDateSelect = (day) => {
    if (day) {
      setSelectedDate(day);
    }
  };

  const currentTimeSlots = getAvailableTimeSlots();

  return (
    <>
      <BarraNav estilo="empleado-2"></BarraNav>

      <div className="appointment-container">
        <div className="calendar-section">
          <div className="date-header">
            <span className="date-label">Fecha</span>
            <span className="selected-date">Jun {selectedDate}, 2025</span>
          </div>

          <div className="calendar">
            <div className="calendar-header">
              <button className="nav-button" onClick={handlePrevMonth}>
                &#8249;
              </button>
              <span className="month-year">{currentMonth}</span>
              <button className="nav-button" onClick={handleNextMonth}>
                &#8250;
              </button>
            </div>

            <div className="calendar-grid">
              <div className="days-header">
                {daysOfWeek.map((day, index) => (
                  <div key={index} className="day-header">
                    {day}
                  </div>
                ))}
              </div>

              <div className="days-grid">
                {calendarDays.map((day, index) => (
                  <div
                    key={index}
                    className={`calendar-day ${
                      day === selectedDate ? "selected" : ""
                    } ${day ? "clickable" : "empty"}`}
                    onClick={() => handleDateSelect(day)}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="time-slots-section">
          <h3 className="time-slots-title">HORARIOS DISPONIBLES:</h3>

          <div className="time-slots-list">
            {currentTimeSlots.length > 0 ? (
              currentTimeSlots.map((time, index) => (
                <div key={index} className="time-slot-row">
                  <span className="time-text">{time}</span>
                  <button
                    className="request-button"
                    onClick={() => handleTimeSlotRequest(time)}
                  >
                    SOLICITAR
                  </button>
                </div>
              ))
            ) : (
              <div className="no-slots-message">
                <p>No hay horarios disponibles para este día</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
