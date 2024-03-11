// home.ts
import React from "react";

const Home = ({
  onShowListarClientes,
  onShowCadastrarClientes,
  onShowCalcularRota,
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">
        Sistema de Gerenciamento de Clientes
      </h1>
      <p className="text-lg text-center mb-8">
        Gerenciamento eficiente de clientes para empresas de limpeza.
      </p>
      <div className="flex space-x-4">
        <button
          onClick={onShowCadastrarClientes}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Cadastrar Cliente
        </button>
        <button
          onClick={onShowListarClientes} // Adicione esta linha
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Listar Clientes
        </button>
        <button
          onClick={onShowCalcularRota} // Certifique-se de que esta linha também está configurada corretamente
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Calcular Rota
        </button>
      </div>
    </div>
  );
};

export default Home;
