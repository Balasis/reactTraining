import cartSvg from '@assets/svg/cart.svg';
import { Link } from 'react-router-dom';
import '@styles/CartIcon.css';

export default function CartIcon() {
    return (
        <div className="cart-icon">
            <Link to="/cart" title="Cart">
            <img src={cartSvg} alt="Cart" />
            </Link>
        </div>
    );
}