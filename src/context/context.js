import { createContext, useState, UseEffect } from "react";

export default AuthenticateContext = createContext();

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

    const logingUser = async (username, password) => {
        const response = await fetch("api",{
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

        
    }
}
