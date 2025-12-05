import { Link } from "react-router-dom";
import "@styles/Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-column">
                    <h4>Company</h4>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Support</h4>
                    <ul>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/shipping">Shipping & Returns</Link></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Legal</h4>
                    <ul>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                        <li><Link to="/terms">Terms of Service</Link></li>
                        <li><Link to="/cookies">Cookie Policy</Link></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Contact</h4>
                    <ul>
                        <li>Email: <Link to="mailto:yadayadaAT@gmail.com">yadayadaAT@gmail.com</Link></li>
                        <li>Phone: +30 210 0906669</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                © {new Date().getFullYear()} WannaBeEshop. All rights reserved 🤔
            </div>
        </footer>
    );
}
