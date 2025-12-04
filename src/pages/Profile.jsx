import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Profile() {
    const { user, logout } = useContext(AuthContext);

    return (
        <div style={{ padding: "2rem" }}>
            <h1>Profile</h1>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <button onClick={logout}>Logout</button>
        </div>
    );
}
