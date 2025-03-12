import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../components/table/Table";
import "./tables.css";

const Tables = () => {
  const [mesas, setMesas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      fetch("http://localhost:5000/tables")
        .then((data) => data.json())
        .then((data) => setMesas(data));
    }
    fetchData();
  }, []);

  const seleccionarMesa = (id) => {
    navigate(`/menu?mesa=${id}`);
  };

  return (
    <div className="container">
      <div className="grid">
        {mesas?.map((mesa) => (
          <Table
            key={mesa.id}
            tableId={mesa.id}
            onClick={() => seleccionarMesa(mesa.id)}
            state={mesa.state}
          />
        ))}
      </div>
    </div>
  );
};

export default Tables;
