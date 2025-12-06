import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import FiltersPanel from "@components/FiltersPanel";
import ProductCard from "@components/ProductCard";
import API_BASE from "@apiBbase";
import "@styles/Category.css";

export default function Category() {
    const { id } = useParams();   // <-- GET CATEGORY ID FROM URL

    const [filters, setFilters] = useState({
        priceRange: [0, 5000],
        minVotes: 0,
        maxVotes: 5,
    });

    const [products, setProducts] = useState([]);
    const debounceTimeout = useRef(null);

    useEffect(() => {
        if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

        debounceTimeout.current = setTimeout(async () => {
            try {
                const params = new URLSearchParams({
                    minPrice: filters.priceRange[0],
                    maxPrice: filters.priceRange[1],
                    minVotes: filters.minVotes,
                    maxVotes: filters.maxVotes,
                });

                const url = `${API_BASE}/products?${params.toString()}`;
                // const url = `${API_BASE}/categories/${id}/products?${params.toString()}`;
                const res = await fetch(url);
                const data = await res.json();

                setProducts(data);
            } catch (err) {
                console.error(err);
                setProducts([]);
            }
        }, 600);

        return () => clearTimeout(debounceTimeout.current);
    }, [filters, id]);

    return (
        <main className="category-main">
            <FiltersPanel filters={filters} setFilters={setFilters} />

            <section className="products-container">
                {products.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </section>
        </main>
    );
}
