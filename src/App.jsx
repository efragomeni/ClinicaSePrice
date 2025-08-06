import "./App.css";
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

/*.*.* Pages *.*.*/
import { InicioPacientes } from "./Pages/Pacientes/InicioPacientes";
import { Login } from "./Pages/Pacientes/Login";
import { Autogestion } from "./Pages/Pacientes/Autogestion";
import { Turno1 } from "./Pages/Turnos/Turno1.jsx";
import { Turno2 } from "./Pages/Turnos/Turno2.jsx";
import { Turno3 } from "./Pages/Turnos/Turno3.jsx";
import { SeleccionFechas1 } from "./Pages/Turnos/SeleccionFechas1.jsx";
import { SeleccionFechas2 } from "./Pages/Turnos/SeleccionFechas2.jsx";
import { GestionTerminada } from "./Pages/Turnos/GestionTerminada.jsx";
import { Reprogramaciones } from "./Pages/Turnos/Reprogramaciones.jsx";
import { ReprogramacionesEmpleados } from "./Pages/Turnos/ReprogramacionesEmpleados.jsx";
import { LoginEm } from "./Pages/Empleados/LoginEm.jsx";
import { Gestion } from "./Pages/Empleados/Gestion.jsx";
import { Medicos } from "./Pages/Empleados/Medicos.jsx";
import { Medicos2 } from "./Pages/Empleados/Medicos2.jsx";
import { Medicos_honorarios } from "./Pages/Empleados/Medicos_honorarios.jsx";
import { ConfirmacionPago } from "./Pages/Empleados/ConfirmacionPago.jsx";
/*.*.* Componentes *.*.*/
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<InicioPacientes />}></Route>
          <Route path="/LoginPacientes" element={<Login />}></Route>
          <Route path="/Autogestion" element={<Autogestion />}></Route>
          <Route path="/Turno1" element={<Turno1 />}></Route>
          <Route path="/Turno2" element={<Turno2 />}></Route>
          <Route path="/Turno3" element={<Turno3 />}></Route>
          <Route
            path="/SeleccionFechas1"
            element={<SeleccionFechas1 />}
          ></Route>
          <Route
            path="/SeleccionFechas2"
            element={<SeleccionFechas2 />}
          ></Route>
          <Route
            path="/GestionTerminada"
            element={<GestionTerminada />}
          ></Route>
          <Route
            path="/Reprogramaciones"
            element={<Reprogramaciones />}
          ></Route>
          <Route
            path="/ReprogramacionesEmpleados"
            element={<ReprogramacionesEmpleados />}
          ></Route>
          <Route path="/LoginEm" element={<LoginEm />}></Route>
          <Route path="/Gestion" element={<Gestion />}></Route>
          <Route path="/ConfirmacionPago" element={<ConfirmacionPago />}></Route>
          <Route path="/Medicos_honorarios" element={<Medicos_honorarios />}></Route>
          <Route path="/Medicos2" element={<Medicos2 />}></Route>
          <Route path="/Medicos" element={<Medicos />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
