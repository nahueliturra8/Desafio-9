import { useState, useEffect } from 'react';
import NavBar from "../NavBar/NavBar"
import img from '../../assets/icon-user.png'
import './UserDetails.css'

const UserDetails = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const API = "https://666a3a627013419182ce96b5.mockapi.io/users"

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("error en obtener usuario", err))
      .finally(() => {
        setLoading(false)
      });
  }, [API])
  
  return (
    <div>
    <NavBar />
    <ul>
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          <li>
            <div className="cont-nombre">
              <p className="tit-Usuario">Usuario</p>
            </div>
            <div className="cont-mail">
              <p className='tit-Email'>Email</p>
            </div>
          </li>
          {users.map(usuario => (
            <li key={usuario.id}>
              <div className="cont-nombre">
                <img src={img} alt="img-usuario" />
                <p className="nombre">{usuario.name}</p>
              </div>
              <div className="cont-mail">
                <p>{usuario.email}</p>
              </div>
            </li>
          ))}
        </>
      )}
    </ul>
  </div>
  );
  
}

export default UserDetails
