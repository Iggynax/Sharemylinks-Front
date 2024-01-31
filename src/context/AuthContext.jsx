/* eslint-disable react/prop-types */
import { createContext,useEffect, useState } from "react"

export const AuthContext = createContext();

export const AuthProviderComponent = ({children}) => {
    const [user,setUser] = useState(JSON.parse( localStorage.getItem("user")));

    //funcion que se ejecuta cada vez que cambia el token y se guarda el localstorage
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user])

     //esto hace que se cargue el usuario

    
     const login = (userData) => {
        setUser(userData);
     }

     const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
     };

    
     return (
    <AuthContext.Provider value={{user, login, logout }}> 
    {children} 
    </AuthContext.Provider>
    );
};