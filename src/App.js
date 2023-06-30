
import Card from "./components/Card";
import Container from "./components/Container";
import { useState } from "react";
import UserForm from "./components/UserForm";


function App() {
  const [usuarios, setUsuarios] = useState([]) // <-- Agregamos el estado usuarios y su setter setUsuarios 

  const submit = usuario => { // <-- Agregamos la función submit que recibe un usuario
    
    setUsuarios([ // <-- Agregamos el usuario al estado usuarios usando el setter setUsuarios 
      ...usuarios, // <-- Usamos el operador spread para agregar el usuario al final del array usuarios
      usuario // <-- Agregamos el usuario al final del array usuarios 
    ])
  }
  return (
    <div style={{ marginTop: '15p%' }}> 
    <Container>
      <Card>
        <div style={{padding: 20 }} >
          <UserForm submit={submit}/>
        </div>
      </Card>
      <Card>
        <ul>
          {usuarios.map(x => // <-- Recorremos el array usuarios y mostramos cada usuario en un <li> 
            <li key={x.email}>{`${x.name} ${x.lastname}: ${x.email}`}</li>)} 
        </ul>
      </Card>
    </Container>
    </div>
  );
}

export default App;
