import { useState } from "react";
import "./App.css";
import Boton from "./componentes/Boton";
import BotonClear from "./componentes/BotonClear";
import Pantalla from "./componentes/Pantalla";
import { evaluate } from "mathjs";

function App() {
 
  const [input, setInput] = useState("");

  const agregarInput = val =>{
    setInput(input + val);
  }

  const calcularResultado = () => {
    if (input) {
      try {
        const result = evaluate(input);
        if (result === undefined) {
          setInput(""); 
          alert("Por favor ingrese valores correctos");
        } else {
          setInput(result);
        }
      } catch (error) {
        setInput("");
        alert("Math error");
      }
    } else {
      setInput("");
      alert("Por favor ingrese valores correctos");
    }
  };

  

  const clear = () =>{
    setInput("");
  }
 
  return (
    <div className="App">
      
      
      <div className="contenedor-calculadora">
      <Pantalla input={input}></Pantalla>
        <div className="fila">
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput} >/</Boton>
        </div>
        <div className="fila">
          <BotonClear limpiar={clear}>clear</BotonClear>
        </div>
        
      </div>
    </div>
  );
}

export default App;
