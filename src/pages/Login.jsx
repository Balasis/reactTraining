import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
    const { login } = useContext(AuthContext);

    const handleLogin = async () => {
        await login("test", "1234");
        window.location.href = "/profile";
    };

    return (
        <div style={{ padding: "2rem" }}>
            <h1>Login</h1>
            <button onClick={handleLogin}>Fake Login</button>
        </div>
    );
}
