/* eslint-disable react-refresh/only-export-components */
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

  if (!response.ok) {
    const errorServ = await json.message;
    throw new Error(errorServ || "Error en la respuesta del servidor");
  }
  return json;
};

export const LoginUserService = async ({ email, password }) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_BACKEND}/users/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  );

  const json = await response.json();
  // console.log("token:", json.data.token);

  if (!response.ok) {
    const errorServ = await json.message;
    throw new Error(errorServ || "Error en la respuesta del servidor");
  }

  return json.data;
};

export const passRecoveryService = async (email) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BACKEND}/users/password/recover`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    if (!response.ok) {
      const jsonResponse = await response.json();
      const errorMessage =
        jsonResponse.message || "Error en la respuesta del servidor";
      throw new Error(errorMessage);
    }

    return true; // Indica que la solicitud fue exitosa
  } catch (error) {
    console.error("Error en passRecoveryService:", error);
    return false; // Indica que hubo un error
  }
};

{
  /*función que se encarga de hacer peticón al backend*/
}

export const getLinksService = async (token) => {
  const response = await fetch(`${import.meta.env.VITE_API_BACKEND}/links`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await response.json();

  if (!response.ok) {
    const errorServ = await json.message;
    throw new Error(errorServ || "Error en la respuesta del servidor");
  }
  return json.data;
};

export const newLinkService = async (token, url, title, description) => {
  const response = await fetch(`${import.meta.env.VITE_API_BACKEND}/links`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      url,
      title,
      description,
    }),
  });
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};
