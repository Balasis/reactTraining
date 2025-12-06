import "@styles/Contact.css";
import {useEffect} from "react";

export default function Contact() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
            <main>
                <div className="contact-main-content">
                    <div className="infoAndMapWrapper">
                    <div className="contact-info">
                        <h1>Contact Us</h1>
                        <p>
                            Have any questions or need assistance?<br/>
                            Reach out to us!
                        </p>
                        <p>
                            <strong>Email:</strong> <a href="mailto:yadayadaAT@gmail.com">yadayadaAT@gmail.com</a>
                        </p>
                        <p>
                            <strong>Phone:</strong> <a href="tel:+302101234567">+302101234567</a>
                        </p>
                    </div>

                    <div className="contact-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.389407088661!2d23.764136576408088!3d37.991376599652604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a19f21caabf9ab%3A0xaafbbea87409724!2sAthens%20Tech!5e0!3m2!1sen!2sgr!4v1764962176581!5m2!1sen!2sgr"
                            width="100%"
                            height="100%"
                            style={{border:0}}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    </div>
                </div>
            </main>
    );
}
