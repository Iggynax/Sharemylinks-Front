import React, { useContext, useState } from "react";
import { getLinksService, newLinkService } from "../services";
import { AuthContext } from "../context/AuthContext";
import Modal from "../components/Modal/Modal";
import { playClickBeep } from "../services";

const NewLink = ({ setLinks }) => {
  const [error, setError] = useState("");
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(false); // Nuevo estado para controlar la visibilidad del formulario
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newLink = await newLinkService(user.token, url, title, description);

      setUrl("");
      setTitle("");
      setDescription("");
      setError("");

      if (newLink) {
        setShowModal(true);
        const data = await getLinksService(user.token);
        setLinks(data);
      } else {
        setError("No se pudo guardar el enlace");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      {showForm ? ( 
        <form className="nav-new-link" onSubmit={handleSubmit}>
          <label htmlFor="url">URL:</label>
          <input
            type="text"
            id="url"
            className="input-new"
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
          <label htmlFor="title">Titulo:</label>
          <input
            type="text"
            id="title"
            className="input-new"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label htmlFor="description">Descripción:</label>
          <input
            type="text"
            id="description"
            className="input-new"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <button className="btn" onClick={playClickBeep}>
            Guardar
          </button>
          <button className="btn" type="button" onClick={toggleForm}>
            Cancelar
          </button>
          {error && <p>{error}</p>}
        </form>
      ) : ( 
        <button className="nav-new" onClick={toggleForm}>
          <span className="material-symbols-outlined">Guarda add </span>  
        </button>
      )}

      {showModal && (
        <div className="register-mail-modal">
          <Modal onClose={handleCloseModal} className="register-content-modal">
            <div className="register-content-modal">
              <p className="register-content-modal">
                Enlace guardado correctamente
              </p>
              <button onClick={handleCloseModal}>OK</button>
            </div>
          </Modal>
        </div>
      )}
    </>
  );
};

export default NewLink;
