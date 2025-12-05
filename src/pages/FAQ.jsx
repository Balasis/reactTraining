import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import "@styles/FAQ.css";
import {useEffect, useState} from "react";
import Sidebar from "@components/Sidebar/Sidebar.jsx";

export default function FAQ() {



    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is this abomination of an eshop, and how does it work?",
            answer: "It is an online store for the latest computer hardware, gaming gear, and electronics." +
                " You can browse products, check details, and order directly from our platform."
        },
        {
            question: "Is this Eshop free to use?",
            answer: "Yes! Browsing and ordering from it is completely free. You only pay for the products you buy."
        },
        {
            question: "How do I create an account?",
            answer: "Simply press the right click of your mouse to the little profile icon which will get you to login/sign up page. " +
                " You can then start browsing and purchasing products."
        },
        {
            question: "Can I edit my profile information?",
            answer: "Yes, go to your account settings (profile) to update your info at any time."
        },
        {
            question: "How do I contact support?",
            answer: "You can email us at yadayadaAT@gmail.com."
        },
        {
            question: "How can I track my order?",
            answer: "You cant"
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const half = Math.ceil(faqs.length / 2);
    const leftFAQs = faqs.slice(0, half);
    const rightFAQs = faqs.slice(half);

    const renderFAQColumn = (columnFAQs, columnIndex) => (
        <div className="faq-column" key={columnIndex}>
            {columnFAQs.map((faq, i) => {
                const globalIndex = columnIndex * half + i;
                return (
                    <div className="faq-item" key={globalIndex}>
                        <div className="faq-question" onClick={() => toggleFAQ(globalIndex)}>
                            <span>{faq.question}</span>
                            <button>{openIndex === globalIndex ? "-" : "+"}</button>
                        </div>
                        <div className={`faq-answer ${openIndex === globalIndex ? "reveal" : ""}`}>
                            {faq.answer}
                        </div>
                    </div>
                );
            })}
        </div>
    );

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <div className="faqPage">
            <Header onOpenSidebar={() => setSidebarOpen(true)} />
            <Sidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />
            <main>
                <div className="faq-main-content">
                    <h1>FAQs</h1>
                    <section className="faq-section">
                        {renderFAQColumn(leftFAQs, 0)}
                        {renderFAQColumn(rightFAQs, 1)}
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
