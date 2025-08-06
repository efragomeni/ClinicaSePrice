import { useLocation } from "react-router-dom";
import "./GestionTerminada.css";
import { BarraNav } from "../../Components/BarraNavegacion/BarraNav";

export const GestionTerminada = () => {
  const location = useLocation();
  const vieneDeSeleccionFecha1 = location.state?.from === "SeleccionFechas1";
  const estiloBarra = vieneDeSeleccionFecha1 ? "paciente-2" : "empleado-2";

  const time = location.state?.time;
  const date = location.state?.selectedDate;
  const numGestion = Math.floor(Math.random() * 10 * 10000);
  console.log(time);
  return (
    <>
      <BarraNav estilo={estiloBarra} />
      <div className="contenedor-gestion">
        <h2>
          Turno médico solicitado para el {date} de Junio a las {time}hs.
        </h2>
        <p>Número de gestión: {numGestion} </p>
      </div>
    </>
  );
};
