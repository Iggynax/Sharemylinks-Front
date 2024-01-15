import { Link } from "react-router-dom";
const Auth = () => {
  return (
    <ul>
      <li>
        <Link to={"/login"}>Login</Link>
      </li>
      <li>
        <Link to={"/register"}>Register</Link>
      </li>
    </ul>
  );
};

export default Auth;
