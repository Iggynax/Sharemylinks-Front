import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { playClickSound } from "../services";

const Auth = () => {
  const { user, logout } = useContext(AuthContext);
console.log (user.email)
  return (
    <ul className="nav-logout">
      {user ? (
        <>
          <h4>¡Bienvenid@ {user.email} </h4>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              logout();
            }}
            
          >
            <span className="material-symbols-outlined"> Logout</span>

          </a>
        </>
      ) : (
        <>
          <ul className="nav-access">
            <li className="nodot">
              <Link to={"/login"} onClick={playClickSound}>
                <h1>Login </h1>
              </Link>
            </li>
            <li className="nodot">
              <Link to={"/register"} onClick={playClickSound}>
                <h1>Registro</h1>
              </Link>
            </li>
          </ul>
        </>
      )}
    </ul>
  );
};

export default Auth;
