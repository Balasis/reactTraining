import { useEffect, useRef, useState } from "react";
import ProductCard from "@components/ProductCard";
import "@styles/ProductsRow.css";
import API_BASE from "@apiBbase";

export default function ProductsRow({ title, filterFn }) {
    const [products, setProducts] = useState([]);
    const rowRef = useRef();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        fetch(`${API_BASE}/products`)
            .then(res => res.json())
            .then(data => {
                const filtered = filterFn ? filterFn(data) : data;
                setProducts(filtered);
            })
            .catch(err => console.log("Error loading products:", err));
    }, [filterFn]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.6 }
        );

        if (rowRef.current) observer.observe(rowRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="ProductsRow" ref={rowRef}>
            <h2 className="row-title">{title}</h2>
            <div className={`row-items ${visible ? "visible" : ""}`}>
                {products.map(p => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </div>
    );
}
