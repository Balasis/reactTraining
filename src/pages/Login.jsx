import { useContext, useState } from "react";
import { AuthContext } from "@context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        const success = await login(username, password);
        if (success) navigate("/"); // homepage for now
        else setError("Login failed");
    };

    return (
        <div style={{ padding: "2rem" }}>
            <h1>Login</h1>
            <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
            <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" />
            <button onClick={handleLogin}>Login</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}
