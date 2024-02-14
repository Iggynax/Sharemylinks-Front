import { useState } from "react";
import { registerUserService } from "../services";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal/Modal";

const RegisterPage = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

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

    try {
      const json = await registerUserService({
        email: credentials.email,
        password: credentials.password,
      });

      if (json.status === "ok") {
        setShowModal(true);
        setCredentials({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      return error.message;
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate("/login");
  };

  return (
    <>
      <h2 className="nav-login">REGISTRO</h2>
      <form className="nav-access-login" onSubmit={handleSubmit}>
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          id="email"
          className="input-form"
          name="email"
          placeholder="Tu email"
          required
          onChange={handleChange}
        />

        <label htmlFor="password">Password : </label>
        <input
          type="password"
          id="password"
          className="input-form"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
        />

        <br />
        <button className="btn">Aceptar</button>
        {/*{error ? <p>{error}</p> : null}*/}
      </form>

      {showModal && (
        <Modal onClose={handleModalClose}>
          <p>
            {" "}
            Registro exitoso. Por favor, activa tu cuenta a través del correo
            electrónico que te enviamos.
          </p>
          <button onClick={handleModalClose}>Ok</button>
        </Modal>
      )}
    </>
  );
};

export default RegisterPage;
