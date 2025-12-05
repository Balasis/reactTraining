import { useState, useEffect, useRef } from 'react';
import '@styles/SearchBar.css';
import { Link } from "react-router-dom";

export default function SearchBar({ onOpenSidebar }) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const searchWrapper = useRef(null);
    const placeholderRef = useRef(null);

    useEffect(() => {
        const daMessages = [
            "I clicked the cart, my hopes were high...",
            "Then saw the price, I wanted to cry...",
            "The checkout blinked, a fearsome sight...",
            "My wallet gasped, it took to flight...",
            "Yet still I stayed, scrolling all night!!!"
        ];

        let textIndex = 0;
        let charIndex = 0;
        let deleting = false;

        const typeEffect = () => {
            const current = daMessages[textIndex];
            let delay = deleting ? 25 : 75;

            if (!deleting && charIndex === current.length) {
                delay = 1500;
                deleting = true;
            } else if (deleting && charIndex === 0) {
                deleting = false;
                textIndex = (textIndex + 1) % daMessages.length;
            }

            if (placeholderRef.current) {
                const cursor = charIndex % 2 === 0 ? "|" : "";
                placeholderRef.current.placeholder =
                    current.slice(0, charIndex) + cursor;
            }

            if (!deleting) charIndex++;
            else charIndex--;

            setTimeout(typeEffect, delay);
        };

        typeEffect();

    }, []);

    useEffect(() => {
        if (!query.trim()) {
            const id = setTimeout(() => setResults([]), 0);
            return () => clearTimeout(id);
        }

        const timer = setTimeout(async () => {
            try {
                const products = await (await fetch(`http://localhost:8080/products?q=${query}`)).json();
                const categories = await (await fetch(`http://localhost:8080/categories?q=${query}`)).json();
                setResults(
                    [
                        ...products.map(p => ({ ...p, type: 'product' })),
                        ...categories.map(c => ({ ...c, type: 'category' }))
                    ]
                );
            } catch { setResults([]); }
        }, 300);
        return () => clearTimeout(timer);
    }, [query]);

    useEffect(() => {
        function handleClickOutside(e) {
            if (searchWrapper.current && !searchWrapper.current.contains(e.target)) setShowPopup(false);
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="search-bar-wrapper" ref={searchWrapper} style={{ position: "relative", flexGrow: 1 }}>
        <div className="search-bar">
            <button className="search-button" onClick={() => console.log("Search clicked:", query)}>🔍</button>
            <input ref={placeholderRef} size="1" type="text" value={query} onChange={e => setQuery(e.target.value)} onFocus={() => setShowPopup(true)} />
            <button className="category-btn" onClick={onOpenSidebar}>Categories</button>
        </div>

        {showPopup && results.length > 0 && (
            <div className="search-popup">
                {results.map(item => {
                    let to, label;

                    if (item.type === 'product') {
                        to = `/product/${item.id}`;
                        label = `${item.name}`;
                    } else {
                        to = `/category/${item.title.toLowerCase()}`;
                        label = `📁 ${item.title}`;
                    }

                    return (
                        <div key={`${item.type}-${item.id}`} className="search-item">
                            <Link to={to}>{label}</Link>
                        </div>
                    );
                })}
            </div>
        )}
    </div>);
}
