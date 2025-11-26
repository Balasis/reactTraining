import logoImg from '@assets/logo.png'; // replace with your logo file
import '@styles/Logo.css';

export default function Logo() {
    return (
        <div className="logo">
            <img src={logoImg} alt="Shop Logo" />
        </div>
    );
}