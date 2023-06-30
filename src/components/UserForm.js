import Button from "./Button";
import Input from "./Input";
import useFormulario from "../hooks/useFormulario";

function UserForm({submit}) { // <-- Recibimos la función submit por props 
    const [formulario, handleChange, reset] = useFormulario({ // <-- Usamos el hook useFormulario para manejar el estado del formulario 
        name: "",
        lastname: "",
        email: "",
      })

    const handleSubmit = (e) =>{ // <-- Creamos la función handleSubmit que se ejecuta cuando se envía el formulario
        e.preventDefault() // <-- Prevenimos el comportamiento por defecto del formulario
        submit(formulario) // <-- Ejecutamos la función submit que recibimos por props y le pasamos el formulario como parámetro 
        reset()
    }
    
    return (
        <form onSubmit={ handleSubmit }> {/* <-- Agregamos el evento onSubmit al formulario */} 
            <Input
                label="Nombre"
                name="name"
                value={ formulario.name }
                onChange={ handleChange }
                placeholder="Nombre" />
            <Input
                label="Apellido"
                name="lastname"
                value={ formulario.lastname }
                onChange={ handleChange }
                placeholder="Apellido" />
            <Input
                label="Correo"
                name="email"
                value={ formulario.email }
                onChange={ handleChange }
                placeholder="Correo" />
            <Button>Enviar</Button>
        </form>
    );
}
export default UserForm