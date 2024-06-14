import { useState, useEffect } from 'react';
import './UserList.css'
import img from '../../assets/icon-user.png'
import NavBar from '../NavBar/NavBar'

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [newUserName, setNewUserName] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
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


  const handleCreateUser = () => {
    fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: newUserName})
    })
      .then((response) => response.json())
      .then(() => {
        setNewUserName()
      })
      .then(() => {
        return fetch(API)
      })
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error.message));
  };


const handleUpdateUser = () => {
  if (!selectedUser) return;
  fetch(`${API}/${selectedUser.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: newUserName }),
  })
    .then((response) => response.json())
    .then((updatedUser) => {
      setUsers(users.map((user) => (user.id === selectedUser.id ? updatedUser : user)));
      setNewUserName('');
      setSelectedUser(null);
    })
    .catch((error) => console.error('Error al actualizar usuario:', error));
};
const handleDeleteUser = (userId) => {
  fetch(`${API}/${userId}`, {
  method: 'DELETE',
  })
  .then(() => {
  setUsers(users.filter((user) => user.id !== userId));
  setNewUserName('');
  setSelectedUser(null);
  })
  .catch((error) => console.error('Error al eliminar usuario:', error));
  };


  return (
    <div>
      <NavBar />
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          <ul className='cont-users'>
            {users.map((usuario) => (
              <li key={usuario.id}>
                <div className="cont-nombre">
                  <img src={img} alt="img-usuario" />
                  <p className="nombre">{usuario.name}</p>
                </div>
                <div className="cont-btn">
                  <button onClick={() => setSelectedUser(usuario)}>Seleccionar para editar</button>
                  <button onClick={() => handleDeleteUser(usuario.id)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
          <div className='cont-form'>
            <input
             className='input-nombre'
              type="text"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
              placeholder="Nombre del Usuario"
            />
            {selectedUser ? (
              <button onClick={handleUpdateUser}>Actualizar Usuario</button>
            ) : (
              <button onClick={handleCreateUser}>Crear Usuario</button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
        
export default UserList
