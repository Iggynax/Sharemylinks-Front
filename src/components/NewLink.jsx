import React, { useContext, useState } from "react";
import { newLinkService } from "../services";
import { AuthContext } from "../context/AuthContext";
import Modal from "../components/Modal/Modal"; // Asegúrate de importar el componente Modal

const NewLink = () => {
    const [error, setError] = useState("");
    const [url, setUrl] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [showModal, setShowModal] = useState(false); // Nuevo estado para controlar la visibilidad del modal
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
            } else {
                setError("Hubo un problema al guardar el enlace.");
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <h1>New link</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="url"> URL </label>
                    <input type="text" 
                        id="url" 
                        name="url" 
                        value={url} 
                        onChange={(e) => setUrl(e.target.value)} 
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="title"> Title </label>
                    <input type="text" 
                        id="title" 
                        name="title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="description"> Description </label>
                    <input type="text" 
                        id="description" 
                        name="description" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        required />
                </fieldset>
                <button type="submit">Save</button>
                {error && <p>{error}</p>}
            </form>
          
            {showModal && (
                <Modal onClose={handleCloseModal}>
                    <p>Enlace guardado correctamente</p>
                    <button onClick={handleCloseModal}>OK</button> 
                </Modal>
            )}
        </>
    );
};

export default NewLink;
