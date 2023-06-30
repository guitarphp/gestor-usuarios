import './Container.css'

const Container = ({ children }) =>{ //children es el contenido que se le pasa al componente Container en el archivo App.js (en este caso es el contenido de los componentes Card)
    return(
        <div className='container'>
            { children } {/* <-- Mostramos el contenido de los componentes Card */}
        </div>
    )    
}
export default Container