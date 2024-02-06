import { useEffect, useState, useContext, useCallback } from "react";
import { getLinksService } from "../services";
import { AuthContext } from "../context/AuthContext";

const useLinks = () => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);

  const loadLinks = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getLinksService(user.token);
      //obtiene los links del backend usando el token del usuario
      setLinks(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [user.token]);

  useEffect(() => {
    loadLinks();
  }, [loadLinks]);

  return { links, loading, error, reloadLinks: loadLinks };
  //función loadLinks renombrada como reloadLinks, permite una recarga de los links.
};

export default useLinks;

{
  /*se encarga de tener un estado donde se guardan los links que vienen de la API  y los exporta para usarlos en el componente
y nos informara si la peticion esta cargando o si la peticion tubo un error*/
}
