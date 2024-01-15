export const registerUserService = async ({ email, password }) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_BACKEND}/users/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  );
  if (response.ok) {
    const json = await response.json();
    return json;
  } else {
    const errorServ = await response.message;
    throw new Error(errorServ || "Error en la respuesta del servidor");
  }

  //añadir validación email aquí retorno de email activacion
};
