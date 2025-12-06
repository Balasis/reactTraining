import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "@styles/Sidebar.css";
import API_BASE from "@apiBbase";

export default function Sidebar({ isOpen, onClose }) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`${API_BASE}/categories`)
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.log("Error loading categories:", err));
    }, []);

    return (
        <>
            <div
                className={`overlay ${isOpen ? "show" : ""}`}
                onClick={onClose}
            ></div>

            <div className={`sidebar ${isOpen ? "open" : ""}`}>
                <button className="closeBtn" onClick={onClose}>✖</button>

                <ul>
                    {categories.map(cat => (
                        <li key={cat.id}>
                            <Link to={`/category/${cat.id}`} onClick={onClose}>
                                <img src={cat.image} alt={cat.title} />
                                <span>{cat.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
