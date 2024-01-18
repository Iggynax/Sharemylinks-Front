import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";

function Activate() {
  const [activationSuccess, setActivationSucces] = useState(false);
  const { activationCode } = useParams();

  useEffect(() => {
    const activationAccount = async () => {
      if (activationCode) {
        try {
          const response = await axios.put(`/activate/${activationCode}`);
          if (response.data.status === "ok") setActivationSucces(true);
          console.log(response.data);
        } catch (error) {
          console.log();
        }
      }
    };

    activationAccount();
  }, [activationCode]);
  if (!activationSuccess) {
    return <h3>ACTIVANDO CUENTA...</h3>;
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
