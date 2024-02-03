import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal/Modal";
import { AuthContext } from "../context/AuthContext";

function ChangePassPage() {
  const [recoverPassCode, setRecoverPassCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handlePasswordChange = async () => {
    try {
      const token = "user.token";
      const response = await fetch(
        `${import.meta.env.VITE_API_BACKEND}/users/change-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ code: recoverPassCode, newPassword }),
        }
      );

      if (response.ok) {
        setShowModal(true); // Abre el modal si la contraseña se cambia con éxito
        // Puedes ajustar el mensaje del modal según tus necesidades
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
    <div>
      <h2>Recuperación de Contraseña</h2>
      <p>Introduce el código de recuperación y tu nueva contraseña:</p>
      <input
        type="text"
        placeholder="Código de recuperación"
        value={recoverPassCode}
        onChange={(e) => setRecoverPassCode(e.target.value)}
      />
      <input
        type="password"
        placeholder="Nueva contraseña"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={handlePasswordChange}>Cambiar Contraseña</button>
      <p>{message}</p>
      {showModal && (
        <Modal>
          <h2>Contraseña cambiada con éxito</h2>

          <button onClick={handleModalClose}>OK</button>
        </Modal>
      )}
    </div>
  );
}

export default ChangePassPage;