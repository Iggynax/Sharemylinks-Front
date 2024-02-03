// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { newLinkService } from "../services";
import { AuthContext } from "../context/AuthContext";

const NewLink = () => {
  const [error, setError] = useState("");
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Llama al servicio para crear un nuevo enlace
      const NewLink = await newLinkService(user.token, url, title, description);

      // Limpiamos los campos de entrada y el estado de error si había alguno
      setUrl("");
      setTitle("");
      setDescription("");
      setError("");

      if (NewLink) alert("Enlace guardado correctamente");
    } catch (error) {
      // Si ocurre un error durante la solicitud, lo capturamos y mostramos en el estado de error
      setError(error.message);
    }
  };

  return (
    <>
      <h1>New link</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="url"> URL </label>
          <input
            type="text"
            id="url"
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="title"> Title </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="description"> Description </label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </fieldset>
        <button type="submit">Save</button>
        {error && <p>{error}</p>}
      </form>
    </>
  );
};

export default NewLink;
