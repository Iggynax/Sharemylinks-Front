// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { newLinkService } from "../services";
import { AuthContext } from "../context/AuthContext";
import Modal from "../components/Modal/Modal";

const NewLink = () => {
    const [error, setError] = useState("");
    const [url, setUrl] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [showModal, setShowModal] = useState(false); 
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
                setError("No se pudo guardar el enlace");
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
            <h1> NEW LINK
                 <link rel="stylesheet" href="" /> <link rel="stylesheet" href="" /></h1>
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
                    <label htmlFor="title"> Titulo </label>
                    <input type="text" 
                        id="title" 
                        name="title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="description"> Descripción </label>
                    <input type="text" 
                        id="description" 
                        name="description" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        required />
                </fieldset>
                <button type="submit">Guardar</button>
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
