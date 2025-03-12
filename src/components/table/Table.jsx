import React from "react";
import "./table.css";
import { FaCheck, FaUtensils, FaCreditCard } from "react-icons/fa"; // Importamos iconos

const Table = ({ tableId, onClick, state }) => {
  // Definir clases dinámicas según el estado de la mesa
  const stateClasses = {
    Available: "table-free",
    Occupied: "table-occupied",
    Paying: "table-billing",
  };

  const stateClassesIcon = {
    Available: "icon-free",
    Occupied: "icon-occupied",
    Paying: "icon-billing",
  };

  // Elegir ícono según el estado
  const stateIcons = {
    Available: <FaCheck />,
    Occupied: <FaUtensils />,
    Paying: <FaCreditCard />,
  };

  return (
    <div className={`container-table ${stateClasses[state]}`} onClick={onClick}>
      <h1>{tableId}</h1>
      <span className={`table-status ${stateClassesIcon[state]}`}>
        {stateIcons[state]}
      </span>
    </div>
  );
};

export default Table;
