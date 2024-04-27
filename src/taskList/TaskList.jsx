import { useState } from "react";
import { AddTask } from "../components/AddTask";
import "./TaskList.css";

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
    setArreglo([...arreglo, { nombre: "nuevo", visto: true }]);
  };

  let listadoSecciones = [
    { id:1, nombre: "limpiar", visto: true },
    { id:2, nombre: "comprar", visto: true },
    { id:3, nombre: "trabajar", visto: true },
  ];
  const [arreglo, setArreglo] = useState(listadoSecciones);

  const onAddTask = (val) => {
    let valor = val.trim(); // Elimina espacios en blanco
    if (val < 1) return;
    const newTask = {
      id: arreglo.length + 1,
      nombre: valor,
      visto: true,
    };
    setArreglo([...arreglo, newTask]);
  };

  return (
    <>
      <h1>App List</h1>
      <AddTask addTask={onAddTask} />
      <ol>
        {arreglo.map((item) => (
          <Items key={item.id} nombre={item.nombre} visto={item.visto} />
        ))}
      </ol>
      {/* <button onClick={() => addTask()}>Agregar tarea</button> */}
    </>
  );
};
