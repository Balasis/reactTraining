import { Link } from 'react-router-dom';
import '@styles/Logo.css';

export default function Logo() {
    return (
        <div className="logo">
            <Link to="/">
                <img src="/static_frontend/logo.png" alt="Shop Logo" />
            </Link>
        </div>
    );
}
