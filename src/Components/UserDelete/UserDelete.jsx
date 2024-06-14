import NavBar from "../NavBar/NavBar"
import { UserContext} from "../../context/UserContext"
import { useContext } from "react";
const UserDelete = () => {
  const { user, loading, handleDelete } = useContext(UserContext);
  return (
    <div>
    <NavBar />
    {loading ? (
      <h1>Cargando...</h1>
    ) : (
      <>
        <ul className="cont-users">
          {user.map((usuario) => (
            <li key={usuario.id}>
              <div className="cont-nombre">
                <p className="nombre">{usuario.name}</p>
              </div>
              <div className="cont-btn">
                <button onClick={() => handleDelete(usuario.id)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      </>
    )}
  </div>
);
}

export default UserDelete
