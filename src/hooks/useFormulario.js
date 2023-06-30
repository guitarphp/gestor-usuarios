import { useState } from "react";

const useFormulario = (inicial) => { // <-- Recibimos el estado inicial como parámetro 
  const [formulario, setFormulario] = useState(inicial); // <-- Usamos el estado inicial para inicializar el estado formulario 
  const handleChange = (e) => { // <-- Agregamos la función handleChange que recibe un evento 
    setFormulario({ // <-- Actualizamos el estado formulario usando el setter setFormulario 
      ...formulario, // <-- Usamos el operador spread para mantener los valores anteriores del estado formulario
      [e.target.name]: e.target.value, // <-- Actualizamos el valor de la propiedad name del estado formulario con el valor del input que disparó el evento 
    });
  };
  const reset = () => { // <-- Agregamos la función reset 
    setFormulario(inicial) // <-- Usamos el estado inicial para resetear el estado formulario
  }
  return [formulario, handleChange, reset];
}
export default useFormulario;
