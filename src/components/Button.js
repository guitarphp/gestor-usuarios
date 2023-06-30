import './Button.css'

const Button = ({children}) =>{ //children es el contenido que se le pasa al componente Button en el archivo App.js (en este caso es el texto 'Enviar') 
    return(
        <button className='button' >
            {children}
        </button>
    )

}

export default Button