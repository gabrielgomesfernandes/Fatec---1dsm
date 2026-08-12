import { useState } from "react";

type FormularioProps = {
    adicionar: (nome:string) => void;
}

export default function Formulario(props:FormularioProps) {
    const [name, setName] = useState("");

  return (
    <div>
      <label htmlFor="nome">Nome</label>
      <input 
            id="nome" 
            value={name}
            onChange= { (e) => setName(e.target.value)} 
        />
        <button onClick ={() => props.adicionar(name)}>Salvar</button>
    </div>
  );
}
