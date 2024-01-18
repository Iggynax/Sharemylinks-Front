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

  const json = await response.json();
  console.log("response:", response);
  console.log("json:", json);

  if (!response.ok) {
    const errorServ = await json.message;
    throw new Error(errorServ || "Error en la respuesta del servidor");
  }
  return json;
  //añadir validación email aquí retorno de email activacion
};
