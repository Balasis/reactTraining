import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import "@styles/Careers.css";
import Sidebar from "@components/Sidebar/Sidebar.jsx";
import {useEffect, useState} from "react";

export default function Careers() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
            <main>
                <div className="careers-main-content">
                    <h1>Careers</h1>

                    <p className="careers-intro">
                        We're always looking for passionate people who love technology
                        as much as we do. Even if we’re a small team, we're constantly
                        exploring new ways to grow and improve our shop.
                    </p>

                    <section className="careers-section">
                        <h2>Open Positions</h2>

                        <div className="careers-job">
                            <span className="careers-tag">Remote</span>
                            <h3>Junior Web Developer</h3>
                            <p>Help us improve our platform, build new features, and keep things running smoothly.</p>

                        </div>

                        <div className="careers-job">
                            <span className="careers-tag">Part-Time</span>
                            <h3>Customer Support Assistant</h3>
                            <p>Assist customers with orders, returns, and product questions.</p>

                        </div>

                        <div className="careers-job">
                            <span className="careers-tag">On-site</span>
                            <h3>Stock & Inventory Coordinator</h3>
                            <p>Manage incoming stock, prepare shipments, and keep our inventory updated.</p>

                        </div>
                    </section>

                    <section className="careers-apply">
                        <h2>How to Apply</h2>
                        <p>
                            Send your CV and a short message to
                            <a className="CarreersYadaEmail" href="mailto:yadayadaAT@gmail.com"> yadayadaAT@gmail.com</a>
                        </p>
                    </section>
                </div>
            </main>
    );
}
