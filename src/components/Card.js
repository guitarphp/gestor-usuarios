import './Card.css'

const Card = ({ children }) =>  { //children es el contenido que se le pasa al componente Card en el archivo App.js (en este caso es el contenido de los componentes UserForm y ul)
    return (
        <div className='card'>
            {children} {/* <-- Mostramos el contenido de los componentes UserForm y ul */}
        </div>
    )
}
export default Card