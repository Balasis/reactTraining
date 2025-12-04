import { useState } from "react";
import { AuthContext } from "./AuthContext";

// optional initial user
// null for guest
export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    // Example: fake login function
    const login = (fakeUser) => {
        setUser(fakeUser); // triggered via button/callback
    };

    // Example: logout
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
