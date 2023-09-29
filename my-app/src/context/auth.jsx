import { createContext, useEffect, useState } from "react";
import { api } from "../services/api"

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const loadingStoreData = async () => {
            const storageUser = localStorage.getItem("@Auth:user");
            const storagePassword = localStorage.getItem("@Auth:password");
    
            if(storageUser && storagePassword) {
                setUser(storageUser)
            }
        };
        loadingStoreData();
    }, []);

    

    const signIn = async (email, password) => {
        const response = await api.post("/auth", {
            email,
            password,
        });

        if(response.data.error) {
            alert(response.data.error);
        }else {
            setUser(response.data.user);
            api.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${response.data.password}`
            localStorage.setItem("@Auth:password", response.data.password); 
            localStorage.setItem("@Auth:user", response.data.user);    
        }

    }

    return (
        <AuthContext.Provider 
        value={{
            user,
            signed: !!user,
            signIn,

        }}>
            {children}
        </AuthContext.Provider>
    );
}