import { useState } from "react";
import PassRecovery from "../components/PassRecovery";

function HomePage() {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => setShowModal((prev) => !prev);
  return (
    <section>
      <h1>HOME</h1>
      <p>Comparte y guarda tus Links favoritos</p>
      <div className="edit-profile-container">
        <a href="#" onClick={handleModal} className="edit-profile-link">
          ¿Olvidaste tu contraseña?, haz click AQUÍ.
        </a>
        {showModal && <PassRecovery handleModal={handleModal} />}
      </div>
    </section>
  );
}

export default HomePage;
