// Header.jsx
import Logo from '@components/Header/Logo';
import SearchBar from '@components/Header/SearchBar';
import UserMenu from '@components/Header/UserMenu.jsx';
import CartIcon from '@components/Header/CartIcon';
import '@styles/Header.css';

export default function Header({ onOpenSidebar }) {
    return (
        <header className="header">
            <Logo />
            <SearchBar onOpenSidebar ={onOpenSidebar}/>
            <div className="header-right">
                <UserMenu />
                <CartIcon />
            </div>
        </header>
    );
}
