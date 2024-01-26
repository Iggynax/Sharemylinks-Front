import { useState } from "react";
import { LoginUserService } from "../services";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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

    // eslint-disable-next-line no-empty
    try {
      // eslint-disable-next-line no-undef
      const json = await LoginUserService({
        email,
        password
      });

      console.log(json.message);

      if (json.ok) {
        setCredentials({
          email: "",
          password: "",
        });
      }

      navigate("/links");
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