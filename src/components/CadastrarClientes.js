import React, { useState } from "react";
import axios from "axios";

const CadastrarClientes = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [message, setMessage] = useState(""); // Adicionado estado para a mensagem

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://testefj-backend.onrender.com/clients", {
        name,
        email,
        phone,
        x,
        y,
      });     
      setMessage("Cadastro realizado com sucesso!"); 
      setName(""); 
      setEmail("");
      setPhone("");
      setX("");
      setY("");
    } catch (error) {
      console.error(error);
      setMessage("Erro ao cadastrar o cliente."); 
    }
    alert(message)
  };

  const isFormValid = () => {
    return (
      name.trim() !== "" &&
      email.trim() !== "" &&
      phone.trim() !== "" &&
      x.trim() !== "" &&
      y.trim() !== ""
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Cadastrar Cliente</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-2 p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-2 p-2 border rounded"
        />
        <input
          type="tel"
          placeholder="Telefone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mb-2 p-2 border rounded"
        />
        <input
          type="number"
          placeholder="X"
          value={x}
          onChange={(e) => setX(e.target.value)}
          className="mb-2 p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Y"
          value={y}
          onChange={(e) => setY(e.target.value)}
          className="mb-2 p-2 border rounded"
        />
        <button
          type="submit"
          disabled={!isFormValid()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Cadastrar
        </button>
      </form>
      <button
        onClick={onClose}
        className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mt-4"
      >
        Voltar ao Início
      </button>
    </div>
  );
};

export default CadastrarClientes;
