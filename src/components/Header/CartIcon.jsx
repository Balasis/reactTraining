import cartSvg from '@assets/svg/cart.svg';
import '@styles/CartIcon.css';

export default function CartIcon() {
    return (
        <div className="cart-icon">
            <img src={cartSvg} alt="Cart" />
        </div>
    );
}