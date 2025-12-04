import { useState } from "react";
import { AuthContext } from "./AuthContext";
import API_BASE from "@apiBbase";

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = async (username, password) => {
        try {
            const res = await fetch(`${API_BASE}/users`);
            const users = await res.json();

            const foundUser = users.find(u => u.name.toLowerCase() === username.toLowerCase());
            if (!foundUser) throw new Error("User not found");

            // optionally check password here if you add it in db.json
            setUser(foundUser); // set the context state
            return true;
        } catch (err) {
            console.error(err);
            return false;
        }
    };

    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}