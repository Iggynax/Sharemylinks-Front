import { useState } from "react";
import PassRecovery from "../components/PassRecovery";

function HomePage() {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => setShowModal((prev) => !prev);
  return (
    <>
      <section className="nav-container-modal">
        <a href="#" onClick={handleModal}>
          RECUPERA TU CONTRASEÑA
        </a>{" "}
        {showModal && <PassRecovery handleModal={handleModal} />}
      </section>
    </>
  );
}

export default HomePage;
