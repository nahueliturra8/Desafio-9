import './NavBar.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav>
        <ul className='cont-lista'>
            <li>
               <Link to='/'>Productos</Link>
            </li>
            <li>
               <Link to='/users/:id' >Detalles Usuario</Link>
            </li>
            <li>
               <Link to='/create'>Crear Usuario</Link>
            </li> 
            <li>
               <Link to='/delete/:id'>Borrar Usuario</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar
