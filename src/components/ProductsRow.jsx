import { useEffect, useRef, useState } from "react";
import ProductCard from "@components/ProductCard";
import "@styles/ProductsRow.css";
import API_BASE from "@apiBbase";

export default function ProductsRow({ title, type, limit = 6, priceCap }) {
    const [products, setProducts] = useState([]);
    const rowRef = useRef();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;

        async function load() {
            try {
                const params = new URLSearchParams();

                switch (type) {
                    case "discounted":
                        params.append("discount", "true");
                        break;
                    case "top-rated":
                        params.append("sort", "rating_desc");
                        break;
                    case "price-less-than":
                        if (priceCap == null) throw new Error("priceCap is required");
                        params.append("maxPrice", priceCap);
                        break;
                    case "random":
                        params.append("random", "true");
                        break;
                    default:
                        break;
                }

                const res = await fetch(`${API_BASE}/products?${params.toString()}`, { signal });
                let data = await res.json();

                if (limit != null) data = data.slice(0, limit);

                setProducts(data);
            } catch (err) {
                if (err.name !== "AbortError") console.error("ProductsRow fetch error:", err);
            }
        }

        load();
        return () => controller.abort();
    }, [type, limit, priceCap]);

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
        <div className={`ProductsRow ${visible ? "visible" : ""}`} ref={rowRef}>
            <h2 className="row-title">{title}</h2>
            <div className="row-items">
                {products.map(p => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </div>
    );
}
