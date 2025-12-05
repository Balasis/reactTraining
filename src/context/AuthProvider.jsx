import {useEffect, useState} from "react";
import { AuthContext } from "./AuthContext";
import API_BASE from "@apiBbase";

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // TODO: later replace with  /api/session , if backend returns user you
        //  set it otherwise if it returns error you set null
        const loggedUser = localStorage.getItem("user");
        if(loggedUser){
            setUser(JSON.parse(loggedUser));
        }
        setLoading(false);
    }, []);

    const login = async (username, password) => {
        try {
            const res = await fetch(`${API_BASE}/users`);
            const users = await res.json();
            //TODO: uncomment after dev, here we skip username and password to speed things up giving a predefined

            // const foundUser = users.find(u => u.username.toLowerCase() === username.toLowerCase());
            const foundUser = users.find(u => u.username.toLowerCase() === "john");
            if (!foundUser) throw new Error("User not found");
            // if (foundUser["password"] !== password){ throw new Error("Wrong password") }
            setUser(foundUser);
            localStorage.setItem("user",JSON.stringify(foundUser)); //TODO : remove in prod
            return true;
        } catch (err) {
            console.error(err);
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem("user"); //TODO : remove in prod
        setUser(null);

    };

    return (
        <AuthContext.Provider value={{ user, login, logout , loading}}>
            {children}
        </AuthContext.Provider>
    );
}