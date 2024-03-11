import React, { useState, useEffect } from "react";
import axios from "axios";

const CalcularRota = ({ onClose }) => {
  const [distanciaTotal, setDistanciaTotal] = useState(null);

  useEffect(() => {
    const fetchDistanciaTotal = async () => {
      try {
        const response = await axios.get(
          "https://testefj-backend.onrender.com/circuit"
        );
        setDistanciaTotal(response.data.totalDistance);
      } catch (error) {
        console.error("Erro ao buscar a distância total:", error);
      }
    };

    fetchDistanciaTotal();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Rota Mais Curta</h2>
      {distanciaTotal ? (
        <p>Distância total da rota: {distanciaTotal.toFixed(2)} unidades </p>
      ) : (
        <p>Carregando distância total...</p>
      )}

      <button
        onClick={onClose}
        className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mt-4"
      >
        Voltar ao Início
      </button>
    </div>
  );
};

export default CalcularRota;
