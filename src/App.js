import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import ListarClientes from "./components/ListarClientes";
import CadastrarClientes from "./components/CadastrarClientes";
import CalcularRota from "./components/CalcularRota";
function App() {
 const [currentComponent, setCurrentComponent] = useState('home');

 const showHome = () => setCurrentComponent('home');
 const showListarClientes = () => setCurrentComponent('listarClientes');
 const showCadastrarClientes = () => setCurrentComponent('cadastrarClientes');
 const showCalcularRota = () => setCurrentComponent('calcularRota');

  return (
    <div className="App">
      {currentComponent === "home" && (
        <Home
          onShowListarClientes={showListarClientes}
          onShowCadastrarClientes={showCadastrarClientes}
          onShowCalcularRota={showCalcularRota}
        />
      )}
      {currentComponent === "listarClientes" && (
        <ListarClientes onClose={showHome} />
      )}
      {currentComponent === "cadastrarClientes" && (
        <CadastrarClientes onClose={showHome} />
      )}
      {currentComponent === "calcularRota" && (
        <CalcularRota onClose={showHome} />
      )}
    </div>
  );
}

export default App;
