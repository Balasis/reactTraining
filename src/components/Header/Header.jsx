// Header.jsx
import Logo from '@components/Header/Logo';
import SearchBar from '@components/Header/SearchBar';
import UserIcon from '@components/Header/UserIcon';
import CartIcon from '@components/Header/CartIcon';
import '@styles/Header.css';

export default function Header() {
    return (
        <header className="header">
            <Logo />
            <SearchBar />
            <div className="header-right">
                <UserIcon />
                <CartIcon />
            </div>
        </header>
    );
}
