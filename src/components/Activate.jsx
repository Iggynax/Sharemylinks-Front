import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";

function Activate() {
  const [activationSuccess, setActivationSuccess] = useState(false);
  const { activationCode } = useParams();

  useEffect(() => {
    const activationAccount = async () => {
      if (activationCode) {
        try {
          const response = await axios.put(
            `${
              import.meta.env.VITE_API_BACKEND
            }/users/validate/${activationCode}`
          );
          if (response.data.status === "Ok") setActivationSuccess(true);
          console.log(response.data);
        } catch (error) {
          console.log("Error completo:", error);
          if (error.response) {
            console.log("Respuesta del error:", error.response);
          }
        }
      }
    };

    activationAccount();
  }, [activationCode]);
  console.log("Estado de activación:", activationSuccess);
  if (!activationSuccess) {
    return (
      <h3>
        Para poder ingresar debes activar antes la verificación en tu email.
      </h3>
    );
  }
  return (
    <>
      <h2>Tu cuenta se ha activado!</h2>
      <p>
        <Link to="/login">Inicia sesión</Link>
      </p>
    </>
  );
}

export default Activate;
