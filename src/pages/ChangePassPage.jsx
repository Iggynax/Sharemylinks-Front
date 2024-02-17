import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUserService } from "../services";
import { playClickInit } from "../services";
import Modal from "../components/Modal/Modal";
import "./ChangePassPage.css";

function ChangePassPage() {
  const [recoverPassCode, setRecoverPassCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BACKEND}/users/change-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, code: recoverPassCode, newPassword }),
        }
      );

      if (response.ok) {
        setShowModal(true); // Abre el modal si la contraseña se cambia con éxito
      } else {
        const data = await response.json();
        setMessage(
          data.error || "Error en tu cambio de contraseña, vuelve a intentarlo."
        );
      }
    } catch (error) {
      console.error("Lo sentimos ha ocurrido un error:", error);
      setMessage(
        "Error al cambiar la contraseña. Por favor, inténtalo de nuevo."
      );
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate("/login");
  };

  return (
    <>
      <h2 className="nav-recovery">
        Recuperación de Contraseña
        <br />
        Share My Links
      </h2>
      <form className="nav-access-recovery" onSubmit={handlePasswordChange}>
        <p>Introduce tu email, código de recuperación y tu nueva contraseña:</p>
        <label htmlFor="email">Email : </label>

        <input
          type="email"
          placeholder="Correo electrónico"
          className="input-form"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="email">Código de recuperación : </label>

        <input
          type="text"
          placeholder="Introduce el código del email"
          className="input-form"
          value={recoverPassCode}
          onChange={(e) => setRecoverPassCode(e.target.value)}
        />
        <label htmlFor="password">Nueva contraseña : </label>

        <input
          type="password"
          placeholder="Nueva contraseña"
          className="input-form"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button type="submit" className="btn">
          Cambiar Contraseña
        </button>
        <p>{message}</p>
      </form>
      {showModal && (
        <div className="register-mail-modal">
          <Modal onClose={handleModalClose} className="register-content-modal">
            <div className="register-content-modal">
              <p className="register-content-modal">
                {" "}
                Contraseña cambiada con éxito!!
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
}

export default ChangePassPage;
