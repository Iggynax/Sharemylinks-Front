import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { passRecoveryService } from "../services";

import Modal from "./Modal/Modal";
import "./Modal/Modal.css";
//import "./PassRecovery.css";

function PassRecovery({ handleModal }) {
  const [emailForReset, setEmailForReset] = useState("");
  const [resetMessage, setResetMessage] = useState("");
  const navigate = useNavigate();

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      const success = await passRecoveryService(emailForReset);
      if (success) {
        setResetMessage(
          "Acabamos de enviarte un email para restablecer tu contraseña."
        );
        handleModal(); // Cierra el modal inmediatamente después de enviar el formulario
        navigate("/login"); // Opcional: Redirige a la página de login
      }
    } catch (error) {
      console.error(
        "Error al enviar solicitud de restablecimiento de contraseña:",
        error
      );
      setResetMessage(
        "Error en tu solicitud. Por favor, comprueba que tu email sea correcto."
      );
    }
  };

  return (
    <Modal>
      <div className="modal-backdrop">
        <form onSubmit={handlePasswordReset} className="modal-content">
          <div>
            <label htmlFor="email-reset">
              Introduce tu email para restablecer tu contraseña :
              <hr />
              <input
                required
                type="email"
                id="email-reset"
                value={emailForReset}
                onChange={(e) => setEmailForReset(e.target.value)}
                placeholder="Ingresa tu correo"
              />
            </label>
            <hr />
          </div>
          <button type="submit" className="btn-enviar">
            Enviar
          </button>
          <button onClick={handleModal}>Cancelar</button>
        </form>
        {resetMessage && <p>{resetMessage}</p>}
      </div>
    </Modal>
  );
}

export default PassRecovery;