import { createContext, useState, useEffect } from 'react';


export const UserContext = createContext();


export const UserProvider = ({ children }) => {

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const API = "https://666a3a627013419182ce96b5.mockapi.io/users"


  const cargarUser = () => {
    setLoading(true);
    fetch(API)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(error => console.error('Error al cargar User:', error));
  };


  useEffect(() => {
    cargarUser();
  }, []);

  const handleDelete = (productId) => {
    fetch(`${API}/${productId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            console.log('User eliminado correctamente');
   
            fetch(API)
                .then(res => res.json())
                .then(res => setUser(res))
                .catch(error => console.error('Error al actualizar los datos:', error));
        } else {
            console.error('Error al eliminar el User');
      
        }
    })
    .catch(error => {
        console.error('Error en la solicitud:', error);
    });
};

  return (

    <UserContext.Provider value={{ user, loading, cargarUser, handleDelete }}>
      {children}
    </UserContext.Provider>
  );
};
