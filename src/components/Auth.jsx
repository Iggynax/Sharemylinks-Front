import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Auth = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <ul>
      {
        user ? (
          <>
          <span>¡Bienvenid@ {user.email}! </span>
<a href="#" onClick={(e)=>{
  e.preventDefault();
  logout();
}}>Logout</a>
</>

        ):(
          <>
          
      <li>
        <Link to={"/login"}>Login</Link>
      </li>
      <li>
        <Link to={"/register"}>Register</Link>
      </li>
          </>

        )
      }
    </ul>
  );
};

export default Auth;
