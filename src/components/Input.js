import './Input.css'

const Input = ({label, ...rest}) => { // <-- Recibimos el label por props y el resto de los atributos del input con el operador rest 
  return(
    <div className='field'>
        <label>{label}</label> {/* <-- Mostramos el label */}
    <input
        {...rest}   // <-- Mostramos el resto de los atributos del input 
    />
    </div>
  )
}
export default Input