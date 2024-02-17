import { useState } from "react";
import { registerUserService } from "../services";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal/Modal";
import { playClickBeep } from "../services";
import "./RegisterPage.css";

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
        <button className="btn" onClick={playClickBeep}>
          Aceptar
        </button>
        {/*{error ? <p>{error}</p> : null}*/}
      </form>

      {showModal && (
        <div className="register-mail-modal">
          <Modal onClose={handleModalClose} className="register-content-modal">
            <div className="register-content-modal">
              <p className="register-content-modal">
                {" "}
                Registro exitoso. Por favor, activa tu cuenta a través del
                correo electrónico que te enviamos.
              </p>
              <button className="btn-register" onClick={handleModalClose}>
                Ok
              </button>
            </div>
          </Modal>
        </div>
      )}
    </>
  );
};

export default RegisterPage;
