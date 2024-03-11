// listar.ts
import React, { useState, useEffect } from "react";

const ListarClientes = ({ onClose }) => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await fetch(
          "https://testefj-backend.onrender.com/clients"
        );
        const data = await response.json();
        setClientes(data);
      } catch (error) {
        console.error("Erro ao buscar os clientes:", error);
      }
    };

    fetchClientes();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Clientes Cadastrados</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">Nome</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Telefone</th>
            <th className="border px-4 py-2">X</th>
            <th className="border px-4 py-2">Y</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{cliente.name}</td>
              <td className="border px-4 py-2">{cliente.email}</td>
              <td className="border px-4 py-2">{cliente.phone}</td>
              <td className="border px-4 py-2">{cliente.x}</td>
              <td className="border px-4 py-2">{cliente.y}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={onClose}
        className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mt-4"
      >
        Voltar ao Início
      </button>
    </div>
  );
};

export default ListarClientes;
