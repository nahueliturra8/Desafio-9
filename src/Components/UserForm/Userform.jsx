import {useState} from 'react'
import NavBar from "../NavBar/NavBar"
import './UserForm.css'
const Userform = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');

  const API = "https://666a3a627013419182ce96b5.mockapi.io/users"
  
  const handleSubmit = (event) => {
  event.preventDefault()
    const newUser= {
      name:user,
      email:email,
  }

    fetch(API, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
      })
      .then(response => {
        if (response.ok) {
            console.log('Producto agregado correctamente');
            setUser('');
            setEmail('');
  
        } else {
            console.error('Error al agregar el producto');
          }
  })

        
  

  }
  return (
    <div>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <h1>Agregar Usuario</h1>
        <input type="text"
        className="input-text"
        value={user}
        onChange={(event) => setUser(event.target.value)}
        required
        placeholder="ingresa el nombre" />
        <input type="email" 
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
        placeholder="ingresa el Email"/>
         <button type="submit">Agregar Usuario</button>
      </form>
    </div>
  )
}

export default Userform
