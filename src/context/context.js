import { createContext, useState, UseEffect, useEffect } from "react";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt_decode";


const AuthenticateContext = createContext();

export default AuthenticateContext;

export const AuthProvider = ({ children }) =>{
    const [authTokens, setAuthTokens ] = useState(()=> 
        localStorage.getItem("authTokens") 
            ? JSON.parse(localStorage.getItem("authTokens"))
            : null
    );

    const [user , setUser ] = useState(()=>
        localStorage.getItem("authTokens")
            ? jwt_decode(localStorage.getItem("authTokens"))
            : null
    );

    const [ loading, setLoading ] = useState(true);

    const history = useHistory();

    const loging = async (username, password) => {
        const response = await fetch("login api",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        });
        const data = await response.json();

        if (response.status === 200){
            setAuthTokens(data);
            setUser(jwt_decode(data.access));
            localStorage.setItem("authTokens",JSON.stringify(data));
            history.push("/")
        }
        else{
            alert("Something went wrong!");
        }
    };
 
    const register = async(username, password, password2) =>{
        const response = await fetch("register api",{
            merthod:"POST",
            headers:{
                "context-Type":"application/json"
            },
            body: JSON.stringify({
                username,
                password,
                password2
            })
        });

        if (response.status === 201) {
            history.push("/login");
        }
        else{
            alert("Something went wrong!");
        }
    };

    const logout = ()=>{
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem("authTokens");
        history.push("/")
    };

    const contextData = {
        user,
        setUser,
        authTokens,
        setAuthTokens,
        register,
        loging,
        logout
    };

    useEffect(()=>{
        if (authTokens){
            setUser(jwt_decode(authTokens.access));
        }
        setLoading(false);
    },[authTokens, loading]);

    return(
        <AuthenticateContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthenticateContext.Provider>
    )
};
