import { useState } from "react";

export const AddTask = () => {

  const [inputValue, setinputValue] = useState();

  const onInputChange = (event) => {
    console.log("inputValue");
      
  }

  return (
    <input 
        type="text" 
        placeholder="Ingresar tarea"
        value={inputValue}
        onChange={(event) => onInputChange(event)}
    />)
}
