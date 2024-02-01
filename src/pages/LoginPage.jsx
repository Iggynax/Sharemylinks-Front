import { useContext, useState } from "react";
import { LoginUserService } from "../services";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = credentials;

    if (!email || !password) {
      setError('Completa todo los campos');
      return;
    }

    try {
      const dataUser = await LoginUserService({
        email,
        password
      });
      
      if (dataUser.token) { // Verificar si el token existe
        setCredentials({
          email: "",
          password: "",
        });
       
        login(dataUser);
       
        navigate("/links");
      } else {
        setError('Token no válido'); // error en el token
      }
    } catch (error) {
      setError(error.message);
    }
    };

  return (
    <>
      <h1>LOGIN</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            className="input-form"
            name="email"
            placeholder="Your email here"
            required
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            className="input-form"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
          />
        </fieldset>
        <br />
        <button className="boton-bonito">Entrar</button>
        {error ? <p>{error}</p> : null}
      </form>
    </>
  );
};

export default LoginPage;