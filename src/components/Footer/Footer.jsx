// components/Footer/Footer.jsx
import "@styles/Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-column">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/press">Press</a></li>
                        <li><a href="/careers">Careers</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/shipping">Shipping & Returns</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms of Service</a></li>
                        <li><a href="/cookies">Cookie Policy</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Contact</h4>
                    <ul>
                        <li>Email: <a href="mailto:support@eshop.com">support@eshop.com</a></li>
                        <li>Phone: +30 210 1234567</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                © {new Date().getFullYear()} AthensTechEshop. All rights reserved 🤔
            </div>
        </footer>
    );
}
