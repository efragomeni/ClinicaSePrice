import { BarraNav } from "../../Components/BarraNavegacion/BarraNav";
import { Boton } from "../../Components/Boton/Boton";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./medicos_honorarios.css"

export const Medicos_honorarios = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Simular carga de datos desde JSON
    const loadData = async () => {
      try {
        // En un proyecto real, esto sería: const response = await fetch('/data/honorarios.json')
        const response = await fetch("/data/honorarios.json");
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
          honorarios: [
            {
              id: 1,
              codigo: "CG001",
              servicio: "Consulta General",
              categoria: "CONSULTA",
              duracion: "30 min",
              precio: 15000,
            },
            {
              id: 2,
              codigo: "CS002",
              servicio: "Consulta de Seguimiento",
              categoria: "CONSULTA",
              duracion: "20 min",
              precio: 12000,
            },
            {
              id: 3,
              codigo: "ECG003",
              servicio: "Electrocardiograma",
              categoria: "ESTUDIO",
              duracion: "15 min",
              precio: 8000,
            },
            {
              id: 4,
              codigo: "CM004",
              servicio: "Certificado Médico",
              categoria: "CERTIFICACIÓN",
              duracion: "10 min",
              precio: 5000,
            },
            {
              id: 5,
              codigo: "CD005",
              servicio: "Consulta Especial",
              categoria: "CONSULTA",
              duracion: "45 min",
              precio: 25000,
            },
            {
              id: 6,
              codigo: "IC006",
              servicio: "Interconsulta",
              categoria: "CONSULTA",
              duracion: "40 min",
              precio: 18000,
            },
            {
              id: 7,
              codigo: "CPO007",
              servicio: "Control Post-Operatorio",
              categoria: "CONTROL",
              duracion: "25 min",
              precio: 14000,
            },
            {
              id: 8,
              codigo: "EPQ008",
              servicio: "Evaluación Pre-Quirúrgica",
              categoria: "EVALUACIÓN",
              duracion: "35 min",
              precio: 20000,
            },
          ],
        });
        setLoading(false);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    // Calcular el total cuando cambian los items seleccionados
    if (data) {
      const total = selectedItems.reduce((sum, id) => {
        const item = data.honorarios.find((h) => h.id === id);
        return sum + (item ? item.precio : 0);
      }, 0);
      setTotalAmount(total);
    }
  }, [selectedItems, data]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Cargando honorarios...</p>
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

  const categories = [
    "Todos",
    ...new Set(data.honorarios.map((item) => item.categoria)),
  ];

  const filteredHonorarios =
    selectedCategory === "Todos"
      ? data.honorarios
      : data.honorarios.filter((item) => item.categoria === selectedCategory);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleCheckboxChange = (id) => {
    setSelectedItems((prev) => {
      if (prev.includes(id)) {
        return prev.filter((itemId) => itemId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(filteredHonorarios.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleExport = () => {
    const csvContent = [
      ["Seleccionado", "Código", "Servicio", "Categoría", "Duración", "Precio"],
      ...filteredHonorarios.map((item) => [
        selectedItems.includes(item.id) ? "Sí" : "No",
        item.codigo,
        item.servicio,
        item.categoria,
        item.duracion,
        item.precio,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "honorarios.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handlePay = () => {
    if (selectedItems.length === 0) {
      alert("Por favor seleccione al menos un servicio para pagar");
      return;
    }

    // En un proyecto real, aquí se enviarían los datos al backend
    // Para la demo, guardamos en sessionStorage y redirigimos
    sessionStorage.setItem("totalPagado", totalAmount);
    sessionStorage.setItem(
      "itemsPagados",
      JSON.stringify(
        selectedItems.map((id) => {
          const item = data.honorarios.find((h) => h.id === id);
          return {
            id: item.id,
            codigo: item.codigo,
            servicio: item.servicio,
            precio: item.precio,
          };
        })
      )
    );

    // Redireccionar a la página de confirmación usando React Router
    navigate("/ConfirmacionPago");
  };

  return (
    <div className="honorarios-container">
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
        <h2 className="section-title">Honorarios</h2>
        <div className="controls">
          <select
            className="category-filter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button className="action-button secondary" onClick={handlePrint}>
            Imprimir
          </button>
          <button className="action-button secondary" onClick={handleExport}>
            Exportar CSV
          </button>
        </div>
      </div>

      {/* Tabla de honorarios */}
      <div className="table-container">
        <table className="honorarios-table">
          <thead>
            <tr>
              <th className="checkbox-cell">
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={
                    selectedItems.length === filteredHonorarios.length &&
                    filteredHonorarios.length > 0
                  }
                />
              </th>
              <th>Código</th>
              <th>Servicio</th>
              <th>Categoría</th>
              <th>Duración</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {filteredHonorarios.map((item) => (
              <tr
                key={item.id}
                className={
                  selectedItems.includes(item.id) ? "selected-row" : ""
                }
              >
                <td className="checkbox-cell">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                </td>
                <td className="codigo-cell">{item.codigo}</td>
                <td className="servicio-cell">{item.servicio}</td>
                <td className="categoria-cell">
                  <span
                    className={`category-badge ${item.categoria.toLowerCase()}`}
                  >
                    {item.categoria}
                  </span>
                </td>
                <td className="duracion-cell">{item.duracion}</td>
                <td className="precio-cell">{formatPrice(item.precio)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer con suma */}
      <div className="table-footer">
        <div className="stats">
          <span className="stat-item">
            Total de servicios: <strong>{filteredHonorarios.length}</strong>
          </span>
          <span className="stat-item">
            Seleccionados: <strong>{selectedItems.length}</strong>
          </span>
          <span className="stat-item total-amount">
            Suma: <strong>{formatPrice(totalAmount)}</strong>
          </span>
        </div>
      </div>

      {/* Botones de navegación */}
      <div className="navigation-buttons">
        <Boton estilo="claro" texto="Ver agenda completa" onClick ></Boton>
        <Boton estilo="claro" texto="Datos personales" onClick ></Boton>
       
        
        <button
          className={`nav-button pay-button ${
            selectedItems.length > 0 ? "active" : "disabled"
          }`}
          onClick={handlePay}
          disabled={selectedItems.length === 0}
        >
          PAGAR
        </button>
      </div>
    </div>
  );
};
