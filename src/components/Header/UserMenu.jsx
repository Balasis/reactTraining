import '@styles/UserIcon.css';
import '@styles/UserMenu.css';
import userSvg from '@assets/svg/user.svg';
import { useContext, useState } from "react";
import { AuthContext } from "@context/AuthContext";
import { Link } from "react-router-dom";

export default function UserMenu() {
    const { user, logout } = useContext(AuthContext);
    const [open, setOpen] = useState(false);

    if (!user) {
        return (
            <div className="user-icon" >
                <Link to="/login" title="Login">
                    <img src={userSvg}  alt="Login" />
                </Link>
            </div>
        );
    }

    return (
        <div className="user-menu">
            <img
                src={user.profileImg}
                alt="User"
                onClick={() => setOpen(!open)}
                className="clickable"
            />
            {open && (
                <div className="menu-dropdown">
                    <Link to="/profile">Profile</Link>
                    <button onClick={logout}>Logout</button>
                </div>
            )}
        </div>
    );
}
