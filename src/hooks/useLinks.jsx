import { useEffect, useState, useContext } from "react";
import { getLinksService } from "../services";
import { AuthContext } from "../context/AuthContext";

const useLinks = () => {
    const [links, setLinks] = useState([]);
    const [loading, setLoading] = useState (false);
    const [error, setError] = useState('');
    const {user} = useContext(AuthContext);

    useEffect(() => {
        const loadLinks = async () => {
            try {
                setLoading(true);

                const data = await getLinksService(user.token);
                setLinks(data);
                
            } catch (error) {
                setError(error.message);
            }finally{
                    setLoading(false);
                }
            };

        loadLinks();

    }, [user.token]);

    return {links, loading, error};

};

export default useLinks;


{/*se encarga de tener un estado donde se guardan los links que vienen de la API  y los exporta para usarlos en el componente
y nos informara si la peticion esta cargando o si la peticion tubo un error*/}