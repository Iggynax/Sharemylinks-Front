import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { AuthContext } from "../context/AuthContext";

function VoteRating({ link_id, initialValue = 0, onVoteUpdate }) {
  const [value, setValue] = useState(initialValue);
  const [isReadOnly, setIsReadOnly] = useState(false);
  const { user } = useContext(AuthContext);

  // Función para enviar el voto al backend
  const sendVote = async (newValue) => {
    try {
      const token = user.token; // Obtén el token del contexto de autenticación

      const response = await fetch(
        `${import.meta.env.VITE_API_BACKEND}/links/${link_id}/votes`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Corrijo el formato del token
          },
          body: JSON.stringify({ value: newValue }),
        }
      );
      if (response.ok) {
        setValue(newValue);
        setIsReadOnly(true);
        onVoteUpdate();
      } else {
        console.error("Error al votar enlace");
      }
    } catch (error) {
      console.error("Error en la solicitud de votación:", error);
    }
  };

  const handleChange = (event, newValue) => {
    if (!isReadOnly) {
      sendVote(newValue);
    }
  };

  return (
    <Box>
      <h3>Vota este link: </h3>
      <Rating
        name={`link-rating-${link_id}`}
        value={value}
        onChange={handleChange}
        readOnly={isReadOnly}
      />
    </Box>
  );
}

export default VoteRating;
