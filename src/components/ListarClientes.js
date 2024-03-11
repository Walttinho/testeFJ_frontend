import React, { useState, useEffect } from "react";

const ListarClientes = ({ onClose }) => {
  const [clientes, setClientes] = useState([]);
  const [filtro, setFiltro] = useState({}); // Estado para armazenar os parâmetros de filtro

  // Função para buscar clientes com filtro
const fetchClientes = async () => {
  try {
    // Construindo a URL com os parâmetros de filtro
    let url = "https://testefj-backend.onrender.com/clients";
    if (Object.keys(filtro).length > 0) {
      url += "?";
      url += new URLSearchParams(filtro).toString();
    }
    console.log(url);

    const response = await fetch(url);
    const data = await response.json();
    // Verificando se a resposta é um array antes de definir o estado
    if (Array.isArray(data)) {
      setClientes(data);
    } else {
      console.error("A resposta da API não é um array:", data);
    }
  } catch (error) {
    console.error("Erro ao buscar os clientes:", error);
  }
};

  // Função para lidar com a mudança nos campos de filtro
const handleFiltroChange = (e) => {
  const { name, value } = e.target;
  // Verifica se o valor é nulo ou vazio
  if (value === null || value === "") {
    // Se for nulo ou vazio, remove o campo do estado filtro
    setFiltro((prevFiltro) => {
      const newFiltro = { ...prevFiltro };
      delete newFiltro[name];
      return newFiltro;
    });
  } else {
    // Se não for nulo ou vazio, atualiza o estado filtro
    setFiltro({ ...filtro, [name]: value });
  }
};


  // Função para limpar o filtro
  const limparFiltro = () => {
    setFiltro({});
  };

  useEffect(() => {
    fetchClientes();
  }, [filtro]); // Dependência do useEffect para atualizar os clientes quando o filtro mudar

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Clientes Cadastrados</h2>
      {/* Formulário para inserir os critérios de filtro */}
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={filtro.name || ""}
          onChange={handleFiltroChange}
          className="border px-4 py-2 mb-2"
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={filtro.email || ""}
          onChange={handleFiltroChange}
          className="border px-4 py-2 mb-2"
        />
        <input
          type="text"
          name="phone"
          placeholder="Telefone"
          value={filtro.phone || ""}
          onChange={handleFiltroChange}
          className="border px-4 py-2 mb-2"
        />
        <button
          type="button"
          onClick={limparFiltro}
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mt-4"
        >
          Limpar Filtro
        </button>
      </form>
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
          {Array.isArray(clientes) &&
            clientes.map((cliente, index) => (
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
