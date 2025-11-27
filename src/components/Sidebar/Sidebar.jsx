import { useEffect, useState } from "react";
import "@styles/Sidebar.css";

export default function Sidebar({ isOpen, onClose }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/categories")
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
              <a href={cat.link}>
                <img src={cat.image} alt={cat.title} />
                <span>{cat.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
