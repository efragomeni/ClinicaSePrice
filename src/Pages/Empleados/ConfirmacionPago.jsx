"use client";
import { Boton } from "../../Components/Boton/Boton";

import { useState, useEffect } from "react";
import { replace, useNavigate } from "react-router-dom";
import "./confirmacionPago.css";

export const ConfirmacionPago = () => {
  const navigate = useNavigate();
  const [totalPagado, setTotalPagado] = useState(0);
  const [itemsPagados, setItemsPagados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Recuperar datos del sessionStorage
    const total = sessionStorage.getItem("totalPagado");
    const items = sessionStorage.getItem("itemsPagados");

    if (!total || !items) {
      // Si no hay datos, redirigir a la página principal
      navigate("/");
      return;
    }

    setTotalPagado(Number(total));
    setItemsPagados(JSON.parse(items));
    setLoading(false);
  }, [navigate]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleVolver = () => {
    // Limpiar sessionStorage y volver a la página principal
    sessionStorage.removeItem("totalPagado");
    sessionStorage.removeItem("itemsPagados");
    navigate("/Gestion",replace);
  };

  const handleImprimir = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Cargando datos de pago...</p>
      </div>
    );
  }

  // Generar un número de recibo aleatorio
  const numeroRecibo = `REC-${Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, "0")}`;

  // Fecha actual formateada
  const fechaActual = new Date().toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className="confirmacion-container">
      <div className="confirmacion-card">
        <div className="confirmacion-header">
          <h1>Pago Confirmado</h1>
          <div className="confirmacion-icon">✓</div>
        </div>

        <div className="recibo-info">
          <div className="recibo-row">
            <span className="recibo-label">Nº de Recibo:</span>
            <span className="recibo-value">{numeroRecibo}</span>
          </div>
          <div className="recibo-row">
            <span className="recibo-label">Fecha:</span>
            <span className="recibo-value">{fechaActual}</span>
          </div>
        </div>

        <div className="confirmacion-message">
          <p>
            Se ha procesado correctamente el pago por un total de{" "}
            <strong className="amount">{formatPrice(totalPagado)}</strong>
          </p>
        </div>

        <div className="items-table-container">
          <h3>Detalle de servicios pagados</h3>
          <table className="items-table">
            <thead>
              <tr>
                <th>Código</th>
                <th>Servicio</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {itemsPagados.map((item) => (
                <tr key={item.id}>
                  <td>{item.codigo}</td>
                  <td>{item.servicio}</td>
                  <td className="precio-cell">{formatPrice(item.precio)}</td>
                </tr>
              ))}
              <tr className="total-row">
                <td colSpan="2" className="total-label">
                  Total
                </td>
                <td className="total-value">{formatPrice(totalPagado)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="confirmacion-footer">
<Boton estilo="claro" texto="Volver" onClick={handleVolver} ></Boton>
<Boton estilo="oscuro" texto="Imprimir recibo" onClick={handleImprimir} ></Boton>
          
        </div>
      </div>
    </div>
  );
};
