import { useState } from "react";

const Items = ({ nombre, visto }) => {
  return (
    <li>
      {nombre}
      {visto && "👍"}
    </li>
  );
};

export const TaskList = () => {

  const addTask = () => {
    setArreglo([...arreglo, {nombre:"nuevo", visto:false}])
  }

  let listadoSecciones = [
    { nombre: "limpiar", visto: true},
    { nombre: "comprar", visto: true},
    { nombre: "trabajar", visto: true}

  ]
  const [arreglo, setArreglo] = useState(listadoSecciones)
  
  return (
    <>
      <h1>App List</h1>
      <ol>
        {arreglo.map( item => <Items key={item.nombre} nombre={item.nombre} visto={item.visto}></Items>)}
      </ol>
      <button onClick={() => addTask()}>Agregar tarea</button>
    </>
  );
};
