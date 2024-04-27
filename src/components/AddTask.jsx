import { useState } from "react";

export const AddTask = ({ addTask }) => {
  const [inputValue, setinputValue] = useState("");

  const onInputChange = (event) => {
    setinputValue(event.target.value);
  };
  const onSubmit = (event) => {
    const send = {
      nombre: inputValue,
      visto: false,
    };
    event.preventDefault();
    addTask(task => [...task, send]);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Ingresar tarea"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
