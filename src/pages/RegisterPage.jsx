import { useState } from "react";
import { registerUserService } from "../services";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal/Modal";

const RegisterPage = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [showModal, setShowModal] = useState(false);

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

    // eslint-disable-next-line no-empty
    try {
      const json = await registerUserService({
        email: credentials.email,
        password: credentials.password,
      });
      console.log(json.message);
      if (json.ok) {
        setShowModal(true);
        setCredentials({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate("/login");
  };

  return (
    <>
      <h1>REGISTER</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email here"
            required
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
          />
        </fieldset>
        <button>Create Account</button>
        {/*{error ? <p>{error}</p> : null}}*/}
      </form>
      {showModal && (
        <Modal onClose={handleModalClose}>
          <p>
            {" "}
            Registro exitoso. Por favor activa tu cuenta a través del correo
            electrónico que te enviamos.
          </p>
          <button onClick={handleModalClose}>Ok</button>
        </Modal>
      )}
    </>
  );
};

export default RegisterPage;
