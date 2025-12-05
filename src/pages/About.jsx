// pages/About.jsx
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import "@styles/About.css";
import {useEffect} from "react";

export default function About() {
    useEffect(() => {
        const line = document.getElementById("AboutUsLine");
        const sections = document.querySelectorAll(".about-main-content section");
        if (line && sections.length) {
            const firstSectionTop = sections[0].offsetTop;
            const lastSectionBottom = sections[sections.length - 1].offsetTop
                + sections[sections.length - 1].offsetHeight;
            line.style.height = lastSectionBottom - firstSectionTop + "px";
        }
    }, []);

    return (
        <div className="aboutUsPage">
            <Header />

            <main>
                <div className="about-main-content">
                    <h1>About Us</h1>
                    <p id="AboutUsIntro">
                        Welcome to our Eshop, your one-stop online store <br/> for the latest computer hardware,
                        gaming gear, and electronics.
                        <span id="AboutUsLine"></span>
                    </p>

                    <section className="about-mission">
                        <h2>Our Mission</h2>
                        <p>
                            We aim to make tech accessible for everyone. Whether you’re a gamer, content creator,
                            or just upgrading your setup, we want you to find exactly what you need quickly and easily.

                        </p>
                    </section>

                    <section className="about-team">
                        <h2>Our Team</h2>
                        <p>
                            Our team is passionate about technology and committed to giving our customers the
                            best shopping experience possible.
                        </p>
                    </section>

                    <section className="about-contact">
                        <h2>Contact Us</h2>
                        <p>
                            Have questions? Reach out via <a href="mailto:yadayadaAT@gmail.com">yadayadaAT@gmail.com </a>
                             or check our FAQ page for common inquiries.
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
