import { useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";

export default function App() {
  const [nomes, setNomes] = useState(["Ana", "Maria"])

  function add(nome){
    const temp = [...nomes,nome];
    setNomes(temp);
  }

  return (
    <div>
      <Formulario adicionar={add}/>
      <Lista items={nomes} />
    </div>
  );
}
